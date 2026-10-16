import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/images/logo.jpg";
import { siteConfig } from "../../lib/config";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function PageLoader() {
  const [phase, setPhase] = useState<"in" | "hold" | "out" | "gone">("in");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hold"), 600);
    const t2 = setTimeout(() => setPhase("out"), 1400);
    const t3 = setTimeout(() => setPhase("gone"), 1900);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <AnimatePresence>
      {phase !== "gone" && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: phase === "out" ? 0 : 1 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="fixed inset-0 z-[10001] flex flex-col items-center justify-center gap-6 bg-navy"
        >
          <div className="flex flex-col items-center gap-3">
            <motion.img
              src={logo}
              alt={siteConfig.brandName}
              initial={{ scale: 0.75, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="h-20 w-20 rounded-full object-cover ring-1 ring-gold/40"
            />
            <div className="flex gap-[0.15em] overflow-hidden">
              {siteConfig.shortName.split("").map((l, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 14, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.05, ease: EASE }}
                  className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-cream/80"
                >
                  {l}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="relative h-px w-24 overflow-hidden bg-cream/10">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.2, ease: EASE, delay: 0.15 }}
              className="absolute inset-0 bg-gradient-to-r from-gold-dark via-gold to-gold-light"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6, ease: EASE }}
            className="font-serif italic text-sm text-gold-light/80"
          >
            {siteConfig.tagline}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
