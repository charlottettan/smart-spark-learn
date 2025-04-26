
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, School, BookOpen, BrainCircuit } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      
      {/* Problems Section */}
      <section className="py-20 px-4 md:px-8 bg-edu-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-edu-dark mb-4">
              Problems We Solve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Today's educational environment faces many challenges that SmartSpark addresses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm flex items-start space-x-4 card-hover">
              <div className="bg-edu-primary/10 p-3 rounded-full">
                <School className="h-6 w-6 text-edu-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-edu-dark mb-2">Understaffed Schools</h3>
                <p className="text-gray-600">
                  With growing class sizes and fewer resources, teachers need tools that amplify their impact across more students.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm flex items-start space-x-4 card-hover">
              <div className="bg-edu-accent3/10 p-3 rounded-full">
                <BookOpen className="h-6 w-6 text-edu-accent3" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-edu-dark mb-2">Time-Consuming Lesson Planning</h3>
                <p className="text-gray-600">
                  Teachers spend countless hours creating custom lesson plans that could be automated with the right AI assistance.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm flex items-start space-x-4 card-hover">
              <div className="bg-edu-secondary/10 p-3 rounded-full">
                <BrainCircuit className="h-6 w-6 text-edu-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-edu-dark mb-2">Different Learning Styles</h3>
                <p className="text-gray-600">
                  Every student learns differently, but traditional education often uses a one-size-fits-all approach.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm flex items-start space-x-4 card-hover">
              <div className="bg-edu-accent1/10 p-3 rounded-full">
                <CheckCircle className="h-6 w-6 text-edu-accent1" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-edu-dark mb-2">Evolving Curriculum</h3>
                <p className="text-gray-600">
                  Curriculum standards change frequently, making it challenging for educators to keep materials current.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 hero-gradient text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Learning?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Join thousands of educators and students who are already using SmartSpark to create personalized learning experiences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-white text-edu-primary hover:bg-white/90">
              Get Started for Free
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Request a Demo
            </Button>
          </div>
        </div>
      </section>
      
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
