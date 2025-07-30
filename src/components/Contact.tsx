import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MessageCircle, Twitter, Linkedin, Camera } from "lucide-react";
import ConsultationDialog from "@/components/ConsultationDialog";

const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">📞 تواصل معنا</h2>
          <p className="text-lg text-muted-foreground">
            نحن هنا لمساعدتك في تحقيق أهدافك. تواصل معنا اليوم
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">معلومات التواصل</h3>
              
              <div className="space-y-4">
                <Card className="p-4 shadow-soft hover:shadow-medium transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">البريد الإلكتروني</p>
                      <p className="text-muted-foreground">info@hadaf.com.sa</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 shadow-soft hover:shadow-medium transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">رقم الهاتف</p>
                      <p className="text-muted-foreground">+966 11 123 4567</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 shadow-soft hover:shadow-medium transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">واتساب</p>
                      <p className="text-muted-foreground">+966 50 123 4567</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">تابعنا على:</h4>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                  <Camera className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Quick CTA */}
            <Card className="p-6 bg-gradient-primary text-white">
              <div className="space-y-4">
                <h4 className="text-xl font-bold">استشارة مجانية فورية</h4>
                <p className="text-white/90">
                  احصل على استشارة مجانية من خبرائنا خلال 24 ساعة
                </p>
                <ConsultationDialog>
                  <Button 
                    className="bg-accent hover:bg-accent/90 text-accent-foreground w-full"
                  >
                    طلب استشارة مجانية
                  </Button>
                </ConsultationDialog>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-6 shadow-medium">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">أرسل لنا رسالة</h3>
              
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">الاسم</label>
                    <Input placeholder="اسمك الكريم" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">الشركة</label>
                    <Input placeholder="اسم الشركة" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">البريد الإلكتروني</label>
                    <Input type="email" placeholder="email@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">رقم الهاتف</label>
                    <Input placeholder="+966 5X XXX XXXX" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">نوع الخدمة المطلوبة</label>
                  <Input placeholder="التوظيف، التدريب، الاستشارات..." />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">تفاصيل الطلب</label>
                  <Textarea 
                    placeholder="أخبرنا عن احتياجات شركتك وكيف يمكننا مساعدتك"
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-6"
                >
                  إرسال الطلب
                </Button>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;