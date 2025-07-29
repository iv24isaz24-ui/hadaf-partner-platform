import { useParams, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams();

  const blogPosts = {
    "1": {
      title: "اتجاهات التوظيف الحديثة في 2024",
      content: `
        <p>يشهد عالم التوظيف تطورات مستمرة، وفي عام 2024، نرى اتجاهات جديدة تعيد تشكيل طريقة البحث عن المواهب وتوظيفها.</p>
        
        <h2>التوظيف الرقمي والذكي</h2>
        <p>أصبحت التقنيات الذكية جزءاً لا يتجزأ من عملية التوظيف، حيث تساعد في فرز السير الذاتية وتحديد المرشحين المناسبين بكفاءة أكبر.</p>
        
        <h2>التركيز على المهارات الناعمة</h2>
        <p>لم تعد المهارات التقنية وحدها كافية، بل أصبح التركيز على المهارات الناعمة مثل التواصل والقيادة والتكيف أمراً بالغ الأهمية.</p>
        
        <h2>المرونة في العمل</h2>
        <p>أصبح المرشحون يبحثون عن بيئات عمل مرنة تتيح لهم التوازن بين الحياة المهنية والشخصية.</p>
        
        <h2>التوظيف الشامل والمتنوع</h2>
        <p>تسعى الشركات إلى بناء فرق متنوعة وشاملة تعكس تنوع المجتمع وتساهم في الإبداع والابتكار.</p>
      `,
      category: "التوظيف",
      date: "15 يناير 2024",
      author: "فريق هدف",
      readTime: "5 دقائق"
    },
    "2": {
      title: "بناء ثقافة مؤسسية قوية",
      content: `
        <p>الثقافة المؤسسية هي الروح التي تسري في أوصال المنظمة وتحدد هويتها وطريقة عملها.</p>
        
        <h2>أهمية الثقافة المؤسسية</h2>
        <p>تلعب الثقافة المؤسسية دوراً محورياً في جذب المواهب والحفاظ عليها، كما تؤثر على الإنتاجية والابتكار.</p>
        
        <h2>عناصر الثقافة المؤسسية</h2>
        <ul>
          <li>القيم المشتركة</li>
          <li>المعتقدات والمبادئ</li>
          <li>السلوكيات والممارسات</li>
          <li>التقاليد والطقوس</li>
        </ul>
        
        <h2>خطوات بناء ثقافة قوية</h2>
        <p>يتطلب بناء ثقافة مؤسسية قوية التزاماً من القيادة ومشاركة جميع أعضاء الفريق.</p>
      `,
      category: "ثقافة العمل",
      date: "12 يناير 2024",
      author: "د. أحمد السعيد",
      readTime: "7 دقائق"
    },
    "3": {
      title: "التحول الرقمي في الموارد البشرية",
      content: `
        <p>يشهد مجال الموارد البشرية تحولاً رقمياً شاملاً يعيد تعريف طرق إدارة المواهب والموظفين.</p>
        
        <h2>أنظمة إدارة الموارد البشرية الرقمية</h2>
        <p>تساعد هذه الأنظمة في أتمتة العمليات وتحسين الكفاءة وتوفير بيانات دقيقة لاتخاذ القرارات.</p>
        
        <h2>الذكاء الاصطناعي في التوظيف</h2>
        <p>يساعد الذكاء الاصطناعي في تحليل السير الذاتية وتحديد المرشحين المناسبين وتحسين تجربة التوظيف.</p>
        
        <h2>تحليل البيانات في الموارد البشرية</h2>
        <p>تمكن تحليلات البيانات من فهم أنماط الموظفين وتحسين الاستراتيجيات وتوقع التوجهات المستقبلية.</p>
      `,
      category: "التقنية",
      date: "10 يناير 2024",
      author: "سارة المحمد",
      readTime: "6 دقائق"
    },
    "4": {
      title: "فن القيادة الفعالة في العصر الحديث",
      content: `
        <p>تتطلب القيادة في العصر الحديث مهارات ومقاربات جديدة تتماشى مع التطورات التقنية والاجتماعية.</p>
        
        <h2>خصائص القائد الحديث</h2>
        <ul>
          <li>الرؤية الواضحة والإلهام</li>
          <li>التواصل الفعال والشفافية</li>
          <li>التكيف مع التغيير</li>
          <li>التمكين وتطوير الآخرين</li>
        </ul>
        
        <h2>القيادة الرقمية</h2>
        <p>تتطلب قيادة الفرق الرقمية والموزعة مهارات خاصة في التواصل الافتراضي وإدارة الثقة عن بُعد.</p>
        
        <h2>القيادة التحويلية</h2>
        <p>تركز على إلهام الموظفين وتحفيزهم لتحقيق أهداف أكبر من مصالحهم الشخصية.</p>
      `,
      category: "القيادة",
      date: "8 يناير 2024",
      author: "محمد العتيبي",
      readTime: "8 دقائق"
    }
  };

  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-background font-cairo" dir="rtl">
      <Header />
      <main className="container py-8 max-w-4xl">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <a href="/" className="hover:text-primary">الرئيسية</a>
          <ArrowRight className="h-4 w-4" />
          <a href="/#blog" className="hover:text-primary">المدونة</a>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">{post.title}</span>
        </div>

        <Card className="p-8">
          {/* Header */}
          <div className="space-y-6 mb-8">
            <Badge variant="secondary" className="w-fit">
              {post.category}
            </Badge>
            
            <h1 className="text-4xl font-bold leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Content */}
          <div 
            className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-p:leading-relaxed prose-p:mb-4 prose-ul:mr-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;