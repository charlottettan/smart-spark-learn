
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface Course {
  id: number;
  title: string;
  subject: string;
  progress: number;
  lastAccessed: string;
  nextLesson: string;
}

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Card className="border-0 shadow-sm card-hover">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{course.title}</CardTitle>
        <CardDescription>{course.subject}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-gray-500">Progress</span>
              <span className="text-sm text-edu-primary font-medium">{course.progress}%</span>
            </div>
            <Progress value={course.progress} className="h-2" />
          </div>
          <div className="pt-2">
            <p className="text-sm">
              <span className="text-gray-500">Next:</span>{" "}
              <span className="font-medium text-edu-dark">{course.nextLesson}</span>
            </p>
            <p className="text-sm text-gray-500">Last accessed: {course.lastAccessed}</p>
          </div>
          <Button variant="outline" className="w-full text-edu-primary border-edu-primary hover:bg-edu-primary hover:text-white">
            Continue
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
