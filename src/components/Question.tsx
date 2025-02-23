
import { motion } from "framer-motion";

interface QuestionProps {
  question: string;
  onNext: () => void;
  currentIndex: number;
  totalQuestions: number;
}

export const Question = ({ question, onNext, currentIndex, totalQuestions }: QuestionProps) => {
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
        <button onClick={onNext} className="button">
          Next Question
        </button>
      </div>
    </motion.div>
  );
};
