import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, CheckCircle, FileText, Star } from "lucide-react";
import RecommendedLessons from "@/components/dashboard/RecommendedLessons";
import LearningStats from "@/components/dashboard/LearningStats";
import CourseCard from "@/components/dashboard/CourseCard";
import FamilyPortal from "@/components/dashboard/FamilyPortal";
import { Progress } from "@/components/ui/progress";
import LanguageSelector from "@/components/dashboard/LanguageSelector";
import InteractiveGames from "@/components/dashboard/InteractiveGames";

const BrainCircuit = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08 2.5 2.5 0 0 0 4.91.05L12 20V4.5Z" />
      <path d="M16 8V5c0-1.1.9-2 2-2" />
      <path d="M12 13h4" />
      <path d="M12 18h6a2 2 0 0 1 2 2v1" />
      <path d="M12 8h8" />
      <path d="M20.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
      <path d="M16.5 13a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
      <path d="M20.5 21a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
      <path d="M18.5 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
    </svg>
  );
};

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

const translations = {
  en: {
    welcome: "Welcome back, Sarah! Here's your personalized learning journey.",
    dashboard: "Dashboard",
    courses: "My Courses",
    insights: "Learning Insights",
    family: "Family Portal",
    startLessons: "Start Today's Lessons",
    learningPlan: "Your Learning Plan for Today",
    customizedLessons: "Based on your learning style and progress, we've customized today's lessons."
  },
  es: {
    welcome: "¡Bienvenida de nuevo, Sarah! Aquí está tu viaje de aprendizaje personalizado.",
    dashboard: "Tablero",
    courses: "Mis Cursos",
    insights: "Información de Aprendizaje",
    family: "Portal Familiar",
    startLessons: "Comenzar las Lecciones de Hoy",
    learningPlan: "Tu Plan de Aprendizaje para Hoy",
    customizedLessons: "Basado en tu estilo de aprendizaje y progres, hemos personalizado las lecciones de hoy."
  },
  fr: {
    welcome: "Bon retour, Sarah! Voici ton parcours d'apprentissage personnalisé.",
    dashboard: "Tableau de Bord",
    courses: "Mes Cours",
    insights: "Analyses d'Apprentissage",
    family: "Portail Familial",
    startLessons: "Commencer les Leçons d'Aujourd'hui",
    learningPlan: "Ton Plan d'Apprentissage pour Aujourd'hui",
    customizedLessons: "Selon ton style d'apprentissage et tes progrès, nous avons personnalisé les leçons d'aujourd'hui."
  }
};

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [language, setLanguage] = useState("en");
  const t = translations[language as keyof typeof translations];

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
                {t.dashboard}
              </h1>
              <p className="text-gray-600">{t.welcome}</p>
            </div>
            <div className="flex gap-4 items-center">
              <LanguageSelector onLanguageChange={setLanguage} />
              <Button className="bg-edu-primary hover:bg-edu-primary/90">
                {t.startLessons}
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue="dashboard" className="space-y-8" onValueChange={setActiveTab}>
            <TabsList className="bg-white shadow-sm">
              <TabsTrigger value="dashboard">{t.dashboard}</TabsTrigger>
              <TabsTrigger value="courses">{t.courses}</TabsTrigger>
              <TabsTrigger value="insights">{t.insights}</TabsTrigger>
              <TabsTrigger value="family">{t.family}</TabsTrigger>
            </TabsList>
            
            <TabsContent value="dashboard">
              <div className="grid gap-6">
                <InteractiveGames language={language} />
                
                <Card className="border-0 shadow-sm overflow-hidden">
                  <div className="bg-gradient-to-r from-edu-primary to-edu-accent3 h-2" />
                  <CardHeader>
                    <CardTitle>{t.learningPlan}</CardTitle>
                    <CardDescription>
                      {t.customizedLessons}
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
                
                <div>
                  <h3 className="font-medium text-xl mb-4">{t.courses}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {currentCourses.slice(0, 4).map((course) => (
                      <CourseCard key={course.id} course={course} />
                    ))}
                  </div>
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
