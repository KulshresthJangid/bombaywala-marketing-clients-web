import { cn } from '../../lib/utils';

export default function TricolorRule({ className, center }: { className?: string; center?: boolean }) {
  return (
    <div className={cn('tricolor-rule', center && 'mx-auto', className)}>
      <span className="bg-orange" />
      <span className="bg-white" />
      <span className="bg-forest" />
    </div>
  );
}
