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
