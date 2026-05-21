import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Battery, BatteryWarning, BatteryCharging, ZapOff, Zap } from "lucide-react";

export default function EnergyAudit() {
  const [activeTab, setActiveTab] = useState<"drain" | "recharge">("drain");

  return (
    <section className="py-24 bg-zinc-900 text-zinc-50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-4">Chapter 2</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-zinc-100 tracking-tight">
            能量审计 —— 你的“回血”与“漏电”机制
          </h3>
          <p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto">
            为了保护你的天赋，你必须严格管理自己的能量池。真正的聪明，是把能量放在能产生“复利”的地方。
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-zinc-800 p-1 rounded-full border border-zinc-700">
            <button
              onClick={() => setActiveTab("drain")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all ${
                activeTab === "drain"
                  ? "bg-rose-500/20 text-rose-400 border border-rose-500/30"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <BatteryWarning className="w-4 h-4" />
              🔴 严重漏电区
            </button>
            <button
              onClick={() => setActiveTab("recharge")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all ${
                activeTab === "recharge"
                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <BatteryCharging className="w-4 h-4" />
              🟢 极速回血区
            </button>
          </div>
        </div>

        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === "drain" ? (
              <motion.div
                key="drain"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-3 gap-6"
              >
                {[
                  {
                    title: "逻辑残缺的协作",
                    desc: "被平庸的同事篡改心血，或者执行连定位都没想清楚的荒谬任务（如吴总的无效IP）。",
                    action: "应对策略：在公司里学会“课题分离”，把这部分工作当成纯粹的“体力劳动”和“提款机”，不要投入情绪价值。"
                  },
                  {
                    title: "绝对化的洗脑环境",
                    desc: "如“努力必胜”的毒鸡汤环境。你清醒的大脑在这里会感到生理性恶心。",
                    action: "应对策略：保持心理距离，不要试图去说服或改变环境，保护好自己的认知边界。"
                  },
                  {
                    title: "被剥夺掌控感的微观管理",
                    desc: "你适合背KPI或最终结果，而不是被规定每天几点干什么。",
                    action: "应对策略：主动向上管理，争取基于结果的考核方式，拒绝无意义的过程监控。"
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-zinc-800/50 border border-rose-900/50 rounded-2xl p-6 hover:bg-zinc-800 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center mb-6">
                      <ZapOff className="w-5 h-5 text-rose-400" />
                    </div>
                    <h4 className="text-lg font-bold text-zinc-100 mb-3">{item.title}</h4>
                    <p className="text-sm text-zinc-400 mb-6 leading-relaxed">{item.desc}</p>
                    <div className="p-4 bg-rose-950/30 rounded-xl border border-rose-900/30">
                      <p className="text-xs text-rose-300 font-medium leading-relaxed">{item.action}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="recharge"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-3 gap-6"
              >
                {[
                  {
                    title: "掌控代码/工具的“造物主时间”",
                    desc: "用 AI 工具（无代码）跑通一个小应用、一个小网页。",
                    action: "这种即时反馈的创造，能迅速治愈你的职场内耗。"
                  },
                  {
                    title: "结构化输出与公众表达",
                    desc: "将你脑子里的庞大知识库（不管是 AI 技巧还是职场反思），整理成体系化的文档、文章或演讲。",
                    action: "看到别人因为你的分享而“恍然大悟”，是你的终极养料。"
                  },
                  {
                    title: "异质化信息的输入",
                    desc: "带着电脑去不同国家/城市，观察非主流的生活方式。",
                    action: "你的大脑需要大量的“新鲜样本”来防止思维僵化。"
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-zinc-800/50 border border-emerald-900/50 rounded-2xl p-6 hover:bg-zinc-800 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6">
                      <Zap className="w-5 h-5 text-emerald-400" />
                    </div>
                    <h4 className="text-lg font-bold text-zinc-100 mb-3">{item.title}</h4>
                    <p className="text-sm text-zinc-400 mb-6 leading-relaxed">{item.desc}</p>
                    <div className="p-4 bg-emerald-950/30 rounded-xl border border-emerald-900/30">
                      <p className="text-xs text-emerald-300 font-medium leading-relaxed">{item.action}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
