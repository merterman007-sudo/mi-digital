export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceItem = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  process: string[];
  deliverables: string[];
  faq: ServiceFaq[];
  keywords: string[];
};

export const services: ServiceItem[] = [
  {
    slug: "performans-pazarlama",
    title: "Performans Pazarlama",
    shortDescription:
      "Google, Meta ve TikTok reklamlarında ölçülebilir büyüme ve sürdürülebilir ROAS yönetimi.",
    longDescription:
      "Kanal bazlı kampanya yönetiminden kreatif test planına kadar tüm performans sürecini veri odaklı ilerletiriz. Hedefimiz yalnızca trafik değil, satışa dönüşen doğru kullanıcıyı en verimli maliyetle getirmektir.",
    process: [
      "Hedef kitle ve teklif analizi",
      "Kanal stratejisi ve bütçe planı",
      "Kreatif test matrisi",
      "Haftalık optimizasyon ve raporlama",
    ],
    deliverables: [
      "Reklam hesabı yapılandırması",
      "UTM ve dönüşüm takip planı",
      "Haftalık performans raporu",
      "Aylık büyüme önerileri",
    ],
    faq: [
      {
        question: "İlk sonuçları ne zaman görürüz?",
        answer:
          "Genellikle ilk 2-4 haftada maliyet ve dönüşüm trendlerini net şekilde görmeye başlarız.",
      },
      {
        question: "Minimum reklam bütçesi gerekiyor mu?",
        answer:
          "Sektör ve hedefe göre değişir. İlk görüşmede en verimli başlangıç bütçesini birlikte belirliyoruz.",
      },
    ],
    keywords: [
      "performans pazarlama ajansı",
      "google ads yönetimi",
      "meta reklam yönetimi",
    ],
  },
  {
    slug: "seo-icerik-stratejisi",
    title: "SEO ve İçerik Stratejisi",
    shortDescription:
      "Arama niyeti odaklı teknik SEO, içerik planı ve düzenli optimizasyonla kalıcı organik büyüme.",
    longDescription:
      "Teknik SEO denetimi, anahtar kelime kümeleri ve içerik üretim planını tek sistemde yönetiriz. Böylece siteniz hem arama motorlarına hem kullanıcı deneyimine uyumlu bir şekilde büyür.",
    process: [
      "Teknik SEO denetimi",
      "Keyword cluster ve içerik haritası",
      "On-page optimizasyon",
      "Aylık içerik ve performans takibi",
    ],
    deliverables: [
      "Teknik SEO raporu",
      "3 aylık içerik takvimi",
      "Sayfa bazlı title/meta önerileri",
      "Search Console büyüme raporu",
    ],
    faq: [
      {
        question: "SEO ne kadar sürede sonuç verir?",
        answer:
          "Sektöre göre değişmekle birlikte ilk görünür kazanımlar genellikle 6-10 hafta içinde başlar.",
      },
      {
        question: "Eski içerikleri de optimize ediyor musunuz?",
        answer:
          "Evet. Yeni içerik üretiminin yanında mevcut sayfaları da güncelleyerek daha hızlı kazanım elde ediyoruz.",
      },
    ],
    keywords: [
      "seo ajansı",
      "içerik stratejisi",
      "organik trafik artırma",
    ],
  },
  {
    slug: "web-tasarim-gelistirme",
    title: "Web Tasarım ve Geliştirme",
    shortDescription:
      "Hızlı, mobil odaklı ve dönüşüm optimizasyonlu kurumsal web sitesi ve landing page geliştirme.",
    longDescription:
      "Marka dilinize uygun modern arayüzler tasarlayıp performans odaklı bir teknik altyapı ile geliştiriyoruz. SEO, ölçümleme ve dönüşüm hedeflerini daha proje başında mimariye dahil ediyoruz.",
    process: [
      "UX hedefleri ve bilgi mimarisi",
      "UI tasarım sistemi",
      "Next.js geliştirme süreci",
      "Yayın, hız testi ve bakım planı",
    ],
    deliverables: [
      "Responsive arayüz",
      "Teknik SEO uyumlu kod yapısı",
      "Form ve CTA dönüşüm altyapısı",
      "Bakım ve geliştirme yol haritası",
    ],
    faq: [
      {
        question: "Siteyi kaç haftada yayına alırsınız?",
        answer:
          "Kapsama göre değişmekle birlikte standart kurumsal siteler 3-6 hafta arasında teslim edilir.",
      },
      {
        question: "Sonradan içerik eklemek kolay mı?",
        answer:
          "Evet. Genişletilebilir bir yapı kuruyoruz, yeni sayfa ve içerikler hızlıca eklenebiliyor.",
      },
    ],
    keywords: [
      "web tasarım ajansı",
      "nextjs ajans sitesi",
      "landing page geliştirme",
    ],
  },
  {
    slug: "crm-otomasyon",
    title: "CRM ve Otomasyon",
    shortDescription:
      "Lead yakalama, müşteri segmentasyonu ve otomatik takip akışları ile satış süreçlerinin hızlandırılması.",
    longDescription:
      "Satış ekibinin operasyon yükünü azaltmak ve kaçan fırsatları azaltmak için CRM ve otomasyon akışlarını kuruyoruz. Form, WhatsApp, e-posta ve kampanya kanallarını tek potada birleştiriyoruz.",
    process: [
      "Mevcut satış sürecini haritalama",
      "Lead scoring ve segment planı",
      "Otomasyon akışlarının kurulumu",
      "Raporlama ve performans iyileştirme",
    ],
    deliverables: [
      "Pipeline tasarımı",
      "Otomatik e-posta/mesaj akışları",
      "Lead kalite raporu",
      "Dönüşüm iyileştirme önerileri",
    ],
    faq: [
      {
        question: "Hangi CRM araçlarıyla çalışıyorsunuz?",
        answer:
          "İhtiyaca göre HubSpot, Pipedrive veya özel entegrasyonlarla çalışıyoruz.",
      },
      {
        question: "Küçük ekipler için de uygun mu?",
        answer:
          "Evet. Küçük ekiplerde otomasyon etkisi çok daha hızlı hissedilir.",
      },
    ],
    keywords: [
      "crm otomasyon",
      "lead yönetimi",
      "satış otomasyonu",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

