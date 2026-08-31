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

  const isSolivraOS = slug === "solivra-os";
  const title = isSolivraOS
    ? "Solivra OS — Enterprise ERP & AI Platform"
    : project.title;
  const description = isSolivraOS
    ? "Solivra OS is a full-stack enterprise ERP platform combining CRM, finance, operations, HR, RBAC and AI-powered automation."
    : project.card;

  return {
    title,
    description,
    openGraph: {
      title: `${title} — Obaid`,
      description,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return <ProjectCaseStudy project={project} />;
}
