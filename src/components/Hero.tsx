
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-28 pb-16 px-4 md:px-8 hero-gradient text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Personalized Learning Powered by AI
          </h1>
          <p className="text-xl opacity-90">
            SmartSpark adapts to each student's unique learning style while giving teachers powerful insights and customization tools.
          </p>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
            <Button asChild size="lg" className="bg-white text-edu-primary hover:bg-white/90">
              <Link to="/student">
                Try Student Demo
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/teacher">
                Try Teacher Demo
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="relative z-10 bg-white rounded-lg shadow-xl p-4 md:p-6 animate-float">
            <div className="bg-edu-light rounded-md p-4">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-edu-accent1 flex items-center justify-center text-white font-semibold">
                  AI
                </div>
                <div className="ml-3">
                  <h3 className="text-edu-dark font-semibold">Learning Style Analysis</h3>
                  <p className="text-sm text-gray-500">Personalized for Sarah</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-md shadow-sm">
                  <h4 className="text-edu-primary font-medium text-sm">Visual Learning: 78%</h4>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div className="bg-edu-primary h-2 rounded-full" style={{ width: "78%" }}></div>
                  </div>
                </div>
                <div className="bg-white p-3 rounded-md shadow-sm">
                  <h4 className="text-edu-accent3 font-medium text-sm">Kinesthetic Learning: 65%</h4>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div className="bg-edu-accent3 h-2 rounded-full" style={{ width: "65%" }}></div>
                  </div>
                </div>
                <div className="bg-white p-3 rounded-md shadow-sm">
                  <h4 className="text-edu-secondary font-medium text-sm">Auditory Learning: 42%</h4>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div className="bg-edu-secondary h-2 rounded-full" style={{ width: "42%" }}></div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-sm text-edu-dark">
                <p>Recommendation: Prioritize visual learning materials with hands-on activities.</p>
              </div>
            </div>
          </div>
          <div className="absolute top-12 -right-4 z-0 bg-edu-accent2 rounded-lg shadow-xl p-4 opacity-70 w-3/4 h-60">
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
