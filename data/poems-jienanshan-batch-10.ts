import type { Poem, PoemPhoneticSegment } from "@/data/poems";

function p(text: string, pinyin?: string): PoemPhoneticSegment {
  return { text, pinyin };
}

function line(text: string, pinyin: string): PoemPhoneticSegment[] {
  return [p(text, pinyin)];
}

export const jieNanShanBatchPoems10: Poem[] = [
  {
    id: "jie-nan-shan",
    chapter: "小雅·节南山之什",
    title: "节南山",
    orderLabel: "第一百九十一首",
    lines: [
      "节彼南山，维石岩岩。赫赫师尹，民具尔瞻。忧心如惔，不敢戏谈。国既卒斩，何用不监！ 节彼南山，有实其猗。赫赫师尹，不平谓何？天方荐瘥，丧乱弘多。民言无嘉，憯莫惩嗟。",
      "尹氏大师，维周之氐。秉国之均，四方是维。天子是毗，俾民不迷。不吊昊天，不宜空我师。 弗躬弗亲，庶民弗信。弗问弗仕，勿罔君子。式夷式已，无小人殆。琐琐姻亚，则无膴仕。",
      "昊天不佣，降此鞠讻。昊天不惠，降此大戾。君子如届，俾民心阕。君子如夷，恶怒是违。 不吊昊天，乱靡有定。式月斯生，俾民不宁。忧心如酲，谁秉国成？不自为政，卒劳百姓。",
      "驾彼四牡，四牡项领。我瞻四方，蹙蹙靡所骋。 方茂尔恶，相尔矛矣。既夷既怿，如相酬矣。",
      "昊天不平，我王不宁。不惩其心，覆怨其正。 家父作诵，以究王讻。式讹尔心，以畜万邦。"
    ],
    phonetics: [
      line("节彼南山，维石岩岩。赫赫师尹，民具尔瞻。忧心如惔，不敢戏谈。国既卒斩，何用不监！ 节彼南山，有实其猗。赫赫师尹，不平谓何？天方荐瘥，丧乱弘多。民言无嘉，憯莫惩嗟。", "jie bi nan shan, wei shi yan yan. he he shi yin, min ju er zhan. you xin ru tan, bu gan xi tan. guo ji zu zhan, he yong bu jian! jie bi nan shan, you shi qi yi. he he shi yin, bu ping wei he? tian fang jian chai, sang luan hong duo. min yan wu jia, can mo cheng jie."),
      line("尹氏大师，维周之氐。秉国之均，四方是维。天子是毗，俾民不迷。不吊昊天，不宜空我师。 弗躬弗亲，庶民弗信。弗问弗仕，勿罔君子。式夷式已，无小人殆。琐琐姻亚，则无膴仕。", "yin shi da shi, wei zhou zhi di. bing guo zhi jun, si fang shi wei. tian zi shi pi, bi min bu mi. bu diao hao tian, bu yi kong wo shi. fu gong fu qin, shu min fu xin. fu wen fu shi, wu wang jun zi. shi yi shi yi, wu xiao ren dai. suo suo yin ya, ze wu hu shi."),
      line("昊天不佣，降此鞠讻。昊天不惠，降此大戾。君子如届，俾民心阕。君子如夷，恶怒是违。 不吊昊天，乱靡有定。式月斯生，俾民不宁。忧心如酲，谁秉国成？不自为政，卒劳百姓。", "hao tian bu yong, jiang ci ju xiong. hao tian bu hui, jiang ci da li. jun zi ru jie, bi min xin que. jun zi ru yi, wu nu shi wei. bu diao hao tian, luan mi you ding. shi yue si sheng, bi min bu ning. you xin ru cheng, shui bing guo cheng? bu zi wei zheng, zu lao bai xing."),
      line("驾彼四牡，四牡项领。我瞻四方，蹙蹙靡所骋。 方茂尔恶，相尔矛矣。既夷既怿，如相酬矣。", "jia bi si mu, si mu xiang ling. wo zhan si fang, cu cu mi suo cheng. fang mao er e, xiang er mao yi. ji yi ji yi, ru xiang chou yi."),
      line("昊天不平，我王不宁。不惩其心，覆怨其正。 家父作诵，以究王讻。式讹尔心，以畜万邦。", "hao tian bu ping, wo wang bu ning. bu cheng qi xin, fu yuan qi zheng. jia fu zuo song, yi jiu wang xiong. shi e er xin, yi xu wan bang.")
    ],
    annotationTargets: [
      ["师尹", "卒斩", "荐瘥"],
      ["氐", "秉国之均", "膴仕"],
      ["鞠讻", "阕", "酲"],
      ["项领", "蹙蹙", "相酬"],
      ["覆怨其正", "王讻", "畜万邦"]
    ],
    annotations: [
      ["师尹，指居高位之执政者。卒斩，犹言国政败坏。荐瘥，重叠降下的病乱。"],
      ["氐，本根。均，平也，指国政权衡。膴仕，高位厚禄之仕。"],
      ["鞠讻，大凶。阕，止息、空竭。酲，病酒，引申为忧苦昏乱。"],
      ["项领，马壮貌。蹙蹙，局促不得展。相酬，彼此应和。"],
      ["覆怨其正，反把怨恨加到正直之人身上。王讻，王朝之祸乱。畜，安定、保有。"]
    ],
    translation: [
      "高高的南山，岩石层层耸立。显赫的师尹，百姓都抬头看着你；我忧心炽烈，不敢轻言戏谈。国家已经败坏成这样，为什么还不知鉴察？同样是那高高的南山，草木繁密覆着山坡。显赫的师尹啊，你的不平到底为了什么？上天一再降下灾病，丧乱越来越多，百姓说不出一句称美的话，只剩悲叹而无人惩戒。",
      "尹氏这位大臣，本该是周室的根本，执掌国政的权衡，维系四方，辅佐天子，使百姓不至迷乱。可他不知体恤上天之意，也白白耗尽了我们众臣。你自己不亲身任事，百姓便不会信服；你不察问贤者，又不任用君子，只会让小人得势，亲戚姻亚琐琐营私，于是高位厚禄也都失了其义。",
      "上天并不均平，于是降下大凶与灾戾。若君子能够真正来到政事之中，百姓的怨心才会止息；若君子能够平和持正，也就不会以忿怒相互伤害。可如今无人仰体天心，祸乱没有一定的止境，一月复一月地滋生，使百姓不得安宁。我忧心得像病酒一样昏苦：究竟是谁在执掌国家大政？若不肯亲自治政，最终辛劳受苦的还是百姓。",
      "我驾着四匹壮马，放眼四方，心里却局促得无处驰骋。你方才还纵着自己的恶意，又彼此应和，仿佛互相酬答一般，把错当成了理所当然。",
      "上天不平，所以我的君王也不得安宁。你们不惩治自己的私心，反而把怨恨加在正直之人身上。于是家父写下这首诗，要把王朝祸乱的根由说尽，也盼你们矫正其心，好保全万邦。"
    ]
  },
  {
    id: "zheng-yue",
    chapter: "小雅·节南山之什",
    title: "正月",
    orderLabel: "第一百九十二首",
    lines: [
      "正月繁霜，我心忧伤。民之讹言，亦孔之将。念我独兮，忧心京京。哀我小心，癙忧以痒。 父母生我，胡俾我愈？不自我先，不自我后。好言自口，莠言自口。忧心愈愈，是以有侮。",
      "忧心惸惸，念我无禄。民之无辜，并其臣仆。哀我人斯，于何从禄？瞻乌爰止，于谁之屋？ 瞻彼中林，侯薪侯蒸。民今方殆，视天梦梦。既克有定，靡人弗胜。有皇上帝，伊谁云憎？",
      "谓山盖卑，为冈为陵。民之讹言，宁莫之惩？召彼故老，讯之占梦。具曰予圣，谁知乌之雌雄！ 谓天盖高，不敢不局。谓地盖厚，不敢不蹐。维号斯言，有伦有脊。哀今之人，胡为虺蜴！",
      "瞻彼阪田，有菀其特。天之扤我，如不我克。彼求我则，如不我得。执我仇仇，亦不我力。 心之忧矣，如或结之。今兹之正，胡然厉矣！燎之方扬，宁或灭之？赫赫宗周，褒姒灭之！",
      "终其永怀，又窘阴雨。其车既载，乃弃尔辅。载输尔载，将伯助予！ 无弃尔辅，员于尔辐。屡顾尔仆，不输尔载。终逾绝险，曾是不意。",
      "鱼在于沼，亦匪克乐。潜虽伏矣，亦孔之炤。忧心惨惨，念国之为虐。 彼有旨酒，又有嘉肴。洽比其邻，昏姻孔云。念我独兮，忧心殷殷。",
      "佌佌彼有屋，蔌蔌方有谷。民今之无禄，天夭是椓。哿矣富人，哀此惸独。"
    ],
    phonetics: [
      line("正月繁霜，我心忧伤。民之讹言，亦孔之将。念我独兮，忧心京京。哀我小心，癙忧以痒。 父母生我，胡俾我愈？不自我先，不自我后。好言自口，莠言自口。忧心愈愈，是以有侮。", "zheng yue fan shuang, wo xin you shang. min zhi e yan, yi kong zhi jiang. nian wo du xi, you xin jing jing. ai wo xiao xin, shu you yi yang. fu mu sheng wo, hu bi wo yu? bu zi wo xian, bu zi wo hou. hao yan zi kou, you yan zi kou. you xin yu yu, shi yi you wu."),
      line("忧心惸惸，念我无禄。民之无辜，并其臣仆。哀我人斯，于何从禄？瞻乌爰止，于谁之屋？ 瞻彼中林，侯薪侯蒸。民今方殆，视天梦梦。既克有定，靡人弗胜。有皇上帝，伊谁云憎？", "you xin qiong qiong, nian wo wu lu. min zhi wu gu, bing qi chen pu. ai wo ren si, yu he cong lu? zhan wu yuan zhi, yu shui zhi wu? zhan bi zhong lin, hou xin hou zheng. min jin fang dai, shi tian meng meng. ji ke you ding, mi ren fu sheng. you huang shang di, yi shui yun zeng?"),
      line("谓山盖卑，为冈为陵。民之讹言，宁莫之惩？召彼故老，讯之占梦。具曰予圣，谁知乌之雌雄！ 谓天盖高，不敢不局。谓地盖厚，不敢不蹐。维号斯言，有伦有脊。哀今之人，胡为虺蜴！", "wei shan gai bei, wei gang wei ling. min zhi e yan, ning mo zhi cheng? zhao bi gu lao, xun zhi zhan meng. ju yue yu sheng, shui zhi wu zhi ci xiong! wei tian gai gao, bu gan bu ju. wei di gai hou, bu gan bu ji. wei hao si yan, you lun you ji. ai jin zhi ren, hu wei hui yi!"),
      line("瞻彼阪田，有菀其特。天之扤我，如不我克。彼求我则，如不我得。执我仇仇，亦不我力。 心之忧矣，如或结之。今兹之正，胡然厉矣！燎之方扬，宁或灭之？赫赫宗周，褒姒灭之！", "zhan bi ban tian, you wan qi te. tian zhi wu wo, ru bu wo ke. bi qiu wo ze, ru bu wo de. zhi wo qiu qiu, yi bu wo li. xin zhi you yi, ru huo jie zhi. jin zi zhi zheng, hu ran li yi! liao zhi fang yang, ning huo mie zhi? he he zong zhou, bao si mie zhi!"),
      line("终其永怀，又窘阴雨。其车既载，乃弃尔辅。载输尔载，将伯助予！ 无弃尔辅，员于尔辐。屡顾尔仆，不输尔载。终逾绝险，曾是不意。", "zhong qi yong huai, you jiong yin yu. qi che ji zai, nai qi er fu. zai shu er zai, jiang bo zhu yu! wu qi er fu, yuan yu er fu. lv gu er pu, bu shu er zai. zhong yu jue xian, ceng shi bu yi."),
      line("鱼在于沼，亦匪克乐。潜虽伏矣，亦孔之炤。忧心惨惨，念国之为虐。 彼有旨酒，又有嘉肴。洽比其邻，昏姻孔云。念我独兮，忧心殷殷。", "yu zai yu zhao, yi fei ke le. qian sui fu yi, yi kong zhi zhao. you xin can can, nian guo zhi wei nue. bi you zhi jiu, you you jia yao. qia bi qi lin, hun yin kong yun. nian wo du xi, you xin yin yin."),
      line("佌佌彼有屋，蔌蔌方有谷。民今之无禄，天夭是椓。哿矣富人，哀此惸独。", "ci ci bi you wu, su su fang you gu. min jin zhi wu lu, tian yao shi zhuo. ge yi fu ren, ai ci qiong du.")
    ],
    annotationTargets: [
      ["讹言", "京京", "癙忧"],
      ["惸惸", "梦梦"],
      ["谁知乌之雌雄", "虺蜴"],
      ["扤我", "仇仇", "褒姒灭之"],
      ["弃尔辅", "将伯助予", "曾是不意"],
      ["炤", "洽比其邻"],
      ["佌佌", "椓", "惸独"]
    ],
    annotations: [
      ["讹言，流言。京京，忧甚貌。癙忧，忧病。"],
      ["惸惸，孤苦忧惧。梦梦，昏乱不明。"],
      ["谁知乌之雌雄，讥讽自谓圣明者其实不辨是非。虺蜴，比人反复多变。"],
      ["扤，动摇。仇仇，强横貌。褒姒灭之，借西周亡国事警告时政。"],
      ["辅，车旁辅木。将伯，求助之辞。曾是不意，竟不曾料到如此艰难。"],
      ["炤，明见。洽比其邻，与邻里亲昵往来。"],
      ["佌佌，小而不安。椓，摧残。惸独，孤独无依。"]
    ],
    translation: [
      "正月里霜降得繁重，我心里也满是忧伤。百姓间流言四起，声势越来越大；想到自己孤身独处，忧心越积越重，细小谨慎地活着，忧患却像病一样缠身。父母生下我，为什么偏偏让我受这样的苦？灾祸不先落在别人，也不后于别人，偏偏轮到我。好话坏话都从人口中出，我忧心越来越深，因此也不断受人轻侮。",
      "我忧心得孤苦不安，只恨自己无福无禄。百姓本来无辜，却连同臣仆一起受害。可怜我这样的人，到哪里去谋生？看那乌鸦停下，究竟是谁家的屋顶？再看林中堆着柴薪，百姓正濒于危殆，而上天仿佛昏昏不明。若真有安定的道理，谁会不去承受？至高的上帝啊，究竟是谁让你如此厌弃众人？",
      "有人说山原本低微，后来也能高成冈陵；那么百姓的流言，为什么竟无人惩治？他们召来故老，又拿梦占来装作高明，人人都自称圣智，却连乌鸦雌雄都分不清。人们又说天高，所以不敢不弯曲自己；说地厚，所以不敢不小心行步。这些话听来条理俨然，可看看今天的人，怎么一个个竟像毒蛇蜥蜴一般奸险诡诈？",
      "看那山阪上的田地，独立着一株茂盛的草木。上天这样摇动我，像是一定要把我折断；他们来要求我，好像生怕得不到，把我抓得紧紧的，却并不肯真正出力相助。我心里的忧结得像绳结一般，如今这样的政局，为何竟如此险厉？火才烧起，难道就不该尽快扑灭吗？赫赫宗周，终究也会像褒姒时那样走向败亡。",
      "我长久忧思，又偏偏遭逢阴雨。车上已经装满，却把辅木弃掉；一路搬运前行，只好呼求长者来帮我。不要丢掉那辅木，把它圆好安在车辐之间；一再回头照看仆役，才不至把车载弄散。一路终于越过绝险，到这一步，真是先前没有想到。",
      "鱼在池沼里，也未必真能快活；它虽潜伏着，却仍然容易被看见。我忧心惨淡，总想着国家这样暴虐。那边的人却有美酒、有佳肴，和邻里亲昵往来，婚姻宾客也都往来热闹。只剩我独自一人，忧心始终沉沉不散。",
      "那边的人有屋可居，粮谷也正丰足；可如今百姓无福无禄，像是被上天早早摧折。富足的人当然可以安然自得，而我所悲悯的，是这些孤苦无依的人。"
    ]
  },
  {
    id: "shi-yue-zhi-jiao",
    chapter: "小雅·节南山之什",
    title: "十月之交",
    orderLabel: "第一百九十三首",
    lines: [
      "十月之交，朔月辛卯。日有食之，亦孔之丑。彼月而微，此日而微。今此下民，亦孔之哀。 日月告凶，不用其行。四国无政，不用其良。彼月而食，则维其常。此日而食，于何不臧？",
      "烨烨震电，不宁不令。百川沸腾，山冡崒崩。高岸为谷，深谷为陵。哀今之人，胡憯莫惩？ 皇父卿士，番维司徒。家伯维宰，仲允膳夫。棸子内史，蹶维趣马。楀维师氏，艳妻煽方处。",
      "抑此皇父，岂曰不时？胡为我作，不即我谋？彻我墙屋，田卒污莱。曰予不戕，礼则然矣！ 皇父孔圣，作都于向。择三有事，亶侯多藏。不慭遗一老，俾守我王。择有车马，以居徂向。",
      "黾勉从事，不敢告劳。无罪无辜，谗口嚻嚻。下民之孽，匪降自天。噂沓背憎，职竞由人。 悠悠我里，亦孔之痗。四方有羡，我独居忧。民莫不逸，我独不敢休。天命不彻，我不敢效我友自逸。"
    ],
    phonetics: [
      line("十月之交，朔月辛卯。日有食之，亦孔之丑。彼月而微，此日而微。今此下民，亦孔之哀。 日月告凶，不用其行。四国无政，不用其良。彼月而食，则维其常。此日而食，于何不臧？", "shi yue zhi jiao, shuo yue xin mao. ri you shi zhi, yi kong zhi chou. bi yue er wei, ci ri er wei. jin ci xia min, yi kong zhi ai. ri yue gao xiong, bu yong qi xing. si guo wu zheng, bu yong qi liang. bi yue er shi, ze wei qi chang. ci ri er shi, yu he bu zang?"),
      line("烨烨震电，不宁不令。百川沸腾，山冡崒崩。高岸为谷，深谷为陵。哀今之人，胡憯莫惩？ 皇父卿士，番维司徒。家伯维宰，仲允膳夫。棸子内史，蹶维趣马。楀维师氏，艳妻煽方处。", "ye ye zhen dian, bu ning bu ling. bai chuan fei teng, shan zhong zu beng. gao an wei gu, shen gu wei ling. ai jin zhi ren, hu can mo cheng? huang fu qing shi, fan wei si tu. jia bo wei zai, zhong yun shan fu. zou zi nei shi, jue wei qu ma. yu wei shi shi, yan qi shan fang chu."),
      line("抑此皇父，岂曰不时？胡为我作，不即我谋？彻我墙屋，田卒污莱。曰予不戕，礼则然矣！ 皇父孔圣，作都于向。择三有事，亶侯多藏。不慭遗一老，俾守我王。择有车马，以居徂向。", "yi ci huang fu, qi yue bu shi? hu wei wo zuo, bu ji wo mou? che wo qiang wu, tian zu wu lai. yue yu bu qiang, li ze ran yi! huang fu kong sheng, zuo du yu xiang. ze san you shi, dan hou duo cang. bu yin yi yi lao, bi shou wo wang. ze you che ma, yi ju cu xiang."),
      line("黾勉从事，不敢告劳。无罪无辜，谗口嚻嚻。下民之孽，匪降自天。噂沓背憎，职竞由人。 悠悠我里，亦孔之痗。四方有羡，我独居忧。民莫不逸，我独不敢休。天命不彻，我不敢效我友自逸。", "min mian cong shi, bu gan gao lao. wu zui wu gu, chan kou xiao xiao. xia min zhi nie, fei jiang zi tian. zun ta bei zeng, zhi jing you ren. you you wo li, yi kong zhi mei. si fang you xian, wo du ju you. min mo bu yi, wo du bu gan xiu. tian ming bu che, wo bu gan xiao wo you zi yi.")
    ],
    annotationTargets: [
      ["十月之交", "日有食之", "不用其良"],
      ["高岸为谷", "艳妻煽方处"],
      ["徹我墙屋", "污莱", "作都于向"],
      ["嚻嚻", "噂沓背憎", "孔之痗"]
    ],
    annotations: [
      ["十月之交，指朔月辛卯之时。日有食之，日食。用其良，任用贤良。"],
      ["高岸为谷，深谷为陵，极言时局翻覆。艳妻煽方处，指内宠煽惑、群小用事。"],
      ["彻我墙屋，拆毁房屋。污莱，田地荒芜。向，地名。"],
      ["嚻嚻，喧竞貌。噂沓背憎，众口附和而背后相憎。痗，病苦。"]
    ],
    translation: [
      "十月交替之时，正在朔月辛卯这一天，太阳竟然发生了日食，这实在是极坏的征兆。月有亏蚀尚属常见，如今竟轮到太阳昏暗，眼下这些下民也真是可悲。日月都在预告凶象，天下政事也不用贤良；月食尚且寻常，可日食到了这一步，哪里还能说局势无恙？",
      "雷电震震，天地不宁，百川像沸腾一般，山陵似乎都在崩裂，高岸变成深谷，深谷又抬成丘陵。可叹今世的人，为什么到了这般地步还不知警惕？诗接着点出群臣名号，一层层写到司徒、膳夫、内史、趣马，甚至写到艳妻煽惑，正是说祸乱并非空从天降，而是人事早已败坏。",
      "可是这位皇父，难道真不知道时局不对吗？为什么行事从不与我商议，拆我墙屋，毁我田园，还说自己并没有伤害我，只不过礼制如此而已。更讽刺的是，他自命圣明，迁都于向，挑选亲近之人，带着车马财物离去，却偏偏不肯留下真正可靠的老臣来辅佐君王。",
      "我只能勉力做事，不敢诉说辛劳；可即便无罪无辜，谗言仍然喧闹不止。下民的灾祸，并不都是天降，更多是因为人心彼此附和、互相背憎。我住在这里，内心痛苦极深；别人或许还能安逸，我却不敢休息。只因天命未定，我不敢学别人那样自行图安。"
    ]
  },
  {
    id: "yu-wu-zheng",
    chapter: "小雅·节南山之什",
    title: "雨无正",
    orderLabel: "第一百九十四首",
    lines: [
      "浩浩昊天，不骏其德。降丧饥馑，斩伐四国。旻天疾威，弗虑弗图。舍彼有罪，既伏其辜。若此无罪，沦胥以铺。 周宗既灭，靡所止戾。正大夫离居，莫知我勚。三事大夫，莫肯夙夜。邦君诸侯，莫肯朝夕。庶曰式臧，覆出为恶。",
      "如何昊天，辟言不信？如彼行迈，则靡所臻。凡百君子，各敬尔身。胡不相畏？不畏于天？ 戎成不退，饥成不遂。曾我暬御，憯憯日瘁。凡百君子，莫肯用讯。听言则荅，谮言则退。",
      "哀哉不能言，匪舌是出，维躬是瘁。 哿矣能言，巧言如流，俾躬处休。",
      "维曰予仕，孔棘且殆。云不可使，得罪于天子。亦云可使，怨及朋友。 谓尔迁于王都，曰予未有室家。鼠思泣血，无言不疾。昔尔出居，谁从作尔室？"
    ],
    phonetics: [
      line("浩浩昊天，不骏其德。降丧饥馑，斩伐四国。旻天疾威，弗虑弗图。舍彼有罪，既伏其辜。若此无罪，沦胥以铺。 周宗既灭，靡所止戾。正大夫离居，莫知我勚。三事大夫，莫肯夙夜。邦君诸侯，莫肯朝夕。庶曰式臧，覆出为恶。", "hao hao hao tian, bu jun qi de. jiang sang ji jin, zhan fa si guo. min tian ji wei, fu lv fu tu. she bi you zui, ji fu qi gu. ruo ci wu zui, lun xu yi pu. zhou zong ji mie, mi suo zhi li. zheng da fu li ju, mo zhi wo yi. san shi da fu, mo ken su ye. bang jun zhu hou, mo ken zhao xi. shu yue shi zang, fu chu wei e."),
      line("如何昊天，辟言不信？如彼行迈，则靡所臻。凡百君子，各敬尔身。胡不相畏？不畏于天？ 戎成不退，饥成不遂。曾我暬御，憯憯日瘁。凡百君子，莫肯用讯。听言则荅，谮言则退。", "ru he hao tian, pi yan bu xin? ru bi xing mai, ze mi suo zhen. fan bai jun zi, ge jing er shen. hu bu xiang wei? bu wei yu tian? rong cheng bu tui, ji cheng bu sui. ceng wo xie yu, can can ri cui. fan bai jun zi, mo ken yong xun. ting yan ze da, zen yan ze tui."),
      line("哀哉不能言，匪舌是出，维躬是瘁。 哿矣能言，巧言如流，俾躬处休。", "ai zai bu neng yan, fei she shi chu, wei gong shi cui. ge yi neng yan, qiao yan ru liu, bi gong chu xiu."),
      line("维曰予仕，孔棘且殆。云不可使，得罪于天子。亦云可使，怨及朋友。 谓尔迁于王都，曰予未有室家。鼠思泣血，无言不疾。昔尔出居，谁从作尔室？", "wei yue yu shi, kong ji qie dai. yun bu ke shi, de zui yu tian zi. yi yun ke shi, yuan ji peng you. wei er qian yu wang du, yue yu wei you shi jia. shu si qi xue, wu yan bu ji. xi er chu ju, shui cong zuo er shi?")
    ],
    annotationTargets: [
      ["不骏其德", "沦胥以铺", "覆出为恶"],
      ["辟言不信", "暬御", "谮言"],
      ["匪舌是出", "巧言如流"],
      ["孔棘且殆", "鼠思泣血", "作尔室"]
    ],
    annotations: [
      ["骏，大。沦胥以铺，连累众人而遍及。覆出为恶，表面说善，终究反成恶事。"],
      ["辟言，正直之言。暬御，亲近侍御之臣。谮言，谗毁之语。"],
      ["匪舌是出，不是嘴里说不出来，而是说了只会伤身。"],
      ["孔棘且殆，极其急迫危险。鼠思泣血，忧思至极。作尔室，替你经营家室。"]
    ],
    translation: [
      "广大无边的昊天啊，并不显出它伟大的德意；它降下丧乱与饥馑，像刀斧一般斩伤四方。上天威怒迅疾，而执政者又不肯谋虑筹画，放过真正有罪的人，反倒让无辜者普遍受累。周室宗统已经衰败，几乎没有安顿之所；正直的大夫分散离居，没有人知道我的劳苦。三事大夫不肯日夜勤慎，邦君诸侯也不肯朝夕匡救，本想或许还有转机，结果却往往反而生出新的恶果。",
      "上天为什么这样？正直的话竟然无人肯信。就像有人在路上行走，却始终找不到到达之处。凡是这些君子，都该各自敬重自身，为什么彼此之间一点都不知敬畏，甚至不知敬畏上天？兵祸未退，饥荒未止，我身边亲近的侍从也日日困瘁。可满朝君子，没有人肯认真讯察，只肯敷衍回应直言，却在谗言面前纷纷退避。",
      "可悲啊，不是不能说，只是话一出口，受害的便是自己；而那些善于言辞的人，巧言像流水一样顺滑，反倒能使自己安然无事。",
      "说到出仕，如今实在是紧急又危险：若说此人不可任用，便得罪天子；若说此人可任，又会怨及朋友。有人说要迁往王都，却又说自己尚未成家。忧思得几乎泣血，没有一句话不是痛切的。想想当初你外出居处的时候，又是谁替你操办起了这份家业？"
    ]
  }
];
