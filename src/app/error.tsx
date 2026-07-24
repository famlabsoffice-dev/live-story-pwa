"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main className="p-6">
      <h1 className="text-xl font-semibold">Ein Fehler ist aufgetreten</h1>
      <button onClick={reset} className="mt-4 rounded-md px-4 py-2">
        Erneut versuchen
      </button>
    </main>
  );
}
