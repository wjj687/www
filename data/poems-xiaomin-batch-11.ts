import type { Poem, PoemPhoneticSegment } from "@/data/poems";

function p(text: string, pinyin?: string): PoemPhoneticSegment {
  return { text, pinyin };
}

function line(text: string, pinyin: string): PoemPhoneticSegment[] {
  return [p(text, pinyin)];
}

export const xiaoMinBatchPoems11: Poem[] = [
  {
    id: "xiao-min",
    chapter: "小雅·小旻之什",
    title: "小旻",
    orderLabel: "第一百九十五首",
    lines: [
      "旻天疾威，敷于下土。谋犹回遹，何日斯沮。谋臧不从，不臧覆用。我视谋犹，亦孔之邛。",
      "潝潝訿訿，亦孔之哀。谋之其臧，则具是违。谋之不臧，则具是依。我视谋犹，伊于胡底。",
      "我龟既厌，不我告犹。谋夫孔多，是用不集。发言盈庭，谁敢执其咎。如匪行迈谋，是用不得于道。",
      "哀哉为犹，匪先民是程。匪大犹是经，维迩言是听。维迩言是争。如彼筑室于道谋，是用不溃于成。",
      "国虽靡止，或圣或否。民虽靡膴，或哲或谋。或肃或艾，如彼泉流。无沦胥以败。",
      "不敢暴虎，不敢冯河。人知其一，莫知其他。战战兢兢，如临深渊。如履薄冰。"
    ],
    phonetics: [
      line("旻天疾威，敷于下土。谋犹回遹，何日斯沮。谋臧不从，不臧覆用。我视谋犹，亦孔之邛。", "min tian ji wei, fu yu xia tu. mou you hui yu, he ri si ju. mou zang bu cong, bu zang fu yong. wo shi mou you, yi kong zhi qiong."),
      line("潝潝訿訿，亦孔之哀。谋之其臧，则具是违。谋之不臧，则具是依。我视谋犹，伊于胡底。", "xi xi zi zi, yi kong zhi ai. mou zhi qi zang, ze ju shi wei. mou zhi bu zang, ze ju shi yi. wo shi mou you, yi yu hu di."),
      line("我龟既厌，不我告犹。谋夫孔多，是用不集。发言盈庭，谁敢执其咎。如匪行迈谋，是用不得于道。", "wo gui ji yan, bu wo gao you. mou fu kong duo, shi yong bu ji. fa yan ying ting, shui gan zhi qi jiu. ru fei xing mai mou, shi yong bu de yu dao."),
      line("哀哉为犹，匪先民是程。匪大犹是经，维迩言是听。维迩言是争。如彼筑室于道谋，是用不溃于成。", "ai zai wei you, fei xian min shi cheng. fei da you shi jing, wei er yan shi ting. wei er yan shi zheng. ru bi zhu shi yu dao mou, shi yong bu kui yu cheng."),
      line("国虽靡止，或圣或否。民虽靡膴，或哲或谋。或肃或艾，如彼泉流。无沦胥以败。", "guo sui mi zhi, huo sheng huo fou. min sui mi hu, huo zhe huo mou. huo su huo yi, ru bi quan liu. wu lun xu yi bai."),
      line("不敢暴虎，不敢冯河。人知其一，莫知其他。战战兢兢，如临深渊。如履薄冰。", "bu gan bao hu, bu gan feng he. ren zhi qi yi, mo zhi qi ta. zhan zhan jing jing, ru lin shen yuan. ru lv bo bing.")
    ],
    annotationTargets: [
      ["旻天", "回遹", "邛"],
      ["潝潝訿訿", "伊于胡底"],
      ["我龟既厌", "发言盈庭"],
      ["先民是程", "迩言", "道谋"],
      ["靡膴", "肃", "艾", "沦胥以败"],
      ["暴虎", "冯河", "如履薄冰"]
    ],
    annotations: [
      ["旻天，秋天，亦借指上天。回遹，邪僻不正。邛，病也，言痛心。"],
      ["潝潝訿訿，众口附和而相诋毁。伊于胡底，终将到什么地步。"],
      ["龟既厌，占问过多而龟甲都厌烦。发言盈庭，满朝都是说话的人。"],
      ["先民是程，以先人之道为法。迩言，浅近之言。道谋，比喻与路人商量筑室。"],
      ["靡膴，民力不丰。肃，谨敬。艾，治理。沦胥以败，共同沉沦。"],
      ["暴虎，徒手搏虎。冯河，无舟徒涉河。言戒惧之深。"]
    ],
    translation: [
      "上天降下严酷威怒，灾祸遍及天下。谋划竟这般回邪不正，到哪一天才肯停止？好的计策不肯采用，不好的反而一再施行。我看着这样的谋虑，心里实在痛极。",
      "众人附和诋毁，这情状真令人悲哀。谋划若是妥当，大家反倒一齐违背；谋划若是不善，大家却都顺从依附。我看着这些谋虑，不知最终要坏到什么地步。",
      "连占问的龟甲都已经厌烦，却仍不能告诉我们真正的谋略。谋臣虽多，却因此反而一事无成。满朝言辞充斥庭中，可是谁敢真正承担过失？这就像还没上路先在路边空谈，因此永远走不到正道上。",
      "可悲啊，如今这些谋画之人，并不以先民之道为准则，也不用大的法度来衡量，只听浅近之言，只为浅近之言彼此争执。就像在路边商量筑屋，因此永远不能把屋子盖成。",
      "国家虽然不安定，其中也还是有人贤明，有人不贤；百姓虽然不丰足，也还有人明哲、有人善谋，有人谨肃、有人能治。真希望不要像泉流一样，一起滚入败亡之中。",
      "所以不敢徒手搏虎，也不敢空身涉河。人往往只知道眼前一端，却不知道另一层危险。只能时时戒惧，如同站在深渊边上，如同踩在薄冰之上。"
    ]
  },
  {
    id: "xiao-wan",
    chapter: "小雅·小旻之什",
    title: "小宛",
    orderLabel: "第一百九十六首",
    lines: [
      "宛彼鸣鸠，翰飞戾天。我心忧伤，念昔先人。 明发不寐，有怀二人。",
      "人之齐圣，饮酒温克。彼昏不知，壹醉日富。 各敬尔仪，天命不又。",
      "中原有菽，庶民采之。螟蛉有子，蜾蠃负之。 教诲尔子，式谷似之。",
      "题彼脊令，载飞载鸣。我日斯迈，而月斯征。 夙兴夜寐，无忝尔所生。",
      "交交桑扈，率场啄粟。哀我填寡，宜岸宜狱。 握粟出卜，自何能谷。",
      "温温恭人，如集于木。惴惴小心，如临于谷。 战战兢兢，如履薄冰。"
    ],
    phonetics: [
      line("宛彼鸣鸠，翰飞戾天。我心忧伤，念昔先人。 明发不寐，有怀二人。", "wan bi ming jiu, han fei li tian. wo xin you shang, nian xi xian ren. ming fa bu mei, you huai er ren."),
      line("人之齐圣，饮酒温克。彼昏不知，壹醉日富。 各敬尔仪，天命不又。", "ren zhi qi sheng, yin jiu wen ke. bi hun bu zhi, yi zui ri fu. ge jing er yi, tian ming bu you."),
      line("中原有菽，庶民采之。螟蛉有子，蜾蠃负之。 教诲尔子，式谷似之。", "zhong yuan you shu, shu min cai zhi. ming ling you zi, guo luo fu zhi. jiao hui er zi, shi gu si zhi."),
      line("题彼脊令，载飞载鸣。我日斯迈，而月斯征。 夙兴夜寐，无忝尔所生。", "ti bi ji ling, zai fei zai ming. wo ri si mai, er yue si zheng. su xing ye mei, wu tian er suo sheng."),
      line("交交桑扈，率场啄粟。哀我填寡，宜岸宜狱。 握粟出卜，自何能谷。", "jiao jiao sang hu, shuai chang zhuo su. ai wo zhen gua, yi an yi yu. wo su chu bu, zi he neng gu."),
      line("温温恭人，如集于木。惴惴小心，如临于谷。 战战兢兢，如履薄冰。", "wen wen gong ren, ru ji yu mu. zhui zhui xiao xin, ru lin yu gu. zhan zhan jing jing, ru lv bo bing.")
    ],
    annotationTargets: [
      ["鸣鸠", "先人", "二人"],
      ["齐圣", "温克", "天命不又"],
      ["螟蛉", "蜾蠃", "式谷似之"],
      ["脊令", "无忝尔所生"],
      ["填寡", "宜岸宜狱", "能谷"],
      ["惴惴", "如履薄冰"]
    ],
    annotations: [
      ["鸣鸠，鸟名。先人，先祖父母。二人，父母。"],
      ["齐圣，整肃聪明。温克，温和而能自持。天命不又，天命失之难再得。"],
      ["螟蛉、蜾蠃，古以为蜾蠃负螟蛉而养。式谷似之，教子使其善而似先人。"],
      ["脊令，鸟名。无忝尔所生，不辱没父母所生之身。"],
      ["填寡，穷苦孤独。岸、狱，皆困厄之地。谷，善。"],
      ["惴惴，恐惧谨慎貌。"]
    ],
    translation: [
      "那鸣鸠盘旋飞高直到天上，我心中满是忧伤，思念从前的先人。天色将明仍不能寐，心里念着父母二人。",
      "真正齐整聪明的人，饮酒也能温和自持；那些昏昧无知的人，却一味沉醉而且越来越深。你们各自都要谨慎自己的仪容举止，因为天所赋予的命数一旦失去，就难以重得。",
      "原野上有豆，百姓都去采它；螟蛉有子，蜾蠃把它背去养育。教诲你们的子弟，使他们向善，并且能像前人一样。",
      "看那脊令鸟一边飞一边鸣。我的日子一天天过去，月份也一月月推进。唯有早起晚睡，才不至辜负父母生养之恩。",
      "桑扈鸟来回飞着，在场上啄食谷粒。可怜我这样贫穷孤独，仿佛只配去岸边、去牢狱般困厄之地。握着一把粟米出门去占卜，究竟要怎样做，才能重新归于善境？",
      "为人要温和恭敬，就像栖在树上的鸟那样小心；心里要时刻戒慎，像立在深谷边缘。总之应当战战兢兢，如同行走在薄冰之上。"
    ]
  },
  {
    id: "xiao-bian",
    chapter: "小雅·小旻之什",
    title: "小弁",
    orderLabel: "第一百九十七首",
    lines: [
      "弁彼鸒斯，归飞提提。民莫不谷，我独于罹。何辜于天，我罪伊何。心之忧矣，云如之何。",
      "踧踧周道，鞫为茂草。我心忧伤，惄焉如擣。假寐永叹，维忧用老。心之忧矣，疢如疾首。",
      "维桑与梓，必恭敬止。靡瞻匪父，靡依匪母。不属于毛，不离于裹。天之生我，我辰安在。",
      "菀彼柳斯，鸣蜩嘒嘒。有漼者渊，萑苇淠淠。譬彼舟流，不知所届。心之忧矣，不遑假寐。",
      "鹿斯之奔，维足伎伎。雉之朝雊，尚求其雌。譬彼坏木，疾用无枝。心之忧矣，宁莫之知。",
      "相彼投兔，尚或先之。行有死人，尚或墐之。君子秉心，维其忍之。心之忧矣，涕既陨之。",
      "君子信谗，如或醻之。君子不惠，不舒究之。伐木掎矣，析薪杝矣。舍彼有罪，予之佗矣。",
      "莫高匪山，莫浚匪泉。君子无易由言，耳属于垣。无逝我梁，无发我笱。我躬不阅，遑恤我后。"
    ],
    phonetics: [
      line("弁彼鸒斯，归飞提提。民莫不谷，我独于罹。何辜于天，我罪伊何。心之忧矣，云如之何。", "bian bi yu si, gui fei shi shi. min mo bu gu, wo du yu li. he gu yu tian, wo zui yi he. xin zhi you yi, yun ru zhi he."),
      line("踧踧周道，鞫为茂草。我心忧伤，惄焉如擣。假寐永叹，维忧用老。心之忧矣，疢如疾首。", "cu cu zhou dao, ju wei mao cao. wo xin you shang, ni yan ru dao. jia mei yong tan, wei you yong lao. xin zhi you yi, chen ru ji shou."),
      line("维桑与梓，必恭敬止。靡瞻匪父，靡依匪母。不属于毛，不离于裹。天之生我，我辰安在。", "wei sang yu zi, bi gong jing zhi. mi zhan fei fu, mi yi fei mu. bu shu yu mao, bu li yu guo. tian zhi sheng wo, wo chen an zai."),
      line("菀彼柳斯，鸣蜩嘒嘒。有漼者渊，萑苇淠淠。譬彼舟流，不知所届。心之忧矣，不遑假寐。", "wan bi liu si, ming tiao hui hui. you cui zhe yuan, huan wei pi pi. pi bi zhou liu, bu zhi suo jie. xin zhi you yi, bu huang jia mei."),
      line("鹿斯之奔，维足伎伎。雉之朝雊，尚求其雌。譬彼坏木，疾用无枝。心之忧矣，宁莫之知。", "lu si zhi ben, wei zu qi qi. zhi zhi zhao gou, shang qiu qi ci. pi bi huai mu, ji yong wu zhi. xin zhi you yi, ning mo zhi zhi."),
      line("相彼投兔，尚或先之。行有死人，尚或墐之。君子秉心，维其忍之。心之忧矣，涕既陨之。", "xiang bi tou tu, shang huo xian zhi. xing you si ren, shang huo jin zhi. jun zi bing xin, wei qi ren zhi. xin zhi you yi, ti ji yun zhi."),
      line("君子信谗，如或醻之。君子不惠，不舒究之。伐木掎矣，析薪杝矣。舍彼有罪，予之佗矣。", "jun zi xin chan, ru huo chou zhi. jun zi bu hui, bu shu jiu zhi. fa mu ji yi, xi xin yi yi. she bi you zui, yu zhi tuo yi."),
      line("莫高匪山，莫浚匪泉。君子无易由言，耳属于垣。无逝我梁，无发我笱。我躬不阅，遑恤我后。", "mo gao fei shan, mo jun fei quan. jun zi wu yi you yan, er shu yu yuan. wu shi wo liang, wu fa wo gou. wo gong bu yue, huang xu wo hou.")
    ],
    annotationTargets: [
      ["鸒", "提提", "罹"],
      ["踧踧", "惄焉如擣", "疢如疾首"],
      ["桑与梓", "裹", "我辰安在"],
      ["漼", "淠淠", "所届"],
      ["伎伎", "朝雊", "坏木"],
      ["投兔", "墐之", "忍之"],
      ["醻之", "掎", "杝", "佗"],
      ["浚", "耳属于垣", "我躬不阅"]
    ],
    annotations: [
      ["鸒，鸟名。提提，群飞安舒貌。罹，忧患。"],
      ["踧踧，道窄难行。惄，忧也。疢如疾首，忧痛如头疾。"],
      ["桑梓，故里所见之木。裹，胎衣。辰，时运。"],
      ["漼，深貌。淠淠，草木茂盛。所届，到达之处。"],
      ["伎伎，行迟貌。朝雊，晨鸣。坏木，病枯之木。"],
      ["投兔，投奔有依之兔。墐，掩埋。忍之，忍心为之。"],
      ["醻，同酬，受杯而应。掎、杝，皆顺木理而斫。佗，加罪于我。"],
      ["浚，深。耳属于垣，言言语易被窃听。阅，容纳、顾念。"]
    ],
    translation: [
      "那群鸒鸟振翼归飞，队伍整整齐齐。人人都能安好，只有我独自遭逢忧患。我究竟得罪了上天什么？我又犯下了什么罪？心里这样忧苦，到底还能怎么办？",
      "周道本该平整通达，如今却长满了荒草。我心中忧伤，苦得像被舂捣。睡也睡不安，只能长长叹息，忧患竟把我催得老去。心里的病苦，像头疾一样沉重。",
      "桑树与梓树尚且要恭敬相待，更何况父母：没有谁不是仰赖父亲，没有谁不是依托母亲。我并非不属于父亲的骨血，也并非不曾在母体中孕育。可上天生下我，我的时运为何竟如此不幸？",
      "柳树繁茂，蝉声细细；深渊在前，芦苇也长得密密。可我却像一叶漂流的小舟，不知将漂向哪里。心里这样忧苦，连假寐片刻都顾不上。",
      "鹿奔跑时脚步尚且迟疑，野雉清晨鸣叫，也还知道寻求配偶。我却像一株败坏的树，被病害侵蚀得枝叶全无。心里这般忧痛，竟没有谁真正懂得。",
      "那投奔的兔子，尚且会有人抢先去救；路上的死人，尚且有人为他掩埋。偏偏君子执着这样的心肠，竟能忍心对我如此。心里越忧，眼泪也就不停落下。",
      "君子轻信谗言，仿佛举杯便信了它；君子又不肯明察，不肯从容追究。砍木尚且顺其倾侧，劈柴尚且顺其纹理，可他们却舍下真正有罪的人，反把罪名加到我身上。",
      "再高也高不过山，再深也深不过泉。君子说话本不该轻率，因为墙外都可能伏着耳目。请不要再来动我的鱼梁，不要再发我的鱼笱；我这一身都已经没人顾念了，又哪里还顾得上以后？"
    ]
  },
  {
    id: "qiao-yan",
    chapter: "小雅·小旻之什",
    title: "巧言",
    orderLabel: "第一百九十八首",
    lines: [
      "悠悠昊天，曰父母且。无罪无辜，乱如此怃。昊天已威，予慎无罪。昊天泰怃，予慎无辜。",
      "乱之初生，僭始既涵。乱之又生，君子信谗。君子如怒，乱庶遄沮。君子如祉，乱庶遄已。",
      "君子屡盟，乱是用长。君子信盗，乱是用暴。盗言孔甘，乱是用餤。匪其止共，维王之邛。",
      "奕奕寝庙，君子作之。秩秩大猷，圣人莫之。他人有心，予忖度之。跃跃毚兔，遇犬获之。",
      "荏染柔木，君子树之。往来行言，心焉数之。蛇蛇硕言，出自口矣。巧言如簧，颜之厚矣。",
      "彼何人斯，居河之麋。无拳无勇，职为乱阶。既微且尰，尔勇伊何。为犹将多，尔居徒几何。"
    ],
    phonetics: [
      line("悠悠昊天，曰父母且。无罪无辜，乱如此怃。昊天已威，予慎无罪。昊天泰怃，予慎无辜。", "you you hao tian, yue fu mu qie. wu zui wu gu, luan ru ci wu. hao tian yi wei, yu shen wu zui. hao tian tai wu, yu shen wu gu."),
      line("乱之初生，僭始既涵。乱之又生，君子信谗。君子如怒，乱庶遄沮。君子如祉，乱庶遄已。", "luan zhi chu sheng, jian shi ji han. luan zhi you sheng, jun zi xin chan. jun zi ru nu, luan shu chuan ju. jun zi ru zhi, luan shu chuan yi."),
      line("君子屡盟，乱是用长。君子信盗，乱是用暴。盗言孔甘，乱是用餤。匪其止共，维王之邛。", "jun zi lv meng, luan shi yong zhang. jun zi xin dao, luan shi yong bao. dao yan kong gan, luan shi yong tan. fei qi zhi gong, wei wang zhi qiong."),
      line("奕奕寝庙，君子作之。秩秩大猷，圣人莫之。他人有心，予忖度之。跃跃毚兔，遇犬获之。", "yi yi qin miao, jun zi zuo zhi. zhi zhi da you, sheng ren mo zhi. ta ren you xin, yu cun duo zhi. yue yue chan tu, yu quan huo zhi."),
      line("荏染柔木，君子树之。往来行言，心焉数之。蛇蛇硕言，出自口矣。巧言如簧，颜之厚矣。", "ren ran rou mu, jun zi shu zhi. wang lai xing yan, xin yan shu zhi. yi yi shuo yan, chu zi kou yi. qiao yan ru huang, yan zhi hou yi."),
      line("彼何人斯，居河之麋。无拳无勇，职为乱阶。既微且尰，尔勇伊何。为犹将多，尔居徒几何。", "bi he ren si, ju he zhi mei. wu quan wu yong, zhi wei luan jie. ji wei qie zhong, er yong yi he. wei you jiang duo, er ju tu ji he.")
    ],
    annotationTargets: [
      ["怃", "予慎无罪"],
      ["僭始既涵", "遄沮", "遄已"],
      ["盗言孔甘", "餤", "邛"],
      ["大猷", "忖度", "毚兔"],
      ["荏染", "蛇蛇硕言", "巧言如簧"],
      ["麋", "无拳无勇", "乱阶", "微且尰"]
    ],
    annotations: [
      ["怃，乱甚而可惊。予慎无罪，言我诚无罪过。"],
      ["僭始既涵，邪说起初已被容纳。遄沮，迅速止息。遄已，迅速平息。"],
      ["盗言，邪人之言。餤，增长。邛，病困。"],
      ["大猷，大法大谋。忖度，揣测。毚兔，狡兔。"],
      ["荏染，柔顺貌。蛇蛇硕言，夸大滑利之辞。簧，笙簧，比喻舌巧。"],
      ["麋，水边之地。拳，勇力。乱阶，祸乱之阶。微且尰，足病肿而无力。"]
    ],
    translation: [
      "悠悠苍天啊，人们称你为父母。可我既无罪又无辜，为什么这祸乱竟这样沉重地压下来？上天威怒虽盛，我确实没有罪；上天祸乱虽大，我也确实没有过失。",
      "祸乱刚开始时，不过是僭妄之言被含容；祸乱再度滋长，就是因为君子轻信了谗言。君子若能发怒而加以制止，祸乱大概很快就会收敛；君子若能喜爱善言，祸乱大概也会很快止息。",
      "君子屡屡盟誓，祸乱反因此滋长；君子轻信盗言，祸乱也因此变得更暴烈。那些邪人的话十分甘美，祸乱也因此一再扩张。他们并不真正尽职，只是让君王愈发困苦。",
      "巍巍寝庙，是贤君所建；整整大法，是圣人所定。别人的心思，我也能暗自揣度；那跳跃的狡兔，也终究会被猎犬捉住。",
      "柔弱的树木，是君子亲手栽植的；往来之人的议论，心里也都可以辨别。那些滑利夸大的言辞，不过是从口舌里吐出来；巧言像笙簧一样圆滑，也正显出他们脸皮之厚。",
      "那些人到底是谁，住在河边荒地里。既没有武力，也没有勇气，却偏偏成了祸乱的阶梯。既然身体已经衰病浮肿，你们又有什么勇气可言？谋划倒是不少，可你们身边真正追随的人又有几个？"
    ]
  },
  {
    id: "he-ren-si",
    chapter: "小雅·小旻之什",
    title: "何人斯",
    orderLabel: "第一百九十九首",
    lines: [
      "彼何人斯，其心孔艰。胡逝我梁，不入我门。伊谁云从，维暴之云。",
      "二人从行，谁为此祸。胡逝我梁，不入唁我。始者不如今，云不我可。",
      "彼何人斯，胡逝我陈。我闻其声，不见其身。不愧于人，不畏于天。",
      "彼何人斯，其为飘风。胡不自北，胡不自南。胡逝我梁，祇搅我心。",
      "尔之安行，亦不遑舍。尔之亟行，遑脂尔车。壹者之来，云何其盱。",
      "尔还而入，我心易也。还而不入，否难知也。壹者之来，俾我祇也。",
      "伯氏吹埙，仲氏吹篪。及尔如贯，谅不我知。出此三物，以诅尔斯。",
      "为鬼为蜮，则不可得。有靦面目，视人罔极。作此好歌，以极反侧。"
    ],
    phonetics: [
      line("彼何人斯，其心孔艰。胡逝我梁，不入我门。伊谁云从，维暴之云。", "bi he ren si, qi xin kong jian. hu shi wo liang, bu ru wo men. yi shui yun cong, wei bao zhi yun."),
      line("二人从行，谁为此祸。胡逝我梁，不入唁我。始者不如今，云不我可。", "er ren cong xing, shui wei ci huo. hu shi wo liang, bu ru yan wo. shi zhe bu ru jin, yun bu wo ke."),
      line("彼何人斯，胡逝我陈。我闻其声，不见其身。不愧于人，不畏于天。", "bi he ren si, hu shi wo chen. wo wen qi sheng, bu jian qi shen. bu kui yu ren, bu wei yu tian."),
      line("彼何人斯，其为飘风。胡不自北，胡不自南。胡逝我梁，祇搅我心。", "bi he ren si, qi wei piao feng. hu bu zi bei, hu bu zi nan. hu shi wo liang, zhi jiao wo xin."),
      line("尔之安行，亦不遑舍。尔之亟行，遑脂尔车。壹者之来，云何其盱。", "er zhi an xing, yi bu huang she. er zhi ji xing, huang zhi er che. yi zhe zhi lai, yun he qi xu."),
      line("尔还而入，我心易也。还而不入，否难知也。壹者之来，俾我祇也。", "er huan er ru, wo xin yi ye. huan er bu ru, fou nan zhi ye. yi zhe zhi lai, bi wo zhi ye."),
      line("伯氏吹埙，仲氏吹篪。及尔如贯，谅不我知。出此三物，以诅尔斯。", "bo shi chui xun, zhong shi chui chi. ji er ru guan, liang bu wo zhi. chu ci san wu, yi zu er si."),
      line("为鬼为蜮，则不可得。有靦面目，视人罔极。作此好歌，以极反侧。", "wei gui wei yu, ze bu ke de. you tian mian mu, shi ren wang ji. zuo ci hao ge, yi ji fan ce.")
    ],
    annotationTargets: [
      ["孔艰", "暴之云"],
      ["唁我", "不我可"],
      ["我陈", "不愧于人"],
      ["飘风", "祇搅我心"],
      ["遑舍", "脂尔车", "盱"],
      ["我心易也", "祇也"],
      ["埙", "篪", "如贯", "三物"],
      ["蜮", "有靦面目", "反侧"]
    ],
    annotations: [
      ["孔艰，居心险恶。暴，名或其党。"],
      ["唁我，吊问我。不我可，不肯与我相善。"],
      ["陈，堂下道路。言其过门而不见。"],
      ["飘风，暴风。祇，只。"],
      ["遑舍，无暇停留。脂尔车，给车上油。盱，久望。"],
      ["易，平释。祇，安心。"],
      ["埙、篪，乐器。及尔如贯，言旧交亲密如贯串。三物，盟誓所用牺牲。"],
      ["蜮，短狐一类害物。有靦面目，尚有脸面。反侧，反覆不定。"]
    ],
    translation: [
      "那到底是什么人，心肠竟如此险恶？为什么经过我的鱼梁，却不肯进我的门？他究竟跟从的是谁？我只敢说，怕是跟着那个暴者而来。",
      "那两个人同行，到底是谁给我招来这场祸患？为什么经过我的鱼梁，却不进来慰问我？从前的情分已经不同于今日了，如今他竟说与我不相容。",
      "那到底是什么人，为什么走过我门内的道路？我只听见他的声音，却见不到他的身影。他竟这样不愧于人，也不畏于天。",
      "那到底是什么人，简直像一阵飘风。为什么不从北来，也不从南来，偏偏要经过我的鱼梁，只为了搅乱我的心？",
      "你若慢慢走，竟也说无暇停留；你若急急赶路，却还有工夫去给车轴上油。若你哪怕来我这里一次，我何至于这样久久相望？",
      "你若回来时肯进门，我的心便能安稳；回来却不入门，你的心意就更难懂了。只要你真肯来我这里一次，也足以让我安心。",
      "从前伯氏吹埙，仲氏吹篪，我与你的情分曾经像一串贯穿的珠玉。若你竟真不懂我，我也只好摆出盟誓之物，对你发誓明心。",
      "若你是鬼魅蜮怪，倒也还罢了；偏偏你明明长着人的面目，却对人薄情到这种地步。我写下这首诗，就是要把你那反覆无常的心肠揭到尽头。"
    ]
  },
  {
    id: "xiang-bo",
    chapter: "小雅·小旻之什",
    title: "巷伯",
    orderLabel: "第二百首",
    lines: [
      "萋兮斐兮，成是贝锦。彼谮人者，亦已大甚。",
      "哆兮侈兮，成是南箕。彼谮人者，谁适与谋。",
      "缉缉翩翩，谋欲谮人。慎尔言也，谓尔不信。",
      "捷捷幡幡，谋欲谮言。岂不尔受，既其女迁。",
      "骄人好好，劳人草草。苍天苍天，视彼骄人，矜此劳人。",
      "彼谮人者，谁适与谋。取彼谮人，投畀豺虎。豺虎不食，投畀有北。有北不受，投畀有昊。",
      "杨园之道，猗于亩丘。寺人孟子，作为此诗。凡百君子，敬而听之。"
    ],
    phonetics: [
      line("萋兮斐兮，成是贝锦。彼谮人者，亦已大甚。", "qi xi fei xi, cheng shi bei jin. bi zen ren zhe, yi yi da shen."),
      line("哆兮侈兮，成是南箕。彼谮人者，谁适与谋。", "chi xi chi xi, cheng shi nan ji. bi zen ren zhe, shui shi yu mou."),
      line("缉缉翩翩，谋欲谮人。慎尔言也，谓尔不信。", "ji ji pian pian, mou yu zen ren. shen er yan ye, wei er bu xin."),
      line("捷捷幡幡，谋欲谮言。岂不尔受，既其女迁。", "jie jie fan fan, mou yu zen yan. qi bu er shou, ji qi nv qian."),
      line("骄人好好，劳人草草。苍天苍天，视彼骄人，矜此劳人。", "jiao ren hao hao, lao ren cao cao. cang tian cang tian, shi bi jiao ren, jin ci lao ren."),
      line("彼谮人者，谁适与谋。取彼谮人，投畀豺虎。豺虎不食，投畀有北。有北不受，投畀有昊。", "bi zen ren zhe, shui shi yu mou. qu bi zen ren, tou bi chai hu. chai hu bu shi, tou bi you bei. you bei bu shou, tou bi you hao."),
      line("杨园之道，猗于亩丘。寺人孟子，作为此诗。凡百君子，敬而听之。", "yang yuan zhi dao, yi yu mu qiu. si ren meng zi, zuo wei ci shi. fan bai jun zi, jing er ting zhi.")
    ],
    annotationTargets: [
      ["萋兮斐兮", "贝锦"],
      ["南箕", "谁适与谋"],
      ["缉缉翩翩", "不信"],
      ["捷捷幡幡", "女迁"],
      ["草草", "矜此劳人"],
      ["投畀豺虎", "有北", "有昊"],
      ["猗于亩丘", "寺人孟子"]
    ],
    annotations: [
      ["萋斐，文采杂错。贝锦，以贝织锦，比谗言能饰非成是。"],
      ["南箕，箕宿，言歪曲成形。谁适与谋，谁替他们筹划。"],
      ["缉缉翩翩，多言貌。不信，反使人觉得不可信。"],
      ["捷捷幡幡，轻巧反覆貌。女迁，反害到你自身。"],
      ["草草，劳苦憔悴。矜，怜悯。"],
      ["投畀，扔给。有北，北方荒远之地。有昊，苍天。"],
      ["猗于亩丘，靠近田亩高丘。寺人孟子，诗作者自称。"]
    ],
    translation: [
      "几缕杂色纹理，竟也被说成了贝锦。那些谮害别人的人，实在做得太过分了。",
      "几条散乱的线条，竟也被说成了南箕。那些谮害别人的人，到底是谁替他们谋划的？",
      "他们喋喋不休，来回奔走，只想着用谗言害人。可要小心你们的言辞啊，到头来只会让人认定你们不可信。",
      "他们机巧反覆，只想着编造谮言。如今或许会有人受用，可到了后来，这祸患终究还是会转回你们自己身上。",
      "骄横的人洋洋得意，劳苦的人却困顿不堪。苍天啊苍天，看看那些骄人，也请怜悯这些受苦的人。",
      "那些谮害人的人，到底是谁在替他们筹谋？我真想把这些谮人投给豺狼虎豹；若豺狼虎豹都不肯吃他们，就把他们放逐到北方荒远之地；若北方也不肯容纳，就只好把他们交给上天去裁断。",
      "杨园的小路，靠近田亩高丘。寺人孟子写下了这首诗。凡是众位君子，都请恭敬地听一听它。"
    ]
  }
];
