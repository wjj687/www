import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createJiti } from "jiti";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");
const outputPath = path.join(root, "data", "interpretations-generated.json");

const jiti = createJiti(__filename, {
  alias: {
    "@": root,
    "@/": `${root}/`
  }
});
const { basePoems } = jiti(path.join(root, "data", "poems.ts"));

const categoryLabels = {
  person: "人物",
  place: "地名",
  flora: "植物",
  fauna: "动物",
  artifact: "器物",
  rite: "礼制",
  institution: "制度",
  celestial: "天象"
};

const imageMap = {
  雎鸠: {
    src: "https://wiki.biodiversity.cern.ac.cn/images/thumb/2/2e/%E5%A4%A7%E7%AF%A9%E5%AD%90-%E9%B9%97-7.jpg/800px-%E5%A4%A7%E7%AF%A9%E5%AD%90-%E9%B9%97-7.jpg",
    alt: "雎鸠相关图片",
    caption: "近水栖息的雎鸠意象参照图",
    credit: "中国生物多样性知识平台",
    sourceUrl: "https://wiki.biodiversity.cern.ac.cn/index.php/%E9%B9%97",
    placeholderSrc: "/interpretation/jujiu.svg"
  },
  荇菜: {
    src: "https://bkimg.cdn.bcebos.com/pic/34fae6cd7b899e510fb31d08f8f1ce33c895d143a72b?x-bce-process=image/resize,m_lfit,w_536,limit_1/quality,Q_70",
    alt: "荇菜图片",
    caption: "水面开花的荇菜",
    credit: "百度百科",
    sourceUrl: "https://baike.baidu.com/search/word?word=%E8%8E%95%E8%8F%9C",
    placeholderSrc: "/interpretation/xingcai.svg"
  },
  葛: {
    src: "https://bkimg.cdn.bcebos.com/pic/95eef01f3a292df5e0fe3ffabf315c6034a87368?x-bce-process=image/resize,m_lfit,w_536,limit_1/quality,Q_70",
    alt: "葛藤图片",
    caption: "山野间攀援生长的葛",
    credit: "百度百科",
    sourceUrl: "https://baike.baidu.com/item/%E8%91%9B/2808384",
    placeholderSrc: "/interpretation/gevine.svg"
  },
  桃: {
    src: "https://bkimg.cdn.bcebos.com/smart/d833c895d143ad4bd113ee65b4554dafa40f4bfba845-bkimg-process%2Cv_1%2Crw_1%2Crh_1%2Cmaxl_114%2Cpad_1%2Ccolor_ffffff?x-bce-process=image%2Fformat%2Cf_auto",
    alt: "桃树图片",
    caption: "开花或结果期的桃树",
    credit: "百度百科",
    sourceUrl: "https://wapbaike.baidu.com/item/%E6%A1%83/64247",
    placeholderSrc: "/interpretation/default-plant.svg"
  },
  桑: {
    src: "https://bkimg.cdn.bcebos.com/smart/4034970a304e251f95cab5989dd1de177f3e6709f50e-bkimg-process%2Cv_1%2Crw_1%2Crh_1%2Cmaxl_114%2Cpad_1%2Ccolor_ffffff?x-bce-process=image%2Fformat%2Cf_auto",
    alt: "桑树图片",
    caption: "桑科植物的枝叶形态",
    credit: "百度百科",
    sourceUrl: "https://wapbaike.baidu.com/item/%E8%92%99%E6%A1%91/1707818?fromtitle=%E5%B1%B1%E6%A1%91&fromid=3883319",
    placeholderSrc: "/interpretation/default-plant.svg"
  },
  黍: {
    src: "https://assets.qiancao.com/uploads/photo/file/54678/564346.jpg",
    alt: "黍类植物图片",
    caption: "千草植物页面中的黍属草本实拍图，可用于辅助识别诗中的黍类意象",
    credit: "千草植物",
    sourceUrl: "https://www.qiancao.com/plants/panicum-repens",
    placeholderSrc: "/interpretation/default-plant.svg"
  },
  甘棠: {
    src: "https://assets.qiancao.com/uploads/photo/file/64148/2078654.jpg",
    alt: "棠梨图片",
    caption: "千草植物页面中的杜梨实拍图，常被视作甘棠意象的现实参照之一",
    credit: "千草植物",
    sourceUrl: "https://www.qiancao.com/plants/pyrus-betulifolia",
    placeholderSrc: "/interpretation/default-plant.svg"
  },
  唐棣: {
    src: "https://assets.qiancao.com/uploads/photo/file/5527/1680257.jpg",
    alt: "唐棣图片",
    caption: "千草植物页面中的唐棣属植物实拍图，可用于辅助识别诗中的唐棣意象",
    credit: "千草植物",
    sourceUrl: "https://www.qiancao.com/plants/amelanchier-sinica",
    placeholderSrc: "/interpretation/default-plant.svg"
  },
  薇: {
    src: "https://assets.qiancao.com/uploads/photo/file/82660/2170584.jpg",
    alt: "薇类植物图片",
    caption: "千草植物页面中的野豌豆类实拍图，可用于辅助识别诗中的薇意象",
    credit: "千草植物",
    sourceUrl: "https://www.qiancao.com/plants/vicia-cracca",
    placeholderSrc: "/interpretation/default-plant.svg"
  },
  蘋: {
    src: "https://assets.qiancao.com/uploads/photo/file/48351/2488529.jpg",
    alt: "蘋类植物图片",
    caption: "千草植物页面中的水生蕨类实拍图，可用于辅助识别诗中的蘋意象",
    credit: "千草植物",
    sourceUrl: "https://www.qiancao.com/plants/marsilea-quadrifolia",
    placeholderSrc: "/interpretation/default-plant.svg"
  },
  鱼: {
    src: "https://bkimg.cdn.bcebos.com/smart/2934349b033b5bb5c9eabfa5a58bc239b6003af3166d-bkimg-process%2Cv_1%2Crw_1%2Crh_1%2Cmaxl_114%2Cpad_1%2Ccolor_ffffff?x-bce-process=image%2Fformat%2Cf_auto",
    alt: "鲂鱼图片",
    caption: "《诗经》中常见的鱼类意象参照图",
    credit: "百度百科",
    sourceUrl: "https://wapbaike.baidu.com/item/%E9%B2%82%E9%B1%BC/1580224",
    placeholderSrc: "/interpretation/default-animal.svg"
  },
  黄鸟: {
    src: "https://yllhj.beijing.gov.cn/ztxx/anz/hn/xhn/images/P020180403576362590109.jpg",
    alt: "黄鸟图片",
    caption: "枝头停栖的黄鸟",
    credit: "北京市园林绿化局",
    sourceUrl: "https://yllhj.beijing.gov.cn/ztxx/anz/hn/xhn/201804/t20180403_117083.shtml",
    placeholderSrc: "/interpretation/huangniao.svg"
  },
  喜鹊: {
    src: "https://yllhj.beijing.gov.cn/ztxx/anz/hn/ln/201804/W020190827640107536634.jpg",
    alt: "喜鹊图片",
    caption: "北京市园林绿化局留鸟专题中的喜鹊实景图",
    credit: "北京市园林绿化局",
    sourceUrl: "https://yllhj.beijing.gov.cn/ztxx/anz/hn/ln/201804/t20180403_117090.shtml",
    placeholderSrc: "/interpretation/default-animal.svg"
  },
  鸳鸯: {
    src: "https://yllhj.beijing.gov.cn/ztxx/anz/hn/xhn/201804/W020190827639993966136.jpg",
    alt: "鸳鸯图片",
    caption: "北京市园林绿化局候鸟专题中的鸳鸯实景图",
    credit: "北京市园林绿化局",
    sourceUrl: "https://yllhj.beijing.gov.cn/ztxx/anz/hn/xhn/201804/t20180403_117079.html",
    placeholderSrc: "/interpretation/default-animal.svg"
  },
  雉鸡: {
    src: "https://yllhj.beijing.gov.cn/ztxx/anz/hn/ln/201804/W020190827640109093306.jpg",
    alt: "雉鸡图片",
    caption: "北京市园林绿化局留鸟专题中的雉鸡实景图",
    credit: "北京市园林绿化局",
    sourceUrl: "https://yllhj.beijing.gov.cn/ztxx/anz/hn/ln/201804/t20180403_117091.shtml",
    placeholderSrc: "/interpretation/default-animal.svg"
  },
  鸿雁: {
    src: "https://yllhj.beijing.gov.cn/ztxx/anz/hn/dhn/201804/W020190827640323755111.jpg",
    alt: "鸿雁图片",
    caption: "北京市园林绿化局冬候鸟专题中的鸿雁实景图",
    credit: "北京市园林绿化局",
    sourceUrl: "https://yllhj.beijing.gov.cn/ztxx/anz/hn/dhn/201804/t20180403_117112.html",
    placeholderSrc: "/interpretation/default-animal.svg"
  },
  鸠: {
    src: "https://yllhj.beijing.gov.cn/ztxx/anz/hn/ln/201804/W020190827640109093306.jpg",
    alt: "鸠类图片",
    caption: "北京市园林绿化局留鸟页面中珠颈斑鸠等留鸟组页配图，可作为诗中鸠类意象的保守参照",
    credit: "北京市园林绿化局",
    sourceUrl: "https://yllhj.beijing.gov.cn/ztxx/anz/hn/ln/201804/t20180403_117091.shtml",
    placeholderSrc: "/interpretation/default-animal.svg"
  },
  鸱鸮: {
    src: "https://yllhj.beijing.gov.cn/ztxx/anz/hn/ln/201804/W020190827640110714913.jpg",
    alt: "鸮类图片",
    caption: "北京市园林绿化局留鸟页面中雕鸮等鸮类组页配图，可作为诗中鸱鸮意象的保守参照",
    credit: "北京市园林绿化局",
    sourceUrl: "https://yllhj.beijing.gov.cn/ztxx/anz/hn/ln/201804/t20180403_117092.shtml",
    placeholderSrc: "/interpretation/default-animal.svg"
  },
  晨风: {
    src: "https://yllhj.beijing.gov.cn/ztxx/anz/hn/ln/201804/W020190827640110714913.jpg",
    alt: "猛禽图片",
    caption: "北京市园林绿化局留鸟页面中雀鹰、红隼等猛禽组页配图，可作为诗中晨风意象的保守参照",
    credit: "北京市园林绿化局",
    sourceUrl: "https://yllhj.beijing.gov.cn/ztxx/anz/hn/ln/201804/t20180403_117092.shtml",
    placeholderSrc: "/interpretation/default-animal.svg"
  },
  鹤: {
    src: "https://yllhj.beijing.gov.cn/ztxx/anz/hn/lvniao/201804/W020190827640230537734.jpg",
    alt: "鹤类图片",
    caption: "北京市园林绿化局旅鸟页面中白枕鹤等旅鸟组页配图，可作为诗中鹤类意象的保守参照",
    credit: "北京市园林绿化局",
    sourceUrl: "https://yllhj.beijing.gov.cn/ztxx/anz/hn/lvniao/201804/t20180403_117099.shtml",
    placeholderSrc: "/interpretation/default-animal.svg"
  },
  鸨: {
    src: "https://yllhj.beijing.gov.cn/ztxx/anz/hn/lvniao/201804/W020190827640230537734.jpg",
    alt: "鸨类图片",
    caption: "北京市园林绿化局旅鸟页面中大鸨等旅鸟组页配图，可作为诗中鸨类意象的保守参照",
    credit: "北京市园林绿化局",
    sourceUrl: "https://yllhj.beijing.gov.cn/ztxx/anz/hn/lvniao/201804/t20180403_117099.shtml",
    placeholderSrc: "/interpretation/default-animal.svg"
  },
  螽斯: {
    src: "https://bkimg.cdn.bcebos.com/pic/86d6277f9e2f07082838c8abc176af99a9014c085447?x-bce-process=image/format,f_auto/resize,m_lfit,limit_1,h_452",
    alt: "螽斯图片",
    caption: "百度百科词条中的螽斯实景图，可作为诗中螽斯与草间鸣虫意象的现实参照",
    credit: "百度百科",
    sourceUrl: "https://baike.baidu.com/search/word?word=%E8%9E%BD%E6%96%AF",
    placeholderSrc: "/interpretation/default-animal.svg"
  },
  蜉蝣: {
    src: "https://bkimg.cdn.bcebos.com/pic/0b55b319ebc4b74543a9d0cf5da409178a82b801bfe8?x-bce-process=image/resize,m_lfit,w_536,limit_1/quality,Q_70",
    alt: "蜉蝣图片",
    caption: "百度百科词条中的蜉蝣实景图，可作为诗中蜉蝣意象的现实参照",
    credit: "百度百科",
    sourceUrl: "https://baike.baidu.com/search/word?word=%E8%9C%89%E8%9D%A3",
    placeholderSrc: "/interpretation/default-animal.svg"
  },
  鼠: {
    src: "https://bkimg.cdn.bcebos.com/pic/cc11728b4710b91212f52b13c5fdfc0392452223?x-bce-process=image/resize,m_lfit,w_536,limit_1/quality,Q_70",
    alt: "鼠类图片",
    caption: "百度百科词条中的褐家鼠实景图，可作为诗中鼠类意象的现实参照",
    credit: "百度百科",
    sourceUrl: "https://baike.baidu.com/search/word?word=%E8%A4%90%E5%AE%B6%E9%BC%A0",
    placeholderSrc: "/interpretation/default-animal.svg"
  },
  雀: {
    src: "https://yllhj.beijing.gov.cn/ztxx/anz/hn/ln/201804/W020190827640101924316.jpg",
    alt: "雀类图片",
    caption: "北京市园林绿化局留鸟页面中麻雀等留鸟组页配图，可作为诗中雀类意象的保守参照",
    credit: "北京市园林绿化局",
    sourceUrl: "https://yllhj.beijing.gov.cn/ztxx/anz/hn/ln/201804/t20180403_117087.shtml",
    placeholderSrc: "/interpretation/default-animal.svg"
  },
  白茅: {
    src: "https://assets.qiancao.com/uploads/photo/file/40566/5466514.jpg",
    alt: "白茅图片",
    caption: "千草植物页面中的白茅实拍图",
    credit: "千草植物",
    sourceUrl: "https://www.qiancao.com/plants/imperata-cylindrica",
    placeholderSrc: "/interpretation/default-plant.svg"
  },
  卷耳: {
    src: "https://assets.qiancao.com/uploads/photo/file/18142/2912432.jpg",
    alt: "卷耳图片",
    caption: "卷耳属植物近景图，可用于辅助识别诗中的卷耳意象",
    credit: "千草植物",
    sourceUrl: "https://www.qiancao.com/plants/cerastium-szechuense",
    placeholderSrc: "/interpretation/default-plant.svg"
  },
  芣苢: {
    src: "https://www.tvix.cn/uploads/allimg/210717/1-210GH13614519.jpg",
    alt: "车前草图片",
    caption: "依稀植物网所示车前草实景图，常被视作芣苢的常见对应植物",
    credit: "依稀植物网",
    sourceUrl: "https://www.tvix.cn/zhiwu/20210747379.html",
    placeholderSrc: "/interpretation/default-plant.svg"
  },
  蒹葭: {
    src: "https://assets.qiancao.com/uploads/photo/file/58122/1635880.jpg",
    alt: "芦苇图片",
    caption: "千草植物页面中的芦苇实拍图，可用于辅助识别蒹葭意象",
    credit: "千草植物",
    sourceUrl: "https://www.qiancao.com/plants/phragmites",
    placeholderSrc: "/interpretation/default-plant.svg"
  },
  绿竹: {
    src: "https://assets.qiancao.com/uploads/photo/file/10779/1190748.jpg",
    alt: "竹子图片",
    caption: "千草植物页面中的青皮竹实拍图，可用于辅助识别诗中的绿竹意象",
    credit: "千草植物",
    sourceUrl: "https://www.qiancao.com/plants/bambusa-textilis",
    placeholderSrc: "/interpretation/default-plant.svg"
  },
  梅: {
    src: "https://yllhj.beijing.gov.cn/ztxx/bjhx/bzhz/201902/W020191129686470810482.jpg",
    alt: "梅花图片",
    caption: "北京市园林绿化局梅花专题中的梅花实景图",
    credit: "北京市园林绿化局",
    sourceUrl: "https://yllhj.beijing.gov.cn/ztxx/bjhx/bzhz/201902/t20190222_759350.shtml",
    placeholderSrc: "/interpretation/default-plant.svg"
  },
  椒: {
    src: "https://assets.qiancao.com/uploads/photo/file/38680/2993456.jpg",
    alt: "花椒图片",
    caption: "千草植物页面中的花椒实拍图，可用于辅助识别诗中的椒类意象",
    credit: "千草植物",
    sourceUrl: "https://www.qiancao.com/plants/zanthoxylum-bungeanum",
    placeholderSrc: "/interpretation/default-plant.svg"
  },
  菽: {
    src: "https://assets.qiancao.com/uploads/photo/file/35404/2399766.jpg",
    alt: "菽类图片",
    caption: "千草植物页面中的豆科作物实拍图，可用于辅助识别诗中的菽类意象",
    credit: "千草植物",
    sourceUrl: "https://www.qiancao.com/plants/glycine-max",
    placeholderSrc: "/interpretation/default-plant.svg"
  },
  蘩: {
    src: "https://assets.qiancao.com/uploads/photo/file/8551/3961309.jpg",
    alt: "蘩类植物图片",
    caption: "千草植物页面中的白蒿实拍图，可作为诗中蘩类植物的保守参照",
    credit: "千草植物",
    sourceUrl: "https://www.qiancao.com/plants/artemisia-stracheyi",
    placeholderSrc: "/interpretation/default-plant.svg"
  },
  茨: {
    src: "https://assets.qiancao.com/uploads/photo/file/26165/8246.jpg",
    alt: "茨类植物图片",
    caption: "千草植物页面中的蒺藜实拍图，可作为诗中茨类植物的保守参照",
    credit: "千草植物",
    sourceUrl: "https://www.qiancao.com/plants/tribulus-terrestris",
    placeholderSrc: "/interpretation/default-plant.svg"
  },
  棘: {
    src: "https://assets.qiancao.com/uploads/photo/file/15611/1025348.jpg",
    alt: "棘类植物图片",
    caption: "千草植物页面中的锦鸡儿实拍图，可作为诗中棘类意象的保守参照",
    credit: "千草植物",
    sourceUrl: "https://www.qiancao.com/plants/caragana-frutex",
    placeholderSrc: "/interpretation/default-plant.svg"
  },
  蕨: {
    src: "https://assets.qiancao.com/uploads/photo/file/63416/2544151.jpg",
    alt: "蕨类植物图片",
    caption: "千草植物页面中的蕨类实拍图，可用于辅助识别诗中的蕨意象",
    credit: "千草植物",
    sourceUrl: "https://www.qiancao.com/plants/pteris-vittata",
    placeholderSrc: "/interpretation/default-plant.svg"
  },
  蓼: {
    src: "https://assets.qiancao.com/uploads/photo/file/54159/1636735.jpg",
    alt: "蓼类植物图片",
    caption: "千草植物页面中的蓼科植物实拍图，可用于辅助识别诗中的蓼类意象",
    credit: "千草植物",
    sourceUrl: "https://www.qiancao.com/plants/oxyria-digyna",
    placeholderSrc: "/interpretation/default-plant.svg"
  },
  蒌: {
    src: "https://assets.qiancao.com/uploads/photo/file/8519/2585434.jpg",
    alt: "蒌蒿图片",
    caption: "千草植物页面中的蒌蒿实拍图，可作为诗中蒌类植物的保守参照",
    credit: "千草植物",
    sourceUrl: "https://www.qiancao.com/plants/artemisia-selengensis",
    placeholderSrc: "/interpretation/default-plant.svg"
  },
  苕: {
    src: "https://assets.qiancao.com/uploads/photo/file/14816/4265497.jpg",
    alt: "苕类植物图片",
    caption: "千草植物页面中的旋花实拍图，可作为诗中苕类意象的保守参照",
    credit: "千草植物",
    sourceUrl: "https://www.qiancao.com/plants/calystegia-sepium",
    placeholderSrc: "/interpretation/default-plant.svg"
  },
  藻: {
    src: "https://assets.qiancao.com/uploads/photo/file/84117/1236036.jpg",
    alt: "藻类植物图片",
    caption: "千草植物页面中的黑藻实拍图，可用于辅助识别诗中的藻类意象",
    credit: "千草植物",
    sourceUrl: "https://www.qiancao.com/plants/hydrilla-verticillata",
    placeholderSrc: "/interpretation/default-plant.svg"
  },
  马: {
    src: "https://www.forestry.gov.cn/u/cms/www/202601/150752142p3d.jpg",
    alt: "普氏野马图片",
    caption: "国家林草局专题中的普氏野马实景图，可用于辅助识别诗中的马类意象",
    credit: "国家林业和草原局政府网",
    sourceUrl: "https://www.forestry.gov.cn/lyj/1/zhzs/20260123/656902.html",
    placeholderSrc: "/interpretation/default-animal.svg"
  },
  鹿: {
    src: "https://yllhj.beijing.gov.cn/ztxx/kpjd/202312/W020231222579801896869.jpg",
    alt: "麋鹿图片",
    caption: "北京市园林绿化局科普基地页面中的麋鹿实景图，可作为诗中鹿类意象的保守参照",
    credit: "北京市园林绿化局",
    sourceUrl: "https://yllhj.beijing.gov.cn/ztxx/kpjd/202312/t20231222_3508049.shtml",
    placeholderSrc: "/interpretation/default-animal.svg"
  },
  麟: {
    src: "https://yllhj.beijing.gov.cn/ztxx/kpjd/202312/W020231222579801896869.jpg",
    alt: "鹿类图片",
    caption: "北京市园林绿化局科普基地页面中的麋鹿实景图，可作为诗中麟意象的现实参照",
    credit: "北京市园林绿化局",
    sourceUrl: "https://yllhj.beijing.gov.cn/ztxx/kpjd/202312/t20231222_3508049.shtml",
    placeholderSrc: "/interpretation/default-animal.svg"
  },
  狼: {
    src: "https://yllhj.beijing.gov.cn/ztxx/ysdw/zygk/slzy/201510/W020190828533937605952.jpg",
    alt: "狼图片",
    caption: "北京市园林绿化局兽类资源页中的狼实景图，可作为诗中狼类意象的保守参照",
    credit: "北京市园林绿化局",
    sourceUrl: "https://yllhj.beijing.gov.cn/ztxx/ysdw/zygk/slzy/201510/t20151013_120709.shtml",
    placeholderSrc: "/interpretation/default-animal.svg"
  },
  羊: {
    src: "https://yllhj.beijing.gov.cn/ztxx/ysdw/zygk/slzy/201510/W020190828533928150163.jpg",
    alt: "羊类图片",
    caption: "北京市园林绿化局兽类资源页中的岩羊实景图，可作为诗中羊类意象的保守参照",
    credit: "北京市园林绿化局",
    sourceUrl: "https://yllhj.beijing.gov.cn/ztxx/ysdw/zygk/slzy/201510/t20151013_120705.shtml",
    placeholderSrc: "/interpretation/default-animal.svg"
  },
  兔: {
    src: "https://yllhj.beijing.gov.cn/ztxx/ysdw/zygk/slzy/201510/W020190828533935271493.JPG",
    alt: "草兔图片",
    caption: "北京市园林绿化局兽类资源页中的草兔实景图",
    credit: "北京市园林绿化局",
    sourceUrl: "https://yllhj.beijing.gov.cn/ztxx/ysdw/zygk/slzy/201510/t20151013_120708.shtml",
    placeholderSrc: "/interpretation/default-animal.svg"
  }
};

const imageAliasMap = {
  葛藟: "葛",
  采葛: "葛",
  葛屦: "葛",
  葛生: "葛",
  园有桃: "桃",
  葭: "蒹葭",
  黍离: "黍",
  黍苗: "黍",
  椒聊: "椒",
  采菽: "菽",
  蓼彼萧斯: "蓼",
  蓼蓼者莪: "蓼",
  苕之华: "苕",
  鱼丽: "鱼",
  南有嘉鱼: "鱼",
  魚在在藻: "鱼",
  鸨羽: "鸨",
  鹤鸣: "鹤",
  麕: "鹿",
  狼跋: "狼",
  兔爰: "兔",
  鹑: "雉鸡",
  草虫: "螽斯",
  鹊: "喜鹊",
  防有鹊巢: "喜鹊",
  鸤鸠: "鸠",
  宛彼鸣鸠: "鸠",
  桑扈: "雀",
  隰桑: "桑",
  桑柔: "桑",
  羔羊: "羊",
  晨风: "晨风",
  雉: "雉鸡",
  雄雉: "雉鸡"
};

const fallbackImageMap = {
  flora: {
    src: "/interpretation/default-plant.svg",
    alt: "植物示意图",
    caption: "项目内置植物示意图，用来辅助识别诗中的植物意象。",
    credit: "项目内置示意图",
    sourceUrl: "/interpretation/default-plant.svg",
    placeholderSrc: "/interpretation/default-plant.svg"
  },
  fauna: {
    src: "/interpretation/default-animal.svg",
    alt: "动物示意图",
    caption: "项目内置动物示意图，用来辅助识别诗中的动物意象。",
    credit: "项目内置示意图",
    sourceUrl: "/interpretation/default-animal.svg",
    placeholderSrc: "/interpretation/default-animal.svg"
  }
};

const tokenGroups = {
  person: [
    "文王",
    "周公",
    "后稷",
    "王姬",
    "韩侯",
    "卫侯",
    "孙子仲",
    "召伯",
    "师氏",
    "君子",
    "公子",
    "公孙",
    "公族"
  ],
  place: [
    "宗周",
    "楚宫",
    "楚室",
    "肥泉",
    "新台",
    "漕",
    "卫",
    "宋",
    "陈",
    "汉",
    "汝",
    "淇",
    "沬",
    "洛",
    "泮水",
    "景山",
    "东山",
    "南山",
    "北山",
    "中谷",
    "南涧",
    "行潦",
    "河",
    "江",
    "泉",
    "渚",
    "沚",
    "谷",
    "门",
    "台",
    "宫",
    "城"
  ],
  flora: [
    "荇菜",
    "卷耳",
    "葛藟",
    "芣苢",
    "唐棣",
    "白茅",
    "草虫",
    "阜螽",
    "蒹葭",
    "葭",
    "蒌",
    "薇",
    "葛",
    "桃",
    "梅",
    "棠",
    "桑",
    "椒",
    "棘",
    "藻",
    "蘋",
    "菽",
    "黍",
    "稌",
    "苕",
    "蓼",
    "萧"
  ],
  fauna: [
    "雎鸠",
    "黄鸟",
    "鸳鸯",
    "鸱鸮",
    "鸤鸠",
    "桑扈",
    "晨风",
    "鸿雁",
    "螽斯",
    "驺虞",
    "麇",
    "鹑",
    "鹊",
    "鸠",
    "黄鸟",
    "兔",
    "鼠",
    "雉",
    "鱼",
    "鲂鱼",
    "马",
    "鹿",
    "狼",
    "麟",
    "鹤",
    "鸨",
    "蜉蝣"
  ],
  artifact: [
    "钟鼓",
    "琴瑟",
    "彤弓",
    "丝衣",
    "羔裘",
    "绿衣",
    "大车",
    "舟",
    "车",
    "衣",
    "裳",
    "冠",
    "弁",
    "琴",
    "瑟",
    "钟",
    "鼓",
    "弓",
    "矢",
    "斧",
    "柯",
    "耜",
    "簧",
    "笙",
    "酒",
    "爵",
    "觥",
    "旄"
  ],
  rite: [
    "宾之初筵",
    "清庙",
    "既醉",
    "凫鹥",
    "假乐",
    "泂酌",
    "卷阿",
    "有客",
    "载见",
    "振鹭",
    "雍",
    "燕",
    "筵",
    "祭",
    "祀",
    "庙",
    "酌",
    "赉",
    "般",
    "武"
  ],
  institution: [
    "天命",
    "王事",
    "王臣",
    "王室",
    "周邦",
    "邦国",
    "社稷",
    "臣工",
    "大夫",
    "侯",
    "伯",
    "公",
    "王",
    "君子"
  ],
  celestial: [
    "昊天",
    "云汉",
    "日月",
    "风雨",
    "北风",
    "终风",
    "凯风",
    "定",
    "昴",
    "参",
    "风",
    "雨",
    "云",
    "日",
    "月",
    "星",
    "天"
  ]
};

const strongSingleCharTokens = new Set([
  "汉",
  "汝",
  "淇",
  "卫",
  "宋",
  "陈",
  "王",
  "侯",
  "伯",
  "公",
  "山",
  "水",
  "河",
  "江",
  "鱼",
  "马",
  "鹿",
  "兔",
  "鼠",
  "雉",
  "衣",
  "车",
  "舟",
  "酒",
  "钟",
  "鼓",
  "琴",
  "瑟",
  "日",
  "月",
  "天",
  "星"
]);

const stopPhrases = new Set([
  "之",
  "其",
  "于",
  "有",
  "无",
  "我",
  "彼",
  "是",
  "言",
  "维",
  "以",
  "不",
  "既",
  "何",
  "载",
  "彼其"
]);

const categoryOrder = {
  person: 8,
  place: 7,
  flora: 6,
  fauna: 6,
  artifact: 5,
  rite: 4,
  institution: 3,
  celestial: 2
};

const lexicon = Object.entries(tokenGroups)
  .flatMap(([category, tokens]) =>
    tokens.map((token) => ({
      token,
      category,
      priority:
        token.length * 10 +
        (strongSingleCharTokens.has(token) ? 3 : 0) +
        categoryOrder[category]
    }))
  )
  .sort((left, right) => right.priority - left.priority);

function normalizeLine(line) {
  return line.replace(/[，。！？；：“”‘’、（）《》〈〉—…·\s]/g, "");
}

function buildFallbackTarget(poem) {
  const joined = poem.lines.join("");
  const cleanTitle = normalizeLine(poem.title);

  const matchedTitleTokens = lexicon
    .filter((entry) => cleanTitle.includes(entry.token))
    .map((entry) => entry.token)
    .sort((left, right) => right.length - left.length);

  for (const token of matchedTitleTokens) {
    if (stopPhrases.has(token)) {
      continue;
    }
    if (token.length === 1 && !strongSingleCharTokens.has(token)) {
      continue;
    }
    return token;
  }

  if (cleanTitle && joined.includes(cleanTitle)) {
    return cleanTitle;
  }

  for (let length = Math.min(4, cleanTitle.length); length >= 1; length -= 1) {
    for (let index = 0; index <= cleanTitle.length - length; index += 1) {
      const part = cleanTitle.slice(index, index + length);
      if (!part || stopPhrases.has(part)) {
        continue;
      }
      if (part.length === 1 && !strongSingleCharTokens.has(part)) {
        continue;
      }
      if (joined.includes(part)) {
        return part;
      }
    }
  }

  const firstLine = normalizeLine(poem.lines[0] ?? "");
  for (let length = Math.min(4, firstLine.length); length >= 1; length -= 1) {
    for (let index = 0; index <= firstLine.length - length; index += 1) {
      const part = firstLine.slice(index, index + length);
      if (!part || stopPhrases.has(part)) {
        continue;
      }
      if (part.length === 1 && !strongSingleCharTokens.has(part)) {
        continue;
      }
      return part;
    }
  }

  return cleanTitle || poem.title;
}

function guessCategory(token) {
  for (const [category, tokens] of Object.entries(tokenGroups)) {
    if (tokens.includes(token)) {
      return category;
    }
  }

  if (/(文王|周公|后稷|王姬|韩侯|卫侯|孙子仲|召伯|师氏|君子|公子|公孙|公族)/.test(token)) {
    return "person";
  }

  if (/(宗周|楚宫|楚室|肥泉|新台|漕|卫|宋|陈|汉|汝|淇|沬|洛|泮水|景山|东山|南山|北山|中谷|河|江|泉|渚|沚|谷|门|台|宫|城)/.test(token)) {
    return "place";
  }

  if (/(荇菜|卷耳|葛藟|芣苢|唐棣|白茅|蒹葭|葭|蒌|薇|葛|桃|梅|棠|桑|椒|棘|藻|蘋|菽|黍|稌|苕|蓼|萧)/.test(token)) {
    return "flora";
  }

  if (/(雎鸠|黄鸟|鸳鸯|鸱鸮|鸤鸠|晨风|鸿雁|螽斯|驺虞|麇|鹑|鹊|鸠|兔|鼠|雉|鱼|鲂鱼|马|鹿|狼|麟|鹤|鸨|蜉蝣)/.test(token)) {
    return "fauna";
  }

  if (/(钟鼓|琴瑟|彤弓|丝衣|羔裘|绿衣|大车|舟|车|衣|裳|冠|弁|琴|瑟|钟|鼓|弓|矢|斧|柯|耜|簧|笙|酒|爵|觥|旄)/.test(token)) {
    return "artifact";
  }

  if (/(宾之初筵|清庙|既醉|凫鹥|假乐|泂酌|卷阿|有客|载见|振鹭|雍|燕|筵|祭|祀|庙|酌|赉|般|武)/.test(token)) {
    return "rite";
  }

  if (/(昊天|云汉|日月|风雨|北风|终风|凯风|定|昴|参|风|雨|云|日|月|天|星)/.test(token)) {
    return "celestial";
  }

  if (/(天命|王事|王臣|王室|周邦|邦国|社稷|臣工|大夫|侯|伯|公|王)/.test(token)) {
    return "institution";
  }

  return "institution";
}

function findTokenInPoem(poem, token) {
  const titleIndex = poem.title.indexOf(token);
  let bestLineIndex = -1;
  let bestCharIndex = Number.POSITIVE_INFINITY;

  for (let index = 0; index < poem.lines.length; index += 1) {
    const charIndex = poem.lines[index].indexOf(token);
    if (charIndex === -1) {
      continue;
    }
    if (charIndex < bestCharIndex) {
      bestLineIndex = index;
      bestCharIndex = charIndex;
    }
  }

  return {
    titleMatch: titleIndex !== -1,
    lineIndex: bestLineIndex,
    charIndex: bestCharIndex
  };
}

function pickCandidates(poem) {
  const candidatePool = [];
  const titleToken = buildFallbackTarget(poem);
  const titleMatch = findTokenInPoem(poem, titleToken);

  candidatePool.push({
    token: titleToken,
    category: guessCategory(titleToken),
    lineIndex: titleMatch.lineIndex === -1 ? 0 : titleMatch.lineIndex,
    score: 100
  });

  for (const entry of lexicon) {
    const match = findTokenInPoem(poem, entry.token);
    if (!match.titleMatch && match.lineIndex === -1) {
      continue;
    }

    if (entry.token.length === 1 && !strongSingleCharTokens.has(entry.token)) {
      continue;
    }

    candidatePool.push({
      token: entry.token,
      category: entry.category,
      lineIndex: match.lineIndex,
      score:
        entry.priority +
        (match.titleMatch ? 60 : 0) -
        (match.lineIndex === -1 ? 0 : match.lineIndex) -
        (entry.token.length === 1 && !match.titleMatch ? 3 : 0)
    });
  }

  candidatePool.sort((left, right) => right.score - left.score);

  const selected = [];

  for (const candidate of candidatePool) {
    if (
      selected.some(
        (picked) =>
          picked.token === candidate.token ||
          picked.token.includes(candidate.token) ||
          candidate.token.includes(picked.token)
      )
    ) {
      continue;
    }

    selected.push({
      token: candidate.token,
      category: candidate.category,
      lineIndex: candidate.lineIndex
    });

    if (selected.length >= 2) {
      break;
    }
  }

  return selected;
}

function buildSummary(category, token, poemTitle) {
  switch (category) {
    case "person":
      return `“${token}”在《${poemTitle}》里指向具体人物或带有明确身份意味的人物称谓，是理解诗中关系与情势的重要线索。`;
    case "place":
      return `“${token}”在《${poemTitle}》中属于地名或空间标识，它把诗意落到具体场景，也常关联行役、婚嫁、朝聘或家国记忆。`;
    case "flora":
      return `“${token}”在《${poemTitle}》里属于植物性意象，既有现实中的物候背景，也常承担起兴、映衬情绪和提示生活世界的作用。`;
    case "fauna":
      return `“${token}”在《${poemTitle}》中属于动物性意象，既可以按真实生物理解，也常被借来起兴、比德或强化情境。`;
    case "artifact":
      return `“${token}”在《${poemTitle}》中指向器物、服饰或乐器车马一类实物，它不仅是生活器用，也常带出身份、礼数与气氛。`;
    case "rite":
      return `“${token}”在《${poemTitle}》里关联礼仪、祭祀或宴飨场景，是理解周代群体秩序与仪式氛围的重要入口。`;
    case "institution":
      return `“${token}”在《${poemTitle}》里多指制度、身份结构或政治秩序中的关键词，用来勾连个人处境与更大的社会框架。`;
    case "celestial":
      return `“${token}”在《${poemTitle}》中属于天象或节令性意象，既能提示时间，也常承担起兴、比喻或季节标记的作用。`;
    default:
      return `“${token}”是理解《${poemTitle}》的重要关键词。`;
  }
}

function buildFacts(category, token) {
  const readingTipMap = {
    person: "先看人物身份，再看其与诗中情境的关系",
    place: "先看空间位置，再看它如何承托情绪与行动",
    flora: "兼看现实植物属性与诗中的起兴作用",
    fauna: "兼看真实生物特征与比兴、象征意义",
    artifact: "从器用本义进一步读出礼数与身份",
    rite: "从礼仪场景理解诗中的群体秩序",
    institution: "从身份结构与政治秩序理解诗意张力",
    celestial: "把它当作时间线索和情绪背景一起看"
  };

  return [
    { label: "类别", value: categoryLabels[category] },
    { label: "诗中词语", value: token },
    { label: "阅读提示", value: readingTipMap[category] }
  ];
}

function buildDetails(category, token, poem, sourceLine) {
  const lineText = sourceLine || poem.lines[0] || poem.title;

  const genericMap = {
    person: `在《诗经》的阅读里，人物称谓往往不只是一个“谁”的问题，还会连着身份、关系和社会位置一起出现。“${token}”如果被读准，诗中的情感指向和叙述重心就会更清楚。`,
    place: `《诗经》常把情感放进可见的空间里来写。“${token}”这样的地名、河川、城台或山谷，不只是背景板，它们决定了诗里的人是在出行、守望、劳作、送别，还是回忆旧地。`,
    flora: `《诗经》里的植物通常兼有两层作用：一层是现实生活中的可见之物，另一层是诗歌中最敏感的情绪媒介。“${token}”既能让我们看到季节、采集和劳作，也能帮助我们进入诗的兴发方式。`,
    fauna: `《诗经》中的动物常常一出现就把声音、动作和场景同时带出来。“${token}”既可以按自然生物理解，也往往承担起起兴、比德或映照人事的作用。`,
    artifact: `器物在《诗经》中从来不是死的摆设。“${token}”这类实物常常和身份、礼数、婚姻、行役或宴飨联系在一起，理解它的物质属性，往往就能把一首诗的生活现场重新看见。`,
    rite: `礼制语汇进入诗歌之后，往往会把个人情绪放进更大的仪式秩序里去理解。“${token}”提醒我们，这首诗不只是抒情，也包含了当时社会运行的礼仪背景。`,
    institution: `制度与身份词在《诗经》中很重要，因为它们直接决定一个人能做什么、不能做什么，也决定一首诗究竟是在歌咏、怨刺、劝戒，还是在追述政治秩序。`,
    celestial: `天象和时令在《诗经》里既是时间标志，也是感情浓度的放大器。“${token}”这类词出现后，诗句往往会同时获得季节感、空间感和命运感。`
  };

  const lineMap = {
    person: `在诗句“${lineText}”里，“${token}”并不是装饰性的称呼，而是诗中关系网的节点。顺着它去看，就能分辨谁在说话、谁在被想念、谁在被赞美，或者谁正承受讽刺与批评。`,
    place: `诗句“${lineText}”把“${token}”放在视野中心，说明这首诗的情境必须依靠这一空间来成立。读者一旦看见这片地方，诗里的人也就有了可感的立足点和去向。`,
    flora: `诗句“${lineText}”让“${token}”和人的动作连在一起，或者与季节、劳作、思念并置。这正是《诗经》植物书写的动人处：它不只是植物学对象，而是生活现场的一部分。`,
    fauna: `诗句“${lineText}”把“${token}”写进声音、动作或姿态里，因此它不是静态图鉴，而是正在发生的景象。它一进入诗里，人的情绪就有了外部回响。`,
    artifact: `诗句“${lineText}”让“${token}”与人的举动、身份或场面相互勾连。顺着这一实物去读，能更好地理解这首诗所依托的生活制度和物质世界。`,
    rite: `诗句“${lineText}”中的“${token}”提示我们，这里不仅在写一时一地的情感，也在写某种成文或约定俗成的礼仪秩序。它让诗的社会面向清晰起来。`,
    institution: `诗句“${lineText}”里的“${token}”把个体命运拉回到制度背景之中。读这一类词，不能只看字面，更要看它背后的身份结构和权力关系。`,
    celestial: `诗句“${lineText}”中的“${token}”既提示时间和节候，也在悄悄改变全诗的气氛。很多时候，天象一出现，诗的情绪就会被拉得更远、更深。`
  };

  const closingMap = {
    person: `因此，把“${token}”放回人物关系中去读，会比把它看成抽象称呼更有帮助。`,
    place: `所以，“${token}”不仅是地点，也是这首诗情绪落地的方式。`,
    flora: `抓住“${token}”这一点，往往就能把这首诗的自然气息和人情意味同时读出来。`,
    fauna: `因此，“${token}”既是可见之物，也是这首诗最灵动的一层情绪触媒。`,
    artifact: `理解“${token}”的器物意义，往往能把诗里原本抽象的情感重新拉回到真实的人间生活。`,
    rite: `明白“${token}”的礼仪意义之后，这首诗就不只是好听，而会变得更有时代的厚度。`,
    institution: `因此，“${token}”不是冷硬的制度词，而是理解诗中张力与褒贬的重要入口。`,
    celestial: `把“${token}”当作时间与气氛的双重线索来读，这首诗的层次通常会更分明。`
  };

  return [genericMap[category], lineMap[category], closingMap[category]];
}

function buildEntityImage(token, category) {
  const canonicalToken = imageAliasMap[token] ?? token;
  const mappedImage = imageMap[canonicalToken];

  if (mappedImage) {
    return mappedImage;
  }

  if (category === "flora" || category === "fauna") {
    return fallbackImageMap[category];
  }

  return undefined;
}

function createEntity(poem, token, category, lineIndex, index) {
  const sourceLine = poem.lines[lineIndex] ?? poem.lines[0] ?? poem.title;
  const image = buildEntityImage(token, category);

  return {
    id: `${poem.id}-interp-${index + 1}`,
    label: token,
    category,
    summary: buildSummary(category, token, poem.title),
    facts: buildFacts(category, token),
    details: buildDetails(category, token, poem, sourceLine),
    ...(image ? { image } : {})
  };
}

function createMentions(poem, entities) {
  return poem.lines.map((line) =>
    entities
      .filter((entity) => line.includes(entity.label))
      .map((entity) => ({
        entityId: entity.id,
        target: entity.label
      }))
  );
}

const generatedInterpretations = {};
let generatedCount = 0;

for (const poem of basePoems) {
  if (poem.interpretationEntities?.length && poem.interpretationMentions?.length) {
    continue;
  }

  const candidates = pickCandidates(poem);
  const entities = candidates.map((candidate, index) =>
    createEntity(poem, candidate.token, candidate.category, candidate.lineIndex, index)
  );
  const mentions = createMentions(poem, entities);

  generatedInterpretations[poem.id] = {
    interpretationEntities: entities,
    interpretationMentions: mentions
  };
  generatedCount += 1;
}

fs.writeFileSync(outputPath, `${JSON.stringify(generatedInterpretations, null, 2)}\n`, "utf8");

console.log(`generated interpretations for ${generatedCount} poems`);
