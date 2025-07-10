import React from "react";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-custom-background dark:bg-custom-background-dark">
      <div className="text-center px-4">
        <p className="text-base font-semibold text-custom-accent">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-custom-text dark:text-custom-text-dark sm:text-7xl">
          Page not found
        </h1>
        <p className="mt-6 text-lg font-medium text-custom-text/80 dark:text-custom-text-dark/80 sm:text-xl leading-relaxed">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/"
            className="rounded-md bg-custom-accent px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-custom-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-custom-accent"
          >
            Go back home
          </a>
        </div>
      </div>
    </div>
  );
}
