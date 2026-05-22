import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function CountdownTimer() {
  const relationshipStartDate = new Date("2023-05-22T00:00:00");
  const [timeData, setTimeData] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isAnniversary: false,
    isMonthsary: false,
  });

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const start = new Date("2023-05-22T00:00:00");

      // Calculate years, months, days based on calendar dates (not just dividing by days)
      let years = now.getFullYear() - start.getFullYear();
      let months = now.getMonth() - start.getMonth();
      let days = now.getDate() - start.getDate();

      // Adjust if days is negative
      if (days < 0) {
        months--;
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
      }

      // Adjust if months is negative
      if (months < 0) {
        years--;
        months += 12;
      }

      // Calculate hours, minutes, seconds from time difference
      const totalSeconds = Math.floor((now.getTime() - start.getTime()) / 1000);
      const seconds = totalSeconds % 60;
      const totalMinutes = Math.floor(totalSeconds / 60);
      const minutes = totalMinutes % 60;
      const totalHours = Math.floor(totalMinutes / 60);
      const hours = totalHours % 24;

      const isAnniversaryDay = now.getMonth() === 4 && now.getDate() === 22; // May is month 4 (0-indexed)
      const isMonthsaryDay = now.getDate() === 22 && !isAnniversaryDay;

      setTimeData({
        years,
        months,
        days,
        hours,
        minutes,
        seconds,
        isAnniversary: isAnniversaryDay,
        isMonthsary: isMonthsaryDay,
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
          {timeData.isAnniversary 
            ? "✨ Happy Anniversary ✨" 
            : timeData.isMonthsary 
            ? "💕 Happy Monthsary 💕"
            : "Our Love Story"}
        </h2>
        <p className="text-lg text-gray-600">
          {timeData.isAnniversary ? "We are in 3 years together" : timeData.isMonthsary ? "Another month of love" : "Time together"}
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
