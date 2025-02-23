"use client";
import Link from "next/link";
import { use } from "react";

export default function NewsArticle({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}) {
  const { id } = use(params);
  const { lang = "en" } = use(searchParams);

  return (
    <div>
      <h1 className="text-xl">News Article #{id}</h1>
      <p>Reading in: {lang.toUpperCase()}</p>

      {/* Language switcher */}
      <div className="language-options">
        <Link href={`/articles/${id}?lang=en`}>English</Link> |
        <Link href={`/articles/${id}?lang=es`}>Español</Link> |
        <Link href={`/articles/${id}?lang=fr`}>Français</Link>
      </div>
    </div>
  );
}
