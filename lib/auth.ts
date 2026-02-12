import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/prisma"
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import { z } from "zod"

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1, "Password is required"),
})

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: { strategy: "jwt" },
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.role = user.role
                token.id = user.id
            }
            return token
        },
        async session({ session, token }) {
            if (token && session.user) {
                session.user.role = token.role as "USER" | "ADMIN"
                session.user.id = token.id as string
            }
            return session
        },
    },
    providers: [
        Credentials({
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const parsedCredentials = loginSchema.safeParse(credentials)

                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data
                    const user = await prisma.user.findUnique({
                        where: { email },
                    })

                    if (!user) return null

                    if (!user.password) return null

                    const passwordsMatch = await bcrypt.compare(password, user.password)
                    if (passwordsMatch) return user
                }

                return null
            },
        }),
    ],
})
