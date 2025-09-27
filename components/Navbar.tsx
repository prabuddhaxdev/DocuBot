import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { buttonVariants } from "./ui/button";
import { ArrowRightIcon } from "lucide-react";
import { MaxWidthWrapper } from "./MaxWidthWrapper";

// ✅ Server Component Navbar
export const Navbar = async () => {
  const { getUser } = await getKindeServerSession();
  const user = await getUser();

  return (
    <nav className="sticky inset-x-0 top-0 z-30 h-14 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper className="flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="z-40 font-semibold text-lg">
          DocuBot
        </Link>

        {/* Mobile Navigation */}
        {/* <MobileNav isAuth={!!user} /> */}

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-4 sm:flex">
          {!user ? (
            <>
              {/* Pricing link */}
              <Link
                href="/pricing"
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })}
              >
                Pricing
              </Link>

              {/* Sign In Link */}
              <LoginLink
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })}
              >
                Sign In
              </LoginLink>

              {/* Register link */}
              <RegisterLink
                className={buttonVariants({
                  size: "sm",
                })}
              >
                Get Started <ArrowRightIcon className="ml-1.5 size-5" />
              </RegisterLink>
            </>
          ) : (
            <>
              {/* Dashboard link */}
              <Link
                href="/dashboard"
                className={buttonVariants({
                  variant: "outline",
                  size: "sm",
                })}
              >
                Dashboard
              </Link>

              {/* User Account Nav */}
              {/* <UserAccountNav
                name={
                  !user.given_name || !user.family_name
                    ? "Your Account"
                    : `${user.given_name} ${user.family_name}`
                }
                email={user.email ?? ""}
                imageUrl={user.picture ?? ""}
              /> */}
            </>
          )}
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};
