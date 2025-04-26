
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";

const FamilyPortal = () => {
  const languages = ["English", "Español", "中文", "العربية", "हिंदी"];
  
  return (
    <Card className="border-0 shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Globe className="h-5 w-5 text-edu-primary" />
          Family Portal
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-lg mb-2">Today's Learning Summary</h3>
            <p className="text-gray-600">Sarah completed 2 math lessons and improved in geometry.</p>
            <div className="mt-4 flex items-center gap-2">
              <Languages className="h-5 w-5 text-edu-primary" />
              <span className="text-sm text-gray-500">Available in:</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {languages.map((lang) => (
                <Button
                  key={lang}
                  variant="outline"
                  size="sm"
                  className="text-edu-primary border-edu-primary hover:bg-edu-primary hover:text-white"
                >
                  {lang}
                </Button>
              ))}
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-lg mb-2">Support at Home</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Practice multiplication tables during daily activities</li>
              <li>• Read together for 20 minutes</li>
              <li>• Review geometry concepts using household objects</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FamilyPortal;
