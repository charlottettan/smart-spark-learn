
import { 
  Brain, 
  UserCheck, 
  BarChart3, 
  RefreshCw, 
  Layers, 
  Lightbulb
} from "lucide-react";

const features = [
  {
    icon: <Brain className="h-10 w-10 text-edu-primary" />,
    title: "Adaptive Learning",
    description: "AI identifies each student's learning style and adapts content presentation accordingly."
  },
  {
    icon: <UserCheck className="h-10 w-10 text-edu-primary" />,
    title: "Teacher Customization",
    description: "Teachers can specify skills to focus on and receive insights for targeted intervention."
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-edu-primary" />,
    title: "Progress Analytics",
    description: "Detailed analytics on student progress, highlighting areas of strength and improvement."
  },
  {
    icon: <RefreshCw className="h-10 w-10 text-edu-primary" />,
    title: "Continuous Feedback",
    description: "Real-time feedback on which topics need additional focus or different approaches."
  },
  {
    icon: <Layers className="h-10 w-10 text-edu-primary" />,
    title: "Curriculum Integration",
    description: "Seamlessly integrates with existing curriculum while adapting to updates and changes."
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-edu-primary" />,
    title: "Lifelong Learning",
    description: "Platform grows with students, supporting continuous education beyond the classroom."
  }
];

const Features = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-edu-dark mb-4">
            How SmartSpark Transforms Learning
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered platform addresses the challenges of modern education by providing personalized learning experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-edu-light rounded-xl p-6 shadow-sm card-hover">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-edu-dark mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
