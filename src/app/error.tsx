"use client";

import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Live Story UI error", error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <section className="max-w-md text-center" role="alert">
        <h1 className="text-2xl font-semibold">Ein Fehler ist aufgetreten</h1>
        <p className="mt-3 text-neutral-600">
          Die Darstellung konnte nicht geladen werden.
        </p>
        <button
          onClick={reset}
          className="mt-6 rounded-md border px-5 py-3"
        >
          Erneut versuchen
        </button>
      </section>
    </main>
  );
}
