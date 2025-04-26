
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, Users, BookOpen, AlertTriangle, BarChart3, 
  BookMarked, BrainCircuit, CheckCircle, FileText, Settings, PlusCircle
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const students = [
  {
    id: 1,
    name: "Sarah Johnson",
    grade: "8th",
    avatar: "SJ",
    progress: 78,
    strengths: ["Visual learning", "Mathematics", "Language Arts"],
    needsHelp: ["Geometry", "Chemical Reactions"],
    lastActive: "Today",
    status: "on-track"
  },
  {
    id: 2,
    name: "Michael Chen",
    grade: "8th",
    avatar: "MC",
    progress: 92,
    strengths: ["Logical reasoning", "Science", "Mathematics"],
    needsHelp: [],
    lastActive: "Today",
    status: "advanced"
  },
  {
    id: 3,
    name: "Jessica Rodriguez",
    grade: "8th",
    avatar: "JR",
    progress: 45,
    strengths: ["Creative writing", "History"],
    needsHelp: ["Algebra", "Science concepts"],
    lastActive: "Yesterday",
    status: "needs-help"
  },
  {
    id: 4,
    name: "David Wilson",
    grade: "8th",
    avatar: "DW",
    progress: 62,
    strengths: ["Auditory learning", "Social studies"],
    needsHelp: ["Grammar", "Mathematics"],
    lastActive: "2 days ago",
    status: "on-track"
  },
  {
    id: 5,
    name: "Emily Parker",
    grade: "8th",
    avatar: "EP",
    progress: 88,
    strengths: ["Visual learning", "Reading comprehension"],
    needsHelp: ["Scientific terminology"],
    lastActive: "Today",
    status: "advanced"
  },
];

const classInsights = [
  {
    subject: "Mathematics",
    averageScore: 74,
    highestTopic: "Basic Algebra",
    lowestTopic: "Geometry",
    recommendedAction: "Focus on visual geometry examples"
  },
  {
    subject: "Science",
    averageScore: 68,
    highestTopic: "Plant Biology",
    lowestTopic: "Chemical Reactions",
    recommendedAction: "Add more hands-on chemistry experiments"
  },
  {
    subject: "Language Arts",
    averageScore: 82,
    highestTopic: "Reading Comprehension",
    lowestTopic: "Grammar Rules",
    recommendedAction: "Incorporate interactive grammar exercises"
  },
  {
    subject: "History",
    averageScore: 76,
    highestTopic: "World War II",
    lowestTopic: "Ancient Civilizations",
    recommendedAction: "Use more visual storytelling for ancient history"
  },
];

const courses = [
  {
    id: 1,
    title: "Pre-Algebra",
    grade: "8th Grade",
    students: 28,
    averageProgress: 71,
    lastUpdated: "2 days ago"
  },
  {
    id: 2,
    title: "Life Sciences",
    grade: "8th Grade",
    students: 25,
    averageProgress: 65,
    lastUpdated: "1 week ago"
  },
  {
    id: 3,
    title: "World History",
    grade: "8th Grade",
    students: 30,
    averageProgress: 78,
    lastUpdated: "Yesterday"
  },
  {
    id: 4,
    title: "English Composition",
    grade: "8th Grade",
    students: 27,
    averageProgress: 80,
    lastUpdated: "Today"
  },
];

const TeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case "advanced": return "bg-green-100 text-green-800";
      case "on-track": return "bg-blue-100 text-blue-800";
      case "needs-help": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

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
                Teacher Dashboard
              </h1>
              <p className="text-gray-600">Welcome, Ms. Anderson! Here's an overview of your students' progress.</p>
            </div>
            <div className="hidden md:block">
              <Button className="bg-edu-primary hover:bg-edu-primary/90">
                Create Lesson Plan
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue="dashboard" className="space-y-8" onValueChange={setActiveTab}>
            <TabsList className="bg-white shadow-sm">
              <TabsTrigger value="dashboard" className="data-[state=active]:bg-edu-primary data-[state=active]:text-white">
                Dashboard
              </TabsTrigger>
              <TabsTrigger value="students" className="data-[state=active]:bg-edu-primary data-[state=active]:text-white">
                Students
              </TabsTrigger>
              <TabsTrigger value="courses" className="data-[state=active]:bg-edu-primary data-[state=active]:text-white">
                Courses
              </TabsTrigger>
              <TabsTrigger value="insights" className="data-[state=active]:bg-edu-primary data-[state=active]:text-white">
                Insights
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="dashboard" className="space-y-8">
              {/* Overview Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-edu-primary/10 p-3 rounded-full">
                        <Users className="h-6 w-6 text-edu-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Total Students</p>
                        <h3 className="text-2xl font-bold text-edu-dark">32</h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-edu-accent1/10 p-3 rounded-full">
                        <BookOpen className="h-6 w-6 text-edu-accent1" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Active Courses</p>
                        <h3 className="text-2xl font-bold text-edu-dark">4</h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <BarChart3 className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Class Average</p>
                        <h3 className="text-2xl font-bold text-edu-dark">76%</h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-red-100 p-3 rounded-full">
                        <AlertTriangle className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Needs Attention</p>
                        <h3 className="text-2xl font-bold text-edu-dark">5</h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Students Requiring Attention */}
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle>Students Requiring Attention</CardTitle>
                  <CardDescription>
                    These students may need additional support based on their performance data.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {students.filter(s => s.status === "needs-help").map((student) => (
                      <div key={student.id} className="flex items-start p-4 bg-red-50 rounded-lg">
                        <Avatar className="h-10 w-10 mr-4">
                          <AvatarFallback className="bg-red-200 text-red-800">{student.avatar}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                            <div>
                              <h4 className="font-medium">{student.name}</h4>
                              <p className="text-sm text-gray-500">{student.grade} • Last active: {student.lastActive}</p>
                            </div>
                            <div className="mt-2 md:mt-0">
                              <Button size="sm" className="bg-edu-primary hover:bg-edu-primary/90">
                                View Details
                              </Button>
                            </div>
                          </div>
                          <div className="mt-3">
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm text-gray-500">Overall Progress</span>
                              <span className="text-sm text-edu-primary font-medium">{student.progress}%</span>
                            </div>
                            <Progress value={student.progress} className="h-2" />
                          </div>
                          <div className="mt-3">
                            <p className="text-sm text-gray-700 font-medium">Areas needing improvement:</p>
                            <div className="flex flex-wrap gap-2 mt-1">
                              {student.needsHelp.map((item, index) => (
                                <Badge key={index} variant="outline" className="bg-red-100 text-red-800 border-red-200">
                                  {item}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Class Insights */}
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BrainCircuit className="h-5 w-5 mr-2 text-edu-accent3" />
                    AI-Generated Insights
                  </CardTitle>
                  <CardDescription>
                    SmartSpark's AI has analyzed your students' performance and generated these recommendations.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {classInsights.map((insight, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-medium text-lg text-edu-dark">{insight.subject}</h3>
                        <div className="mt-2 space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Class Average:</span>
                            <span className="font-medium">{insight.averageScore}%</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Strongest Topic:</span>
                            <span className="font-medium text-green-600">{insight.highestTopic}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Needs Improvement:</span>
                            <span className="font-medium text-red-600">{insight.lowestTopic}</span>
                          </div>
                        </div>
                        <div className="mt-4 bg-edu-primary/5 p-3 rounded border border-edu-primary/10">
                          <p className="text-sm flex items-start">
                            <CheckCircle className="h-4 w-4 mr-2 text-edu-primary shrink-0 mt-0.5" />
                            <span>{insight.recommendedAction}</span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Recent Activity */}
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>
                    Activity from your students in the past 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-full mr-3">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm">
                          <span className="font-medium">Michael Chen</span> completed <span className="font-medium">Advanced Algebra Unit 3</span> with a score of 95%
                        </p>
                        <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-3">
                        <BookOpen className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm">
                          <span className="font-medium">Emily Parker</span> started <span className="font-medium">Cell Biology Module 2</span>
                        </p>
                        <p className="text-xs text-gray-500 mt-1">4 hours ago</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-yellow-100 p-2 rounded-full mr-3">
                        <AlertTriangle className="h-4 w-4 text-yellow-600" />
                      </div>
                      <div>
                        <p className="text-sm">
                          <span className="font-medium">Jessica Rodriguez</span> is struggling with <span className="font-medium">Linear Equations</span>
                        </p>
                        <p className="text-xs text-gray-500 mt-1">5 hours ago</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-purple-100 p-2 rounded-full mr-3">
                        <FileText className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-sm">
                          <span className="font-medium">David Wilson</span> submitted <span className="font-medium">History Essay</span> for review
                        </p>
                        <p className="text-xs text-gray-500 mt-1">Yesterday</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 text-center">
                    <Button variant="link" className="text-edu-primary">
                      View All Activity
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="students">
              <Card className="border-0 shadow-sm">
                <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <div>
                    <CardTitle>Student Roster</CardTitle>
                    <CardDescription>
                      View and manage all your students.
                    </CardDescription>
                  </div>
                  <Button className="mt-4 sm:mt-0 bg-edu-primary hover:bg-edu-primary/90">
                    <PlusCircle className="h-4 w-4 mr-2" /> Add Student
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {students.map((student) => (
                      <div key={student.id} className="flex items-start p-4 bg-gray-50 rounded-lg">
                        <Avatar className="h-10 w-10 mr-4">
                          <AvatarFallback className="bg-edu-primary/20 text-edu-primary">{student.avatar}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                            <div className="flex items-center">
                              <h4 className="font-medium">{student.name}</h4>
                              <Badge className={`ml-2 ${getStatusColor(student.status)}`}>
                                {student.status === "advanced" ? "Advanced" : 
                                 student.status === "on-track" ? "On Track" : "Needs Help"}
                              </Badge>
                            </div>
                            <div className="mt-2 md:mt-0 flex space-x-2">
                              <Button size="sm" variant="outline" className="border-edu-primary text-edu-primary hover:bg-edu-primary hover:text-white">
                                Message
                              </Button>
                              <Button size="sm" className="bg-edu-primary hover:bg-edu-primary/90">
                                View Profile
                              </Button>
                            </div>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">{student.grade} • Last active: {student.lastActive}</p>
                          <div className="mt-3">
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm text-gray-500">Overall Progress</span>
                              <span className="text-sm text-edu-primary font-medium">{student.progress}%</span>
                            </div>
                            <Progress value={student.progress} className="h-2" />
                          </div>
                          <div className="mt-3 flex flex-col sm:flex-row sm:space-x-6">
                            <div>
                              <p className="text-sm text-gray-700 font-medium">Strengths:</p>
                              <div className="flex flex-wrap gap-2 mt-1">
                                {student.strengths.map((strength, index) => (
                                  <Badge key={index} variant="outline" className="bg-green-100 text-green-800 border-green-200">
                                    {strength}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            {student.needsHelp.length > 0 && (
                              <div className="mt-2 sm:mt-0">
                                <p className="text-sm text-gray-700 font-medium">Needs Improvement:</p>
                                <div className="flex flex-wrap gap-2 mt-1">
                                  {student.needsHelp.map((item, index) => (
                                    <Badge key={index} variant="outline" className="bg-red-100 text-red-800 border-red-200">
                                      {item}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="courses">
              <Card className="border-0 shadow-sm">
                <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <div>
                    <CardTitle>Your Courses</CardTitle>
                    <CardDescription>
                      Manage your courses and curriculum.
                    </CardDescription>
                  </div>
                  <Button className="mt-4 sm:mt-0 bg-edu-primary hover:bg-edu-primary/90">
                    <PlusCircle className="h-4 w-4 mr-2" /> Create Course
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {courses.map((course) => (
                      <Card key={course.id} className="border shadow-sm card-hover">
                        <CardHeader>
                          <CardTitle className="text-lg">{course.title}</CardTitle>
                          <CardDescription>{course.grade}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-sm text-gray-500">Average Progress</span>
                                <span className="text-sm text-edu-primary font-medium">{course.averageProgress}%</span>
                              </div>
                              <Progress value={course.averageProgress} className="h-2" />
                            </div>
                            <div className="pt-2 flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                              <div className="text-sm text-gray-600">
                                <span className="font-medium">{course.students}</span> students enrolled
                              </div>
                              <div className="text-sm text-gray-600">
                                Last updated: {course.lastUpdated}
                              </div>
                            </div>
                            <div className="pt-2 flex space-x-2">
                              <Button variant="outline" className="flex-1 border-edu-primary text-edu-primary hover:bg-edu-primary hover:text-white">
                                Edit
                              </Button>
                              <Button className="flex-1 bg-edu-primary hover:bg-edu-primary/90">
                                Manage
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="insights">
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BrainCircuit className="h-5 w-5 mr-2 text-edu-accent3" />
                    AI-Generated Teaching Insights
                  </CardTitle>
                  <CardDescription>
                    Personalized teaching recommendations based on your students' data.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="bg-edu-primary/5 p-6 rounded-lg border border-edu-primary/20">
                      <h3 className="font-medium text-xl text-edu-dark mb-4">Overall Class Insights</h3>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <CheckCircle className="h-5 w-5 mr-3 text-edu-primary shrink-0 mt-0.5" />
                          <p>76% of your students are visual learners. Consider incorporating more diagrams, charts, and visual aids in your lessons.</p>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="h-5 w-5 mr-3 text-edu-primary shrink-0 mt-0.5" />
                          <p>Your class shows strongest performance in reading comprehension and basic algebra, but struggles with geometry concepts and chemical reactions.</p>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="h-5 w-5 mr-3 text-edu-primary shrink-0 mt-0.5" />
                          <p>5 students need additional support with mathematical concepts. Consider creating a small group session focused on visual representations of geometry.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg border">
                        <h3 className="font-medium text-lg text-edu-dark mb-3">Recommended Lesson Adjustments</h3>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <div className="bg-edu-accent1/10 p-1.5 rounded-full mr-2 mt-0.5">
                              <BookMarked className="h-4 w-4 text-edu-accent1" />
                            </div>
                            <span className="text-sm">For Mathematics: Include more interactive geometry manipulatives and 3D models</span>
                          </li>
                          <li className="flex items-start">
                            <div className="bg-edu-accent1/10 p-1.5 rounded-full mr-2 mt-0.5">
                              <BookMarked className="h-4 w-4 text-edu-accent1" />
                            </div>
                            <span className="text-sm">For Science: Add hands-on lab demonstrations for chemical reactions</span>
                          </li>
                          <li className="flex items-start">
                            <div className="bg-edu-accent1/10 p-1.5 rounded-full mr-2 mt-0.5">
                              <BookMarked className="h-4 w-4 text-edu-accent1" />
                            </div>
                            <span className="text-sm">For History: Incorporate more visual timelines and interactive maps</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg border">
                        <h3 className="font-medium text-lg text-edu-dark mb-3">Student Grouping Suggestions</h3>
                        <p className="text-sm mb-3">Based on learning styles and progress, we recommend the following student groups:</p>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <div className="bg-edu-secondary/10 p-1.5 rounded-full mr-2 mt-0.5">
                              <Users className="h-4 w-4 text-edu-secondary" />
                            </div>
                            <span className="text-sm">Group 1 (Advanced): Michael, Emily, and 3 others - Challenge with advanced material</span>
                          </li>
                          <li className="flex items-start">
                            <div className="bg-edu-secondary/10 p-1.5 rounded-full mr-2 mt-0.5">
                              <Users className="h-4 w-4 text-edu-secondary" />
                            </div>
                            <span className="text-sm">Group 2 (Core): Sarah, David, and 12 others - Continue with standard curriculum pace</span>
                          </li>
                          <li className="flex items-start">
                            <div className="bg-edu-secondary/10 p-1.5 rounded-full mr-2 mt-0.5">
                              <Users className="h-4 w-4 text-edu-secondary" />
                            </div>
                            <span className="text-sm">Group 3 (Additional Support): Jessica and 4 others - Focus on fundamentals with more visual aids</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="font-medium text-lg text-edu-dark mb-3">Customized Curriculum Suggestions</h3>
                      <p className="text-sm mb-4">SmartSpark has generated these custom curriculum adjustments based on your class's unique learning profile:</p>
                      
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <Settings className="h-5 w-5 mr-3 text-edu-accent3 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium">Adaptive Learning Paths</p>
                            <p className="text-sm text-gray-600 mt-1">Enable personalized learning paths for Jessica, David, and 3 others who would benefit from alternative teaching approaches.</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <Settings className="h-5 w-5 mr-3 text-edu-accent3 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium">Supplemental Materials</p>
                            <p className="text-sm text-gray-600 mt-1">Add the "Visual Mathematics" module to your geometry lessons and "Interactive Chemistry" simulations for science.</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <Settings className="h-5 w-5 mr-3 text-edu-accent3 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium">Assessment Modifications</p>
                            <p className="text-sm text-gray-600 mt-1">Consider offering project-based assessments as alternatives to traditional tests for students with stronger visual-spatial abilities.</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <Button className="bg-edu-primary hover:bg-edu-primary/90">
                          Implement Suggestions
                        </Button>
                      </div>
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

export default TeacherDashboard;
