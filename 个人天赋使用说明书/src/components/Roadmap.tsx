import { motion } from "motion/react";
import { Route, MapPin, Compass } from "lucide-react";

export default function Roadmap() {
  return (
    <section className="py-24 bg-zinc-50 relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-4">Chapter 3</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-zinc-900 tracking-tight">
            人生与商业模式设计
          </h3>
          <p className="mt-6 text-lg text-zinc-600 max-w-2xl mx-auto">
            未来 3-5 年路线图。基于你的天赋和对现实（金钱）的考量，我绝对不建议你立刻“裸辞”。作为一个系统架构师，我们要打的是一场有准备的降维战。
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-zinc-200 transform md:-translate-x-1/2"></div>

          <div className="space-y-24">
            {/* Phase 1 */}
            <div className="relative flex flex-col md:flex-row items-center justify-between group">
              <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white transform -translate-x-1/2 z-10 shadow-sm"></div>
              
              <div className="w-full md:w-5/12 pl-16 md:pl-0 md:text-right md:pr-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100">
                    <MapPin className="w-3 h-3" />
                    第一阶段
                  </div>
                  <h4 className="text-2xl font-bold text-zinc-900 mb-4">双轨制潜伏期</h4>
                  <p className="text-zinc-600 mb-6 leading-relaxed">
                    在职构建 MVP。把现在的公司当成你的<span className="font-bold text-zinc-900">“带薪田野调查基地”和“天使投资人”</span>。在这里，你观察职场 PUA、观察低效流程、观察平庸是如何运作的。这些都是你未来做内容的绝佳素材。
                  </p>
                </motion.div>
              </div>

              <div className="w-full md:w-5/12 pl-16 md:pl-12 mt-8 md:mt-0">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm"
                >
                  <h5 className="font-bold text-zinc-900 mb-4 flex items-center gap-2">
                    <Route className="w-4 h-4 text-blue-500" />
                    副业杠杆开启 (Vibecoding+自媒体)
                  </h5>
                  <div className="space-y-4">
                    <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-100">
                      <h6 className="text-sm font-bold text-zinc-900 mb-1">定位</h6>
                      <p className="text-sm text-zinc-600">做一个“清醒的职场/生活架构师”。不要只做纯技术的 AI 博主，也不要只做纯感性的心理博主。</p>
                    </div>
                    <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-100">
                      <h6 className="text-sm font-bold text-zinc-900 mb-2">内容矩阵</h6>
                      <ul className="space-y-2 text-sm text-zinc-600">
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0"/><span><strong className="text-zinc-800">AI 提效：</strong>分享你用工具做出来的实际成果，教人如何用杠杆。</span></li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0"/><span><strong className="text-zinc-800">职场祛魅：</strong>用你的逻辑拆解职场乱象，教大家如何停止盲目努力。</span></li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0"/><span><strong className="text-zinc-800">生活实验：</strong>记录你如何用架构师的思维管理生活。</span></li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="relative flex flex-col md:flex-row items-center justify-between group">
              <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white transform -translate-x-1/2 z-10 shadow-sm"></div>
              
              <div className="w-full md:w-5/12 pl-16 md:pl-0 md:text-right md:pr-12 md:order-1 order-2 mt-8 md:mt-0">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm"
                >
                  <h5 className="font-bold text-zinc-900 mb-4 flex items-center gap-2 md:justify-end">
                    <Compass className="w-4 h-4 text-emerald-500" />
                    商业闭环与时间架构
                  </h5>
                  <div className="space-y-4 text-left">
                    <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-100">
                      <h6 className="text-sm font-bold text-zinc-900 mb-1">时间架构</h6>
                      <p className="text-sm text-zinc-600">每年 6 个月在固定基地（极度自律、深耕产品）；另外 6 个月开启“数字游民”状态（旅居、观察、录制播客、写游记）。</p>
                    </div>
                    <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-100">
                      <h6 className="text-sm font-bold text-zinc-900 mb-2">商业闭环</h6>
                      <ul className="space-y-2 text-sm text-zinc-600">
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"/><span><strong className="text-zinc-800">前端：</strong>免费的高质量内容（图文/视频/播客）带来流量和信任。</span></li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"/><span><strong className="text-zinc-800">中端：</strong>实用的 AI 办公流课程或效率社群。</span></li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"/><span><strong className="text-zinc-800">后端：</strong>为特定人群开发的独立产品或深度咨询。</span></li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="w-full md:w-5/12 pl-16 md:pl-12 md:order-2 order-1">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-100">
                    <MapPin className="w-3 h-3" />
                    第二阶段
                  </div>
                  <h4 className="text-2xl font-bold text-zinc-900 mb-4">“候鸟型”超级个体</h4>
                  <p className="text-zinc-600 mb-6 leading-relaxed">
                    你的理想形态。当你通过自媒体/产品积累了第一波粉丝，并且副业收入能够覆盖你的基础生存底线时，你可以开始切换到你梦寐以求的“姐姐模式”。
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
