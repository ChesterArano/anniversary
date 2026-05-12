import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function LoveLetter() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = `To My Eli,

Happy 3rd Anniversary, mahal. Konting hintay na lang at makaka-graduate na rin tayo. Thank you for always being there for me and for always supporting me. Thank you rin sa lahat ng dates natin, especially kapag ikaw muna ang gumagastos kasi minsan wala rin ako. Babawi rin ako sa’yo someday, mahal.

I hope all our dreams will come true together. Pasensya na kung ito lang muna ang kaya ko ngayon hahaha. I love you always, mahal...

Forever yours,
Cjay (Aki) ❤️`;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="w-full max-w-2xl mx-auto bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg shadow-2xl p-8 md:p-12 relative overflow-hidden"
      initial={{ scale: 0.8, opacity: 0, rotateX: -90 }}
      animate={{ scale: 1, opacity: 1, rotateX: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Paper Texture Overlay */}
      <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0icGFwZXIiIHg9IjAiIHk9IjAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiM5OTkiIG9wYWNpdHk9IjAuMiIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNwYXBlcikiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIi8+PC9zdmc+')]" />

      {/* Decorative Border */}
      <div className="absolute top-4 left-4 right-4 bottom-4 border-2 border-amber-300/40 rounded pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mb-8"
        >
          <div className="text-4xl mb-2">💌</div>
        </motion.div>

        <div className="font-serif text-gray-800 leading-relaxed whitespace-pre-line text-base md:text-lg">
          {displayedText}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-0.5 h-5 bg-gray-800 ml-1"
          />
        </div>
      </div>

      {/* Decorative Hearts in Corners */}
      <div className="absolute top-6 right-6 text-pink-400/30 text-2xl">❤️</div>
      <div className="absolute bottom-6 left-6 text-pink-400/30 text-2xl">❤️</div>
    </motion.div>
  );
}
