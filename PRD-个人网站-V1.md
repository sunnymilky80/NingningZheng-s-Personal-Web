# 郑宁宁个人网站 PRD v1.0

> **Personal Brand Site Product Requirements Document**

---

## 1. Document Information / 文档信息


| 字段   | 值                                    |
| ---- | ------------------------------------ |
| 文档版本 | v1.1 (Draft)                         |
| 产品名称 | Ningning Zheng Personal Site         |
| 文档作者 | 郑宁宁 (Ningning Zheng) × Claude (产品助理) |
| 创建日期 | 2026-04-27                           |
| 上线目标 | 2026-05-10                           |
| 状态   | Draft，待评审                            |
| 审阅记录 | v1.0 - 2026-04-27 - 初稿生成<br/>v1.1 - 2026-04-27 - Hero 区重构（三段式信息层级），原 §2.2 决策 #4 / §8.1 / 附录 D-4 同步更新；原因：V3 原型反馈"首页不够引人"，金句开场稀释身份识别 |


---

## 2. Executive Summary / 摘要

### 2.1 一句话定位

本项目是郑宁宁的个人品牌官网（personal site），首要目标是作为 2026 年春季求职的"敲门砖"，次要目标是承载 Gap 期及未来持续沉淀作品与思考的长期资产。它不是简历的 HTML 版，是把"研究员 / AI 产品人 / Vibe Coder"的复合身份立成一个可被记住、可被分享、可被持续更新的数字门面。

### 2.2 TL;DR — 13 项关键决策一览


| #   | 决策项            | 选定方案                                                      |
| --- | -------------- | --------------------------------------------------------- |
| 1   | 网站定位           | 求职敲门砖 (P0) + 作品展示台 (P1) + 长期个人 IP 阵地 (P2)                 |
| 2   | 信息架构           | 多页站点：Home / Works / Writings / About / Contact + /now     |
| 3   | 技术栈            | Astro + MDX + React Islands (备用) + Vercel + GitHub Public |
| 4   | Hero           | 三段式信息层级：求职状态 chip → 名字 + 一句话画像（大字）→ 身份三标签 → 信念引言 → CTA |
| 5   | Manifesto      | 5 条主张 + 苔绿底米白大字反色海报                                       |
| 6   | Selected Works | 3 张卡：低空经济白皮书 / AI 行业信息采集器 / 智能体分类体系                       |
| 7   | Writings 分类    | AI 工作流 / 行业观察 / 工作复盘                                      |
| 8   | 首发文章           | 《Vibe Coding 30 天》《AI 让文科生重新有了价值》《给 PM 上 AI 工具课》          |
| 9   | 视觉风格           | 保留 V2 配色字体动效，新增反色 Manifesto 海报，借 Jane 模板 3 个具体点           |
| 10  | 语言策略           | 中文内容 + 英文板块标签 + 纯英文导航                                     |
| 11  | 隐私边界           | 不放手机/微信/家庭/孕情；GitHub / LinkedIn / 小红书 / 即刻 4 个社交链接        |
| 12  | MVP 范围         | 含站内搜索 / /now 详情页 / 多端分享按钮；不含暗黑模式 / 双语切换 / AI Demo         |
| 13  | 更新工作流          | Claude Code 协作主力 + GitHub 网页编辑兜底 + Public 仓库              |


### 2.3 立项动因（Why Now）

1. **V2 版本的硬伤**：太像简历、缺作品集、看不到 AI 观点、无更新机制
2. **Gap 期产出需要载体**：AI 行业信息采集器等已成型，缺乏展示渠道
3. **求职窗口紧迫**：2026-05-10 启动求职，需在 13 天内完成 V1 上线
4. **Vibe Coding 工作流成熟**：Claude Code 协作让"持续更新"成本可控
5. **个人品牌资产化**：从一次性求职材料升级为可持续沉淀的思想阵地

---

## 3. Background & Problem Statement / 背景与问题

### 3.1 V2 版本现状

V2 版本 (`Resume Web/V2-Claude版本.html`) 是 2025 年 3 月用静态 HTML 制作的一屏式个人简历站。

- **结构**：Hero / About / Projects / Experience & Education / Contact 五板块单页长滚
- **配色**：苔绿 #5D7052 + 暖橘 #C18C5D + 米白 #FDFCF8
- **字体**：Fraunces (英文衬线 italic) + Nunito + Noto Serif/Sans SC
- **质感**：磨砂噪点滤镜 + blob 渐变光斑 + 异形圆角 + sticky 胶囊导航
- **动效**：fadeUp reveal + blob drift + 时间线 stagger

### 3.2 V2 的核心问题（用户陈述 + 产品分析）


| 问题            | 具体表现                             | 根因                          |
| ------------- | -------------------------------- | --------------------------- |
| **太像简历**      | 信息架构 = 简历的另一种排版形态，访客看不到"作品"和"观点" | 单页式限制 + 内容只有职业信息            |
| **看不到 AI 观点** | 没有 Manifesto 类内容、没有博客载体          | 内容策略缺失                      |
| **照片占用过大**    | About 区竖向 620px 大图压住右侧文字         | 视觉层级失衡，object-position 错切人脸 |
| **无更新机制**     | 静态 HTML，每次更新都要改源码                | 技术架构未为持续更新设计                |
| **缺独特性**      | 视觉 OK 但内容同质化，HR 看完不会形成具体记忆点      | 没有内容的"非对称武器"                |


### 3.3 为什么是现在重做

- **现实窗口**：2026-05-10 启动正式求职，13 天准备期
- **内容窗口**：Gap 期已积累若干小作品（信息采集器、Vibe Coding 项目、《春日漫游指南》等）
- **能力窗口**：Vibe Coding 实践已 30 天+，方法论与素材丰富
- **技术窗口**：Claude Code 工作流成熟，"我说 Claude 写"模式可日常运作
- **求职策略窗口**：AI 产品 / 战略岗竞争激烈，差异化武器（独立观点 + 个人作品）的边际收益最高

### 3.4 本次重做的核心命题

**从"在线版简历"升级为"思想 + 作品 + 简历"三位一体的个人品牌站。**

让 HR 在 60 秒内 get 到三件事：你是谁、你做过什么、你怎么想；让同行在 5 分钟内决定关注你；让你自己在每次打开这个站时不脸红、想继续写。

---

## 4. Goals & Non-Goals / 目标与非目标

### 4.1 Goals（必达目标）


| ID  | Goal                                  | 衡量方式                |
| --- | ------------------------------------- | ------------------- |
| G1  | HR / 面试官能在 60 秒内 get "她是谁、她做过什么、她怎么想" | 用户测试 + 面试反馈         |
| G2  | 网站本身成为求职过程中的"差异化武器"，不止于补充材料           | 至少 3 个面试官主动提到网站内容   |
| G3  | 内容更新流程零摩擦，能持续产出新文章与作品                 | 上线后 1 个月内至少 +1 篇新文章 |
| G4  | 作为面试可展示的产品作品（PRD + 原型 + 实现）证明产品能力     | PRD 文档面试可见，原型可演示    |
| G5  | 上线后 1 周内 Google 能搜到                   | SEO 健康              |


### 4.2 Non-Goals（明确不做）


| ID  | Non-Goal           | 原因                                |
| --- | ------------------ | --------------------------------- |
| NG1 | 追求大流量 / SEO 排名第一   | 这是个人站，不是媒体                        |
| NG2 | 用户系统 / 评论登录 / 付费内容 | YAGNI，超出求职诉求                      |
| NG3 | MVP 阶段做中英双语切换      | 工作量翻倍，与 13 天约束冲突，降级到 V1.x         |
| NG4 | 嵌入式 AI Demo        | 当前 Vibe 项目独立部署 + 链接展示已足够，V2.x 再考虑 |
| NG5 | Newsletter / 邮件订阅  | 早期读者基数太小，先沉淀内容                    |
| NG6 | 暗黑模式               | MVP 阶段先用浅色，HR 默认浅色看               |


### 4.3 设计原则（贯穿全产品）


| 原则                         | 含义           | 反例                           |
| -------------------------- | ------------ | ---------------------------- |
| **Editorial > Maximalist** | 杂志感优先于营销热闹   | 五彩斑斓 emoji 装饰                |
| **Specific > Generic**     | 具体细节优先于抽象概括  | "我喜欢读小说" 替换成"金爱烂《滔滔生活》"      |
| **Honest > Polished**      | 诚实真实优先于完美包装  | 假装拥有不存在的能力                   |
| **Show, don't tell**       | 用作品说话，不堆砌形容词 | "我热爱学习"换成"周三晚上听 Lex Fridman" |
| **Slow but Sticky**        | 慢节奏阅读、强记忆点   | 推送式滚动条                       |


---

## 5. Target Users & Personas / 目标用户与人设

### 5.1 主用户：HR / 招聘经理 / 面试官

**Persona**：32 岁的产品负责人或 HRBP，每天看 50+ 简历，注意力极稀缺。

**核心问题**：这个人能不能干 / 有没有意思 / 值得约面吗？

**典型用户旅程**：

1. 收到郑宁宁简历 PDF → 看到附带的网站 URL → 顺手点击
2. Hero 区 5 秒：大字"Taste 比代码更稀缺" → 觉得"有点意思"
3. 滚到 Manifesto 30 秒：5 条主张读完 → 形成"她有判断力"印象
4. 滚到 Selected Works 1-2 分钟：验证"她真的做过这些"
5. 决策：约面（成功）/ 收藏（中性）/ 关闭（失败）

**决胜瞬间排序**：

- Hero 大字（5 秒）—— 决定继续看 / 关闭
- Manifesto（30 秒）—— 决定她是不是"有点东西"
- Selected Works Card B（1 分钟）—— 决定她的差异化是真是假
- About "一些非工作的我"（如果她滚到这里）—— 决定要不要约面（强信任建立点）

### 5.2 次用户：行业同行 / 潜在合作方

**Persona**：30 岁 AI 产品 / 研究领域同行，在小红书 / 即刻 / 播客评论里看到链接。

**核心问题**：这个人在想什么 / 值得关注吗 / 想交个朋友吗？

**典型用户旅程**：

1. 社交平台看到分享 → 点链接
2. 直接跳 Writings → 读 1-2 篇文章
3. 觉得有共鸣 → 跳 About → 看"非工作的我"
4. 决策：关注社交账号（成功）/ 加微信（高转化）/ 离开

**决胜瞬间**：Writings 文章质量 + About 页"非工作的我"的真实感

### 5.3 自用户：郑宁宁本人

**Persona**：网站主人，日常更新者。

**核心问题**：写作不痛苦 / 内容不脸红 / 持续可更新。

**典型用户旅程**：

1. 在 Claude Code 对话中说"加一篇文章"
2. 给 Claude 草稿 → 它自动 commit + push → 1 分钟后线上可见
3. 偶尔自己打开站点重看一遍，确认还喜欢 / 找到要改的地方

**决胜瞬间**：Frontmatter 简单 / Claude Code 协作顺 / 自己阅读自洽

---

## 6. Success Metrics / 成功标准

### 6.1 一级：基础健康（上线 1 周内必须达到）

- 站点正常打开，所有页面无 404 / 500
- 移动端可用（iPhone Safari + Android Chrome 实测）
- Lighthouse 综合分 ≥ 85（性能 / SEO / a11y / 最佳实践）
- Google 搜"郑宁宁 / Ningning Zheng"能搜到本站
- 至少自己测试投递 1 个岗位，HR 反馈"看到了"
- 自己每天能不痛苦地打开它（自我审美关）

### 6.2 二级：求职转化（找工作 1-2 个月内）

- ≥3 个 HR / 面试官在面试中主动提到网站内容（"我看到你写的 XXX"）
- 面试机会数比"只投简历"高 +20%（粗略对比）
- ≥1 个面试官明确记住了 Manifesto 某句或文章某观点
- Writings 至少新增 1 篇文章（验证持续更新机制可用）

### 6.3 三级：长期沉淀（找到工作之后 6 个月内）

- Writings 文章总数 ≥ 10 篇
- ≥1 篇文章被有意义地分享 / 转发 / 被博客或播客提及
- ≥1 个非 HR 主动联系（同行 / 合作方 / 学弟妹 / 信息采集 Agent 用户）
- 网站从"求职敲门砖"演化为"思想阵地"

### 6.4 内省指标（不对外，对自己）

- 📓 **每月翻一次自己的 Now 信号位**：如果"Now"在那里没换过，说明你已经在停滞——就该写新东西、做新东西了
- 🌱 **每季度复盘一次**：网站当前最让我自豪的内容是什么？最让我尴尬的内容是什么？要不要替换 / 重写？

---

## 7. Information Architecture / 信息架构

### 7.1 站点地图

```
/                              # Home（首页）
├── /works/                    # Works 全集列表
│   ├── /works/baipishu        # 详情：低空经济白皮书 (Card A)
│   ├── /works/agent           # 详情：AI 行业信息采集器 (Card B)
│   ├── /works/agent-taxonomy  # 详情：智能体分类体系 (Card C)
│   └── /works/[slug]          # 其他 10 件作品（简版页）
├── /writings/                 # Writings 文章列表
│   ├── /writings/category/ai-workflow  # 分类：AI 工作流
│   ├── /writings/category/industry     # 分类：行业观察
│   ├── /writings/category/reflection   # 分类：工作复盘
│   └── /writings/[slug]                # 文章详情
├── /about                     # 关于我
├── /now                       # Now 详情页（区别于 Home 一行字）
├── /contact                   # 联系
├── /404                       # 404
└── /sitemap.xml               # 自动生成
```

### 7.2 一级导航

```
[Logo: 宁]  ......  Home   Works   Writings   About   Contact   [🔍]
```

- 5 个英文一级导航 + 搜索图标
- Logo 区：圆形苔绿底，"宁" 字米白色 + 旁边小字 Ningning Zheng
- Sticky 胶囊形顶部导航（保留 V2 风格）
- 滚动状态联动：当前 section / 当前页高亮
- 移动端：汉堡菜单展开

### 7.3 各页面核心承载


| 页面           | 主任务         | 承载内容                                                           |
| ------------ | ----------- | -------------------------------------------------------------- |
| **Home**     | "60 秒回答你是谁" | Hero / Manifesto / 3 Works / 3 Writings / Now 信号位 / Contact 入口 |
| **Works**    | "深度展示作品集"   | 13 件作品的网格列表（带 tag 筛选）+ 详情页                                     |
| **Writings** | "展示思考"      | 文章列表（按分类）+ 文章详情页                                               |
| **About**    | "认识真实的我"    | 我是谁 + 时间线 + 技能栈 + 一些非工作的我                                      |
| **Contact**  | "建立连接"      | 邮箱 + 4 个社交链接 + 求职状态                                            |
| **/now**     | "我现在在做什么"   | 当前状态详细展开（区别于 Home 一行字）                                         |


### 7.4 关键跳转流

```
Home Hero CTA "看作品" ─→ /works
Home Hero CTA "读文章" ─→ /writings

Home Manifesto ─→ 阅读默读，不跳转

Home Selected Works Card A ─→ /works/baipishu
Home Selected Works Card B ─→ /works/agent
Home Selected Works Card C ─→ /works/agent-taxonomy

Home Recent Writings 卡 ─→ /writings/[slug]
Home Recent Writings "查看全部" ─→ /writings

Home Now 信号位 ─→ /now

Home Contact 入口 ─→ /contact

About 时间线 ─→ 默读不跳转
About "非工作的我" ─→ 默读不跳转

Writings 详情页底 ─→ 上下篇 / 分享按钮
Works 详情页底 ─→ 外链（PDF / GitHub / Demo）
```

---

## 8. Content Strategy / 内容策略

### 8.1 Hero 区（首屏定身份）

> **设计目标**：HR / 来访者**第一眼**就能完整 get 三件事 —— 我是谁、我做什么、我想干什么。先回答 What/Who/What-I-Want，再展示 Taste。**身份在前，金句在后**。

#### 结构（三段式信息层级）

| 层级 | 内容 | 视觉权重 | 信息载荷 |
|---|---|---|---|
| **L0 顶部 Status Chip**（绿色） | 🟢 Open to Work · Hangzhou · 寻找 AI 产品 / 研究全职机会 | 小但显著 | "我想干什么" |
| **L1 主标题**（最大字） | 我是郑宁宁。<br/>一个**用 AI 自己造工具**的文科战略研究员。 | 最重 | "我是谁" + 一句话画像 |
| **L2 身份三标签**（中字） | AI Industry Researcher · Product Operator · Vibe Coder | 中 | "我做什么" |
| **L3 信念引言**（italic 小字） | — 我相信 Taste 比代码更稀缺。 | 小且优雅 | 记忆点 / Taste 信号 |
| **L4 CTA 双按钮** | Primary："看看我的作品 →" / Secondary："读读我的文章" | 中 | 行动召唤 |
| **辅助元素** | 圆形小头像（L1 上方）+ 英文名 Ningning Zheng（小字附在中文名后） | 中 | 视觉锚 + 国际化信号 |

#### 文案精确定稿

- **L0 Chip**：`🟢 Open to Work · Hangzhou · 寻找 AI 产品 / 研究全职机会`
- **L1 Line 1**：`我是郑宁宁。`（Fraunces 中文配 Noto Serif SC，最大字号）
- **L1 Line 2**：`一个用 AI 自己造工具的文科战略研究员。`（同字号，italic 强调"用 AI 自己造工具"）
- **L2**：`AI Industry Researcher · Product Operator · Vibe Coder`（英文，字距加宽 .18em，全大写）
- **L3**：`"Taste 比代码更稀缺。" — 我相信的事`（Fraunces italic，引号包裹）
- **L4 Primary CTA**：`看看我的作品 →`
- **L4 Secondary CTA**：`读读我的文章`

#### Why（为什么这样写）

1. **求职状态前置（L0）**：求职敲门砖网站的最高优先级信息是"我在找工作"——HR 0.5 秒就要看到。Status Chip 用绿色 + 圆点动效，是视觉硬信号
2. **名字先于金句（L1 line 1）**：上一版用金句开场，HR 第一反应是"她是谁？"——记忆点反而稀释。新版直接用"我是郑宁宁。"做主语，2 秒回答身份
3. **一句话画像（L1 line 2）**：`用 AI 自己造工具的文科战略研究员` 是用户**最精准的自我定义**——比"AI 行业研究 / 产品运营"功能性描述更立体，自带非对称武器（文科 + Vibe Coding）
4. **身份三标签（L2）**：英文标签为 LinkedIn / 国际场景准备的可索引身份词
5. **金句降级为引言（L3）**：保留 Taste 记忆点，但用 italic + 引号 + 破折号格式表明这是"信念引言"而非营销 slogan ——更克制、更有思考感
6. **避免扎人词**：仍然不用"廉价 / 替代"等
7. **一句一行的节奏**：L1 两行用断行制造朗读节奏，强调陈述感

#### How（怎么实现）

- L0 Chip：`background: rgba(124,179,66,.16); color: #5C8C2C;` 圆点 pulse 动画
- L1 主标题：`font-family: var(--fh); font-size: clamp(2.4rem, 5.6vw, 4.4rem); font-weight: 700;`，第二行 italic 关键词用 `<em>` 着色 `var(--primary)`
- L2 身份三标签：`font-family: var(--fb); font-size: clamp(.85rem, 1.3vw, 1rem); letter-spacing: .18em; text-transform: uppercase; color: var(--muted-fg);`
- L3 引言：`font-family: var(--fh); font-style: italic; font-size: clamp(.95rem, 1.5vw, 1.15rem); color: var(--bark); opacity: .82;`
- L4 CTA：保留 V2 胶囊形按钮 + hover scale 1.06
- 头像：圆形 88px + 米白边框 + V2 ss 阴影
- 进场动画：`fadeUp` 阶梯 delay（L0: .1s / 头像: .15s / L1: .2s / L2: .35s / L3: .45s / L4: .55s）

#### 验收标准

- [ ] HR 5 秒内能完整说出"她叫什么、做什么、要什么"三件事
- [ ] 移动端 L1 不溢出 / 不挤压
- [ ] L0 Status Chip 在浅色背景上对比度 ≥ WCAG AA
- [ ] 头像在 Hero 视觉层级中是辅助而非主角

### 8.2 Manifesto 板块（首页核心差异化）

#### 位置

Hero 之后，Selected Works 之前。这是新版相对 V2 完全新增的板块。

#### 5 条主张（按递进顺序）

1. **AI 打破了文科生和理科生的边界。会写代码不再是门槛，有想法才是。**
2. **永远不要把思考让渡给 AI——你让渡多少，最后就要返工多少。**
3. **AI 不会替你想清楚你要什么。你越想得清楚，它做得越对。**
4. **Vibe Coding 解决了代码的问题，但 Taste 还是得自己长。**
5. **AI 让代码变得便宜，没让程序员变得无关——它只是把"有想法的人"拉到了同一张桌子上。**

人物画像三句话：**有判断力的文科生 + 不让渡思考 + 重 Taste + 站在文理之间**。

#### 视觉处理（A 方案：反色海报）

- 整段背景：苔绿 #5D7052
- 文字：米白 #F3F4F1
- 字体：Fraunces Italic 大字
- 序号：暖橘 #C18C5D 大字（01-05）
- 五条之间用细分隔线
- 整段 eyebrow 标签："I Believe / 我相信"

#### Why

- 整页所有板块都是柔和米白底 → 反色海报提供"硬"的视觉锚点
- 反色对应"宣言"语气，气势更足
- HR / 面试官最容易引用的内容载体（"我看到你网站上写的那条"）

#### How

- 自定义 Astro 组件 `<ManifestoPoster />`
- IntersectionObserver 触发逐条 reveal 动画
- 移动端字号自动缩放（clamp）

### 8.3 Selected Works 3 张卡（首页作品集精选）

每张卡对应 Hero 副行三个身份柱子之一，让 HR 看完 30 秒就能验证三柱子都立得住。

#### Card A · 《低空经济白皮书》


| 字段    | 内容                                                  |
| ----- | --------------------------------------------------- |
| 柱子    | AI 行业研究 / 项目立项                                      |
| 标题    | 《低空经济白皮书》· 全国首张业务全景图                                |
| 一句话描述 | 我自己发现这个赛道、推动公司立项，带队画出全国首张低空经济业务全景图，主笔白皮书获 CEO 高度评价。 |
| 看点    | 不是"我写了一本白皮书"，而是"从 0 发现 → 推动立项 → 带队主笔"的完整闭环          |
| Tags  | 行业研究 · 项目立项 · 牵头主笔 · 全景图                            |
| 形态    | 详情页 + PDF 下载 + 业务全景图大图                              |
| 跳转    | /works/baipishu                                     |


#### Card B · AI 行业信息采集器（个人作品 · 中央位置）


| 字段       | 内容                                                                |
| -------- | ----------------------------------------------------------------- |
| 柱子       | Vibe Coder / 自动化 Agent                                            |
| 标题       | AI 行业信息采集器 · 我给自己造的 AI 研究员                                        |
| 一句话描述    | 用 Vibe Coding 给自己造了一个 AI 研究员——每天自动追踪 AI 行业信号、产出结构化洞见，本职工作的"基础设施"。 |
| 看点       | **非对称武器**。文科战略岗的人能拿出"我自己用 AI 搭了一个 Agent"，区别于 99% 的简历              |
| Tags     | Vibe Coding · 自动化 Agent · 研究工作流                                   |
| 形态       | 详情页 + GitHub 链接 + Demo 视频 / 截图                                    |
| 跳转       | /works/agent                                                      |
| **特殊视觉** | 视觉权重最大；中间位置；带 "Live" 闪烁绿点                                         |


#### Card C · 智能体分类体系 v0.2


| 字段    | 内容                                                          |
| ----- | ----------------------------------------------------------- |
| 柱子    | AI 产品运营 / 体系化思考                                             |
| 标题    | 智能体分类体系 v0.2 · 组织 300 个 AI                                  |
| 一句话描述 | 为研发产出的近 300 个智能体设计"角色 × 场景"分类矩阵，沉淀为公司 AI 产品门户的内容底座，打通研发与售前。 |
| 看点    | 把"一堆乱跑的 AI"组织成"可被销售推广的产品体系"——AI 产品运营岗的核心动作                  |
| Tags  | AI 产品运营 · 体系设计 · 研发-市场连接                                    |
| 形态    | 详情页 + 分类矩阵图（一张图说清）                                          |
| 跳转    | /works/agent-taxonomy                                       |


### 8.4 Recent Writings（首页 3 篇 + 分类规划）

#### 3 个内容分类（贯穿整站）


| 分类                      | slug          | 定位            | 内容范围                                      |
| ----------------------- | ------------- | ------------- | ----------------------------------------- |
| 🛠 AI 工作流 / Vibe Coding | `ai-workflow` | "我怎么用 AI 干活"  | Vibe Coding 实战、工具选型、Prompt 心得、自建 Agent 过程 |
| 🔭 行业观察                 | `industry`    | "我怎么看这个行业"    | AI / 智能体 / 产品趋势 / 独立洞察                    |
| 📓 工作复盘 / 方法论           | `reflection`  | "我做完一件事学到了什么" | 情报体系搭建 / 白皮书写作 / AI 工具培训等方法论              |


每类对应不同的求职印象点：**Vibe Coder 的实操能力 / 研究员的判断力 / 产品人的方法论**。

#### 首发 3 篇文章

##### 文章 1：《Vibe Coding 30 天：6 条我从踩坑里捡回来的原则》

- **分类**：AI 工作流
- **published date**：2026-05-08
- **核心点**：不让渡思考、time-boxing 防完美主义、Taste 自己长、工具选型 Best Practice、设计原理打底、信任但要指挥
- **来源**：用户《Vibecoding 经验总结》笔记原稿
- **预估字数**：3000-4000
- **价值**：最有体感的一篇，让 HR 立刻感受到"她真的在用 AI 干活"

##### 文章 2：《AI 让文科生重新有了价值》

- **分类**：行业观察
- **published date**：2026-05-09
- **核心点**：AI 打破文理边界、代码不再是门槛、有想法变成生产力、文科背景的优势
- **来源**：用户对话中的"AI × 文理边界"思考
- **预估字数**：2500-3500
- **价值**：思想代表作。直接撑起 Hero + Manifesto M5 的论点。HR 看完会形成"她有判断力"的强印象

##### 文章 3：《给一群 PM 上 AI 工具课，我学到的 5 件事》

- **分类**：工作复盘
- **published date**：2026-05-09
- **核心点**：PRC-AI 培训复盘 / 不同 PM 的 AI 接受度差异 / 培训方法论 / "教会别人用 AI"的杠杆
- **预估字数**：2500-3500
- **价值**：方法论类，体现你"既懂 AI 又懂如何让别人用上 AI"——AI 产品运营岗的核心溢价

### 8.5 About 页 4 板块（完整内容定稿）

#### 板块 1：我是谁

3-5 段叙事化自我陈述，第一人称，配 Hero 区小头像在右侧穿插。

> 我是郑宁宁，朋友叫我 Kayla。求学经济学和创新管理，一路是文科生的路径。但 2024 年开始接触 AI 行业研究和 AI 产品运营之后，我发现自己慢慢站在了一个奇怪的位置上：**我能写白皮书，也能用 Vibe Coding 自己搭一个小 Agent；我能做行业战略，也能给一群 PM 上 AI 工具课。** 这个位置以前不存在。它只在 AI 时代才出现。
>
> 在思特奇的一年半里，我牵头推动了公司低空经济业务从 0 到 1 的立项与白皮书撰写，主导了智能体分类体系的设计和 AI 产品发布的内容策划，随 CEO 出访丹麦做全英文路演，也给一线销售团队做过区域市场调研提纲。这是一段把"研究 → 产品 → 市场"全链路跑通的经历。
>
> 2026 年 3 月我离职了，这是有意识的选择。我想花一段时间打磨自己的 AI 工作流，做更多 Vibe Coding 实验，整理过去这一年半的方法论，并且——在 Hero 区那句"Taste 比代码更稀缺"成为我个人品牌之前——亲自试一遍它是不是真的。

#### 板块 2：经历时间线（V2 timeline 完整保留）

**工作经历**：

- 业务研究工程师 / 战略分析师 · 北京思特奇信息技术 · 产品需求委员会 · 2024.07 – 2026.03
- 创新顾问助理（实习）· 北京因维管理咨询 · 2023.06 – 2023.09
- 战略新业务部实习生 · 蔚来 NIO · 2022.07 – 2022.10

**教育**：

- 管理科学与工程 硕士（创新管理方向）· 中国科学院大学 · 联培：丹麦奥尔堡大学 · 2021.09 – 2024.06 · GPA 3.84/4.00
- 经济学 本科 · 中国传媒大学 · 经济与管理学院 · 2017.09 – 2021.06 · GPA 3.88，专业 1/25

#### 板块 3：技能 / 工具栈


| 类别        | 工具 / 能力                                                                               |
| --------- | ------------------------------------------------------------------------------------- |
| 行业研究      | PEST · SWOT · 波特五力 · 产业链拆解 · 商业模式分析 · Perplexity · Gemini Deep Research · Notebook LM |
| AI 产品与原型  | Xmind · Mermaid · Figma · Magic Patterns                                              |
| AI 工具与工程化 | Prompt Engineering · Vibe Coding · 自动化信息采集 Agent · Claude Code · Codex                |
| 语言与沟通     | 雅思 7.5 · 剑桥商务英语 (BEC) 高级 · 英语六级 594 · 普通话二甲 · 韩语自学中                                   |


#### 板块 4：一些非工作的我（用户最在意的板块，已完整定稿）

##### 🏠 Now

> 2026 年春天，杭州。结束了一段研究岗工作，正在打磨自己的 AI 工作流、做 AI 行业研究、用 Vibe Coding 做一些小产品。

##### 📚 最近在读

> **小说类：** 金爱烂《滔滔生活》《外面是夏天》——她总是能用极细的笔触，描写出人性在每一个幽微时刻的真实样子。其中《滔滔生活》和《口水连连》两篇感受最深。
>
> **社会哲学：** 最近开始看迈克尔·桑德尔《精英的傲慢：好的社会该如何定义成功？》——想搞清楚优绩主义为什么这么深刻地影响了我。同时刚读完赫尔曼·黑塞《荒原狼》，主人公在市民阶级和哲学家两种身份之间切换、撕裂的感受，我时常也会有；以及在啃欧内斯特·贝克尔《死亡否认》（The Denial of Death），想了解一些心理学层面的东西。
>
> **行业 & 人物：** 《如何快速了解一个行业》——想看看自己的研究方法论还有没有可以改进的地方；《黄仁勋：英伟达之芯片》看了一小半，想知道他这几十年的关键决策是怎么做的。

##### 💃 兴趣爱好

> **跳舞：** 爵士、韩舞、中国舞都跳。每当音乐响起，我能很快进入心流——就算动作不完美，扭起来就快乐；每解锁一个新难度的动作，都会有强烈的成就感。
>
> **普拉提：** 大学时练过 1.5 年垫上普拉提，现在系统学器械普拉提。它让我对自己的呼吸模式和腰部柔软度有了完全不同的认知，腰痛缓解了很多。
>
> **徒步：** 走过西湖群山的"龙"路线（26 公里）、北京野长城、香山、香港麦理浩径一段。喜欢徒步是因为：一边可以亲近大自然，在景色里得到疗愈；另一边它是**一种行走的冥想**，是和自我心灵对话的过程。
>
> **旅行：** 去过马来西亚、泰国、新加坡、俄罗斯、韩国、日本、丹麦、瑞典。但我最在意的从来不是景点，**而是当地人怎么说话、怎么吃饭、怎么坐地铁、怎么和陌生人打招呼**。一个人去了济州岛，四天三晚，看到牛岛遍地的油菜花和果冻海让我觉得"面向辽阔大海的时候，所有烦恼都会消散"。
>
> **摄影：** 喜欢拍真实的人文，不爱摆拍。手上有相机、Pocket 3、胶片机、拍立得，但用得最多的还是手机。

##### 🎙 常听的播客

> 我同时订阅 20+ 档播客，最常打开的有：
>
> ・**张小珺商业访谈录** —— 深度对谈，最近听的一期嘉宾是 Manus 联合创始人Peak，听到很多对 AI 行业的深度洞察。  
> ・**西西弗高速** —— 主持人 J 和小康，提供女性主义和公共社会议题的日常观察，最近每天都在听。
> ・**岩中花述** —— 鲁豫采访的每一位女性都很有力量，我从对话里得到很多面对生活的勇气。
> ・**知行小酒馆** —— 名义上讲金融，实际很有人文关怀。特别喜欢雨白的声音与叙事时娓娓道来不疾不徐的感觉。  
> ・**Blow Your Mind** —— 听了好几年了，主持人是 Bro 峰和简里里，对谈像和朋友闲聊一样舒服。
> ・**独树不成林** —— 主播仲树，爱运动的哲学博士，既聊政治哲学也聊各种运动。

##### ✍️ 我相信的几件事

> **人是流动的。** 不同的年龄、不同的状态下，想法一定会变。我不会因为我过去是那样想的、现在不这么想了，就责怪自己——只要我不停地学习、不停地输入、一点点根据输入调整自己，我会和自己达成最圆满的和解。
>
> **Karma 是真的。** 我没有宗教信仰，但始终相信因果。这是我做选择最底层的原则。
>
> **为每一个进步欢呼雀跃。** 不管是工作上的、亲密关系上的，还是生活上的——很小的进步也值得自己跟自己鼓掌。

> **视觉处理**："**人是流动的。**" 单独成一行 + 加大字号（约 1.5x） + Fraunces italic + 引号包裹，作为本板块视觉锚点。

##### 🌱 当前在学

> 普拉提（器械）· 职业英语 · 爵士舞 · AI 专业知识 · 韩语（持续）

##### 🎨 视觉碎片

> 自己拍的人文摄影 · Pinterest 上收的搞怪小画

##### 💌 一句给来访者的话（板块结尾）

> "你来了，很高兴认识你。听完我的故事，我也想听听你的。"

### 8.6 Now 信号位（Home 一行字 + /now 详情页）

#### Home 版（一行字）

位置：Hero 下方右下角小角标 OR Contact 上方一行。

```
🟢 Now: 在 Vibe Coding 一个新项目，正在杭州寻找 AI 产品/研究全职机会
```

#### /now 详情页

完整版"我现在在做什么"，比 Home 一行字详细 10 倍：

- 当前进行中的项目
- 当前在读的书
- 当前在学的技能
- 当前的锻炼节奏
- 求职进展（脱敏）
- Last updated 时间戳

### 8.7 文案语调与品牌声音 (Brand Voice)


| 维度       | 取向                   | 反例           |
| -------- | -------------------- | ------------ |
| 整体语气     | 克制 / 真实 / 有思考        | 热情 / 激情 / 加油 |
| 句长       | 长短句结合，富节奏感           | 全是短句的口播感     |
| 形容词      | 少用 / 用具体的            | "非常""特别""很多" |
| 第一人称     | "我"用得自然              | "笔者""小编"     |
| 行业词      | 解释清楚                 | 堆砌不解释        |
| 专业 vs 真实 | About 板块 4 切换更亲近     | 全篇一种语气       |
| Emoji 使用 | About 非工作板块小用，其他位置不用 | 装饰性满屏        |


---

## 9. Functional Requirements / 功能需求

每个功能附 ID、描述、优先级（P0/P1/P2）、验收标准。P0 = MVP 必须，P1 = MVP 内若有时间，P2 = V1.x 后续。

### 9.1 Home 页


| ID   | 功能                 | 描述                           | 优先级 | 验收标准                                        |
| ---- | ------------------ | ---------------------------- | --- | ------------------------------------------- |
| H-01 | Hero 区             | 大字 + 小字 + 双 CTA + blob 装饰    | P0  | 首屏 100vh，移动端不挤压；fadeUp 动画播放正常               |
| H-02 | Sticky 顶部导航        | 5 个英文导航 + Logo + 搜索图标        | P0  | 滚动后变胶囊形 + 当前页高亮 + 移动端汉堡菜单                   |
| H-03 | Manifesto 海报       | 5 条主张 + 反色背景                 | P0  | 进入视口逐条 reveal 动画；移动端字号缩放                    |
| H-04 | Selected Works 3 卡 | A/B/C 卡片 + Card B 中央加 Live 点 | P0  | hover 抬升 + 点击跳详情；Card B 闪烁动画稳定              |
| H-05 | Recent 3 Writings  | 自动取最新 3 篇                    | P0  | 显示 title/date/category/excerpt/reading time |
| H-06 | Now 信号位（一行）        | 圆点 + 一句话                     | P0  | 点击进 /now 详情                                 |
| H-07 | Contact 入口区        | 邮箱 + 4 社交 + 求职状态             | P0  | 邮箱 mailto 可点击；4 个社交新窗打开                     |
| H-08 | Footer             | 版权 + English Name + 末次更新时间   | P0  | 简洁居中                                        |


### 9.2 Works 页（全集 + 详情）


| ID   | 功能                 | 描述                                   | 优先级 | 验收标准                                               |
| ---- | ------------------ | ------------------------------------ | --- | -------------------------------------------------- |
| W-01 | 作品网格               | 13 件作品卡片网格                           | P0  | 响应式 1/2/3 列；按 ⭐ 排序                                 |
| W-02 | Tag 筛选             | 按行业研究 / AI 产品 / Vibe Coding / 个人作品筛选 | P0  | 点击 tag 即筛；URL query 同步                             |
| W-03 | Selected Works 详情页 | A/B/C 完整详情页                          | P0  | 含背景 / 我的角色 / 思考过程 / 成果 / 外链                        |
| W-04 | 简版作品页              | 其他 10 件简版页                           | P0  | 1 段描述 + 外链或 PDF                                    |
| W-05 | 内容 frontmatter     | 统一 schema                            | P0  | title/date/category/star/tags/excerpt/external_url |
| W-06 | 业务全景图大图查看          | Card A 用                             | P1  | 可点击放大                                              |


### 9.3 Writings 页（列表 + 详情）


| ID    | 功能                | 描述                  | 优先级 | 验收标准                                        |
| ----- | ----------------- | ------------------- | --- | ------------------------------------------- |
| WR-01 | 文章列表              | 按 date 倒序展示         | P0  | 显示 title/date/excerpt/category/reading time |
| WR-02 | 分类筛选              | 3 个分类 filter        | P0  | 点击切换；URL 路径 /writings/category/[slug]       |
| WR-03 | 文章详情页             | MDX 渲染 + 长文阅读排版     | P0  | 衬线字体 / 大引文块 / 行高放宽                          |
| WR-04 | 文章 frontmatter    | 统一 schema 含 now 字段  | P0  | 验证字段完整                                      |
| WR-05 | 多端分享按钮            | 微信 / 小红书 / X / 复制链接 | P0  | 文章末尾，可点击触发                                  |
| WR-06 | 阅读时长              | 自动计算                | P0  | 中文 300 字/分钟换算                               |
| WR-07 | published date 显示 | 列表 + 详情顶            | P0  | 形如 "2026-05-08 · 8 min read"                |
| WR-08 | 上下篇导航             | 详情页底部               | P1  | 同分类下上下篇                                     |
| WR-09 | 文章 TOC            | 详情页右侧               | P2  | h2/h3 自动生成                                  |


### 9.4 About 页


| ID   | 功能             | 描述                    | 优先级 | 验收标准         |
| ---- | -------------- | --------------------- | --- | ------------ |
| A-01 | 4 板块完整内容       | 我是谁/时间线/技能/非工作        | P0  | 内容已定稿（见 8.5） |
| A-02 | 时间线 stagger 动画 | 保留 V2                 | P0  | 进视口顺序入场      |
| A-03 | "人是流动的"特殊视觉    | 加大字号 + italic + 引号    | P0  | 视觉重音明显       |
| A-04 | Hero 小头像穿插     | 板块 1 右侧               | P0  | 圆形 4:5，与文字平衡 |
| A-05 | 播客名带链接         | 跳小宇宙 / Apple Podcasts | P1  | 新窗打开         |


### 9.5 Contact 页


| ID   | 功能        | 描述                                                                 | 优先级 | 验收标准        |
| ---- | --------- | ------------------------------------------------------------------ | --- | ----------- |
| C-01 | 邮箱卡片      | mailto:[ningningzheng325@163.com](mailto:ningningzheng325@163.com) | P0  | 点击打开默认邮件客户端 |
| C-02 | 4 个社交链接   | LinkedIn / 小红书 / 即刻 / GitHub                                       | P0  | 新窗口打开       |
| C-03 | 求职状态 chip | "杭州 · 寻找 AI 产品/研究全职机会"                                             | P0  | 醒目展示        |
| C-04 | 一句话引导     | "期待和你聊聊 AI × 行业研究 / 战略 / 产品"                                       | P0  | 在卡片之上       |


### 9.6 /now 页


| ID   | 功能        | 描述                         | 优先级 | 验收标准          |
| ---- | --------- | -------------------------- | --- | ------------- |
| N-01 | 完整 Now 内容 | 在做什么/在读/在学/锻炼/求职           | P0  | 比 Home 一行字详细  |
| N-02 | 更新时间戳     | "Last updated: YYYY-MM-DD" | P0  | 自动从文件 mtime 读 |
| N-03 | 历史归档      | 旧版 Now 留底                  | P1  | 时间倒序          |


### 9.7 站内搜索


| ID   | 功能          | 描述          | 优先级 | 验收标准                     |
| ---- | ----------- | ----------- | --- | ------------------------ |
| S-01 | Pagefind 集成 | 全站文章 + 作品搜索 | P0  | 关键词匹配 + 高亮               |
| S-02 | 顶部导航搜索图标    | 点击弹出搜索框     | P0  | ESC 关闭                   |
| S-03 | 搜索结果列表      | 分组展示        | P0  | 含 title + excerpt + 跳转链接 |


### 9.8 SEO 与可访问性


| ID      | 功能               | 描述                           | 优先级 | 验收标准                     |
| ------- | ---------------- | ---------------------------- | --- | ------------------------ |
| SEO-01  | 每页 unique title  | 不同                           | P0  | 包含主关键词 + 站名              |
| SEO-02  | meta description | 每页独立                         | P0  | 100-160 字符               |
| SEO-03  | OG image         | 全站统一 fallback + 文章自定义        | P0  | 1200x630                 |
| SEO-04  | sitemap.xml      | 自动生成                         | P0  | 提交 Google Search Console |
| SEO-05  | robots.txt       | allow all                    | P0  | -                        |
| SEO-06  | canonical URL    | 每页                           | P0  | 防重复内容                    |
| A11Y-01 | 语义 HTML          | h1-h6 / nav / article / main | P0  | Lighthouse a11y > 90     |
| A11Y-02 | alt 文本           | 所有图片                         | P0  | -                        |
| A11Y-03 | 键盘可访问            | tab 顺序合理                     | P0  | 全站 tab 一遍无卡点             |
| A11Y-04 | 颜色对比度            | WCAG AA                      | P0  | Manifesto 海报对比验证         |


---

## 10. Visual & Interaction Design / 视觉与交互设计

### 10.1 配色系统（V2 完整保留）


| Token       | HEX     | 用途                   |
| ----------- | ------- | -------------------- |
| --bg        | #FDFCF8 | 主背景米白                |
| --fg        | #2C2C24 | 主文字                  |
| --primary   | #5D7052 | 苔绿（强调 / Manifesto 底） |
| --primary-f | #F3F4F1 | 反色文字（Manifesto 上）    |
| --secondary | #C18C5D | 暖橘（次强调 / Eyebrow）    |
| --accent    | #E6DCCD | 米色装饰                 |
| --muted     | #F0EBE5 | 浅底色（About 区底）        |
| --muted-fg  | #78786C | 次要文字                 |
| --border    | #DED8CF | 边框                   |
| --bark      | #4A4A40 | 暗深色                  |


### 10.2 字体系统


| Token | 字体栈                                     | 用途                         |
| ----- | --------------------------------------- | -------------------------- |
| --fh  | Fraunces, Noto Serif SC, Georgia, serif | 标题 / Hero / 引文 / Manifesto |
| --fb  | Nunito, Noto Sans SC, sans-serif        | 正文 / 导航 / 按钮               |


字号规则：clamp 流式响应，例如 `clamp(2.8rem, 7vw, 5rem)`。

### 10.3 间距与圆角

- 板块间距：`padding: 96px 24px`（桌面）/ `64px 20px`（移动）
- Hero 圆角：胶囊 `9999px`
- 卡片圆角：异形（`pr0/pr1/pr2/pr3` 4 种变体保留）
- Manifesto 海报：纯直角 / 微圆角（与"宣言"气质匹配）

### 10.4 关键组件规范

#### Manifesto 海报

```
背景: #5D7052 + 极浅噪点（V2 滤镜）
文字: #F3F4F1, Fraunces Italic
序号: #C18C5D, Fraunces 大字
布局: 5 条 stack，每条 padding 32px，分隔线 rgba(243,244,241,0.12)
进场: IntersectionObserver 逐条 fadeUp +120ms 阶梯
```

#### Now 信号位（Home 版）

```
位置: Hero 下方右下小角标
形态: 圆点 🟢 + 一句话 + 下划线"详情→"
背景: rgba(93,112,82,0.08)
圆角: 9999px
点击: 跳 /now
```

#### Works 卡片

```
4 种异形圆角 (pr0/pr1/pr2/pr3) 保留
Hover: translateY(-5px) + shadow 升级
Card B 特殊: 中间位置 + "Live" 闪烁绿点 + 视觉权重最大
```

#### Writings 列表项（借鉴 Jane 模板）

```
布局: 日期 · 阅读时长 / 标题 / Excerpt / 分类 chip
字体: Fraunces 标题 + Nunito excerpt
分隔: 细横线 #DED8CF
Hover: 标题颜色变 primary
不用 emoji 装饰
```

### 10.5 动效规范（V2 浓度全保留）


| 动效               | 配置                                 | 触发      |
| ---------------- | ---------------------------------- | ------- |
| Hero fadeUp      | 各元素 .1-.6s 阶梯 delay                | 页面加载    |
| Blob drift       | 10s 循环 ease-in-out                 | 持续      |
| Reveal on scroll | IntersectionObserver threshold .12 | 进视口     |
| Timeline stagger | each item +130ms delay             | About 页 |
| Nav active state | scroll position 跟踪                 | 滚动      |
| Manifesto 反色海报进场 | 5 条逐条 reveal                       | 进视口     |


### 10.6 响应式断点

- Desktop: ≥ 1024px（默认设计基准 1280px）
- Tablet: 768-1023px
- Mobile: < 768px

各断点测试设备：iPhone 15 / iPad / MacBook Air / Windows PC。

---

## 11. Technical Architecture / 技术架构

### 11.1 技术栈选型表


| 层    | 选型                                         | 版本         | 说明                                               |
| ---- | ------------------------------------------ | ---------- | ------------------------------------------------ |
| 框架   | Astro                                      | 4.x        | SSG / Islands                                    |
| 内容   | MDX (astro:content)                        | -          | 文章 + 作品都用 MDX                                    |
| UI   | 原生 HTML/CSS + 选用 React Islands             | React 18.x | 大部分静态                                            |
| 部署   | Vercel                                     | -          | 自动部署 + 预览分支                                      |
| 仓库   | GitHub Public (sunnymilky80/personal-site) | -          | 公开仓库本身是人设                                        |
| 域名   | 待购买（提议 zhengnn.me 或 ningningzheng.com）     | -          | 上线前 3 天注册                                        |
| 站内搜索 | Pagefind                                   | 1.x        | 静态站搜索方案                                          |
| 字体   | Google Fonts                               | -          | Fraunces / Nunito / Noto Serif SC / Noto Sans SC |
| 图标   | inline SVG                                 | -          | 不引图标库                                            |
| 分析   | （MVP 不做）                                   | -          | V1.x 加 Plausible                                 |
| 代码高亮 | Shiki                                      | -          | Astro 自带                                         |


### 11.2 选型理由对比表（决策日志精华）

#### Astro vs Next.js vs 纯静态 HTML


| 维度              | Astro（选定）    | Next.js（备选） | 纯静态 HTML（V2） |
| --------------- | ------------ | ----------- | ------------ |
| 内容更新成本          | 新建 .mdx 文件即可 | 同等          | 改源码          |
| V2 风格迁移         | 100% 兼容      | 100% 兼容     | 不适用          |
| 性能（Lighthouse）  | 默认零 JS       | 需配置优化       | 最快           |
| 学习曲线            | 低            | 中           | -            |
| Pro 额度消耗        | 低            | 中-高         | -            |
| 嵌入 React 组件     | Islands 支持   | 原生          | 不支持          |
| SEO             | 优            | 优           | 优            |
| 未来迁移 Next.js 成本 | 低（半天-1 天）    | -           | -            |


**决策**：Astro 是 V2 风格保留 + 内容驱动场景的最优解。如未来要嵌入 AI Demo，再迁 Next.js。

### 11.3 项目结构

```
personal-site/
├── src/
│   ├── content/
│   │   ├── config.ts             # MDX collection schema
│   │   ├── works/                # 13 件作品 MDX
│   │   │   ├── baipishu.mdx
│   │   │   ├── agent.mdx
│   │   │   ├── agent-taxonomy.mdx
│   │   │   └── ...
│   │   └── writings/             # 文章 MDX
│   │       ├── vibe-coding-30days.mdx
│   │       ├── ai-revives-humanities.mdx
│   │       └── teaching-pms-ai-tools.mdx
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── ManifestoPoster.astro
│   │   ├── WorksCard.astro
│   │   ├── WritingsItem.astro
│   │   ├── NowSignal.astro
│   │   ├── Footer.astro
│   │   └── Search.astro
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── ArticleLayout.astro
│   │   └── WorkLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── works/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── writings/
│   │   │   ├── index.astro
│   │   │   ├── [slug].astro
│   │   │   └── category/[category].astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── now.astro
│   │   └── 404.astro
│   ├── styles/
│   │   ├── global.css            # V2 CSS 迁移
│   │   └── tokens.css            # CSS 变量
│   └── utils/
│       └── reading-time.ts
├── public/
│   ├── pdf/
│   │   ├── low-altitude-economy.pdf
│   │   └── web3-telco.pdf
│   ├── images/
│   │   ├── profile.jpg
│   │   └── og-image.png
│   └── favicon.svg
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

### 11.4 关键依赖

```json
{
  "dependencies": {
    "@astrojs/mdx": "^3.x",
    "@astrojs/sitemap": "^3.x",
    "@astrojs/rss": "^4.x",
    "@astrojs/react": "^3.x",
    "astro": "^4.x",
    "pagefind": "^1.x",
    "@pagefind/default-ui": "^1.x"
  }
}
```

### 11.5 MDX Content Schema (src/content/config.ts)

```typescript
import { defineCollection, z } from 'astro:content';

const writings = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.enum(['ai-workflow', 'industry', 'reflection']),
    excerpt: z.string(),
    tags: z.array(z.string()),
    now: z.string().optional(),
    draft: z.boolean().default(false),
    cover: z.string().optional(),
  }),
});

const works = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.enum(['work', 'personal']),
    star: z.number().min(1).max(5),
    category: z.string(),
    excerpt: z.string(),
    tags: z.array(z.string()),
    external_url: z.string().optional(),
    pdf_url: z.string().optional(),
    order: z.number().optional(),
    is_selected: z.boolean().default(false),
  }),
});

export const collections = { writings, works };
```

---

## 12. Content Operations / 内容运营

### 12.1 更新工作流（B + C 双通道）

#### 通道 B（主力）：Claude Code 协作

1. 你在本地或对话中告诉 Claude Code：
  > "帮我加一篇文章，标题《XXX》，分类 ai-workflow，内容如下：[贴文]"
2. Claude Code 自动：
  - 在 `src/content/writings/` 新建 `[slug].mdx`
  - 填好 frontmatter（title / date / category / excerpt / tags / now / draft）
  - `git add` + `git commit -m "Add: 《...》"` + `git push`
3. Vercel Webhook 触发自动部署，1-2 分钟后线上可见。

#### 通道 C（兜底）：GitHub 网页编辑

1. 浏览器打开 `github.com/sunnymilky80/personal-site/`
2. 进入 `src/content/writings/` → 点击 "Add file"
3. 在线编辑器写 markdown，commit
4. Vercel 自动部署

#### 何时用 B 何时用 C


| 场景         | 通道              |
| ---------- | --------------- |
| 在家有电脑，正常更新 | B               |
| 在外面用手机想发短文 | C               |
| 改一个错别字     | C 更快            |
| 需要写很长很复杂   | B（Claude 帮整理结构） |


### 12.2 Frontmatter 规范（Writings 文章）

```yaml
---
title: "Vibe Coding 30 天：6 条我从踩坑里捡回来的原则"
date: 2026-05-08
category: ai-workflow              # ai-workflow | industry | reflection
excerpt: "30 天 Vibe Coding 实践之后，我整理出 6 条最有用的原则——它们不是 AI 给的建议，是我从自己的返工里捡回来的。"
tags: [Vibe Coding, AI 工作流, 方法论]
now: "2026 春，杭州，刚结束 30 天 Vibe Coding 实验"
draft: false
cover: ""
---
```

### 12.3 Frontmatter 规范（Works 作品）

```yaml
---
title: "AI 行业信息采集器"
type: personal                    # work | personal
star: 4
category: vibe-coding
excerpt: "用 Vibe Coding 给自己造的 AI 研究员..."
tags: [Vibe Coding, Agent, 研究工作流]
external_url: "https://github.com/sunnymilky80/ai-info-collector"
order: 2
is_selected: true
---
```

### 12.4 发布流程

1. **写作期**：`draft: true`，先写完整文章
2. **自审**：错别字、措辞、链接、frontmatter 完整、now 字段填好
3. **预览**：本地 `npm run dev` 或 Vercel preview branch
4. **发布**：切 `draft: false` → `git push` → 上线
5. **同步分享**：去即刻 / 小红书 / LinkedIn 发链接

### 12.5 后续内容路线图（首发后 3 个月）


| 月份  | 计划文章                    | 计划作品                    |
| --- | ----------------------- | ----------------------- |
| 5 月 | 首发 3 篇                  | 3 张 Selected Works 详情完整 |
| 6 月 | +2 篇（情报体系方法论 / 白皮书写作经验） | +1 件个人 Vibe Coding 作品   |
| 7 月 | +2 篇（求职复盘 / 面试观察）       | -                       |


---

## 13. Privacy & Compliance / 隐私与合规

### 13.1 信息披露分级表


| 信息项                                                            | 分级    | 是否公开   | 形态                      |
| -------------------------------------------------------------- | ----- | ------ | ----------------------- |
| 真名 中/英文                                                        | L1 公开 | ✅      | 纯文本                     |
| 邮箱 [ningningzheng325@163.com](mailto:ningningzheng325@163.com) | L1 公开 | ✅      | mailto 链接               |
| 城市（杭州）                                                         | L1 公开 | ✅      | 纯文本                     |
| 求职状态                                                           | L1 公开 | ✅      | 纯文本                     |
| 教育院校 + GPA                                                     | L1 公开 | ✅      | 纯文本                     |
| 公司全称（思特奇）                                                      | L1 公开 | ✅      | 纯文本                     |
| 工作产出脱敏数字                                                       | L1 公开 | ✅      | 纯文本                     |
| 真人照片                                                           | L2 限定 | ✅ 仅小头像 | Hero 缩略 + About 板块 1 配图 |
| GitHub username (sunnymilky80)                                 | L1 公开 | ✅      | 链接                      |
| LinkedIn                                                       | L1 公开 | ✅      | 链接                      |
| 小红书 (宁宁小太阳 AI 版)                                               | L1 公开 | ✅      | 链接                      |
| 即刻 (郑宁宁_Kayla)                                                 | L1 公开 | ✅      | 链接                      |
|                                                                |       |        |                         |


### 13.2 HR 隐性歧视防御 Checklist

- About "Now" 措辞避免家庭 / 休养暗示，只写"在 Gap 期研究 AI"
- 不在公开内容提及婚恋、生育相关话题
- 简历照片选择中性专业感（不要强家庭氛围照）
- 不点名男友 / 家人，改用非人称描述（如"周末习惯逛西湖边公园"）

### 13.3 第三方权益

- 公司白皮书内容只放可公开版本（参考公司已对外发布的版本）
- 不公开内部代号、客户名（除非公司公开过）
- TMF 峰会照片仅用公司公开发布过的
- 同事 / CEO 姓名不点名

### 13.4 上线前隐私二次审 Checklist

- 全文搜索"19700792498"应为 0 次
- 全文搜索"微信"应为 0 次（除非是描述应用）
- 全文搜索 CEO 全名 / 上级名 / 同事名应为 0 次
- 旧版邮箱（QQ）已全部替换为新版
- LinkedIn 已更新到最新工作经历
- 简历 PDF 中和网站信息一致

---

## 14. Risk & Mitigation / 风险与对策


| 风险                       | 概率  | 影响  | 对策                                            |
| ------------------------ | --- | --- | --------------------------------------------- |
| 13 天写不完 6 篇内容            | 中   | 高   | Day 2-4 优先写作 / 必要时 Writings 降级到 2 篇首发 + 1 篇草稿 |
| Astro 学习曲线超预期            | 低   | 中   | Claude Code 兜底；备选 Next.js（半天可切）               |
| V2 视觉迁移失真                | 低   | 中   | 直接复制 V2 CSS 到 global.css，不重写                  |
| 域名注册延迟                   | 中   | 低   | 先用 Vercel 默认域名上线，域名到位后切换                      |
| HR 实际不点链接                | 中   | 中   | 简历显著位置放二维码 + 短链接；面试主动提及                       |
| 内容更新走样                   | 低   | 中   | 严格执行 frontmatter 规范，Claude Code 自动校验          |
| 隐私误暴露                    | 低   | 高   | 上线前执行 13.4 checklist 二次审                      |
| Vercel 海外访问慢             | 中   | 中   | 后期切 Cloudflare Pages 或国内 CDN                  |
| GitHub 仓库 Public 暴露代码不规范 | 低   | 低   | 用 Claude Code 协助保证基本代码质量；README 写清这是个人站       |
| 文章被盗用 / 抄袭               | 中   | 低   | 在 Footer 加 CC BY-NC-SA 4.0 协议声明               |


---

## 15. Roadmap & Milestones / 路线图

### 15.1 13 天实施计划（2026-04-27 → 2026-05-10）


| Day | 日期    | 主任务                                             | 产出                 | 备注          |
| --- | ----- | ----------------------------------------------- | ------------------ | ----------- |
| 1   | 04-27 | PRD + 高保真原型                                     | 本文档 + Home 原型 HTML | 今日          |
| 2   | 04-28 | 文章 1 写作 + Works 详情 A 写作                         | 2 篇草稿 MDX          | 用户写作        |
| 3   | 04-29 | 文章 2 写作 + Works 详情 B 写作                         | 2 篇草稿 MDX          | 用户写作        |
| 4   | 04-30 | 文章 3 写作 + Works 详情 C 写作                         | 2 篇草稿 MDX          | 用户写作        |
| 5   | 05-01 | Astro 项目初始化 + V2 CSS 迁移                         | 可运行骨架              | Claude Code |
| 6   | 05-02 | Home 实现：Hero / Manifesto / Works 卡 / Writings 列 | Home 完整页           | Claude Code |
| 7   | 05-03 | About 页实现 + 4 板块 + 时间线动画                        | About 完整页          | Claude Code |
| 8   | 05-04 | Works 列表 + 详情页模板 + 13 件填充                       | Works 完整           | Claude Code |
| 9   | 05-05 | Writings 列表 + 详情 + MDX 渲染 + 阅读时长                | Writings 完整        | Claude Code |
| 10  | 05-06 | /now + Contact + Footer + 站内搜索（Pagefind）        | 全部页面               | Claude Code |
| 11  | 05-07 | 域名购买 + Vercel 部署 + SEO + OG image + sitemap     | 线上 staging         | 部署          |
| 12  | 05-08 | 内容审校 + 字体优化 + 响应式调整 + 隐私二次审                     | 准上线                | QA          |
| 13  | 05-09 | LinkedIn 同步更新 + 简历改 + buffer                    | 上线就绪               | 收尾          |
| -   | 05-10 | 上线 V1 + 首次投递                                    | 🚀 上线              | 启动求职        |


### 15.2 V1.x 路线（上线后 1-3 月）

- **V1.1**：RSS feed
- **V1.2**：Plausible 数据统计
- **V1.3**：Giscus 评论集成
- **V1.4**：暗黑模式
- **V1.5**：双语切换（英文版核心页面）

### 15.3 V2.x 长期愿景（半年+）

- 嵌入式 AI Demo（让访客 trial 你的 Agent）
- Newsletter 邮件订阅
- 视频 / 播客内容承载
- /reading 阅读笔记独立板块
- 个人项目孵化器（孵化中的 Vibe 项目展示）

---

## 附录 A：决策日志（13 项关键决策的方案对比 + 选择理由）

### Decision 1：网站定位优先级

- **候选**：A 求职敲门砖 / B 个人 IP / C 作品集 / D 数字花园
- **选定**：A (P0) + C (P1) + B (P2) 复合优先级
- **Why**：求职紧迫性最高 + Gap 作品需要载体 + 长期价值在于 IP 沉淀
- **What/How**：Home 页结构按"求职敲门砖"优化（60 秒 get 你是谁）；Works 全集页深度承载作品；Writings 长期沉淀思想

### Decision 2：信息架构

- **候选**：A 单页+独立博客 / B 多页 / C 混合
- **选定**：B 多页站
- **Why**：用户希望持续打磨与更新，多页站结构更适合长期资产；A 装不下深度内容，C 让 Home 又回到简历感
- **What/How**：5 个一级页 + /now，每页职责单一

### Decision 3：技术栈

- **候选**：1 Next.js+MDX / 2 Astro+MDX / 3 Notion+同步 / 4 纯静态 HTML
- **选定**：2 Astro + MDX
- **Why**：内容驱动场景的最优解；性能 SEO 默认就好；Pro 额度消耗低；V2 风格 100% 可迁移；Vibe Coding 项目独立部署后链接展示，不必嵌入
- **What/How**：astro:content + MDX collection；React Islands 备用；Vercel 部署

### Decision 4：Hero 三段式信息层级（v1.1 修订）

- **候选 v1.0**：A 克制专业型 / B 观点驱动型 / C 行动派型 → 选 B（"Taste 比代码更稀缺"大字 + 身份副行）
- **修订原因**：v1.0 上线 V3 原型后用户反馈"首页不够引人 / 第一眼看不清我是谁"。复盘发现金句开场会让 HR 先问"她是谁？"，记忆点反被稀释；求职敲门砖站点应优先回答 Who/What/What-I-Want
- **候选 v1.1**：A 身份直陈型 / B 名字+金句双层并列 / C 三段式信息层级
- **选定 v1.1**：C 三段式信息层级
  - L0 Status Chip：求职状态（最显著前置）
  - L1 大字：`我是郑宁宁。一个用 AI 自己造工具的文科战略研究员。`
  - L2 身份三标签：AI Industry Researcher · Product Operator · Vibe Coder
  - L3 信念引言：`"Taste 比代码更稀缺。" — 我相信的事`（金句降级保留）
  - L4 双 CTA
- **Why v1.1**：
  1. 求职状态前置 → HR 0.5 秒看到"她在找工作"
  2. 名字先于金句 → 2 秒回答"她是谁"
  3. "用 AI 自己造工具的文科战略研究员"是更精准的一句话画像，自带非对称武器
  4. 金句降级为信念引言，更克制更专业
  5. 三段式视觉层级清晰，HR 5 秒完整 scan
- **What/How**：见 § 8.1 完整定稿

### Decision 5：Manifesto 5 条选择

- **候选**：8 条 (M1-M8) 池中挑 3-5 条
- **选定**：M5（文理边界）/ M1（不让渡思考）/ M6（说清楚要什么）/ M2（Taste 自己长）/ M7（同一张桌子）
- **Why**：替换 M3（行动派）后，五条形成完整人物画像：身份 → 原则 → 方法 → Taste → 立场，无重复维度
- **What/How**：每条都从用户原话提炼，保留她语言节奏

### Decision 6：Manifesto 视觉

- **候选**：A 反色海报 / B 大字断行 / C 手写引号
- **选定**：A 反色海报（曾选 C 后改 A）
- **Why**：整页柔和需要硬锐点；反色对应"宣言"语气；HR 最容易引用的内容载体
- **What/How**：苔绿底 + 米白大字 + 暖橘序号 + 逐条 reveal

### Decision 7：Selected Works 三张卡

- **选定**：Card A 低空经济白皮书 / Card B AI 行业信息采集器 / Card C 智能体分类体系 v0.2
- **Why**：每张卡对应 Hero 副行三个身份柱子之一（研究 / Vibe / 产品）；Card B 是非对称武器（文科战略岗 + Vibe Coding）
- **What/How**：Card B 视觉权重最大 + Live 闪烁点

### Decision 8：Writings 分类

- **选定**：AI 工作流 / 行业观察 / 工作复盘
- **Why**：各对应不同求职印象点（实操 / 判断力 / 方法论）；用户素材池都已就绪
- **What/How**：3 个 category enum；首发每类 1 篇

### Decision 9：视觉风格

- **候选**：保留 V2 / 大改成 Jane Framer 风格 / 混合
- **选定**：保留 V2 骨 + 借 Jane 三个具体点（清爽博客列表 / 数字信息块 / 主张型大标题勇气）
- **Why**：V2 风格已与人设匹配（杂志 + 知性）；Jane 是营销系不适合
- **What/How**：CSS 直接迁移；新增 Manifesto 海报作为"Jane 主张型大标题"的本地化

### Decision 10：语言策略

- **候选**：A 纯中文 / B 中文+英文点缀 / C 双语切换
- **选定**：B
- **Why**：国际化信号（雅思 7.5 / BEC / 丹麦联培）通过英文导航 + Eyebrow 暗示已足够；工作量可控；MVP 不做双语切换降低风险
- **What/How**：纯英文导航；中文正文；英文 Eyebrow；英文名一处出现

### Decision 11：隐私边界

- **选定**：不放手机 / 微信 / 家庭 / 孕情；邮箱换专业版 [ningningzheng325@163.com](mailto:ningningzheng325@163.com)
- **Why**：求职安全 + 反爬虫 + 反职场歧视
- **What/How**：上线前执行 13.4 checklist；社交账号只放 4 个

### Decision 12：MVP 范围

- **选定**：含站内搜索 / /now 页 / 多端分享按钮；不含暗黑模式 / 双语切换 / AI Demo
- **Why**：13 天约束下的甜蜜点；搜索和 /now 工作量小价值大；分享按钮促进传播
- **What/How**：Pagefind 集成；/now 独立页面；分享 = 复制链接 + WeChat / 小红书 / X 跳转

### Decision 13：更新工作流

- **选定**：B（Claude Code 协作）+ C（GitHub 网页编辑）双通道；Public 仓库；frontmatter 加 now 字段
- **Why**：B 配合用户 Vibe Coding 习惯零摩擦；C 兜底任何设备；Public 是"我也会写代码"人设的一部分；now 字段让每篇文章自带时间锚
- **What/How**：见 12.1-12.4

---

## 附录 B：13 件作品完整盘点表


| #   | 作品                | 类型  | 形态               | 公开  | ⭐   | 进入 Selected? |
| --- | ----------------- | --- | ---------------- | --- | --- | ------------ |
| 1   | 《低空经济白皮书》         | 工作  | PDF + 业务全景图      | 是   | 4   | ✅ Card A     |
| 2   | 《AI 产品白皮书》前两章     | 工作  | 框架描述（不脱敏）        | 否   | 3   | -            |
| 3   | 智能体分类体系 v0.2      | 工作  | 一张图 + 解读         | 是   | 3   | ✅ Card C     |
| 4   | Web3+Telco 行业分析报告 | 工作  | PDF              | 是   | 3   | -            |
| 5   | 庆阳低空数字化方案         | 工作  | 不公开（含敏感信息）       | 否   | 4   | -            |
| 6   | TMF 峰会路演          | 工作  | 照片 + 描述          | 是   | 3   | -            |
| 7   | AI 行业信息采集器        | 个人  | GitHub + Demo 视频 | 是   | 4   | ✅ Card B     |
| 8   | 扣钉项目（待定）          | 个人  | 在线链接（占位）         | 待定  | 3   | Now 信号位      |
| 9   | 英语口语训练项目          | 个人  | 在线链接             | 是   | 2   | -            |
| 10  | 《春日漫游指南》          | 个人  | 在线链接             | 是   | 1   | -            |
| 11  | 情报体系搭建            | 工作  | 思维导图 + 方法论文章     | 可   | 4   | -            |
| 12  | PRC-AI AI 工具培训    | 工作  | 飞书文档 + 复盘文章      | 可   | 3   | -            |
| 13  | AI 产品发布           | 工作  | 直播策划 + 视频审核      | 可   | 2   | -            |


---

## 附录 C：6 篇首发内容大纲

### Writings #1：《Vibe Coding 30 天：6 条我从踩坑里捡回来的原则》

```
1. 引子：30 天前我开始 Vibe Coding，今天我有 6 条原则
2. 原则一：永远不要把思考让渡给 AI
   - 反例：我让 AI 全权设计 PRD
   - 体感：返工三次
3. 原则二：Time-boxing 防止完美主义流产 MVP
   - 故事：《春日漫游指南》3 小时 vs 计划 30 分钟
4. 原则三：Taste 是 AI 给不了的——你得自己长
   - color hunt / Pinterest / 设计原理打底
5. 原则四：找到不同场景下的最佳工具组合
   - Claude / Gemini / Coze / Kiro 各自优势
6. 原则五：要会指挥 AI，不是只会信任 AI
   - 信任 AI 的执行，但方向必须你定
7. 原则六：先做出来再说，不要等想清楚
   - "边做边想"是 Vibe Coding 的精髓
8. 结尾：6 条原则的关系图（一张图）
```

### Writings #2：《AI 让文科生重新有了价值》

```
1. 引子：我是文科生，但我也能 Vibe Coding
2. AI 把一道边界擦除了：会写代码不再是门槛
3. 但代码不重要不等于工程师不重要
   - 复杂上线场景里，工程师依然是基础设施
4. 真正变重要的是什么：有想法的人
5. 文科生的优势：
   - 框架思维 / 共情 / 文本敏感度 / 跨界翻译
6. AI 时代文科生需要补什么：
   - 基础工程素养 / Taste / 不让渡思考
7. 我的体感：从研究员到 Vibe Coder 这一年
8. 结尾：AI 不是终结文科，而是重新定义文科价值
```

### Writings #3：《给一群 PM 上 AI 工具课，我学到的 5 件事》

```
1. 背景：我在公司给 100+ PM 上 AI 工具课
2. 事一：PM 的 AI 接受度差异比想象中大
3. 事二：教方法不如教方法论
4. 事三：教 AI 工具，本质是教人重新组织思考
5. 事四：80% 的 PM 不缺工具，缺信心
6. 事五：教别人用 AI 是放大杠杆的最高效方式
7. 结尾：PM 时代要被 AI 替代的不是 PM，是不变的 PM
```

### Works 详情 A：《低空经济白皮书》

```
1. 背景：2024 年我在思特奇看到的低空经济信号
2. 立项：我怎么从 0 到 1 推动公司立项
3. 全景图：我画的全国首张飞行全生命周期业务全景图
4. 白皮书：主笔的过程 + 难点 + CEO 评价
5. 后续：庆阳数字化方案 / 31 省调研提纲
6. 反思：从研究到落地的闭环 + 个人对低空经济的真实判断
7. 链接：PDF 下载 / 全景图大图查看
```

### Works 详情 B：AI 行业信息采集器

```
1. 起因：作为研究员我每天要看的信息太多
2. 设计：我想要一个 AI 研究员，每天给我结构化简报
3. 技术：用什么栈搭的（Claude API + 定时任务 + 数据库 + Telegram bot）
4. 工作流：从信号源 → 抓取 → AI 解读 → 结构化 → 推送
5. 演示：截图 / 视频 Demo
6. 反思：Vibe Coding 文科生造工具的真实体感
7. 链接：GitHub / Demo
```

### Works 详情 C：智能体分类体系 v0.2

```
1. 背景：公司有近 300 个研发产出的智能体，没有分类
2. 痛点：售前不知道有哪些 / 怎么推 / 推给谁
3. 设计：我提的"角色 × 场景"二维分类矩阵
4. 落地：覆盖 300 个智能体的分类表
5. 价值：成为 AI 产品门户内容底座 / 销售推广素材
6. 反思：体系化思考在 AI 时代的稀缺性
7. 链接：分类矩阵图（一张图说清）
```

---

## 附录 D：词汇表 Glossary


| 词                    | 定义                                      |
| -------------------- | --------------------------------------- |
| MVP                  | Minimum Viable Product，最小可用版本           |
| IA                   | Information Architecture，信息架构           |
| MDX                  | Markdown + JSX，可在 markdown 中嵌入 React 组件 |
| Frontmatter          | MDX / Markdown 文件顶部 YAML 元数据            |
| Vibe Coding          | 用 AI 协作编程的"凭感觉迭代 + 边做边想"方式              |
| Now Page             | 个人站社区惯例（Derek Sivers 发起），标注"我现在在做什么"    |
| Manifesto            | 个人主张 / 信念海报                             |
| Selected Works       | 精选作品（首页展示）                              |
| Eyebrow              | 板块小标签（Editorial 杂志术语）                   |
| OG Image             | Open Graph Image，社交分享缩略图                |
| Pagefind             | Astro 生态静态站搜索方案                         |
| Islands Architecture | Astro 局部水合（hydration）模式                 |
| Time-boxing          | 给任务设定固定时间限制                             |
| Taste                | 审美 / 品味 / 判断力                           |
| HR                   | Human Resources，人力资源                    |
| CTA                  | Call to Action，行动召唤按钮                   |
| SSG                  | Static Site Generation，静态站点生成           |


---

## 附录 E：上线前 Checklist

### E.1 内容 Checklist

- Hero 大字 + 小字 + 双 CTA 文案准确
- Manifesto 5 条文字一字不差
- 3 张 Selected Works 文案 + 跳转正确
- About 4 板块完整 + "人是流动的"加粗
- 3 篇 Writings 写完且 frontmatter 完整
- 3 篇 Works 详情写完
- /now 页内容齐全
- Contact 页 4 个社交链接全部正确
- Footer 版权 + English Name 正确

### E.2 技术 Checklist

- 所有页面 Lighthouse ≥ 85
- 移动端实测（iPhone Safari + Android Chrome）
- 所有外链 target="_blank" + rel="noopener"
- 所有图片 alt 文本
- 站内搜索可用
- sitemap.xml 生成
- robots.txt 配置
- OG image 全站 fallback 设置
- 404 页面美观
- HTTPS 启用
- 自定义域名解析正确

### E.3 隐私 Checklist

- 全文搜"19700792498" = 0 次
- 全文搜"微信" = 0 次（除非描述应用）
- 全文搜"男友""老公""孕" = 0 次
- CEO / 上级 / 同事姓名 = 0 次
- 旧 QQ 邮箱已替换为新邮箱
- LinkedIn 已更新
- 简历 PDF 与网站信息一致

### E.4 求职准备 Checklist

- 简历显著位置加二维码 + 短链接
- 简历末尾"延伸阅读"指向网站
- 网站首页 Hero 有清晰的"寻找全职机会"信号
- /now 页明确求职状态
- Contact 页突出"AI 产品/研究"求职方向

---

## 文档 End

> 这份 PRD 是为了把"想清楚"和"做出来"之间的距离压到最短。如果有任何决策后续需要回滚或调整，请新建 v1.1 版本，并在审阅记录里写明变更原因。
>
> —— 郑宁宁 × Claude，2026-04-27

