
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "SmartSpark has revolutionized how I teach. I can now focus on students who need extra help while the platform adapts to each student's needs.",
    name: "Ms. Rodriguez",
    role: "5th Grade Teacher",
    avatar: "MR"
  },
  {
    quote: "I've struggled with math for years until SmartSpark. The way it presents concepts visually has helped me finally understand algebra.",
    name: "Jake L.",
    role: "8th Grade Student",
    avatar: "JL"
  },
  {
    quote: "As a principal, I've seen the difference in our test scores and student engagement since implementing SmartSpark across our district.",
    name: "Dr. Williams",
    role: "School Principal",
    avatar: "DW"
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-edu-dark mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from educators and students who have transformed their learning experience with SmartSpark.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <div className="text-4xl text-edu-accent3 mb-2">"</div>
                    <p className="text-gray-700 italic">{testimonial.quote}</p>
                  </div>
                  <div className="mt-auto flex items-center">
                    <Avatar className="h-12 w-12 border-2 border-edu-primary">
                      <AvatarFallback className="bg-edu-primary text-white">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <p className="font-semibold text-edu-dark">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
