import type { Poem, PoemPhoneticSegment } from "@/data/poems";

function p(text: string, pinyin?: string): PoemPhoneticSegment {
  return { text, pinyin };
}

function line(text: string, pinyin: string): PoemPhoneticSegment[] {
  return [p(text, pinyin)];
}

export const hongYanBatchPoems8: Poem[] = [
  {
    id: "zhan-lu",
    chapter: "小雅·南有嘉鱼之什",
    title: "湛露",
    orderLabel: "第一百七十四首",
    lines: [
      "湛湛露斯，匪阳不晞。",
      "厌厌夜饮，不醉无归。",
      "湛湛露斯，在彼丰草。",
      "厌厌夜饮，在宗载考。",
      "湛湛露斯，在彼杞棘。",
      "显允君子，莫不令德。",
      "其桐其椅，其实离离。",
      "岂弟君子，莫不令仪。"
    ],
    phonetics: [
      line("湛湛露斯，匪阳不晞。", "zhan zhan lu si, fei yang bu xi."),
      line("厌厌夜饮，不醉无归。", "yan yan ye yin, bu zui wu gui."),
      line("湛湛露斯，在彼丰草。", "zhan zhan lu si, zai bi feng cao."),
      line("厌厌夜饮，在宗载考。", "yan yan ye yin, zai zong zai kao."),
      line("湛湛露斯，在彼杞棘。", "zhan zhan lu si, zai bi qi ji."),
      line("显允君子，莫不令德。", "xian yun jun zi, mo bu ling de."),
      line("其桐其椅，其实离离。", "qi tong qi yi, qi shi li li."),
      line("岂弟君子，莫不令仪。", "kai ti jun zi, mo bu ling yi.")
    ],
    annotationTargets: [
      ["湛湛露斯", "匪阳不晞"],
      ["厌厌夜饮"],
      ["丰草"],
      ["在宗载考"],
      ["杞棘"],
      ["显允", "令德"],
      ["离离"],
      ["岂弟", "令仪"]
    ],
    annotations: [
      ["湛湛，露浓貌。晞，干。言露见日而干。"],
      ["厌厌，安和欢乐貌。夜饮，燕饮至夜。"],
      ["丰草，茂草。"],
      ["宗，宗庙。考，成也，言在宗庙而成礼。"],
      ["杞棘，木名，借见露滋之厚。"],
      ["显允，光明显信。令德，美德。"],
      ["离离，果实下垂繁多貌。"],
      ["岂弟，和乐平易。令仪，美好的仪容法度。"]
    ],
    translation: [
      "浓浓的露水啊，不见太阳就不会干。",
      "和乐地夜里宴饮，不醉便不回还。",
      "浓浓的露水啊，落在那茂盛的草上。",
      "和乐地夜里宴饮，在宗庙中把礼行得圆满。",
      "浓浓的露水啊，落在那杞木和棘木上。",
      "光明显信的君子，没有谁不称赞他的美德。",
      "那桐树与椅树啊，结出的果实累累成行。",
      "和乐平易的君子，没有谁不称赞他的仪容。"
    ]
  },
  {
    id: "tong-gong",
    chapter: "小雅·南有嘉鱼之什",
    title: "彤弓",
    orderLabel: "第一百七十五首",
    lines: [
      "彤弓弨兮，受言藏之。",
      "我有嘉宾，中心贶之。",
      "钟鼓既设，一朝飨之。",
      "彤弓弨兮，受言载之。",
      "我有嘉宾，中心喜之。",
      "钟鼓既设，一朝右之。",
      "彤弓弨兮，受言櫜之。",
      "我有嘉宾，中心好之。",
      "钟鼓既设，一朝醻之。"
    ],
    phonetics: [
      line("彤弓弨兮，受言藏之。", "tong gong chao xi, shou yan cang zhi."),
      line("我有嘉宾，中心贶之。", "wo you jia bin, zhong xin kuang zhi."),
      line("钟鼓既设，一朝飨之。", "zhong gu ji she, yi zhao xiang zhi."),
      line("彤弓弨兮，受言载之。", "tong gong chao xi, shou yan zai zhi."),
      line("我有嘉宾，中心喜之。", "wo you jia bin, zhong xin xi zhi."),
      line("钟鼓既设，一朝右之。", "zhong gu ji she, yi zhao you zhi."),
      line("彤弓弨兮，受言櫜之。", "tong gong chao xi, shou yan gao zhi."),
      line("我有嘉宾，中心好之。", "wo you jia bin, zhong xin hao zhi."),
      line("钟鼓既设，一朝醻之。", "zhong gu ji she, yi zhao chou zhi.")
    ],
    annotationTargets: [
      ["彤弓弨兮"],
      ["贶之"],
      ["飨之"],
      ["载之"],
      ["喜之"],
      ["右之"],
      ["櫜之"],
      ["好之"],
      ["醻之"]
    ],
    annotations: [
      ["彤弓，朱弓。弨，弓弛貌。"],
      ["贶，赐也。"],
      ["飨，以酒食款待。"],
      ["载，陈设或安置。"],
      ["喜之，发自中心而欢喜。"],
      ["右，劝助，亲厚之意。"],
      ["櫜，藏弓于囊。"],
      ["好之，喜爱敬重。"],
      ["醻，酬饮答礼。"]
    ],
    translation: [
      "朱红的弓张弛有度，受赐之后珍重收藏。",
      "我有尊贵的嘉宾，心里真诚地想厚待他。",
      "钟鼓都已陈设停当，这一朝便设宴款待他。",
      "朱红的弓张弛有度，受赐之后郑重安放。",
      "我有尊贵的嘉宾，心里真切地喜欢他。",
      "钟鼓都已陈设停当，这一朝便尽意亲厚他。",
      "朱红的弓张弛有度，受赐之后收入弓囊。",
      "我有尊贵的嘉宾，心里真诚地敬爱他。",
      "钟鼓都已陈设停当，这一朝便与他酬答同饮。"
    ]
  },
  {
    id: "qing-qing-zhe-e",
    chapter: "小雅·南有嘉鱼之什",
    title: "菁菁者莪",
    orderLabel: "第一百七十六首",
    lines: [
      "菁菁者莪，在彼中阿。",
      "既见君子，乐且有仪。",
      "菁菁者莪，在彼中沚。",
      "既见君子，我心则喜。",
      "菁菁者莪，在彼中陵。",
      "既见君子，锡我百朋。",
      "汎汎杨舟，载沉载浮。",
      "既见君子，我心则休。"
    ],
    phonetics: [
      line("菁菁者莪，在彼中阿。", "jing jing zhe e, zai bi zhong a."),
      line("既见君子，乐且有仪。", "ji jian jun zi, le qie you yi."),
      line("菁菁者莪，在彼中沚。", "jing jing zhe e, zai bi zhong zhi."),
      line("既见君子，我心则喜。", "ji jian jun zi, wo xin ze xi."),
      line("菁菁者莪，在彼中陵。", "jing jing zhe e, zai bi zhong ling."),
      line("既见君子，锡我百朋。", "ji jian jun zi, xi wo bai peng."),
      line("汎汎杨舟，载沉载浮。", "fan fan yang zhou, zai chen zai fu."),
      line("既见君子，我心则休。", "ji jian jun zi, wo xin ze xiu.")
    ],
    annotationTargets: [
      ["菁菁者莪", "中阿"],
      ["有仪"],
      ["中沚"],
      ["则喜"],
      ["中陵"],
      ["锡我百朋"],
      ["汎汎杨舟", "载沉载浮"],
      ["则休"]
    ],
    annotations: [
      ["菁菁，草木茂盛貌。莪，莪蒿。阿，山坳。"],
      ["仪，仪容风度。"],
      ["沚，水中小洲。"],
      ["则喜，言由衷欢悦。"],
      ["中陵，丘陵之间。"],
      ["锡，同赐。朋，古货币单位。"],
      ["汎汎，浮行貌。载沉载浮，随波上下。"],
      ["休，安乐。"]
    ],
    translation: [
      "那莪蒿长得青青茂盛，生在那山坳之间。",
      "既然见到了君子，只觉得快乐而且见他风仪可亲。",
      "那莪蒿长得青青茂盛，生在那洲渚之间。",
      "既然见到了君子，我心里便生出欢喜。",
      "那莪蒿长得青青茂盛，生在那丘陵之间。",
      "既然见到了君子，仿佛得到了许多珍贵馈赠。",
      "那杨木小舟浮浮荡荡，时而下沉时而上浮。",
      "既然见到了君子，我心里便安稳下来。"
    ]
  },
  {
    id: "liu-yue",
    chapter: "小雅·南有嘉鱼之什",
    title: "六月",
    orderLabel: "第一百七十七首",
    lines: [
      "六月栖栖，戎车既饬。四牡骙骙，载是常服。",
      "𤞤狁孔炽，我是用急。王于出征，以匡王国。",
      "比物四骊，闲之维则。维此六月，既成我服。",
      "我服既成，于三十里。王于出征，以佐天子。",
      "四牡修广，其大有颙。薄伐𤞤狁，以奏肤公。",
      "有严有翼，共武之服。共武之服，以定王国。",
      "𤞤狁匪茹，整居焦获。侵镐及方，至于泾阳。",
      "织文鸟章，白斾央央。元戎十乘，以先启行。",
      "戎车既安，如轾如轩。四牡既佶，既佶且闲。",
      "薄伐𤞤狁，至于大原。文武吉甫，万邦为宪。",
      "吉甫燕喜，既多受祉。来归自镐，我行永久。",
      "饮御诸友，炰鳖脍鲤。侯谁在矣？张仲孝友。"
    ],
    phonetics: [
      line("六月栖栖，戎车既饬。四牡骙骙，载是常服。", "liu yue qi qi, rong che ji chi. si mu kui kui, zai shi chang fu."),
      line("𤞤狁孔炽，我是用急。王于出征，以匡王国。", "xian yun kong chi, wo shi yong ji. wang yu chu zheng, yi kuang wang guo."),
      line("比物四骊，闲之维则。维此六月，既成我服。", "bi wu si li, xian zhi wei ze. wei ci liu yue, ji cheng wo fu."),
      line("我服既成，于三十里。王于出征，以佐天子。", "wo fu ji cheng, yu san shi li. wang yu chu zheng, yi zuo tian zi."),
      line("四牡修广，其大有颙。薄伐𤞤狁，以奏肤公。", "si mu xiu guang, qi da you yong. bo fa xian yun, yi zou fu gong."),
      line("有严有翼，共武之服。共武之服，以定王国。", "you yan you yi, gong wu zhi fu. gong wu zhi fu, yi ding wang guo."),
      line("𤞤狁匪茹，整居焦获。侵镐及方，至于泾阳。", "xian yun fei ru, zheng ju jiao huo. qin gao ji fang, zhi yu jing yang."),
      line("织文鸟章，白斾央央。元戎十乘，以先启行。", "zhi wen niao zhang, bai pei yang yang. yuan rong shi sheng, yi xian qi xing."),
      line("戎车既安，如轾如轩。四牡既佶，既佶且闲。", "rong che ji an, ru zhi ru xuan. si mu ji ji, ji ji qie xian."),
      line("薄伐𤞤狁，至于大原。文武吉甫，万邦为宪。", "bo fa xian yun, zhi yu tai yuan. wen wu ji fu, wan bang wei xian."),
      line("吉甫燕喜，既多受祉。来归自镐，我行永久。", "ji fu yan xi, ji duo shou zhi. lai gui zi gao, wo xing yong jiu."),
      line("饮御诸友，炰鳖脍鲤。侯谁在矣？张仲孝友。", "yin yu zhu you, pao bie kuai li. hou shui zai yi? zhang zhong xiao you.")
    ],
    annotationTargets: [
      ["栖栖", "既饬"],
      ["𤞤狁孔炽"],
      ["比物四骊", "维则"],
      ["三十里"],
      ["有颙", "肤公"],
      ["有严有翼"],
      ["焦获", "泾阳"],
      ["白斾央央", "元戎十乘"],
      ["如轾如轩", "且闲"],
      ["万邦为宪"],
      ["既多受祉", "永久"],
      ["炰鳖脍鲤", "张仲孝友"]
    ],
    annotations: [
      ["栖栖，忙迫貌。饬，整备。"],
      ["𤞤狁，北方部族名。孔炽，势甚盛。"],
      ["比物，齐其色类。闲，娴习。则，法度。"],
      ["于三十里，言行军之速。"],
      ["颙，大貌。肤公，大功。"],
      ["严、翼，整肃有序貌。"],
      ["焦获、泾阳，皆地名。"],
      ["白斾，白色旗帜。元戎，大车。"],
      ["轾轩，车前后高下相宜。闲，熟习。"],
      ["宪，法则。"],
      ["祉，福。永久，行役既久。"],
      ["炰鳖脍鲤，设宴佳肴。张仲，贤臣名。孝友，孝而友爱。"]
    ],
    translation: [
      "六月里局势紧迫，战车都已整饰妥当。四匹公马高大健壮，披着惯常的戎装。",
      "猃狁之患十分炽盛，所以我们因此格外急迫。王于是发兵出征，要匡正王家之国。",
      "四匹黑骊都按规制配齐，训练得合于法度。就在这六月里，我们的军备已经完成。",
      "军备既已完备，一日能行三十里。王于是出兵征伐，用来辅佐天子。",
      "四匹公马身长体阔，气势高昂。出兵讨伐猃狁，以建立赫赫战功。",
      "军容整肃而有条理，这就是共守武备的戎装。也正靠这样的武备，国家才能安定。",
      "猃狁并不柔顺，一直盘踞在焦获。又侵犯镐京与方地，直到泾阳一带。",
      "旗帜上织着鸟文图章，白色大旗高高飘扬。十乘大车列在前面，为全军开道。",
      "战车安稳妥帖，前后高低都很合式。四匹公马已经强健，又强健而且驯熟。",
      "出兵讨伐猃狁，一直到了大原。文武兼备的吉甫，成了万邦效法的准则。",
      "吉甫凯旋燕饮欢喜，又多受福祉。从镐京归来，而我这一行也已经拖得很久。",
      "设宴招待诸位朋友，有炰鳖与鲤鱼脍。座中还有谁在？有那孝友著称的张仲。"
    ]
  },
  {
    id: "cai-qi-xiaoya",
    chapter: "小雅·南有嘉鱼之什",
    title: "采芑",
    orderLabel: "第一百七十八首",
    lines: [
      "薄言采芑，于彼新田，于此菑亩。",
      "方叔涖止，其车三千，师干之试。",
      "方叔率止，乘其四骐，四骐翼翼。",
      "路车有奭，簟茀鱼服，钩膺鞗革。",
      "薄言采芑，于彼新田，于此中乡。",
      "方叔涖止，其车三千，旂旐央央。",
      "方叔率止，约軝错衡，八鸾锵锵。",
      "服其命服，朱芾斯皇，有玱葱珩。",
      "鴥彼飞隼，其飞戾天，亦集爰止。",
      "方叔涖止，其车三千，师干之试。",
      "方叔率止，钲人伐鼓，陈师鞠旅。",
      "显允方叔，伐鼓渊渊，振旅阗阗。",
      "蠢尔蛮荆，大邦为仇。",
      "方叔元老，克壮其猷。",
      "方叔率止，执讯获丑。",
      "显允方叔，征伐玁狁，蛮荆来威。"
    ],
    phonetics: [
      line("薄言采芑，于彼新田，于此菑亩。", "bo yan cai qi, yu bi xin tian, yu ci zai mu."),
      line("方叔涖止，其车三千，师干之试。", "fang shu li zhi, qi che san qian, shi gan zhi shi."),
      line("方叔率止，乘其四骐，四骐翼翼。", "fang shu shuai zhi, cheng qi si qi, si qi yi yi."),
      line("路车有奭，簟茀鱼服，钩膺鞗革。", "lu che you shi, dian fu yu fu, gou ying tiao ge."),
      line("薄言采芑，于彼新田，于此中乡。", "bo yan cai qi, yu bi xin tian, yu ci zhong xiang."),
      line("方叔涖止，其车三千，旂旐央央。", "fang shu li zhi, qi che san qian, qi zhao yang yang."),
      line("方叔率止，约軝错衡，八鸾锵锵。", "fang shu shuai zhi, yue qi cuo heng, ba luan qiang qiang."),
      line("服其命服，朱芾斯皇，有玱葱珩。", "fu qi ming fu, zhu fu si huang, you qiang cong heng."),
      line("鴥彼飞隼，其飞戾天，亦集爰止。", "yu bi fei sun, qi fei li tian, yi ji yuan zhi."),
      line("方叔涖止，其车三千，师干之试。", "fang shu li zhi, qi che san qian, shi gan zhi shi."),
      line("方叔率止，钲人伐鼓，陈师鞠旅。", "fang shu shuai zhi, zheng ren fa gu, chen shi ju lv."),
      line("显允方叔，伐鼓渊渊，振旅阗阗。", "xian yun fang shu, fa gu yuan yuan, zhen lv tian tian."),
      line("蠢尔蛮荆，大邦为仇。", "chun er man jing, da bang wei chou."),
      line("方叔元老，克壮其猷。", "fang shu yuan lao, ke zhuang qi you."),
      line("方叔率止，执讯获丑。", "fang shu shuai zhi, zhi xun huo chou."),
      line("显允方叔，征伐玁狁，蛮荆来威。", "xian yun fang shu, zheng fa xian yun, man jing lai wei.")
    ],
    annotationTargets: [
      ["芑", "菑亩"],
      ["涖止", "师干之试"],
      ["四骐翼翼"],
      ["簟茀鱼服", "钩膺鞗革"],
      ["中乡"],
      ["旂旐央央"],
      ["约軝错衡", "八鸾锵锵"],
      ["命服", "朱芾斯皇"],
      ["鴥彼飞隼", "戾天"],
      ["钲人伐鼓", "鞠旅"],
      ["渊渊", "阗阗"],
      ["蛮荆"],
      ["元老", "其猷"],
      ["执讯获丑"],
      ["来威"]
    ],
    annotations: [
      ["芑，苦菜一类。菑亩，已开垦田亩。"],
      ["涖，临。师干之试，言军旅之盛。"],
      ["翼翼，整肃貌。"],
      ["簟茀，车饰。鱼服，鱼皮箭袋。钩膺、鞗革，皆车马饰。"],
      ["中乡，乡中之地。"],
      ["旂旐央央，旗帜鲜明盛大。"],
      ["约軝错衡，车饰有文。八鸾，车铃。锵锵，其声。"],
      ["命服，所受礼服。芾，蔽膝。斯皇，鲜明盛美。"],
      ["鴥，鸟飞疾貌。戾天，至高天。"],
      ["钲人，击钲者。鞠旅，整军。"],
      ["渊渊，鼓声深远。阗阗，军旅盛众貌。"],
      ["蛮荆，南方部族。"],
      ["元老，老臣宿将。猷，谋略。"],
      ["执讯获丑，执获讯问众敌。"],
      ["来威，来而服威。"]
    ],
    translation: [
      "采着那芑菜，在这新开垦的田里，在那熟整过的地亩之间。",
      "方叔亲自来到这里，他麾下战车三千，军阵正可一试威势。",
      "方叔率军而行，乘着四匹青黑骏马，马阵整肃如翼。",
      "大车光彩鲜明，车幔、箭袋、车饰与马饰都十分华美。",
      "采着那芑菜，在这新田，在这乡里之间。",
      "方叔亲自来到这里，他麾下战车三千，旗帜鲜明展开。",
      "方叔率军而行，车前横木错饰精整，八只车铃锵锵作响。",
      "他身着王命所授的礼服，朱色蔽膝灿然明盛，佩饰琅琅有声。",
      "看那飞隼高高飞起，直上青天，又停落下来。",
      "方叔亲自来到这里，他麾下战车三千，军阵正可一试威势。",
      "方叔率军而行，击钲伐鼓，列阵整军。",
      "贤明可信的方叔，鼓声渊渊深响，凯旋时军容盛盛。",
      "你们蛮荆这样蠢动，于是与大邦结为仇敌。",
      "方叔这位老成宿将，果然能把谋略施展得强盛有力。",
      "方叔率军而行，擒获敌人，审问俘虏。",
      "贤明可信的方叔，既曾征伐猃狁，也使蛮荆最终来服其威。"
    ]
  },
  {
    id: "che-gong",
    chapter: "小雅·南有嘉鱼之什",
    title: "车攻",
    orderLabel: "第一百七十九首",
    lines: [
      "我车既攻，我马既同。四牡庞庞，驾言徂东。",
      "田车既好，四牡孔阜。东有甫草，驾言行狩。",
      "之子于苗，选徒嚻嚻。建旐设旄，搏兽于敖。",
      "驾彼四牡，四牡奕奕。赤芾金舄，会同有绎。",
      "决拾既佽，弓矢既调。射夫既同，助我举柴。",
      "四黄既驾，两骖不猗。不失其驰，舍矢如破。",
      "萧萧马鸣，悠悠斾旌。徒御不惊，大庖不盈。",
      "之子于征，有闻无声。允矣君子，展也大成。"
    ],
    phonetics: [
      line("我车既攻，我马既同。四牡庞庞，驾言徂东。", "wo che ji gong, wo ma ji tong. si mu pang pang, jia yan cu dong."),
      line("田车既好，四牡孔阜。东有甫草，驾言行狩。", "tian che ji hao, si mu kong fu. dong you fu cao, jia yan xing shou."),
      line("之子于苗，选徒嚻嚻。建旐设旄，搏兽于敖。", "zhi zi yu miao, xuan tu xiao xiao. jian zhao she mao, bo shou yu ao."),
      line("驾彼四牡，四牡奕奕。赤芾金舄，会同有绎。", "jia bi si mu, si mu yi yi. chi fu jin xi, hui tong you yi."),
      line("决拾既佽，弓矢既调。射夫既同，助我举柴。", "jue shi ji ci, gong shi ji tiao. she fu ji tong, zhu wo ju chai."),
      line("四黄既驾，两骖不猗。不失其驰，舍矢如破。", "si huang ji jia, liang can bu yi. bu shi qi chi, she shi ru po."),
      line("萧萧马鸣，悠悠斾旌。徒御不惊，大庖不盈。", "xiao xiao ma ming, you you pei jing. tu yu bu jing, da pao bu ying."),
      line("之子于征，有闻无声。允矣君子，展也大成。", "zhi zi yu zheng, you wen wu sheng. yun yi jun zi, zhan ye da cheng.")
    ],
    annotationTargets: [
      ["既攻", "既同"],
      ["孔阜", "甫草"],
      ["于苗", "搏兽于敖"],
      ["奕奕", "有绎"],
      ["决拾", "既调", "举柴"],
      ["不猗", "如破"],
      ["斾旌", "大庖不盈"],
      ["有闻无声", "大成"]
    ],
    annotations: [
      ["攻，坚整。同，齐。"],
      ["孔阜，甚肥壮。甫草，地名。"],
      ["苗，夏猎。敖，地名。"],
      ["奕奕，强盛有光。绎，络绎不绝。"],
      ["决拾，射具。调，和。举柴，合围而猎。"],
      ["猗，偏倚。舍矢如破，发矢如破物。"],
      ["斾旌，旗帜。大庖不盈，言获兽不以多为贵。"],
      ["有闻无声，声名著闻而不自矜夸。展，大。"]
    ],
    translation: [
      "我的战车已经修整，我的马匹已经调齐。四匹公马高大雄壮，驾车向东出发。",
      "猎车都已备好，四匹公马又肥又壮。东边有甫草之地，于是驾车前去田猎。",
      "那位君子正行田猎，选拔步卒喧喧整整。建起旐旗，竖起旄旗，在敖地搏击野兽。",
      "驾着那四匹公马，四马精神焕发。赤色蔽膝，金色鞋履，会同之礼络绎不绝。",
      "护臂与拾器都已齐备，弓箭也都调校妥当。射手们已经同列，来协助我们举火合围。",
      "四匹黄马已经驾好，两边骖马并不偏倚。奔走时毫不失势，放箭如同破物一般。",
      "只听马声萧萧，旗帜悠悠舒展。步卒与车御并不惊乱，连庖厨都不以盈满为贵。",
      "那位君子前去征猎，有声名却没有夸声。真是可信的君子，实在成就宏大。"
    ]
  },
  {
    id: "ji-ri",
    chapter: "小雅·南有嘉鱼之什",
    title: "吉日",
    orderLabel: "第一百八十首",
    lines: [
      "吉日维戊，既伯既祷。田车既好，四牡孔阜。升彼大阜，从其羣丑。",
      "吉日庚午，既差我马。兽之所同，麀鹿麌麌。漆沮之从，天子之所。",
      "瞻彼中原，其祁孔有。儦儦俟俟，或羣或友。悉率左右，以燕天子。",
      "既张我弓，既挟我矢。发彼小豝，殪此大兕。以御宾客，且以酌醴。"
    ],
    phonetics: [
      line("吉日维戊，既伯既祷。田车既好，四牡孔阜。升彼大阜，从其羣丑。", "ji ri wei wu, ji bo ji dao. tian che ji hao, si mu kong fu. sheng bi da fu, cong qi qun chou."),
      line("吉日庚午，既差我马。兽之所同，麀鹿麌麌。漆沮之从，天子之所。", "ji ri geng wu, ji chai wo ma. shou zhi suo tong, you lu yu yu. qi ju zhi cong, tian zi zhi suo."),
      line("瞻彼中原，其祁孔有。儦儦俟俟，或羣或友。悉率左右，以燕天子。", "zhan bi zhong yuan, qi qi kong you. biao biao si si, huo qun huo you. xi shuai zuo you, yi yan tian zi."),
      line("既张我弓，既挟我矢。发彼小豝，殪此大兕。以御宾客，且以酌醴。", "ji zhang wo gong, ji xie wo shi. fa bi xiao ba, yi ci da si. yi yu bin ke, qie yi zhuo li.")
    ],
    annotationTargets: [
      ["维戊", "既伯既祷"],
      ["既差我马", "麌麌", "漆沮"],
      ["其祁孔有", "儦儦俟俟"],
      ["小豝", "大兕", "酌醴"]
    ],
    annotations: [
      ["维戊，戊日。伯，择时。祷，祈祷。"],
      ["差，整齐。麌麌，众多貌。漆沮，地名。"],
      ["祁，盛。儦儦俟俟，兽行群聚貌。"],
      ["豝，小野猪。兕，大犀牛类兽。醴，甜酒。"]
    ],
    translation: [
      "吉利的日子正在戊日，既已占候又已祈祷。猎车早已备好，四匹公马十分肥壮。登上那高阜，追随着成群猎兽。",
      "吉利的日子又在庚午，我的马匹也都整齐调好。群兽聚集的地方，牝鹿成群而来。漆沮一带，正是天子田猎之所。",
      "遥看那中原旷野，兽群实在繁多。它们成队而行，或成群或结伴。于是率领左右随从，来为天子助兴宴乐。",
      "既张好我的弓，也挟好了我的箭。射倒那小野猪，又击毙这大兕。所获猎物既可供宾客享用，也可拿来斟酒共饮。"
    ]
  },
  {
    id: "hong-yan",
    chapter: "小雅·鸿雁之什",
    title: "鸿雁",
    orderLabel: "第一百八十一首",
    lines: [
      "鸿雁于飞，肃肃其羽。之子于征，劬劳于野。爰及矜人，哀此鳏寡。",
      "鸿雁于飞，集于中泽。之子于垣，百堵皆作。虽则劬劳，其究安宅。",
      "鸿雁于飞，哀鸣嗸嗸。维此哲人，谓我劬劳。维彼愚人，谓我宣骄。"
    ],
    phonetics: [
      line("鸿雁于飞，肃肃其羽。之子于征，劬劳于野。爰及矜人，哀此鳏寡。", "hong yan yu fei, su su qi yu. zhi zi yu zheng, qu lao yu ye. yuan ji guan ren, ai ci guan gua."),
      line("鸿雁于飞，集于中泽。之子于垣，百堵皆作。虽则劬劳，其究安宅。", "hong yan yu fei, ji yu zhong ze. zhi zi yu yuan, bai du jie zuo. sui ze qu lao, qi jiu an zhai."),
      line("鸿雁于飞，哀鸣嗸嗸。维此哲人，谓我劬劳。维彼愚人，谓我宣骄。", "hong yan yu fei, ai ming ao ao. wei ci zhe ren, wei wo qu lao. wei bi yu ren, wei wo xuan jiao.")
    ],
    annotationTargets: [
      ["肃肃其羽"],
      ["劬劳于野", "矜人", "鳏寡"],
      ["于垣", "百堵皆作", "安宅"],
      ["嗸嗸"],
      ["哲人"],
      ["宣骄"]
    ],
    annotations: [
      ["肃肃，羽动整齐貌。"],
      ["劬劳，勤苦。矜人，鳏寡孤独可怜之人。"],
      ["于垣，筑墙。堵，墙。安宅，得安其居。"],
      ["嗸嗸，哀鸣之声。"],
      ["哲人，明理之人。"],
      ["宣骄，谓自夸骄矜。"]
    ],
    translation: [
      "鸿雁飞在空中，羽翼肃肃整整。那些出役的人，在野外辛劳奔波。想到那些可怜的人，更怜惜这世上的鳏寡。",
      "鸿雁飞在空中，落在泽中停息。那些服役的人在筑墙，百堵都已建起。虽然确实辛苦，但终究能让人安居有宅。",
      "鸿雁飞在空中，哀哀地鸣叫。明白事理的人，说我们是在辛劳为民；那些愚昧的人，却说我们这是自夸自骄。"
    ]
  },
  {
    id: "ting-liao",
    chapter: "小雅·鸿雁之什",
    title: "庭燎",
    orderLabel: "第一百八十二首",
    lines: [
      "夜如何其？夜未央。庭燎之光，君子至止，鸾声将将。",
      "夜如何其？夜未艾。庭燎晣晣，君子至止，鸾声哕哕。",
      "夜如何其？夜乡晨。庭燎有煇，君子至止，言观其旂。"
    ],
    phonetics: [
      line("夜如何其？夜未央。庭燎之光，君子至止，鸾声将将。", "ye ru he qi? ye wei yang. ting liao zhi guang, jun zi zhi zhi, luan sheng qiang qiang."),
      line("夜如何其？夜未艾。庭燎晣晣，君子至止，鸾声哕哕。", "ye ru he qi? ye wei ai. ting liao zhe zhe, jun zi zhi zhi, luan sheng hui hui."),
      line("夜如何其？夜乡晨。庭燎有煇，君子至止，言观其旂。", "ye ru he qi? ye xiang chen. ting liao you hui, jun zi zhi zhi, yan guan qi qi.")
    ],
    annotationTargets: [
      ["夜未央"],
      ["庭燎之光", "将将"],
      ["夜未艾", "晣晣", "哕哕"],
      ["夜乡晨"],
      ["有煇"],
      ["其旂"]
    ],
    annotations: [
      ["央，中。夜未央，言夜尚未半。"],
      ["庭燎，庭中大烛。将将，鸾铃声。"],
      ["艾，尽。晣晣，明貌。哕哕，铃声有节。"],
      ["乡晨，向晨，近晓。"],
      ["煇，火气烟光。"],
      ["旂，旗帜。"]
    ],
    translation: [
      "夜到了什么时候？夜还没有到半。庭中的火炬正发着光，君子已到了，鸾铃声将将而来。",
      "夜到了什么时候？夜还没有到尽头。庭中的火炬明明亮亮，君子已到了，鸾铃声哕哕有节。",
      "夜到了什么时候？夜已经快近清晨。庭中的火炬带着烟光，君子已到了，人们已能望见他的旗帜。"
    ]
  },
  {
    id: "mian-shui",
    chapter: "小雅·鸿雁之什",
    title: "沔水",
    orderLabel: "第一百八十三首",
    lines: [
      "沔彼流水，朝宗于海。鴥彼飞隼，载飞载止。嗟我兄弟，邦人诸友。莫肯念乱，谁无父母？",
      "沔彼流水，其流汤汤。鴥彼飞隼，载飞载扬。念彼不蹟，载起载行。心之忧矣，不可弭忘。",
      "鴥彼飞隼，率彼中陵。民之讹言，宁莫之惩？我友敬矣，谗言其兴。"
    ],
    phonetics: [
      line("沔彼流水，朝宗于海。鴥彼飞隼，载飞载止。嗟我兄弟，邦人诸友。莫肯念乱，谁无父母？", "mian bi liu shui, chao zong yu hai. yu bi fei sun, zai fei zai zhi. jie wo xiong di, bang ren zhu you. mo ken nian luan, shui wu fu mu?"),
      line("沔彼流水，其流汤汤。鴥彼飞隼，载飞载扬。念彼不蹟，载起载行。心之忧矣，不可弭忘。", "mian bi liu shui, qi liu shang shang. yu bi fei sun, zai fei zai yang. nian bi bu ji, zai qi zai xing. xin zhi you yi, bu ke mi wang."),
      line("鴥彼飞隼，率彼中陵。民之讹言，宁莫之惩？我友敬矣，谗言其兴。", "yu bi fei sun, shuai bi zhong ling. min zhi e yan, ning mo zhi cheng? wo you jing yi, chan yan qi xing.")
    ],
    annotationTargets: [
      ["朝宗于海"],
      ["载飞载止"],
      ["邦人诸友", "谁无父母"],
      ["汤汤", "载飞载扬"],
      ["不蹟", "弭忘"],
      ["中陵"],
      ["讹言", "惩"],
      ["我友敬矣", "谗言其兴"]
    ],
    annotations: [
      ["朝宗于海，百川归海。"],
      ["载飞载止，时飞时止。"],
      ["邦人诸友，邦中朋友。谁无父母，言人人皆有当念之亲。"],
      ["汤汤，水大流貌。载飞载扬，时飞时高扬。"],
      ["不蹟，不循义迹者。弭忘，止息忘却。"],
      ["中陵，山陵之中。"],
      ["讹言，讹传之言。惩，止。"],
      ["敬，慎。谗言其兴，谗言乘间而起。"]
    ],
    translation: [
      "那沔水流啊流，最后都朝着大海归去。那飞隼在空中时飞时停。可叹我的兄弟、邦中的朋友啊，竟没有人肯想到这乱世；谁又不是有父母的人呢？",
      "那沔水流啊流，水势浩浩汤汤。那飞隼在空中时飞时扬。想到那些不守正道的人，我时而起身，时而徘徊。心中的忧虑啊，总也无法止息忘却。",
      "那飞隼掠过高高山陵。世上的讹言乱起，难道就没有人制止吗？我的朋友本来是谨慎的，可谗言偏偏就在这时兴起。"
    ]
  }
];
