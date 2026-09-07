export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  readingMinutes: number;
  author: string;
  category: {
    name: string;
    slug: string;
  };
  tags: Array<{
    name: string;
    slug: string;
  }>;
  sections: BlogSection[];
  relatedServiceSlugs: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "neden-dijital-reklam-vermeli",
    title: "Markalar Neden Dijital Reklam Vermeli?",
    excerpt:
      "Dijital reklam, doğru planlandığında ölçülebilir büyüme ve sürdürülebilir satış üretir.",
    description:
      "Dijital reklam yatırımıyla görünürlük, güven ve dönüşüm nasıl birlikte büyütülür?",
    publishedAt: "2026-05-25",
    updatedAt: "2026-05-28",
    readingMinutes: 8,
    author: "MI DIGITAL",
    category: {
      name: "Performans Pazarlama",
      slug: "performans-pazarlama",
    },
    tags: [
      { name: "Dijital Reklam", slug: "dijital-reklam" },
      { name: "Marka Büyümesi", slug: "marka-buyumesi" },
      { name: "Lead", slug: "lead" },
    ],
    sections: [
      {
        heading: "Reklam Bütçesi Artık Ölçülebilir Bir Yatırım",
        paragraphs: [
          "Dijitalde hangi kampanyanın ne kadar talep ürettiğini net biçimde görebilirsiniz.",
          "Bu şeffaflık, bütçeyi kör harcamadan çıkarıp yönetilebilir bir büyüme kanalına dönüştürür.",
        ],
      },
      {
        heading: "Doğru Hedefleme, Daha Verimli Sonuç",
        paragraphs: [
          "Doğru kitleye doğru mesajla çıkıldığında maliyet düşer, dönüşüm oranı yükselir.",
        ],
        bullets: [
          "Demografik ve ilgi alanı hedefleme",
          "Arama niyeti odaklı anahtar kelime seçimi",
          "Yeniden pazarlama ile sıcak kitle dönüşü",
        ],
      },
      {
        heading: "Kısa Vadede Satış, Uzun Vadede Marka Güveni",
        paragraphs: [
          "Düzenli ve tutarlı kampanyalar sadece anlık satış değil, marka hatırlanırlığı da üretir.",
        ],
      },
    ],
    relatedServiceSlugs: ["performans-pazarlama", "crm-otomasyon"],
  },
  {
    slug: "az-butce-ile-fazla-donusum-rehberi",
    title: "Az Bütçe ile Daha Fazla Dönüşüm Almak Mümkün mü?",
    excerpt:
      "Evet, mümkün. Küçük bütçelerde asıl farkı kampanya mimarisi ve optimizasyon disiplini yaratır.",
    description:
      "Düşük bütçeyle daha fazla dönüşüm almak için uygulanabilir kampanya ve landing page adımları.",
    publishedAt: "2026-05-22",
    updatedAt: "2026-05-28",
    readingMinutes: 10,
    author: "MI DIGITAL",
    category: {
      name: "Performans Pazarlama",
      slug: "performans-pazarlama",
    },
    tags: [
      { name: "Bütçe Optimizasyonu", slug: "butce-optimizasyonu" },
      { name: "Dönüşüm", slug: "donusum" },
      { name: "ROAS", slug: "roas" },
    ],
    sections: [
      {
        heading: "Tek Hedef, Net Sinyal",
        paragraphs: [
          "Aynı anda her şeyi optimize etmeye çalışmak yerine tek bir ana hedef belirleyin.",
          "Teklif formu, telefon araması veya satış gibi net hedefler algoritmanın öğrenmesini hızlandırır.",
        ],
      },
      {
        heading: "Bütçeyi Dağıtmayın, Odaklayın",
        paragraphs: [
          "Çok sayıda küçük kampanya yerine az sayıda güçlü kampanya daha stabil sonuç üretir.",
        ],
        bullets: [
          "Daha hızlı öğrenme",
          "Daha net performans okuması",
          "Daha düşük edinme maliyeti",
        ],
      },
      {
        heading: "Sayfa Deneyimi Reklam Kadar Kritik",
        paragraphs: [
          "Yavaş açılan ve güven vermeyen sayfalar, iyi reklamı bile zayıf sonuçlara çeker.",
        ],
      },
    ],
    relatedServiceSlugs: ["performans-pazarlama", "web-tasarim-gelistirme"],
  },
  {
    slug: "google-ads-hesap-kurulumu-en-sik-hatalar",
    title: "Google Ads Kurulumunda En Sık Yapılan 10 Hata",
    excerpt:
      "Kurulum aşamasındaki küçük hatalar, daha kampanya başlamadan bütçe kaybına neden olur.",
    description:
      "Google Ads hesabı açarken en sık yapılan hatalar ve hızlı düzeltme önerileri.",
    publishedAt: "2026-05-18",
    updatedAt: "2026-05-28",
    readingMinutes: 9,
    author: "MI DIGITAL",
    category: {
      name: "Google Ads",
      slug: "google-ads",
    },
    tags: [
      { name: "Google Ads", slug: "google-ads" },
      { name: "Kurulum", slug: "kurulum" },
      { name: "Dönüşüm Takibi", slug: "donusum-takibi" },
    ],
    sections: [
      {
        heading: "Dönüşüm Takibi Kurmadan Yayına Çıkmak",
        paragraphs: [
          "Takip kurulmadan yapılan yayınlarda algoritma neyi optimize edeceğini bilemez.",
          "Sonuç olarak tıklama vardır ama kaliteli talep artışı görülmez.",
        ],
      },
      {
        heading: "Yanlış Kampanya Türü Seçimi",
        paragraphs: [
          "Hedefe uygun kampanya türü seçilmezse bütçe yanlış yerlere dağılır.",
        ],
      },
      {
        heading: "Negatif Kelime Yönetimini Atlamak",
        paragraphs: [
          "Arama terimi raporu düzenli kontrol edilmediğinde alakasız sorgular bütçeyi eritir.",
        ],
      },
    ],
    relatedServiceSlugs: ["performans-pazarlama"],
  },
  {
    slug: "reklam-optimizasyonu-haftalik-kontrol-listesi",
    title: "Reklam Optimizasyonu için Haftalık Kontrol Listesi",
    excerpt:
      "Sistemli bir rutin, kampanyaların daha öngörülebilir ve kârlı yönetilmesini sağlar.",
    description:
      "Google ve Meta kampanyalarında haftalık optimizasyon için pratik kontrol listesi.",
    publishedAt: "2026-05-13",
    updatedAt: "2026-05-28",
    readingMinutes: 8,
    author: "MI DIGITAL",
    category: {
      name: "Performans Pazarlama",
      slug: "performans-pazarlama",
    },
    tags: [
      { name: "Optimizasyon", slug: "optimizasyon" },
      { name: "Kontrol Listesi", slug: "kontrol-listesi" },
      { name: "CPA", slug: "cpa" },
    ],
    sections: [
      {
        heading: "Kampanya Sağlık Kontrolü",
        paragraphs: [
          "Harcaması duran reklam grupları, reddedilen kreatifler ve anormal maliyet artışları önce incelenmelidir.",
        ],
      },
      {
        heading: "Kitle ve Sorgu Kalitesi",
        paragraphs: [
          "Kalite bozulduğunda ilk aksiyon bütçe artırmak değil, filtreleri iyileştirmek olmalıdır.",
        ],
        bullets: [
          "Alakasız sorguları negatifle",
          "Düşük niyetli segmentleri dışla",
          "Yüksek dönüşen segmentleri ayır",
        ],
      },
      {
        heading: "Kreatif Yenileme Disiplini",
        paragraphs: [
          "Haftada en az bir yeni başlık veya teklif açısı test etmek performansı canlı tutar.",
        ],
      },
    ],
    relatedServiceSlugs: ["performans-pazarlama", "seo-icerik-stratejisi"],
  },
  {
    slug: "e-ticarette-roas-artirma-yontemleri",
    title: "E-Ticarette ROAS Artırmak için 7 Uygulanabilir Yöntem",
    excerpt:
      "ROAS artışı yalnızca daha çok harcamayla değil, daha doğru sistem kurulumu ile gelir.",
    description:
      "E-ticaret reklamlarında daha iyi geri dönüş için kampanya, teklif ve sepet optimizasyonu yöntemleri.",
    publishedAt: "2026-05-09",
    updatedAt: "2026-05-28",
    readingMinutes: 9,
    author: "MI DIGITAL",
    category: {
      name: "E-Ticaret",
      slug: "e-ticaret",
    },
    tags: [
      { name: "ROAS", slug: "roas" },
      { name: "E-Ticaret", slug: "e-ticaret" },
      { name: "Sepet Optimizasyonu", slug: "sepet-optimizasyonu" },
    ],
    sections: [
      {
        heading: "Kategori Bazlı Kampanya Kurgusu",
        paragraphs: [
          "Her ürünü tek sepette yönetmek yerine marj ve talebe göre kategori ayrımı yapın.",
        ],
      },
      {
        heading: "Mesaj Tutarlılığı",
        paragraphs: [
          "Reklamdaki teklif ile landing sayfadaki mesaj aynı olmadığında dönüşüm oranı düşer.",
        ],
      },
      {
        heading: "Sepet Terk Geri Kazanımı",
        paragraphs: [
          "Satın almayan kullanıcıyı e-posta ve yeniden pazarlama akışlarıyla geri kazanabilirsiniz.",
        ],
      },
    ],
    relatedServiceSlugs: ["performans-pazarlama", "crm-otomasyon"],
  },
  {
    slug: "landing-page-ile-lead-artirma",
    title: "Landing Page ile Lead Artırma Rehberi",
    excerpt:
      "Aynı reklam bütçesiyle daha fazla talep almak için sayfa mimarisi kritik rol oynar.",
    description:
      "Lead odaklı landing page için başlık, kanıt, form ve CTA yerleşimi nasıl kurgulanmalı?",
    publishedAt: "2026-05-04",
    updatedAt: "2026-05-28",
    readingMinutes: 8,
    author: "MI DIGITAL",
    category: {
      name: "Dönüşüm Optimizasyonu",
      slug: "donusum-optimizasyonu",
    },
    tags: [
      { name: "Landing Page", slug: "landing-page" },
      { name: "Lead", slug: "lead" },
      { name: "CRO", slug: "cro" },
    ],
    sections: [
      {
        heading: "İlk Ekranda Net Değer Önerisi",
        paragraphs: [
          "Ziyaretçi ilk saniyelerde ne sunduğunuzu ve neden sizi seçmesi gerektiğini anlamalıdır.",
        ],
      },
      {
        heading: "Form Alanlarını Sadeleştirin",
        paragraphs: [
          "İlk temas için gereksiz alanları kaldırın; kısa ve net bir form dönüşümü artırır.",
        ],
      },
      {
        heading: "Güven Öğelerini Görünür Yapın",
        paragraphs: [
          "Referanslar, sonuçlar ve açık iletişim bilgileri karar sürecini hızlandırır.",
        ],
      },
    ],
    relatedServiceSlugs: ["web-tasarim-gelistirme", "crm-otomasyon"],
  },
  {
    slug: "retargeting-stratejisi-nasil-kurulur",
    title: "Retargeting Stratejisi Nasıl Kurulur?",
    excerpt:
      "Siteyi ziyaret edip işlem yapmayan kitleyi doğru senaryolarla tekrar kazanabilirsiniz.",
    description:
      "Retargeting kampanyalarında segment, mesaj ve frekans yönetimi için temel rehber.",
    publishedAt: "2026-04-29",
    updatedAt: "2026-05-28",
    readingMinutes: 8,
    author: "MI DIGITAL",
    category: {
      name: "Performans Pazarlama",
      slug: "performans-pazarlama",
    },
    tags: [
      { name: "Retargeting", slug: "retargeting" },
      { name: "Meta Ads", slug: "meta-ads" },
      { name: "Dönüşüm", slug: "donusum" },
    ],
    sections: [
      {
        heading: "Davranış Bazlı Segmentasyon",
        paragraphs: [
          "Ürün gezen, sepete ekleyen ve formu yarıda bırakan kullanıcılar için farklı akışlar kurun.",
        ],
      },
      {
        heading: "Mesaj Sıralaması",
        paragraphs: [
          "İlk temasta bilgilendirme, ikinci temasta sosyal kanıt, üçüncü temasta net teklif yaklaşımı işe yarar.",
        ],
      },
      {
        heading: "Frekans Kontrolü",
        paragraphs: [
          "Aynı reklamı aşırı göstermek marka yorgunluğu yaratır; frekans sınırı mutlaka olmalıdır.",
        ],
      },
    ],
    relatedServiceSlugs: ["performans-pazarlama", "crm-otomasyon"],
  },
  {
    slug: "seo-ve-reklam-birlikte-nasil-buyutur",
    title: "SEO ve Reklam Birlikte Nasıl Daha Hızlı Büyütür?",
    excerpt:
      "SEO uzun vadeli güç sağlar, reklam kısa vadede ivme kazandırır; birlikte kullanım en etkili modeldir.",
    description:
      "SEO ve performans reklamını birlikte yönetmenin stratejik avantajları ve uygulama modeli.",
    publishedAt: "2026-04-24",
    updatedAt: "2026-05-28",
    readingMinutes: 9,
    author: "MI DIGITAL",
    category: {
      name: "SEO",
      slug: "seo",
    },
    tags: [
      { name: "SEO", slug: "seo" },
      { name: "Google Ads", slug: "google-ads" },
      { name: "Omni Channel", slug: "omni-channel" },
    ],
    sections: [
      {
        heading: "Reklam Verisi ile İçerik Fikri Üretin",
        paragraphs: [
          "Reklamda dönüşüm getiren sorgular, SEO'da öncelikli içerik konularını belirler.",
        ],
      },
      {
        heading: "SEO Sayfalarını Reklamla Test Edin",
        paragraphs: [
          "Yüksek hacimli kelimelerde önce reklamla mesaj testi yaparak doğru teklif açısını bulabilirsiniz.",
        ],
      },
      {
        heading: "Birleşik Raporlama Disiplini",
        paragraphs: [
          "Kanal bazlı kopuk raporlama yerine tek panelde maliyet ve dönüşüm görünürlüğü sağlayın.",
        ],
      },
    ],
    relatedServiceSlugs: ["seo-icerik-stratejisi", "performans-pazarlama"],
  },
  {
    slug: "reklam-metni-kreatif-test-plani",
    title: "Reklam Metni ve Kreatif Test Planı Nasıl Kurulur?",
    excerpt:
      "Kazanan reklamlar tesadüfen değil, sistemli hipotez ve test planıyla bulunur.",
    description:
      "Reklam metni, kreatif açı ve teklif varyasyonlarını bilimsel test yaklaşımıyla yönetin.",
    publishedAt: "2026-04-19",
    updatedAt: "2026-05-28",
    readingMinutes: 8,
    author: "MI DIGITAL",
    category: {
      name: "Kreatif Strateji",
      slug: "kreatif-strateji",
    },
    tags: [
      { name: "Kreatif Test", slug: "kreatif-test" },
      { name: "Reklam Metni", slug: "reklam-metni" },
      { name: "A/B Test", slug: "ab-test" },
    ],
    sections: [
      {
        heading: "Bir Testte Tek Değişken",
        paragraphs: [
          "Aynı anda çok fazla değişkeni değiştirmek sonucu yorumlamayı zorlaştırır.",
        ],
      },
      {
        heading: "Hipotezle Başlayın",
        paragraphs: [
          "Her testin başında net bir varsayım yazın; örneğin kısa başlık CTR'yi artırır.",
        ],
      },
      {
        heading: "Kazananı Ölçekleyin",
        paragraphs: [
          "Başarılı kreatifi benzer segmentlerde tekrar test ederek güvenli şekilde ölçekleyin.",
        ],
      },
    ],
    relatedServiceSlugs: ["performans-pazarlama", "seo-icerik-stratejisi"],
  },
  {
    slug: "teklif-formu-donusum-orani-artirma",
    title: "Teklif Formu Dönüşüm Oranı Nasıl Artırılır?",
    excerpt:
      "Formun dili, konumu ve güven unsurları lead kalitesini doğrudan etkiler.",
    description:
      "Teklif formlarında daha yüksek tamamlanma oranı için uygulanabilir CRO adımları.",
    publishedAt: "2026-04-14",
    updatedAt: "2026-05-28",
    readingMinutes: 7,
    author: "MI DIGITAL",
    category: {
      name: "Dönüşüm Optimizasyonu",
      slug: "donusum-optimizasyonu",
    },
    tags: [
      { name: "Form Optimizasyonu", slug: "form-optimizasyonu" },
      { name: "Lead", slug: "lead" },
      { name: "CRO", slug: "cro" },
    ],
    sections: [
      {
        heading: "Kullanıcının Zihnindeki Soru İşaretleri",
        paragraphs: [
          "Kullanıcı formdan önce fiyat, geri dönüş süresi ve güven gibi sorularına yanıt arar.",
        ],
      },
      {
        heading: "Net CTA ve Mikro Kopya",
        paragraphs: [
          "'Gönder' yerine '24 Saat İçinde Teklif Al' gibi net buton metinleri kullanın.",
        ],
      },
      {
        heading: "Sürtünmeyi Azaltın",
        paragraphs: [
          "Zorunlu alan sayısını azaltın ve neden bilgi istediğinizi kısa bir notla açıklayın.",
        ],
      },
    ],
    relatedServiceSlugs: ["web-tasarim-gelistirme", "crm-otomasyon"],
  },
  {
    slug: "ga4-ile-kampanya-performansi-okuma",
    title: "GA4 ile Kampanya Performansı Nasıl Okunur?",
    excerpt:
      "Sadece tıklama ve gösterim değil; kalite, maliyet ve dönüşüm birlikte okunmalıdır.",
    description:
      "GA4 üzerinde kampanya performansını aksiyona dönüştürecek şekilde analiz etme rehberi.",
    publishedAt: "2026-04-08",
    updatedAt: "2026-05-28",
    readingMinutes: 8,
    author: "MI DIGITAL",
    category: {
      name: "Analitik",
      slug: "analitik",
    },
    tags: [
      { name: "GA4", slug: "ga4" },
      { name: "Ölçümleme", slug: "olcumleme" },
      { name: "KPI", slug: "kpi" },
    ],
    sections: [
      {
        heading: "UTM Disiplini Şart",
        paragraphs: [
          "Kaynak ve kampanya adlandırması standart değilse raporlar güvenilir sonuç üretmez.",
        ],
      },
      {
        heading: "Temel Metrik Seti",
        paragraphs: [
          "Her kampanyada aynı çekirdek metrikleri takip edin: maliyet, dönüşüm, CPA ve gelir.",
        ],
      },
      {
        heading: "Raporu Aksiyonla Bitirin",
        paragraphs: [
          "Haftalık raporun sonunda hangi kampanyanın kapanacağı, hangisinin büyüyeceği netleşmelidir.",
        ],
      },
    ],
    relatedServiceSlugs: ["crm-otomasyon", "performans-pazarlama"],
  },
  {
    slug: "crm-ile-lead-takip-sureci",
    title: "CRM ile Lead Takip Süreci Nasıl Kurulur?",
    excerpt:
      "Reklamdan gelen taleplerin kaybolmaması için net bir CRM akışı ve sorumluluk yapısı gerekir.",
    description:
      "Lead toplama, sınıflama ve satışa dönüşüm oranını yükselten CRM süreci adımları.",
    publishedAt: "2026-04-02",
    updatedAt: "2026-05-28",
    readingMinutes: 8,
    author: "MI DIGITAL",
    category: {
      name: "CRM",
      slug: "crm",
    },
    tags: [
      { name: "CRM", slug: "crm" },
      { name: "Lead Yönetimi", slug: "lead-yonetimi" },
      { name: "Satış", slug: "satis" },
    ],
    sections: [
      {
        heading: "Pipeline Aşamalarını Netleştirin",
        paragraphs: [
          "Yeni lead, ilk görüşme, teklif, takip ve kapanış adımları ekip içinde standart olmalıdır.",
        ],
      },
      {
        heading: "Geri Dönüş Hızı",
        paragraphs: [
          "İlk 30 dakika içinde geri dönüş yapılan lead'lerde kazanım oranı belirgin artar.",
        ],
      },
      {
        heading: "Kaynak Bazlı Kalite Ölçümü",
        paragraphs: [
          "Hangi kanalın daha kaliteli lead getirdiğini düzenli skorlayarak karar verin.",
        ],
      },
    ],
    relatedServiceSlugs: ["crm-otomasyon", "performans-pazarlama"],
  },
  {
    slug: "kurumsal-web-sitesi-donusum-artirma",
    title: "Kurumsal Web Sitesinde Dönüşüm Artırma Taktikleri",
    excerpt:
      "Kurumsal sitelerde estetik kadar güven, hız ve net teklif akışı dönüşüm performansını belirler.",
    description:
      "Kurumsal web sitesinde daha çok teklif almak için UX, hız ve içerik optimizasyonu adımları.",
    publishedAt: "2026-03-27",
    updatedAt: "2026-05-28",
    readingMinutes: 8,
    author: "MI DIGITAL",
    category: {
      name: "Web Geliştirme",
      slug: "web-gelistirme",
    },
    tags: [
      { name: "Web Tasarım", slug: "web-tasarim" },
      { name: "CRO", slug: "cro" },
      { name: "UX", slug: "ux" },
    ],
    sections: [
      {
        heading: "İlk Ekranda Değer Önerisini Netleştirin",
        paragraphs: [
          "Ziyaretçi ilk saniyelerde ne sunduğunuzu ve kimler için çalıştığınızı açıkça anlamalıdır.",
        ],
      },
      {
        heading: "Formu Stratejik Noktalara Yerleştirin",
        paragraphs: [
          "Formu yalnızca iletişim sayfasında bırakmak yerine ana sayfada da görünür bir bölümde sunun.",
        ],
      },
      {
        heading: "Performans ve Güven Öğelerini Birleştirin",
        paragraphs: [
          "Hızlı açılan sayfa, güçlü referanslar ve net iletişim bilgileri dönüşümü ciddi biçimde artırır.",
        ],
      },
    ],
    relatedServiceSlugs: ["web-tasarim-gelistirme", "crm-otomasyon"],
  },
  {
    slug: "teknik-seo-denetimi-kontrol-listesi",
    title: "Teknik SEO Denetimi: 2026 Kontrol Listesi ve Önceliklendirme Rehberi",
    excerpt:
      "Teknik SEO denetimini yalnızca hata listesi olarak değil, organik gösterim ve form talebi üreten bir büyüme planı olarak kurgulayın.",
    description:
      "Teknik SEO denetimi nasıl yapılır? Tarama, indeksleme, Core Web Vitals, schema, dahili link ve dönüşüm odaklı önceliklendirme adımlarını inceleyin.",
    publishedAt: "2026-09-08",
    updatedAt: "2026-09-08",
    readingMinutes: 14,
    author: "MI DIGITAL",
    category: { name: "SEO", slug: "seo" },
    tags: [
      { name: "Teknik SEO", slug: "teknik-seo" },
      { name: "SEO Denetimi", slug: "seo-denetimi" },
      { name: "Core Web Vitals", slug: "core-web-vitals" },
      { name: "Search Console", slug: "search-console" },
    ],
    sections: [
      {
        heading: "Teknik SEO Denetimi Neyi Çözer?",
        paragraphs: [
          "Teknik SEO denetimi; arama motorlarının sitenizi taramasını, anlamasını ve doğru sayfaları dizine eklemesini zorlaştıran sorunları görünür hale getirir. Ancak iyi bir denetim yalnızca 404 veya eksik title listesi değildir.",
          "Öncelik, organik gösterimi ve ticari dönüşümü etkileyen sorunlara verilmelidir. Bir sayfanın indekslenmesi kadar, ziyaretçinin o sayfadan teklif formuna ilerleyebilmesi de ölçülmelidir.",
        ],
        bullets: [
          "Taranabilirlik ve indekslenebilirlik",
          "Sayfa deneyimi ve mobil hız",
          "Arama niyetine uygun içerik mimarisi",
          "Form, telefon ve WhatsApp dönüşümlerinin ölçümü",
        ],
      },
      {
        heading: "1. Tarama ve İndeksleme Kontrolleri",
        paragraphs: [
          "Önce robots.txt, XML sitemap, canonical etiketleri ve durum kodları birlikte incelenmelidir. Sitemap'te bulunan bir URL'nin noindex olması veya canonical'ının başka bir sayfayı göstermesi, Google'a çelişkili sinyal verir.",
          "Search Console Sayfa Dizine Eklenme raporu; keşfedildi ancak şu an dizine eklenmedi, tarandı ancak şu an dizine eklenmedi ve yinelenen sayfa gibi durumları ayırmak için temel kaynaktır.",
        ],
      },
      {
        heading: "2. Core Web Vitals ve Mobil Deneyim",
        paragraphs: [
          "Mobil SEO'da hız yalnızca puan almak için değil, reklam ve organik trafiğin form talebine dönüşmesi için önemlidir. Büyük görseller, gereksiz JavaScript ve layout shift kullanıcıyı daha ilk ekranda kaybettirebilir.",
          "LCP, INP ve CLS metriklerini birlikte değerlendirin. Görseli sıkıştırmak tek başına yeterli değildir; font yükleme, üçüncü taraf script'ler, butonların hareket etmesi ve formun kullanılabilirliği de kontrol edilmelidir.",
        ],
        bullets: [
          "Mobilde yatay taşma ve okunabilirlik testi",
          "İlk ekran görsel ve font yükleme sırası",
          "Form alanlarının klavye ve ekran boyutlarına uyumu",
          "Analytics ve reklam script'lerinin performans etkisi",
        ],
      },
      {
        heading: "3. Sayfa Başlığı, İçerik ve Arama Niyeti",
        paragraphs: [
          "Her sayfa tek bir ana arama niyetine cevap vermelidir. 'Dijital pazarlama ajansı', 'Google Ads yönetimi' ve 'İstanbul SEO ajansı' aynı sayfada eşit ağırlıkla hedeflenirse sayfanın mesajı bulanıklaşır.",
          "Title, H1, giriş paragrafı, alt başlıklar ve dahili linkler aynı niyeti desteklemelidir. Anahtar kelimeyi tekrar tekrar yazmak yerine, kullanıcının karar vermesi için gereken kapsamı açıkça anlatmak daha güçlü bir sinyaldir.",
        ],
      },
      {
        heading: "4. Schema ve Güven Sinyalleri",
        paragraphs: [
          "Organization, LocalBusiness, Service, BreadcrumbList ve uygun sayfalarda FAQPage yapılandırılmış verisi arama motorlarının içeriği anlamasına yardımcı olur. Schema, sayfada gerçekten görünmeyen iddiaları eklemek için kullanılmamalıdır.",
          "Ajans sitesi için telefon, e-posta, şehir, hizmet alanı, logo ve referans bağlantıları tutarlı olmalıdır. Farklı sayfalarda farklı marka adı veya adres yazılması güven sinyalini zayıflatır.",
        ],
      },
      {
        heading: "Denetim Sonuçlarını Nasıl Önceliklendirmeli?",
        paragraphs: [
          "Her hatayı aynı önemde görmek ekipleri yorar. Önce para ve görünürlük etkisi yüksek, uygulanması kolay sorunları düzeltin; ardından içerik derinliği, dahili link ve otorite çalışmalarına geçin.",
        ],
        bullets: [
          "P0: Site erişimi, HTTPS, robots.txt veya sitemap sorunları",
          "P1: İndekslenmeyen ticari sayfalar ve yanlış canonical",
          "P2: Mobil hız, başlık hiyerarşisi ve eksik iç linkler",
          "P3: Yeni içerik kümeleri ve dış otorite çalışmaları",
        ],
      },
    ],
    relatedServiceSlugs: ["seo-icerik-stratejisi", "web-tasarim-gelistirme"],
  },
  {
    slug: "google-ads-ajansi-secimi-ve-maliyetleri",
    title: "Google Ads Ajansı Seçimi: Maliyet, Sözleşme ve Performans Kriterleri",
    excerpt:
      "Google Ads ajansı seçerken yalnızca aylık yönetim ücretine değil, ölçümleme kalitesine ve iş hedeflerine bakın.",
    description:
      "Google Ads ajansı nasıl seçilir, ajans yönetim ücreti nasıl belirlenir ve performans hangi metriklerle ölçülür? İşletmeler için kapsamlı rehber.",
    publishedAt: "2026-09-07",
    updatedAt: "2026-09-08",
    readingMinutes: 12,
    author: "MI DIGITAL",
    category: { name: "Google Ads", slug: "google-ads" },
    tags: [
      { name: "Google Ads Ajansı", slug: "google-ads-ajansi" },
      { name: "Reklam Yönetimi", slug: "reklam-yonetimi" },
      { name: "CPA", slug: "cpa" },
      { name: "ROAS", slug: "roas" },
    ],
    sections: [
      {
        heading: "Google Ads Ajansı Ne Yapar?",
        paragraphs: [
          "Profesyonel Google Ads yönetimi reklamları açıp bütçe harcamaktan ibaret değildir. Hesap mimarisi, dönüşüm ölçümleme, anahtar kelime niyeti, reklam mesajı, landing page ve satış sonrası veri birlikte ele alınmalıdır.",
          "İyi ajans, raporu metrik listesi olarak bırakmaz; hangi kampanyanın neden büyütüleceğini, hangisinin neden durdurulacağını ve bir sonraki testin ne olduğunu açıklar.",
        ],
      },
      {
        heading: "Ajans Ücreti ve Reklam Bütçesi Nasıl Ayrılır?",
        paragraphs: [
          "Reklam bütçesi Google'a ödenen medya harcamasıdır; ajans ücreti ise strateji, kurulum, optimizasyon, kreatif koordinasyon ve raporlama hizmetidir. Bu iki kalemin sözleşmede ayrı gösterilmesi şeffaflık sağlar.",
          "Sabit ücret, reklam harcamasının yüzdesi veya karma model kullanılabilir. Doğru model işletmenin harcama ölçeğine, hesap karmaşıklığına ve ajansın üstlendiği işe göre belirlenmelidir.",
        ],
        bullets: [
          "Hesap kurulumu ve ilk denetim kapsamı",
          "Dönüşüm takibi ve GA4 entegrasyonu",
          "Aylık kreatif ve landing page testleri",
          "Raporlama sıklığı ve toplantı kapsamı",
        ],
      },
      {
        heading: "Sadece ROAS’a Bakmak Neden Yetmez?",
        paragraphs: [
          "ROAS e-ticaret için önemli bir göstergedir; fakat kâr marjı, iade oranı ve yeni müşteri oranı bilinmeden tek başına karar vermek yanıltıcı olabilir. Hizmet sektöründe ise form sayısı değil, nitelikli form ve satışa dönüşen lead daha anlamlıdır.",
          "CPA, dönüşüm oranı, arama terimi kalitesi, lead-to-sale oranı ve müşteri edinme maliyeti birlikte izlenmelidir. Raporun sonunda mutlaka iş sonucuna bağlanan bir aksiyon bulunmalıdır.",
        ],
      },
      {
        heading: "Ajans Seçerken Sorulacak 8 Soru",
        paragraphs: [
          "Ajansın çalışma biçimini görüşmede netleştirmek, sonradan yaşanabilecek beklenti farklarını azaltır.",
        ],
        bullets: [
          "Dönüşüm takibini kim kuracak ve doğrulayacak?",
          "Reklam hesabı ve veriler işletmenin mülkiyetinde kalacak mı?",
          "Arama terimleri ve negatif kelimeler ne sıklıkta incelenecek?",
          "Hangi kampanya hedefleri ve KPI'lar raporlanacak?",
          "Landing page veya form optimizasyonu kapsama dahil mi?",
          "Kreatif ve reklam metni testleri nasıl planlanıyor?",
          "Acil durumlarda iletişim ve aksiyon süresi nedir?",
          "İlk 30 gün için ölçülebilir plan nedir?",
        ],
      },
      {
        heading: "İlk 30 Gün İçin Sağlam Başlangıç Planı",
        paragraphs: [
          "İlk hafta hesap, dönüşüm ve arama terimleri denetlenir. İkinci hafta kampanya yapısı ve reklam mesajları temizlenir. Üçüncü ve dördüncü haftalarda kontrollü testler, bütçe dağılımı ve nitelikli talep kalitesi değerlendirilir.",
          "Bu yaklaşım, ilk haftada mucize sonuç vaat etmek yerine sağlam veri oluşturur. Sağlıklı veri olmadan yapılan agresif ölçekleme, bütçeyi ve öğrenme sürecini bozabilir.",
        ],
      },
    ],
    relatedServiceSlugs: ["google-ads-danismanligi", "performans-pazarlama"],
  },
  {
    slug: "yerel-seo-google-isletme-profili-rehberi",
    title: "Yerel SEO Rehberi: Google İşletme Profili ile Daha Fazla Arama ve Form",
    excerpt:
      "Yerel aramalarda görünürlük; Google İşletme Profili, hizmet sayfaları, yorumlar ve tutarlı işletme bilgilerinin birlikte çalışmasıyla oluşur.",
    description:
      "Yerel SEO ve Google İşletme Profili optimizasyonu nasıl yapılır? İstanbul'da hizmet veren işletmeler için görünürlük ve form talebi rehberi.",
    publishedAt: "2026-09-06",
    updatedAt: "2026-09-08",
    readingMinutes: 11,
    author: "MI DIGITAL",
    category: { name: "SEO", slug: "seo" },
    tags: [
      { name: "Yerel SEO", slug: "yerel-seo" },
      { name: "Google İşletme Profili", slug: "google-isletme-profili" },
      { name: "İstanbul SEO", slug: "istanbul-seo" },
      { name: "Yorum Yönetimi", slug: "yorum-yonetimi" },
    ],
    sections: [
      {
        heading: "Yerel SEO Neden Form Getirir?",
        paragraphs: [
          "Yerel arama yapan kişi genellikle karar aşamasına daha yakındır. 'İstanbul SEO ajansı', 'yakınımdaki diş kliniği' veya 'Google Ads ajansı' gibi sorgular hizmet, konum ve güven sinyalini aynı anda taşır.",
          "Bu nedenle yerel SEO yalnızca haritada görünmek değil; doğru hizmet sayfasına yönlendirmek, telefonu ve formu kolaylaştırmak ve işletmenin güvenilirliğini kanıtlamaktır.",
        ],
      },
      {
        heading: "Google İşletme Profili Temel Kontrol Listesi",
        paragraphs: [
          "Profil adı, kategori, hizmetler, çalışma saatleri, telefon ve web sitesi bilgileri gerçek işletme bilgileriyle tutarlı olmalıdır. Anahtar kelime eklemek için işletme adını yapay biçimde değiştirmek yerine açıklama ve hizmet alanları kullanılmalıdır.",
        ],
        bullets: [
          "Birincil ve ikincil kategorileri doğru seçin",
          "Hizmetleri ve açıklamaları gerçek teklifinizle eşleştirin",
          "Telefon, adres ve web sitesi bilgisini güncel tutun",
          "Gerçek ekip, ofis ve iş fotoğrafları kullanın",
          "Form ve arama CTA'sını mobilde test edin",
        ],
      },
      {
        heading: "Yorumlar Nasıl Organik Şekilde Artırılır?",
        paragraphs: [
          "Yorum istemenin en iyi yolu, hizmet tesliminden sonra doğru zamanda kısa ve dürüst bir rica göndermektir. Yorum karşılığında ödül teklif etmek veya sahte yorum üretmek uzun vadede güven ve politika riski yaratır.",
          "Olumsuz yorumlara savunmacı olmayan, çözüm odaklı ve kişisel veri paylaşmayan yanıtlar verin. Bu yanıtlar yalnızca yorum sahibine değil, profili inceleyen yeni müşterilere de hitap eder.",
        ],
      },
      {
        heading: "Yerel SEO İçin Hizmet Sayfası Mimarisi",
        paragraphs: [
          "Ana sayfada tüm şehirleri ve tüm hizmetleri sıkıştırmak yerine, gerçek hizmet ve hedef bölgeler için özgün sayfalar oluşturun. İstanbul SEO ajansı sayfası, İstanbul Google Ads yönetimi sayfası ve İstanbul web tasarım ajansı sayfası farklı niyetlere cevap vermelidir.",
          "Her sayfa aynı metnin şehir adını değiştirilmiş kopyası olmamalıdır. Hizmetin o bölgedeki müşteri problemi, süreç, teslimat ve sık sorulan sorular özgün biçimde anlatılmalıdır.",
        ],
      },
      {
        heading: "Yerel SEO Performansı Nasıl Ölçülür?",
        paragraphs: [
          "Search Console'da sorgu, gösterim, tıklama ve ortalama konumu izleyin. Google İşletme Profili'nde arama, web sitesi tıklaması ve yol tarifi gibi aksiyonları takip edin. En önemlisi, bu kanallardan gelen formların ve telefonların satış kalitesini CRM'de işaretleyin.",
          "Gösterim artışı değerli bir ara sinyaldir; gerçek ticari hedef ise nitelikli talep ve satışa dönüşen görüşmedir.",
        ],
      },
    ],
    relatedServiceSlugs: ["seo-icerik-stratejisi", "web-tasarim-gelistirme", "crm-otomasyon"],
  },
  {
    slug: "google-ads-cpc-artisi-nedenleri-ve-cozumleri",
    title: "Google Ads CPC Artışı: Tıklama Maliyeti Neden Yükselir, Nasıl Düşürülür?",
    excerpt: "CPC artışını yalnızca rekabete bağlamak yerine kalite, arama niyeti, teklif stratejisi ve landing page verileriyle teşhis edin.",
    description: "Google Ads CPC artışı neden olur? Kalite puanı, reklam alaka düzeyi, rekabet, arama terimleri ve dönüşüm odaklı optimizasyonla tıklama maliyetini yönetin.",
    publishedAt: "2026-09-05",
    updatedAt: "2026-09-08",
    readingMinutes: 12,
    author: "MI DIGITAL",
    category: { name: "Google Ads", slug: "google-ads" },
    tags: [
      { name: "CPC", slug: "cpc" },
      { name: "Google Ads", slug: "google-ads" },
      { name: "Kalite Puanı", slug: "kalite-puani" },
      { name: "Teklif Stratejisi", slug: "teklif-stratejisi" },
    ],
    sections: [
      {
        heading: "CPC Artışı Her Zaman Kötü Müdür?",
        paragraphs: [
          "Tıklama maliyetinin yükselmesi tek başına kampanyanın kötüleştiği anlamına gelmez. Daha yüksek niyetli bir sorgudan gelen tıklama, daha pahalı olsa bile daha fazla form veya satış üretebilir.",
          "Doğru teşhis için CPC'yi dönüşüm oranı, CPA, nitelikli lead oranı ve gelirle birlikte okumak gerekir. Ucuz trafik değil, hedefe ulaşan trafik optimize edilmelidir.",
        ],
      },
      {
        heading: "Google Ads CPC Neden Yükselir?",
        paragraphs: [
          "CPC; açık artırmadaki rekabet, sorgunun ticari değeri, cihaz ve konum, reklam sıralaması, kalite sinyalleri ve teklif stratejisinden etkilenir. Yeni rakiplerin agresifleşmesi de maliyeti artırabilir.",
        ],
        bullets: [
          "Alakasız arama terimleri bütçeyi tüketiyor olabilir",
          "Reklam metni sorgunun niyetini karşılamıyor olabilir",
          "Landing page yavaş veya mesaj açısından kopuk olabilir",
          "Dönüşüm verisi eksik olduğu için teklif algoritması yanılıyor olabilir",
          "Geniş eşleme ve zayıf negatif kelime listesi kullanılabilir",
        ],
      },
      {
        heading: "CPC’yi Düşürmek İçin İlk Aksiyonlar",
        paragraphs: [
          "Son 30 gündeki arama terimlerini niyet gruplarına ayırın. Alakasız ve düşük niyetli sorguları negatifleyin; yüksek niyetli sorguları ayrı reklam gruplarında daha net mesajlarla yönetin.",
        ],
        bullets: [
          "Arama terimi raporunu haftalık inceleyin",
          "Reklam başlıklarını sorgu ve teklif ile eşleştirin",
          "Mobil landing page hızını ve form akışını test edin",
          "Dönüşüm tanımlarını birincil ve ikincil olarak ayırın",
          "CPC yerine nitelikli dönüşüm maliyetini ana KPI yapın",
        ],
      },
      {
        heading: "CPC, CPA ve ROAS Birlikte Nasıl Okunur?",
        paragraphs: [
          "CPC trafik maliyetini, CPA dönüşüm maliyetini, ROAS ise reklam harcamasının gelir karşılığını anlatır. B2B veya hizmet sektöründe form kalitesi ve satışa dönüşüm oranı rapora eklenmelidir.",
          "CPC yükselirken dönüşüm oranı daha hızlı yükseliyorsa kampanya iyileşiyor olabilir. Tek metriğe bakarak bütçe kesmek yerine funnel'ın tamamını kontrol edin.",
        ],
      },
    ],
    relatedServiceSlugs: ["google-ads-danismanligi", "performans-pazarlama"],
  },
  {
    slug: "meta-ads-roas-artirma-rehberi",
    title: "Meta Ads ROAS Artırma Rehberi: Kreatif, Kitle ve Teklif Sistemi",
    excerpt: "Meta Ads performansını yalnızca hedef kitle değiştirerek değil, kreatif yorgunluk, teklif ve ölçümleme sistemiyle birlikte iyileştirin.",
    description: "Meta Ads ROAS nasıl artırılır? Instagram reklamlarında kreatif test, hedef kitle, Pixel, katalog ve yeniden pazarlama stratejilerini inceleyin.",
    publishedAt: "2026-09-04",
    updatedAt: "2026-09-08",
    readingMinutes: 13,
    author: "MI DIGITAL",
    category: { name: "Meta Ads", slug: "meta-ads" },
    tags: [
      { name: "Meta Ads", slug: "meta-ads" },
      { name: "ROAS", slug: "roas" },
      { name: "Instagram Reklamları", slug: "instagram-reklamlari" },
      { name: "Kreatif Test", slug: "kreatif-test" },
    ],
    sections: [
      {
        heading: "Meta Ads ROAS Neyi Gösterir?",
        paragraphs: [
          "ROAS, reklam harcamasının ürettiği geliri gösterir; kârlılık ile aynı şey değildir. Ürün marjı, kargo, iade ve yeni müşteri değeri hesaba katılmadan yüksek ROAS yanlış bir güven yaratabilir.",
          "E-ticarette ROAS'ın yanında katkı marjı ve yeni müşteri oranını; lead kampanyalarında ise nitelikli lead ve satışa dönüşüm oranını takip edin.",
        ],
      },
      {
        heading: "Kreatif Yorgunluğu ROAS’ı Nasıl Etkiler?",
        paragraphs: [
          "Aynı görsel veya videonun aynı kitleye fazla gösterilmesi frekansı yükseltir, tıklama oranını düşürür ve maliyeti artırabilir. Sorun her zaman hedef kitle değildir; mesajın ve formatın yenilenmesi gerekebilir.",
        ],
        bullets: [
          "İlk 2 saniyede farklı açılar test edin",
          "Ürün faydası, sosyal kanıt ve itiraz cevaplarını ayırın",
          "Reels, Stories, carousel ve UGC formatlarını karşılaştırın",
          "Kazanan fikri farklı giriş ve tekliflerle yeniden üretin",
        ],
      },
      {
        heading: "Hedef Kitle ve Kampanya Yapısı",
        paragraphs: [
          "Kampanya yapısı veri hacmine göre sade olmalıdır. Çok küçük kitleleri çok sayıda reklam setine bölmek öğrenmeyi yavaşlatabilir; geniş hedefleme kullanırken kreatif ve dönüşüm sinyalleri daha kritik hale gelir.",
          "Yeni müşteri kazanımı, yeniden pazarlama ve katalog satışları ayrı iş hedefleri olarak raporlanmalıdır. Aynı ROAS hedefini bütün kampanyalara uygulamak doğru değildir.",
        ],
      },
      {
        heading: "Pixel ve Ölçümleme Kontrolü",
        paragraphs: [
          "Satın alma, sepete ekleme, içerik görüntüleme ve form gönderimi olaylarının doğru çalıştığını test etmeden performans kararı vermeyin. Tarayıcı kısıtları nedeniyle birinci taraf verileri ve sunucu tarafı sinyalleri de değerlendirilmelidir.",
        ],
      },
    ],
    relatedServiceSlugs: ["meta-ads-yonetimi", "performans-pazarlama"],
  },
  {
    slug: "tiktok-ads-reklam-verme-rehberi",
    title: "TikTok Ads Reklam Verme Rehberi: Marka ve Performans Kampanyaları",
    excerpt: "TikTok Ads’te başarı, başka platformdaki reklamı kopyalamaktan değil, platformun doğal video diline uygun test sisteminden geçer.",
    description: "TikTok Ads nasıl verilir? Kampanya hedefi, video kreatif, pixel, hedef kitle, bütçe ve performans metrikleri için uygulanabilir reklam rehberi.",
    publishedAt: "2026-09-03",
    updatedAt: "2026-09-08",
    readingMinutes: 12,
    author: "MI DIGITAL",
    category: { name: "TikTok Ads", slug: "tiktok-ads" },
    tags: [
      { name: "TikTok Ads", slug: "tiktok-ads" },
      { name: "Video Reklam", slug: "video-reklam" },
      { name: "Kreatif Strateji", slug: "kreatif-strateji" },
      { name: "Performans Pazarlama", slug: "performans-pazarlama" },
    ],
    sections: [
      {
        heading: "TikTok Ads Hangi Markalar İçin Uygun?",
        paragraphs: [
          "TikTok Ads; görsel anlatımı güçlü, hızlı test edilebilen ve ürününü kısa videoda gösterebilen markalar için önemli bir keşif ve performans kanalı olabilir. Ancak platforma girmek, aynı Meta reklamını dikey formata çevirmek değildir.",
          "Kararı hedef kitle yaşına göre değil; satın alma davranışı, içerik üretme kapasitesi ve teklifin video içinde anlatılabilirliğine göre verin.",
        ],
      },
      {
        heading: "TikTok Reklam Kreatifi Nasıl Olmalı?",
        paragraphs: [
          "TikTok kullanıcıları profesyonel reklam hissini hemen fark edebilir. İlk saniyelerde problem, sonuç veya merak unsuru görünmeli; ürün faydası gerçek kullanım ve doğal bir anlatımla gösterilmelidir.",
        ],
        bullets: [
          "Dikey 9:16 format ve hızlı giriş",
          "Altyazı ve sesli anlatım birlikte",
          "Tek videoda tek mesaj ve tek CTA",
          "UGC, ürün demosu, karşılaştırma ve yorum formatları",
          "Aynı fikrin farklı açılışlarla varyasyonları",
        ],
      },
      {
        heading: "TikTok Ads Performans Metrikleri",
        paragraphs: [
          "Video izlenme oranı ve ilk saniye tutma oranı kreatifin dikkat gücünü; CTR ve landing page görüntüleme kalitesi mesajın devamını; CPA, ROAS ve satışa dönüşüm oranı ise ticari sonucu gösterir.",
          "Marka kampanyalarında erişim ve izlenme değerliyken, performans kampanyalarında yeni müşteri kalitesi de değerlendirilmelidir.",
        ],
      },
      {
        heading: "TikTok Ads ile Diğer Kanallar Birlikte Nasıl Kullanılır?",
        paragraphs: [
          "TikTok yeni talep ve dikkat üretirken Google Ads aktif arama niyetini yakalayabilir, Meta Ads yeniden pazarlama ve teklif testini destekleyebilir. UTM adlandırması ve ortak dönüşüm tanımları kurulmadan kanallar arası katkı doğru okunamaz.",
        ],
      },
    ],
    relatedServiceSlugs: ["meta-ads-yonetimi", "performans-pazarlama", "crm-otomasyon"],
  },
  {
    slug: "reklam-performans-metrikleri-kpi-rehberi",
    title: "Reklam Performans Metrikleri: CPC, CTR, CPA, ROAS ve KPI Rehberi",
    excerpt: "Reklam raporunu metrik kalabalığına çevirmeden, doğru KPI’larla hangi kampanyaya ne aksiyon alınacağını görün.",
    description: "CPC, CTR, CPM, CPA, dönüşüm oranı, ROAS ve müşteri edinme maliyeti nasıl yorumlanır? Google, Meta ve TikTok reklamları için performans metriği rehberi.",
    publishedAt: "2026-09-02",
    updatedAt: "2026-09-08",
    readingMinutes: 13,
    author: "MI DIGITAL",
    category: { name: "Performans Pazarlama", slug: "performans-pazarlama" },
    tags: [
      { name: "CPC", slug: "cpc" },
      { name: "CTR", slug: "ctr" },
      { name: "CPA", slug: "cpa" },
      { name: "ROAS", slug: "roas" },
      { name: "KPI", slug: "kpi" },
    ],
    sections: [
      {
        heading: "Her İşletmenin KPI’ı Aynı Değildir",
        paragraphs: [
          "E-ticaret için gelir ve katkı marjı, hizmet işletmesi için nitelikli form ve satışa dönüşüm, marka kampanyası için erişim ve hatırlanırlık daha anlamlı olabilir. Raporu platformun sunduğu tüm metriklerle doldurmak yerine iş hedefinden geriye doğru kurun.",
        ],
      },
      {
        heading: "CPC, CPM, CTR ve Dönüşüm Oranı",
        paragraphs: [
          "CPC bir tıklamanın maliyetini, CPM bin gösterimin maliyetini, CTR reklamın dikkat gücünü ve dönüşüm oranı sayfanın ikna kabiliyetini anlatır. CPC düşük diye trafik kaliteli değildir; tıklamaların sayfada ne yaptığı kontrol edilmelidir.",
          "CTR yüksek ama dönüşüm düşükse reklam vaadi ile landing page arasında kopukluk olabilir. CTR düşük ama dönüşüm oranı yüksekse daha uygun kullanıcıya ulaşacak başlık ve kreatif testleri denenebilir.",
        ],
      },
      {
        heading: "CPA, CAC ve ROAS Arasındaki Fark",
        paragraphs: [
          "CPA bir dönüşümün maliyetidir. CAC ise yeni müşteriyi kazanmak için reklam, satış ve pazarlama maliyetlerinin daha geniş toplamıdır. ROAS reklam harcamasına karşı oluşan geliri gösterir; kârlılık için ürün marjı, indirim, iade ve müşteri yaşam boyu değeri de hesaba katılmalıdır.",
        ],
      },
      {
        heading: "Haftalık Reklam Raporu Nasıl Aksiyon Üretir?",
        paragraphs: [
          "İyi rapor; ne oldu, neden oldu ve şimdi ne yapacağız sorularını cevaplar. Her kanal için en iyi kampanyalar, riskli sinyaller ve gelecek haftanın test hipotezi yazılmalıdır.",
        ],
        bullets: [
          "Sonuç: harcama, dönüşüm, gelir ve maliyet",
          "Teşhis: sorgu, kitle, kreatif ve sayfa kalitesi",
          "Karar: durdur, koru, test et veya ölçekle",
          "Takip: sorumlu kişi, tarih ve beklenen sinyal",
        ],
      },
    ],
    relatedServiceSlugs: ["performans-pazarlama", "google-ads-danismanligi", "meta-ads-yonetimi"],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogPosts() {
  return [...blogPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getBlogCategories() {
  const map = new Map<string, { name: string; slug: string }>();
  for (const post of blogPosts) {
    map.set(post.category.slug, post.category);
  }
  return [...map.values()];
}

export function getBlogTags() {
  const map = new Map<string, { name: string; slug: string }>();
  for (const post of blogPosts) {
    for (const tag of post.tags) {
      map.set(tag.slug, tag);
    }
  }
  return [...map.values()];
}
