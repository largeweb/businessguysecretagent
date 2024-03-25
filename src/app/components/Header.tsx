// src/app/components/Header.tsx
import Link from "next/link";
import { Session } from "next-auth";

interface HeaderProps {
  session: Session | null;
}

export default function Header({ session }: HeaderProps) {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          BusinessGuySecretAgent
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-gray-200">
                Home
              </Link>
            </li>
            {session && (
              <li>
                <Link href="/dashboard" className="hover:text-gray-200">
                  Dashboard
                </Link>
              </li>
            )}
          </ul>
        </nav>
        <div>
          {session ? (
            <Link
              href="/api/auth/signout"
              className="px-4 py-2 rounded bg-white text-indigo-600 font-bold hover:bg-gray-200 transition duration-200"
            >
              Sign Out
            </Link>
          ) : (
            <Link
              href="/api/auth/signin"
              className="px-4 py-2 rounded bg-white text-indigo-600 font-bold hover:bg-gray-200 transition duration-200"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
