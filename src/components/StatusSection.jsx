"use client";
import { motion } from "framer-motion";
import { Users, Trophy, Calendar, TrendingUp } from "lucide-react";

export default function StatusSection() {
  const stats = [
    { icon: Users, title: "Total Matches", value: "74" },
    { icon: Trophy, title: "Teams", value: "10" },
    { icon: Calendar, title: "Tournament Duration", value: "51 days" },
    { icon: TrendingUp, title: "Highest Score", value: "246/7" },
  ];

  return (
    <div className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          IPL 2025 Stats and Highlights
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-10 rounded-lg shadow-md p-6 flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold">{stat.title}</h3>
              <p className="text-2xl font-bold">{stat.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
