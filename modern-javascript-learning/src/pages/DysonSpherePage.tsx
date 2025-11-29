import { Link } from 'react-router-dom'
import '../styles/dyson-sphere.css'

const orbitingRelays = [
  { title: '轨道收集器', description: '蜂群式卫星在不同轨道分层运行，捕获恒星各波段辐射。', emphasis: '多轨道协同' },
  { title: '能量传输', description: '量子束与磁化波导并行，将能量稳态输送至外壳节点。', emphasis: '高效传输' },
  { title: '行星防护', description: '外壳内侧设置遮挡窗，调节通量并为母星提供气候保护。', emphasis: '智能调节' },
]

const constructionStages = [
  {
    label: '阶段 1',
    name: '轨道采样与启动',
    detail: '发射探测器绘制恒星磁层、辐射图谱，为蜂群布置提供实时数据。',
    progress: 18,
  },
  {
    label: '阶段 2',
    name: '蜂群收集器铺设',
    detail: '部署 10⁷ 级微型收集器，形成可扩展的戴森云，为外壳预制件供能。',
    progress: 46,
  },
  {
    label: '阶段 3',
    name: '外壳骨架成型',
    detail: '利用自复合材料打印出桁架骨架，并与能量中继点精准校准。',
    progress: 72,
  },
  {
    label: '阶段 4',
    name: '调谐与生态恢复',
    detail: '开启智能遮挡窗，维持母星宜居气候，同时将多余能量导向深空。',
    progress: 94,
  },
]

export function DysonSpherePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050b15] text-gray-100">
      <div className="dyson-stars" aria-hidden />
      <div className="dyson-grid" aria-hidden />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-10">
        <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">科幻概念可视化</p>
            <h1 className="mt-1 text-3xl font-semibold text-white sm:text-4xl">戴森球·恒星能量围捕</h1>
            <p className="mt-2 max-w-2xl text-gray-300">
              以现代 Web 技术绘制的沉浸式场景，呈现蜂群式戴森球如何在恒星周围捕获能量、塑造文明的新能源矩阵。
            </p>
          </div>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-cyan-500/30 transition hover:bg-white/20"
          >
            返回学习首页
          </Link>
        </header>

        <section className="mt-10 grid gap-8 lg:grid-cols-[2fr,1fr]">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-indigo-500/10 to-transparent" aria-hidden />
            <div className="relative">
              <div className="mx-auto flex max-w-xl flex-col items-center gap-8 sm:flex-row sm:items-start sm:gap-12">
                <div className="relative h-72 w-72 flex-shrink-0">
                  <div className="dyson-sphere" role="presentation">
                    <div className="dyson-core" />
                    <div className="dyson-shell" />
                    <div className="dyson-orbit dyson-orbit--1" />
                    <div className="dyson-orbit dyson-orbit--2" />
                    <div className="dyson-orbit dyson-orbit--3" />
                    <div className="dyson-beam dyson-beam--left" />
                    <div className="dyson-beam dyson-beam--right" />
                  </div>
                </div>
                <div className="space-y-4 text-left">
                  <div className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 text-cyan-100">
                    <span className="text-xs uppercase tracking-[0.25em]">捕获效率</span>
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/20">
                      <div className="h-full w-[86%] rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-lime-200" />
                    </div>
                    <span className="text-sm font-semibold">86%</span>
                  </div>
                  <p className="text-lg font-medium text-white">蜂群收集 & 外壳调谐</p>
                  <p className="text-gray-300">
                    在恒星光球层外侧，数以千万计的收集器与磁化骨架组成蜂群——形成可扩展的戴森云。外层桁架骨架再与可调节遮挡窗整合，
                    让能量捕获与母星生态平衡得以并存。
                  </p>
                  <div className="grid grid-cols-2 gap-3 text-sm text-cyan-100 sm:grid-cols-3">
                    <div className="rounded-lg bg-white/5 px-3 py-2">
                      <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">恒星类型</p>
                      <p className="font-semibold text-white">G 型主序星</p>
                    </div>
                    <div className="rounded-lg bg-white/5 px-3 py-2">
                      <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">壳层半径</p>
                      <p className="font-semibold text-white">1 AU</p>
                    </div>
                    <div className="rounded-lg bg-white/5 px-3 py-2">
                      <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">输出功率</p>
                      <p className="font-semibold text-white">3.8 × 10²⁶ W</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {orbitingRelays.map(relay => (
              <div
                key={relay.title}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg backdrop-blur"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-indigo-400/5 to-transparent" aria-hidden />
                <div className="relative">
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">{relay.emphasis}</p>
                  <h3 className="mt-1 text-lg font-semibold text-white">{relay.title}</h3>
                  <p className="mt-1 text-sm text-gray-200">{relay.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-500" />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">能量编排</p>
                <h2 className="text-xl font-semibold text-white">能量流 · 稳态调谐</h2>
              </div>
            </div>
            <p className="mt-3 text-gray-300">
              通过量子束、中继站和磁化波导，能量在蜂群与外壳间形成闭环。可调节遮挡窗让母星获得适宜的光照与温度，
              多余能量则被储能环与推进器分配，实现动力、工业与深空探索的供给。
            </p>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-white/5 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">遮挡窗开度</p>
                <p className="mt-1 text-2xl font-semibold text-white">37%</p>
                <p className="text-xs text-gray-300">向母星定向投射</p>
              </div>
              <div className="rounded-xl bg-white/5 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">储能环余量</p>
                <p className="mt-1 text-2xl font-semibold text-white">62%</p>
                <p className="text-xs text-gray-300">稳态备用功率</p>
              </div>
              <div className="rounded-xl bg-white/5 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">外壳节点</p>
                <p className="mt-1 text-2xl font-semibold text-white">128</p>
                <p className="text-xs text-gray-300">量子相干锁定</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-amber-400 to-rose-500" />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">文明效益</p>
                <h2 className="text-xl font-semibold text-white">能源富足的叙事</h2>
              </div>
            </div>
            <p className="mt-3 text-gray-300">
              当恒星能量被有效掌控，行星生态与星际航线得到同步升级。工业可持续扩张，科研得以进行大规模实验，
              文明则迈向“卡尔达肖夫 II 型”的能级台阶。
            </p>
            <div className="mt-5 grid grid-cols-2 gap-4 text-sm text-gray-100">
              <div className="rounded-lg bg-white/5 px-3 py-2">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">星际航道</p>
                <p className="text-base font-semibold text-white">等离子帆补给</p>
                <p className="text-xs text-gray-300">恒星级推力网</p>
              </div>
              <div className="rounded-lg bg-white/5 px-3 py-2">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">行星生态</p>
                <p className="text-base font-semibold text-white">气候稳态窗</p>
                <p className="text-xs text-gray-300">守护母星宜居性</p>
              </div>
              <div className="rounded-lg bg-white/5 px-3 py-2">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">工业跃迁</p>
                <p className="text-base font-semibold text-white">星际材料炼制</p>
                <p className="text-xs text-gray-300">近恒星冶金</p>
              </div>
              <div className="rounded-lg bg-white/5 px-3 py-2">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">科学前沿</p>
                <p className="text-base font-semibold text-white">超大规模实验</p>
                <p className="text-xs text-gray-300">能量无上限</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">建设进程</p>
              <h2 className="text-xl font-semibold text-white">戴森球分阶段落地</h2>
            </div>
            <Link
              to="/lessons/dyson-concept"
              className="inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/20"
            >
              进一步探索科技设定
            </Link>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {constructionStages.map(stage => (
              <div key={stage.label} className="rounded-xl border border-white/10 bg-black/20 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">{stage.label}</p>
                  <span className="text-sm font-semibold text-cyan-100">完成度 {stage.progress}%</span>
                </div>
                <h3 className="mt-1 text-lg font-semibold text-white">{stage.name}</h3>
                <p className="text-sm text-gray-200">{stage.detail}</p>
                <div className="mt-3 h-2 rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400"
                    style={{ width: `${stage.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default DysonSpherePage
