import { Calendar, Tag, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import stemLab from "@/assets/stem-lab.jpg";
import artsStudio from "@/assets/arts-studio.jpg";
import sportsField from "@/assets/sports-field.jpg";

const newsArticles = [
  {
    id: 1,
    title: "New Horizon Students Win National STEM Competition",
    excerpt: "Our talented students secured first place in the National Science and Technology Competition, showcasing innovative solutions to real-world problems.",
    image: stemLab,
    category: "Achievement",
    date: "December 1, 2025",
    author: "Dr. Amaka Okonkwo",
  },
  {
    id: 2,
    title: "Annual Cultural Heritage Day Celebrates Nigerian Diversity",
    excerpt: "Students and families came together to celebrate Nigeria's rich cultural tapestry through traditional dance, music, and cuisine from across the nation.",
    image: artsStudio,
    category: "Events",
    date: "November 15, 2025",
    author: "Mrs. Fatima Ibrahim",
  },
  {
    id: 3,
    title: "Sports Excellence: Inter-School Championship Victory",
    excerpt: "New Horizon Academy's athletics team dominated the inter-school championship, bringing home five gold medals and the overall trophy.",
    image: sportsField,
    category: "Sports",
    date: "October 28, 2025",
    author: "Mr. Tunde Adeyemi",
  },
  {
    id: 4,
    title: "New AI-Powered Learning Platform Launched",
    excerpt: "We're excited to introduce personalized learning paths powered by artificial intelligence, tailoring educational content to each student's unique needs.",
    image: stemLab,
    category: "Innovation",
    date: "October 10, 2025",
    author: "Tech Team",
  },
  {
    id: 5,
    title: "Alumni Spotlight: Rhodes Scholar Success Story",
    excerpt: "Former student Chinedu Okafor shares his journey from New Horizon Academy to becoming a Rhodes Scholar at Oxford University.",
    image: artsStudio,
    category: "Alumni",
    date: "September 20, 2025",
    author: "Communications",
  },
  {
    id: 6,
    title: "Sustainability Initiative: Solar Power Campus Launch",
    excerpt: "Our commitment to environmental sustainability reaches a new milestone with the completion of our campus-wide solar power installation.",
    image: sportsField,
    category: "Sustainability",
    date: "September 5, 2025",
    author: "Facilities Team",
  },
];

const categories = ["All", "Achievement", "Events", "Sports", "Innovation", "Alumni", "Sustainability"];

export default function News() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-5xl font-bold text-primary mb-4">
            News & Updates
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay informed about the latest events, achievements, and innovations at New Horizon Academy
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
              className={category === "All" ? "gold-gradient text-primary font-semibold" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Article */}
        <Card className="mb-12 overflow-hidden hover:shadow-xl transition-shadow">
          <div className="grid lg:grid-cols-2">
            <div className="h-96 lg:h-auto overflow-hidden">
              <img
                src={newsArticles[0].image}
                alt={newsArticles[0].title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="pt-8 lg:pt-12">
              <Badge className="mb-3">{newsArticles[0].category}</Badge>
              <h2 className="font-display text-3xl font-bold text-primary mb-4">
                {newsArticles[0].title}
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                {newsArticles[0].excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {newsArticles[0].date}
                </div>
                <div>By {newsArticles[0].author}</div>
              </div>
              <Button className="gold-gradient text-primary font-semibold">
                Read Full Article
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </div>
        </Card>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.slice(1).map((article) => (
            <Card key={article.id} className="group overflow-hidden hover:shadow-lg transition-all">
              <div className="h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline" className="text-xs">
                    <Tag className="w-3 h-3 mr-1" />
                    {article.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {article.date}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {article.excerpt}
                </p>
                <Button variant="ghost" size="sm" className="text-accent hover:text-accent p-0">
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <Card className="mt-16 hero-gradient text-white">
          <CardContent className="py-12 text-center">
            <h2 className="font-display text-3xl font-bold mb-4">
              Stay Connected
            </h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest news, events, and educational insights
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-foreground"
              />
              <Button className="gold-gradient text-primary font-semibold px-6">
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
