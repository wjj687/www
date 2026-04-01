import type { Poem, PoemPhoneticSegment } from "@/data/poems";

function p(text: string, pinyin?: string): PoemPhoneticSegment {
  return { text, pinyin };
}

export const zhaoNanBatchPoems3: Poem[] = [
  {
    id: "ye-you-si-jun",
    chapter: "国风·召南",
    title: "野有死麕",
    orderLabel: "第二十三首",
    lines: [
      "野有死麕，白茅包之。",
      "有女怀春，吉士诱之。",
      "林有朴樕，野有死鹿。",
      "白茅纯束，有女如玉。",
      "舒而脱脱兮，无感我帨兮，",
      "无使尨也吠。"
    ],
    phonetics: [
      [p("野", "yě"), p("有", "yǒu"), p("死", "sǐ"), p("麕", "jūn"), p("，"), p("白茅", "bái máo"), p("包", "bāo"), p("之", "zhī"), p("。")],
      [p("有", "yǒu"), p("女", "nǚ"), p("怀春", "huái chūn"), p("，"), p("吉士", "jí shì"), p("诱", "yòu"), p("之", "zhī"), p("。")],
      [p("林", "lín"), p("有", "yǒu"), p("朴樕", "pú sù"), p("，"), p("野", "yě"), p("有", "yǒu"), p("死", "sǐ"), p("鹿", "lù"), p("。")],
      [p("白茅", "bái máo"), p("纯束", "tún shù"), p("，"), p("有", "yǒu"), p("女", "nǚ"), p("如玉", "rú yù"), p("。")],
      [p("舒", "shū"), p("而", "ér"), p("脱脱", "tuì tuì"), p("兮", "xī"), p("，"), p("无", "wú"), p("感", "hàn"), p("我", "wǒ"), p("帨", "shuì"), p("兮", "xī"), p("，")],
      [p("无", "wú"), p("使", "shǐ"), p("尨", "máng"), p("也", "yě"), p("吠", "fèi"), p("。")]
    ],
    annotationTargets: [
      ["麕", "白茅"],
      ["怀春", "吉士"],
      ["朴樕"],
      ["纯束", "如玉"],
      ["脱脱", "感", "帨"],
      ["尨"]
    ],
    annotations: [
      ["麕，獐子。", "白茅，洁白的茅草。"],
      ["怀春，怀有婚恋之思。", "吉士，善男子。"],
      ["朴樕，小树丛生貌。"],
      ["纯束，捆扎。", "如玉，形容女子美好。"],
      ["脱脱，舒缓貌。", "感，通“撼”，触动。", "帨，女子佩巾。"],
      ["尨，多毛狗。"]
    ],
    translation: [
      "野地里有死去的獐子，用白茅草把它包起来。",
      "有个女子正怀着春情，善良的男子来引逗她。",
      "树林里有丛生的小树，野地里有死去的鹿。",
      "用白茅草把它捆扎起来，有个女子美得像玉一样。",
      "请慢慢地、缓缓地来啊，不要碰动我的佩巾啊，",
      "也不要惊动那只多毛的狗叫起来。"
    ],
    interpretationEntities: [
      {
        id: "sijun-jun",
        label: "麕",
        category: "fauna",
        summary: "麕即獐子，古代山野常见的小型鹿科动物。诗中它并非重点对象，而是男女相遇场景的一部分。",
        facts: [
          { label: "常见名称", value: "獐子" },
          { label: "诗中作用", value: "构成猎获与馈赠的情境" }
        ],
        details: [
          "《野有死麕》里的“死麕”常被看作猎人所得之物，它带着山野、猎取和馈赠的意味。",
          "正因为有这份山林中的猎获，后面的男女相逢才显得更具体，不像纯粹凭空生出的情事。"
        ]
      },
      {
        id: "sijun-baimao",
        label: "白茅",
        category: "flora",
        summary: "白茅是野地常见草本植物，在诗里有覆盖、束扎、装饰与隔离之意。",
        facts: [
          { label: "植物类型", value: "禾本科草本植物" }
        ],
        details: [
          "白茅在《诗经》中常常出现，既可为礼器所用，也可用于包裹、铺陈。",
          "在这首诗里，它让粗野的猎获多了一层柔软的包裹，也给男女相遇添上一点含蓄气。"
        ]
      }
    ],
    interpretationMentions: [
      [{ entityId: "sijun-jun", target: "麕" }, { entityId: "sijun-baimao", target: "白茅" }],
      [],
      [],
      [{ entityId: "sijun-baimao", target: "白茅" }],
      [],
      []
    ]
  },
  {
    id: "he-bi-nong-yi",
    chapter: "国风·召南",
    title: "何彼襛矣",
    orderLabel: "第二十四首",
    lines: [
      "何彼襛矣？唐棣之华。",
      "曷不肃雝？王姬之车。",
      "何彼襛矣？华如桃李。",
      "平王之孙，齐侯之子。",
      "其钓维何？维丝伊缗。",
      "齐侯之子，平王之孙。"
    ],
    phonetics: [
      [p("何", "hé"), p("彼", "bǐ"), p("襛", "nóng"), p("矣", "yǐ"), p("？"), p("唐棣", "táng dì"), p("之", "zhī"), p("华", "huā"), p("。")],
      [p("曷", "hé"), p("不", "bù"), p("肃雝", "sù yōng"), p("？"), p("王姬", "wáng jī"), p("之", "zhī"), p("车", "chē"), p("。")],
      [p("何", "hé"), p("彼", "bǐ"), p("襛", "nóng"), p("矣", "yǐ"), p("？"), p("华", "huā"), p("如", "rú"), p("桃李", "táo lǐ"), p("。")],
      [p("平王", "píng wáng"), p("之", "zhī"), p("孙", "sūn"), p("，"), p("齐侯", "qí hóu"), p("之", "zhī"), p("子", "zǐ"), p("。")],
      [p("其", "qí"), p("钓", "diào"), p("维", "wéi"), p("何", "hé"), p("？"), p("维", "wéi"), p("丝", "sī"), p("伊", "yī"), p("缗", "mín"), p("。")],
      [p("齐侯", "qí hóu"), p("之", "zhī"), p("子", "zǐ"), p("，"), p("平王", "píng wáng"), p("之", "zhī"), p("孙", "sūn"), p("。")]
    ],
    annotationTargets: [
      ["襛", "唐棣"],
      ["肃雝", "王姬"],
      ["桃李"],
      ["平王", "齐侯"],
      ["缗"],
      ["平王"]
    ],
    annotations: [
      ["襛，花木繁盛貌。", "唐棣，郁李一类花木。"],
      ["肃雝，严肃而雍容。", "王姬，周王之女。"],
      ["桃李，喻花色繁美。"],
      ["平王，东周初王。", "齐侯，齐国诸侯。"],
      ["缗，钓丝。"],
      ["平王之孙，言其尊贵出身。"]
    ],
    translation: [
      "怎么那样繁盛美好？正像唐棣花开。",
      "为什么不显得如此严肃雍容？原来那是王姬的车驾。",
      "怎么那样繁盛美好？花色像桃花李花一般。",
      "她是平王的外孙女，也是齐侯的女儿。",
      "她垂钓用的是什么？用丝线做成钓绳。",
      "她是齐侯的女儿，也是平王的外孙女。"
    ],
    interpretationEntities: [
      {
        id: "nongyi-tangdi",
        label: "唐棣",
        category: "flora",
        summary: "唐棣一般被认为是郁李一类花木，诗中用它起兴，以花之繁盛映出王姬车驾之美。",
        facts: [
          { label: "植物类型", value: "蔷薇科花木一类" }
        ],
        details: [
          "《何彼襛矣》先写花，再写人，唐棣之华像是婚礼队伍前的一片明丽春色。",
          "它不是单纯的装饰，而是把王姬出嫁的尊贵与明艳先用花色托了出来。"
        ]
      },
      {
        id: "nongyi-wangji",
        label: "王姬",
        category: "person",
        summary: "王姬指周王之女，古代婚嫁中身份极尊。诗中称其车驾、家世与容仪，带有明显的颂美意味。",
        facts: [
          { label: "身份", value: "周王之女" },
          { label: "诗中作用", value: "婚嫁主角" }
        ],
        details: [
          "这首诗写王姬，不只写她的身世，也写她出车时那种严肃雍容的气度。",
          "古人赞婚礼，常常借花、车、家世来写，这首诗正是其中典型。"
        ]
      }
    ],
    interpretationMentions: [
      [{ entityId: "nongyi-tangdi", target: "唐棣" }],
      [{ entityId: "nongyi-wangji", target: "王姬" }],
      [],
      [{ entityId: "nongyi-wangji", target: "平王" }, { entityId: "nongyi-wangji", target: "齐侯" }],
      [],
      [{ entityId: "nongyi-wangji", target: "平王" }, { entityId: "nongyi-wangji", target: "齐侯" }]
    ]
  },
  {
    id: "zou-yu",
    chapter: "国风·召南",
    title: "驺虞",
    orderLabel: "第二十五首",
    lines: [
      "彼茁者葭，壹发五豝，",
      "于嗟乎驺虞！",
      "彼茁者蓬，壹发五豵，",
      "于嗟乎驺虞。"
    ],
    phonetics: [
      [p("彼", "bǐ"), p("茁", "zhuó"), p("者", "zhě"), p("葭", "jiā"), p("，"), p("壹", "yī"), p("发", "fā"), p("五", "wǔ"), p("豝", "bā"), p("，")],
      [p("于嗟", "yú jiē"), p("乎", "hū"), p("驺虞", "zōu yú"), p("！")],
      [p("彼", "bǐ"), p("茁", "zhuó"), p("者", "zhě"), p("蓬", "péng"), p("，"), p("壹", "yī"), p("发", "fā"), p("五", "wǔ"), p("豵", "zōng"), p("，")],
      [p("于嗟", "yú jiē"), p("乎", "hū"), p("驺虞", "zōu yú"), p("。")]
    ],
    annotationTargets: [
      ["葭", "豝"],
      ["驺虞"],
      ["蓬", "豵"],
      ["驺虞"]
    ],
    annotations: [
      ["葭，芦苇。", "豝，母猪。"],
      ["驺虞，古说为掌鸟兽之官，也有作善猎者解。"],
      ["蓬，蓬蒿。", "豵，小猪。"],
      ["驺虞，诗中所称美者。"]
    ],
    translation: [
      "那茁壮的芦苇可以做箭杆，一发射中五头母猪，",
      "啊，多么了不起的驺虞啊！",
      "那茁壮的蓬蒿可以做箭杆，一发射中五头小猪，",
      "啊，多么了不起的驺虞啊！"
    ],
    interpretationEntities: [
      {
        id: "zouyu-jia",
        label: "葭",
        category: "flora",
        summary: "葭是初生芦苇，质韧可用。诗中拿它写箭杆，也使狩猎场景一下子清楚起来。",
        facts: [
          { label: "植物类型", value: "芦苇嫩茎" }
        ],
        details: [
          "《驺虞》开头先写葭、蓬，不是闲笔，而是在给猎事搭起器物背景。",
          "这些草木一入诗，荒野的气息和狩猎的劲疾也就跟着出来了。"
        ]
      },
      {
        id: "zouyu-title",
        label: "驺虞",
        category: "person",
        summary: "驺虞在古注中有多种解释，或作掌鸟兽之官，或指善猎者，也有人把它看作象征仁政之义兽名号。",
        facts: [
          { label: "传统解释", value: "善猎者或掌猎之官" }
        ],
        details: [
          "这首诗里的“驺虞”历来有争论，但无论怎样解，它都是被赞叹的对象。",
          "诗用极短的篇幅把技艺、丰盛和称美压在一起，因此读来格外有尾声感。"
        ]
      }
    ],
    interpretationMentions: [
      [{ entityId: "zouyu-jia", target: "葭" }],
      [{ entityId: "zouyu-title", target: "驺虞" }],
      [{ entityId: "zouyu-jia", target: "蓬" }],
      [{ entityId: "zouyu-title", target: "驺虞" }]
    ]
  }
];
