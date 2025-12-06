import { motion } from 'framer-motion';
import type { Stat } from '@/types/landing';

type StatCardProps = {
  stat: Stat;
};

export function StatCard({ stat }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border-t-2 border-white/40 pt-3 text-white">
      <p className="text-lg font-bold">{stat.title}</p>
      <p className="mt-2 text-sm leading-relaxed text-white/90">{stat.description}</p>
    </motion.div>
  );
}
