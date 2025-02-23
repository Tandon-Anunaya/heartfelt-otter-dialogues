
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Question } from "@/components/Question";

const questions = [
  "What in life inspires you the most?",
  "What is your favorite thing about us being together?",
  "If you could relive one moment in your life, which would it be?",
  "What's one thing you wish I knew about you?",
  "What's the most important lesson life has taught you?"
];

const Index = () => {
  const [step, setStep] = useState<"welcome" | "intro" | "questions" | "complete">("welcome");
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setStep("complete");
    }
  };

  const restart = () => {
    setCurrentQuestion(0);
    setStep("questions");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <AnimatePresence mode="wait">
        {step === "welcome" && (
          <motion.div
            key="welcome"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-light mb-8 text-primary">
              Listen, because that is the foundation of a relationship
            </h1>
            <button onClick={() => setStep("intro")} className="button">
              Next
            </button>
          </motion.div>
        )}

        {step === "intro" && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center max-w-2xl"
          >
            <img 
              src="/lovable-uploads/6bce52a1-1a49-42c7-a8d0-700041c8bd54.png" 
              alt="Two otters holding hands with a heart"
              className="w-64 h-64 mx-auto mb-8 object-contain" 
            />
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-primary">
              Welcome to "Because I had not otter thing to do"
            </h2>
            <p className="text-xl mb-8 text-accent/80">
              Want to have deeper conversations? Start and get 5 questions to ask your otter half.
            </p>
            <button onClick={() => setStep("questions")} className="button">
              Start
            </button>
          </motion.div>
        )}

        {step === "questions" && (
          <Question
            question={questions[currentQuestion]}
            onNext={nextQuestion}
            currentIndex={currentQuestion}
            totalQuestions={questions.length}
          />
        )}

        {step === "complete" && (
          <motion.div
            key="complete"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-primary">
              Talk more, listen more, know more, love more
            </h2>
            <p className="text-xl mb-8 text-accent/80">
              Hope you had a good time
            </p>
            <button onClick={restart} className="button">
              Start Over
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
