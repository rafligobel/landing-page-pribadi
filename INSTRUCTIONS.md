# Dashboard Setup & Usage

You have successfully set up the admin dashboard for your landing page.

## Data Access
- **Login URL**: `/login`
- **Dashboard URL**: `/dashboard`

## Default Admin Credentials
- **Email**: `admin@example.com`
- **Password**: `admin123`

Please change the password or create a new admin user after logging in for security.

## Features
- Manage Blog Posts (`/dashboard/posts`)
- Manage Portfolio Projects (`/dashboard/projects`)
- Secure Authentication via NextAuth
- Responsive Dashboard Layout

## Troubleshooting
If you encounter database issues, ensure your local Postgres server is running and run:
```bash
npx prisma db push
node prisma/seed.js
```
