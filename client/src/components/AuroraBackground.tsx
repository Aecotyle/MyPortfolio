import { motion } from "framer-motion";
import { ReactNode } from "react";

export function AuroraBackground({ children }: { children: ReactNode }) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black" />
        <div className="aurora-container">
          <div className="aurora aurora-1" />
          <div className="aurora aurora-2" />
          <div className="aurora aurora-3" />
        </div>
      </div>
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
}
