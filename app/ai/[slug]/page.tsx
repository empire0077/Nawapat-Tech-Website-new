import { ArticleView } from "@/components/ArticleView";
import { articles } from "@/lib/articles";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return articles
    .filter((art) => art.category === "ai")
    .map((art) => ({
      slug: art.slug,
    }));
}

export default async function AIArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = articles.find(
    (art) => art.category === "ai" && art.slug === slug
  );

  if (!article) {
    notFound();
  }

  return <ArticleView article={article} />;
}
