import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowLeft } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: "1",
      title: "اتجاهات التوظيف الحديثة في 2024",
      excerpt: "استكشف أحدث التطورات في عالم التوظيف وكيفية الاستفادة منها في شركتك",
      category: "التوظيف",
      date: "15 يناير 2024",
      author: "فريق هدف",
      readTime: "5 دقائق",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "2",
      title: "بناء ثقافة مؤسسية قوية",
      excerpt: "دليل شامل لإنشاء وتطوير ثقافة العمل الإيجابية في المؤسسات",
      category: "ثقافة العمل",
      date: "12 يناير 2024",
      author: "د. أحمد السعيد",
      readTime: "7 دقائق",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "3",
      title: "التحول الرقمي في الموارد البشرية",
      excerpt: "كيف تستفيد التقنيات الحديثة في تطوير إدارة الموارد البشرية",
      category: "التقنية",
      date: "10 يناير 2024",
      author: "سارة المحمد",
      readTime: "6 دقائق",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "4",
      title: "فن القيادة الفعالة في العصر الحديث",
      excerpt: "استراتيجيات ومهارات القيادة التي يحتاجها المديرون اليوم",
      category: "القيادة",
      date: "8 يناير 2024",
      author: "محمد العتيبي",
      readTime: "8 دقائق",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const categories = ["الكل", "التوظيف", "القيادة", "ثقافة العمل", "التقنية"];

  return (
    <section id="blog" className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">المدونة</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            تابع أحدث توجهات الموارد البشرية من خلال مقالاتنا في القيادة، التوظيف، ثقافة العمل، والتقنية
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              size="sm"
              className={index === 0 ? "bg-primary" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-2">
              {/* Blog Post Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 space-y-4">
                {/* Category & Date */}
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs">
                    {post.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold leading-tight hover:text-primary transition-colors cursor-pointer">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {post.author}
                  </span>
                  <span>{post.readTime}</span>
                </div>

                {/* Read More */}
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full justify-between p-0 h-auto"
                  onClick={() => window.location.href = `/blog/${post.id}`}
                >
                  <span>اقرأ المزيد</span>
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            عرض جميع المقالات
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;