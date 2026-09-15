import type { LucideProps } from "lucide-react";
import { practiceAreaIcons } from "../../lib/practiceIcons";
import { Scale } from "lucide-react";

export default function PracticeIcon({
  slug,
  ...props
}: { slug: string } & LucideProps) {
  const Icon = practiceAreaIcons[slug] ?? Scale;
  return <Icon {...props} />;
}
