import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <MaxWidthWrapper className="mb-12 mt-20 sm:mt-32 md:mt-20 flex flex-col items-center justify-center text-center px-4">
        {/* Announcement */}
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-6 py-2 shadow-md backdrop-blur-sm transition-all hover:border-gray-300 hover:bg-white/50">
          <p className="text-xs sm:text-sm font-semibold text-gray-700">
            DocuBot is now public! 🎉
          </p>
        </div>

        {/* Hero Title */}
        <h1 className="max-w-4xl text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Chat with your <span className="text-blue-500">documents</span> in
          seconds.
        </h1>

        {/* Hero Subtitle */}
        <p className="mt-5 max-w-prose text-sm sm:text-base md:text-lg text-zinc-700">
          DocuBot allows you to have conversations with any PDF document. Simply
          upload your file and start asking questions right away.
        </p>

        {/* CTA Button */}
        <Link
          href="/dashboard"
          target="_blank"
          className={buttonVariants({
            size: "lg",
            className: "mt-6",
          })}
        >
          Get Started <ArrowRightIcon className="ml-2 size-5" />
        </Link>
      </MaxWidthWrapper>

      {/* Value Proposition Section */}
      <section className="relative isolate">
        {/* Background Gradient */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -top-40 -z-10 transform-gpu blur-3xl sm:-top-80"
        >
          <div
            className="relative left-1/2 aspect-[1155/678] w-[28rem] sm:w-[50rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        {/* Dashboard Preview */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mt-12 sm:mt-20">
            <div className="rounded-xl bg-gray-900/5 p-2 sm:p-4 lg:p-6 shadow-lg ring-1 ring-gray-900/10">
              <Image
                src="/dashboard-preview.jpg"
                alt="Dashboard Preview"
                width={1364}
                height={866}
                priority
                quality={100}
                className="w-full h-auto rounded-md bg-white p-2 sm:p-6 md:p-12 shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="mx-auto mb-24 mt-24 sm:mt-40 max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Start chatting in minutes
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Chatting with your PDF files has never been easier than with
            DocuBot.
          </p>
        </div>

        {/* Steps */}
        <ol className="my-8 space-y-8 md:flex md:space-x-12 md:space-y-0">
          {/* Step 1 */}
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 pl-4 md:border-l-0 md:border-t-2 md:pt-4">
              <span className="text-sm font-medium text-blue-600">Step 1</span>
              <span className="text-lg sm:text-xl font-semibold">
                Sign up for an account
              </span>
              <p className="mt-2 text-sm sm:text-base text-zinc-700">
                Start with a free plan or choose our{" "}
                <Link
                  href="/pricing"
                  className="text-blue-700 underline underline-offset-2"
                >
                  Pro plan
                </Link>
                .
              </p>
            </div>
          </li>

          {/* Step 2 */}
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 pl-4 md:border-l-0 md:border-t-2 md:pt-4">
              <span className="text-sm font-medium text-blue-600">Step 2</span>
              <span className="text-lg sm:text-xl font-semibold">
                Upload your PDF File
              </span>
              <p className="mt-2 text-sm sm:text-base text-zinc-700">
                We&apos;ll process your file and make it ready for you to chat
                with.
              </p>
            </div>
          </li>

          {/* Step 3 */}
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 pl-4 md:border-l-0 md:border-t-2 md:pt-4">
              <span className="text-sm font-medium text-blue-600">Step 3</span>
              <span className="text-lg sm:text-xl font-semibold">
                Start asking questions
              </span>
              <p className="mt-2 text-sm sm:text-base text-zinc-700">
                It&apos;s that simple. Try out DocuBot today — it really takes
                less than a minute.
              </p>
            </div>
          </li>
        </ol>

        {/* File Upload Preview */}
        <div className="mt-16 sm:mt-24">
          <div className="rounded-xl bg-gray-900/5 p-2 sm:p-4 lg:p-6 shadow-lg ring-1 ring-gray-900/10">
            <Image
              src="/file-upload-preview.jpg"
              alt="File Upload Preview"
              width={1419}
              height={732}
              quality={100}
              className="w-full h-auto rounded-md bg-white p-2 sm:p-6 md:p-12 shadow-2xl ring-1 ring-gray-900/10"
            />
          </div>
        </div>
      </section>
    </>
  );
}
