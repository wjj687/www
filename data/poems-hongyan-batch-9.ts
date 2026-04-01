import type { Poem, PoemPhoneticSegment } from "@/data/poems";

function p(text: string, pinyin?: string): PoemPhoneticSegment {
  return { text, pinyin };
}

function line(text: string, pinyin: string): PoemPhoneticSegment[] {
  return [p(text, pinyin)];
}

export const hongYanBatchPoems9: Poem[] = [
  {
    id: "he-ming",
    chapter: "小雅·鸿雁之什",
    title: "鹤鸣",
    orderLabel: "第一百八十四首",
    lines: [
      "鹤鸣于九皋，声闻于野。",
      "鱼潜在渊，或在于渚。",
      "乐彼之园，爰有树檀，其下维蘀。",
      "它山之石，可以为错。",
      "鹤鸣于九皋，声闻于天。",
      "鱼在于渚，或潜在渊。",
      "乐彼之园，爰有树檀，其下维谷。",
      "它山之石，可以攻玉。"
    ],
    phonetics: [
      line("鹤鸣于九皋，声闻于野。", "he ming yu jiu gao, sheng wen yu ye."),
      line("鱼潜在渊，或在于渚。", "yu qian zai yuan, huo zai yu zhu."),
      line("乐彼之园，爰有树檀，其下维蘀。", "le bi zhi yuan, yuan you shu tan, qi xia wei tuo."),
      line("它山之石，可以为错。", "ta shan zhi shi, ke yi wei cuo."),
      line("鹤鸣于九皋，声闻于天。", "he ming yu jiu gao, sheng wen yu tian."),
      line("鱼在于渚，或潜在渊。", "yu zai yu zhu, huo qian zai yuan."),
      line("乐彼之园，爰有树檀，其下维谷。", "le bi zhi yuan, yuan you shu tan, qi xia wei gu."),
      line("它山之石，可以攻玉。", "ta shan zhi shi, ke yi gong yu.")
    ],
    annotationTargets: [
      ["九皋", "声闻于野"],
      ["渊", "渚"],
      ["爰", "蘀"],
      ["为错"],
      ["声闻于天"],
      ["渚", "潜在渊"],
      ["谷"],
      ["攻玉"]
    ],
    annotations: [
      ["九皋，深远的泽地。言鹤居幽远，而鸣声可达原野。"],
      ["渊，深水。渚，水中小洲。写鱼之出处不一。"],
      ["爰，于是。蘀，树木脱落的叶。"],
      ["错，砺石，用以磨治器物。"],
      ["声闻于天，极言其声高远。"],
      ["承上章而变化句法，写水中生物往来潜见。"],
      ["谷，木根之间或山谷之处。"],
      ["攻玉，琢磨玉器，喻取他山之善以成己。"]
    ],
    translation: [
      "白鹤在深泽中鸣叫，声音却远远传到了原野。",
      "鱼儿有的潜在深渊里，有的游到了水洲边。",
      "那座可爱的园子里，长着檀树，树下落满了叶子。",
      "别的山上的石头，可以拿来磨治器物。",
      "白鹤在深泽中鸣叫，声音甚至仿佛传到了高天。",
      "鱼儿有的停在水洲，有的又潜回深渊。",
      "那座可爱的园子里，长着檀树，树下是深深的幽处。",
      "别的山上的石头，可以用来琢磨美玉。"
    ]
  },
  {
    id: "qi-fu",
    chapter: "小雅·鸿雁之什",
    title: "祈父",
    orderLabel: "第一百八十五首",
    lines: [
      "祈父！予王之爪牙，胡转予于恤？靡所止居。",
      "祈父！予王之爪士，胡转予于恤？靡所厎止。",
      "祈父！亶不聪，胡转予于恤？有母之尸饔。"
    ],
    phonetics: [
      line("祈父！予王之爪牙，胡转予于恤？靡所止居。", "qi fu! yu wang zhi zhao ya, hu zhuan yu yu xu? mi suo zhi ju."),
      line("祈父！予王之爪士，胡转予于恤？靡所厎止。", "qi fu! yu wang zhi zhao shi, hu zhuan yu yu xu? mi suo di zhi."),
      line("祈父！亶不聪，胡转予于恤？有母之尸饔。", "qi fu! dan bu cong, hu zhuan yu yu xu? you mu zhi shi yong.")
    ],
    annotationTargets: [
      ["祈父", "爪牙", "恤"],
      ["爪士", "厎止"],
      ["亶不聪", "尸饔"]
    ],
    annotations: [
      ["祈父，掌军旅之官。爪牙，喻武臣。恤，忧劳、艰苦之事。"],
      ["爪士，犹言武士。厎止，安顿休止。"],
      ["亶，诚也。尸饔，主炊事，言家中老母独自操持饮食。"]
    ],
    translation: [
      "祈父啊！我是天子的武臣，为何还把我转去担当这样的忧劳之役，连个安身的地方都没有？",
      "祈父啊！我是天子的武士，为何还把我推到这样的艰苦里，连歇脚之处都难得？",
      "祈父啊！你实在不算明察，为何还把我推到这样的忧患中？家里只有母亲独自操持炊食。"
    ]
  },
  {
    id: "bai-ju-xiaoya",
    chapter: "小雅·鸿雁之什",
    title: "白驹",
    orderLabel: "第一百八十六首",
    lines: [
      "皎皎白驹，食我场苗。絷之维之，以永今朝。所谓伊人，于焉逍遥。",
      "皎皎白驹，食我场藿。絷之维之，以永今夕。所谓伊人，于焉嘉客。",
      "皎皎白驹，贲然来思。尔公尔侯，逸豫无期。慎尔优游，勉尔遁思。",
      "皎皎白驹，在彼空谷。生刍一束，其人如玉。毋金玉尔音，而有遐心。"
    ],
    phonetics: [
      line("皎皎白驹，食我场苗。絷之维之，以永今朝。所谓伊人，于焉逍遥。", "jiao jiao bai ju, shi wo chang miao. zhi zhi wei zhi, yi yong jin zhao. suo wei yi ren, yu yan xiao yao."),
      line("皎皎白驹，食我场藿。絷之维之，以永今夕。所谓伊人，于焉嘉客。", "jiao jiao bai ju, shi wo chang huo. zhi zhi wei zhi, yi yong jin xi. suo wei yi ren, yu yan jia ke."),
      line("皎皎白驹，贲然来思。尔公尔侯，逸豫无期。慎尔优游，勉尔遁思。", "jiao jiao bai ju, ben ran lai si. er gong er hou, yi yu wu qi. shen er you you, mian er dun si."),
      line("皎皎白驹，在彼空谷。生刍一束，其人如玉。毋金玉尔音，而有遐心。", "jiao jiao bai ju, zai bi kong gu. sheng chu yi shu, qi ren ru yu. wu jin yu er yin, er you xia xin.")
    ],
    annotationTargets: [
      ["白驹", "絷之维之", "逍遥"],
      ["场藿", "嘉客"],
      ["贲然", "遁思"],
      ["空谷", "毋金玉尔音", "遐心"]
    ],
    annotations: [
      ["白驹，比贤者。絷之维之，系住留之。逍遥，安闲自得。"],
      ["藿，豆叶。嘉客，珍贵可敬之客。"],
      ["贲然，光采盛貌。遁思，退隐远去之意。"],
      ["空谷，深谷。毋金玉尔音，谓莫爱惜言语。遐心，远去之心。"]
    ],
    translation: [
      "洁白的骏马在吃我场上的苗草，把它系住留住，好让今天更长一些。那位我所思念的人啊，正在这里悠然停留。",
      "洁白的骏马在吃我场上的豆叶，把它系住留住，好让今夜更长一些。那位我所思念的人啊，正是这里最珍贵的嘉宾。",
      "洁白的骏马光采照人地来到这里。你若做公侯，也不要无尽安逸；还请慎重你的游乐，也请克制远遁之心。",
      "洁白的骏马停在那深谷里，一束新草，衬得其人如玉。不要吝惜你的音讯，却又怀着远去之心。"
    ]
  },
  {
    id: "huang-niao-xiaoya",
    chapter: "小雅·鸿雁之什",
    title: "黄鸟",
    orderLabel: "第一百八十七首",
    lines: [
      "黄鸟黄鸟，无集于谷，无啄我粟。此邦之人，不我肯谷。言旋言归，复我邦族。",
      "黄鸟黄鸟，无集于桑，无啄我粱。此邦之人，不可与明。言旋言归，复我诸兄。",
      "黄鸟黄鸟，无集于栩，无啄我黍。此邦之人，不可与处。言旋言归，复我诸父。"
    ],
    phonetics: [
      line("黄鸟黄鸟，无集于谷，无啄我粟。此邦之人，不我肯谷。言旋言归，复我邦族。", "huang niao huang niao, wu ji yu gu, wu zhuo wo su. ci bang zhi ren, bu wo ken gu. yan xuan yan gui, fu wo bang zu."),
      line("黄鸟黄鸟，无集于桑，无啄我粱。此邦之人，不可与明。言旋言归，复我诸兄。", "huang niao huang niao, wu ji yu sang, wu zhuo wo liang. ci bang zhi ren, bu ke yu ming. yan xuan yan gui, fu wo zhu xiong."),
      line("黄鸟黄鸟，无集于栩，无啄我黍。此邦之人，不可与处。言旋言归，复我诸父。", "huang niao huang niao, wu ji yu xu, wu zhuo wo shu. ci bang zhi ren, bu ke yu chu. yan xuan yan gui, fu wo zhu fu.")
    ],
    annotationTargets: [
      ["谷", "不我肯谷", "邦族"],
      ["与明", "诸兄"],
      ["栩", "诸父"]
    ],
    annotations: [
      ["谷，善养之意。不我肯谷，言不肯善待我。邦族，同族之人。"],
      ["与明，明白相处、共事。诸兄，诸位兄长。"],
      ["栩，柞树一类。诸父，父执辈宗亲。"]
    ],
    translation: [
      "黄鸟啊黄鸟，不要落在谷树上，也不要来啄食我的粟米。这个地方的人，并不肯善待我。我要回去，我要回去，回到我的宗族那里。",
      "黄鸟啊黄鸟，不要落在桑树上，也不要来啄食我的高粱。这个地方的人，不值得与之共明事理。我要回去，我要回去，回到我的诸位兄长那里。",
      "黄鸟啊黄鸟，不要落在栩树上，也不要来啄食我的黍米。这个地方的人，不值得同处相依。我要回去，我要回去，回到我的诸位父执宗亲那里。"
    ]
  },
  {
    id: "wo-xing-qi-ye",
    chapter: "小雅·鸿雁之什",
    title: "我行其野",
    orderLabel: "第一百八十八首",
    lines: [
      "我行其野，蔽芾其樗。昏姻之故，言就尔居。尔不我畜，复我邦家。",
      "我行其野，言采其蓫。昏姻之故，言就尔宿。尔不我畜，言归斯复。",
      "我行其野，言采其葍。不思旧姻，求尔新特。成不以富，亦祗以异。"
    ],
    phonetics: [
      line("我行其野，蔽芾其樗。昏姻之故，言就尔居。尔不我畜，复我邦家。", "wo xing qi ye, bi fei qi chu. hun yin zhi gu, yan jiu er ju. er bu wo xu, fu wo bang jia."),
      line("我行其野，言采其蓫。昏姻之故，言就尔宿。尔不我畜，言归斯复。", "wo xing qi ye, yan cai qi zhu. hun yin zhi gu, yan jiu er su. er bu wo xu, yan gui si fu."),
      line("我行其野，言采其葍。不思旧姻，求尔新特。成不以富，亦祗以异。", "wo xing qi ye, yan cai qi fu. bu si jiu yin, qiu er xin te. cheng bu yi fu, yi zhi yi yi.")
    ],
    annotationTargets: [
      ["蔽芾", "樗", "不我畜"],
      ["蓫", "就尔宿"],
      ["葍", "新特", "祗以异"]
    ],
    annotations: [
      ["蔽芾，草木盛貌。樗，臭椿。畜，容纳、爱养。"],
      ["蓫，草名。就尔宿，指因婚姻来到你这里过夜安居。"],
      ["葍，草名。新特，新配偶。祗以异，只是因为心意变了。"]
    ],
    translation: [
      "我走在郊野里，看到枝叶繁茂的樗树。因为婚姻的缘故，我才来到你这里安居；可你并不肯容纳我，于是我只得回到自己的故乡家门。",
      "我走在郊野里，顺手采着野草。因为婚姻的缘故，我才来到你这里栖宿；可你并不肯接纳我，那么我只好转身回去。",
      "我走在郊野里，又采着别的野草。你不念旧日的婚姻，却去寻求新的配偶；这并不是因为她更富贵，不过只是你变了心。"
    ]
  },
  {
    id: "si-gan",
    chapter: "小雅·鸿雁之什",
    title: "斯干",
    orderLabel: "第一百八十九首",
    lines: [
      "秩秩斯干，幽幽南山。如竹苞矣，如松茂矣。兄及弟矣，式相好矣，无相犹矣。",
      "似续妣祖，筑室百堵。西南其户，爰居爰处，爰笑爰语。",
      "约之阁阁，椓之橐橐。风雨攸除，鸟鼠攸去，君子攸宇。",
      "如跂斯翼，如矢斯棘。如鸟斯革，如翚斯飞。君子攸跻。",
      "殖殖其庭，有觉其楹。哙哙其正，哕哕其冥。君子攸宁。",
      "下莞上簟，乃安斯寝。乃寝乃兴，乃占我梦。吉梦维何？维熊维罴，维虺维蛇。",
      "大人占之，维熊维罴，男子之祥。维虺维蛇，女子之祥。",
      "乃生男子，载寝之床。载衣之裳，载弄之璋。其泣喤喤，朱芾斯皇，室家君王。",
      "乃生女子，载寝之地。载衣之裼，载弄之瓦。无非无仪，唯酒食是议，无父母诒罹。"
    ],
    phonetics: [
      line("秩秩斯干，幽幽南山。如竹苞矣，如松茂矣。兄及弟矣，式相好矣，无相犹矣。", "zhi zhi si gan, you you nan shan. ru zhu bao yi, ru song mao yi. xiong ji di yi, shi xiang hao yi, wu xiang you yi."),
      line("似续妣祖，筑室百堵。西南其户，爰居爰处，爰笑爰语。", "si xu bi zu, zhu shi bai du. xi nan qi hu, yuan ju yuan chu, yuan xiao yuan yu."),
      line("约之阁阁，椓之橐橐。风雨攸除，鸟鼠攸去，君子攸宇。", "yue zhi ge ge, zhuo zhi tuo tuo. feng yu you chu, niao shu you qu, jun zi you yu."),
      line("如跂斯翼，如矢斯棘。如鸟斯革，如翚斯飞。君子攸跻。", "ru qi si yi, ru shi si ji. ru niao si ge, ru hui si fei. jun zi you ji."),
      line("殖殖其庭，有觉其楹。哙哙其正，哕哕其冥。君子攸宁。", "zhi zhi qi ting, you jue qi ying. kuai kuai qi zheng, hui hui qi ming. jun zi you ning."),
      line("下莞上簟，乃安斯寝。乃寝乃兴，乃占我梦。吉梦维何？维熊维罴，维虺维蛇。", "xia guan shang dian, nai an si qin. nai qin nai xing, nai zhan wo meng. ji meng wei he? wei xiong wei pi, wei hui wei she."),
      line("大人占之，维熊维罴，男子之祥。维虺维蛇，女子之祥。", "da ren zhan zhi, wei xiong wei pi, nan zi zhi xiang. wei hui wei she, nv zi zhi xiang."),
      line("乃生男子，载寝之床。载衣之裳，载弄之璋。其泣喤喤，朱芾斯皇，室家君王。", "nai sheng nan zi, zai qin zhi chuang. zai yi zhi shang, zai nong zhi zhang. qi qi huang huang, zhu fu si huang, shi jia jun wang."),
      line("乃生女子，载寝之地。载衣之裼，载弄之瓦。无非无仪，唯酒食是议，无父母诒罹。", "nai sheng nv zi, zai qin zhi di. zai yi zhi ti, zai nong zhi wa. wu fei wu yi, wei jiu shi shi yi, wu fu mu yi li.")
    ],
    annotationTargets: [
      ["秩秩", "式相好", "无相犹"],
      ["似续妣祖", "百堵"],
      ["阁阁", "橐橐", "攸宇"],
      ["如翚斯飞", "攸跻"],
      ["有觉其楹", "攸宁"],
      ["莞", "簟", "维熊维罴", "维虺维蛇"],
      ["占之", "男子之祥", "女子之祥"],
      ["弄之璋", "朱芾斯皇"],
      ["弄之瓦", "诒罹"]
    ],
    annotations: [
      ["秩秩，水流有次序之貌。相犹，相欺凌。"],
      ["似续，继承。妣祖，先妣先祖。百堵，言屋宇广大。"],
      ["阁阁、橐橐，皆言治木筑室之声。攸宇，所居之屋。"],
      ["翚，雉类五彩鸟。攸跻，所登之堂阶。"],
      ["觉，高大貌。楹，堂柱。攸宁，得其安宁。"],
      ["莞、簟，皆寝席。熊罴、虺蛇，皆梦象。"],
      ["占之，占梦。古人以熊罴为生男之祥，以虺蛇为生女之祥。"],
      ["璋，玉器。朱芾，诸侯以上所服蔽膝。"],
      ["瓦，纺砖，借指女工。诒罹，遗忧。"]
    ],
    translation: [
      "溪水有条不紊地流着，南山幽深而安稳。新屋像竹子那样成束，像松树那样繁茂。兄弟们彼此和好，不再互相猜忌。",
      "这是在承续祖先的事业，筑起成百的屋墙。门户朝向西南，于是大家在这里居住、生活、谈笑。",
      "整治木料时声响整齐，斫木筑屋时咚咚有声。风雨可以挡在外面，鸟鼠也不来侵扰，这里成了君子安居的房舍。",
      "屋形像鸟举翼，像箭一般端直，像鸟儿换羽，又像锦雉将飞。君子便由此登堂入室。",
      "庭院平正，堂柱高大端整；正室宽敞，深处也布置得井井有条。君子在这里得以安宁。",
      "下铺莞席，上陈竹簟，于是安然就寝。睡下又醒来，于是占问所做的梦。那吉梦是什么呢？是梦见熊罴，也梦见虺蛇。",
      "让高明的人来占，这梦见熊罴，是生男子的吉兆；梦见虺蛇，是生女子的吉兆。",
      "若生的是男孩，就让他睡在床上，给他穿上衣裳，让他把玩玉璋。他哭声洪亮，将来可以佩着朱芾，成为一家之主。",
      "若生的是女孩，就让她睡在地上，给她穿上婴儿的衣服，让她把玩纺砖。只要没有过失失仪，将来能料理酒食，不给父母添忧。"
    ]
  },
  {
    id: "wu-yang",
    chapter: "小雅·鸿雁之什",
    title: "无羊",
    orderLabel: "第一百九十首",
    lines: [
      "谁谓尔无羊？三百维群。谁谓尔无牛？九十其犉。",
      "尔羊来思，其角濈濈。尔牛来思，其耳湿湿。",
      "或降于阿，或饮于池。或寝或讹，尔牧来思。",
      "何蓑何笠，或负其糇。三十维物，尔牲则具。",
      "尔牧来思，以薪以蒸。以雌以雄，尔羊来思。",
      "矜矜兢兢，不骞不崩。麾之以肱，毕来既升。",
      "牧人乃梦，众维鱼矣。旐维旟矣，大人占之。",
      "众维鱼矣，实维丰年。旐维旟矣，室家溱溱。"
    ],
    phonetics: [
      line("谁谓尔无羊？三百维群。谁谓尔无牛？九十其犉。", "shui wei er wu yang? san bai wei qun. shui wei er wu niu? jiu shi qi chun."),
      line("尔羊来思，其角濈濈。尔牛来思，其耳湿湿。", "er yang lai si, qi jiao ji ji. er niu lai si, qi er shi shi."),
      line("或降于阿，或饮于池。或寝或讹，尔牧来思。", "huo jiang yu e, huo yin yu chi. huo qin huo e, er mu lai si."),
      line("何蓑何笠，或负其糇。三十维物，尔牲则具。", "he suo he li, huo fu qi hou. san shi wei wu, er sheng ze ju."),
      line("尔牧来思，以薪以蒸。以雌以雄，尔羊来思。", "er mu lai si, yi xin yi zheng. yi ci yi xiong, er yang lai si."),
      line("矜矜兢兢，不骞不崩。麾之以肱，毕来既升。", "jin jin jing jing, bu qian bu beng. hui zhi yi gong, bi lai ji sheng."),
      line("牧人乃梦，众维鱼矣。旐维旟矣，大人占之。", "mu ren nai meng, zhong wei yu yi. zhao wei yu yi, da ren zhan zhi."),
      line("众维鱼矣，实维丰年。旐维旟矣，室家溱溱。", "zhong wei yu yi, shi wei feng nian. zhao wei yu yi, shi jia zhen zhen.")
    ],
    annotationTargets: [
      ["三百维群", "九十其犉"],
      ["濈濈", "湿湿"],
      ["阿", "讹"],
      ["糇", "三十维物"],
      ["以薪以蒸"],
      ["不骞不崩", "麾之以肱"],
      ["众维鱼", "旐维旟"],
      ["丰年", "室家溱溱"]
    ],
    annotations: [
      ["犉，黄牛。言牛羊之盛。"],
      ["濈濈，角聚集貌。湿湿，耳动貌。"],
      ["阿，山曲。讹，嬉戏。"],
      ["糇，干粮。三十维物，牲畜毛色种类齐备。"],
      ["薪、蒸，皆言煮食之具备。"],
      ["骞、崩，皆失群散乱之状。麾之以肱，挥臂而驱。"],
      ["鱼、旟皆为吉梦。大人，占梦者。"],
      ["溱溱，众多繁盛之貌。"]
    ],
    translation: [
      "谁说你没有羊？足有三百成群。谁说你没有牛？还有九十头壮实的黄牛。",
      "你的羊走来时，羊角一簇簇紧密排列；你的牛走来时，两耳润泽而灵动。",
      "有的下到山坡边，有的来到池边饮水；有的卧着休息，有的自在嬉游，牧人就这样照看着它们。",
      "有人披着蓑衣戴着斗笠，有人背着干粮随行。三十种毛色品类齐备，你的祭牲已经准备周全。",
      "牧人走来，烧火蒸煮，雌雄也都分辨清楚；你的羊群来到这里，井然有序。",
      "牧人小心谨慎，不使牛羊奔散跌乱；只消挥动手臂，它们便全都归拢上来。",
      "牧人于是做了梦，梦见一大群鱼，又梦见旗旐高扬，让懂占梦的人来占断它。",
      "梦见群鱼，实在是丰年的征兆；梦见旗旐高举，也是家门人口兴盛的吉兆。"
    ]
  }
];
