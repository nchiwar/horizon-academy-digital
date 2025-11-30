import { ArrowRight, Award, Users, GraduationCap, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroCampus from "@/assets/hero-campus.jpg";
import stemLab from "@/assets/stem-lab.jpg";
import artsStudio from "@/assets/arts-studio.jpg";
import sportsField from "@/assets/sports-field.jpg";

const stats = [
  { icon: Award, label: "Years of Excellence", value: "25+" },
  { icon: Users, label: "Students Enrolled", value: "1,200+" },
  { icon: GraduationCap, label: "University Placement", value: "98%" },
  { icon: TrendingUp, label: "Academic Excellence", value: "95%" },
];

const testimonials = [
  {
    quote: "New Horizon Academy transformed my daughter's learning journey. The personalized approach and world-class facilities are exceptional.",
    author: "Mrs. Adebayo",
    role: "Parent",
  },
  {
    quote: "The blend of Nigerian curriculum with international standards prepared me perfectly for university abroad.",
    author: "Chinedu Okafor",
    role: "Alumni, Class of 2022",
  },
  {
    quote: "As an educator, I'm proud to be part of a school that truly prioritizes innovation and student success.",
    author: "Mr. Emmanuel",
    role: "Senior Faculty",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroCampus})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Empowering Tomorrow's Leaders
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-up">
            Excellence in education through innovation, character development, and a blend of Nigerian and international curricula
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link to="/admissions">
              <Button size="lg" className="gold-gradient text-primary font-semibold text-lg px-8">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/vr-tour">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary text-lg px-8">
                Virtual Tour
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <stat.icon className="w-12 h-12 mx-auto mb-4 text-secondary" />
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-primary mb-4">
              Why Choose New Horizon Academy?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We offer a unique educational experience that prepares students for global success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all">
              <div className="h-48 overflow-hidden">
                <img
                  src={stemLab}
                  alt="STEM Laboratory"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="font-display text-2xl font-bold text-primary mb-3">
                  World-Class STEM Facilities
                </h3>
                <p className="text-muted-foreground mb-4">
                  State-of-the-art laboratories and technology centers that inspire innovation and hands-on learning.
                </p>
                <Link to="/campus-life" className="text-accent font-semibold hover:underline inline-flex items-center">
                  Explore Facilities <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all">
              <div className="h-48 overflow-hidden">
                <img
                  src={artsStudio}
                  alt="Arts Studio"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="font-display text-2xl font-bold text-primary mb-3">
                  Creative Arts Excellence
                </h3>
                <p className="text-muted-foreground mb-4">
                  Nurture creativity through music, visual arts, drama, and cultural programs celebrating Nigerian heritage.
                </p>
                <Link to="/campus-life" className="text-accent font-semibold hover:underline inline-flex items-center">
                  View Programs <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all">
              <div className="h-48 overflow-hidden">
                <img
                  src={sportsField}
                  alt="Sports Field"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="font-display text-2xl font-bold text-primary mb-3">
                  Athletic Development
                </h3>
                <p className="text-muted-foreground mb-4">
                  Professional sports facilities and coaching programs that build character and teamwork.
                </p>
                <Link to="/campus-life" className="text-accent font-semibold hover:underline inline-flex items-center">
                  Sports Programs <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-primary mb-4">
              What Our Community Says
            </h2>
            <p className="text-xl text-muted-foreground">
              Hear from parents, students, and alumni about their experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-6xl text-secondary mb-4">"</div>
                  <p className="text-lg text-foreground mb-6 italic">
                    {testimonial.quote}
                  </p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-primary">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start your child's journey to excellence today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions">
              <Button size="lg" className="gold-gradient text-primary font-semibold text-lg px-8">
                Start Application
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary text-lg px-8">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
