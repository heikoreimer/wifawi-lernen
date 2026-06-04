"use client";
import { motion } from "framer-motion";
import { pageVariants } from "@/lib/utils/animations";

export default function CasesPage() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"
      className="px-4 pt-6">
      <h1 className="text-2xl font-bold" style={{ color: "var(--color-text)" }}>Fallstudien</h1>
      <p className="mt-2" style={{ color: "var(--color-text-2)" }}>
        Komplexe Prüfungssimulationen mit KI-Feedback – folgt in Schritt 3.
      </p>
    </motion.div>
  );
}
