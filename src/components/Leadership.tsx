import { Card } from "@/components/ui/card";
import chairmanImage from "@/assets/chairman-image.jpg";
import ceoImage from "@/assets/ceo-image.jpg";
import cfoImage from "@/assets/cfo-image.jpg";

const Leadership = () => {
  const leaders = [
    {
      name: "أحمد بن محمد السعيد",
      position: "رئيس مجلس الإدارة",
      image: chairmanImage,
      quote: "نؤمن بأن الاستثمار في الإنسان هو استثمار في المستقبل، ونعمل على تمكين الشركات من النمو من خلال حلولنا المتقدمة والمخصصة."
    },
    {
      name: "سارة بنت عبدالله المحمد",
      position: "المدير التنفيذي",
      image: ceoImage,
      quote: "رؤيتنا أن نكون الشريك الأول والأكثر ثقة في مجال حلول الموارد البشرية، مع التركيز على الابتكار والجودة."
    },
    {
      name: "خالد بن سعد العتيبي",
      position: "المدير المالي",
      image: cfoImage,
      quote: "نحرص على تقديم حلول مالية مستدامة تساعد عملاءنا على تحقيق أهدافهم الاستراتيجية بكفاءة وفعالية."
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">قيادتنا</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            فريق قيادي متميز يحمل رؤية واضحة لمستقبل أفضل في مجال الموارد البشرية
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <Card key={index} className="p-6 text-center shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-2">
              <div className="space-y-4">
                {/* Image */}
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-medium">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name & Position */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{leader.name}</h3>
                  <p className="text-primary font-medium">{leader.position}</p>
                </div>

                {/* Quote */}
                <blockquote className="text-sm text-muted-foreground italic leading-relaxed">
                  "{leader.quote}"
                </blockquote>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;