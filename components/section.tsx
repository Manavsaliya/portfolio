import clsx from "clsx";
import type React from "react";

interface SectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  isTop?: boolean;
  isBottom?: boolean;
}

export default function Section({
  title,
  children,
  className = "",
  isTop = false,
  isBottom = false,
}: SectionProps) {
  return (
    <section
      className={clsx("border-b border-border-lighter px-3", {
        "border-t-0": true,
        "border-b-0": isBottom,
      })}
    >
      <div className="relative mx-auto max-w-3xl w-full border-x border-border-lighter sm:p-6 p-4">
        {!isTop && (
          <div className="absolute top-0 right-0 w-2 h-2 bg-white dark:bg-black rounded-full border border-border translate-x-[4.5px] -translate-y-[4.5px] shadow shadow-border" />
        )}
        {!isBottom && (
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-white dark:bg-black rounded-full border border-border -translate-x-[4.5px] translate-y-[4.5px] z-10 shadow shadow-border" />
        )}
        {title && (
          <h2 className="select-none text-xs font-semibold text-muted-foreground uppercase tracking-widest">
            {title}
          </h2>
        )}
        <div className={clsx(className, "pt-6")}>{children}</div>
      </div>
    </section>
  );
}
