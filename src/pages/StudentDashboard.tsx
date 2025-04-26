import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft } from "lucide-react";
import RecommendedLessons from "@/components/dashboard/RecommendedLessons";
import LearningStats from "@/components/dashboard/LearningStats";
import CourseCard from "@/components/dashboard/CourseCard";
import FamilyPortal from "@/components/dashboard/FamilyPortal";

const recommendedLessons = [
  {
    id: 1,
    title: "Introduction to Algebra",
    subject: "Mathematics",
    duration: "25 min",
    progress: 0,
    tags: ["visual", "interactive"],
    adaptive: true
  },
  {
    id: 2,
    title: "Cell Structure & Function",
    subject: "Biology",
    duration: "30 min",
    progress: 15,
    tags: ["visual", "hands-on"],
    adaptive: true
  },
  {
    id: 3,
    title: "World War II Overview",
    subject: "History",
    duration: "40 min",
    progress: 0,
    tags: ["auditory", "visual"],
    adaptive: true
  },
];

const currentCourses = [
  {
    id: 1,
    title: "Pre-Algebra",
    subject: "Mathematics",
    progress: 68,
    lastAccessed: "Today",
    nextLesson: "Solving Linear Equations"
  },
  {
    id: 2,
    title: "Life Sciences",
    subject: "Biology",
    progress: 42,
    lastAccessed: "Yesterday",
    nextLesson: "Plant Cell Structure"
  },
  {
    id: 3,
    title: "Modern World History",
    subject: "History",
    progress: 25,
    lastAccessed: "3 days ago",
    nextLesson: "The Industrial Revolution"
  },
  {
    id: 4,
    title: "English Composition",
    subject: "Language Arts",
    progress: 56,
    lastAccessed: "1 week ago",
    nextLesson: "Essay Structure"
  },
];

const learningInsights = [
  {
    title: "Visual Learning",
    score: 78,
    color: "bg-edu-primary"
  },
  {
    title: "Kinesthetic Learning",
    score: 65,
    color: "bg-edu-accent3"
  },
  {
    title: "Auditory Learning",
    score: 42,
    color: "bg-edu-secondary"
  },
  {
    title: "Reading/Writing",
    score: 60,
    color: "bg-edu-accent1"
  },
];

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-24 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <Link to="/" className="text-edu-primary flex items-center mb-2">
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to Home
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold text-edu-dark">
                Student Dashboard
              </h1>
              <p className="text-gray-600">Welcome back, Sarah! Here's your personalized learning journey.</p>
            </div>
            <div className="hidden md:block">
              <Button className="bg-edu-primary hover:bg-edu-primary/90">
                Start Today's Lessons
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue="dashboard" className="space-y-8" onValueChange={setActiveTab}>
            <TabsList className="bg-white shadow-sm">
              <TabsTrigger value="dashboard" className="data-[state=active]:bg-edu-primary data-[state=active]:text-white">
                Dashboard
              </TabsTrigger>
              <TabsTrigger value="courses" className="data-[state=active]:bg-edu-primary data-[state=active]:text-white">
                My Courses
              </TabsTrigger>
              <TabsTrigger value="insights" className="data-[state=active]:bg-edu-primary data-[state=active]:text-white">
                Learning Insights
              </TabsTrigger>
              <TabsTrigger value="family" className="data-[state=active]:bg-edu-primary data-[state=active]:text-white">
                Family Portal
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="dashboard">
              <Card className="border-0 shadow-sm overflow-hidden">
                <div className="bg-gradient-to-r from-edu-primary to-edu-accent3 h-2" />
                <CardHeader>
                  <CardTitle>Your Learning Plan for Today</CardTitle>
                  <CardDescription>
                    Based on your learning style and progress, we've customized today's lessons.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="col-span-2">
                      <h3 className="font-medium text-lg mb-4">Recommended Lessons</h3>
                      <RecommendedLessons lessons={recommendedLessons} />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-4">Learning Stats</h3>
                      <LearningStats />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="mt-8">
                <h3 className="font-medium text-xl mb-4">Your Courses</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {currentCourses.slice(0, 4).map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="courses">
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle>My Courses</CardTitle>
                  <CardDescription>All your current courses and learning paths.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {currentCourses.map((course) => (
                      <CourseCard key={course.id} course={course} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="insights">
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle>Your Learning Style Profile</CardTitle>
                  <CardDescription>
                    SmartSpark has analyzed your learning patterns to identify your optimal learning style.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-medium text-lg mb-4">Learning Style Breakdown</h3>
                      <div className="space-y-6">
                        {learningInsights.map((insight, index) => (
                          <div key={index}>
                            <div className="flex justify-between items-center mb-1">
                              <span className="font-medium">{insight.title}</span>
                              <span className="text-edu-primary font-medium">{insight.score}%</span>
                            </div>
                            <Progress value={insight.score} className={`h-3 ${insight.color}`} />
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-8 bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2 flex items-center">
                          <BrainCircuit className="h-5 w-5 mr-2 text-edu-accent3" />
                          AI-Generated Recommendations
                        </h4>
                        <p className="text-gray-700 mb-3">
                          Based on your learning profile, we recommend:
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 mr-2 text-edu-primary shrink-0" />
                            <span>Prioritize visual learning materials with diagrams and videos</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 mr-2 text-edu-primary shrink-0" />
                            <span>Incorporate hands-on activities for complex topics</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 mr-2 text-edu-primary shrink-0" />
                            <span>Supplement with written summaries for reinforcement</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-lg mb-4">Subject Performance</h3>
                      <div className="space-y-4">
                        <div className="bg-white p-4 rounded-lg border">
                          <div className="flex justify-between items-center">
                            <h4 className="font-medium">Mathematics</h4>
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              <Star className="h-4 w-4 text-gray-300" />
                            </div>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">Strong in algebra, needs work on geometry</p>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg border">
                          <div className="flex justify-between items-center">
                            <h4 className="font-medium">Science</h4>
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              <Star className="h-4 w-4 text-gray-300" />
                              <Star className="h-4 w-4 text-gray-300" />
                            </div>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">Good understanding of biology concepts</p>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg border">
                          <div className="flex justify-between items-center">
                            <h4 className="font-medium">Language Arts</h4>
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                            </div>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">Excellent comprehension and writing skills</p>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <h3 className="font-medium text-lg mb-3">Topics to Review</h3>
                        <div className="bg-white p-4 rounded-lg border">
                          <ul className="space-y-2">
                            <li className="flex items-center text-edu-secondary">
                              <FileText className="h-4 w-4 mr-2" />
                              <span>Geometry - Understanding Angles</span>
                            </li>
                            <li className="flex items-center text-edu-secondary">
                              <FileText className="h-4 w-4 mr-2" />
                              <span>Science - Chemical Reactions</span>
                            </li>
                            <li className="flex items-center text-edu-secondary">
                              <FileText className="h-4 w-4 mr-2" />
                              <span>History - Ancient Civilizations</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="family">
              <FamilyPortal />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StudentDashboard;
