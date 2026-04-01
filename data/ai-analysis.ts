import { zhaoNanBatchAiAnalysisEntries } from "@/data/ai-analysis-zhaonan-batch";
import { zhaoNanBatchAiAnalysisEntries2 } from "@/data/ai-analysis-zhaonan-batch-2";
import { zhaoNanBatchAiAnalysisEntries3 } from "@/data/ai-analysis-zhaonan-batch-3";
import { beiFengBatchAiAnalysisEntries1 } from "@/data/ai-analysis-beifeng-batch-1";
import { beiFengBatchAiAnalysisEntries2 } from "@/data/ai-analysis-beifeng-batch-2";
import { beiFengBatchAiAnalysisEntries3 } from "@/data/ai-analysis-beifeng-batch-3";
import { beiFengBatchAiAnalysisEntries4 } from "@/data/ai-analysis-beifeng-batch-4";
import { beiFengBatchAiAnalysisEntries5 } from "@/data/ai-analysis-beifeng-batch-5";
import { yongFengBatchAiAnalysisEntries1 } from "@/data/ai-analysis-yongfeng-batch-1";
import { yongFengBatchAiAnalysisEntries2 } from "@/data/ai-analysis-yongfeng-batch-2";
import { weiFengBatchAiAnalysisEntries1 } from "@/data/ai-analysis-weifeng-batch-1";
import { weiFengBatchAiAnalysisEntries2 } from "@/data/ai-analysis-weifeng-batch-2";
import { wangFengBatchAiAnalysisEntries1 } from "@/data/ai-analysis-wangfeng-batch-1";
import { zhengFengBatchAiAnalysisEntries1 } from "@/data/ai-analysis-zhengfeng-batch-1";
import { zhengFengBatchAiAnalysisEntries2 } from "@/data/ai-analysis-zhengfeng-batch-2";
import { qiFengBatchAiAnalysisEntries1 } from "@/data/ai-analysis-qifeng-batch-1";
import { qiFengBatchAiAnalysisEntries2 } from "@/data/ai-analysis-qifeng-batch-2";
import { weiTangBatchAiAnalysisEntries1 } from "@/data/ai-analysis-wei-tang-batch-1";
import { tangFengBatchAiAnalysisEntries1 } from "@/data/ai-analysis-tangfeng-batch-1";
import { tangQinFengBatchAiAnalysisEntries2 } from "@/data/ai-analysis-tang-qinfeng-batch-2";
import { qinChenFengBatchAiAnalysisEntries3 } from "@/data/ai-analysis-qinfeng-chenfeng-batch-3";
import { qinChenGuiCaoFengBatchAiAnalysisEntries4 } from "@/data/ai-analysis-qinchen-gui-caofeng-batch-4";
import { binFengLuMingBatchAiAnalysisEntries5 } from "@/data/ai-analysis-binfeng-luming-batch-5";
import { luMingBaiHuaBatchAiAnalysisEntries6 } from "@/data/ai-analysis-luming-baihua-batch-6";
import { baiHuaBatchAiAnalysisEntries7 } from "@/data/ai-analysis-baihua-batch-7";
import { hongYanBatchAiAnalysisEntries8 } from "@/data/ai-analysis-hongyan-batch-8";
import { hongYanBatchAiAnalysisEntries9 } from "@/data/ai-analysis-hongyan-batch-9";
import { jieNanShanBatchAiAnalysisEntries10 } from "@/data/ai-analysis-jienanshan-batch-10";
import { xiaoMinBatchAiAnalysisEntries11 } from "@/data/ai-analysis-xiaomin-batch-11";
import { xiaoMinBatchAiAnalysisEntries12 } from "@/data/ai-analysis-xiaomin-batch-12";
import { beiShanBatchAiAnalysisEntries13 } from "@/data/ai-analysis-beishan-batch-13";
import { beiShanBatchAiAnalysisEntries14 } from "@/data/ai-analysis-beishan-batch-14";
import { sangHuBatchAiAnalysisEntries15 } from "@/data/ai-analysis-sanghu-batch-15";
import { sangHuBatchAiAnalysisEntries16 } from "@/data/ai-analysis-sanghu-batch-16";
import { douRenShiBatchAiAnalysisEntries17 } from "@/data/ai-analysis-dourenshi-batch-17";
import { wenWangBatchAiAnalysisEntries18 } from "@/data/ai-analysis-wenwang-batch-18";
import { wenWangBatchAiAnalysisEntries19 } from "@/data/ai-analysis-wenwang-batch-19";
import { shengMinBatchAiAnalysisEntries20 } from "@/data/ai-analysis-shengmin-batch-20";
import { dangBatchAiAnalysisEntries21 } from "@/data/ai-analysis-dang-batch-21";
import { dangBatchAiAnalysisEntries22 } from "@/data/ai-analysis-dang-batch-22";
import { zhouSongBatchAiAnalysisEntries23 } from "@/data/ai-analysis-zhou-song-batch-23";
import { zhouSongBatchAiAnalysisEntries24 } from "@/data/ai-analysis-zhou-song-batch-24";
import { zhouSongBatchAiAnalysisEntries25 } from "@/data/ai-analysis-zhou-song-batch-25";
import { zhouSongBatchAiAnalysisEntries26 } from "@/data/ai-analysis-zhou-song-batch-26";
import { luSongBatchAiAnalysisEntries27 } from "@/data/ai-analysis-lu-song-batch-27";
import { shangSongBatchAiAnalysisEntries28 } from "@/data/ai-analysis-shang-song-batch-28";

export type AiAnalysisSection = {
  title: string;
  paragraphs: string[];
};

export type PoemAiAnalysisEntry = {
  poemId: string;
  title: string;
  subtitle: string;
  sections: AiAnalysisSection[];
};

const aiAnalysisEntries: PoemAiAnalysisEntry[] = [
  {
    poemId: "guan-ju",
    title: "《关雎》：先有水声，然后爱情才慢慢现身",
    subtitle: "从河洲、荇菜与辗转反侧里，看《诗经》第一篇为什么耐读",
    sections: [
      {
        title: "一开口先是水声",
        paragraphs: [
          "《关雎》最妙的地方，是它并不急着写人。先有河洲，先有鸟鸣，水气薄薄地铺开，人才在这片声音后面慢慢走出来。这样的起笔很稳，像镜头先推远，再回到心事。读者还没来得及判断这是一首情诗、婚诗，还是别的什么，耳朵已经先被它牵住了。",
          "雎鸠究竟是哪一种鸟，后人争了很多年。可诗真正看重的，也许不是鸟类学上的准确，而是那种成双、和应、带一点清响的存在感。它把整首诗的底色压得很干净，不喧哗，也不轻薄。孔子后来用“乐而不淫，哀而不伤”来概括《关雎》，并不是一句悬空的评语，这种分寸，其实从第一句就已经开始了。"
        ]
      },
      {
        title: "真正动人的，是求而不得",
        paragraphs: [
          "诗往下走，情意不是一下子烧起来的。先是看见，再是想念，再是夜里翻身。'寤寐求之'和'辗转反侧'写得很老实，没有故作深沉，也没有刻意铺张。一个人喜欢上另一个人，最先失守的往往不是白天，而是夜晚。白天还能撑住，夜里就不行了。",
          "所以这首诗的力量，不在于把那位姑娘写得多么传奇，而在于它把相思写得很贴肉。'窈窕淑女'一直隔着一点距离，正因为近不得，整首诗才有了回环往复的气口。荇菜反复出现，也不是为了点缀水边风物。它更像情绪的节拍：流之、采之、芼之，事情一步一步往前走，心也一步一步往深处去。"
        ]
      },
      {
        title: "礼乐并没有把爱情写冷",
        paragraphs: [
          "很多人一看到'琴瑟友之''钟鼓乐之'，就容易把它想成一场端庄而固定的婚礼。可就这首诗自己的节奏来说，它更像是想象中的亲近，是求而得之以后心里铺开的欢悦图景。乐器在这里当然带着礼的意味，但它们并没有把爱情冻住。恰恰相反，它说明周人并不把情感和礼仪看成互相敌对的东西。情可以热，礼来收束；礼不必冷，它也可以是成全。",
          "这正是《关雎》耐读的地方。它既不是后来某些人想象中的道德标本，也不是毫无遮拦的纵情之歌。它把情欲写出来了，却没有越界；把节制写出来了，又没有伤到情意。轻一点会滑，重一点会僵，它刚好落在中间。"
        ]
      },
      {
        title: "为什么它会排在第一篇",
        paragraphs: [
          "我一直觉得，《诗经》把《关雎》放在最前面，是很有眼光的。开篇不是战争，不是祭告，不是王命，而是青年男女彼此相望。这个次序本身已经说明一件事：古人并不把人的情感看成可以绕开的东西。家要从这里起，礼也要从这里长出来。",
          "所以《关雎》并不只是写一个男子思慕一个女子。它写的是人伦最初那一下心动。先有看见，才有追求；先有追求，才有相守。河洲上的风，水上的荇菜，夜里的辗转，都是这一点心事的回声。几千年过去了，这首诗还在，是因为这种心事从来没有真正过时。"
        ]
      }
    ]
  },
  {
    poemId: "ge-tan",
    title: "《葛覃》：好日子常常不是说出来的，是做出来的",
    subtitle: "从葛藤、黄鸟与归宁前的忙乱里，看一首会发亮的劳动诗",
    sections: [
      {
        title: "一首会发亮的劳动诗",
        paragraphs: [
          "《葛覃》一开头就很亮。葛藤在山谷里蔓延，叶子一片一片铺开，黄鸟又在灌木上叫。你会发现，这首诗几乎没有阴影，它的光线是往外冒的。很多写劳作的诗容易落到辛苦、沉重、不得已，《葛覃》却不是。它把伐葛、浣衣这些事写得有声有色，像一个人一边做活，一边心里带着一阵说不出的轻快。",
          "这份轻快很重要。它告诉我们，诗里的劳动并没有被写成苦役。动作当然不轻省，可口气是明亮的。'是刈是濩，为絺为绤'，一步一步做下去，像在说眼前的活计，也像在说日子本身：麻烦是麻烦，却不苦。手上有事，心里反而安稳。"
        ]
      },
      {
        title: "衣裳背后，是一个完整的日常世界",
        paragraphs: [
          "《葛覃》很耐咂摸的地方，在于它把一条很具体的生活链条完整写了出来。葛从山谷里来，割下来，煮过，织成絺绤，最后穿到身上。今天的人习惯把衣服当成现成物件，很少再去想它从哪里开始；《葛覃》却把这一段路完整照亮了。穿衣，不只是穿衣，也是记得纤维、手工和时间，记得一件东西是怎样慢慢成形的。",
          "所以这首诗里有一种很朴素的亲近感。人并不站在自然外面。葛不是远景，鸟也不是布景，它们和人的日常缠在一起。鸟鸣让山谷更活，葛藤让衣裳有了来处，人的劳作又让这些草木真正进入生活。诗写得这么近，读者自然会觉得，山风、叶色、衣料的触感都贴到了身边。"
        ]
      },
      {
        title: "归宁之前的那一点欢喜",
        paragraphs: [
          "诗到第三章，气息忽然更活了。告师氏，理衣裳，想着回去见父母。这几句字面并不复杂，心情却非常清楚：那是一种快要出门之前的忙乱，一点点急，一点点喜，手已经在洗衣服了，心却早就先回了家。",
          "历代注家围着'师氏'、'归宁'争了很久，争到最后，常常把诗争得太硬。其实无论把主人公看作待嫁女子，还是已经出嫁将归宁的女子，有一样东西是不会变的：她心里有惦念，而且这惦念带着温度。《葛覃》真正可贵的，是它没有把这种情绪写得很重。不是涕泪横流的思亲，只是日常生活里一股往家的劲儿。正因为轻，才真。"
        ]
      },
      {
        title: "好诗不怕平常",
        paragraphs: [
          "《葛覃》没有《关雎》那样著名，也没有那么强的戏剧性。可它有另一种本事：它能把一件很平常的事写得耐看。山谷里的葛，灌木上的鸟，女人手里将洗未洗的衣服，这些都不惊人，却被它安安静静地放在了一起。一首诗若能把寻常日子写出光泽，其实很难。",
          "我喜欢《葛覃》，也正在这里。它不喊口号，不摆姿态，甚至连情绪都不肯给得太满。它只是让我们看见：在很早很早的时候，人已经知道如何在劳作里安顿自己，如何在归家的念头里获得欢喜。这样的诗读完之后，不会叫人激动很久，却会在心里留下一种很干净的暖意。"
        ]
      }
    ]
  },
  {
    poemId: "juan-er",
    title: "《卷耳》：浅筐一放下，心事就不再肯藏了",
    subtitle: "它不只写闺中怀人，也把路上的辛苦和彼此牵念一起写进了山风里",
    sections: [
      {
        title: "最先打动人的，是那一下突然停手",
        paragraphs: [
          "《卷耳》开头写采摘，本来是很轻的。卷耳长在野地，女子提着浅筐，一路采，一路走，眼前无非是草木和手里的活。偏偏就在这时候，心里那个人冒了出来，“嗟我怀人”四字一落，前面的平稳全变了。好的诗常常这样，不先架势做满，而是在最寻常的动作里，忽然露出真正的分量。",
          "我一直觉得“寘彼周行”写得极好。她不是立刻哭出来，也不是站定了长吁短叹，只是把筐子先放在大道旁边。动作很小，心事却一下全出来了。苏缨谈《卷耳》时反复提醒人，不要把它读得太薄；这话是对的。这里不是简单地“采不下去了”，而是人的精神已经离开眼前，整个人被思念牵走了一截。"
        ]
      },
      {
        title: "后三章不是添景，而是把远行的那一面也照亮",
        paragraphs: [
          "《卷耳》最耐人寻味的地方，是后面三章忽然转到了山路上。陟彼崔嵬，陟彼高冈，陟彼砠矣，山一层一层抬起来，马也一层一层疲下来。历来有人把这几章看成女子的想象，也有人索性读成行役之人的自述。钱锺书说这类写法像“双管齐下”，两头同时着笔，我觉得很有意思。《卷耳》真正厉害，正在于它不肯把相思只写成一边的苦。",
          "后面写“我仆痡矣”“我马瘏矣”，已经不是空泛的离别感了，而是把路上的重、身上的累、不能停下来的困顿都写进来了。诗里反复出现酌酒，不是宴饮的从容，倒像苦里偷出来的一点自宽：且喝一杯吧，先把这一段山路熬过去。酒没有解忧，只让人暂时站稳。于是这首诗才沉，沉得不是大喊大叫，而是两边都在忍。"
        ]
      },
      {
        title: "它写相思，却比一般相思诗更硬一点",
        paragraphs: [
          "很多人一提《卷耳》，先想到“思妇诗”，这当然不是全错，可要是只剩这一层，诗就显得太单了。本地几种赏析里，周啸天、苏缨都不约而同提到它的复杂性：前半是家中停手，后半是路上吃苦，中间并没有硬生生接缝，反而像本来就该这样连着。一个人想念另一个人，往往不是坐在屋里空想，而是连对方此刻怎样受苦也一并想到了。",
          "所以《卷耳》之好，不在句句都美得发亮，而在它真。真到什么地步？真到你能看见那只没装满的浅筐，看见山路上喘不过气来的马，看见人端起酒杯时其实并没有轻松多少。它把两地相思写成一种彼此负重的关系，这就比单纯的哀怨更深，也更耐读。"
        ]
      }
    ]
  },
  {
    poemId: "jiu-mu",
    title: "《樛木》：祝福不是一句说完的，它像藤蔓那样慢慢长满",
    subtitle: "这首诗没有故事的波折，却把婚姻里的相扶相成写得格外温厚",
    sections: [
      {
        title: "先别急着把它讲成大道理",
        paragraphs: [
          "《樛木》最容易被讲得发硬。老一套的解释总爱往“后妃逮下”“不妒”那边带，讲到后来，好像这首诗只是某种礼教样板。其实把诗本身摊开来看，它并没有那样僵。它更像婚礼旁边的一首祝辞，或者席间众人齐声送出的吉语。没有大起大落，没有人物争执，只有一种稳稳往前推的好意。",
          "这种“没什么故事”的诗，并不空。恰恰因为它不靠情节取胜，读者才会更注意声音的回环和意象的贴合。它像你在喜宴上听见的祝福话，并不惊人，却句句都往日后去。不是图一时热闹，而是愿你今后真能过得和顺、长久、有依靠。"
        ]
      },
      {
        title: "葛藟缠着樛木，画面是柔的，意思却很足",
        paragraphs: [
          "南有樛木，葛藟累之。樛木本来就低垂，葛藟又是一层一层往上缠。这个起兴太妙了，柔里带着黏，黏里又有生机。它不是那种一下子撞上来的强烈比喻，而是慢慢把两样东西挽到一起，让你自己去感受其中的合适。周啸天说这是贺婚诗，我是很信的，因为这种意象天然就带着“相依”的气息。",
          "但《樛木》的可贵，不只是把婚姻说成依附。它真正动人的地方，是这画面里没有谁压住谁。树承得住，藤也缠得住，彼此都在成全。于是这首诗没有男女对峙的火气，也没有悲欢离合的锋芒，只有一种温润的力量，像把往后很长很长的日子先轻轻说了一遍。"
        ]
      },
      {
        title: "它的祝愿不是平铺的，而是一层层加上去的",
        paragraphs: [
          "这首诗的章法很讲究。前面“累之”“荒之”“萦之”已经让画面越来越密，后面“乐只君子，福履绥之”“福履将之”“福履成之”又把祝福越送越满。先愿其安，继而愿其扶持，最后愿其有成。这不是文字游戏，而是一种很古老的表达方式：好意不是说一遍就够，越重要，越要反复说，反复说到它真的落地。",
          "所以《樛木》读到末尾，留下来的不是某个抽象道德口号，而是一种实实在在的盼望。愿你们日子和顺，愿有人相助，愿后来都成。说白了，就是这么朴素。可也正因为朴素，它才不容易过时。多少年以后再读，还是会觉得这首诗像一位长者站在席间，说话不多，句句都希望你过得好。"
        ]
      }
    ]
  },
  {
    poemId: "zhong-si",
    title: "《螽斯》：短短几章，像一串越念越热闹的吉语",
    subtitle: "虫声细碎，祝愿却很实在，这首诗把“人丁兴旺”写得一点也不板",
    sections: [
      {
        title: "它一开口，耳边先满了声音",
        paragraphs: [
          "《螽斯》篇幅不长，可第一句就把空气弄得很满。诜诜，薨薨，揖揖，这些重叠词并不是点缀，它们几乎就是全诗的一半生命。你还没来得及理出“意思”，耳边已经先有了振动，有了密密匝匝的虫羽声。这样的写法很老到，因为“多”的感觉不是靠解释给你的，而是让你先听见、先感到。",
          "《诗经》里许多重章都有音乐性，但《螽斯》尤其明显。它像一首真正会被唱出来的祝词，短，脆，起落分明。地方志怪也好，后世礼俗也好，说到多子多福，往往容易落进口彩套话；《螽斯》不一样，它靠的是声音本身。声音一密，生命气息就出来了。"
        ]
      },
      {
        title: "这首诗意思单纯，却一点也不空",
        paragraphs: [
          "《螽斯》大概是《周南》里最不拐弯的一首祝愿诗了。它没有人物出场，没有细致情节，也没有“先写景、后抒情”的铺垫，就是借螽斯之盛，祝人子孙众多。简单到近乎直白，可恰恰是这种直白，让它有了民歌本色。你不会觉得它在讲道理，你只会觉得满院子都是活气，满屋子都是盼头。",
          "古人重家族延续，这首诗自然有很强的现实背景。但它没有变成一本正经的宗法训条，没有摆出祖先牌位似的庄严脸孔。它仍旧是轻快的，甚至带一点喜兴。旧时婚礼、宴饮、祝颂场合，大概就需要这种诗：字少，声亮，意思人人都懂，张口就能把吉利送出去。"
        ]
      },
      {
        title: "它最难得的，是郑重而不沉闷",
        paragraphs: [
          "别看它轻，分量其实并不轻。对子孙的盼望，在周人生活里不是小事，而是家门、祭祀、劳作传承都牵在一起的大事。所以《螽斯》表面上像一首短歌，骨子里却很郑重。只是这种郑重没有压到人喘不过气来，而是藏在节奏里，藏在每一句“宜尔子孙”里。",
          "我很喜欢这首诗的分寸。它既没有把“多子”写得粗俗，也没有把“吉祥”写得空泛。它让人看见，古人真正会祝福的时候，不一定需要长篇大论。几声虫鸣，几句叠唱，便把热闹、诚意和盼望都送到了。"
        ]
      }
    ]
  },
  {
    poemId: "tao-yao",
    title: "《桃夭》：桃花不是陪衬，它就是新娘出门那天的气色",
    subtitle: "从花、实、叶一路写下去，这首诗祝的从来不只是婚礼当日",
    sections: [
      {
        title: "《桃夭》一亮相，整首诗就有了春天的体温",
        paragraphs: [
          "《桃夭》好就好在一开头便亮。“桃之夭夭，灼灼其华”，读到这里，几乎不需要别的说明了。花色先到眼前，新人的气象也跟着到了眼前。它没有正面铺陈婚礼仪节，也不急着夸女子德行，只是让桃花先站出来说话。这一招看似轻，其实很准：婚嫁最要紧的不是空洞的庄重，而是一种正当其时、万物都在帮着成全的感觉。",
          "凤凰网上有篇谈《桃夭》的文章说，它像今天的婚礼进行曲，这个比法虽然不算严谨，却抓住了一点真意：《桃夭》确实是带着喜庆的乐感来的。只是这种喜庆并不靠锣鼓喧天，而靠春色本身。桃花一开，人也被照亮了，于是“之子于归”不显得被安排、被规训，反倒像生命走到了它该热烈一回的时候。"
        ]
      },
      {
        title: "花、果、叶三层递进，写的是婚后整段日子",
        paragraphs: [
          "这首诗最讲究的地方，在它不是停在花上。第一章写花，第二章写果，第三章写叶，从开到结到茂，一路顺着桃树的生长往下走。诗也就借着这条植物的脉络，把婚嫁后面的时间一起带出来了。不是只祝今日好看，而是祝日后能生发、能繁盛、能把一个家慢慢养起来。",
          "于是“宜其室家”“宜其家室”“宜其家人”就很有层次。先是夫妻的小家，再是屋里的日常，再是更开阔的人伦关系，像水纹一样一圈圈推开。很多后人只记得“桃花喻美人”，其实这只是起头。《桃夭》真正稳的地方，在于它既看见青春，也看见生活。光有花色还不够，诗人要的是花色最后能落进烟火。"
        ]
      },
      {
        title: "它不教人做人，却让人看见好的婚姻该是什么样",
        paragraphs: [
          "我很喜欢《桃夭》的一点，是它没有掉进训诫。它当然带着礼俗背景，当然和婚嫁有关，但整首诗并没有把女子写成某种规范标本。它只是说，一个新娘像桃花那样正好，而这份“正好”最终会体现在日子里，体现在家被她照管得有条有理，也体现在一家人相处得和和美美。",
          "这样的诗读起来舒服，因为它不是站在上面讲话，而是站在生活里讲话。它相信一个人的好，不只在容色，也在她进入生活之后能让周围都变得明亮。说到底，《桃夭》并不是在塑造神话式的新娘，它写的是人间理想：春天到了，有人出嫁，大家都真心盼着她往后过得好。"
        ]
      }
    ]
  },
  {
    poemId: "tu-ju",
    title: "《兔罝》：网刚立好，一个可托付的人也跟着站出来了",
    subtitle: "林野里的设网声很短，可这首诗写出的，是一种靠得住的筋骨",
    sections: [
      {
        title: "它的劲，先不在人，在动静之间",
        paragraphs: [
          "《兔罝》起得很硬。肃肃兔罝，椓之丁丁，网还没看清，先听见了木桩敲地的声音。整个场景里没有闲笔，只有整饬、利落和手上有数的感觉。古诗里写力量，未必总靠壮语，有时候把动作写准了，人就自己立起来了。《兔罝》正是这样。",
          "所以它不像有些赞歌那样一上来就把人夸得满天飞。它先给你看做事的样子：布网，设桩，施于中逵，施于中林，一切都摆得稳、落得准。能把这些事做成的人，当然不是空有蛮力的莽夫。诗的判断，其实已经藏在这组动作里了。"
        ]
      },
      {
        title: "它写“兔”，未必只是说兔",
        paragraphs: [
          "历来有人把《兔罝》当猎歌，也有人怀疑它背后还有军事操练或人才选择的影子。本地几种赏析里，苏缨就提醒过，古人的“兔罝”恐怕未必像今天想的那样只是逮几只小兔子玩玩；人民网那篇谈《诗经》兔意象的文章也提到，兔在这里首先是客观物象，却同时暗示出一种紧张的行动场面。我觉得不妨把路子放宽一点：它至少不是闲散消遣，而是和勇、能、可用连在一起的。",
          "这就解释了为什么诗的后半一下子跳到“公侯干城”“公侯好仇”“公侯腹心”。前面的设网，不是为了展示山林野趣，而是为了给“人可用”做铺垫。一个人值不值得托付，不只看他能不能出力，更看他是否训练有素、是否经得起事。短短几章，诗把这一点写得很实。"
        ]
      },
      {
        title: "真正写出来的，不只是勇，更是可信",
        paragraphs: [
          "“干城”“好仇”“腹心”三句，分量是一层重过一层的。干城是屏障，好仇是同伴、匹配，腹心就更近了，已经到可共谋、可深信的地步。诗人不是随手堆三个好词，他是在一点点把这个人的位置往里推。能防守，能辅佐，还能托心，这就不只是勇武，而是可靠。",
          "因此《兔罝》虽然短，骨架却很正。它没有《关雎》的柔情，也没有《桃夭》的喜色，它像一段削得利落的木头，握在手里就知道分量。周南之诗常被人想得太温柔，《兔罝》恰好提醒我们：温柔之外，古人也懂得赞一个站得住的人。"
        ]
      }
    ]
  },
  {
    poemId: "fu-yi-plantain",
    title: "《芣苢》：别急着找深意，先听见田野里那阵一起干活的歌声",
    subtitle: "六个动词顺着手势往下走，这首诗的光彩在身体、节奏和合唱里",
    sections: [
      {
        title: "它看起来简单，难得就在简单",
        paragraphs: [
          "《芣苢》大概最容易被低估。字面太浅，浅得仿佛没什么可说：一群人采芣苢，就这么唱着唱着唱完了。可真正好的地方，偏偏就在这里。它不靠繁复的意象，也不靠曲折的故事，它靠的是节奏。你一读，身体就先跟着动起来，耳朵也先被带进去了。",
          "周啸天和苏缨在谈这首诗时都很强调一点：别把“采采”机械地读成“采了又采”。那样一来，诗就扁了。“采采”更像一种满目皆是、随手可得的状态；“薄言”又像歌里的衬字，本身不扛意义，却把节拍托起来。于是全诗真正写成的，不是说明文，而是劳动时的声口。"
        ]
      },
      {
        title: "六个动词，其实是一串连着的身体动作",
        paragraphs: [
          "从“采”到“有”，再到“掇”“捋”“袺”“襭”，诗里的动作一路往前走：先动手采，再顺手拾取，再捋下，再提衣襟，再把衣襟掖好，满载而归。光明日报那篇谈《诗经》重章换词的文章，和参考网那篇论《芣苢》“诗乐舞一体”的文章，都提到这类重章不是空重复，而是能把动作、叙事和表演层层展开。我觉得这正切中《芣苢》的要害。",
          "它因此很像一支群舞。不是一个人独自低唱，而是一群妇女在田野里边做边唱，动作相近，声音相和，草木、风、脚步和歌词撞在一起。很多后来人喜欢往生殖、药性、巫俗那边延伸，这些讨论当然有意思，但若把最先跃出来的劳动节奏忘了，反而失了这首诗最本真的鲜活。"
        ]
      },
      {
        title: "真正留在心里的，是那种轻快得不费力的欢喜",
        paragraphs: [
          "我很愿意把《芣苢》看作《诗经》里少见的、不怎么沉重的一首。它当然有背景，有民俗，有植物知识，也可能牵连着更古老的身体经验，但读者第一次遇到它，最先收到的还是快乐。不是节日狂欢那种快乐，而是天好、活顺、身边有人、唱起来正好合拍的快乐。",
          "这类快乐往往最难写，因为稍不留神就会写得空。《芣苢》没有这个问题，它把快乐安放在动作里，所以很稳。读完以后，你未必能立刻总结出什么宏大主题，但耳边会一直留着那阵节奏。那就够了。对一首古老的劳动歌来说，能把一片原野的活气带到今天，已经很了不起。"
        ]
      }
    ]
  },
  {
    poemId: "han-guang",
    title: "《汉广》：真正隔住人的，不是礼法，是那条怎么也过不去的大水",
    subtitle: "游女一直在彼岸，诗人能做的只有设想，一直设想到心也发空",
    sections: [
      {
        title: "这首诗真正的主角，其实一直都是水",
        paragraphs: [
          "《汉广》里最有分量的，未必是“游女”，而是那条水。汉之广矣，江之永矣，一个横着，一个纵着，把人一下隔远。搜狐那篇谈《汉广》的文章抓得很准：这首诗最有味的地方，其实就是那几个“不可”。不可求，不可泳，不可方，说的表面是方法，压在心上的却是无力。明明眼前有方向，脚下却没有路。",
          "所以水在这里不是背景板，它就是情感本身的形状。越广，越显得相隔遥遥；越长，越显得这份念头拖不完。很多情诗写“不可得”，是靠哀声叠出来的；《汉广》不一样，它把不可得实体化了。你几乎能看见那条河，看见它无情地把人和人分开。"
        ]
      },
      {
        title: "最伤人的，不是见不到，而是明明望得见",
        paragraphs: [
          "“汉有游女，不可求思”这句最狠的地方，在于她不是传闻里的影子，她就在那边。人看得见，所以才会不断往下设想：假如她要嫁，我愿意做什么，我怎样刈楚刈蒌，怎样秣马执驹，怎样把迎娶的一切都安排妥帖。诗不是没有行动感，相反，它把行动设想得很细，细到像真的快要做出来了。",
          "也正因为设想得细，挫败感才更深。你连马都喂好了，连车驾都想好了，最后却还是隔在两岸。李颜垒写《汉广》时，很强调这种“可望而不可即”的审美距离，那当然是一种说法；但我更愿意把它看成人心的一种惯性：越是够不着，越忍不住去把未来想得具体。想得越具体，失落就越沉。"
        ]
      },
      {
        title: "它不必被讲死，恰恰因为没有讲死，余味才长",
        paragraphs: [
          "《汉广》历来有不少讲法，有人说是恋慕不得，有人往礼制阻隔、婚姻等级、政治比兴上引。读得宽一点当然很好，但我始终觉得，这首诗最先成立的还是一个人的仰望和无望。若这一层不真，后面的附义再多也站不住。",
          "它厉害在没有替自己收尾。诗没有告诉你这个人后来死心没有，也没有告诉你游女是否回望过。它只是让你听见一遍遍“不可”，然后把水留在眼前。读完以后，最深的感觉并不是轰烈，而是空。那种向前一步全是水、想回头又不甘心的空，才是《汉广》真正难忘的地方。"
        ]
      }
    ]
  },
  {
    poemId: "ru-fen",
    title: "《汝坟》：前半像思人，后半像时局忽然压到了家门口",
    subtitle: "它不好被一句话讲死，真正的分量恰在私情和世乱交错的地方",
    sections: [
      {
        title: "这首诗最特别的地方，是语气半路变了",
        paragraphs: [
          "《汝坟》前两章像什么呢？像一个人在河堤上做事，手里忙着，心里却空着。沿着汝坟伐木，未见君子，惄如调饥，这种写法很贴肉，没有任何修辞上的花巧，就是那种饿得发慌似的想念。等到“既见君子，不我遐弃”，情绪稍稍一松，读者本来会以为，这大概是一首重逢之后收束得很温柔的诗。",
          "偏偏到第三章，气口突然一沉：“鲂鱼赪尾，王室如燬。”私人的相思一下被更大的东西压住了。古诗文网和参考网两篇谈《汝坟》的文章都提到，这首诗最难处理的正是主旨纷歧：有人读成劝夫，有人读成思夫，有人又往政治主题上拉。可无论站哪一路，都绕不过这个事实：前两章在家中，后一句已经站到了时势里。"
        ]
      },
      {
        title: "与其急着判案，不如先承认它本来就复杂",
        paragraphs: [
          "苏缨在谈《汝坟》时花了很多篇幅梳理歧说，恰恰说明它不是一首能被简单钉死的诗。若只说它是“战乱中的夫妻重逢”，是顺，但未必尽；若把“鲂鱼赪尾”全解释成性隐喻，文义也未必真站得住。我更愿意接受它那种没完全收拢的状态：前面确实有夫妻间的苦念，后面也确实有王事逼人的阴影，两者绞在一起，才是这首诗的本来面目。",
          "这样的复杂，反而让《汝坟》更像人生。现实里很少有纯粹的相思，很多时候人刚见着想见的人，话还没说两句，外头的麻烦就到了门口。你能在这首诗里看到这种挤压感：人的心愿很小，不过是不要被远远抛下；可大局很大，大到一句“王室如燬”就能把屋里的温情全压暗一层。"
        ]
      },
      {
        title: "越是这样，结尾那点克制就越见分量",
        paragraphs: [
          "《汝坟》最难得的一点，是它并不撒开来哭。就算说到“如燬”，口气依旧是收着的。最后一句“父母孔迩”尤其耐咂摸。它可以是安慰，可以是挽留，也可以是把人从时势和情欲里拉回最基本的责任。总之，它没有让诗滑向失控，而是硬生生把情绪按回到了生活里面。",
          "所以我读《汝坟》，最深的感受不是悲，而是重。重在什么地方？重在这首诗知道个人愿望终究不是世界的全部，可它也没有因此抹掉个人的疼。一个人在河边伐木，想丈夫；丈夫回来了，外面的局势又逼上来；话说到最后，还得想到父母、想到撑日子。古人写得很省，省到只剩几句，反而把这份活着的沉实留了下来。"
        ]
      }
    ]
  },
  {
    poemId: "lin-zhi-zhi",
    title: "《麟之趾》：越是不好坐实主旨，越能看出它像礼乐中的一段赞歌",
    subtitle: "麟、公子、公姓、公族几个词来回回响，把“盛”与“贵”写得很整饬",
    sections: [
      {
        title: "这首诗最明智的读法，也许是别把它讲得太满",
        paragraphs: [
          "《麟之趾》历来最叫人头疼，因为主旨很难坐实。毛诗一路把它讲成《关雎》之应，后人又沿着麒麟祥瑞、仁厚信德一路往下推，讲得越多，离诗本身反而越远。苏缨、周啸天在各自的赏析里都提醒过：这首诗可以有很多解释，但不必急着把哪一种解释说成铁案。这个提醒很重要。",
          "我更愿意承认它先是一首仪式中的赞歌，然后才可能承载别的意味。麟当然是难得的灵物，带着古人对美好、罕见、尊贵的想象，但诗里并没有给出足够多的线索，好让我们把每一处都精确翻译成某种伦理品目。与其强行对号入座，不如先顺着它的声口去听：这是一段被反复唱出的称美。"
        ]
      },
      {
        title: "它的章法很简单，却简得有礼乐气",
        paragraphs: [
          "《麟之趾》的章法其实很漂亮。前半从趾到定到角，是由下而上；后半从公子到公姓到公族，是由近而远。几乎没有额外枝蔓，就靠这几步平稳地推开，把一个家族的兴盛感一点点唱出来。每一章末尾再补一句“于嗟麟兮”，声口就更像礼仪场合中的应唱和叹。短，整，反复里有秩序。",
          "周啸天引闻一多说它或与婚礼纳征相关，这种看法我觉得至少启发性很强。因为只要把它放回仪式场景里，很多问题立刻就顺了：为什么这么短，为什么要一唱再唱，为什么重点不在叙事而在反复点名。它不是供人独坐案头细想的抒情诗，而更像某种被集体发声托起来的礼乐文本。"
        ]
      },
      {
        title: "正因为意思敞着，它的余味反而还在",
        paragraphs: [
          "很多诗因为意思太明白，读完也就完了；《麟之趾》不是。它的意义始终敞开着一点，所以读者反倒会反复咂摸：麟究竟被借来赞什么？“振振”到底偏向兴盛、信厚，还是单纯的盛貌？公子、公姓、公族这一层层扩大，究竟在赞德，还是在赞盛？这些问题没有标准答案，但诗的气氛是清楚的，那就是庄重而明朗的称许。",
          "我喜欢它这种留白。它不像《汉广》那样让人心里发空，也不像《兔罝》那样骨力外露，它更像一段远远传来的钟鼓声。你未必能一下说出其中每个象征的来历，但你知道，那声音是在为某种值得称美的东西而发。对一首周南的结篇诗来说，这样的收束，已经很有意思了。"
        ]
      }
    ]
  },
  ...zhaoNanBatchAiAnalysisEntries,
  ...zhaoNanBatchAiAnalysisEntries2,
  ...zhaoNanBatchAiAnalysisEntries3,
  ...beiFengBatchAiAnalysisEntries1,
  ...beiFengBatchAiAnalysisEntries2,
  ...beiFengBatchAiAnalysisEntries3,
  ...beiFengBatchAiAnalysisEntries4,
  ...beiFengBatchAiAnalysisEntries5,
  ...yongFengBatchAiAnalysisEntries1,
  ...yongFengBatchAiAnalysisEntries2,
  ...weiFengBatchAiAnalysisEntries1,
  ...weiFengBatchAiAnalysisEntries2,
  ...wangFengBatchAiAnalysisEntries1,
  ...zhengFengBatchAiAnalysisEntries1,
  ...zhengFengBatchAiAnalysisEntries2,
  ...qiFengBatchAiAnalysisEntries1,
  ...qiFengBatchAiAnalysisEntries2,
  ...weiTangBatchAiAnalysisEntries1,
  ...tangFengBatchAiAnalysisEntries1,
  ...tangQinFengBatchAiAnalysisEntries2,
  ...qinChenFengBatchAiAnalysisEntries3,
  ...qinChenGuiCaoFengBatchAiAnalysisEntries4,
  ...binFengLuMingBatchAiAnalysisEntries5,
  ...luMingBaiHuaBatchAiAnalysisEntries6,
  ...baiHuaBatchAiAnalysisEntries7,
  ...hongYanBatchAiAnalysisEntries8,
  ...hongYanBatchAiAnalysisEntries9,
  ...jieNanShanBatchAiAnalysisEntries10,
  ...xiaoMinBatchAiAnalysisEntries11,
  ...xiaoMinBatchAiAnalysisEntries12,
  ...beiShanBatchAiAnalysisEntries13,
  ...beiShanBatchAiAnalysisEntries14,
  ...sangHuBatchAiAnalysisEntries15,
  ...sangHuBatchAiAnalysisEntries16,
  ...douRenShiBatchAiAnalysisEntries17,
  ...wenWangBatchAiAnalysisEntries18,
  ...wenWangBatchAiAnalysisEntries19,
  ...shengMinBatchAiAnalysisEntries20,
  ...dangBatchAiAnalysisEntries21,
  ...dangBatchAiAnalysisEntries22,
  ...zhouSongBatchAiAnalysisEntries23,
  ...zhouSongBatchAiAnalysisEntries24,
  ...zhouSongBatchAiAnalysisEntries25,
  ...zhouSongBatchAiAnalysisEntries26,
  ...luSongBatchAiAnalysisEntries27,
  ...shangSongBatchAiAnalysisEntries28
];

export function getAiAnalysisByPoemId(poemId: string) {
  return aiAnalysisEntries.find((entry) => entry.poemId === poemId);
}
