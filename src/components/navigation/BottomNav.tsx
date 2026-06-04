"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, Zap, CreditCard, BookOpen } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/dashboard",   icon: LayoutDashboard, label: "Home" },
  { href: "/quiz",        icon: Zap,             label: "Quiz" },
  { href: "/flashcards",  icon: CreditCard,      label: "Karten" },
  { href: "/cases",       icon: BookOpen,        label: "Fälle" },
] as const;

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 safe-bottom"
      style={{ background: "var(--color-surface)", borderTop: "1px solid var(--color-border)" }}
      aria-label="Hauptnavigation"
    >
      <div className="flex items-center justify-around px-2 pt-2 pb-1 max-w-lg mx-auto">
        {NAV_ITEMS.map(({ href, icon: Icon, label }) => {
          const isActive = pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className="flex flex-col items-center gap-1 min-w-[56px] min-h-[48px] justify-center px-3 rounded-xl active:scale-95 transition-transform duration-100 relative"
              aria-current={isActive ? "page" : undefined}
            >
              {isActive && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute inset-0 rounded-xl"
                  style={{ background: "color-mix(in srgb, var(--color-primary) 12%, transparent)" }}
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                />
              )}
              <Icon
                size={22}
                strokeWidth={isActive ? 2.5 : 1.8}
                style={{ color: isActive ? "var(--color-primary)" : "var(--color-text-2)" }}
                aria-hidden
              />
              <span
                className="text-[10px] font-medium"
                style={{ color: isActive ? "var(--color-primary)" : "var(--color-text-2)" }}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
