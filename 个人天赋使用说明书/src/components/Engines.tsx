import { motion } from "motion/react";
import { Layers, Lightbulb, Focus } from "lucide-react";

const engines = [
  {
    id: "01",
    title: "反熵增的“秩序重构力”",
    subtitle: "Strategic & Analytical",
    icon: <Layers className="w-6 h-6" />,
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
    manifestation: "你拥有极其罕见的“X光视力”。面对一个庞大、模糊的概念（如低空经济、吴总的个人IP、AI工具的应用），你能瞬间穿透表象，看到它的底层骨架。你无法忍受“在沙丘上建大楼”。",
    flow: "从 0 到 1 的搭建过程。无论是用 AI（vibecoding）拼凑出一个周报生成器，还是闭关一个月打磨出逻辑闭环的商业方案。你享受将“混乱（高熵）”转化为“秩序（低熵）”的掌控感。",
    energy: "别人做这些觉得烧脑、痛苦，但对你来说，“逻辑通顺了”就是最好的精神伟哥。"
  },
  {
    id: "02",
    title: "降维打击的“翻译与启蒙力”",
    subtitle: "Communication & Relator",
    icon: <Lightbulb className="w-6 h-6" />,
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-200",
    manifestation: "你不仅自己懂，你还有强烈的冲动将它“翻译”出去。不管是给同事培训 AI 工具，还是未来想做播客/视频拆解职场 PUA。你天生就是一个布道者。",
    flow: "你不喜欢高高在上地炫技，你的分享带有极强的“实用主义与人文关怀”。你想告诉大家边界在哪、如何提效、如何不再焦虑、如何看到人生的其他可能性。",
    energy: "这种能把“硬核技术/冰冷现实”转化为“温暖启蒙”的能力，是你在内容市场上的最高壁垒。"
  },
  {
    id: "03",
    title: "高功能并行的“绝对主权”",
    subtitle: "Achiever & Focus",
    icon: <Focus className="w-6 h-6" />,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    manifestation: "你姐姐的自由职业状态之所以让你嫉妒，是因为你天生需要“系统主权”。你不仅能做规划，还能极致执行。",
    flow: "大三疫情期间，保研、出国、英语、运动、减脂同时进行且全部完美完成。这证明了你绝对不缺执行力。",
    energy: "你现在的“不想动”仅仅是因为现在的系统让你觉得“不值得投入”。只要目标是你自己设定的、逻辑是自洽的，你的执行力会像精密仪器一样可怕。"
  }
];

export default function Engines() {
  return (
    <section className="py-24 bg-zinc-50 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-4">Chapter 1</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-zinc-900 tracking-tight">
            你的三大底层核心天赋引擎
          </h3>
          <p className="mt-6 text-lg text-zinc-600 max-w-2xl">
            结合盖洛普优势与心流理论，你的大脑操作系统由以下三个主引擎驱动：
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {engines.map((engine, index) => (
            <motion.div
              key={engine.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`engine-card group ${engine.border}`}
            >
              <div className="flex justify-between items-start mb-8">
                <div className={`w-12 h-12 rounded-xl ${engine.bg} ${engine.color} flex items-center justify-center transition-transform group-hover:scale-110`}>
                  {engine.icon}
                </div>
                <span className="text-4xl font-mono font-bold text-zinc-100 group-hover:text-zinc-200 transition-colors">
                  {engine.id}
                </span>
              </div>
              
              <h4 className="text-xl font-bold text-zinc-900 mb-1">{engine.title}</h4>
              <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-6">{engine.subtitle}</p>
              
              <div className="space-y-6">
                <div>
                  <h5 className="text-sm font-bold text-zinc-900 mb-2 flex items-center gap-2">
                    <div className="w-1 h-4 bg-zinc-300 rounded-full"></div>
                    天赋表现
                  </h5>
                  <p className="text-sm text-zinc-600 leading-relaxed">{engine.manifestation}</p>
                </div>
                
                <div>
                  <h5 className="text-sm font-bold text-zinc-900 mb-2 flex items-center gap-2">
                    <div className="w-1 h-4 bg-zinc-300 rounded-full"></div>
                    {index === 1 ? "核心价值" : index === 2 ? "历史高光" : "心流触发点"}
                  </h5>
                  <p className="text-sm text-zinc-600 leading-relaxed">{engine.flow}</p>
                </div>
                
                <div className={`p-4 rounded-xl ${engine.bg} border ${engine.border}`}>
                  <h5 className={`text-xs font-bold ${engine.color} uppercase tracking-wider mb-2`}>
                    {index === 1 ? "壁垒" : index === 2 ? "真相" : "能量补给"}
                  </h5>
                  <p className="text-sm text-zinc-800 font-medium">{engine.energy}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
