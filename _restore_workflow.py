#!/usr/bin/env python3
import re
from pathlib import Path
from typing import Optional

path = Path(__file__).parent / "prototype-v2.4.html"

NEW_CSS = """/* ---------- §3.9.b · 核心 AI 工作流（Outcome + 步骤内工具 + 底部工具栈） ---------- */
.workflow-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  align-items: stretch;
}

.workflow-card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 0;
  padding: 18px 18px 16px;
  background: linear-gradient(135deg, rgba(255, 253, 247, 1) 0%, rgba(245, 240, 227, 0.45) 100%);
  border: 1px solid var(--line);
  border-radius: var(--r-card);
  transition: transform 200ms ease, border-color 200ms ease, box-shadow 200ms ease;
}

.workflow-card:hover {
  transform: translateY(-2px);
  border-color: rgba(193, 140, 93, 0.28);
  box-shadow: var(--shadow-md);
}

.workflow-card-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
}

.workflow-card-title {
  margin: 0;
  font-family: var(--font-display);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.005em;
  line-height: 1.3;
  color: var(--ink);
}

.workflow-card-sub {
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--rust);
  white-space: nowrap;
}

.workflow-diagram {
  position: relative;
  width: 100%;
  min-width: 0;
  padding: 10px;
  border-radius: var(--r-sm);
  border: 1px solid rgba(193, 140, 93, 0.2);
  background: linear-gradient(160deg, rgba(255, 253, 247, 0.96) 0%, rgba(245, 240, 227, 0.5) 100%);
  box-sizing: border-box;
  overflow: hidden;
}

.workflow-diagram--vibe {
  display: grid;
  grid-template-columns: 72px minmax(0, 1fr);
  gap: 8px;
  align-items: stretch;
}

.workflow-diagram--research {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 72px;
  gap: 8px;
  align-items: stretch;
}

.workflow-copy {
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  padding: 0;
  border: 1px solid var(--line);
  border-radius: 6px;
  background: rgba(255, 253, 247, 0.94);
  color: var(--muted);
  cursor: pointer;
  transition: color 0.15s ease, border-color 0.15s ease;
}

.workflow-diagram--research .workflow-copy {
  left: 8px;
  right: auto;
}

.workflow-copy:hover {
  color: var(--ink);
  border-color: rgba(93, 112, 82, 0.35);
}

.workflow-copy:focus-visible {
  outline: 2px solid var(--moss);
  outline-offset: 2px;
}

.workflow-copy svg {
  width: 13px;
  height: 13px;
  display: block;
}

.workflow-copy.is-copied {
  color: var(--moss-deep);
}

.workflow-outcome {
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-height: 0;
}

.workflow-outcome-label {
  font-family: var(--font-body);
  font-size: 8.5px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(193, 140, 93, 0.88);
}

.workflow-outcome-frame {
  flex: 1;
  min-height: 132px;
  border-radius: 8px;
  border: 1px dashed rgba(93, 112, 82, 0.26);
  background:
    linear-gradient(145deg, rgba(93, 112, 82, 0.08) 0%, rgba(255, 253, 247, 0.55) 45%, rgba(193, 140, 93, 0.06) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 6px 4px;
  font-family: var(--font-body);
  font-size: 10px;
  line-height: 1.4;
  font-weight: 600;
  color: rgba(31, 37, 34, 0.52);
}

.workflow-outcome-frame small {
  display: block;
  margin-top: 3px;
  font-size: 9px;
  font-weight: 500;
  color: var(--muted);
}

.workflow-pipeline {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: stretch;
  gap: 3px;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 2px;
  padding-right: 22px;
  scrollbar-width: thin;
  -webkit-overflow-scrolling: touch;
}

.workflow-diagram--research .workflow-pipeline {
  padding-right: 0;
  padding-left: 22px;
}

.workflow-stage {
  flex: 0 0 auto;
  width: 94px;
  min-width: 88px;
  padding: 7px 6px 8px;
  border-radius: 8px;
  background: rgba(255, 253, 247, 0.94);
  border: 1px solid rgba(207, 197, 183, 0.5);
  display: flex;
  flex-direction: column;
  gap: 4px;
  box-sizing: border-box;
}

.workflow-stage--wide {
  width: 104px;
  min-width: 98px;
}

.workflow-stage-zh {
  font-family: var(--font-display);
  font-size: 11.5px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--ink);
  line-height: 1.2;
}

.workflow-stage-en {
  font-family: var(--font-body);
  font-size: 9px;
  font-weight: 500;
  color: var(--muted);
  line-height: 1.25;
}

.workflow-stage-out {
  margin: 0;
  font-family: var(--font-body);
  font-size: 9.5px;
  line-height: 1.38;
  color: rgba(31, 37, 34, 0.6);
}

.workflow-stage-tools {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 3px;
  margin-top: auto;
  min-width: 0;
}

.wf-tool {
  display: inline-flex;
  padding: 2px 5px;
  font-family: var(--font-mono);
  font-size: 8.5px;
  font-weight: 500;
  color: var(--moss-deep);
  background: rgba(93, 112, 82, 0.1);
  border-radius: 4px;
  line-height: 1.25;
  max-width: 100%;
  overflow-wrap: anywhere;
  word-break: break-word;
}

.workflow-pipe {
  display: flex;
  align-items: center;
  align-self: center;
  flex-shrink: 0;
  font-size: 12px;
  font-weight: 600;
  color: rgba(193, 140, 93, 0.75);
  line-height: 1;
}

.workflow-stack {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  padding-top: 10px;
  border-top: 1px solid var(--line);
}

.workflow-stack-label {
  font-family: var(--font-body);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
  flex-shrink: 0;
}

.workflow-app-icons {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  min-width: 0;
}

.wf-app-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  border: 1px solid rgba(207, 197, 183, 0.65);
  background: rgba(255, 253, 247, 0.96);
  flex-shrink: 0;
}

.wf-app-icon img {
  width: 16px;
  height: 16px;
  display: block;
  object-fit: contain;
  border-radius: 3px;
}

.wf-app-icon--labeled {
  flex-direction: column;
  gap: 1px;
  width: auto;
  min-width: 34px;
  height: auto;
  padding: 4px 5px 3px;
}

.wf-app-icon-caption {
  font-family: var(--font-body);
  font-size: 8px;
  font-weight: 600;
  line-height: 1;
  color: var(--muted);
  letter-spacing: 0.01em;
  white-space: nowrap;
}

@media (max-width: 900px) {
  .workflow-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 720px) {
  .workflow-diagram--vibe,
  .workflow-diagram--research {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }

  .workflow-diagram--research .workflow-outcome {
    order: 2;
  }

  .workflow-diagram--research .workflow-pipeline {
    order: 1;
    padding-left: 0;
    padding-right: 22px;
  }

  .workflow-outcome-frame {
    min-height: 64px;
  }

  .workflow-stage {
    min-width: 84px;
  }
}"""

COPY_SVG = (
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">'
    '<rect x="9" y="9" width="13" height="13" rx="2"/>'
    '<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>'
    "</svg>"
)


def favicon(domain: str, label: str, caption: Optional[str] = None) -> str:
    img = (
        f'<img src="https://www.google.com/s2/favicons?domain={domain}&amp;sz=128" '
        f'alt="" width="16" height="16" loading="lazy" decoding="async">'
    )
    if caption:
        return (
            f'<span class="wf-app-icon wf-app-icon--labeled" title="{label}" aria-label="{label}">'
            f'{img}<span class="wf-app-icon-caption">{caption}</span></span>'
        )
    return f'<span class="wf-app-icon" title="{label}" aria-label="{label}">{img}</span>'


VIBE_STACK = (
    favicon("claude.ai", "Claude Code")
    + favicon("chatgpt.com", "ChatGPT", "GPT")
    + favicon("gemini.google.com", "Gemini")
    + favicon("cursor.com", "Cursor")
    + favicon("openai.com", "Codex", "Codex")
    + favicon("replit.com", "Replit")
)

RESEARCH_STACK = (
    favicon("aihot.virxact.com", "aihot", "aihot")
    + favicon("x.com", "X")
    + favicon("obsidian.md", "Obsidian")
    + favicon("openai.com", "Codex", "Codex")
    + favicon("chatgpt.com", "ChatGPT", "GPT")
    + favicon("claude.ai", "Claude")
)


def stage(zh, en, out, tools, wide=False):
    tools_html = "".join(f'<span class="wf-tool">{t}</span>' for t in tools)
    cls = "workflow-stage workflow-stage--wide" if wide else "workflow-stage"
    return f"""            <motion class="{cls}">
              <div class="workflow-stage-zh">{zh}</div>
              <div class="workflow-stage-en">{en}</div>
              <p class="workflow-stage-out">{out}</p>
              <div class="workflow-stage-tools">{tools_html}</div>
            </div>""".replace("<motion ", "<div ")


def pipe():
    return '            <span class="workflow-pipe" aria-hidden="true">→</span>'


vibe_stages = (
    stage("构想", "Brain", "内容 + 架构", ["using-superpowers", "brainstorm"])
    + pipe()
    + stage("找参考", "Extract Spec / Design", "风格规范", ["design-extractor"])
    + pipe()
    + stage("写 PRD", "PRD", "PRD 文档", ["spec-generator", "using-superpowers"])
    + pipe()
    + stage("实现 & 部署", "Build & Ship", "上线网站", ["Codex", "Cursor", "Claude Code", "frontend-design"], wide=True)
)

research_stages = (
    stage("抓信号", "Capture", "原始信息", ["aihot", "follow-builders"])
    + pipe()
    + stage("沉淀分析", "Synthesize", "结构化笔记", ["Obsidian", "obsidian-claude-sidebar"], wide=True)
    + pipe()
    + stage("起稿审改", "Draft", "长文初稿 v0.5", ["Codex", "Claude Code", "khazix-writer"], wide=True)
    + pipe()
    + stage("人工发布", "Publish", "已发布长文", ["人工审改", "公众号", "小红书"])
)

NEW_HTML = f"""  <!-- §3.9.b · 核心 AI 工作流 -->
  <div class="toolkit-block">
    <div class="toolkit-block-head">
      <h3 class="toolkit-block-title">核心 AI 工作流</h3>
      <span class="toolkit-block-meta">日常核心工作流</span>
    </div>
    <div class="workflow-grid">

      <article class="workflow-card">
        <div class="workflow-card-head">
          <h4 class="workflow-card-title">Vibe Coding 项目工作流</h4>
          <span class="workflow-card-sub">从想法到可点原型站</span>
        </div>
        <div class="workflow-diagram workflow-diagram--vibe" role="group" aria-label="Vibe Coding 四步工作流">
          <button type="button" class="workflow-copy" data-workflow="vibe" aria-label="复制 Vibe Coding 工作流文本">{COPY_SVG}</button>
          <div class="workflow-outcome">
            <span class="workflow-outcome-label">Outcome</span>
            <div class="workflow-outcome-frame">本页 Hero<br><small>可换站点截图</small></div>
          </div>
          <div class="workflow-pipeline">
{vibe_stages}
          </div>
        </div>
        <div class="workflow-stack">
          <span class="workflow-stack-label">日常工具栈</span>
          <div class="workflow-app-icons" aria-label="Vibe Coding 常用工具">
            {VIBE_STACK}
          </div>
        </div>
      </article>

      <article class="workflow-card">
        <div class="workflow-card-head">
          <h4 class="workflow-card-title">行业研究工作流</h4>
          <span class="workflow-card-sub">从信息流到公众号成稿</span>
        </div>
        <div class="workflow-diagram workflow-diagram--research" role="group" aria-label="行业研究四步工作流">
          <button type="button" class="workflow-copy" data-workflow="research" aria-label="复制行业研究工作流文本">{COPY_SVG}</button>
          <div class="workflow-pipeline">
{research_stages}
          </div>
          <div class="workflow-outcome">
            <span class="workflow-outcome-label">Outcome</span>
            <div class="workflow-outcome-frame">公众号首屏<br><small>可换文章截图</small></div>
          </div>
        </div>
        <div class="workflow-stack">
          <span class="workflow-stack-label">日常工具栈</span>
          <div class="workflow-app-icons" aria-label="行业研究常用工具">
            {RESEARCH_STACK}
          </div>
        </div>
      </article>

    </div>
  </div>"""

NEW_HTML = re.sub(r"<motion\s+", "<div ", NEW_HTML).replace("</motion>", "</div>")

JS_MARKER = "  statsObs.observe(statsSection);\n}\n</script>"
COPY_JS = """  statsObs.observe(statsSection);
}

// §3.9.b · 工作流复制
const WORKFLOW_COPY = {
  vibe: `Vibe Coding 项目工作流 · 从想法到可点原型站
01 构想 Brain → 内容 + 架构
02 找参考 Extract Spec / Design → 风格规范
03 写 PRD PRD → PRD 文档
04 实现 & 部署 Build & Ship → 上线网站`,
  research: `行业研究工作流 · 从信息流到公众号成稿
01 抓信号 Capture → 原始信息
02 沉淀分析 Synthesize → 结构化笔记片段
03 起稿审改 Draft → 长文初稿 v0.5
04 人工发布 Publish → 已发布长文`
};

document.querySelectorAll('.workflow-copy').forEach(btn => {
  btn.addEventListener('click', async () => {
    const key = btn.dataset.workflow;
    const copyText = WORKFLOW_COPY[key];
    if (!copyText) return;
    try {
      await navigator.clipboard.writeText(copyText);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = copyText;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    btn.classList.add('is-copied');
    const defaultLabel = key === 'vibe' ? '复制 Vibe Coding 工作流文本' : '复制行业研究工作流文本';
    btn.setAttribute('aria-label', '已复制');
    window.setTimeout(() => {
      btn.classList.remove('is-copied');
      btn.setAttribute('aria-label', defaultLabel);
    }, 1600);
  });
});
</script>"""

if __name__ == "__main__":
    text = path.read_text(encoding="utf-8")
    css_start = text.index("/* ---------- §3.9.b ·")
    css_end = text.index("\n\n/* ---------- §3.9.c ·", css_start)
    html_start = text.index("  <!-- §3.9.b · 核心 AI 工作流（内联流程图） -->")
    html_end = text.index("\n\n  <!-- §3.9.c ·", html_start)
    text = text[:css_start] + NEW_CSS + text[css_end:]
    text = text[:html_start] + NEW_HTML + text[html_end:]
    if JS_MARKER not in text:
        raise SystemExit("JS marker not found")
    text = text.replace(JS_MARKER, COPY_JS, 1)
    path.write_text(text, encoding="utf-8")
    print("Patched", path)
