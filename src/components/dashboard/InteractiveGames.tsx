
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gamepad } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

const sampleQuestions: Record<string, Question[]> = {
  en: [
    {
      id: 1,
      question: "What is 8 x 7?",
      options: ["54", "56", "58", "60"],
      correctAnswer: 1,
    },
    {
      id: 2,
      question: "Which planet is closest to the Sun?",
      options: ["Venus", "Mars", "Mercury", "Earth"],
      correctAnswer: 2,
    },
  ],
  es: [
    {
      id: 1,
      question: "¿Cuánto es 8 x 7?",
      options: ["54", "56", "58", "60"],
      correctAnswer: 1,
    },
    {
      id: 2,
      question: "¿Qué planeta está más cerca del Sol?",
      options: ["Venus", "Marte", "Mercurio", "Tierra"],
      correctAnswer: 2,
    },
  ],
  fr: [
    {
      id: 1,
      question: "Combien font 8 x 7?",
      options: ["54", "56", "58", "60"],
      correctAnswer: 1,
    },
    {
      id: 2,
      question: "Quelle planète est la plus proche du Soleil?",
      options: ["Vénus", "Mars", "Mercure", "Terre"],
      correctAnswer: 2,
    },
  ],
};

interface InteractiveGamesProps {
  language: string;
}

const InteractiveGames = ({ language }: InteractiveGamesProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const questions = sampleQuestions[language] || sampleQuestions.en;

  const handleAnswer = (selectedOption: number) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Gamepad className="h-5 w-5" />
          Interactive Learning Games
        </CardTitle>
      </CardHeader>
      <CardContent>
        {!showResult ? (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">
              {questions[currentQuestion].question}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-auto py-4 text-left justify-start"
                  onClick={() => handleAnswer(index)}
                >
                  {option}
                </Button>
              ))}
            </div>
            <p className="text-sm text-gray-500">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </div>
        ) : (
          <div className="text-center space-y-4">
            <h3 className="text-xl font-medium">
              Game Complete! Score: {score}/{questions.length}
            </h3>
            <Button onClick={resetGame}>Play Again</Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default InteractiveGames;
