import { useState } from 'react'
import { Link } from 'react-router-dom'

export function SaasLandingPage() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null)
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('monthly')

  const features = [
    {
      icon: '⚡',
      title: '极速性能',
      desc: '优化的架构确保应用运行快速流畅，提供最佳用户体验',
    },
    {
      icon: '🔒',
      title: '企业级安全',
      desc: '银行级加密和多重身份验证，保护您的数据安全',
    },
    {
      icon: '📊',
      title: '实时分析',
      desc: '强大的数据分析和可视化工具，帮助您做出明智决策',
    },
    {
      icon: '🔌',
      title: '无缝集成',
      desc: '与100+主流工具和服务无缝集成，提升工作效率',
    },
    {
      icon: '📱',
      title: '移动优先',
      desc: '完美支持各种设备，随时随地访问您的数据',
    },
    {
      icon: '🛠',
      title: 'API 优先',
      desc: '强大的 RESTful API 和 GraphQL 支持，轻松扩展',
    },
  ]

  const pricingPlans = [
    {
      name: '免费版',
      desc: '适合个人和小团队',
      price: { monthly: 0, yearly: 0 },
      features: [
        '最多 5 个用户',
        '10GB 存储空间',
        '基础分析工具',
        '社区支持',
        '5 个集成',
      ],
      cta: '开始免费使用',
      popular: false,
    },
    {
      name: '专业版',
      desc: '适合成长中的团队',
      price: { monthly: 99, yearly: 990 },
      features: [
        '最多 50 个用户',
        '500GB 存储空间',
        '高级分析工具',
        '优先邮件支持',
        '无限集成',
        '自定义域名',
        'API 访问',
      ],
      cta: '开始 14 天免费试用',
      popular: true,
    },
    {
      name: '企业版',
      desc: '适合大型组织',
      price: { monthly: 299, yearly: 2990 },
      features: [
        '无限用户',
        '无限存储空间',
        '企业级分析',
        '24/7 专属支持',
        'SSO 单点登录',
        '自定义部署',
        '专属客户经理',
        'SLA 保证',
      ],
      cta: '联系销售',
      popular: false,
    },
  ]

  const testimonials = [
    {
      content:
        '这个平台彻底改变了我们的工作方式。效率提升了 300%，团队协作更加流畅。',
      author: '张三',
      role: 'CTO, 科技公司',
      avatar: '👨',
      company: 'TechCorp',
    },
    {
      content:
        '客户支持非常棒，功能强大且易于使用。强烈推荐给任何需要提升效率的团队。',
      author: '李四',
      role: '产品经理',
      avatar: '👩',
      company: 'StartupCo',
    },
    {
      content:
        '从免费版开始，现在我们整个公司都在使用企业版。物超所值！',
      author: '王五',
      role: 'CEO',
      avatar: '👨',
      company: 'GrowthInc',
    },
  ]

  const faqs = [
    {
      question: '如何开始免费试用？',
      answer:
        '只需点击"开始免费试用"按钮，填写基本信息即可开始 14 天全功能试用。无需信用卡。',
    },
    {
      question: '可以随时取消订阅吗？',
      answer:
        '当然可以。您可以随时在账户设置中取消订阅，没有额外费用或长期合同约束。',
    },
    {
      question: '支持哪些支付方式？',
      answer:
        '我们支持所有主流信用卡、借记卡，以及支付宝、微信支付等多种支付方式。',
    },
    {
      question: '数据安全如何保障？',
      answer:
        '我们采用银行级 AES-256 加密，SOC 2 Type II 认证，定期进行安全审计，确保您的数据安全。',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* 导航栏 */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
          <div className="flex items-center gap-8">
            <Link
              to="/tailwind-learning"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <span>←</span>
              <span>返回课程</span>
            </Link>
            <span className="text-gray-300">|</span>
            <a href="#" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white text-xl">
                🚀
              </div>
              <span className="text-xl font-bold text-gray-900">
                SaaS平台
              </span>
            </a>
            <div className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-gray-600 hover:text-gray-900">
                功能特性
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">
                定价
              </a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900">
                客户评价
              </a>
              <a href="#faq" className="text-gray-600 hover:text-gray-900">
                FAQ
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hidden sm:block text-gray-600 hover:text-gray-900">
              登录
            </a>
            <a
              href="#"
              className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg hover:from-blue-700 hover:to-purple-700"
            >
              免费开始
            </a>
          </div>
        </div>
      </nav>

      {/* Hero 区域 */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 lg:py-32">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              🎉 新功能发布：AI 智能助手现已上线
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
              下一代团队协作
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                平台
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 md:text-xl">
              集项目管理、团队沟通、文件协作于一体。让您的团队效率提升
              300%，专注创造价值。
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-base font-semibold text-white shadow-xl hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                免费开始使用
                <span className="ml-2">→</span>
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-lg border-2 border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-700 shadow-lg hover:border-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                观看演示视频
                <span className="ml-2">▶</span>
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              ✓ 14天免费试用 · ✓ 无需信用卡 · ✓ 随时取消
            </p>
          </div>

          {/* 产品截图 */}
          <div className="mt-16 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-4 shadow-2xl ring-1 ring-gray-900/10">
            <div className="aspect-[16/9] overflow-hidden rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-6xl">
              🖥️ 产品演示界面
            </div>
          </div>

          {/* 信任标志 */}
          <div className="mt-16 text-center">
            <p className="text-sm font-medium text-gray-500">
              被全球 10,000+ 企业信赖
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-8 opacity-50 grayscale">
              {['Google', 'Microsoft', 'Apple', 'Amazon', 'Meta', 'Netflix'].map(
                (company) => (
                  <div key={company} className="text-2xl font-bold text-gray-400">
                    {company}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 功能特性 */}
      <section id="features" className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              强大的功能，简单易用
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              我们精心设计的每个功能，都旨在提升您的团队效率和协作体验
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-3xl text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 定价 */}
      <section id="pricing" className="bg-gray-50 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              简单透明的定价
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              选择最适合您的计划，随时可以升级或降级
            </p>

            {/* 计费周期切换 */}
            <div className="mt-8 inline-flex items-center rounded-lg bg-gray-200 p-1">
              <button
                onClick={() => setSelectedPlan('monthly')}
                className={`rounded-lg px-6 py-2 text-sm font-medium transition-all ${
                  selectedPlan === 'monthly'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600'
                }`}
              >
                按月付费
              </button>
              <button
                onClick={() => setSelectedPlan('yearly')}
                className={`rounded-lg px-6 py-2 text-sm font-medium transition-all ${
                  selectedPlan === 'yearly'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600'
                }`}
              >
                按年付费
                <span className="ml-2 rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700">
                  省 17%
                </span>
              </button>
            </div>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-900/5 ${
                  plan.popular
                    ? 'scale-105 shadow-2xl shadow-blue-500/10 ring-2 ring-blue-500'
                    : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-1 text-sm font-semibold text-white shadow-lg">
                      最受欢迎
                    </span>
                  </div>
                )}

                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-gray-600">{plan.desc}</p>
                  <div className="mt-6">
                    <span className="text-5xl font-bold text-gray-900">
                      ¥{plan.price[selectedPlan]}
                    </span>
                    <span className="text-gray-600">
                      /{selectedPlan === 'monthly' ? '月' : '年'}
                    </span>
                  </div>
                </div>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                        ✓
                      </span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-8 w-full rounded-lg px-6 py-3.5 text-sm font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:from-blue-700 hover:to-purple-700'
                      : 'border-2 border-gray-300 text-gray-900 hover:border-gray-400 hover:bg-gray-50'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 客户评价 */}
      <section id="testimonials" className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              客户怎么说
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              来自各行各业的企业对我们平台的真实评价
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-900/5"
              >
                <div className="flex text-yellow-400 text-xl">
                  {'⭐'.repeat(5)}
                </div>
                <p className="mt-4 text-lg text-gray-700">
                  "{testimonial.content}"
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-2xl text-white">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-gray-50 py-20 lg:py-32">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              常见问题
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              快速找到您关心的问题答案
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-900/5"
              >
                <button
                  onClick={() =>
                    setFaqOpen(faqOpen === index ? null : index)
                  }
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <span
                    className={`ml-4 flex-shrink-0 transition-transform ${
                      faqOpen === index ? 'rotate-180' : ''
                    }`}
                  >
                    ▼
                  </span>
                </button>
                {faqOpen === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 px-6 py-16 text-center shadow-2xl sm:px-12 sm:py-24 lg:px-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              准备开始了吗？
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
              加入 10,000+ 企业，体验全新的协作方式
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-blue-600 shadow-xl hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              >
                免费开始使用
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              >
                联系销售
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="border-t border-gray-200 bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white text-xl">
                  🚀
                </div>
                <span className="text-xl font-bold text-gray-900">
                  SaaS平台
                </span>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                下一代团队协作平台，让工作更高效。
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">产品</h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    功能特性
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    定价
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    集成
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    更新日志
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">公司</h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    关于我们
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    博客
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    招聘
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    联系我们
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">法律</h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    隐私政策
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    服务条款
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Cookie 政策
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
            <p>© 2024 SaaS平台. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
