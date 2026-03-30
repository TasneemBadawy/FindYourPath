// src/data/questions.js

export  const tracks = [
  "frontend",
  "backend",
  "fullstack",
  "testing",
  "cybersecurity",
  "dataanalysis",
  "ai"
];

export const questions = [
  {
    id: 1,
    text: "لما بتقابل مشكلة صعبة، أول حاجة بتعملها إيه؟",
    options: [
      { text: "بفصلها لأجزاء صغيرة وأحلل كل جزء لوحده", scores: { backend: 3, dataanalysis: 2, fullstack: 1 } },
      { text: "بفكر في حلول خارج الصندوق ومش مألوفة", scores: { frontend: 2, ai: 2, fullstack: 1 } },
      { text: "بشوف الموضوع من منظور اللي هيستخدم الحل", scores: { frontend: 3, fullstack: 2 } },
      { text: "بدور على نقطة الضعف أو الثغرة اللي ممكن تسبب المشكلة", scores: { testing: 2, cybersecurity: 3 } }
    ]
  },
  {
    id: 2,
    text: "إزاي بتتعامل مع غلطة وقعت فيها؟",
    options: [
      { text: "بفهم سببها بالظبط عشان متتكررش", scores: { backend: 2, testing: 2, dataanalysis: 1 } },
      { text: "بجرب حلول سريعة وأشوف مينفعش", scores: { frontend: 1, fullstack: 2, ai: 2 } },
      { text: "بفكر في تأثيرها على اللي حواليا", scores: { frontend: 2, fullstack: 2 } },
      { text: "بفحصها كويس وأتعلم منها", scores: { testing: 3, cybersecurity: 2, dataanalysis: 1 } }
    ]
  },
  {
    id: 3,
    text: "في رأيك، إيه اللي بيوصف طريقة تعلمك أحسن حاجة؟",
    options: [
      { text: "بحب أفهم كل حاجة بعمق قبل ما أبدأ", scores: { backend: 3, dataanalysis: 2, cybersecurity: 1 } },
      { text: "بتعلم أسرع لما أجرب بنفسي", scores: { frontend: 2, fullstack: 2, ai: 1 } },
      { text: "بحب أشوف الصورة كاملة الأول وبعدين أدخل في التفاصيل", scores: { fullstack: 3, backend: 1, frontend: 1 } },
      { text: "بتعلم من الأخطاء وأحلل ليه حصلت", scores: { testing: 3, cybersecurity: 2, dataanalysis: 1 } }
    ]
  },
  {
    id: 4,
    text: "إنت شخص بتركز في إيه أكتر؟",
    options: [
      { text: "في التفاصيل الدقيقة والمنطق اللي ورا أي حاجة", scores: { backend: 2, testing: 2, dataanalysis: 2 } },
      { text: "في الشكل والإبداع وطريقة تقديم الحاجة", scores: { frontend: 4, fullstack: 1 } },
      { text: "في إن كل حاجة تكون ماشية مع بعضها ومتكاملة", scores: { fullstack: 4, backend: 1 } },
      { text: "في إن مفيش أي ثغرات أو نقاط ضعف", scores: { cybersecurity: 3, testing: 2 } }
    ]
  },
  {
    id: 5,
    text: "أول حاجة بتيجي في بالك لما تبدأ مشروع جديد؟",
    options: [
      { text: "الأساس اللي هتبنى عليه المشروع والبنية التحتية", scores: { backend: 3, fullstack: 1, cybersecurity: 1 } },
      { text: "شكل المشروع وهل هيبقى سهل وممتع للمستخدم", scores: { frontend: 4, fullstack: 1 } },
      { text: "إزاي الأجزاء المختلفة هتشتغل مع بعض", scores: { fullstack: 4, backend: 1 } },
      { text: "إزاي أتأكد إن الشغل هيطلع مظبوط من الأول", scores: { testing: 3, cybersecurity: 2 } }
    ]
  },
  {
    id: 6,
    text: "إزاي توصف نفسك في الشغل؟",
    options: [
      { text: "منظم وبحب كل حاجة تكون مترتبة", scores: { backend: 2, testing: 2, dataanalysis: 1 } },
      { text: "مبدع وبحب أضيف لمسات جديدة", scores: { frontend: 3, ai: 2 } },
      { text: "بتأقلم بسرعة مع أي وضع", scores: { fullstack: 3, frontend: 1, backend: 1 } },
      { text: "دقيق وبحط كل حاجة تحت المجهر", scores: { testing: 3, cybersecurity: 2 } }
    ]
  },
  {
    id: 7,
    text: "إيه اللي بيخليك متحمس للشغل؟",
    options: [
      { text: "إن أحل مشكلة منطقية صعبة", scores: { backend: 3, dataanalysis: 2, ai: 1 } },
      { text: "إن أطلع شغل شكله جميل ويشد النظر", scores: { frontend: 4 } },
      { text: "إن أشتغل في أكتر من حاجة وأشوف نتيجة شغلي", scores: { fullstack: 4 } },
      { text: "إن ألاقي أخطاء وأصلحها قبل ما حد يحس بيه", scores: { testing: 3, cybersecurity: 2 } }
    ]
  },
  {
    id: 8,
    text: "لو ضغط الشغل زاد، بتتصرف إزاي؟",
    options: [
      { text: "بنظم وقتي أكتر وأخطط لكل خطوة", scores: { backend: 2, testing: 2, dataanalysis: 1 } },
      { text: "ببقى أكثر إبداع وإنتاجية", scores: { frontend: 2, ai: 2, fullstack: 1 } },
      { text: "بتعامل مع كل حاجة بمرونة", scores: { fullstack: 3, frontend: 1, backend: 1 } },
      { text: "ببقى أكثر دقة وتركيز", scores: { testing: 3, cybersecurity: 2 } }
    ]
  },
  {
    id: 9,
    text: "أي نوع من التحديات بتفضل؟",
    options: [
      { text: "تحدي منطقي محتاج تفكير عميق", scores: { backend: 3, dataanalysis: 2, ai: 1 } },
      { text: "تحدي إبداعي محتاج خيال", scores: { frontend: 3, ai: 2 } },
      { text: "تحدي متعدد الجوانب محتاج تنوع", scores: { fullstack: 4 } },
      { text: "تحدي محتاج دقة وتحليل", scores: { testing: 3, cybersecurity: 2 } }
    ]
  },
  {
    id: 10,
    text: "لما حد بينتقد شغلك، رد فعلك إيه؟",
    options: [
      { text: "بسمع النقد وبفكر في الجزء المنطقي منه", scores: { backend: 2, testing: 2, dataanalysis: 1 } },
      { text: "باخد النقد بعين الاعتبار خصوصًا لو متعلق بالشكل", scores: { frontend: 3 } },
      { text: "بشوف النقد من كل الجوانب وأستفيد", scores: { fullstack: 3, frontend: 1, backend: 1 } },
      { text: "بحلل النقد وأشوف هل هو دقيق ولا لأ", scores: { testing: 3, cybersecurity: 2 } }
    ]
  },
  {
    id: 11,
    text: "إيه أكتر حاجة بتجذب انتباهك في المجال التقني؟",
    options: [
      { text: "الطريقة اللي الشغل بيشتغل بيها من جوه", scores: { backend: 3, dataanalysis: 1, ai: 1 } },
      { text: "شكل الواجهة وإزاي المستخدم بيتعامل معاها", scores: { frontend: 4 } },
      { text: "إن أكون فاهم كل حاجة من الأول لآخر", scores: { fullstack: 4 } },
      { text: "إزاي أتأكد إن كل حاجة شغالة صح", scores: { testing: 3, cybersecurity: 2 } }
    ]
  },
  {
    id: 12,
    text: "بتستمتع بقراية إيه أكتر؟",
    options: [
      { text: "مقالات عن البنية التحتية والأداء", scores: { backend: 3, cybersecurity: 1, dataanalysis: 1 } },
      { text: "مقالات عن تصميم تجربة المستخدم", scores: { frontend: 4 } },
      { text: "مقالات بتقارن بين تقنيات مختلفة", scores: { fullstack: 3, ai: 1 } },
      { text: "مقالات عن الأمن والجودة", scores: { cybersecurity: 3, testing: 2 } }
    ]
  },
  {
    id: 13,
    text: "في وقت فراغك، بتحب تعمل إيه؟",
    options: [
      { text: "أحل ألغاز أو ألعب ألعاب محتاجة تفكير", scores: { backend: 2, dataanalysis: 2, ai: 1 } },
      { text: "أرسم أو أصمم أو أعمل حاجة إبداعية", scores: { frontend: 3, ai: 1 } },
      { text: "أجرب أدوات وتقنيات جديدة", scores: { fullstack: 3, frontend: 1, backend: 1 } },
      { text: "أحلل أي حاجة قدامي عشان أفهمها", scores: { testing: 2, cybersecurity: 2, dataanalysis: 1 } }
    ]
  },
  {
    id: 14,
    text: "لو هتطور مهارة واحدة دلوقتي، هتكون إيه؟",
    options: [
      { text: "أتقن البرمجة الخلفية وقواعد البيانات", scores: { backend: 4 } },
      { text: "أتقن البرمجة الأمامية والتصميم", scores: { frontend: 4 } },
      { text: "أبقى فاهم المجالين مع بعض", scores: { fullstack: 4 } },
      { text: "أتقن اختبار البرمجيات وضمان الجودة", scores: { testing: 4 } }
    ]
  },
  {
    id: 15,
    text: "أي نوع من المشاريع بتحمسك؟",
    options: [
      { text: "مشروع معقد محتاج تصميم بنية قوية", scores: { backend: 3, dataanalysis: 1, cybersecurity: 1 } },
      { text: "مشروع شكله هيبقى مميز وجذاب", scores: { frontend: 4 } },
      { text: "مشروع متكامل هشتغل فيه على كل حاجة", scores: { fullstack: 4 } },
      { text: "مشروع محتاج دقة عالية وتفاصيل كتير", scores: { testing: 3, cybersecurity: 2 } }
    ]
  },
  {
    id: 16,
    text: "لما بتدور على حل، بتفضل تعتمد على إيه؟",
    options: [
      { text: "على المنطق والقوانين اللي أنا عارفها", scores: { backend: 3, dataanalysis: 2, testing: 1 } },
      { text: "على حدسي وإبداعي في التفكير", scores: { frontend: 3, ai: 2 } },
      { text: "على ربط المعلومات من مصادر مختلفة", scores: { fullstack: 3, dataanalysis: 1, ai: 1 } },
      { text: "على التدقيق والتحقق من كل خطوة", scores: { testing: 3, cybersecurity: 2 } }
    ]
  },
  {
    id: 17,
    text: "إيه الدور اللي بتحبه في فريق العمل؟",
    options: [
      { text: "اللي بيخطط وبيحط الهيكل", scores: { backend: 3, fullstack: 1 } },
      { text: "اللي بيضيف لمسات إبداعية", scores: { frontend: 4 } },
      { text: "اللي بيربط بين الأعضاء وبين المهام", scores: { fullstack: 4 } },
      { text: "اللي بيدقق ويصحح الأخطاء", scores: { testing: 3, cybersecurity: 2 } }
    ]
  },
  {
    id: 18,
    text: "لو طلبات المشروع اتغيرت فجأة، بتعمل إيه؟",
    options: [
      { text: "بحاول أحافظ على استقرار الأساس", scores: { backend: 2, cybersecurity: 2, testing: 1 } },
      { text: "بتأقلم وأغير بسرعة", scores: { frontend: 2, fullstack: 2, ai: 1 } },
      { text: "بشوف إزاي أدمج التغيير من غير ما تأثر على الباقي", scores: { fullstack: 4 } },
      { text: "بختبر التغيير كويس قبل ما أطبقه", scores: { testing: 3, cybersecurity: 2 } }
    ]
  },
  {
    id: 19,
    text: "في مشروع، إيه أولوية الأولويات بالنسبة لك؟",
    options: [
      { text: "إنه يشتغل بكفاءة وسرعة", scores: { backend: 3, fullstack: 1 } },
      { text: "إنه يكون سهل الاستخدام وشكله حلو", scores: { frontend: 4 } },
      { text: "إنه يغطي كل المتطلبات ويكون مرن", scores: { fullstack: 4 } },
      { text: "إنه ميكونش فيه أخطاء", scores: { testing: 3, cybersecurity: 2 } }
    ]
  },
  {
    id: 20,
    text: "إزاي بتعرف إن شغلك ناجح؟",
    options: [
      { text: "لما بحل مشكلة كانت صعبة", scores: { backend: 3, dataanalysis: 2, ai: 1 } },
      { text: "لما الناس بتشكر في الشغل وتستريح معاه", scores: { frontend: 4 } },
      { text: "لما بشوف شغلي شغال في أكتر من حاجة", scores: { fullstack: 4 } },
      { text: "لما مفيش أي أخطاء تظهر", scores: { testing: 3, cybersecurity: 2 } }
    ]
  },
  {
    id: 21,
    text: "بتشوف نفسك بعد ٥ سنين فين؟",
    options: [
      { text: "خبير في الأنظمة والبنى التحتية", scores: { backend: 3, cybersecurity: 1, dataanalysis: 1 } },
      { text: "مبدع في تصميم تجارب المستخدم", scores: { frontend: 4 } },
      { text: "قائد فريق بيفهم كل حاجة", scores: { fullstack: 4 } },
      { text: "مستشار في جودة البرمجيات", scores: { testing: 3, cybersecurity: 2 } }
    ]
  },
  {
    id: 22,
    text: "في رأيك، إيه أهم مجال للمستقبل؟",
    options: [
      { text: "الحوسبة السحابية والبنى التحتية", scores: { backend: 3, cybersecurity: 2 } },
      { text: "تجربة المستخدم والواجهات المبتكرة", scores: { frontend: 4 } },
      { text: "التطبيقات المتكاملة اللي بتجمع كل حاجة", scores: { fullstack: 4 } },
      { text: "الأمن السيبراني وجودة البرمجيات", scores: { cybersecurity: 3, testing: 2 } }
    ]
  },
  {
    id: 23,
    text: "إزاي بتتعامل مع أي تقنية جديدة؟",
    options: [
      { text: "بحب أفهمها بعمق قبل ما أستخدمها", scores: { backend: 2, dataanalysis: 2, ai: 1 } },
      { text: "بجربها علطول وأتعلم بالممارسة", scores: { frontend: 3, fullstack: 2 } },
      { text: "بدور على إزاي أدمجها مع اللي عندي", scores: { fullstack: 4 } },
      { text: "بستناها تثبت نفسها الأول", scores: { testing: 2, cybersecurity: 2 } }
    ]
  },
  {
    id: 24,
    text: "إيه البصمة اللي عايز تسبها في شغلك؟",
    options: [
      { text: "أنظمة قوية ومستقرة يعتمد عليها الناس", scores: { backend: 3, cybersecurity: 2 } },
      { text: "تجارب مستخدم تخلي الناس مبسوطة", scores: { frontend: 4 } },
      { text: "حلول شاملة متكاملة تغطي كل الاحتياجات", scores: { fullstack: 4 } },
      { text: "معايير جودة تخلق فرق", scores: { testing: 3, cybersecurity: 2 } }
    ]
  },
  {
    id: 25,
    text: "إيه أكتر حاجة بتدفعك قدام في مسيرتك؟",
    options: [
      { text: "إني أكون خبير تقني الناس ترجع له", scores: { backend: 2, cybersecurity: 2, dataanalysis: 1 } },
      { text: "إني أكون مبدع وأعمل حاجات جديدة", scores: { frontend: 3, ai: 2 } },
      { text: "إني أكون شامل وقادر أشغل أي دور", scores: { fullstack: 4 } },
      { text: "إني أكون دقيق وموثوق في كل حاجة", scores: { testing: 3, cybersecurity: 2 } }
    ]
  }
];