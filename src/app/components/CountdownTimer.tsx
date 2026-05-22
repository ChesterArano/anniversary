import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function CountdownTimer() {
  const anniversaryDate = new Date("2026-05-22T00:00:00");
  const [timeData, setTimeData] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isAnniversary: false,
  });

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const diff = Math.abs(anniversaryDate.getTime() - now.getTime());
      const isAnniversaryDay = anniversaryDate.getTime() <= now.getTime();

      const seconds = Math.floor(diff / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);

      const years = Math.floor(days / 365);
      const remainingDays = days % 365;
      const months = Math.floor(remainingDays / 30);
      const finalDays = remainingDays % 30;

      setTimeData({
        years,
        months,
        days: finalDays,
        hours: hours % 24,
        minutes: minutes % 60,
        seconds: seconds % 60,
        isAnniversary: isAnniversaryDay,
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { value: timeData.years, label: "Years", color: "from-pink-500 to-rose-500" },
    { value: timeData.months, label: "Months", color: "from-purple-500 to-pink-500" },
    { value: timeData.days, label: "Days", color: "from-blue-500 to-purple-500" },
    { value: timeData.hours, label: "Hours", color: "from-cyan-500 to-blue-500" },
    { value: timeData.minutes, label: "Minutes", color: "from-teal-500 to-cyan-500" },
    { value: timeData.seconds, label: "Seconds", color: "from-emerald-500 to-teal-500" },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
          {timeData.isAnniversary ? "✨ Happy Anniversary ✨" : "Countdown to Our Anniversary"}
        </h2>
        <p className="text-lg text-gray-600">
          {timeData.isAnniversary ? "" : ""}
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={`bg-gradient-to-br ${unit.color} rounded-lg p-6 shadow-xl text-white text-center relative overflow-hidden`}>
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 bg-white/10"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Content */}
              <div className="relative z-10">
                <motion.div
                  key={unit.value}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-4xl md:text-5xl font-bold mb-2"
                >
                  {unit.value.toString().padStart(2, "0")}
                </motion.div>
                <div className="text-xs md:text-sm font-semibold uppercase tracking-wider opacity-90">
                  {unit.label}
                </div>
              </div>

              {/* Corner Decoration */}
              <div className="absolute top-1 right-1 text-white/20 text-xl">
                ❤️
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Romantic Message for Anniversary */}
      {timeData.isAnniversary && (
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="text-2xl md:text-3xl font-serif text-rose-600 mb-4">
            Forever with you ❤️
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Every moment with you is a treasure. Happy Anniversary! Here's to many more years of love, laughter, and beautiful memories together.
          </p>
        </motion.div>
      )}
    </div>
  );
}
