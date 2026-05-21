import { motion } from "motion/react";
import { Terminal, Zap, Brain, MessageSquare } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-zinc-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-zinc-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-zinc-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 border border-zinc-200 text-sm font-mono text-zinc-600 mb-4">
            <Terminal className="w-4 h-4" />
            <span>深度定制</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 font-serif">
            《个人天赋使用说明书》
          </h1>

          <div className="max-w-3xl mx-auto mt-12 grid gap-6 md:grid-cols-3 text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="glass-panel p-6 rounded-2xl"
            >
              <div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center mb-4">
                <Terminal className="w-5 h-5 text-zinc-700" />
              </div>
              <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">使用者代号</h3>
              <p className="font-medium text-zinc-900">清醒的系统架构师 &<br/>自由的“翻译官”</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="glass-panel p-6 rounded-2xl"
            >
              <div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5 text-zinc-700" />
              </div>
              <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">核心驱动力</h3>
              <p className="font-medium text-zinc-900">求真、构建秩序、<br/>杠杆效能、心智启蒙</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="glass-panel p-6 rounded-2xl"
            >
              <div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center mb-4">
                <Brain className="w-5 h-5 text-zinc-700" />
              </div>
              <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">出厂最高配置</h3>
              <div className="space-y-1 text-sm font-medium text-zinc-900">
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-zinc-400"/>洞察力 (战略/分析)</div>
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-zinc-400"/>重构力 (学习/成就)</div>
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-zinc-400"/>传播力 (沟通/共情)</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
