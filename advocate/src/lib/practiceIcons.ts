import {
  Scale,
  Gavel,
  Landmark,
  Building2,
  Receipt,
  Home as HomeIcon,
  Users,
  ScrollText,
  Shield,
  FileText,
  type LucideIcon,
} from "lucide-react";

export const practiceAreaIcons: Record<string, LucideIcon> = {
  "high-court-matters": Landmark,
  arbitration: Scale,
  "civil-litigation": Gavel,
  "criminal-defense": Shield,
  "cheque-bounce": Receipt,
  "banking-drt-sarfaesi": Building2,
  "corporate-nclt": Building2,
  "property-disputes": HomeIcon,
  "family-divorce": Users,
  "succession-probate": ScrollText,
  "armed-forces-tribunal": Shield,
  "documentation-notices": FileText,
};

export function getPracticeIcon(slug: string): LucideIcon {
  return practiceAreaIcons[slug] ?? Scale;
}
