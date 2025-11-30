import { Calendar, Music, Palette, Trophy, Microscope, Globe2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import stemLab from "@/assets/stem-lab.jpg";
import artsStudio from "@/assets/arts-studio.jpg";
import sportsField from "@/assets/sports-field.jpg";

const facilities = [
  {
    title: "STEM Labs",
    description: "State-of-the-art science, technology, engineering, and mathematics laboratories with modern equipment",
    icon: Microscope,
    image: stemLab,
  },
  {
    title: "Creative Arts Center",
    description: "Dedicated spaces for music, visual arts, drama, and cultural programs celebrating Nigerian heritage",
    icon: Palette,
    image: artsStudio,
  },
  {
    title: "Sports Complex",
    description: "Professional sports facilities including football fields, basketball courts, and indoor athletics center",
    icon: Trophy,
    image: sportsField,
  },
];

const activities = [
  {
    category: "Arts & Culture",
    icon: Music,
    items: ["Music Band", "Drama Club", "Traditional Dance", "Visual Arts", "Photography"],
  },
  {
    category: "STEM & Innovation",
    icon: Microscope,
    items: ["Robotics Club", "Coding Academy", "Science Olympiad", "Math Club", "Innovation Lab"],
  },
  {
    category: "Sports & Wellness",
    icon: Trophy,
    items: ["Football", "Basketball", "Athletics", "Swimming", "Taekwondo"],
  },
  {
    category: "Leadership & Service",
    icon: Globe2,
    items: ["Student Council", "Debate Team", "Model UN", "Community Service", "Peer Mentoring"],
  },
];

const upcomingEvents = [
  {
    date: "Dec 15, 2025",
    title: "Annual STEM Fair",
    description: "Students showcase innovative projects and experiments",
  },
  {
    date: "Jan 20, 2026",
    title: "Cultural Heritage Day",
    description: "Celebrating Nigerian diversity through music, dance, and food",
  },
  {
    date: "Feb 10, 2026",
    title: "Inter-House Sports Competition",
    description: "Annual athletics championship between school houses",
  },
  {
    date: "Mar 5, 2026",
    title: "Parent-Teacher Conference",
    description: "Discuss student progress and academic goals",
  },
];

export default function CampusLife() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-5xl font-bold text-primary mb-4">
            Campus Life
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A vibrant community where students thrive academically, socially, and personally
          </p>
        </div>

        {/* Facilities Section */}
        <div className="mb-16">
          <h2 className="font-display text-3xl font-bold text-center text-primary mb-8">
            World-Class Facilities
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all">
                <div className="h-56 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <facility.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-primary">
                      {facility.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Extracurricular Activities */}
        <div className="mb-16">
          <h2 className="font-display text-3xl font-bold text-center text-primary mb-8">
            Extracurricular Activities
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {activities.map((activity, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <activity.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-primary">
                      {activity.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activity.items.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-muted rounded-full text-sm font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Events Calendar */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-8 h-8 text-secondary" />
                  <h2 className="font-display text-2xl font-bold text-primary">
                    Upcoming Events
                  </h2>
                </div>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div
                      key={index}
                      className="flex gap-4 p-4 rounded-lg hover:bg-muted transition-colors"
                    >
                      <div className="flex-shrink-0 w-20 text-center">
                        <div className="text-2xl font-bold text-secondary">
                          {event.date.split(" ")[1].replace(",", "")}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {event.date.split(" ")[0]}
                        </div>
                      </div>
                      <div className="flex-1 border-l-2 border-accent pl-4">
                        <h3 className="font-bold text-lg text-primary mb-1">
                          {event.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-accent to-accent/80 text-white">
              <CardContent className="pt-6">
                <Globe2 className="w-12 h-12 mb-4" />
                <h3 className="font-display text-xl font-bold mb-3">
                  Virtual Campus Tour
                </h3>
                <p className="text-sm mb-4 opacity-90">
                  Experience our facilities in immersive 360° virtual reality
                </p>
                <Link to="/vr-tour">
                  <Button
                    variant="outline"
                    className="w-full bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-accent"
                  >
                    Start VR Tour
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <h3 className="font-display text-xl font-bold text-primary mb-3">
                  Parent Portal
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Access attendance records, grades, and event RSVPs
                </p>
                <Link to="/portal">
                  <Button variant="outline" className="w-full">
                    Access Portal
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
