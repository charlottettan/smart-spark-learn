
import { Progress } from "@/components/ui/progress";

const LearningStats = () => {
  return (
    <div className="bg-gray-50 rounded-lg p-4 space-y-4">
      <div>
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-medium">Weekly Progress</span>
          <span className="text-sm text-edu-primary font-medium">72%</span>
        </div>
        <Progress value={72} className="h-2" />
      </div>
      <div>
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-medium">Monthly Goal</span>
          <span className="text-sm text-edu-primary font-medium">45%</span>
        </div>
        <Progress value={45} className="h-2" />
      </div>
      <div className="pt-2">
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>Current Streak:</span>
          <span className="font-medium text-edu-dark">4 days</span>
        </div>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>Completed Lessons:</span>
          <span className="font-medium text-edu-dark">24</span>
        </div>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>Time Learned:</span>
          <span className="font-medium text-edu-dark">15 hours</span>
        </div>
      </div>
    </div>
  );
};

export default LearningStats;
