"use client";

import Link from "next/link";
import { ArrowRightIcon, Menu, X } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="z-40 font-semibold text-lg md:text-xl">
            DocuBot
          </Link>

          {/* Desktop Links */}
          <div className="hidden sm:flex items-center space-x-4">
            <Link
              href="/pricing"
              className={buttonVariants({ variant: "ghost", size: "sm" })}
            >
              Pricing
            </Link>
            <Link
              href="/dashboard"
              className={buttonVariants({ variant: "ghost", size: "sm" })}
            >
              Dashboard
            </Link>
            <Button
              className={buttonVariants({ variant: "ghost", size: "sm" })}
            >
              Sign In
            </Button>
            <Button className={buttonVariants({ size: "sm" })}>
              Get Started <ArrowRightIcon className="ml-1.5 size-5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="sm:hidden mt-2 space-y-2">
            <Link
              href="/pricing"
              className="block rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Pricing
            </Link>
            <Link
              href="/dashboard"
              className="block rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Dashboard
            </Link>
            <Link
              href="/login"
              className="block rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="block rounded-md px-4 py-2 font-semibold text-blue-600 hover:bg-gray-100"
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
