import { notFound } from "next/navigation";
import { Metadata } from "next";
import { projects } from "@/lib/data";
import { ProjectCaseStudy } from "./case-study";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.card,
    openGraph: {
      title: `${project.title} — Obaid`,
      description: project.card,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return <ProjectCaseStudy project={project} />;
}
