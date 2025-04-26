
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BookOpen, BrainCircuit, ArrowLeft, Star, PlayCircle, FileText, BarChart } from "lucide-react";

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
              <TabsTrigger value="resources" className="data-[state=active]:bg-edu-primary data-[state=active]:text-white">
                Resources
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="dashboard" className="space-y-8">
              {/* Welcome Card */}
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
                      <div className="space-y-4">
                        {recommendedLessons.map((lesson) => (
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
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-lg mb-4">Learning Stats</h3>
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
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Current Courses */}
              <div>
                <h3 className="font-medium text-xl mb-4">Your Courses</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {currentCourses.slice(0, 4).map((course) => (
                    <Card key={course.id} className="border-0 shadow-sm card-hover">
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
                  ))}
                </div>
                {currentCourses.length > 4 && (
                  <div className="text-center mt-4">
                    <Button variant="link" className="text-edu-primary">
                      View All Courses
                    </Button>
                  </div>
                )}
              </div>
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
            
            <TabsContent value="courses">
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle>My Courses</CardTitle>
                  <CardDescription>
                    All your current courses and learning paths.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-4">
                    {currentCourses.map((course) => (
                      <div key={course.id} className="flex bg-gray-50 rounded-lg p-4 card-hover">
                        <div className="mr-4">
                          <div className="w-12 h-12 rounded-full bg-edu-primary/10 flex items-center justify-center">
                            <BookOpen className="h-6 w-6 text-edu-primary" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                            <div>
                              <h4 className="font-medium">{course.title}</h4>
                              <p className="text-sm text-gray-500">{course.subject}</p>
                            </div>
                            <div className="mt-2 md:mt-0 flex space-x-2">
                              <Button size="sm" variant="outline" className="text-edu-primary border-edu-primary hover:bg-edu-primary hover:text-white">
                                View
                              </Button>
                              <Button size="sm" className="bg-edu-primary hover:bg-edu-primary/90">
                                Continue
                              </Button>
                            </div>
                          </div>
                          <div className="mt-3">
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm text-gray-500">Progress</span>
                              <span className="text-sm text-edu-primary font-medium">{course.progress}%</span>
                            </div>
                            <Progress value={course.progress} className="h-2" />
                          </div>
                          <div className="mt-2 flex flex-col md:flex-row md:justify-between text-sm">
                            <p className="text-gray-500">
                              <span>Next lesson: </span>
                              <span className="font-medium text-edu-dark">{course.nextLesson}</span>
                            </p>
                            <p className="text-gray-500">Last accessed: {course.lastAccessed}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="resources">
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle>Learning Resources</CardTitle>
                  <CardDescription>
                    Additional materials to enhance your learning experience.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-medium text-lg mb-3 flex items-center">
                        <BookOpen className="h-5 w-5 mr-2 text-edu-primary" />
                        Study Guides
                      </h3>
                      <ul className="space-y-2">
                        <li><a href="#" className="text-edu-primary hover:underline">Mathematics - Algebra</a></li>
                        <li><a href="#" className="text-edu-primary hover:underline">Science - Biology Basics</a></li>
                        <li><a href="#" className="text-edu-primary hover:underline">History - World War II</a></li>
                        <li><a href="#" className="text-edu-primary hover:underline">Language Arts - Essay Writing</a></li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-medium text-lg mb-3 flex items-center">
                        <PlayCircle className="h-5 w-5 mr-2 text-edu-accent3" />
                        Video Tutorials
                      </h3>
                      <ul className="space-y-2">
                        <li><a href="#" className="text-edu-primary hover:underline">Introduction to Quadratic Equations</a></li>
                        <li><a href="#" className="text-edu-primary hover:underline">Cell Structure and Function</a></li>
                        <li><a href="#" className="text-edu-primary hover:underline">Ancient Greece: Culture and Legacy</a></li>
                        <li><a href="#" className="text-edu-primary hover:underline">Grammar Essentials</a></li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-medium text-lg mb-3 flex items-center">
                        <FileText className="h-5 w-5 mr-2 text-edu-secondary" />
                        Practice Exercises
                      </h3>
                      <ul className="space-y-2">
                        <li><a href="#" className="text-edu-primary hover:underline">Algebra Problem Set</a></li>
                        <li><a href="#" className="text-edu-primary hover:underline">Biology Lab Simulations</a></li>
                        <li><a href="#" className="text-edu-primary hover:underline">Historical Document Analysis</a></li>
                        <li><a href="#" className="text-edu-primary hover:underline">Creative Writing Prompts</a></li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StudentDashboard;
