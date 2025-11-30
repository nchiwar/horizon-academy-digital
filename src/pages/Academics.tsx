import { BookOpen, Brain, Globe, Users, Award, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import primaryClassroom from "@/assets/primary-classroom.jpg";
import secondaryClassroom from "@/assets/secondary-classroom.jpg";

const primarySubjects = [
  "English Language & Literature",
  "Mathematics",
  "Basic Science",
  "Social Studies",
  "Yoruba/Igbo/Hausa",
  "Creative Arts",
  "Physical Education",
  "Computer Studies",
];

const secondarySubjects = [
  "English Language",
  "Mathematics",
  "Biology, Chemistry, Physics",
  "Economics, Government, Geography",
  "Literature in English",
  "Further Mathematics",
  "Computer Science",
  "Technical Drawing",
];

const features = [
  {
    icon: Brain,
    title: "Montessori-Inspired Primary",
    description: "Child-centered learning approach fostering independence and critical thinking",
  },
  {
    icon: Globe,
    title: "Nigerian-British Hybrid",
    description: "Blend of Nigerian curriculum with Cambridge International standards",
  },
  {
    icon: Users,
    title: "Small Class Sizes",
    description: "Maximum 20 students per class for personalized attention",
  },
  {
    icon: Award,
    title: "Certified Teachers",
    description: "Highly qualified educators with international teaching certifications",
  },
];

export default function Academics() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-5xl font-bold text-primary mb-4">
            Academic Excellence
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A rigorous curriculum blending Nigerian heritage with global standards
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-secondary" />
                <h3 className="font-display font-bold text-lg text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Curriculum Tabs */}
        <Tabs defaultValue="primary" className="mb-16">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="primary" className="font-semibold">
              Primary School
            </TabsTrigger>
            <TabsTrigger value="secondary" className="font-semibold">
              Secondary School
            </TabsTrigger>
          </TabsList>

          <TabsContent value="primary" className="animate-fade-in">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="font-display text-2xl">
                      Primary Curriculum (Grades 1-6)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      Our Montessori-inspired primary program nurtures curiosity and 
                      independence while building strong foundational skills in core subjects.
                    </p>
                    <h4 className="font-semibold text-lg mb-3">Core Subjects:</h4>
                    <ul className="space-y-2">
                      {primarySubjects.map((subject, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-accent flex-shrink-0" />
                          <span>{subject}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent">
                      <div className="flex items-start gap-3">
                        <TrendingUp className="h-5 w-5 text-accent mt-0.5" />
                        <div className="text-sm">
                          <p className="font-semibold mb-1">Progress Tracking</p>
                          <p className="text-muted-foreground">
                            Parents can monitor their child's progress through our 
                            online portal with real-time updates and assessments.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div>
                <img
                  src={primaryClassroom}
                  alt="Primary School Classroom"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="secondary" className="animate-fade-in">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <img
                  src={secondaryClassroom}
                  alt="Secondary School Classroom"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="font-display text-2xl">
                      Secondary Curriculum (JSS 1 - SS 3)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      Our Nigerian-British hybrid curriculum prepares students for both 
                      WAEC and Cambridge IGCSE examinations, opening doors to universities worldwide.
                    </p>
                    <h4 className="font-semibold text-lg mb-3">Core Subjects:</h4>
                    <ul className="space-y-2">
                      {secondarySubjects.map((subject, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-accent flex-shrink-0" />
                          <span>{subject}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 p-4 bg-secondary/10 rounded-lg border border-secondary">
                      <div className="flex items-start gap-3">
                        <Award className="h-5 w-5 text-secondary mt-0.5" />
                        <div className="text-sm">
                          <p className="font-semibold mb-1">University Placement</p>
                          <p className="text-muted-foreground">
                            98% of our graduates gain admission to top universities 
                            in Nigeria, UK, USA, and Canada.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Academic Support */}
        <Card className="hero-gradient text-white">
          <CardContent className="py-12 text-center">
            <h2 className="font-display text-3xl font-bold mb-4">
              Personalized Learning Support
            </h2>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Every student receives individualized attention to reach their full potential
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg">
                <h3 className="font-bold text-lg mb-2">After-School Tutoring</h3>
                <p className="text-sm opacity-90">
                  Free academic support for students who need extra help
                </p>
              </div>
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg">
                <h3 className="font-bold text-lg mb-2">Advanced Programs</h3>
                <p className="text-sm opacity-90">
                  Enrichment courses for gifted and talented students
                </p>
              </div>
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg">
                <h3 className="font-bold text-lg mb-2">Learning Resources</h3>
                <p className="text-sm opacity-90">
                  Digital library and online learning platforms
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
