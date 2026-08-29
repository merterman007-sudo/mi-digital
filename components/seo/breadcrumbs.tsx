import Link from "next/link";

type Crumb = {
  label: string;
  href: string;
};

type BreadcrumbsProps = {
  items: Crumb[];
  className?: string;
};

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  if (items.length === 0) return null;

  return (
    <nav
      aria-label="breadcrumb"
      className={className ?? "text-sm text-slate-600 dark:text-slate-300"}
    >
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-2">
              {isLast ? (
                <span className="font-medium text-slate-900 dark:text-slate-100">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="transition hover:text-cyan-700 dark:hover:text-cyan-300"
                >
                  {item.label}
                </Link>
              )}
              {!isLast ? <span className="opacity-50">/</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

