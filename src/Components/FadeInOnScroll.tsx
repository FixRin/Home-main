import { motion } from "framer-motion";
import type { ReactNode } from "react";

type FadeInOnScrollProps = {
  children: ReactNode;
  className?: string;
  delay?: number; // saniyə ilə (0.1, 0.2 və s.)
};

export function FadeInOnScroll({
  children,
  className,
  delay = 0,
}: FadeInOnScrollProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }} // ekrana 30% girəndə animasiya
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
