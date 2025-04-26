
import { BookOpen, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface Lesson {
  id: number;
  title: string;
  subject: string;
  duration: string;
  progress: number;
  tags: string[];
  adaptive: boolean;
}

interface RecommendedLessonsProps {
  lessons: Lesson[];
}

const RecommendedLessons = ({ lessons }: RecommendedLessonsProps) => {
  return (
    <div className="space-y-4">
      {lessons.map((lesson) => (
        <div key={lesson.id} className="flex bg-gray-50 rounded-lg p-4 card-hover">
          <div className="mr-4">
            <div className="w-12 h-12 rounded-full bg-edu-primary/10 flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-edu-primary" />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium">{lesson.title}</h4>
                <p className="text-sm text-gray-500">{lesson.subject} • {lesson.duration}</p>
              </div>
              <Button size="sm" className="bg-edu-primary hover:bg-edu-primary/90">
                <PlayCircle className="h-4 w-4 mr-1" /> Start
              </Button>
            </div>
            {lesson.progress > 0 && (
              <div className="mt-2">
                <Progress value={lesson.progress} className="h-2" />
                <p className="text-xs text-gray-500 mt-1">{lesson.progress}% complete</p>
              </div>
            )}
            <div className="flex items-center mt-2 space-x-2">
              {lesson.adaptive && (
                <span className="bg-edu-accent1/10 text-edu-accent1 text-xs px-2 py-1 rounded-full">
                  Adaptive
                </span>
              )}
              {lesson.tags.map((tag, index) => (
                <span key={index} className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecommendedLessons;
