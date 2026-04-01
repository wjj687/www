import type { Poem, PoemPhoneticSegment } from "@/data/poems";

function p(text: string, pinyin?: string): PoemPhoneticSegment {
  return { text, pinyin };
}

function line(text: string, pinyin: string): PoemPhoneticSegment[] {
  return [p(text, pinyin)];
}

export const baiHuaBatchPoems7: Poem[] = [
  {
    id: "di-du-xiaoya",
    chapter: "小雅·鹿鸣之什",
    title: "杕杜",
    orderLabel: "第一百六十九首",
    lines: ["有杕之杜，有睆其实。", "王事靡盬，继嗣我日。", "有杕之杜，其叶萋萋。", "王事靡盬，我心伤悲。", "卉木萋止，女心悲止。", "征夫归止。"],
    phonetics: [line("有杕之杜，有睆其实。", "you di zhi du, you huan qi shi."), line("王事靡盬，继嗣我日。", "wang shi mi gu, ji si wo ri."), line("有杕之杜，其叶萋萋。", "you di zhi du, qi ye qi qi."), line("王事靡盬，我心伤悲。", "wang shi mi gu, wo xin shang bei."), line("卉木萋止，女心悲止。", "hui mu qi zhi, nv xin bei zhi."), line("征夫归止。", "zheng fu gui zhi.")],
    annotationTargets: [["杕杜", "睆其实"], ["继嗣我日"], ["萋萋"], ["靡盬"], ["卉木萋止"], ["归止"]],
    annotations: [["杕杜，独生之赤棠。睆其实，果实鲜明貌。"], ["继嗣我日，言日日相继，无穷无尽。"], ["萋萋，草木茂盛貌。"], ["靡盬，言王事没有停歇。"], ["卉木萋止，时令已盛。"], ["归止，盼征夫归来。"]],
    translation: ["那孤生的赤棠树上，果实已经鲜明累累。", "王家的征事却没有停息，一天天接连不断。", "那孤立的赤棠树上，叶子已经长得繁茂。", "王事仍没有尽头，我心里只觉伤悲。", "草木都已经茂盛起来，你心中也更加悲伤。", "只盼征夫早日归来。"]
  },
  {
    id: "yu-li",
    chapter: "小雅·白华之什",
    title: "鱼丽",
    orderLabel: "第一百七十首",
    lines: ["鱼丽于罶，鲿鲨。", "君子有酒，旨且多。", "鱼丽于罶，鲂鳢。", "君子有酒，多且旨。", "鱼丽于罶，鰋鲤。", "君子有酒，旨且有。"],
    phonetics: [line("鱼丽于罶，鲿鲨。", "yu li yu liu, chang sha."), line("君子有酒，旨且多。", "jun zi you jiu, zhi qie duo."), line("鱼丽于罶，鲂鳢。", "yu li yu liu, fang li."), line("君子有酒，多且旨。", "jun zi you jiu, duo qie zhi."), line("鱼丽于罶，鰋鲤。", "yu li yu liu, yan li."), line("君子有酒，旨且有。", "jun zi you jiu, zhi qie you.")],
    annotationTargets: [["鱼丽于罶", "鲿鲨"], ["旨且多"], ["鲂鳢"], ["多且旨"], ["鰋鲤"], ["旨且有"]],
    annotations: [["丽，附也。罶，捕鱼竹器。鲿、鲨，鱼名。"], ["旨且多，酒味美而且丰足。"], ["鲂、鳢，鱼名。"], ["多且旨，与上句互文见富。"], ["鰋、鲤，鱼名。"], ["有，富足不乏。"]],
    translation: ["鱼儿进了鱼篓，里头有鲿鱼和鲨鱼。", "君子备下美酒，味道香醇而且丰多。", "鱼儿进了鱼篓，里头又有鳊鱼和鳢鱼。", "君子备下美酒，丰盛又甘美。", "鱼儿进了鱼篓，里头还有鰋鱼和鲤鱼。", "君子备下美酒，既甘美又充足。"]
  },
  {
    id: "nan-you-jia-yu",
    chapter: "小雅·白华之什",
    title: "南有嘉鱼",
    orderLabel: "第一百七十一首",
    lines: ["南有嘉鱼，烝然罩罩。", "君子有酒，嘉宾式燕以乐。", "南有樛木，甘瓠累之。", "君子有酒，嘉宾式燕绥之。", "翩翩者鵻，烝然来思。", "君子有酒，嘉宾式燕又思。"],
    phonetics: [line("南有嘉鱼，烝然罩罩。", "nan you jia yu, zheng ran zhao zhao."), line("君子有酒，嘉宾式燕以乐。", "jun zi you jiu, jia bin shi yan yi le."), line("南有樛木，甘瓠累之。", "nan you jiu mu, gan hu lei zhi."), line("君子有酒，嘉宾式燕绥之。", "jun zi you jiu, jia bin shi yan sui zhi."), line("翩翩者鵻，烝然来思。", "pian pian zhe zhui, zheng ran lai si."), line("君子有酒，嘉宾式燕又思。", "jun zi you jiu, jia bin shi yan you si.")],
    annotationTargets: [["嘉鱼", "罩罩"], ["式燕以乐"], ["樛木", "甘瓠累之"], ["绥之"], ["鵻", "来思"], ["又思"]],
    annotations: [["嘉鱼，美鱼。罩罩，入网聚集貌。"], ["式燕，设燕。乐，欢乐。"], ["樛木，下曲之木。甘瓠，瓠瓜。累，附著。"], ["绥，安也。"], ["鵻，鸟名。来思，纷然来集。"], ["又思，反复尽意相留。"]],
    translation: ["南方有美鱼，成群地聚在网中。", "君子备有美酒，设宴让嘉宾尽情欢乐。", "南方有枝条下垂的树，甘瓠攀附其上。", "君子备有美酒，设宴使嘉宾安然舒畅。", "那轻盈飞来的鵻鸟，也成群结队地来到这里。", "君子备有美酒，设宴款待嘉宾，又反复思量如何留住他们。"]
  },
  {
    id: "nan-shan-you-tai",
    chapter: "小雅·白华之什",
    title: "南山有台",
    orderLabel: "第一百七十二首",
    lines: ["南山有台，北山有莱。", "乐只君子，邦家之基。", "南山有桑，北山有杨。", "乐只君子，邦家之光。", "南山有杞，北山有李。", "乐只君子，民之父母。"],
    phonetics: [line("南山有台，北山有莱。", "nan shan you tai, bei shan you lai."), line("乐只君子，邦家之基。", "le zhi jun zi, bang jia zhi ji."), line("南山有桑，北山有杨。", "nan shan you sang, bei shan you yang."), line("乐只君子，邦家之光。", "le zhi jun zi, bang jia zhi guang."), line("南山有杞，北山有李。", "nan shan you qi, bei shan you li."), line("乐只君子，民之父母。", "le zhi jun zi, min zhi fu mu.")],
    annotationTargets: [["台", "莱"], ["邦家之基"], ["桑", "杨"], ["邦家之光"], ["杞", "李"], ["民之父母"]],
    annotations: [["台、莱，草木名。"], ["基，根基。"], ["桑、杨，树名。"], ["光，光辉。"], ["杞、李，木名。"], ["民之父母，谓仁爱百姓。"]],
    translation: ["南山上有薹草，北山上有藜草。", "那可亲可敬的君子，是国家的根基。", "南山有桑树，北山有杨树。", "那可亲可敬的君子，是国家的光辉。", "南山有杞树，北山有李树。", "那可亲可敬的君子，是百姓的父母。"]
  },
  {
    id: "liao-xiao",
    chapter: "小雅·白华之什",
    title: "蓼萧",
    orderLabel: "第一百七十三首",
    lines: ["蓼彼萧斯，零露湑兮。", "既见君子，我心写兮。", "燕笑语兮，是以有誉处兮。", "既见君子，孔燕岂弟。", "既见君子，鞗革忡忡。", "和鸾雍雍，万福攸同。"],
    phonetics: [line("蓼彼萧斯，零露湑兮。", "liao bi xiao si, ling lu xu xi."), line("既见君子，我心写兮。", "ji jian jun zi, wo xin xie xi."), line("燕笑语兮，是以有誉处兮。", "yan xiao yu xi, shi yi you yu chu xi."), line("既见君子，孔燕岂弟。", "ji jian jun zi, kong yan kai ti."), line("既见君子，鞗革忡忡。", "ji jian jun zi, tiao ge chong chong."), line("和鸾雍雍，万福攸同。", "he luan yong yong, wan fu you tong.")],
    annotationTargets: [["蓼彼萧斯", "湑兮"], ["我心写兮"], ["有誉处兮"], ["岂弟"], ["鞗革忡忡"], ["和鸾雍雍", "万福攸同"]],
    annotations: [["蓼，高貌。萧，蒿类植物。湑，露盛貌。"], ["写，舒畅。"], ["誉处，安乐而有荣誉之处。"], ["岂弟，和乐平易。"], ["鞗革，车上皮饰。忡忡，饰貌。"], ["和、鸾，车铃。雍雍，声音和谐。攸同，所聚。"]],
    translation: ["那蒿草长得高高，露珠清润地附在上头。", "既然见到了君子，我心里便舒展开来。", "大家宴饮谈笑，也因此都觉得荣光安适。", "既然见到了君子，宴饮之中和乐而平易。", "既然见到了君子，车马服饰也显得整肃盛美。", "和铃与鸾铃声声和谐，万般福祉都在这里会聚。"]
  }
];
