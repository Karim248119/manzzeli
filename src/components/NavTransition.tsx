"use client";

import React, { useContext, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

function FrozenRouter({ children }: { children: React.ReactNode }) {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {children}
    </LayoutRouterContext.Provider>
  );
}

const EASE_EXPO = [0.76, 0, 0.24, 1] as const;

const COLUMNS = 5;

export default function NavTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} className="relative min-h-screen w-full">
        {/* 1. STAGGERED CURTAIN OVERLAY */}
        <div className="pointer-events-none fixed inset-0 z-50 flex h-screen w-screen overflow-hidden">
          {[...Array(COLUMNS)].map((_, i) => (
            <motion.div
              key={i}
              className="relative h-full flex-1 bg-neutral-950 border-r border-neutral-900/40 last:border-none"
              initial={{ scaleY: 1 }}
              animate={{
                scaleY: 0,
                transition: {
                  duration: 0.75,
                  ease: EASE_EXPO,
                  delay: 0.15 + i * 0.045,
                },
              }}
              exit={{
                scaleY: 1,
                transition: {
                  duration: 0.65,
                  ease: EASE_EXPO,
                  delay: i * 0.045,
                },
              }}
              style={{
                transformOrigin: "top",
              }}
            />
          ))}
        </div>

        {/* 2. PAGE CONTENT WITH PARALLAX DEPTH */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.985 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 0.85,
              ease: EASE_EXPO,
              delay: 0.25,
            },
          }}
          exit={{
            opacity: 0,
            y: -24,
            scale: 0.985,
            transition: {
              duration: 0.55,
              ease: EASE_EXPO,
            },
          }}
        >
          <FrozenRouter>{children}</FrozenRouter>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
