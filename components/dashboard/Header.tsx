import { auth } from '@/lib/auth';

export default async function Header() {
    const session = await auth();

    return (
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm dark:border-gray-800 dark:bg-gray-950 sm:gap-x-6 sm:px-6 lg:px-8">
            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                <div className="flex flex-1"></div>
                <div className="flex items-center gap-x-4 lg:gap-x-6">
                    <div className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                        <span className="sr-only">Your profile</span>
                        <span aria-hidden="true">{session?.user?.email}</span>
                        {session?.user?.image && (
                            <img
                                className="h-8 w-8 rounded-full bg-gray-50"
                                src={session.user.image}
                                alt=""
                            />
                        )}
                        {!session?.user?.image && (
                            <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                                {session?.user?.name?.[0]?.toUpperCase() || session?.user?.email?.[0]?.toUpperCase()}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
