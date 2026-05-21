import { motion } from "motion/react";
import { ShieldAlert, CheckCircle2, ShieldCheck, BrainCircuit } from "lucide-react";

export default function AchillesHeel() {
  return (
    <section className="py-24 bg-zinc-950 text-zinc-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-4">Chapter 4</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-zinc-100 tracking-tight">
            你的“阿喀琉斯之踵”与破局之道
          </h3>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative background */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-rose-500/20 flex items-center justify-center shrink-0 border border-rose-500/30">
                <ShieldAlert className="w-6 h-6 text-rose-400" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-zinc-100 mb-2">最大的恐惧</h4>
                <p className="text-zinc-400 leading-relaxed italic">
                  “担忧脱离主流轨道之后，执行力不够、没钱了怎么办？”
                </p>
              </div>
            </div>

            <div className="p-6 bg-zinc-800/50 rounded-2xl border border-zinc-700/50 mb-12">
              <p className="text-lg text-zinc-300 leading-relaxed">
                这是一个极其理智的担忧。但请你认清一个事实：<br/>
                <span className="text-white font-bold text-xl block mt-4 mb-2">你并不缺乏执行力。你缺乏的是对“失控”的容忍度。</span>
                因为你太聪明、太能看透终局，所以一旦脱离了公司这个“强制性框架”，你的大脑会自动推演无数种失败的可能（没钱、断保、焦虑）。这种过度的分析，会引发<span className="text-rose-400 font-bold">“执行力瘫痪”</span>。
              </p>
            </div>

            <h4 className="text-2xl font-bold text-zinc-100 mb-8 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              如何破解？
            </h4>

            <div className="space-y-6">
              {[
                {
                  icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
                  title: "建立“安全垫系统”",
                  desc: "不要考验人性，要依赖系统。在你准备脱离主流轨道前，存够至少 18-24 个月的“Fuck you money”。这笔钱不是用来挥霍的，而是为你购买“逻辑上绝对的安全感”。"
                },
                {
                  icon: <BrainCircuit className="w-5 h-5 text-blue-400" />,
                  title: "用 AI 监督自己",
                  desc: "把你那套大三时的“高功能作息表”，变成你生活的底层代码。利用你最喜欢的 AI 工具，为自己量身定制一套“单人公司OKR管理系统”。"
                },
                {
                  icon: <ShieldCheck className="w-5 h-5 text-amber-400" />,
                  title: "接纳“平庸的自己”",
                  desc: "允许自己有时候就是写不出东西，允许自己偶尔逻辑混乱。你是一个人，不是你手下完美运行的代码。接纳不完美，正是你走向大师之路的第一步。"
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4 p-6 rounded-2xl bg-zinc-800/30 border border-zinc-700/30 hover:bg-zinc-800/50 transition-colors"
                >
                  <div className="shrink-0 mt-1">{item.icon}</div>
                  <div>
                    <h5 className="font-bold text-zinc-100 mb-2">{item.title}</h5>
                    <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
