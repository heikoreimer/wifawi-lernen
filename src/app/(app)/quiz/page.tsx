"use client";
import { motion } from "framer-motion";
import { pageVariants } from "@/lib/utils/animations";

export default function QuizPage() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"
      className="px-4 pt-6">
      <h1 className="text-2xl font-bold" style={{ color: "var(--color-text)" }}>Quick Quiz</h1>
      <p className="mt-2" style={{ color: "var(--color-text-2)" }}>
        Kommt in Schritt 3 – hier werden Multiple-Choice-Fragen aus deinen PDFs erscheinen.
      </p>
    </motion.div>
  );
}
