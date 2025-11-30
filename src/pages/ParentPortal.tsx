import { useState } from "react";
import { Calendar, BookOpen, TrendingUp, Bell, Download, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

// Mock data - would come from backend in production
const studentData = {
  name: "Chioma Adebayo",
  grade: "Primary 5",
  attendance: 98,
  recentGrades: [
    { subject: "Mathematics", score: 92, grade: "A" },
    { subject: "English", score: 88, grade: "B+" },
    { subject: "Science", score: 95, grade: "A" },
    { subject: "Social Studies", score: 90, grade: "A-" },
  ],
  upcomingEvents: [
    { date: "Dec 15", title: "STEM Fair", rsvp: false },
    { date: "Jan 10", title: "Parent-Teacher Meeting", rsvp: true },
    { date: "Jan 20", title: "Cultural Day", rsvp: false },
  ],
  announcements: [
    {
      date: "Dec 1, 2025",
      title: "Holiday Schedule",
      message: "School will close for winter break on December 20th and resume January 6th.",
    },
    {
      date: "Nov 28, 2025",
      title: "Report Cards Available",
      message: "First term report cards are now available for download in the portal.",
    },
  ],
};

export default function ParentPortal() {
  const [isLoggedIn] = useState(true); // Mock login state

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen pt-24 pb-12 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="font-display text-2xl">Parent Portal Login</CardTitle>
            <CardDescription>Access your child's academic information</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder="parent@email.com"
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <Button className="w-full gold-gradient text-primary font-semibold">
                Login
              </Button>
              <p className="text-sm text-center text-muted-foreground">
                Demo: This is a mock portal interface
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-4xl font-bold text-primary mb-2">
              Parent Portal
            </h1>
            <p className="text-muted-foreground">
              Welcome back! Here's {studentData.name}'s progress overview
            </p>
          </div>
          <Button variant="outline" size="sm">
            <User className="mr-2 h-4 w-4" />
            My Account
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Attendance</p>
                  <p className="text-2xl font-bold text-primary">{studentData.attendance}%</p>
                </div>
                <Calendar className="h-8 w-8 text-secondary" />
              </div>
              <Progress value={studentData.attendance} className="mt-3" />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Current Grade</p>
                  <p className="text-2xl font-bold text-primary">{studentData.grade}</p>
                </div>
                <BookOpen className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Average Score</p>
                  <p className="text-2xl font-bold text-primary">91%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-secondary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Notifications</p>
                  <p className="text-2xl font-bold text-primary">3</p>
                </div>
                <Bell className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="grades" className="space-y-6">
          <TabsList className="grid w-full max-w-2xl grid-cols-3">
            <TabsTrigger value="grades">Grades</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="announcements">Announcements</TabsTrigger>
          </TabsList>

          <TabsContent value="grades" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="font-display">Recent Grades</CardTitle>
                <CardDescription>Latest assessment results for {studentData.name}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {studentData.recentGrades.map((grade, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{grade.subject}</h3>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-right">
                          <p className="text-2xl font-bold text-primary">{grade.score}%</p>
                        </div>
                        <Badge className="gold-gradient text-primary font-semibold px-4 py-1">
                          {grade.grade}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex justify-end">
                  <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Download Report Card
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="events" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="font-display">Upcoming Events</CardTitle>
                <CardDescription>School events requiring your attention</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {studentData.upcomingEvents.map((event, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg border"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-16 text-center">
                          <p className="text-sm text-muted-foreground">{event.date.split(" ")[0]}</p>
                          <p className="text-2xl font-bold text-secondary">
                            {event.date.split(" ")[1]}
                          </p>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{event.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {event.rsvp ? "✓ RSVP Confirmed" : "RSVP Required"}
                          </p>
                        </div>
                      </div>
                      {!event.rsvp && (
                        <Button size="sm" className="gold-gradient text-primary font-semibold">
                          RSVP Now
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="announcements" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="font-display">School Announcements</CardTitle>
                <CardDescription>Important updates from the school administration</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {studentData.announcements.map((announcement, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-start gap-3 mb-2">
                        <Bell className="h-5 w-5 text-accent mt-1" />
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{announcement.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            {announcement.date}
                          </p>
                          <p className="text-foreground">{announcement.message}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Demo Notice */}
        <Card className="mt-8 bg-accent/10 border-accent">
          <CardContent className="pt-6">
            <p className="text-center text-sm">
              <strong>Demo Mode:</strong> This is a mock parent portal interface showing sample data. 
              In production, this would connect to Lovable Cloud backend for real-time data.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
