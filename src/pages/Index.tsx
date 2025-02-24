import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Question } from "@/components/Question";

const originalQuestions = [
  "What in life inspires you the most?",
  "What is your biggest dream?",
  "Who has influenced your life the most?",
  "What is one thing you've always wanted to try?",
  "If you could change one thing about yourself, what would it be?",
  "What is something you're most proud of?",
  "What motivates you to keep going during tough times?",
  "What does happiness mean to you?",
  "If you had unlimited time and money, what would you do?",
  "Do you believe in fate or free will?",
  "What is your favorite movie?",
  "If you could live in any fictional world, which one would it be?",
  "What's your guilty pleasure TV show?",
  "What's the funniest joke you've ever heard?",
  "If you could switch lives with any celebrity for a day, who would it be?",
  "What is your favorite type of music?",
  "If you had to eat one food for the rest of your life, what would it be?",
  "What is the most ridiculous trend you've ever followed?",
  "If you could master any skill instantly, what would it be?",
  "What's the weirdest thing you've ever Googled?",
  "What is your favorite thing about us being together?",
  "What would you like for us to do more of?",
  "If we could repeat our first date, is there anything that you would do differently?",
  "What's one thing that always makes you smile about me?",
  "What is the most romantic thing you've ever done for someone?",
  "How do you know when you're truly in love?",
  "What's one thing you wish I knew about you?",
  "What is one small gesture that makes you feel loved?",
  "What's your love language?",
  "What's the best compliment you've ever received?",
  "Do you believe that everything happens for a reason?",
  "If you could ask your future self one question, what would it be?",
  "What's the most important lesson life has taught you?",
  "Do you think people can truly change?",
  "If you could live forever, would you? Why or why not?",
  "What do you think happens after we die?",
  "What's one regret you have in life?",
  "If you had to describe your life in one word, what would it be?",
  "Do you think money can buy happiness?",
  "What does success mean to you?",
  "What is one habit you're trying to break?",
  "What is one new habit you'd like to develop?",
  "If you wrote a book about your life, what would the title be?",
  "What's the hardest decision you've ever made?",
  "What is your biggest fear?",
  "How do you handle stress?",
  "What's something you used to believe but don't anymore?",
  "How do you usually spend your alone time?",
  "If you could relive one moment in your life, which would it be?",
  "What's the best advice you've ever received?",
  "What outfit do I wear that is your favorite?",
  "What is the cheesiest pickup line you have ever used?",
  "If you could have any superpower, what would it be?",
  "What's the most spontaneous thing you've ever done?",
  "What's a weird or unique talent you have?",
  "What's the most embarrassing thing that's happened to you?",
  "If you could time travel, would you go to the past or the future?",
  "What's one conspiracy theory you find interesting?",
  "If you could swap lives with any historical figure, who would it be?",
  "What's a fun fact about yourself that not many people know?",
  "What was your favorite childhood memory?",
  "How did your parents influence the person you are today?",
  "What was your favorite toy growing up?",
  "Did you have a childhood dream? What was it?",
  "What's one lesson from your childhood that still sticks with you?",
  "What's a funny story about your family?",
  "If you could talk to your 10-year-old self, what advice would you give?",
  "What was your first big adventure as a kid?",
  "What's the best holiday you remember as a child?",
  "Did you ever have an imaginary friend?",
  "If you could visit any place in the world, where would it be?",
  "What's the best trip you've ever been on?",
  "Do you prefer mountains or beaches?",
  "If you could go on a road trip with anyone, who would it be?",
  "What's the most adventurous thing you've ever done?",
  "Have you ever had a travel mishap? What happened?",
  "If you had to move to another country, where would you go?",
  "What's a unique tradition from another culture that fascinates you?",
  "Would you ever go skydiving or bungee jumping?",
  "Do you prefer solo travel or group trips?",
  "Where do you see yourself in five years?",
  "What is one goal you're currently working on?",
  "If you could design your dream house, what would it look like?",
  "What would your ideal job be?",
  "What is one thing on your bucket list?",
  "Do you want to have kids someday?",
  "If you could start your own business, what would it be?",
  "What's your dream retirement plan?",
  "What's one fear you hope to overcome in the future?",
  "What would you want to be remembered for?",
  "Are you an introvert or an extrovert?",
  "What's your biggest pet peeve?",
  "Do you prefer books or movies?",
  "How do you like to spend a lazy Sunday?",
  "What's your go-to comfort food?",
  "Do you prefer the sunrise or the sunset?",
  "If you had to describe yourself in three words, what would they be?",
  "What's one thing you absolutely can't live without?",
  "Do you prefer working alone or in a team?",
  "What's your idea of the perfect day?"
];

const shuffleArray = (array: string[]) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray.slice(0, 5); // Only return 5 questions
};

const Index = () => {
  const [step, setStep] = useState<"welcome" | "intro" | "questions" | "complete">("welcome");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState(() => shuffleArray(originalQuestions));

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setStep("complete");
    }
  };

  const restart = () => {
    setQuestions(shuffleArray(originalQuestions));
    setCurrentQuestion(0);
    setStep("questions");
  };

  return <div className="min-h-screen flex items-center justify-center p-6 mx-[24px] my-0 px-[34px] bg-red-950 rounded-3xl">
      <AnimatePresence mode="wait">
        {step === "welcome" && <motion.div key="welcome" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} className="text-center">
            <h1 className="text-4xl md:text-5xl font-light mb-8 text-primary">
              Listen, because that is the foundation of a relationship
            </h1>
            <button onClick={() => setStep("intro")} className="button">
              Next
            </button>
          </motion.div>}

        {step === "intro" && <motion.div key="intro" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} className="text-center max-w-2xl">
            <img src="/lovable-uploads/6bce52a1-1a49-42c7-a8d0-700041c8bd54.png" alt="Two otters holding hands with a heart" className="w-64 h-64 mx-auto mb-8 object-contain" />
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-primary">
              Welcome to "Because I had no otter thing to do"
            </h2>
            <p className="text-xl mb-8 text-accent/80">
              Want to have deeper conversations? Start and get 5 questions to ask your otter half.
            </p>
            <button onClick={() => setStep("questions")} className="button">
              Start
            </button>
          </motion.div>}

        {step === "questions" && <Question question={questions[currentQuestion]} onNext={nextQuestion} currentIndex={currentQuestion} totalQuestions={questions.length} />}

        {step === "complete" && <motion.div key="complete" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} className="text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-primary">
              Talk more, listen more, know more, love more
            </h2>
            <p className="text-xl mb-8 text-accent/80">
              Hope you had a good time
            </p>
            <button onClick={restart} className="button">
              Start Over
            </button>
          </motion.div>}
      </AnimatePresence>
    </div>;
};

export default Index;
