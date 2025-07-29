import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">ه</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-primary">هدف</span>
                <span className="text-xs text-muted-foreground">للموارد البشرية</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              شريكك الاستراتيجي لنجاحك التنظيمي. حلول متكاملة، بفكر استشاري، وتقنية مرنة.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">خدماتنا</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">التوظيف والتعيين</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">التدريب والتطوير</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">الحوكمة المؤسسية</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">تأسيس الإدارات</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">الاستشارات القانونية</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">روابط سريعة</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors">من نحن</a></li>
              <li><a href="#packages" className="hover:text-primary transition-colors">الباقات</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">المدونة</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">تواصل معنا</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">سياسة الخصوصية</a></li>
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">ابدأ رحلتك معنا</h4>
            <p className="text-sm text-muted-foreground">
              احصل على استشارة مجانية واكتشف كيف يمكننا مساعدة شركتك
            </p>
            <Button 
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              استشارة مجانية
            </Button>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} شركة هدف للموارد البشرية. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">شروط الاستخدام</a>
            <span>|</span>
            <a href="#" className="hover:text-primary transition-colors">سياسة الخصوصية</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;