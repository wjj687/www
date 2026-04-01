import { zhaoNanBatchPoems } from "@/data/poems-zhaonan-batch";
import { zhaoNanBatchPoems2 } from "@/data/poems-zhaonan-batch-2";
import { zhaoNanBatchPoems3 } from "@/data/poems-zhaonan-batch-3";
import { beiFengBatchPoems1 } from "@/data/poems-beifeng-batch-1";
import { beiFengBatchPoems2 } from "@/data/poems-beifeng-batch-2";
import { beiFengBatchPoems3 } from "@/data/poems-beifeng-batch-3";
import { beiFengBatchPoems4 } from "@/data/poems-beifeng-batch-4";
import { beiFengBatchPoems5 } from "@/data/poems-beifeng-batch-5";
import { yongFengBatchPoems1 } from "@/data/poems-yongfeng-batch-1";
import { yongFengBatchPoems2 } from "@/data/poems-yongfeng-batch-2";
import { weiFengBatchPoems1 } from "@/data/poems-weifeng-batch-1";
import { weiFengBatchPoems2 } from "@/data/poems-weifeng-batch-2";
import { wangFengBatchPoems1 } from "@/data/poems-wangfeng-batch-1";
import { zhengFengBatchPoems1 } from "@/data/poems-zhengfeng-batch-1";
import { zhengFengBatchPoems2 } from "@/data/poems-zhengfeng-batch-2";
import { qiFengBatchPoems1 } from "@/data/poems-qifeng-batch-1";
import { qiFengBatchPoems2 } from "@/data/poems-qifeng-batch-2";
import { weiTangBatchPoems1 } from "@/data/poems-wei-tang-batch-1";
import { tangFengBatchPoems1 } from "@/data/poems-tangfeng-batch-1";
import { tangQinFengBatchPoems2 } from "@/data/poems-tang-qinfeng-batch-2";
import { qinChenFengBatchPoems3 } from "@/data/poems-qinfeng-chenfeng-batch-3";
import { qinChenGuiCaoFengBatchPoems4 } from "@/data/poems-qinchen-gui-caofeng-batch-4";
import { binFengLuMingBatchPoems5 } from "@/data/poems-binfeng-luming-batch-5";
import { luMingBaiHuaBatchPoems6 } from "@/data/poems-luming-baihua-batch-6";
import { baiHuaBatchPoems7 } from "@/data/poems-baihua-batch-7";
import { hongYanBatchPoems8 } from "@/data/poems-hongyan-batch-8";
import { hongYanBatchPoems9 } from "@/data/poems-hongyan-batch-9";
import { jieNanShanBatchPoems10 } from "@/data/poems-jienanshan-batch-10";
import { xiaoMinBatchPoems11 } from "@/data/poems-xiaomin-batch-11";
import { xiaoMinBatchPoems12 } from "@/data/poems-xiaomin-batch-12";
import { beiShanBatchPoems13 } from "@/data/beishan-batch-13";
import { beiShanBatchPoems14 } from "@/data/beishan-batch-14";
import { sangHuBatchPoems15 } from "@/data/sanghu-batch-15";
import { sangHuBatchPoems16 } from "@/data/sanghu-batch-16";
import { douRenShiBatchPoems17 } from "@/data/dourenshi-batch-17";
import { wenWangBatchPoems18 } from "@/data/wenwang-batch-18";
import { wenWangBatchPoems19 } from "@/data/wenwang-batch-19";
import { shengMinBatchPoems20 } from "@/data/shengmin-batch-20";
import { dangBatchPoems21 } from "@/data/dang-batch-21";
import { dangBatchPoems22 } from "@/data/dang-batch-22";
import { zhouSongBatchPoems23 } from "@/data/zhou-song-batch-23";
import { zhouSongBatchPoems24 } from "@/data/zhou-song-batch-24";
import { zhouSongBatchPoems25 } from "@/data/zhou-song-batch-25";
import { zhouSongBatchPoems26 } from "@/data/zhou-song-batch-26";
import { luSongBatchPoems27 } from "@/data/lu-song-batch-27";
import { shangSongBatchPoems28 } from "@/data/shang-song-batch-28";

export type PoemPhoneticSegment = {
  text: string;
  pinyin?: string;
};

export type InterpretationCategory = "person" | "place" | "flora" | "fauna";

export type PoemInterpretationEntity = {
  id: string;
  label: string;
  category: InterpretationCategory;
  summary: string;
  facts?: Array<{
    label: string;
    value: string;
  }>;
  details: string[];
  image?: {
    src: string;
    alt: string;
    caption: string;
    credit: string;
    sourceUrl: string;
    placeholderSrc?: string;
  };
};

export type PoemInterpretationMention = {
  entityId: string;
  target: string;
};

export type Poem = {
  id: string;
  chapter: string;
  title: string;
  orderLabel: string;
  lines: string[];
  phonetics?: PoemPhoneticSegment[][];
  annotations?: string[][];
  annotationTargets?: string[][];
  translation?: string[];
  interpretationEntities?: PoemInterpretationEntity[];
  interpretationMentions?: PoemInterpretationMention[][];
};

function s(text: string, pinyin?: string): PoemPhoneticSegment {
  return { text, pinyin };
}

export const poems: Poem[] = [
  {
    id: "guan-ju",
    chapter: "国风·周南",
    title: "关雎",
    orderLabel: "第一首",
    lines: [
      "关关雎鸠，在河之洲。",
      "窈窕淑女，君子好逑。",
      "参差荇菜，左右流之。",
      "窈窕淑女，寤寐求之。",
      "求之不得，寤寐思服。",
      "悠哉悠哉，辗转反侧。",
      "参差荇菜，左右采之。",
      "窈窕淑女，琴瑟友之。",
      "参差荇菜，左右芼之。",
      "窈窕淑女，钟鼓乐之。"
    ],
    phonetics: [
      [s("关", "guān"), s("关", "guān"), s("雎", "jū"), s("鸠", "jiū"), s("，"), s("在", "zài"), s("河", "hé"), s("之", "zhī"), s("洲", "zhōu"), s("。")],
      [s("窈", "yǎo"), s("窕", "tiǎo"), s("淑", "shū"), s("女", "nǚ"), s("，"), s("君", "jūn"), s("子", "zǐ"), s("好", "hǎo"), s("逑", "qiú"), s("。")],
      [s("参", "cēn"), s("差", "cī"), s("荇", "xìng"), s("菜", "cài"), s("，"), s("左", "zuǒ"), s("右", "yòu"), s("流", "liú"), s("之", "zhī"), s("。")],
      [s("窈", "yǎo"), s("窕", "tiǎo"), s("淑", "shū"), s("女", "nǚ"), s("，"), s("寤", "wù"), s("寐", "mèi"), s("求", "qiú"), s("之", "zhī"), s("。")],
      [s("求", "qiú"), s("之", "zhī"), s("不", "bù"), s("得", "dé"), s("，"), s("寤", "wù"), s("寐", "mèi"), s("思", "sī"), s("服", "fú"), s("。")],
      [s("悠", "yōu"), s("哉", "zāi"), s("悠", "yōu"), s("哉", "zāi"), s("，"), s("辗", "zhǎn"), s("转", "zhuǎn"), s("反", "fǎn"), s("侧", "cè"), s("。")],
      [s("参", "cēn"), s("差", "cī"), s("荇", "xìng"), s("菜", "cài"), s("，"), s("左", "zuǒ"), s("右", "yòu"), s("采", "cǎi"), s("之", "zhī"), s("。")],
      [s("窈", "yǎo"), s("窕", "tiǎo"), s("淑", "shū"), s("女", "nǚ"), s("，"), s("琴", "qín"), s("瑟", "sè"), s("友", "yǒu"), s("之", "zhī"), s("。")],
      [s("参", "cēn"), s("差", "cī"), s("荇", "xìng"), s("菜", "cài"), s("，"), s("左", "zuǒ"), s("右", "yòu"), s("芼", "mào"), s("之", "zhī"), s("。")],
      [s("窈", "yǎo"), s("窕", "tiǎo"), s("淑", "shū"), s("女", "nǚ"), s("，"), s("钟", "zhōng"), s("鼓", "gǔ"), s("乐", "lè"), s("之", "zhī"), s("。")]
    ],
    annotationTargets: [
      ["关关雎鸠", "河之洲"],
      ["窈窕淑女", "好逑"],
      ["参差", "荇菜", "流之"],
      ["寤寐"],
      ["思服"],
      ["悠哉悠哉", "辗转反侧"],
      ["采之"],
      ["琴瑟友之"],
      ["芼之"],
      ["钟鼓乐之"]
    ],
    annotations: [
      [
        "关关雎鸠，写雎鸠相应和之声。旧说此鸟雌雄和鸣，不相乖离，故先举以起下文夫妇相求之意。",
        "河之洲，洲为水中可居之地，言其所见之处，兼见景物清和。"
      ],
      [
        "窈窕淑女，谓女子幽闲贞静而有美德。",
        "好逑，逑为匹配之偶，言此女正为君子所宜求配。"
      ],
      [
        "参差，长短不齐之貌。",
        "荇菜，水草名，可食。",
        "流之，顺水求取之貌，言见其物而往来采择，亦以兴求偶未得。"
      ],
      ["寤寐，醒时与寝时，合言之以见昼夜思求不已。"],
      ["思服，服犹念也，言求之不得，则思念更深。"],
      [
        "悠哉悠哉，言忧思绵长不绝。",
        "辗转反侧，写卧而不安，翻覆不能成寐，以见相思之切。"
      ],
      ["采之，承上章流之而来，意在由远望而至亲取，层层递进。"],
      ["琴瑟友之，谓以琴瑟相亲和，写既得佳偶之后情意和美。"],
      ["芼之，择取而熟治之，由流、采、芼愈见事情渐成。"],
      ["钟鼓乐之，乐之即使之欢乐，写婚姻既成，以礼乐相娱。"]
    ],
    translation: [
      "鱼鹰关关对着唱，停在河中沙洲上。",
      "漂亮善良好姑娘，该是君子好对象。",
      "或长或短的荇菜，或左或右把它采。",
      "漂亮善良好姑娘，睡里梦里求怎样。",
      "求她总是得不到，睡里梦里想更牢。",
      "长啊长啊长想念，翻来覆去睡不好。",
      "或长或短的荇菜，或左或右把它采。",
      "漂亮善良好姑娘，弹琴鼓瑟把她爱。",
      "或长或短的荇菜，或左或右把它采。",
      "漂亮善良好姑娘，敲钟鼓使她开怀。"
    ],
    interpretationEntities: [
      {
        id: "jujiu",
        label: "雎鸠",
        category: "fauna",
        summary: "“雎鸠”在古注中通常被解释为栖息水边、雌雄和鸣的鸟类，现代说明里常把它对应到鱼鹰一类的食鱼猛禽。",
        facts: [
          { label: "现代参照", value: "常借作鱼鹰一类近水猛禽" },
          { label: "学名", value: "Pandion haliaetus" },
          { label: "常见环境", value: "河流、湖泊、海岸、河口湿地" },
          { label: "典型特征", value: "盘旋俯冲、捕鱼为食、近水栖居" }
        ],
        details: [
          "鱼鹰学名 Pandion haliaetus，是一种大型食鱼猛禽，常活动在河流、湖泊、海湾等近水环境，擅长在空中盘旋后俯冲入水捕鱼。",
          "《关雎》中的“雎鸠”未必能和现代单一物种完全一一对应，但“水边鸣禽、和声起兴”的特征，与鱼鹰这一类近水鸟形象相当贴近。",
          "从阅读效果上说，雎鸠最重要的意义并不只是“它究竟是哪一种鸟”，而是它把场景、声音和情感同时带了出来：诗一开口，读者先听见鸟鸣，再看见水洲，然后才走进人物的情意。",
          "古代诗歌中常有“托物起兴”的写法，《关雎》就是非常典型的一例。雎鸠的形象为全篇定下了温和、清润、带有和鸣意味的底色，所以它既是自然物，也是诗的情绪开端。"
        ],
        image: {
          src: "https://wiki.biodiversity.cern.ac.cn/images/thumb/2/2e/%E5%A4%A7%E7%AF%A9%E5%AD%90-%E9%B9%97-7.jpg/800px-%E5%A4%A7%E7%AF%A9%E5%AD%90-%E9%B9%97-7.jpg",
          alt: "鱼鹰照片",
          caption: "近水停栖的鱼鹰",
          credit: "中国生物多样性知识平台",
          sourceUrl: "https://wiki.biodiversity.cern.ac.cn/index.php/%E9%B9%97",
          placeholderSrc: "/interpretation/jujiu.svg"
        }
      },
      {
        id: "xingcai",
        label: "荇菜",
        category: "flora",
        summary: "荇菜一般对应今天所说的荇菜属水生植物，常见解释会把它落实到莕菜、黄花莕菜这一类浮叶草本。",
        facts: [
          { label: "现代参照", value: "黄花莕菜一类浮叶植物" },
          { label: "学名参照", value: "Nymphoides peltata" },
          { label: "生长环境", value: "池塘、缓流水域、浅水湿地" },
          { label: "识别特征", value: "叶片漂浮水面，花色多黄" }
        ],
        details: [
          "现代植物学中，荇菜常联系到 Nymphoides peltata，也就是黄花莕菜或类似的浮叶水生植物。它的叶片漂浮水面，花色鲜黄，适合生长在池塘、缓流和浅水区域。",
          "古诗里反复写“参差荇菜”，既因为它确实是可见、可采的水边植物，也因为它在视觉上能把水面、采择动作和人物心绪串联起来。",
          "从“流之”“采之”到“芼之”，诗句中的动作次第推进，荇菜因此不只是植物名，也成了情感节奏的一部分。",
          "它在诗里的作用非常特别：一方面它是现实生活里可以采择的水生植物，另一方面它又像一条反复出现的线索，让诗的动作层层递进，也让思慕之情越写越深。"
        ],
        image: {
          src: "https://bkimg.cdn.bcebos.com/pic/34fae6cd7b899e510fb31d08f8f1ce33c895d143a72b?x-bce-process=image/resize,m_lfit,w_536,limit_1/quality,Q_70",
          alt: "荇菜照片",
          caption: "开花状态的荇菜",
          credit: "百度百科",
          sourceUrl: "https://baike.baidu.com/search/word?word=%E8%8E%95%E8%8F%9C",
          placeholderSrc: "/interpretation/xingcai.svg"
        }
      }
    ],
    interpretationMentions: [
      [{ entityId: "jujiu", target: "雎鸠" }],
      [],
      [{ entityId: "xingcai", target: "荇菜" }],
      [],
      [],
      [],
      [{ entityId: "xingcai", target: "荇菜" }],
      [],
      [{ entityId: "xingcai", target: "荇菜" }],
      []
    ]
  },
  {
    id: "ge-tan",
    chapter: "国风·周南",
    title: "葛覃",
    orderLabel: "第二首",
    lines: [
      "葛之覃兮，施于中谷，维叶萋萋。",
      "黄鸟于飞，集于灌木，其鸣喈喈。",
      "葛之覃兮，施于中谷，维叶莫莫。",
      "是刈是濩，为絺为绤，服之无斁。",
      "言告师氏，言告言归。",
      "薄污我私，薄浣我衣。",
      "害浣害否，归宁父母。"
    ],
    phonetics: [
      [s("葛", "gé"), s("之", "zhī"), s("覃", "tán"), s("兮", "xī"), s("，"), s("施", "yì"), s("于", "yú"), s("中", "zhōng"), s("谷", "gǔ"), s("，"), s("维", "wéi"), s("叶", "yè"), s("萋", "qī"), s("萋", "qī"), s("。")],
      [s("黄", "huáng"), s("鸟", "niǎo"), s("于", "yú"), s("飞", "fēi"), s("，"), s("集", "jí"), s("于", "yú"), s("灌", "guàn"), s("木", "mù"), s("，"), s("其", "qí"), s("鸣", "míng"), s("喈", "jiē"), s("喈", "jiē"), s("。")],
      [s("葛", "gé"), s("之", "zhī"), s("覃", "tán"), s("兮", "xī"), s("，"), s("施", "yì"), s("于", "yú"), s("中", "zhōng"), s("谷", "gǔ"), s("，"), s("维", "wéi"), s("叶", "yè"), s("莫", "mò"), s("莫", "mò"), s("。")],
      [s("是", "shì"), s("刈", "yì"), s("是", "shì"), s("濩", "huò"), s("，"), s("为", "wéi"), s("絺", "chī"), s("为", "wéi"), s("绤", "xì"), s("，"), s("服", "fú"), s("之", "zhī"), s("无", "wú"), s("斁", "yì"), s("。")],
      [s("言", "yán"), s("告", "gào"), s("师", "shī"), s("氏", "shì"), s("，"), s("言", "yán"), s("告", "gào"), s("言", "yán"), s("归", "guī"), s("。")],
      [s("薄", "bó"), s("污", "wū"), s("我", "wǒ"), s("私", "sī"), s("，"), s("薄", "bó"), s("浣", "huàn"), s("我", "wǒ"), s("衣", "yī"), s("。")],
      [s("害", "hé"), s("浣", "huàn"), s("害", "hé"), s("否", "fǒu"), s("，"), s("归", "guī"), s("宁", "níng"), s("父", "fù"), s("母", "mǔ"), s("。")]
    ],
    annotationTargets: [
      ["葛之覃兮", "施于中谷", "维叶萋萋"],
      ["黄鸟", "灌木", "喈喈"],
      ["维叶莫莫"],
      ["是刈是濩", "为絺为绤", "服之无斁"],
      ["师氏", "言归"],
      ["薄污", "我私", "浣"],
      ["害浣害否", "归宁"]
    ],
    annotations: [
      [
        "葛之覃兮，覃为延长，言葛蔓绵延滋生。",
        "施于中谷，即蔓生于谷中。",
        "维叶萋萋，萋萋为茂盛之貌，写葛叶繁密可采。"
      ],
      [
        "黄鸟，黄鹂一类之鸟。",
        "灌木，丛生之木。",
        "喈喈，鸟鸣和畅之声，写景物明丽而时气和悦。"
      ],
      ["维叶莫莫，莫莫与茂茂义近，亦言叶之繁密。"],
      [
        "是刈是濩，刈为割取，濩为煮治葛麻，使其可绩。",
        "为絺为绤，絺为细葛布，绤为粗葛布。",
        "服之无斁，斁为厌，言衣成而服之不厌。"
      ],
      [
        "师氏，古代教女子礼法之人。",
        "言归，谓将归宁省亲，故先告于师氏。"
      ],
      [
        "薄污，薄为语辞，污即搓洗。",
        "我私，贴身小衣。",
        "浣，洗也，言归家之前先自浣濯衣服。"
      ],
      [
        "害浣害否，犹言何者当洗，何者可止。",
        "归宁，出嫁女子还家省视父母。"
      ]
    ],
    translation: [
      "葛藤长又长，山沟里延伸，叶儿密密层层。",
      "黄莺飞成群，聚集在灌木丛中，叽叽叽叽叫不停。",
      "葛藤长又长，山沟里延伸，叶儿密密层层。",
      "割啊煮啊忙不停，织成粗布和细布，穿上了它多舒服。",
      "我向女师告个假，要回娘家。",
      "脏了的内衣搓一搓，脏了的外衣涮一涮。",
      "哪件该洗哪件不该洗？急着要见爹妈。"
    ],
    interpretationEntities: [
      {
        id: "ge",
        label: "葛",
        category: "flora",
        summary: "葛通常对应豆科葛属植物，现代常写作 Pueraria montana 或相关变种，是一种蔓生能力很强的藤本。",
        facts: [
          { label: "植物类型", value: "豆科葛属藤本植物" },
          { label: "学名参照", value: "Pueraria montana" },
          { label: "用途", value: "食用、药用、取纤维织布" },
          { label: "形态特征", value: "攀援迅速、三出复叶、根部肥厚" }
        ],
        details: [
          "葛的茎蔓可攀援、可匍匐，生长迅速，叶片通常为三出复叶，根部肥厚，在东亚地区长期被食用、药用，也可取纤维。",
          "《葛覃》写葛藤在山谷延伸，又写把它割取、煮治、织布，说明诗里看到的不是抽象草木，而是现实生活中真正可用的植物资源。",
          "在先秦生活世界里，葛的重要性并不局限于“可看”，它还是可以进入日常生产的植物材料，因此诗里才会很自然地从“葛藤长又长”写到“为絺为绤”。",
          "也正因为它兼有山野景观与家用劳作两重属性，《葛覃》才能把自然生长、纺织制作和归宁准备写得那么连贯，读起来既像风景，也像生活。"
        ],
        image: {
          src: "https://bkimg.cdn.bcebos.com/pic/962bd40735fae6cd7679511e08b30f2443a70ffb?x-bce-process=image/resize,m_lfit,w_536,limit_1/quality,Q_70",
          alt: "葛藤照片",
          caption: "攀援生长的葛藤",
          credit: "百度百科",
          sourceUrl: "https://baike.baidu.com/item/%E8%91%9B/2808384",
          placeholderSrc: "/interpretation/gevine.svg"
        }
      },
      {
        id: "huangniao",
        label: "黄鸟",
        category: "fauna",
        summary: "古诗里的“黄鸟”并不总能严格对应单一现代物种，常见解释会把它理解为黄莺、黄鹂一类黄色鸣禽。",
        facts: [
          { label: "现代参照", value: "常借作黄鹂、黄莺一类鸣禽" },
          { label: "配图参照", value: "黑枕黄鹂 Oriolus chinensis" },
          { label: "常见环境", value: "林缘、树冠、村落近树地带" },
          { label: "显著特征", value: "羽色鲜黄、鸣声清亮、活动灵巧" }
        ],
        details: [
          "为了帮助阅读者建立更具体的现实联想，本页配图采用黑枕黄鹂（Oriolus chinensis）这一类形象接近、也常被中文世界联系到“黄鸟”意象的鸟类。",
          "黑枕黄鹂体羽鲜黄，头后有明显黑色斑纹，鸣声清亮，在树冠与林缘环境中较常见，视觉和听觉特征都很鲜明。",
          "古诗中的“黄鸟”往往带有泛称性质，所以解释时更重要的不是机械对应某一种鸟，而是把它理解成一类鲜明、活跃、会鸣唱的黄色鸟类意象。",
          "《葛覃》把黄鸟放在葛藤与灌木之间来写，使整幅画面从静态草木过渡到动态鸣禽，春日气息也因此更突出，也让山野环境显得更鲜活。"
        ],
        image: {
          src: "https://yllhj.beijing.gov.cn/ztxx/anz/hn/xhn/201804/W020190827640001950965.jpg",
          alt: "黄鸟照片",
          caption: "常被联系到“黄鸟”意象的黑枕黄鹂",
          credit: "北京市园林绿化局",
          sourceUrl: "https://yllhj.beijing.gov.cn/ztxx/anz/hn/xhn/201804/t20180403_117083.shtml",
          placeholderSrc: "/interpretation/huangniao.svg"
        }
      }
    ],
    interpretationMentions: [
      [{ entityId: "ge", target: "葛" }],
      [{ entityId: "huangniao", target: "黄鸟" }],
      [{ entityId: "ge", target: "葛" }],
      [],
      [],
      [],
      []
    ]
  },
  {
    id: "juan-er",
    chapter: "国风·周南",
    title: "卷耳",
    orderLabel: "第三首",
    lines: [
      "采采卷耳，不盈顷筐。",
      "嗟我怀人，寘彼周行。",
      "陟彼崔嵬，我马虺隤。",
      "我姑酌彼金罍，维以不永怀。",
      "陟彼高冈，我马玄黄。",
      "我姑酌彼兕觥，维以不永伤。",
      "陟彼砠矣，我马瘏矣，我仆痡矣，云何吁矣。"
    ],
    phonetics: [
      [s("采", "cǎi"), s("采", "cǎi"), s("卷", "juǎn"), s("耳", "ěr"), s("，"), s("不", "bù"), s("盈", "yíng"), s("顷", "qǐng"), s("筐", "kuāng"), s("。")],
      [s("嗟", "jiē"), s("我", "wǒ"), s("怀", "huái"), s("人", "rén"), s("，"), s("寘", "zhì"), s("彼", "bǐ"), s("周", "zhōu"), s("行", "háng"), s("。")],
      [s("陟", "zhì"), s("彼", "bǐ"), s("崔", "cuī"), s("嵬", "wéi"), s("，"), s("我", "wǒ"), s("马", "mǎ"), s("虺", "huǐ"), s("隤", "tuí"), s("。")],
      [s("我", "wǒ"), s("姑", "gū"), s("酌", "zhuó"), s("彼", "bǐ"), s("金", "jīn"), s("罍", "léi"), s("，"), s("维", "wéi"), s("以", "yǐ"), s("不", "bù"), s("永", "yǒng"), s("怀", "huái"), s("。")],
      [s("陟", "zhì"), s("彼", "bǐ"), s("高", "gāo"), s("冈", "gāng"), s("，"), s("我", "wǒ"), s("马", "mǎ"), s("玄", "xuán"), s("黄", "huáng"), s("。")],
      [s("我", "wǒ"), s("姑", "gū"), s("酌", "zhuó"), s("彼", "bǐ"), s("兕", "sì"), s("觥", "gōng"), s("，"), s("维", "wéi"), s("以", "yǐ"), s("不", "bù"), s("永", "yǒng"), s("伤", "shāng"), s("。")],
      [s("陟", "zhì"), s("彼", "bǐ"), s("砠", "jū"), s("矣", "yǐ"), s("，"), s("我", "wǒ"), s("马", "mǎ"), s("瘏", "tú"), s("矣", "yǐ"), s("，"), s("我", "wǒ"), s("仆", "pú"), s("痡", "pū"), s("矣", "yǐ"), s("，"), s("云", "yún"), s("何", "hé"), s("吁", "xū"), s("矣", "yǐ"), s("。")]
    ],
    annotationTargets: [
      ["卷耳", "顷筐"],
      ["怀人", "寘彼周行"],
      ["崔嵬", "虺隤"],
      ["金罍", "永怀"],
      ["高冈", "玄黄"],
      ["兕觥", "永伤"],
      ["砠", "瘏", "痡", "吁"]
    ],
    annotations: [
      [
        "卷耳，草名，嫩苗可食，亦可药用。",
        "顷筐，斜口浅筐，前高后低，故虽采而未易盈满。"
      ],
      [
        "怀人，思念远行之人。",
        "寘彼周行，寘为放置，周行为大道，言因思念而将采物搁置道旁。"
      ],
      [
        "崔嵬，山高而险。",
        "虺隤，马疲病不能登高之貌。"
      ],
      [
        "金罍，饰金之酒器。",
        "永怀，长怀不已，言姑借饮酒以宽其思。"
      ],
      [
        "高冈，高山之脊。",
        "玄黄，马病而毛色失常，亦状疲顿眼昏。"
      ],
      [
        "兕觥，以兕角制成之酒器。",
        "永伤，长久伤感，言借饮酒以自解其忧。"
      ],
      [
        "砠，有土石山。",
        "瘏，马劳病也。",
        "痡，人疲极不能行。",
        "吁，忧叹之声。"
      ]
    ],
    translation: [
      "采呀采呀采卷耳，卷耳装不满浅筐。",
      "一心思念出门人，搁下浅筐大道旁。",
      "登上高高的峻岭，我的马儿腿发软。",
      "且把壶酒来斟满，喝上一杯心稍安。",
      "登上高高的山冈，我的马儿眼花昏。",
      "且把壶酒来斟满，宽慰自己不忧伤。",
      "登上高高的石山，我的马儿要趴下，我的仆人快累垮，这份忧伤何时了啊！"
    ],
    interpretationEntities: [
      {
        id: "juaner-herb",
        label: "卷耳",
        category: "flora",
        summary: "卷耳是古诗中常见的草本植物名，嫩苗可以食用，也可入药，因此它既是山野中的实物，也是诗里最容易触手可及的日常之物。",
        facts: [
          { label: "植物类型", value: "一年生草本" },
          { label: "常见用途", value: "嫩苗可食，果实和全草可药用" },
          { label: "常见环境", value: "原野、路旁、荒地、田边" }
        ],
        details: [
          "《卷耳》一开篇就写采卷耳，这不是远景，而是最贴近日常生活的手边小事。正因为卷耳是随手可采的草木，后面“搁下浅筐”的动作才显得格外自然。",
          "在诗里，卷耳并不只是植物名。它还承担了一个很重要的作用：把思念从劳作里突然牵出来。原本是采摘，忽然变成怀人，整首诗就从这一瞬间转了方向。",
          "所以卷耳的意义并不在于多么珍奇，而在于它足够寻常。越是寻常之物，越能照出人心思念来得突然、来得真切。"
        ]
      }
    ],
    interpretationMentions: [
      [{ entityId: "juaner-herb", target: "卷耳" }],
      [],
      [],
      [],
      [],
      [],
      []
    ]
  },
  {
    id: "jiu-mu",
    chapter: "国风·周南",
    title: "樛木",
    orderLabel: "第四首",
    lines: [
      "南有樛木，葛藟累之。",
      "乐只君子，福履绥之。",
      "南有樛木，葛藟荒之。",
      "乐只君子，福履将之。",
      "南有樛木，葛藟萦之。",
      "乐只君子，福履成之。"
    ],
    phonetics: [
      [s("南", "nán"), s("有", "yǒu"), s("樛", "jiū"), s("木", "mù"), s("，"), s("葛", "gé"), s("藟", "lěi"), s("累", "léi"), s("之", "zhī"), s("。")],
      [s("乐", "lè"), s("只", "zhǐ"), s("君", "jūn"), s("子", "zǐ"), s("，"), s("福", "fú"), s("履", "lǚ"), s("绥", "suí"), s("之", "zhī"), s("。")],
      [s("南", "nán"), s("有", "yǒu"), s("樛", "jiū"), s("木", "mù"), s("，"), s("葛", "gé"), s("藟", "lěi"), s("荒", "huāng"), s("之", "zhī"), s("。")],
      [s("乐", "lè"), s("只", "zhǐ"), s("君", "jūn"), s("子", "zǐ"), s("，"), s("福", "fú"), s("履", "lǚ"), s("将", "jiāng"), s("之", "zhī"), s("。")],
      [s("南", "nán"), s("有", "yǒu"), s("樛", "jiū"), s("木", "mù"), s("，"), s("葛", "gé"), s("藟", "lěi"), s("萦", "yíng"), s("之", "zhī"), s("。")],
      [s("乐", "lè"), s("只", "zhǐ"), s("君", "jūn"), s("子", "zǐ"), s("，"), s("福", "fú"), s("履", "lǚ"), s("成", "chéng"), s("之", "zhī"), s("。")]
    ],
    annotationTargets: [
      ["樛木", "葛藟", "累之"],
      ["乐只", "福履", "绥之"],
      ["荒之"],
      ["将之"],
      ["萦之"],
      ["成之"]
    ],
    annotations: [
      [
        "樛木，下曲之木，枝干低垂。",
        "葛藟，蔓生藤类植物。",
        "累之，缠绕依附之貌。"
      ],
      [
        "乐只，犹乐哉，赞美之辞。",
        "福履，犹言福禄。",
        "绥之，安之。"
      ],
      ["荒之，掩覆之貌。"],
      ["将之，扶持之意。"],
      ["萦之，回旋缠绕之貌。"],
      ["成之，成就之意。"]
    ],
    translation: [
      "南山有棵弯腰树，野葛到来缠住它。",
      "有这快乐的君子，幸福到来安定他。",
      "南山有棵弯腰树，野葛到来掩盖它。",
      "有这快乐的君子，幸福到来扶助他。",
      "南山有棵弯腰树，野葛到来萦绕它。",
      "有这快乐的君子，幸福到来成就他。"
    ],
    interpretationEntities: [
      {
        id: "gelei-vine",
        label: "葛藟",
        category: "flora",
        summary: "葛藟是古诗里常见的藤蔓植物名，重点不在它究竟精确对应哪一种现代植物，而在它能攀援、缠绕、覆盖树木的形态。",
        facts: [
          { label: "植物形态", value: "蔓生藤本" },
          { label: "主要特征", value: "攀援、缠绕、覆盖他物而生" },
          { label: "诗中作用", value: "借藤缠木起兴，写祝福与依附之意" }
        ],
        details: [
          "《樛木》反复写葛藟与樛木，相当于把一幅藤缠低树的画面来回铺展。读者首先看见的是植物形态，随后才慢慢读出其中寄托的祝愿。",
          "这类藤蔓植物最显眼的地方，就是它的攀援性。它不独立高举，而是借着别的树木延伸开去，因此很容易被古人拿来写依附、相亲与和合。",
          "《樛木》全诗气息温和，没有激烈情绪，葛藟的缠绕反而让诗的祝福显得柔韧、绵长。"
        ]
      }
    ],
    interpretationMentions: [
      [{ entityId: "gelei-vine", target: "葛藟" }],
      [],
      [{ entityId: "gelei-vine", target: "葛藟" }],
      [],
      [{ entityId: "gelei-vine", target: "葛藟" }],
      []
    ]
  },
  {
    id: "zhong-si",
    chapter: "国风·周南",
    title: "螽斯",
    orderLabel: "第五首",
    lines: [
      "螽斯羽，诜诜兮。",
      "宜尔子孙，振振兮。",
      "螽斯羽，薨薨兮。",
      "宜尔子孙，绳绳兮。",
      "螽斯羽，揖揖兮。",
      "宜尔子孙，蛰蛰兮。"
    ],
    phonetics: [
      [s("螽", "zhōng"), s("斯", "sī"), s("羽", "yǔ"), s("，"), s("诜", "shēn"), s("诜", "shēn"), s("兮", "xī"), s("。")],
      [s("宜", "yí"), s("尔", "ěr"), s("子", "zǐ"), s("孙", "sūn"), s("，"), s("振", "zhēn"), s("振", "zhēn"), s("兮", "xī"), s("。")],
      [s("螽", "zhōng"), s("斯", "sī"), s("羽", "yǔ"), s("，"), s("薨", "hōng"), s("薨", "hōng"), s("兮", "xī"), s("。")],
      [s("宜", "yí"), s("尔", "ěr"), s("子", "zǐ"), s("孙", "sūn"), s("，"), s("绳", "shéng"), s("绳", "shéng"), s("兮", "xī"), s("。")],
      [s("螽", "zhōng"), s("斯", "sī"), s("羽", "yǔ"), s("，"), s("揖", "jí"), s("揖", "jí"), s("兮", "xī"), s("。")],
      [s("宜", "yí"), s("尔", "ěr"), s("子", "zǐ"), s("孙", "sūn"), s("，"), s("蛰", "zhé"), s("蛰", "zhé"), s("兮", "xī"), s("。")]
    ],
    annotationTargets: [
      ["螽斯", "诜诜"],
      ["宜尔", "振振"],
      ["薨薨"],
      ["绳绳"],
      ["揖揖"],
      ["蛰蛰"]
    ],
    annotations: [
      [
        "螽斯，蝗类昆虫，能繁生。",
        "诜诜，和集之声。"
      ],
      [
        "宜尔，祝愿之辞。",
        "振振，众盛貌。"
      ],
      ["薨薨，众多之声。"],
      ["绳绳，连绵不绝之貌。"],
      ["揖揖，会聚之貌。"],
      ["蛰蛰，和集而多之貌。"]
    ],
    translation: [
      "螽儿的翅膀，发出沙沙响。",
      "应该您的子孙，多得无可量。",
      "螽儿的翅膀，飞得嗡嗡响。",
      "应该您的子孙，相继无可量。",
      "螽儿的羽翼，发出响唧唧。",
      "应该你的子孙，多得称密集。"
    ],
    interpretationEntities: [
      {
        id: "zhongsi-insect",
        label: "螽斯",
        category: "fauna",
        summary: "螽斯是古人常见的一类鸣虫形象，因繁生而多、群聚成声，常被用来引出对子孙繁衍的祝愿。",
        facts: [
          { label: "动物类型", value: "古人归入蝗类的鸣虫" },
          { label: "显著印象", value: "数量繁多、群飞群鸣" },
          { label: "诗中作用", value: "借虫之繁衍兴起多子多孙之祝" }
        ],
        details: [
          "《螽斯》并不是要细写一种昆虫的生活史，它抓住的是古人最容易感受到的印象：翅声密集、数量繁盛、聚而不绝。",
          "正因为这种虫类给人的直观感受就是“多”，所以诗里才顺势把祝愿落到子孙繁衍上。前半写虫声，后半写祝词，结构非常简净。",
          "从阅读感受来说，《螽斯》像一声接一声的小小祝祷，明快、热闹，而且没有一点沉重气。"
        ]
      }
    ],
    interpretationMentions: [
      [{ entityId: "zhongsi-insect", target: "螽斯" }],
      [],
      [{ entityId: "zhongsi-insect", target: "螽斯" }],
      [],
      [{ entityId: "zhongsi-insect", target: "螽斯" }],
      []
    ]
  },
  {
    id: "tao-yao",
    chapter: "国风·周南",
    title: "桃夭",
    orderLabel: "第六首",
    lines: [
      "桃之夭夭，灼灼其华。",
      "之子于归，宜其室家。",
      "桃之夭夭，有蕡其实。",
      "之子于归，宜其家室。",
      "桃之夭夭，其叶蓁蓁。",
      "之子于归，宜其家人。"
    ],
    phonetics: [
      [s("桃", "táo"), s("之", "zhī"), s("夭", "yāo"), s("夭", "yāo"), s("，"), s("灼", "zhuó"), s("灼", "zhuó"), s("其", "qí"), s("华", "huá"), s("。")],
      [s("之", "zhī"), s("子", "zǐ"), s("于", "yú"), s("归", "guī"), s("，"), s("宜", "yí"), s("其", "qí"), s("室", "shì"), s("家", "jiā"), s("。")],
      [s("桃", "táo"), s("之", "zhī"), s("夭", "yāo"), s("夭", "yāo"), s("，"), s("有", "yǒu"), s("蕡", "fén"), s("其", "qí"), s("实", "shí"), s("。")],
      [s("之", "zhī"), s("子", "zǐ"), s("于", "yú"), s("归", "guī"), s("，"), s("宜", "yí"), s("其", "qí"), s("家", "jiā"), s("室", "shì"), s("。")],
      [s("桃", "táo"), s("之", "zhī"), s("夭", "yāo"), s("夭", "yāo"), s("，"), s("其", "qí"), s("叶", "yè"), s("蓁", "zhēn"), s("蓁", "zhēn"), s("。")],
      [s("之", "zhī"), s("子", "zǐ"), s("于", "yú"), s("归", "guī"), s("，"), s("宜", "yí"), s("其", "qí"), s("家", "jiā"), s("人", "rén"), s("。")]
    ],
    annotationTargets: [
      ["夭夭", "灼灼", "华"],
      ["于归", "室家"],
      ["有蕡", "实"],
      ["家室"],
      ["蓁蓁"],
      ["家人"]
    ],
    annotations: [
      [
        "夭夭，言桃树少壮而生机盛。",
        "灼灼，花色鲜明之貌。",
        "华，即花。"
      ],
      [
        "于归，女子出嫁谓之归。",
        "室家，夫妇所成之家室。"
      ],
      [
        "有蕡，果实大而繁盛之貌。",
        "实，言桃实已成。"
      ],
      ["家室，与上章室家互文，皆言婚后家庭和顺。"],
      ["蓁蓁，叶盛貌。"],
      ["家人，言一家上下皆得其宜。"]
    ],
    translation: [
      "桃树年轻枝正好，花开红红开得妙。",
      "这个姑娘来出嫁，适宜恰好成了家。",
      "桃树年轻枝正好，结的果儿大得妙。",
      "这个姑娘来出嫁，适宜恰好成一家。",
      "桃树年轻长得好，叶儿茂密密得妙。",
      "这个姑娘来出嫁，适宜一家人都好。"
    ],
    interpretationEntities: [
      {
        id: "tao-tree",
        label: "桃",
        category: "flora",
        summary: "桃树在中国古典诗歌里常兼具春天、青春与婚嫁的意味。《桃夭》借桃花、桃实、桃叶的次第生长，写女子出嫁正当其时。",
        facts: [
          { label: "植物类型", value: "落叶小乔木" },
          { label: "常见象征", value: "青春、春日、婚嫁吉祥" },
          { label: "诗中作用", value: "以桃树盛美比新嫁女子得时得所" }
        ],
        details: [
          "《桃夭》并不是单写一棵桃树，而是把桃花、桃实、桃叶三个阶段连在一起，像在铺开一整套关于生长与成家的图景。",
          "花红、果繁、叶盛，层层推进，既写出桃树的兴旺，也把女子出嫁后的生活祝愿一并带出来。",
          "因此“桃”在这首诗里既是春日景物，也是婚嫁喜气最自然的载体。"
        ]
      }
    ],
    interpretationMentions: [
      [{ entityId: "tao-tree", target: "桃" }],
      [],
      [{ entityId: "tao-tree", target: "桃" }],
      [],
      [{ entityId: "tao-tree", target: "桃" }],
      []
    ]
  },
  {
    id: "tu-ju",
    chapter: "国风·周南",
    title: "兔罝",
    orderLabel: "第七首",
    lines: [
      "肃肃兔罝，椓之丁丁。",
      "赳赳武夫，公侯干城。",
      "肃肃兔罝，施于中逵。",
      "赳赳武夫，公侯好仇。",
      "肃肃兔罝，施于中林。",
      "赳赳武夫，公侯腹心。"
    ],
    phonetics: [
      [s("肃", "sù"), s("肃", "sù"), s("兔", "tù"), s("罝", "jū"), s("，"), s("椓", "zhuó"), s("之", "zhī"), s("丁", "dīng"), s("丁", "dīng"), s("。")],
      [s("赳", "jiū"), s("赳", "jiū"), s("武", "wǔ"), s("夫", "fū"), s("，"), s("公", "gōng"), s("侯", "hóu"), s("干", "gān"), s("城", "chéng"), s("。")],
      [s("肃", "sù"), s("肃", "sù"), s("兔", "tù"), s("罝", "jū"), s("，"), s("施", "shī"), s("于", "yú"), s("中", "zhōng"), s("逵", "kuí"), s("。")],
      [s("赳", "jiū"), s("赳", "jiū"), s("武", "wǔ"), s("夫", "fū"), s("，"), s("公", "gōng"), s("侯", "hóu"), s("好", "hǎo"), s("仇", "qiú"), s("。")],
      [s("肃", "sù"), s("肃", "sù"), s("兔", "tù"), s("罝", "jū"), s("，"), s("施", "shī"), s("于", "yú"), s("中", "zhōng"), s("林", "lín"), s("。")],
      [s("赳", "jiū"), s("赳", "jiū"), s("武", "wǔ"), s("夫", "fū"), s("，"), s("公", "gōng"), s("侯", "hóu"), s("腹", "fù"), s("心", "xīn"), s("。")]
    ],
    annotationTargets: [
      ["兔罝", "椓之丁丁"],
      ["赳赳", "干城"],
      ["中逵"],
      ["好仇"],
      ["中林"],
      ["腹心"]
    ],
    annotations: [
      [
        "兔罝，捕兔之网。",
        "椓之丁丁，椓为敲击立桩，丁丁为声。"
      ],
      [
        "赳赳，雄健勇武貌。",
        "干城，比喻捍卫国家之屏障。"
      ],
      ["中逵，四通八达的大道。"],
      ["好仇，犹好逑，这里指得力的伴佐。"],
      ["中林，林中要地。"],
      ["腹心，比喻最亲近可信任之人。"]
    ],
    translation: [
      "严肃认真结兔网，柱子敲打响丁当。",
      "赳赳武夫真勇猛，公侯要他做屏障。",
      "严肃认真结兔网，放在大路的中央。",
      "赳赳武夫真勇猛，公侯用做好伴当。",
      "严肃认真结兔网，放在树林的中央。",
      "赳赳武夫真勇猛，公侯认做腹心样。"
    ],
    interpretationEntities: [
      {
        id: "hare",
        label: "兔",
        category: "fauna",
        summary: "《兔罝》里的“兔”并不重在写兔子的姿态，而是借捕兔设网的场景，引出对武夫干练勇武的赞美。",
        facts: [
          { label: "动物类型", value: "野兔一类小型哺乳动物" },
          { label: "诗中位置", value: "作为设网捕猎的对象出现" },
          { label: "诗中作用", value: "由设网捕兔引出武夫可用之才" }
        ],
        details: [
          "这首诗开头写兔罝，重点其实在“罝”，也就是整备、张设与待发的状态，兔只是这一劳作场景中的对象。",
          "由捕猎的严整、迅捷，诗意很快转到“赳赳武夫”身上，所以它本质上是一首赞人成材、可任屏障的诗。",
          "读《兔罝》时，最要紧的不是林中有兔，而是那种整肃而有力的气象。"
        ]
      }
    ],
    interpretationMentions: [
      [{ entityId: "hare", target: "兔" }],
      [],
      [{ entityId: "hare", target: "兔" }],
      [],
      [{ entityId: "hare", target: "兔" }],
      []
    ]
  },
  {
    id: "fu-yi-plantain",
    chapter: "国风·周南",
    title: "芣苢",
    orderLabel: "第八首",
    lines: [
      "采采芣苢，薄言采之。",
      "采采芣苢，薄言有之。",
      "采采芣苢，薄言掇之。",
      "采采芣苢，薄言捋之。",
      "采采芣苢，薄言袺之。",
      "采采芣苢，薄言襭之。"
    ],
    phonetics: [
      [s("采", "cǎi"), s("采", "cǎi"), s("芣", "fú"), s("苢", "yǐ"), s("，"), s("薄", "bó"), s("言", "yán"), s("采", "cǎi"), s("之", "zhī"), s("。")],
      [s("采", "cǎi"), s("采", "cǎi"), s("芣", "fú"), s("苢", "yǐ"), s("，"), s("薄", "bó"), s("言", "yán"), s("有", "yǒu"), s("之", "zhī"), s("。")],
      [s("采", "cǎi"), s("采", "cǎi"), s("芣", "fú"), s("苢", "yǐ"), s("，"), s("薄", "bó"), s("言", "yán"), s("掇", "duō"), s("之", "zhī"), s("。")],
      [s("采", "cǎi"), s("采", "cǎi"), s("芣", "fú"), s("苢", "yǐ"), s("，"), s("薄", "bó"), s("言", "yán"), s("捋", "lǚ"), s("之", "zhī"), s("。")],
      [s("采", "cǎi"), s("采", "cǎi"), s("芣", "fú"), s("苢", "yǐ"), s("，"), s("薄", "bó"), s("言", "yán"), s("袺", "jié"), s("之", "zhī"), s("。")],
      [s("采", "cǎi"), s("采", "cǎi"), s("芣", "fú"), s("苢", "yǐ"), s("，"), s("薄", "bó"), s("言", "yán"), s("襭", "xié"), s("之", "zhī"), s("。")]
    ],
    annotationTargets: [
      ["芣苢", "薄言"],
      ["有之"],
      ["掇之"],
      ["捋之"],
      ["袺之"],
      ["襭之"]
    ],
    annotations: [
      [
        "芣苢，车前一类草本植物，叶可食，实可药用。",
        "薄言，发语词，无实义。"
      ],
      ["有之，言得而有之。"],
      ["掇之，拾取也。"],
      ["捋之，以手顺取其子实。"],
      ["袺之，提起衣襟承物。"],
      ["襭之，翻转衣襟掖于带间以承物。"]
    ],
    translation: [
      "采呀采呀车前子，赶些快快来采它。",
      "采呀采呀车前子，赶些快快占有它。",
      "采呀采呀车前子，赶些快快拾取它。",
      "采呀采呀车前子，赶些快快捋取它。",
      "采呀采呀车前子，翻过衣襟装着它。",
      "采呀采呀车前子，插好衣襟藏着它。"
    ],
    interpretationEntities: [
      {
        id: "fu-yi-herb",
        label: "芣苢",
        category: "flora",
        summary: "芣苢常被解释为车前一类草本。它并不贵重，却可食可药，因此最适合出现在集体采摘、反复歌咏的劳动场景中。",
        facts: [
          { label: "植物参照", value: "车前草一类草本" },
          { label: "常见用途", value: "嫩叶可食，种子和全草可药用" },
          { label: "诗中作用", value: "借反复采摘动作写群歌劳动的节奏" }
        ],
        details: [
          "《芣苢》最迷人的地方，不在深意，而在节奏。几乎同样的句式一遍遍唱下去，像一群妇女在田野里此起彼和。",
          "芣苢本身是极普通的草木，但正因为普通，才适合成为民间劳作歌唱的中心。",
          "从采、拾、捋，到用衣襟承物，动作越来越具体，整首诗也越来越有现场感。"
        ]
      }
    ],
    interpretationMentions: [
      [{ entityId: "fu-yi-herb", target: "芣苢" }],
      [{ entityId: "fu-yi-herb", target: "芣苢" }],
      [{ entityId: "fu-yi-herb", target: "芣苢" }],
      [{ entityId: "fu-yi-herb", target: "芣苢" }],
      [{ entityId: "fu-yi-herb", target: "芣苢" }],
      [{ entityId: "fu-yi-herb", target: "芣苢" }]
    ]
  },
  {
    id: "han-guang",
    chapter: "国风·周南",
    title: "汉广",
    orderLabel: "第九首",
    lines: [
      "南有乔木，不可休思。",
      "汉有游女，不可求思。",
      "汉之广矣，不可泳思。",
      "江之永矣，不可方思。",
      "翘翘错薪，言刈其楚。",
      "之子于归，言秣其马。",
      "汉之广矣，不可泳思。",
      "江之永矣，不可方思。",
      "翘翘错薪，言刈其蒌。",
      "之子于归，言秣其驹。",
      "汉之广矣，不可泳思。",
      "江之永矣，不可方思。"
    ],
    phonetics: [
      [s("南", "nán"), s("有", "yǒu"), s("乔", "qiáo"), s("木", "mù"), s("，"), s("不", "bù"), s("可", "kě"), s("休", "xiū"), s("思", "sī"), s("。")],
      [s("汉", "hàn"), s("有", "yǒu"), s("游", "yóu"), s("女", "nǚ"), s("，"), s("不", "bù"), s("可", "kě"), s("求", "qiú"), s("思", "sī"), s("。")],
      [s("汉", "hàn"), s("之", "zhī"), s("广", "guǎng"), s("矣", "yǐ"), s("，"), s("不", "bù"), s("可", "kě"), s("泳", "yǒng"), s("思", "sī"), s("。")],
      [s("江", "jiāng"), s("之", "zhī"), s("永", "yǒng"), s("矣", "yǐ"), s("，"), s("不", "bù"), s("可", "kě"), s("方", "fāng"), s("思", "sī"), s("。")],
      [s("翘", "qiáo"), s("翘", "qiáo"), s("错", "cuò"), s("薪", "xīn"), s("，"), s("言", "yán"), s("刈", "yì"), s("其", "qí"), s("楚", "chǔ"), s("。")],
      [s("之", "zhī"), s("子", "zǐ"), s("于", "yú"), s("归", "guī"), s("，"), s("言", "yán"), s("秣", "mò"), s("其", "qí"), s("马", "mǎ"), s("。")],
      [s("汉", "hàn"), s("之", "zhī"), s("广", "guǎng"), s("矣", "yǐ"), s("，"), s("不", "bù"), s("可", "kě"), s("泳", "yǒng"), s("思", "sī"), s("。")],
      [s("江", "jiāng"), s("之", "zhī"), s("永", "yǒng"), s("矣", "yǐ"), s("，"), s("不", "bù"), s("可", "kě"), s("方", "fāng"), s("思", "sī"), s("。")],
      [s("翘", "qiáo"), s("翘", "qiáo"), s("错", "cuò"), s("薪", "xīn"), s("，"), s("言", "yán"), s("刈", "yì"), s("其", "qí"), s("蒌", "lóu"), s("。")],
      [s("之", "zhī"), s("子", "zǐ"), s("于", "yú"), s("归", "guī"), s("，"), s("言", "yán"), s("秣", "mò"), s("其", "qí"), s("驹", "jū"), s("。")],
      [s("汉", "hàn"), s("之", "zhī"), s("广", "guǎng"), s("矣", "yǐ"), s("，"), s("不", "bù"), s("可", "kě"), s("泳", "yǒng"), s("思", "sī"), s("。")],
      [s("江", "jiāng"), s("之", "zhī"), s("永", "yǒng"), s("矣", "yǐ"), s("，"), s("不", "bù"), s("可", "kě"), s("方", "fāng"), s("思", "sī"), s("。")]
    ],
    annotationTargets: [
      ["乔木", "休思"],
      ["游女", "求思"],
      ["汉之广矣", "泳思"],
      ["江之永矣", "方思"],
      ["错薪", "楚"],
      ["秣其马"],
      ["汉之广矣", "泳思"],
      ["江之永矣", "方思"],
      ["蒌"],
      ["秣其驹"],
      ["汉之广矣", "泳思"],
      ["江之永矣", "方思"]
    ],
    annotations: [
      ["乔木，高树也。树高而荫少，故云不可休。", "休思，休憩于其下之意。"],
      ["游女，出游之女。", "求思，求之不可得。"],
      ["汉，汉水。", "泳思，徒涉而渡曰泳，这里言不可渡。"],
      ["江，长江。", "方思，方通舫，言不可乘小舟以涉。"],
      ["错薪，错杂丛生之柴。", "楚，牡荆一类可作柴薪之木。"],
      ["秣其马，以草喂马，写设想其嫁行之事。"],
      ["汉之广矣，重言其阻隔之深。", "泳思，再申不可涉渡。"],
      ["江之永矣，重言水长路远。", "方思，再申不可凭舟近之。"],
      ["蒌，蒌蒿，可食亦可为薪。"],
      ["秣其驹，驹为小马，设想更进一步。"],
      ["汉之广矣，言阻隔如故。", "泳思，终究不可渡。"],
      ["江之永矣，言绵长无已。", "方思，仍不可就。"]
    ],
    translation: [
      "南方有棵高高树，树下少荫不可休。",
      "汉水之上有游女，女虽好游不可求。",
      "汉水太广太直流，汉水上面不可游。",
      "长江的水长又长，航行不用小船舫。",
      "高高杂草做柴好，割草首要割荆条。",
      "这个姑娘要出嫁，喂她的马为了她。",
      "汉水太广太直流，汉水之上不可游。",
      "长江之水长又长，航行不用小船舫。",
      "高高杂草做柴好，割草先要割芦蒿。",
      "这个姑娘要出嫁，喂饱马驹为了她。",
      "汉水太广太直流，汉水上面不可游。",
      "长江之水长又长，航行不用小船舫。"
    ],
    interpretationEntities: [
      {
        id: "han-river",
        label: "汉水",
        category: "place",
        summary: "汉水是长江重要支流，古诗里常用来写江汉地区的辽阔水域与阻隔之感。《汉广》一再写“汉之广矣”，正是在借水势写求之不可得。",
        facts: [
          { label: "水系位置", value: "长江最大支流之一" },
          { label: "流域范围", value: "今陕南、鄂西北至武汉一带" },
          { label: "诗中作用", value: "以大水阻隔写相思不可即" }
        ],
        details: [
          "《汉广》里最醒目的不是人物动作，而是水。汉水一出，整首诗的距离感就立住了。",
          "“广”与“永”并举，一说横阔，一说绵长，把不可接近、不可追及的感受写得非常具体。",
          "因此汉水在这首诗里既是真实江河，也是情感上的阻隔。"
        ]
      },
      {
        id: "lou-plant",
        label: "蒌",
        category: "flora",
        summary: "蒌多解释为蒌蒿一类近水草本，可食亦可为薪。它在诗里与楚并举，让想象中的采薪场景更贴近江边生活。",
        facts: [
          { label: "植物形态", value: "多年生草本" },
          { label: "常见环境", value: "多生水滨" },
          { label: "诗中作用", value: "和楚并列，增加江边采薪的实感" }
        ],
        details: [
          "《汉广》后半章用“蒌”替换“楚”，场景仍然相似，却比前面更细，也更近水边。",
          "这种小小的更换，让想象中的婚嫁准备多了一分生活纹理，反衬出求而不得的惆怅。"
        ]
      }
    ],
    interpretationMentions: [
      [],
      [{ entityId: "han-river", target: "汉" }],
      [{ entityId: "han-river", target: "汉" }],
      [],
      [],
      [],
      [{ entityId: "han-river", target: "汉" }],
      [],
      [{ entityId: "lou-plant", target: "蒌" }],
      [],
      [{ entityId: "han-river", target: "汉" }],
      []
    ]
  },
  {
    id: "ru-fen",
    chapter: "国风·周南",
    title: "汝坟",
    orderLabel: "第十首",
    lines: [
      "遵彼汝坟，伐其条枚。",
      "未见君子，惄如调饥。",
      "遵彼汝坟，伐其条肄。",
      "既见君子，不我遐弃。",
      "鲂鱼赪尾，王室如燬。",
      "虽则如燬，父母孔迩。"
    ],
    phonetics: [
      [s("遵", "zūn"), s("彼", "bǐ"), s("汝", "rǔ"), s("坟", "fén"), s("，"), s("伐", "fá"), s("其", "qí"), s("条", "tiáo"), s("枚", "méi"), s("。")],
      [s("未", "wèi"), s("见", "jiàn"), s("君", "jūn"), s("子", "zǐ"), s("，"), s("惄", "nì"), s("如", "rú"), s("调", "zhāo"), s("饥", "jī"), s("。")],
      [s("遵", "zūn"), s("彼", "bǐ"), s("汝", "rǔ"), s("坟", "fén"), s("，"), s("伐", "fá"), s("其", "qí"), s("条", "tiáo"), s("肄", "yì"), s("。")],
      [s("既", "jì"), s("见", "jiàn"), s("君", "jūn"), s("子", "zǐ"), s("，"), s("不", "bù"), s("我", "wǒ"), s("遐", "xiá"), s("弃", "qì"), s("。")],
      [s("鲂", "fáng"), s("鱼", "yú"), s("赪", "chēng"), s("尾", "wěi"), s("，"), s("王", "wáng"), s("室", "shì"), s("如", "rú"), s("燬", "huǐ"), s("。")],
      [s("虽", "suī"), s("则", "zé"), s("如", "rú"), s("燬", "huǐ"), s("，"), s("父", "fù"), s("母", "mǔ"), s("孔", "kǒng"), s("迩", "ěr"), s("。")]
    ],
    annotationTargets: [
      ["汝坟", "条枚"],
      ["惄如调饥"],
      ["条肄"],
      ["遐弃"],
      ["鲂鱼赪尾", "如燬"],
      ["孔迩"]
    ],
    annotations: [
      ["汝坟，汝水之堤。", "条枚，枝条与干材。"],
      ["惄如调饥，惄为忧思，调通朝，言如朝饥之难忍。"],
      ["条肄，初生之枝条。"],
      ["遐弃，远弃我也。"],
      ["鲂鱼赪尾，鲂鱼劳瘁则尾赤。", "如燬，如火烧，喻王事劳急。"],
      ["孔迩，甚近也，言父母尚近，不可不顾。"]
    ],
    translation: [
      "顺那汝水走上大堤岸，砍那树枝再砍树干。",
      "没有看见那位君子，如同早上没吃饭。",
      "顺那汝水上大堤，砍那新生的树枝。",
      "既然看到那君子，还好不把我抛弃。",
      "鲂鱼劳累尾巴红，王朝像火烧相同。",
      "虽则像火烧那样，父母很近要供奉。"
    ],
    interpretationEntities: [
      {
        id: "ru-river",
        label: "汝水",
        category: "place",
        summary: "汝水发源于今河南西南，东南流入淮河。诗中的“汝坟”就是汝水边的堤岸地带，是这首诗情境展开的具体地点。",
        facts: [
          { label: "地理属性", value: "淮河水系支流" },
          { label: "诗中地点", value: "汝水堤岸" },
          { label: "诗中作用", value: "提供劳作与怀人的现实空间" }
        ],
        details: [
          "《汝坟》没有把思念放在空处，而是落在“遵彼汝坟”的具体地点上。沿堤而行、伐木劳作，都是可以看得见的场景。",
          "正因为地点很实，后面的忧思和勉励才更显得不空。"
        ]
      },
      {
        id: "fang-fish",
        label: "鲂鱼",
        category: "fauna",
        summary: "鲂鱼即鳊鱼一类淡水鱼。诗中写“鲂鱼赪尾”，借鱼尾发赤来比喻劳役之苦与形势之急。",
        facts: [
          { label: "动物类型", value: "淡水鱼类" },
          { label: "常见形象", value: "体侧扁，常见于江河湖泊" },
          { label: "诗中作用", value: "借鱼之劳瘁起兴人事之艰" }
        ],
        details: [
          "《汝坟》后章忽然写到鲂鱼，不是转去写风物，而是借鱼尾发赤来比王室如火，劳役逼人。",
          "鱼的形象一出，整首诗的忧患感也一下子重了起来。"
        ]
      }
    ],
    interpretationMentions: [
      [{ entityId: "ru-river", target: "汝" }],
      [],
      [{ entityId: "ru-river", target: "汝" }],
      [],
      [{ entityId: "fang-fish", target: "鲂鱼" }],
      []
    ]
  },
  {
    id: "lin-zhi-zhi",
    chapter: "国风·周南",
    title: "麟之趾",
    orderLabel: "第十一首",
    lines: [
      "麟之趾，振振公子。",
      "于嗟麟兮！",
      "麟之定，振振公姓。",
      "于嗟麟兮！",
      "麟之角，振振公族。",
      "于嗟麟兮！"
    ],
    phonetics: [
      [s("麟", "lín"), s("之", "zhī"), s("趾", "zhǐ"), s("，"), s("振", "zhēn"), s("振", "zhēn"), s("公", "gōng"), s("子", "zǐ"), s("。")],
      [s("于", "yú"), s("嗟", "jiē"), s("麟", "lín"), s("兮", "xī"), s("！")],
      [s("麟", "lín"), s("之", "zhī"), s("定", "dìng"), s("，"), s("振", "zhēn"), s("振", "zhēn"), s("公", "gōng"), s("姓", "xìng"), s("。")],
      [s("于", "yú"), s("嗟", "jiē"), s("麟", "lín"), s("兮", "xī"), s("！")],
      [s("麟", "lín"), s("之", "zhī"), s("角", "jiǎo"), s("，"), s("振", "zhēn"), s("振", "zhēn"), s("公", "gōng"), s("族", "zú"), s("。")],
      [s("于", "yú"), s("嗟", "jiē"), s("麟", "lín"), s("兮", "xī"), s("！")]
    ],
    annotationTargets: [
      ["麟之趾", "振振"],
      ["于嗟"],
      ["定", "公姓"],
      ["于嗟"],
      ["角", "公族"],
      ["于嗟"]
    ],
    annotations: [
      ["麟，仁兽。古说不履生虫，不践生草。", "振振，仁厚诚实之貌。"],
      ["于嗟，叹美之辞。"],
      ["定，额也。", "公姓，公孙。"],
      ["于嗟，再申叹美之意。"],
      ["角，有角而不触人。", "公族，公室宗族。"],
      ["于嗟，总结赞叹。"]
    ],
    translation: [
      "不踏生物的麟脚趾，好比仁厚的公子。",
      "值得赞美的麟啊！",
      "不顶人的麟额头，好比公孙多仁厚。",
      "值得赞美的麟啊！",
      "不触人的麟头角，好比仁厚的公族。",
      "值得赞美的麟啊！"
    ],
    interpretationEntities: [
      {
        id: "lin-myth",
        label: "麟",
        category: "fauna",
        summary: "麟是中国古代最重要的瑞兽之一，传统想象里仁而不伤、生而有节，因此常被借来比喻温厚而有德的人。",
        facts: [
          { label: "文化属性", value: "古代瑞兽" },
          { label: "常见特征", value: "有角而不触，行步有度，不伤生物" },
          { label: "诗中作用", value: "借麟起兴，称美公子公姓公族之仁厚" }
        ],
        details: [
          "《麟之趾》全篇几乎都在赞美麟，其实真正要落到人身上的，是“公子”“公姓”“公族”。",
          "古人喜欢借瑞兽写人德，因为兽形可见，而德行不易见。麟越仁厚，所赞的人也就越显得可贵。",
          "这首诗短而有力，几乎像一连三声赞词。"
        ]
      }
    ],
    interpretationMentions: [
      [{ entityId: "lin-myth", target: "麟" }],
      [{ entityId: "lin-myth", target: "麟" }],
      [{ entityId: "lin-myth", target: "麟" }],
      [{ entityId: "lin-myth", target: "麟" }],
      [{ entityId: "lin-myth", target: "麟" }],
      [{ entityId: "lin-myth", target: "麟" }]
    ]
  },
  ...zhaoNanBatchPoems,
  ...zhaoNanBatchPoems2,
  ...zhaoNanBatchPoems3,
  ...beiFengBatchPoems1,
  ...beiFengBatchPoems2,
  ...beiFengBatchPoems3,
  ...beiFengBatchPoems4,
  ...beiFengBatchPoems5,
  ...yongFengBatchPoems1,
  ...yongFengBatchPoems2,
  ...weiFengBatchPoems1,
  ...weiFengBatchPoems2,
  ...wangFengBatchPoems1,
  ...zhengFengBatchPoems1,
  ...zhengFengBatchPoems2,
  ...qiFengBatchPoems1,
  ...qiFengBatchPoems2,
  ...weiTangBatchPoems1,
  ...tangFengBatchPoems1,
  ...tangQinFengBatchPoems2,
  ...qinChenFengBatchPoems3,
  ...qinChenGuiCaoFengBatchPoems4,
  ...binFengLuMingBatchPoems5,
  ...luMingBaiHuaBatchPoems6,
  ...baiHuaBatchPoems7,
  ...hongYanBatchPoems8,
  ...hongYanBatchPoems9,
  ...jieNanShanBatchPoems10,
  ...xiaoMinBatchPoems11,
  ...xiaoMinBatchPoems12,
  ...beiShanBatchPoems13,
  ...beiShanBatchPoems14,
  ...sangHuBatchPoems15,
  ...sangHuBatchPoems16,
  ...douRenShiBatchPoems17,
  ...wenWangBatchPoems18,
  ...wenWangBatchPoems19,
  ...shengMinBatchPoems20,
  ...dangBatchPoems21,
  ...dangBatchPoems22,
  ...zhouSongBatchPoems23,
  ...zhouSongBatchPoems24,
  ...zhouSongBatchPoems25,
  ...zhouSongBatchPoems26,
  ...luSongBatchPoems27,
  ...shangSongBatchPoems28
];

export function getPoemById(id: string) {
  return poems.find((poem) => poem.id === id);
}
