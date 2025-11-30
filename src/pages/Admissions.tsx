import { useState } from "react";
import { Check, ArrowRight, ArrowLeft, Calculator, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const admissionSteps = [
  {
    title: "Inquiry & Visit",
    description: "Schedule a campus tour and meet our admission team",
  },
  {
    title: "Application",
    description: "Complete and submit the online application form",
  },
  {
    title: "Assessment",
    description: "Student assessment and parent interview",
  },
  {
    title: "Decision",
    description: "Receive admission decision within 2 weeks",
  },
];

export default function Admissions() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showFeeCalculator, setShowFeeCalculator] = useState(false);
  const [formData, setFormData] = useState({
    studentName: "",
    dateOfBirth: "",
    grade: "",
    parentName: "",
    email: "",
    phone: "",
    previousSchool: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
      toast.success(`Step ${currentStep} completed!`);
    } else {
      toast.success("Application submitted successfully! We'll contact you soon.");
      console.log("Application submitted:", formData);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-5xl font-bold text-primary mb-4">
            Admissions
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Begin your child's journey to excellence at New Horizon Academy
          </p>
        </div>

        {/* Admission Process */}
        <div className="mb-16">
          <h2 className="font-display text-3xl font-bold text-center text-primary mb-8">
            Our Admission Process
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {admissionSteps.map((step, index) => (
              <Card key={index} className="relative">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl font-bold text-secondary">{index + 1}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-center text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-center text-muted-foreground">
                    {step.description}
                  </p>
                  {index < admissionSteps.length - 1 && (
                    <ArrowRight className="hidden md:block absolute -right-8 top-1/2 transform -translate-y-1/2 text-muted-foreground h-6 w-6" />
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="font-display text-2xl">
                  Application Form
                </CardTitle>
                <CardDescription>
                  Step {currentStep} of 3
                </CardDescription>
                <div className="flex gap-2 mt-4">
                  {[1, 2, 3].map((step) => (
                    <div
                      key={step}
                      className={`flex-1 h-2 rounded-full ${
                        step <= currentStep ? "bg-secondary" : "bg-muted"
                      }`}
                    />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {currentStep === 1 && (
                    <div className="space-y-4 animate-fade-in">
                      <div>
                        <Label htmlFor="studentName">Student's Full Name *</Label>
                        <Input
                          id="studentName"
                          required
                          value={formData.studentName}
                          onChange={(e) => handleChange("studentName", e.target.value)}
                          placeholder="Enter full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                        <Input
                          id="dateOfBirth"
                          type="date"
                          required
                          value={formData.dateOfBirth}
                          onChange={(e) => handleChange("dateOfBirth", e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="grade">Applying for Grade *</Label>
                        <Select
                          value={formData.grade}
                          onValueChange={(value) => handleChange("grade", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select grade" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="nursery">Nursery</SelectItem>
                            <SelectItem value="primary1">Primary 1</SelectItem>
                            <SelectItem value="primary2">Primary 2</SelectItem>
                            <SelectItem value="primary3">Primary 3</SelectItem>
                            <SelectItem value="primary4">Primary 4</SelectItem>
                            <SelectItem value="primary5">Primary 5</SelectItem>
                            <SelectItem value="primary6">Primary 6</SelectItem>
                            <SelectItem value="jss1">JSS 1</SelectItem>
                            <SelectItem value="jss2">JSS 2</SelectItem>
                            <SelectItem value="jss3">JSS 3</SelectItem>
                            <SelectItem value="ss1">SS 1</SelectItem>
                            <SelectItem value="ss2">SS 2</SelectItem>
                            <SelectItem value="ss3">SS 3</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-4 animate-fade-in">
                      <div>
                        <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                        <Input
                          id="parentName"
                          required
                          value={formData.parentName}
                          onChange={(e) => handleChange("parentName", e.target.value)}
                          placeholder="Enter full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          placeholder="+234 xxx xxx xxxx"
                        />
                      </div>
                      <div>
                        <Label htmlFor="previousSchool">Previous School (if applicable)</Label>
                        <Input
                          id="previousSchool"
                          value={formData.previousSchool}
                          onChange={(e) => handleChange("previousSchool", e.target.value)}
                          placeholder="School name"
                        />
                      </div>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="space-y-4 animate-fade-in">
                      <div>
                        <Label htmlFor="message">Additional Information</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleChange("message", e.target.value)}
                          placeholder="Tell us more about your child's interests, learning needs, or any questions you have..."
                          rows={6}
                        />
                      </div>
                      <div className="p-4 bg-accent/10 rounded-lg border border-accent">
                        <div className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-accent mt-0.5" />
                          <div className="text-sm">
                            <p className="font-semibold text-foreground mb-1">
                              Ready to Submit
                            </p>
                            <p className="text-muted-foreground">
                              By submitting this form, you agree to our terms and conditions. 
                              Our admissions team will contact you within 48 hours.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-3 pt-4">
                    {currentStep > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setCurrentStep(currentStep - 1)}
                      >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Previous
                      </Button>
                    )}
                    <Button type="submit" className="ml-auto">
                      {currentStep < 3 ? (
                        <>
                          Next Step
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      ) : (
                        <>
                          Submit Application
                          <Check className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-display text-xl flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Fee Calculator
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Estimate tuition fees based on grade and term
                </p>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setShowFeeCalculator(!showFeeCalculator)}
                >
                  {showFeeCalculator ? "Hide Calculator" : "Calculate Fees"}
                </Button>
                {showFeeCalculator && (
                  <div className="mt-4 p-4 bg-muted rounded-lg animate-fade-in">
                    <p className="text-sm font-semibold mb-2">Estimated Annual Fees:</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Primary (1-6):</span>
                        <span className="font-bold">₦2,500,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Secondary (JSS 1-3):</span>
                        <span className="font-bold">₦3,000,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Secondary (SS 1-3):</span>
                        <span className="font-bold">₦3,500,000</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-3">
                      * Fees include tuition, learning materials, and extracurricular activities
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-display text-xl flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Need Help?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Our admissions team is here to assist you
                </p>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-semibold">Email</div>
                    <a href="mailto:admissions@newhorizonacademy.ng" className="text-accent hover:underline">
                      admissions@newhorizonacademy.ng
                    </a>
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <a href="tel:+2341234567890" className="text-accent hover:underline">
                      +234 123 456 7890
                    </a>
                  </div>
                  <div>
                    <div className="font-semibold">Office Hours</div>
                    <div className="text-muted-foreground">
                      Mon - Fri: 8:00 AM - 5:00 PM
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
