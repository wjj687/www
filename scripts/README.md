# Full-Book Expansion Helpers

这几个脚本是给《诗经》全书补全工程准备的，目的是把目前“前两首手工维护”的方式，变成一套可批量复用的流程。

## 1. 查看 PDF 目录

适用于：
- `yiwen.pdf` 的全书原文 / 译文页码定位
- `shangxi` 目录下赏析书目的篇目定位

命令：

```powershell
python scripts/extract_pdf_outline.py "F:\codex\poem\yiwen.pdf"
```

输出：
- 总页数
- 目录层级
- 每个目录项对应的 PDF 页码

## 2. OCR 单页 PDF

适用于：
- 扫描版 PDF 的页级文字提取
- `yiwen.pdf` 这类无法直接抽文本的页面

命令：

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\ocr_pdf_page.ps1 -PdfPath "F:\codex\poem\yiwen.pdf" -PageIndex 21
```

说明：
- `PageIndex` 为 0 起始
- 依赖 Windows 自带 OCR 组件
- 当前环境里，这条路线已经验证可用

## 3. 批量生成注音骨架

适用于：
- 给单首诗或一组诗句先生成逐字拼音骨架
- 后续再人工校正多音字、通假字和特殊读音

命令：

```powershell
python scripts/generate_poem_phonetics.py "[\"关关雎鸠，在河之洲。\",\"窈窕淑女，君子好逑。\"]"
```

或者：

```powershell
echo [\"关关雎鸠，在河之洲。\",\"窈窕淑女，君子好逑。\"] | python scripts/generate_poem_phonetics.py
```

输出：
- 与现有 `data/poems.ts` 兼容的 `phonetics` 片段结构

## 4. 提取《诗经》全书诗目索引

适用于：
- 从 `yiwen.pdf` 的目录书签里批量取出 `305` 首诗的次序、卷别、国别/雅颂、所属章节和页码

命令：

```powershell
python scripts/extract_yiwen_poem_index.py
```

输出：
- `order`
- `title`
- `page`
- `volume`
- `section`
- `chapter`

说明：
- 已内置对若干目录残字的归一化
- 会自动跳过 `南陔、白华、华黍、由庚、崇丘、由仪` 这 6 个有目无辞的笙诗
- 输出结果应为标准的 `305` 首

## 当前工程建议顺序

1. 用 `extract_pdf_outline.py` 建立整本诗目和页码映射
2. 用 `extract_yiwen_poem_index.py` 生成全书 `305` 首的结构化索引
3. 用 `ocr_pdf_page.ps1` 把 `yiwen.pdf` 对应页抽出
4. 整理原文、译文、篇章结构
5. 用 `generate_poem_phonetics.py` 生成注音初稿
6. 再补注释、赏析、解释实体与图片、AI 解析
