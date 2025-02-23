
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
      className="flex flex-col items-center justify-center min-h-[60vh] w-full max-w-2xl mx-auto"
    >
      <div className="card w-full">
        <div className="text-primary/60 mb-4">{currentIndex + 1}/{totalQuestions}</div>
        <h2 className="text-2xl md:text-3xl font-light mb-8 text-primary">{question}</h2>
        <motion.div
          animate={{
            scale: isGlowing ? 1.2 : 1,
            filter: isGlowing ? "drop-shadow(0 0 8px #D946EF)" : "none",
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="mb-8"
        >
          <Heart className="w-8 h-8 text-[#D946EF] mx-auto" fill="#D946EF" />
        </motion.div>
        <button onClick={onNext} className="button">
          Next Question
        </button>
      </div>
    </motion.div>
  );
};
