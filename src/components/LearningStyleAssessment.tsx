
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, MessageSquare, Lightbulb, GraduationCap } from "lucide-react";

interface Question {
  id: number;
  text: string;
  type: "visual" | "auditory" | "kinesthetic";
  content: React.ReactNode;
}

const sampleQuestions: Question[] = [
  {
    id: 1,
    text: "How would you prefer to learn about the water cycle?",
    type: "visual",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4 cursor-pointer hover:bg-gray-50">
          <img src="/placeholder.svg" alt="Water cycle diagram" className="w-full h-32 object-cover rounded mb-2" />
          <p className="text-sm">Study an animated diagram</p>
        </Card>
        <Card className="p-4 cursor-pointer hover:bg-gray-50">
          <div className="flex items-center justify-center h-32 bg-edu-light rounded">
            <MessageSquare className="h-12 w-12 text-edu-primary" />
          </div>
          <p className="text-sm">Listen to an explanation</p>
        </Card>
        <Card className="p-4 cursor-pointer hover:bg-gray-50">
          <div className="flex items-center justify-center h-32 bg-edu-light rounded">
            <GraduationCap className="h-12 w-12 text-edu-primary" />
          </div>
          <p className="text-sm">Create a physical model</p>
        </Card>
      </div>
    )
  },
  {
    id: 2,
    text: "When solving math problems, what helps you most?",
    type: "kinesthetic",
    content: (
      <div className="space-y-4">
        <Card className="p-4 cursor-pointer hover:bg-gray-50">
          <div className="flex items-center space-x-3">
            <Lightbulb className="h-6 w-6 text-edu-primary" />
            <p>Using physical objects to count and calculate</p>
          </div>
        </Card>
        <Card className="p-4 cursor-pointer hover:bg-gray-50">
          <div className="flex items-center space-x-3">
            <BookOpen className="h-6 w-6 text-edu-primary" />
            <p>Reading step-by-step instructions</p>
          </div>
        </Card>
        <Card className="p-4 cursor-pointer hover:bg-gray-50">
          <div className="flex items-center space-x-3">
            <MessageSquare className="h-6 w-6 text-edu-primary" />
            <p>Having someone explain it verbally</p>
          </div>
        </Card>
      </div>
    )
  }
];

const LearningStyleAssessment = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [results, setResults] = useState({
    visual: 0,
    auditory: 0,
    kinesthetic: 0
  });

  const handleAnswer = (type: "visual" | "auditory" | "kinesthetic") => {
    setResults(prev => ({
      ...prev,
      [type]: prev[type] + 1
    }));
    if (currentQuestionIndex < sampleQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-edu-dark mb-4">
            Discover Your Learning Style
          </h2>
          <p className="text-gray-600">
            Answer these interactive questions to help us understand how you learn best.
          </p>
        </div>

        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Question {currentQuestionIndex + 1}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">
                  {sampleQuestions[currentQuestionIndex].text}
                </h3>
                <div 
                  onClick={() => handleAnswer(sampleQuestions[currentQuestionIndex].type)}
                  className="space-y-4"
                >
                  {sampleQuestions[currentQuestionIndex].content}
                </div>
              </div>

              <div className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">Visual Learning</span>
                      <span className="text-sm text-edu-primary">{results.visual * 33}%</span>
                    </div>
                    <Progress value={results.visual * 33} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">Auditory Learning</span>
                      <span className="text-sm text-edu-primary">{results.auditory * 33}%</span>
                    </div>
                    <Progress value={results.auditory * 33} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">Kinesthetic Learning</span>
                      <span className="text-sm text-edu-primary">{results.kinesthetic * 33}%</span>
                    </div>
                    <Progress value={results.kinesthetic * 33} className="h-2" />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LearningStyleAssessment;
