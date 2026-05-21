# Claude Code Skills 全量清单（用户 skills + 插件 skills）
- **生成日期**: 2026-05-14
- **用户 skills 根目录**: `~/.claude/skills/`
- **插件 skills 扫描根目录**: `~/.claude/plugins/`（递归查找所有 `SKILL.md`）
- **说明**: 插件是否「启用」取决于你在 Claude Code 的插件配置；本清单列出的是**磁盘上存在的**插件包内 skill 文件。
- **统计**: 用户 skills **91** 个；插件内 skills **48** 个。
---
## 目录

1. [用户 skills（`~/.claude/skills`）](#1-用户-skillsclaudeskills)
2. [插件 skills（`~/.claude/plugins`）](#2-插件-skillsclaudeplugins)
3. [重复与异常提示](#3-重复与异常提示)

---
## 1. 用户 skills（`~/.claude/skills`）

| 文件夹 | `name` | 功能（`description` 摘要） |
|--------|--------|---------------------------|
| `aihot` | `aihot` | AI HOT (aihot.virxact.com) 中文 AI 资讯查询 Skill。当用户想知道"今天 AI 圈有什么"、"AI 日报"、"AI HOT"、"AI 资讯"、"AI 热点"、"最近 AI"、"OpenAI/Anthropic/Google 最近发布了什么"、"AI hot today"、"AI news today"、"看一下 AI 行业动态"、"今天有什么大模型发布"、"昨天 AI 圈"、"看下精选条目"、"AI HOT 精选"、"最近一周的 AI 论文"、"AI 模型发布"、"AI 产品发布"、"AI 行业动态"、"AI 技巧与观点" 等任何中文 AI 资讯查询时使用。即使用户只说"AI 圈"、"AI 新… |
| `algorithmic-art` | `algorithmic-art` | Creating algorithmic art using p5.js with seeded randomness and interactive parameter exploration. Use this when users request creating art using code, generative art, algorithmic art, flow fields, or particle systems. Create original algorithmic art rather than copying existing artists' work to avoid copyright viol… |
| `brainstorm` | `brainstorm` | Unified brainstorming skill with dual-mode operation — auto mode (framework generation, parallel multi-role analysis, cross-role synthesis) and single role analysis. Triggers on "brainstorm", "头脑风暴". |
| `brainstorming` | `brainstorming` | You MUST use this before any creative work - creating features, building components, adding functionality, or modifying behavior. Explores user intent, requirements and design before implementation. |
| `brand-guidelines` | `brand-guidelines` | Applies Anthropic's official brand colors and typography to any sort of artifact that may benefit from having Anthropic's look-and-feel. Use it when brand colors or style guidelines, visual formatting, or company design standards apply. |
| `brand-guidelines canvas-design doc-coauthoring docx internal-comms mcp-builder pdf pptx skill-creator slack-gif-creator theme-factory web-artifacts-builder webapp-testing xlsx` | `brand-guidelines canvas-design doc-coauthoring docx internal-comms mcp-builder pdf pptx skill-creator slack-gif-creator theme-factory web-artifacts-builder webapp-testing xlsx` | *(无有效 `description`)* |
| `canvas-design` | `canvas-design` | Create beautiful visual art in .png and .pdf documents using design philosophy. You should use this skill when the user asks to create a poster, piece of art, design, or other static piece. Create original visual designs, never copying existing artists' work to avoid copyright violations. |
| `ccw-chain` | `ccw-chain` | Chain-based CCW workflow orchestrator. Intent analysis, workflow routing, and Skill pipeline execution via progressive chain loading. Triggers on "ccw chain", "chain ccw", "workflow chain". |
| `ccw-help` | `ccw-help` | CCW command help system. Search, browse, recommend commands, skills, teams. Triggers "ccw-help", "ccw-issue". |
| `delegation-check` | `delegation-check` | Check workflow delegation prompts against agent role definitions for content separation violations. Detects conflicts, duplication, boundary leaks, and missing contracts. Triggers on "check delegation", "delegation conflict", "prompt vs role check". |
| `design-extractor` | `design-extractor` | Extract a complete, opinionated design system from one or more reference websites the user wants to emulate. Use this whenever the user gives a URL (or a few URLs) and asks to capture, copy, study, replicate, or learn from its design — phrasings like "我想要这种感觉的网站", "提取这个网站的设计", "这个站是怎么做的", "把这几个站的风格总结一下", "做一个 design… |
| `dispatching-parallel-agents` | `dispatching-parallel-agents` | Use when facing 2+ independent tasks that can be worked on without shared state or sequential dependencies |
| `doc-coauthoring` | `doc-coauthoring` | Guide users through a structured workflow for co-authoring documentation. Use when user wants to write documentation, proposals, technical specs, decision docs, or similar structured content. This workflow helps users efficiently transfer context, refine content through iteration, and verify the doc works for reader… |
| `docx` | `docx` | Use this skill whenever the user wants to create, read, edit, or manipulate Word documents (.docx files). Triggers include: any mention of 'Word doc', 'word document', '.docx', or requests to produce professional documents with formatting like tables of contents, headings, page numbers, or letterheads. Also use when… |
| `excel-automation` | `excel-automation` | *(无有效 `description`)* |
| `executing-plans` | `executing-plans` | Use when you have a written implementation plan to execute in a separate session with review checkpoints |
| `find-skills` | `find-skills` | Helps users discover and install agent skills when they ask questions like "how do I do X", "find a skill for X", "is there a skill that can...", or express interest in extending capabilities. This skill should be used when the user is looking for functionality that might exist as an installable skill. |
| `finishing-a-development-branch` | `finishing-a-development-branch` | Use when implementation is complete, all tests pass, and you need to decide how to integrate the work - guides completion of development work by presenting structured options for merge, PR, or cleanup |
| `follow-builders` | `follow-builders` | AI builders digest — monitors top AI builders on X and YouTube podcasts, remixes their content into digestible summaries. Use when the user wants AI industry insights, builder updates, or invokes /ai. No API keys or dependencies required — all content is fetched from a central feed. |
| `frontend-design` | `frontend-design` | Create distinctive, production-grade frontend interfaces with high design quality. Use this skill when the user asks to build web components, pages, artifacts, posters, or applications (examples include websites, landing pages, dashboards, React components, HTML/CSS layouts, or when styling/beautifying any web UI). … |
| `frontend-slides` | `frontend-slides` | Create stunning, animation-rich HTML presentations from scratch or by converting PowerPoint files. Use when the user wants to build a presentation, convert a PPT/PPTX to web, or create slides for a talk/pitch. Helps non-designers discover their aesthetic through visual exploration rather than abstract choices. |
| `internal-comms` | `internal-comms` | A set of resources to help me write all kinds of internal communications, using the formats that my company likes to use. Claude should use this skill whenever asked to write some sort of internal communications (status reports, leadership updates, 3P updates, company newsletters, FAQs, incident reports, project upd… |
| `investigate` | `investigate` | Systematic debugging with Iron Law methodology. 5-phase investigation from evidence collection to verified fix. Triggers on "investigate", "debug", "root cause". |
| `issue-manage` | `issue-manage` | Interactive issue management with menu-driven CRUD operations. Use when managing issues, viewing issue status, editing issue fields, performing bulk operations, or viewing issue history. Triggers on "manage issue", "list issues", "edit issue", "delete issue", "bulk update", "issue dashboard", "issue history", "compl… |
| `mcp-builder` | `mcp-builder` | Guide for creating high-quality MCP (Model Context Protocol) servers that enable LLMs to interact with external services through well-designed tools. Use when building MCP servers to integrate external APIs or services, whether in Python (FastMCP) or Node/TypeScript (MCP SDK). |
| `memory-capture` | `memory-capture` | Unified memory capture with routing - session compact or quick tips. Triggers on "memory capture", "compact session", "save session", "quick tip", "memory tips", "记录", "压缩会话". |
| `memory-manage` | `memory-manage` | Unified memory management - CLAUDE.md updates and documentation generation with interactive routing. Triggers on "memory manage", "update claude", "update memory", "generate docs", "更新记忆", "生成文档". |
| `pdf` | `pdf` | Use this skill whenever the user wants to do anything with PDF files. This includes reading or extracting text/tables from PDFs, combining or merging multiple PDFs into one, splitting PDFs apart, rotating pages, adding watermarks, creating new PDFs, filling PDF forms, encrypting/decrypting PDFs, extracting images, a… |
| `pptx` | `pptx` | Use this skill any time a .pptx file is involved in any way — as input, output, or both. This includes: creating slide decks, pitch decks, or presentations; reading, parsing, or extracting text from any .pptx file (even if the extracted content will be used elsewhere, like in an email or summary); editing, modifying… |
| `prompt-generator` | `prompt-generator` | Generate or convert Claude Code prompt files — command orchestrators, skill files, agent role definitions, or style conversion of existing files. Follows GSD-style content separation with built-in quality gates. Triggers on "create command", "new command", "create skill", "new skill", "create agent", "new agent", "c… |
| `receiving-code-review` | `receiving-code-review` | Use when receiving code review feedback, before implementing suggestions, especially if feedback seems unclear or technically questionable - requires technical rigor and verification, not performative agreement or blind implementation |
| `requesting-code-review` | `requesting-code-review` | Use when completing tasks, implementing major features, or before merging to verify work meets requirements |
| `review-code` | `review-code` | Multi-dimensional code review with structured reports. Analyzes correctness, readability, performance, security, testing, and architecture. Triggers on "review code", "code review", "审查代码", "代码审查". |
| `review-cycle` | `review-cycle` | Unified multi-dimensional code review with automated fix orchestration. Routes to session-based (git changes), module-based (path patterns), or fix mode. Triggers on "workflow:review-cycle", "workflow:review-session-cycle", "workflow:review-module-cycle", "workflow:review-cycle-fix". |
| `security-audit` | `security-audit` | OWASP Top 10 and STRIDE security auditing with supply chain analysis. Triggers on "security audit", "security scan", "cso". |
| `ship` | `ship` | Structured release pipeline with pre-flight checks, AI code review, version bump, changelog, PR creation, platform publish, and GitHub release. Triggers on "ship", "release", "publish". |
| `skill-creator` | `skill-creator` | Create new skills, modify and improve existing skills, and measure skill performance. Use when users want to create a skill from scratch, edit, or optimize an existing skill, run evals to test a skill, benchmark skill performance with variance analysis, or optimize a skill's description for better triggering accuracy. |
| `skill-generator` | `skill-generator` | Meta-skill for creating new Claude Code skills with configurable execution modes. Supports sequential (fixed order) and autonomous (stateless) phase patterns. Use for skill scaffolding, skill creation, or building new workflows. Triggers on "create skill", "new skill", "skill generator". |
| `skill-iter-tune` | `skill-iter-tune` | Iterative skill tuning via execute-evaluate-improve feedback loop. Uses ccw cli Claude to execute skill, Gemini to evaluate quality, and Agent to apply improvements. Iterates until quality threshold or max iterations. Triggers on "skill iter tune", "iterative skill tuning", "tune skill". |
| `skill-simplify` | `skill-simplify` | SKILL.md simplification with functional integrity verification. Analyze redundancy, optimize content, check no functionality lost. Triggers on "simplify skill", "optimize skill", "skill-simplify". |
| `skill-tuning` | `skill-tuning` | Universal skill diagnosis and optimization tool. Detect and fix skill execution issues including context explosion, long-tail forgetting, data flow disruption, and agent coordination failures. Supports Gemini CLI for deep analysis. Triggers on "skill tuning", "tune skill", "skill diagnosis", "optimize skill", "skill… |
| `skill-vetter` | `skill-vetter` | Security-first vetting protocol for AI agent skills. Never install a skill without vetting it first. Use before installing any skill from ClawdHub, GitHub, or other sources. Checks for red flags, permission scope, and risk classification. |
| `slack-gif-creator` | `slack-gif-creator` | Knowledge and utilities for creating animated GIFs optimized for Slack. Provides constraints, validation tools, and animation concepts. Use when users request animated GIFs for Slack like "make me a GIF of X doing Y for Slack." |
| `spec-generator` | `spec-generator` | Specification generator - 7 phase document chain producing product brief, PRD, architecture, epics, and issues with Codex review gates. Triggers on generate spec, create specification, spec generator, workflow:spec. |
| `subagent-driven-development` | `subagent-driven-development` | Use when executing implementation plans with independent tasks in the current session |
| `systematic-debugging` | `systematic-debugging` | Use when encountering any bug, test failure, or unexpected behavior, before proposing fixes |
| `team-arch-opt` | `team-arch-opt` | Unified team skill for architecture optimization. Uses team-worker agent architecture with role directories for domain logic. Coordinator orchestrates pipeline, workers are team-worker agents. Triggers on "team arch-opt". |
| `team-brainstorm` | `team-brainstorm` | Unified team skill for brainstorming team. Uses team-worker agent architecture with role directories for domain logic. Coordinator orchestrates pipeline, workers are team-worker agents. Triggers on "team brainstorm". |
| `team-coordinate` | `team-coordinate` | Universal team coordination skill with dynamic role generation. Uses team-worker agent architecture with role-spec files. Only coordinator is built-in -- all worker roles are generated at runtime as role-specs and spawned via team-worker agent. Beat/cadence model for orchestration. Triggers on "Team Coordinate ". |
| `team-designer` | `team-designer` | Meta-skill for generating team skills following the v4 architecture pattern. Produces complete skill packages with SKILL.md router, coordinator, worker roles, specs, and templates. Triggers on "team-designer", "design team". |
| `team-executor` | `team-executor` | Lightweight session execution skill. Resumes existing team-coordinate sessions for pure execution via team-worker agents. No analysis, no role generation -- only loads and executes. Session path required. Triggers on "Team Executor". |
| `team-frontend` | `team-frontend` | Unified team skill for frontend development. Pure router — all roles read this file. Beat model is coordinator-only in monitor.md. Built-in ui-ux-pro-max design intelligence. Triggers on "team frontend". |
| `team-frontend-debug` | `team-frontend-debug` | Frontend debugging team using Chrome DevTools MCP. Dual-mode — feature-list testing or bug-report debugging. Triggers on "team-frontend-debug", "frontend debug". |
| `team-interactive-craft` | `team-interactive-craft` | Unified team skill for interactive component crafting. Vanilla JS + CSS interactive components with zero dependencies. Research -> interaction design -> build -> a11y test. Uses team-worker agent architecture. Triggers on "team interactive craft", "interactive component". |
| `team-issue` | `team-issue` | Unified team skill for issue resolution. Uses team-worker agent architecture with role directories for domain logic. Coordinator orchestrates pipeline, workers are team-worker agents. Triggers on "team issue". |
| `team-lifecycle-v4` | `team-lifecycle-v4` | Full lifecycle team skill — plan, develop, test, review in one coordinated session. Role-based architecture with coordinator-driven beat model. Triggers on "team lifecycle v4". |
| `team-motion-design` | `team-motion-design` | Unified team skill for motion design. Animation token systems, scroll choreography, GPU-accelerated transforms, reduced-motion fallback. Uses team-worker agent architecture. Triggers on "team motion design", "animation system". |
| `team-perf-opt` | `team-perf-opt` | Unified team skill for performance optimization. Coordinator orchestrates pipeline, workers are team-worker agents. Supports single/fan-out/independent parallel modes. Triggers on "team perf-opt". |
| `team-planex` | `team-planex` | Unified team skill for plan-and-execute pipeline. Pure router — coordinator always. Beat model is coordinator-only in monitor.md. Triggers on "team planex". |
| `team-quality-assurance` | `team-quality-assurance` | Unified team skill for quality assurance. Full closed-loop QA combining issue discovery and software testing. Triggers on "team quality-assurance", "team qa". |
| `team-review` | `team-review` | Unified team skill for code review. 3-role pipeline: scanner, reviewer, fixer. Triggers on team-review. |
| `team-roadmap-dev` | `team-roadmap-dev` | Unified team skill for roadmap-driven development workflow. Coordinator discusses roadmap with user, then dispatches phased execution pipeline (plan -> execute -> verify). All roles invoke this skill with --role arg. Triggers on "team roadmap-dev". |
| `team-tech-debt` | `team-tech-debt` | Unified team skill for tech debt identification and remediation. Scans codebase for tech debt, assesses severity, plans and executes fixes with validation. Uses team-worker agent architecture with roles/ for domain logic. Coordinator orchestrates pipeline, workers are team-worker agents. Triggers on "team tech debt". |
| `team-testing` | `team-testing` | Unified team skill for testing team. Progressive test coverage through Generator-Critic loops, shared memory, and dynamic layer selection. Triggers on "team testing". |
| `team-ui-polish` | `team-ui-polish` | Unified team skill for UI polish. Auto-discover and fix UI design issues using Impeccable design standards. Anti-AI-slop detection, color/typography/spacing quality, motion, interaction states, visual hierarchy. Uses team-worker agent architecture. Triggers on "team ui polish", "ui polish", "design polish". |
| `team-uidesign` | `team-uidesign` | Unified team skill for UI design team. Research -> design tokens -> audit -> implementation. Uses team-worker agent architecture with roles/ for domain logic. Coordinator orchestrates dual-track pipeline with GC loops and sync points. Triggers on "team ui design", "ui design team". |
| `team-ultra-analyze` | `team-ultra-analyze` | Deep collaborative analysis team skill. Multi-role investigation with coordinator-driven synthesis. Triggers on "team ultra-analyze", "team analyze". |
| `team-ux-improve` | `team-ux-improve` | Unified team skill for UX improvement. Systematically discovers and fixes UI/UX interaction issues including unresponsive buttons, missing feedback, and state refresh problems. Uses team-worker agent architecture with roles/ for domain logic. Coordinator orchestrates pipeline, workers are team-worker agents. Trigger… |
| `team-visual-a11y` | `team-visual-a11y` | Unified team skill for visual accessibility QA. OKLCH color contrast, typography readability, focus management, WCAG AA/AAA audit at rendered level. Uses team-worker agent architecture. Triggers on "team visual a11y", "accessibility audit", "visual a11y". |
| `test-driven-development` | `test-driven-development` | Use when implementing any feature or bugfix, before writing implementation code |
| `theme-factory` | `theme-factory` | Toolkit for styling artifacts with a theme. These artifacts can be slides, docs, reportings, HTML landing pages, etc. There are 10 pre-set themes with colors/fonts that you can apply to any artifact that has been creating, or can generate a new theme on-the-fly. |
| `using-git-worktrees` | `using-git-worktrees` | Use when starting feature work that needs isolation from current workspace or before executing implementation plans - creates isolated git worktrees with smart directory selection and safety verification |
| `using-superpowers` | `using-superpowers` | Use when starting any conversation - establishes how to find and use skills, requiring Skill tool invocation before ANY response including clarifying questions |
| `verification-before-completion` | `verification-before-completion` | Use when about to claim work is complete, fixed, or passing, before committing or creating PRs - requires running verification commands and confirming output before making any success claims; evidence before assertions always |
| `web-access` | `web-access` | 所有联网操作必须通过此 skill 处理，包括：搜索、网页抓取、登录后操作、网络交互等。 触发场景：用户要求搜索信息、查看网页内容、访问需要登录的网站、操作网页界面、抓取社交媒体内容（小红书、微博、推特等）、读取动态渲染页面、以及任何需要真实浏览器环境的网络任务。 |
| `web-artifacts-builder` | `web-artifacts-builder` | Suite of tools for creating elaborate, multi-component claude.ai HTML artifacts using modern frontend web technologies (React, Tailwind CSS, shadcn/ui). Use for complex artifacts requiring state management, routing, or shadcn/ui components - not for simple single-file HTML/JSX artifacts. |
| `webapp-testing` | `webapp-testing` | Toolkit for interacting with and testing local web applications using Playwright. Supports verifying frontend functionality, debugging UI behavior, capturing browser screenshots, and viewing browser logs. |
| `wf-composer` | `wf-composer` | Semantic workflow composer — parse natural language workflow description into a DAG of skill/CLI/agent nodes, auto-inject checkpoint save nodes, confirm with user, persist as reusable JSON template. Triggers on "wf-composer " or "/wf-composer". |
| `wf-player` | `wf-player` | Workflow template player — load a JSON template produced by wf-composer, bind context variables, execute nodes in DAG order (serial/parallel), persist state at checkpoints, support resume from any checkpoint. Uses ccw-coordinator serial-blocking for CLI nodes and team-coordinate worker pattern for parallel agent nod… |
| `workflow-execute` | `workflow-execute` | Coordinate agent execution for workflow tasks with automatic session discovery, parallel task processing, and status tracking. Triggers on "workflow-execute". |
| `workflow-lite-execute` | `workflow-lite-execute` | Lightweight execution engine - multi-mode input, task grouping, batch execution, chain to workflow-lite-test-review |
| `workflow-lite-plan` | `workflow-lite-plan` | Lightweight planning skill - task analysis, multi-angle exploration, clarification, adaptive planning, confirmation, and execution handoff |
| `workflow-lite-test-review` | `workflow-lite-test-review` | Post-execution test review and fix - chain from workflow-lite-execute or standalone. Reviews implementation against plan, runs tests, auto-fixes failures. |
| `workflow-multi-cli-plan` | `workflow-multi-cli-plan` | Multi-CLI collaborative planning with codebase context gathering, iterative cross-verification, and execution handoff. |
| `workflow-plan` | `workflow-plan` | Unified planning skill - 4-phase planning workflow, plan verification, and interactive replanning. Triggers on "workflow-plan", "workflow-plan-verify", "workflow:replan". |
| `workflow-skill-designer` | `workflow-skill-designer` | Meta-skill for designing orchestrator+phases structured workflow skills. Creates SKILL.md coordinator with progressive phase loading, TodoWrite patterns, and data flow. Triggers on "design workflow skill", "create workflow skill", "workflow skill designer". |
| `workflow-tdd-plan` | `workflow-tdd-plan-plan` | Unified TDD workflow skill combining 6-phase TDD planning with Red-Green-Refactor task chain generation, and 4-phase TDD verification with compliance reporting. Triggers on "workflow-tdd-plan", "workflow-tdd-verify". |
| `workflow-test-fix` | `workflow-test-fix` | Unified test-fix pipeline combining test generation (session, context, analysis, task gen) with iterative test-cycle execution (adaptive strategy, progressive testing, CLI fallback). Triggers on "workflow-test-fix", "test fix workflow". |
| `writing-plans` | `writing-plans` | Use when you have a spec or requirements for a multi-step task, before touching code |
| `writing-skills` | `writing-skills` | Use when creating new skills, editing existing skills, or verifying skills work before deployment |
| `xlsx` | `xlsx` | Use this skill any time a spreadsheet file is the primary input or output. This means any task where the user wants to: open, read, edit, or fix an existing .xlsx, .xlsm, .csv, or .tsv file (e.g., adding columns, computing formulas, formatting, charting, cleaning messy data); create a new spreadsheet from scratch or… |

---
## 2. 插件 skills（`~/.claude/plugins`）

按 `~/.claude/plugins/` 下第一层子目录分组（例如 `marketplaces/`、`cache/`）。

### 2.1 `cache/`

| 相对路径 | `name` | 功能（`description` 摘要） |
|----------|--------|---------------------------|
| `cache/claude-plugins-official/superpowers/5.0.7/skills/brainstorming/SKILL.md` | `brainstorming` | You MUST use this before any creative work - creating features, building components, adding functionality, or modifying behavior. Explores user intent, requirements and design before implementation. |
| `cache/claude-plugins-official/superpowers/5.0.7/skills/dispatching-parallel-agents/SKILL.md` | `dispatching-parallel-agents` | Use when facing 2+ independent tasks that can be worked on without shared state or sequential dependencies |
| `cache/claude-plugins-official/superpowers/5.0.7/skills/executing-plans/SKILL.md` | `executing-plans` | Use when you have a written implementation plan to execute in a separate session with review checkpoints |
| `cache/claude-plugins-official/superpowers/5.0.7/skills/finishing-a-development-branch/SKILL.md` | `finishing-a-development-branch` | Use when implementation is complete, all tests pass, and you need to decide how to integrate the work - guides completion of development work by presenting structured options for merge, PR, or cleanup |
| `cache/claude-plugins-official/superpowers/5.0.7/skills/receiving-code-review/SKILL.md` | `receiving-code-review` | Use when receiving code review feedback, before implementing suggestions, especially if feedback seems unclear or technically questionable - requires technical rigor and verification, not performative agreement or blind implementation |
| `cache/claude-plugins-official/superpowers/5.0.7/skills/requesting-code-review/SKILL.md` | `requesting-code-review` | Use when completing tasks, implementing major features, or before merging to verify work meets requirements |
| `cache/claude-plugins-official/superpowers/5.0.7/skills/subagent-driven-development/SKILL.md` | `subagent-driven-development` | Use when executing implementation plans with independent tasks in the current session |
| `cache/claude-plugins-official/superpowers/5.0.7/skills/systematic-debugging/SKILL.md` | `systematic-debugging` | Use when encountering any bug, test failure, or unexpected behavior, before proposing fixes |
| `cache/claude-plugins-official/superpowers/5.0.7/skills/test-driven-development/SKILL.md` | `test-driven-development` | Use when implementing any feature or bugfix, before writing implementation code |
| `cache/claude-plugins-official/superpowers/5.0.7/skills/using-git-worktrees/SKILL.md` | `using-git-worktrees` | Use when starting feature work that needs isolation from current workspace or before executing implementation plans - creates isolated git worktrees with smart directory selection and safety verification |
| `cache/claude-plugins-official/superpowers/5.0.7/skills/using-superpowers/SKILL.md` | `using-superpowers` | Use when starting any conversation - establishes how to find and use skills, requiring Skill tool invocation before ANY response including clarifying questions |
| `cache/claude-plugins-official/superpowers/5.0.7/skills/verification-before-completion/SKILL.md` | `verification-before-completion` | Use when about to claim work is complete, fixed, or passing, before committing or creating PRs - requires running verification commands and confirming output before making any success claims; evidence before assertions always |
| `cache/claude-plugins-official/superpowers/5.0.7/skills/writing-plans/SKILL.md` | `writing-plans` | Use when you have a spec or requirements for a multi-step task, before touching code |
| `cache/claude-plugins-official/superpowers/5.0.7/skills/writing-skills/SKILL.md` | `writing-skills` | Use when creating new skills, editing existing skills, or verifying skills work before deployment |

### 2.2 `marketplaces/`

| 相对路径 | `name` | 功能（`description` 摘要） |
|----------|--------|---------------------------|
| `marketplaces/claude-plugins-official/external_plugins/discord/skills/access/SKILL.md` | `access` | Manage Discord channel access — approve pairings, edit allowlists, set DM/group policy. Use when the user asks to pair, approve someone, check who's allowed, or change policy for the Discord channel. |
| `marketplaces/claude-plugins-official/external_plugins/discord/skills/configure/SKILL.md` | `configure` | Set up the Discord channel — save the bot token and review access policy. Use when the user pastes a Discord bot token, asks to configure Discord, asks "how do I set this up" or "who can reach me," or wants to check channel status. |
| `marketplaces/claude-plugins-official/external_plugins/imessage/skills/access/SKILL.md` | `access` | Manage iMessage channel access — approve pairings, edit allowlists, set DM/group policy. Use when the user asks to pair, approve someone, check who's allowed, or change policy for the iMessage channel. |
| `marketplaces/claude-plugins-official/external_plugins/imessage/skills/configure/SKILL.md` | `configure` | Check iMessage channel setup and review access policy. Use when the user asks to configure iMessage, asks "how do I set this up" or "who can reach me," or wants to know why texts aren't reaching the assistant. |
| `marketplaces/claude-plugins-official/external_plugins/telegram/skills/access/SKILL.md` | `access` | Manage Telegram channel access — approve pairings, edit allowlists, set DM/group policy. Use when the user asks to pair, approve someone, check who's allowed, or change policy for the Telegram channel. |
| `marketplaces/claude-plugins-official/external_plugins/telegram/skills/configure/SKILL.md` | `configure` | Set up the Telegram channel — save the bot token and review access policy. Use when the user pastes a Telegram bot token, asks to configure Telegram, asks "how do I set this up" or "who can reach me," or wants to check channel status. |
| `marketplaces/claude-plugins-official/plugins/claude-code-setup/skills/claude-automation-recommender/SKILL.md` | `claude-automation-recommender` | Analyze a codebase and recommend Claude Code automations (hooks, subagents, skills, plugins, MCP servers). Use when user asks for automation recommendations, wants to optimize their Claude Code setup, mentions improving Claude Code workflows, asks how to first set up Claude Co… |
| `marketplaces/claude-plugins-official/plugins/claude-md-management/skills/claude-md-improver/SKILL.md` | `claude-md-improver` | Audit and improve CLAUDE.md files in repositories. Use when user asks to check, audit, update, improve, or fix CLAUDE.md files. Scans for all CLAUDE.md files, evaluates quality against templates, outputs quality report, then makes targeted updates. Also use when the user menti… |
| `marketplaces/claude-plugins-official/plugins/example-plugin/skills/example-command/SKILL.md` | `example-command` | An example user-invoked skill that demonstrates frontmatter options and the skills/<name>/SKILL.md layout |
| `marketplaces/claude-plugins-official/plugins/example-plugin/skills/example-skill/SKILL.md` | `example-skill` | This skill should be used when the user asks to "demonstrate skills", "show skill format", "create a skill template", or discusses skill development patterns. Provides a reference template for creating Claude Code plugin skills. |
| `marketplaces/claude-plugins-official/plugins/frontend-design/skills/frontend-design/SKILL.md` | `frontend-design` | Create distinctive, production-grade frontend interfaces with high design quality. Use this skill when the user asks to build web components, pages, or applications. Generates creative, polished code that avoids generic AI aesthetics. |
| `marketplaces/claude-plugins-official/plugins/hookify/skills/writing-rules/SKILL.md` | `writing-hookify-rules` | This skill should be used when the user asks to "create a hookify rule", "write a hook rule", "configure hookify", "add a hookify rule", or needs guidance on hookify rule syntax and patterns. |
| `marketplaces/claude-plugins-official/plugins/math-olympiad/skills/math-olympiad/SKILL.md` | `math-olympiad` | Solve competition math problems (IMO, Putnam, USAMO, AIME) with adversarial verification that catches the errors self-verification misses. Activates when asked to 'solve this IMO problem', 'prove this olympiad inequality', 'verify this competition proof', 'find a counterexampl… |
| `marketplaces/claude-plugins-official/plugins/mcp-server-dev/skills/build-mcp-app/SKILL.md` | `build-mcp-app` | This skill should be used when the user wants to build an "MCP app", add "interactive UI" or "widgets" to an MCP server, "render components in chat", build "MCP UI resources", make a tool that shows a "form", "picker", "dashboard" or "confirmation dialog" inline in the convers… |
| `marketplaces/claude-plugins-official/plugins/mcp-server-dev/skills/build-mcp-server/SKILL.md` | `build-mcp-server` | This skill should be used when the user asks to "build an MCP server", "create an MCP", "make an MCP integration", "wrap an API for Claude", "expose tools to Claude", "make an MCP app", or discusses building something with the Model Context Protocol. It is the entry point for … |
| `marketplaces/claude-plugins-official/plugins/mcp-server-dev/skills/build-mcpb/SKILL.md` | `build-mcpb` | This skill should be used when the user wants to "package an MCP server", "bundle an MCP", "make an MCPB", "ship a local MCP server", "distribute a local MCP", discusses ".mcpb files", mentions bundling a Node or Python runtime with their MCP server, or needs an MCP server tha… |
| `marketplaces/claude-plugins-official/plugins/playground/skills/playground/SKILL.md` | `playground` | Creates interactive HTML playgrounds — self-contained single-file explorers that let users configure something visually through controls, see a live preview, and copy out a prompt. Use when the user asks to make a playground, explorer, or interactive tool for a topic. |
| `marketplaces/claude-plugins-official/plugins/plugin-dev/skills/agent-development/SKILL.md` | `agent-development` | This skill should be used when the user asks to "create an agent", "add an agent", "write a subagent", "agent frontmatter", "when to use description", "agent examples", "agent tools", "agent colors", "autonomous agent", or needs guidance on agent structure, system prompts, tri… |
| `marketplaces/claude-plugins-official/plugins/plugin-dev/skills/command-development/SKILL.md` | `command-development` | This skill should be used when the user asks to "create a slash command", "add a command", "write a custom command", "define command arguments", "use command frontmatter", "organize commands", "create command with file references", "interactive command", "use AskUserQuestion i… |
| `marketplaces/claude-plugins-official/plugins/plugin-dev/skills/hook-development/SKILL.md` | `hook-development` | This skill should be used when the user asks to "create a hook", "add a PreToolUse/PostToolUse/Stop hook", "validate tool use", "implement prompt-based hooks", "use ${CLAUDE_PLUGIN_ROOT}", "set up event-driven automation", "block dangerous commands", or mentions hook events (P… |
| `marketplaces/claude-plugins-official/plugins/plugin-dev/skills/mcp-integration/SKILL.md` | `mcp-integration` | This skill should be used when the user asks to "add MCP server", "integrate MCP", "configure MCP in plugin", "use .mcp.json", "set up Model Context Protocol", "connect external service", mentions "${CLAUDE_PLUGIN_ROOT} with MCP", or discusses MCP server types (SSE, stdio, HTT… |
| `marketplaces/claude-plugins-official/plugins/plugin-dev/skills/plugin-settings/SKILL.md` | `plugin-settings` | This skill should be used when the user asks about "plugin settings", "store plugin configuration", "user-configurable plugin", ".local.md files", "plugin state files", "read YAML frontmatter", "per-project plugin settings", or wants to make plugin behavior configurable. Docum… |
| `marketplaces/claude-plugins-official/plugins/plugin-dev/skills/plugin-structure/SKILL.md` | `plugin-structure` | This skill should be used when the user asks to "create a plugin", "scaffold a plugin", "understand plugin structure", "organize plugin components", "set up plugin.json", "use ${CLAUDE_PLUGIN_ROOT}", "add commands/agents/skills/hooks", "configure auto-discovery", or needs guid… |
| `marketplaces/claude-plugins-official/plugins/plugin-dev/skills/skill-development/SKILL.md` | `skill-development` | This skill should be used when the user wants to "create a skill", "add a skill to plugin", "write a new skill", "improve skill description", "organize skill content", or needs guidance on skill structure, progressive disclosure, or skill development best practices for Claude … |
| `marketplaces/claude-plugins-official/plugins/session-report/skills/session-report/SKILL.md` | `session-report` | Generate an explorable HTML report of Claude Code session usage (tokens, cache, subagents, skills, expensive prompts) from ~/.claude/projects transcripts. |
| `marketplaces/claude-plugins-official/plugins/skill-creator/skills/skill-creator/SKILL.md` | `skill-creator` | Create new skills, modify and improve existing skills, and measure skill performance. Use when users want to create a skill from scratch, edit, or optimize an existing skill, run evals to test a skill, benchmark skill performance with variance analysis, or optimize a skill's d… |
| `marketplaces/thedotmack/openclaw/SKILL.md` | `openclaw` | *(无有效 `description`)* |
| `marketplaces/thedotmack/openclaw/skills/do/SKILL.md` | `do` | Execute a phased implementation plan using subagents. Use when asked to execute, run, or carry out a plan — especially one created by make-plan. |
| `marketplaces/thedotmack/openclaw/skills/make-plan/SKILL.md` | `make-plan` | Create a detailed, phased implementation plan with documentation discovery. Use when asked to plan a feature, task, or multi-step implementation — especially before executing with do. |
| `marketplaces/thedotmack/plugin/skills/do/SKILL.md` | `do` | Execute a phased implementation plan using subagents. Use when asked to execute, run, or carry out a plan — especially one created by make-plan. |
| `marketplaces/thedotmack/plugin/skills/make-plan/SKILL.md` | `make-plan` | Create a detailed, phased implementation plan with documentation discovery. Use when asked to plan a feature, task, or multi-step implementation — especially before executing with do. |
| `marketplaces/thedotmack/plugin/skills/mem-search/SKILL.md` | `mem-search` | Search claude-mem's persistent cross-session memory database. Use when user asks "did we already solve this?", "how did we do X last time?", or needs work from previous sessions. |
| `marketplaces/thedotmack/plugin/skills/smart-explore/SKILL.md` | `smart-explore` | Token-optimized structural code search using tree-sitter AST parsing. Use instead of reading full files when you need to understand code structure, find functions, or explore a codebase efficiently. |
| `marketplaces/thedotmack/plugin/skills/timeline-report/SKILL.md` | `timeline-report` | Generate a "Journey Into [Project]" narrative report analyzing a project's entire development history from claude-mem's timeline. Use when asked for a timeline report, project history analysis, development journey, or full project report. |

---
## 3. 重复与异常提示

- 插件与用户同名目录 skill：`brainstorming` — 用户路径 `/Users/kayla/.claude/skills/brainstorming/SKILL.md` 与插件 `cache/claude-plugins-official/superpowers/5.0.7/skills/brainstorming/SKILL.md` 可能内容不同，以**实际加载顺序/配置**为准。
- 插件与用户同名目录 skill：`dispatching-parallel-agents` — 用户路径 `/Users/kayla/.claude/skills/dispatching-parallel-agents/SKILL.md` 与插件 `cache/claude-plugins-official/superpowers/5.0.7/skills/dispatching-parallel-agents/SKILL.md` 可能内容不同，以**实际加载顺序/配置**为准。
- 插件与用户同名目录 skill：`executing-plans` — 用户路径 `/Users/kayla/.claude/skills/executing-plans/SKILL.md` 与插件 `cache/claude-plugins-official/superpowers/5.0.7/skills/executing-plans/SKILL.md` 可能内容不同，以**实际加载顺序/配置**为准。
- 插件与用户同名目录 skill：`finishing-a-development-branch` — 用户路径 `/Users/kayla/.claude/skills/finishing-a-development-branch/SKILL.md` 与插件 `cache/claude-plugins-official/superpowers/5.0.7/skills/finishing-a-development-branch/SKILL.md` 可能内容不同，以**实际加载顺序/配置**为准。
- 插件与用户同名目录 skill：`receiving-code-review` — 用户路径 `/Users/kayla/.claude/skills/receiving-code-review/SKILL.md` 与插件 `cache/claude-plugins-official/superpowers/5.0.7/skills/receiving-code-review/SKILL.md` 可能内容不同，以**实际加载顺序/配置**为准。
- 插件与用户同名目录 skill：`requesting-code-review` — 用户路径 `/Users/kayla/.claude/skills/requesting-code-review/SKILL.md` 与插件 `cache/claude-plugins-official/superpowers/5.0.7/skills/requesting-code-review/SKILL.md` 可能内容不同，以**实际加载顺序/配置**为准。
- 插件与用户同名目录 skill：`subagent-driven-development` — 用户路径 `/Users/kayla/.claude/skills/subagent-driven-development/SKILL.md` 与插件 `cache/claude-plugins-official/superpowers/5.0.7/skills/subagent-driven-development/SKILL.md` 可能内容不同，以**实际加载顺序/配置**为准。
- 插件与用户同名目录 skill：`systematic-debugging` — 用户路径 `/Users/kayla/.claude/skills/systematic-debugging/SKILL.md` 与插件 `cache/claude-plugins-official/superpowers/5.0.7/skills/systematic-debugging/SKILL.md` 可能内容不同，以**实际加载顺序/配置**为准。
- 插件与用户同名目录 skill：`test-driven-development` — 用户路径 `/Users/kayla/.claude/skills/test-driven-development/SKILL.md` 与插件 `cache/claude-plugins-official/superpowers/5.0.7/skills/test-driven-development/SKILL.md` 可能内容不同，以**实际加载顺序/配置**为准。
- 插件与用户同名目录 skill：`using-git-worktrees` — 用户路径 `/Users/kayla/.claude/skills/using-git-worktrees/SKILL.md` 与插件 `cache/claude-plugins-official/superpowers/5.0.7/skills/using-git-worktrees/SKILL.md` 可能内容不同，以**实际加载顺序/配置**为准。
- 插件与用户同名目录 skill：`using-superpowers` — 用户路径 `/Users/kayla/.claude/skills/using-superpowers/SKILL.md` 与插件 `cache/claude-plugins-official/superpowers/5.0.7/skills/using-superpowers/SKILL.md` 可能内容不同，以**实际加载顺序/配置**为准。
- 插件与用户同名目录 skill：`verification-before-completion` — 用户路径 `/Users/kayla/.claude/skills/verification-before-completion/SKILL.md` 与插件 `cache/claude-plugins-official/superpowers/5.0.7/skills/verification-before-completion/SKILL.md` 可能内容不同，以**实际加载顺序/配置**为准。
- 插件与用户同名目录 skill：`writing-plans` — 用户路径 `/Users/kayla/.claude/skills/writing-plans/SKILL.md` 与插件 `cache/claude-plugins-official/superpowers/5.0.7/skills/writing-plans/SKILL.md` 可能内容不同，以**实际加载顺序/配置**为准。
- 插件与用户同名目录 skill：`writing-skills` — 用户路径 `/Users/kayla/.claude/skills/writing-skills/SKILL.md` 与插件 `cache/claude-plugins-official/superpowers/5.0.7/skills/writing-skills/SKILL.md` 可能内容不同，以**实际加载顺序/配置**为准。
- 插件与用户同名目录 skill：`frontend-design` — 用户路径 `/Users/kayla/.claude/skills/frontend-design/SKILL.md` 与插件 `marketplaces/claude-plugins-official/plugins/frontend-design/skills/frontend-design/SKILL.md` 可能内容不同，以**实际加载顺序/配置**为准。
- 插件与用户同名目录 skill：`skill-creator` — 用户路径 `/Users/kayla/.claude/skills/skill-creator/SKILL.md` 与插件 `marketplaces/claude-plugins-official/plugins/skill-creator/skills/skill-creator/SKILL.md` 可能内容不同，以**实际加载顺序/配置**为准。
- 用户目录 **`brand-guidelines canvas-design doc-coauthoring doc...`**（完整名过长）疑似误拷贝，`description` 为空，建议清理或改名。
- `excel-automation`：`SKILL.md` 中 `description: ">"` 为无效占位，真实能力见该文件正文与 MCP 段落。

---
## 附录：完整路径（便于检索）

### A. 用户 skills 路径

- `/Users/kayla/.claude/skills/aihot/SKILL.md`
- `/Users/kayla/.claude/skills/algorithmic-art/SKILL.md`
- `/Users/kayla/.claude/skills/brainstorm/SKILL.md`
- `/Users/kayla/.claude/skills/brainstorming/SKILL.md`
- `/Users/kayla/.claude/skills/brand-guidelines/SKILL.md`
- `/Users/kayla/.claude/skills/brand-guidelines canvas-design doc-coauthoring docx internal-comms mcp-builder pdf pptx skill-creator slack-gif-creator theme-factory web-artifacts-builder webapp-testing xlsx/SKILL.md`
- `/Users/kayla/.claude/skills/canvas-design/SKILL.md`
- `/Users/kayla/.claude/skills/ccw-chain/SKILL.md`
- `/Users/kayla/.claude/skills/ccw-help/SKILL.md`
- `/Users/kayla/.claude/skills/delegation-check/SKILL.md`
- `/Users/kayla/.claude/skills/design-extractor/SKILL.md`
- `/Users/kayla/.claude/skills/dispatching-parallel-agents/SKILL.md`
- `/Users/kayla/.claude/skills/doc-coauthoring/SKILL.md`
- `/Users/kayla/.claude/skills/docx/SKILL.md`
- `/Users/kayla/.claude/skills/excel-automation/SKILL.md`
- `/Users/kayla/.claude/skills/executing-plans/SKILL.md`
- `/Users/kayla/.claude/skills/find-skills/SKILL.md`
- `/Users/kayla/.claude/skills/finishing-a-development-branch/SKILL.md`
- `/Users/kayla/.claude/skills/follow-builders/SKILL.md`
- `/Users/kayla/.claude/skills/frontend-design/SKILL.md`
- `/Users/kayla/.claude/skills/frontend-slides/SKILL.md`
- `/Users/kayla/.claude/skills/internal-comms/SKILL.md`
- `/Users/kayla/.claude/skills/investigate/SKILL.md`
- `/Users/kayla/.claude/skills/issue-manage/SKILL.md`
- `/Users/kayla/.claude/skills/mcp-builder/SKILL.md`
- `/Users/kayla/.claude/skills/memory-capture/SKILL.md`
- `/Users/kayla/.claude/skills/memory-manage/SKILL.md`
- `/Users/kayla/.claude/skills/pdf/SKILL.md`
- `/Users/kayla/.claude/skills/pptx/SKILL.md`
- `/Users/kayla/.claude/skills/prompt-generator/SKILL.md`
- `/Users/kayla/.claude/skills/receiving-code-review/SKILL.md`
- `/Users/kayla/.claude/skills/requesting-code-review/SKILL.md`
- `/Users/kayla/.claude/skills/review-code/SKILL.md`
- `/Users/kayla/.claude/skills/review-cycle/SKILL.md`
- `/Users/kayla/.claude/skills/security-audit/SKILL.md`
- `/Users/kayla/.claude/skills/ship/SKILL.md`
- `/Users/kayla/.claude/skills/skill-creator/SKILL.md`
- `/Users/kayla/.claude/skills/skill-generator/SKILL.md`
- `/Users/kayla/.claude/skills/skill-iter-tune/SKILL.md`
- `/Users/kayla/.claude/skills/skill-simplify/SKILL.md`
- `/Users/kayla/.claude/skills/skill-tuning/SKILL.md`
- `/Users/kayla/.claude/skills/skill-vetter/SKILL.md`
- `/Users/kayla/.claude/skills/slack-gif-creator/SKILL.md`
- `/Users/kayla/.claude/skills/spec-generator/SKILL.md`
- `/Users/kayla/.claude/skills/subagent-driven-development/SKILL.md`
- `/Users/kayla/.claude/skills/systematic-debugging/SKILL.md`
- `/Users/kayla/.claude/skills/team-arch-opt/SKILL.md`
- `/Users/kayla/.claude/skills/team-brainstorm/SKILL.md`
- `/Users/kayla/.claude/skills/team-coordinate/SKILL.md`
- `/Users/kayla/.claude/skills/team-designer/SKILL.md`
- `/Users/kayla/.claude/skills/team-executor/SKILL.md`
- `/Users/kayla/.claude/skills/team-frontend/SKILL.md`
- `/Users/kayla/.claude/skills/team-frontend-debug/SKILL.md`
- `/Users/kayla/.claude/skills/team-interactive-craft/SKILL.md`
- `/Users/kayla/.claude/skills/team-issue/SKILL.md`
- `/Users/kayla/.claude/skills/team-lifecycle-v4/SKILL.md`
- `/Users/kayla/.claude/skills/team-motion-design/SKILL.md`
- `/Users/kayla/.claude/skills/team-perf-opt/SKILL.md`
- `/Users/kayla/.claude/skills/team-planex/SKILL.md`
- `/Users/kayla/.claude/skills/team-quality-assurance/SKILL.md`
- `/Users/kayla/.claude/skills/team-review/SKILL.md`
- `/Users/kayla/.claude/skills/team-roadmap-dev/SKILL.md`
- `/Users/kayla/.claude/skills/team-tech-debt/SKILL.md`
- `/Users/kayla/.claude/skills/team-testing/SKILL.md`
- `/Users/kayla/.claude/skills/team-ui-polish/SKILL.md`
- `/Users/kayla/.claude/skills/team-uidesign/SKILL.md`
- `/Users/kayla/.claude/skills/team-ultra-analyze/SKILL.md`
- `/Users/kayla/.claude/skills/team-ux-improve/SKILL.md`
- `/Users/kayla/.claude/skills/team-visual-a11y/SKILL.md`
- `/Users/kayla/.claude/skills/test-driven-development/SKILL.md`
- `/Users/kayla/.claude/skills/theme-factory/SKILL.md`
- `/Users/kayla/.claude/skills/using-git-worktrees/SKILL.md`
- `/Users/kayla/.claude/skills/using-superpowers/SKILL.md`
- `/Users/kayla/.claude/skills/verification-before-completion/SKILL.md`
- `/Users/kayla/.claude/skills/web-access/SKILL.md`
- `/Users/kayla/.claude/skills/web-artifacts-builder/SKILL.md`
- `/Users/kayla/.claude/skills/webapp-testing/SKILL.md`
- `/Users/kayla/.claude/skills/wf-composer/SKILL.md`
- `/Users/kayla/.claude/skills/wf-player/SKILL.md`
- `/Users/kayla/.claude/skills/workflow-execute/SKILL.md`
- `/Users/kayla/.claude/skills/workflow-lite-execute/SKILL.md`
- `/Users/kayla/.claude/skills/workflow-lite-plan/SKILL.md`
- `/Users/kayla/.claude/skills/workflow-lite-test-review/SKILL.md`
- `/Users/kayla/.claude/skills/workflow-multi-cli-plan/SKILL.md`
- `/Users/kayla/.claude/skills/workflow-plan/SKILL.md`
- `/Users/kayla/.claude/skills/workflow-skill-designer/SKILL.md`
- `/Users/kayla/.claude/skills/workflow-tdd-plan/SKILL.md`
- `/Users/kayla/.claude/skills/workflow-test-fix/SKILL.md`
- `/Users/kayla/.claude/skills/writing-plans/SKILL.md`
- `/Users/kayla/.claude/skills/writing-skills/SKILL.md`
- `/Users/kayla/.claude/skills/xlsx/SKILL.md`

### B. 插件 skills 路径

- `/Users/kayla/.claude/plugins/cache/claude-plugins-official/superpowers/5.0.7/skills/brainstorming/SKILL.md`
- `/Users/kayla/.claude/plugins/cache/claude-plugins-official/superpowers/5.0.7/skills/dispatching-parallel-agents/SKILL.md`
- `/Users/kayla/.claude/plugins/cache/claude-plugins-official/superpowers/5.0.7/skills/executing-plans/SKILL.md`
- `/Users/kayla/.claude/plugins/cache/claude-plugins-official/superpowers/5.0.7/skills/finishing-a-development-branch/SKILL.md`
- `/Users/kayla/.claude/plugins/cache/claude-plugins-official/superpowers/5.0.7/skills/receiving-code-review/SKILL.md`
- `/Users/kayla/.claude/plugins/cache/claude-plugins-official/superpowers/5.0.7/skills/requesting-code-review/SKILL.md`
- `/Users/kayla/.claude/plugins/cache/claude-plugins-official/superpowers/5.0.7/skills/subagent-driven-development/SKILL.md`
- `/Users/kayla/.claude/plugins/cache/claude-plugins-official/superpowers/5.0.7/skills/systematic-debugging/SKILL.md`
- `/Users/kayla/.claude/plugins/cache/claude-plugins-official/superpowers/5.0.7/skills/test-driven-development/SKILL.md`
- `/Users/kayla/.claude/plugins/cache/claude-plugins-official/superpowers/5.0.7/skills/using-git-worktrees/SKILL.md`
- `/Users/kayla/.claude/plugins/cache/claude-plugins-official/superpowers/5.0.7/skills/using-superpowers/SKILL.md`
- `/Users/kayla/.claude/plugins/cache/claude-plugins-official/superpowers/5.0.7/skills/verification-before-completion/SKILL.md`
- `/Users/kayla/.claude/plugins/cache/claude-plugins-official/superpowers/5.0.7/skills/writing-plans/SKILL.md`
- `/Users/kayla/.claude/plugins/cache/claude-plugins-official/superpowers/5.0.7/skills/writing-skills/SKILL.md`
- `/Users/kayla/.claude/plugins/marketplaces/claude-plugins-official/external_plugins/discord/skills/access/SKILL.md`
- `/Users/kayla/.claude/plugins/marketplaces/claude-plugins-official/external_plugins/discord/skills/configure/SKILL.md`
- `/Users/kayla/.claude/plugins/marketplaces/claude-plugins-official/external_plugins/imessage/skills/access/SKILL.md`
- `/Users/kayla/.claude/plugins/marketplaces/claude-plugins-official/external_plugins/imessage/skills/configure/SKILL.md`
- `/Users/kayla/.claude/plugins/marketplaces/claude-plugins-official/external_plugins/telegram/skills/access/SKILL.md`
- `/Users/kayla/.claude/plugins/marketplaces/claude-plugins-official/external_plugins/telegram/skills/configure/SKILL.md`
- `/Users/kayla/.claude/plugins/marketplaces/claude-plugins-official/plugins/claude-code-setup/skills/claude-automation-recommender/SKILL.md`
- `/Users/kayla/.claude/plugins/marketplaces/claude-plugins-official/plugins/claude-md-management/skills/claude-md-improver/SKILL.md`
- `/Users/kayla/.claude/plugins/marketplaces/claude-plugins-official/plugins/example-plugin/skills/example-command/SKILL.md`
- `/Users/kayla/.claude/plugins/marketplaces/claude-plugins-official/plugins/example-plugin/skills/example-skill/SKILL.md`
- `/Users/kayla/.claude/plugins/marketplaces/claude-plugins-official/plugins/frontend-design/skills/frontend-design/SKILL.md`
- `/Users/kayla/.claude/plugins/marketplaces/claude-plugins-official/plugins/hookify/skills/writing-rules/SKILL.md`
- `/Users/kayla/.claude/plugins/marketplaces/claude-plugins-official/plugins/math-olympiad/skills/math-olympiad/SKILL.md`
- `/Users/kayla/.claude/plugins/marketplaces/claude-plugins-official/plugins/mcp-server-dev/skills/build-mcp-app/SKILL.md`
- `/Users/kayla/.claude/plugins/marketplaces/claude-plugins-official/plugins/mcp-server-dev/skills/build-mcp-server/SKILL.md`
- `/Users/kayla/.claude/plugins/marketplaces/claude-plugins-official/plugins/mcp-server-dev/skills/build-mcpb/SKILL.md`
- `/Users/kayla/.claude/plugins/marketplaces/claude-plugins-official/plugins/playground/skills/playground/SKILL.md`
- `/Users/kayla/.claude/plugins/marketplaces/claude-plugins-official/plugins/plugin-dev/skills/agent-development/SKILL.md`
- `/Users/kayla/.claude/plugins/marketplaces/claude-plugins-official/plugins/plugin-dev/skills/command-development/SKILL.md`
- `/Users/kayla/.claude/plugins/marketplaces/claude-plugins-official/plugins/plugin-dev/skills/hook-development/SKILL.md`
- `/Users/kayla/.claude/plugins/marketplaces/claude-plugins-official/plugins/plugin-dev/skills/mcp-integration/SKILL.md`
- `/Users/kayla/.claude/plugins/marketplaces/claude-plugins-official/plugins/plugin-dev/skills/plugin-settings/SKILL.md`
- `/Users/kayla/.claude/plugins/marketplaces/claude-plugins-official/plugins/plugin-dev/skills/plugin-structure/SKILL.md`
- `/Users/kayla/.claude/plugins/marketplaces/claude-plugins-official/plugins/plugin-dev/skills/skill-development/SKILL.md`
- `/Users/kayla/.claude/plugins/marketplaces/claude-plugins-official/plugins/session-report/skills/session-report/SKILL.md`
- `/Users/kayla/.claude/plugins/marketplaces/claude-plugins-official/plugins/skill-creator/skills/skill-creator/SKILL.md`
- `/Users/kayla/.claude/plugins/marketplaces/thedotmack/openclaw/SKILL.md`
- `/Users/kayla/.claude/plugins/marketplaces/thedotmack/openclaw/skills/do/SKILL.md`
- `/Users/kayla/.claude/plugins/marketplaces/thedotmack/openclaw/skills/make-plan/SKILL.md`
- `/Users/kayla/.claude/plugins/marketplaces/thedotmack/plugin/skills/do/SKILL.md`
- `/Users/kayla/.claude/plugins/marketplaces/thedotmack/plugin/skills/make-plan/SKILL.md`
- `/Users/kayla/.claude/plugins/marketplaces/thedotmack/plugin/skills/mem-search/SKILL.md`
- `/Users/kayla/.claude/plugins/marketplaces/thedotmack/plugin/skills/smart-explore/SKILL.md`
- `/Users/kayla/.claude/plugins/marketplaces/thedotmack/plugin/skills/timeline-report/SKILL.md`
