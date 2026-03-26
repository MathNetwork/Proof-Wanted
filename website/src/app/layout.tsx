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
    <html lang="en">
      <body className="min-h-screen bg-[#0f0f17] text-[#e8e8e8] antialiased">
        <nav className="sticky top-0 z-50 border-b border-[#2a2a3a] bg-[#0f0f17]/90 backdrop-blur-sm">
          <div className="mx-auto flex max-w-[900px] items-center justify-between px-6 py-4">
            <Link
              href="/"
              className="text-lg font-semibold text-white hover:text-[#93c5fd]"
            >
              Proof Wanted
            </Link>
            <div className="flex items-center gap-6 text-sm text-[#888899]">
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
        <main className="mx-auto max-w-[900px] px-6 py-10">{children}</main>
        <footer className="border-t border-[#2a2a3a] py-8 text-center text-sm text-[#888899]">
          Proof Wanted — formalization candidates for{" "}
          <a
            href="https://leanprover-community.github.io/"
            className="text-[#93c5fd] hover:underline"
          >
            Lean 4 + Mathlib
          </a>
        </footer>
      </body>
    </html>
  );
}
