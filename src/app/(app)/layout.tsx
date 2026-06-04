import { BottomNav } from "@/components/navigation/BottomNav";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-dvh max-w-lg mx-auto">
      <main className="flex-1 overflow-y-auto pb-24 safe-top">
        {children}
      </main>
      <BottomNav />
    </div>
  );
}
