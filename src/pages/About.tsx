import { Heart, Target, Eye, Leaf, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Heart,
    title: "Integrity",
    description: "We foster honesty, transparency, and ethical behavior in all our interactions",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We pursue the highest standards in teaching, learning, and personal development",
  },
  {
    icon: Users,
    title: "Diversity",
    description: "We celebrate Nigerian culture while embracing global perspectives and inclusivity",
  },
  {
    icon: Award,
    title: "Innovation",
    description: "We embrace creative thinking and cutting-edge educational methodologies",
  },
];

const facultyMembers = [
  {
    name: "Dr. Amaka Okonkwo",
    role: "Principal & Educational Director",
    credentials: "Ph.D. in Educational Leadership, Cambridge University",
    description: "25+ years of experience in international education across three continents",
  },
  {
    name: "Mr. Tunde Adeyemi",
    role: "Head of Primary School",
    credentials: "M.Ed. in Early Childhood Education, University of Lagos",
    description: "Montessori-certified educator with 15 years of teaching excellence",
  },
  {
    name: "Mrs. Fatima Ibrahim",
    role: "Head of Secondary School",
    credentials: "M.Sc. in STEM Education, University of Oxford",
    description: "Former Cambridge examiner with expertise in curriculum development",
  },
];

const sustainability = [
  {
    icon: Leaf,
    title: "Green Campus",
    description: "Solar-powered facilities and rainwater harvesting systems reduce our environmental impact",
  },
  {
    icon: Leaf,
    title: "Eco-Curriculum",
    description: "Environmental studies integrated across all grade levels to build ecological awareness",
  },
  {
    icon: Leaf,
    title: "Community Gardens",
    description: "Student-maintained organic gardens teaching sustainable agriculture and nutrition",
  },
];

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-5xl font-bold text-primary mb-4">
            About Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Shaping the future of education in Nigeria since 2000
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-8">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-secondary" />
              </div>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide world-class education that nurtures intellectual curiosity, 
                character development, and global citizenship while celebrating Nigerian 
                heritage and values. We empower students to become innovative leaders who 
                contribute positively to their communities and the world.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-8">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Eye className="w-8 h-8 text-accent" />
              </div>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">
                Our Vision
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading educational institution in West Africa, recognized for 
                academic excellence, innovation, and character development. We envision a 
                future where our graduates are critical thinkers, ethical leaders, and 
                change-makers who bridge Nigerian heritage with global opportunities.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="font-display text-3xl font-bold text-center text-primary mb-8">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8">
                  <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Faculty Leadership */}
        <div className="mb-16">
          <h2 className="font-display text-3xl font-bold text-center text-primary mb-8">
            Meet Our Leadership Team
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {facultyMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-8">
                  <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-secondary">
                      {member.name.split(" ")[0][0]}{member.name.split(" ")[1][0]}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-primary text-center mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-accent font-semibold text-center mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground mb-3 italic">
                    {member.credentials}
                  </p>
                  <p className="text-sm text-foreground">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sustainability Section */}
        <Card className="bg-gradient-to-r from-accent to-accent/80 text-white">
          <CardContent className="py-12">
            <h2 className="font-display text-3xl font-bold text-center mb-4">
              Commitment to Sustainability
            </h2>
            <p className="text-center text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Building an eco-friendly campus that teaches environmental responsibility
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {sustainability.map((item, index) => (
                <div key={index} className="p-6 bg-white/10 backdrop-blur-sm rounded-lg">
                  <item.icon className="w-10 h-10 mb-4" />
                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* History Timeline */}
        <div className="mt-16">
          <h2 className="font-display text-3xl font-bold text-center text-primary mb-8">
            Our Journey
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { year: "2000", event: "New Horizon Academy founded with 50 students" },
              { year: "2005", event: "Expanded to include secondary school program" },
              { year: "2010", event: "Achieved Cambridge International School certification" },
              { year: "2015", event: "Opened state-of-the-art STEM and innovation center" },
              { year: "2020", event: "98% university placement rate milestone achieved" },
              { year: "2025", event: "Over 1,200 students and continued growth" },
            ].map((milestone, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-2xl font-bold text-secondary">{milestone.year}</span>
                </div>
                <div className="flex-1 border-l-2 border-accent pl-6 pb-6">
                  <p className="text-lg text-foreground">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
