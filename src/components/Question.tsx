
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

interface QuestionProps {
  question: string;
  onNext: () => void;
  currentIndex: number;
  totalQuestions: number;
}

export const Question = ({ question, onNext, currentIndex, totalQuestions }: QuestionProps) => {
  const [isGlowing, setIsGlowing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlowing(prev => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="flex flex-col items-center justify-center min-h-[60vh] w-full max-w-2xl mx-auto space-y-8"
    >
      <div className="card w-full">
        <div className="text-primary/60 mb-4">{currentIndex + 1}/{totalQuestions}</div>
        <h2 className="text-2xl md:text-3xl font-light mb-8 text-primary">{question}</h2>
        <button onClick={onNext} className="button">
          Next Question
        </button>
      </div>
      
      <motion.div
        animate={{
          scale: isGlowing ? 1.2 : 1,
          y: isGlowing ? -10 : 0,
          filter: isGlowing ? "drop-shadow(0 0 12px #D946EF)" : "none",
          rotate: isGlowing ? 10 : -10,
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.5, 1],
        }}
        className="relative"
      >
        <Heart 
          className="w-12 h-12 text-[#D946EF]" 
          fill="#D946EF"
          strokeWidth={1.5}
        />
        <motion.div
          className="absolute inset-0"
          animate={{
            opacity: isGlowing ? 1 : 0,
            scale: isGlowing ? 1.5 : 1,
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <Heart 
            className="w-12 h-12 text-[#D946EF]/30" 
            fill="#D946EF"
            strokeWidth={1.5}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
