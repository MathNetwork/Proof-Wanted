import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Proof Wanted",
  description: "Open problems and theorems awaiting Lean 4 formalization",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#0f0f17] text-gray-200 antialiased">
        <nav className="sticky top-0 z-50 border-b border-[#2a2a4a] bg-[#0f0f17]/90 backdrop-blur-sm">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-xl font-bold text-white hover:text-purple-300">
              Proof Wanted
            </Link>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link href="/" className="hover:text-white">
                Problems
              </Link>
              <Link href="/about" className="hover:text-white">
                Contributing
              </Link>
              <a
                href="https://github.com/MathNetwork/Proof-Wanted"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                GitHub
              </a>
            </div>
          </div>
        </nav>
        <main className="mx-auto max-w-6xl px-6 py-10">{children}</main>
        <footer className="border-t border-[#2a2a4a] py-8 text-center text-sm text-gray-500">
          <div className="mx-auto max-w-6xl px-6">
            Proof Wanted &mdash; A community registry of formalization candidates for{" "}
            <a
              href="https://leanprover-community.github.io/"
              className="text-purple-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lean 4 + Mathlib
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
