import type { Poem, PoemPhoneticSegment } from "@/data/poems";

function p(text: string, pinyin?: string): PoemPhoneticSegment {
  return { text, pinyin };
}

function line(text: string, pinyin: string): PoemPhoneticSegment[] {
  return [p(text, pinyin)];
}

export const luMingBaiHuaBatchPoems6: Poem[] = [
  {
    id: "chang-di",
    chapter: "小雅·鹿鸣之什",
    title: "常棣",
    orderLabel: "第一百六十四首",
    lines: ["常棣之华，鄂不韡韡。", "凡今之人，莫如兄弟。", "死丧之威，兄弟孔怀。", "兄弟阋于墙，外御其务。", "妻子好合，如鼓瑟琴。", "兄弟既翕，和乐且湛。"],
    phonetics: [line("常棣之华，鄂不韡韡。", "chang di zhi hua, e bu wei wei."), line("凡今之人，莫如兄弟。", "fan jin zhi ren, mo ru xiong di."), line("死丧之威，兄弟孔怀。", "si sang zhi wei, xiong di kong huai."), line("兄弟阋于墙，外御其务。", "xiong di xi yu qiang, wai yu qi wu."), line("妻子好合，如鼓瑟琴。", "qi zi hao he, ru gu se qin."), line("兄弟既翕，和乐且湛。", "xiong di ji xi, he le qie zhan.")],
    annotationTargets: [["常棣", "鄂不韡韡"], ["莫如兄弟"], ["孔怀"], ["阋于墙", "外御其务"], ["鼓瑟琴"], ["既翕", "湛"]],
    annotations: [["常棣，木名。鄂不韡韡，言花萼鲜明盛美。"], ["言至亲之中，没有谁比兄弟更可依靠。"], ["孔怀，深相思念。"], ["阋于墙，兄弟在家争执。御其务，务通侮，言对外共御欺侮。"], ["以琴瑟和鸣喻夫妇情好。"], ["翕，和合。湛，安乐深厚。"]],
    translation: ["棠棣花儿开得盛，花萼鲜明光彩生。", "如今世上的所有人，没有谁比兄弟更亲。", "一旦遭逢死亡忧患，兄弟之间最是相念。", "兄弟即使在家争吵，对外却能一同抵御侮辱。", "夫妻若能情意和合，就像琴瑟相和一样。", "兄弟若能重新和睦，快乐就会更加深长。"]
  },
  {
    id: "fa-mu",
    chapter: "小雅·鹿鸣之什",
    title: "伐木",
    orderLabel: "第一百六十五首",
    lines: ["伐木丁丁，鸟鸣嘤嘤。", "出自幽谷，迁于乔木。", "嘤其鸣矣，求其友声。", "既有肥羜，以速诸父。", "有酒湑我，无酒酤我。", "迨我暇矣，饮此湑矣。"],
    phonetics: [line("伐木丁丁，鸟鸣嘤嘤。", "fa mu zheng zheng, niao ming ying ying."), line("出自幽谷，迁于乔木。", "chu zi you gu, qian yu qiao mu."), line("嘤其鸣矣，求其友声。", "ying qi ming yi, qiu qi you sheng."), line("既有肥羜，以速诸父。", "ji you fei zhu, yi su zhu fu."), line("有酒湑我，无酒酤我。", "you jiu xu wo, wu jiu gu wo."), line("迨我暇矣，饮此湑矣。", "dai wo xia yi, yin ci xu yi.")],
    annotationTargets: [["丁丁", "嘤嘤"], ["幽谷", "乔木"], ["友声"], ["羜", "速诸父"], ["湑我", "酤我"], ["迨我暇矣"]],
    annotations: [["丁丁，伐木声。嘤嘤，鸟相应和之声。"], ["幽谷，深谷。乔木，高树。"], ["友声，朋友相和之声。"], ["羜，小羊。速，招请。诸父，同姓长辈。"], ["湑，滤酒而饮。酤，买酒。言有无皆尽意。"], ["迨，及。暇，闲暇。"]],
    translation: ["砍树声丁丁作响，群鸟嘤嘤相鸣。", "鸟儿从幽深山谷飞出，迁到高高乔木上。", "它们这样啼叫，是在寻求同伴的应和。", "又备下肥美的小羊，特地请来诸父长辈。", "有酒就滤来给我饮，无酒也肯为我去买。", "等到我得了闲暇，再来共饮这杯清酒。"]
  },
  {
    id: "tian-bao",
    chapter: "小雅·鹿鸣之什",
    title: "天保",
    orderLabel: "第一百六十六首",
    lines: ["天保定尔，亦孔之固。", "俾尔单厚，何福不除。", "降尔遐福，维日不足。", "如山如阜，如冈如陵。", "如月之恒，如日之升。", "如松柏之茂，无不尔或承。"],
    phonetics: [line("天保定尔，亦孔之固。", "tian bao ding er, yi kong zhi gu."), line("俾尔单厚，何福不除。", "bi er dan hou, he fu bu chu."), line("降尔遐福，维日不足。", "jiang er xia fu, wei ri bu zu."), line("如山如阜，如冈如陵。", "ru shan ru fu, ru gang ru ling."), line("如月之恒，如日之升。", "ru yue zhi heng, ru ri zhi sheng."), line("如松柏之茂，无不尔或承。", "ru song bai zhi mao, wu bu er huo cheng.")],
    annotationTargets: [["天保定尔"], ["单厚", "除"], ["遐福"], ["如山如阜"], ["月之恒", "日之升"], ["尔或承"]],
    annotations: [["天保定尔，谓上天保佑安定于尔。"], ["单厚，丰厚。除，降与。"], ["遐福，长远的大福。"], ["阜、冈、陵，皆喻基业稳固。"], ["恒，月渐盈。升，日向上而明。"], ["或承，言子孙世世继承。"]],
    translation: ["上天保佑安定你，这福分也极其牢固。", "使你厚实丰盈，哪一种福气不会降临。", "又降下长远的大福，多得一天都装不完。", "愿你的基业像高山大阜一样稳固。", "愿你像月亮渐满，像太阳日日高升。", "愿你如松柏繁茂，子孙代代都承续不绝。"]
  },
  {
    id: "cai-wei",
    chapter: "小雅·鹿鸣之什",
    title: "采薇",
    orderLabel: "第一百六十七首",
    lines: ["采薇采薇，薇亦作止。", "曰归曰归，岁亦莫止。", "靡室靡家，猃狁之故。", "昔我往矣，杨柳依依。", "今我来思，雨雪霏霏。", "我心伤悲，莫知我哀。"],
    phonetics: [line("采薇采薇，薇亦作止。", "cai wei cai wei, wei yi zuo zhi."), line("曰归曰归，岁亦莫止。", "yue gui yue gui, sui yi mu zhi."), line("靡室靡家，猃狁之故。", "mi shi mi jia, xian yun zhi gu."), line("昔我往矣，杨柳依依。", "xi wo wang yi, yang liu yi yi."), line("今我来思，雨雪霏霏。", "jin wo lai si, yu xue fei fei."), line("我心伤悲，莫知我哀。", "wo xin shang bei, mo zhi wo ai.")],
    annotationTargets: [["薇亦作止"], ["岁亦莫止"], ["猃狁"], ["依依"], ["霏霏"], ["莫知我哀"]],
    annotations: [["薇，野菜名。作，始生。"], ["莫，暮，言岁已将晚。"], ["猃狁，古北方部族名。"], ["依依，柳丝柔长摇曳貌。"], ["霏霏，雪盛貌。"], ["言哀痛深切，无人能真正知晓。"]],
    translation: ["采呀采呀采薇菜，薇菜也才刚刚冒出地面。", "说回去啊说回去，可一年又快到了岁晚。", "没有安稳的家室，都是因为猃狁来犯。", "想当初我出发的时候，杨柳轻柔依依。", "如今我归来的路上，却是大雪纷纷飘落。", "我心里满是伤悲，却没有人真正知道我的哀痛。"],
    interpretationEntities: [
      {
        id: "wei-plant",
        label: "薇",
        category: "flora",
        summary: "《采薇》中的“薇”通常指可以采食的野生豆科植物，既是野菜，也是征人岁月流逝的标记。",
        facts: [{ label: "常见对应", value: "野豌豆属植物" }, { label: "诗中作用", value: "兼写时序推移与戍卒生活" }],
        details: ["薇在诗里不是单纯的植物名。它从初生写到渐老，正好把戍边时日一步步拉长。", "它既可采食，又带着山野气息，所以一写“采薇”，征人的饥寒与岁月便都出来了。"],
        image: { src: "https://bkimg.cdn.bcebos.com/pic/7dd98d1001e9390183ecf7fc1bec54e737d1966a?x-bce-process=image/resize,m_lfit,w_536,limit_1/quality,Q_70", alt: "薇菜相关植物图片", caption: "山野间可采食的薇类植物", credit: "百度百科", sourceUrl: "https://baike.baidu.com/item/%E8%96%87/989881", placeholderSrc: "/interpretation/default-plant.svg" }
      }
    ],
    interpretationMentions: [[{ entityId: "wei-plant", target: "薇" }], [], [], [], [], []]
  },
  {
    id: "chu-che",
    chapter: "小雅·鹿鸣之什",
    title: "出车",
    orderLabel: "第一百六十八首",
    lines: ["我出我车，于彼牧矣。", "王事多难，维其棘矣。", "王命南仲，往城于方。", "昔我往矣，黍稷方华。", "今我来思，雨雪载途。", "岂不怀归，畏此简书。"],
    phonetics: [line("我出我车，于彼牧矣。", "wo chu wo che, yu bi mu yi."), line("王事多难，维其棘矣。", "wang shi duo nan, wei qi ji yi."), line("王命南仲，往城于方。", "wang ming nan zhong, wang cheng yu fang."), line("昔我往矣，黍稷方华。", "xi wo wang yi, shu ji fang hua."), line("今我来思，雨雪载途。", "jin wo lai si, yu xue zai tu."), line("岂不怀归，畏此简书。", "qi bu huai gui, wei ci jian shu.")],
    annotationTargets: [["于彼牧矣"], ["棘矣"], ["南仲", "于方"], ["黍稷方华"], ["载途"], ["简书"]],
    annotations: [["牧，近郊野地。"], ["棘，急迫。"], ["南仲，周将名。方，朔方边地。"], ["黍稷将抽穗开花。"], ["载途，满路。"], ["简书，军令文书。"]],
    translation: ["我驾起我的战车，来到那郊外牧地。", "王家的事情多有艰难，形势正是紧急的时候。", "王命南仲出征，前去朔方筑城。", "想当初我出发的时候，黍稷正开着花。", "如今我归来的路上，雨雪已经铺满道路。", "哪里会不想回家，只是畏惧这紧急的军令。"]
  }
];
