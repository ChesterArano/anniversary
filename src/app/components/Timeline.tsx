import { motion } from "motion/react";

const milestones = [
  {
    date: "May 2023",
    title: "First Date",
    description: "The day our beautiful journey began",
    icon: "💕",
    image: "/assets/First Date.jpg",
  },
  {
    date: "July 2023",
    title: "First Long Ride Together",
    description: "Creating memories in new places",
    icon: "",
    image: "/assets/First Long Ride Together.jpg",
  },
  {
    date: "December 2024",
    title: "First Holiday Season",
    description: "Celebrating together for the first time",
    icon: "🎄",
    image: "/assets/First Holiday Season christmas 2024.jpg",
  },
  {
    date: "February 14, 2026",
    title: "Valentine's Day",
    description: "Our first Valentine's together",
    icon: "💝",
    image: "/assets/Valentines day Feb 14  2026.jpg",
  },
  {
    date: "May 22, 2024",
    title: "One Year Anniversary",
    description: "365 days of love and happiness",
    icon: "🎉",
    image: "/assets/One Year Anniversary.jpg",
  },
  {
    date: "May 22, 2025",
    title: "Two Years Strong",
    description: "Still going strong, still in love",
    icon: "💖",
    image: "/assets/Two Years Strong.jpg",
  },
  {
    date: "May 22, 2026",
    title: "Three Beautiful Years",
    description: "Here's to forever and always",
    icon: "💑",
  },
];

export function Timeline() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <motion.h2
        className="text-4xl md:text-5xl font-serif text-center mb-16 text-gray-800"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Love Story Timeline
      </motion.h2>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-300 via-purple-300 to-pink-300 -translate-x-1/2" />

        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            className="relative mb-12 last:mb-0"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div
              className={`flex items-center ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Content Card */}
              <div className="w-5/12">
                <motion.div
                  className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                >
                  {milestone.image && (
                    <div className="w-full aspect-square rounded mb-4 overflow-hidden">
                      <img
                        src={milestone.image}
                        alt={milestone.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="text-3xl mb-2">{milestone.icon}</div>
                  <p className="text-sm text-pink-600 font-semibold mb-1">
                    {milestone.date}
                  </p>
                  <h3 className="text-xl font-serif font-bold text-gray-800 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {milestone.description}
                  </p>
                </motion.div>
              </div>

              {/* Center Point */}
              <div className="w-2/12 flex justify-center">
                <motion.div
                  className="w-6 h-6 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full border-4 border-white shadow-lg z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                />
              </div>

              {/* Empty Space */}
              <div className="w-5/12" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
