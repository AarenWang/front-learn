import { useState } from 'react'

type TabType = 'login' | 'register' | 'forgot'

export function LoginAuthPage() {
  const [activeTab, setActiveTab] = useState<TabType>('login')
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    phone: '',
    code: '',
  })
  const [acceptTerms, setAcceptTerms] = useState(false)

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: Record<string, string> = {}

    // 验证逻辑
    if (!formData.email) {
      newErrors.email = '请输入邮箱地址'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = '请输入有效的邮箱地址'
    }

    if (!formData.password) {
      newErrors.password = '请输入密码'
    } else if (formData.password.length < 6) {
      newErrors.password = '密码至少需要6个字符'
    }

    if (activeTab === 'register') {
      if (!formData.name) {
        newErrors.name = '请输入姓名'
      }
      if (!formData.phone) {
        newErrors.phone = '请输入手机号'
      } else if (!/^1[3-9]\d{9}$/.test(formData.phone)) {
        newErrors.phone = '请输入有效的手机号'
      }
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = '两次密码不一致'
      }
      if (!acceptTerms) {
        newErrors.terms = '请阅读并同意用户协议'
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})
    setIsLoading(true)

    // 模拟 API 调用
    setTimeout(() => {
      setIsLoading(false)
      alert(activeTab === 'login' ? '登录成功！' : '注册成功！')
    }, 2000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // 清除对应字段的错误
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo 和标题 */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-3xl shadow-lg">
            🔐
          </div>
          <h1 className="text-3xl font-bold text-gray-900">
            {activeTab === 'forgot' ? '找回密码' : activeTab === 'register' ? '创建账户' : '欢迎回来'}
          </h1>
          <p className="mt-2 text-gray-600">
            {activeTab === 'forgot'
              ? '输入您的邮箱地址，我们将发送重置链接'
              : activeTab === 'register'
              ? '开始您的精彩旅程'
              : '登录您的账户以继续'}
          </p>
        </div>

        {/* 表单卡片 */}
        <div className="rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-900/5">
          {/* 选项卡 */}
          {activeTab !== 'forgot' && (
            <div className="mb-6 flex gap-2 rounded-lg bg-gray-100 p-1">
              <button
                onClick={() => {
                  setActiveTab('login')
                  setErrors({})
                }}
                className={`flex-1 rounded-lg py-2.5 text-sm font-medium transition-all ${
                  activeTab === 'login'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                登录
              </button>
              <button
                onClick={() => {
                  setActiveTab('register')
                  setErrors({})
                }}
                className={`flex-1 rounded-lg py-2.5 text-sm font-medium transition-all ${
                  activeTab === 'register'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                注册
              </button>
            </div>
          )}

          {/* 表单 */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {activeTab === 'register' && (
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  姓名
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="请输入您的姓名"
                  className={`w-full rounded-lg border-2 px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 ${
                    errors.name
                      ? 'border-red-500 focus:ring-red-500/20'
                      : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500/20'
                  }`}
                />
                {errors.name && (
                  <p className="mt-1.5 text-sm text-red-600">{errors.name}</p>
                )}
              </div>
            )}

            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                邮箱地址
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                className={`w-full rounded-lg border-2 px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 ${
                  errors.email
                    ? 'border-red-500 focus:ring-red-500/20'
                    : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500/20'
                }`}
              />
              {errors.email && (
                <p className="mt-1.5 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {activeTab === 'register' && (
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  手机号码
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="请输入手机号"
                  className={`w-full rounded-lg border-2 px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 ${
                    errors.phone
                      ? 'border-red-500 focus:ring-red-500/20'
                      : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500/20'
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1.5 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>
            )}

            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                密码
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="请输入密码"
                  className={`w-full rounded-lg border-2 px-4 py-3 pr-12 text-sm transition-all focus:outline-none focus:ring-2 ${
                    errors.password
                      ? 'border-red-500 focus:ring-red-500/20'
                      : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500/20'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1.5 text-sm text-red-600">{errors.password}</p>
              )}
            </div>

            {activeTab === 'register' && (
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  确认密码
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="请再次输入密码"
                  className={`w-full rounded-lg border-2 px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 ${
                    errors.confirmPassword
                      ? 'border-red-500 focus:ring-red-500/20'
                      : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500/20'
                  }`}
                />
                {errors.confirmPassword && (
                  <p className="mt-1.5 text-sm text-red-600">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            )}

            {activeTab === 'login' && (
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-600">记住我</span>
                </label>
                <button
                  type="button"
                  onClick={() => setActiveTab('forgot')}
                  className="text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  忘记密码？
                </button>
              </div>
            )}

            {activeTab === 'register' && (
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) => {
                    setAcceptTerms(e.target.checked)
                    if (e.target.checked && errors.terms) {
                      setErrors((prev) => {
                        const newErrors = { ...prev }
                        delete newErrors.terms
                        return newErrors
                      })
                    }
                  }}
                  className={`mt-0.5 h-4 w-4 rounded focus:ring-2 ${
                    errors.terms
                      ? 'border-red-500 text-red-600 focus:ring-red-500/20'
                      : 'border-gray-300 text-blue-600 focus:ring-blue-500/20'
                  }`}
                />
                <span className="text-sm text-gray-600">
                  我已阅读并同意
                  <a href="#" className="font-medium text-blue-600 hover:text-blue-700">
                    用户协议
                  </a>
                  和
                  <a href="#" className="font-medium text-blue-600 hover:text-blue-700">
                    隐私政策
                  </a>
                </span>
              </div>
            )}

            {errors.terms && (
              <p className="text-sm text-red-600">{errors.terms}</p>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"></span>
                  处理中...
                </span>
              ) : activeTab === 'forgot' ? (
                '发送重置链接'
              ) : activeTab === 'register' ? (
                '创建账户'
              ) : (
                '登录'
              )}
            </button>
          </form>

          {activeTab === 'login' && (
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-gray-500">
                    或使用以下方式登录
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <button className="flex items-center justify-center rounded-lg border border-gray-300 px-4 py-3 transition-colors hover:bg-gray-50">
                  <span className="text-xl">🔵</span>
                </button>
                <button className="flex items-center justify-center rounded-lg border border-gray-300 px-4 py-3 transition-colors hover:bg-gray-50">
                  <span className="text-xl">🟢</span>
                </button>
                <button className="flex items-center justify-center rounded-lg border border-gray-300 px-4 py-3 transition-colors hover:bg-gray-50">
                  <span className="text-xl">⚫</span>
                </button>
              </div>
            </div>
          )}

          {activeTab !== 'login' && (
            <div className="mt-6 text-center">
              <button
                onClick={() => {
                  setActiveTab('login')
                  setErrors({})
                }}
                className="text-sm font-medium text-blue-600 hover:text-blue-700"
              >
                ← 返回登录
              </button>
            </div>
          )}
        </div>

        {/* 页脚 */}
        <p className="mt-8 text-center text-sm text-gray-600">
          © 2024 Your Company. All rights reserved.
        </p>
      </div>
    </div>
  )
}
