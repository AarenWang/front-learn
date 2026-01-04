import { useState } from 'react'
import { Link } from 'react-router-dom'

export function EcommerceProductPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState('black')
  const [selectedSize, setSelectedSize] = useState('M')
  const [quantity, setQuantity] = useState(1)

  const images = [
    { id: 1, src: '👕', alt: '产品主图' },
    { id: 2, src: '👕', alt: '产品侧面' },
    { id: 3, src: '👕', alt: '产品背面' },
    { id: 4, src: '👕', alt: '产品细节' },
  ]

  const colors = [
    { name: 'black', value: '#000000', label: '黑色' },
    { name: 'white', value: '#ffffff', label: '白色' },
    { name: 'blue', value: '#3b82f6', label: '蓝色' },
    { name: 'red', value: '#ef4444', label: '红色' },
  ]

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

  const features = [
    { icon: '✨', title: '优质面料', desc: '100% 纯棉，舒适透气' },
    { icon: '🎨', title: '时尚设计', desc: '简约风格，百搭不挑人' },
    { icon: '🔧', title: '精工细作', desc: '每道工序严格把关' },
    { icon: '🚚', title: '快速发货', desc: '24小时内发出' },
  ]

  const reviews = [
    {
      id: 1,
      user: '张三',
      avatar: '👨',
      rating: 5,
      date: '2024-01-15',
      content: '质量非常好，穿着很舒服，会再次购买！',
      images: ['👕', '👕'],
    },
    {
      id: 2,
      user: '李四',
      avatar: '👩',
      rating: 4,
      date: '2024-01-14',
      content: '款式不错，就是尺码稍微偏大了一点。',
      images: [],
    },
    {
      id: 3,
      user: '王五',
      avatar: '👨',
      rating: 5,
      date: '2024-01-13',
      content: '物流很快，包装也很精美，推荐购买！',
      images: ['👕'],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="flex h-16 items-center justify-between px-4 lg:px-8">
          <div className="flex items-center gap-4">
            <Link
              to="/tailwind-learning"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <span>←</span>
              <span>返回课程</span>
            </Link>
            <span className="text-gray-300">|</span>
            <nav className="hidden md:flex gap-6">
              <span className="text-gray-900 font-medium">电商产品页</span>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="rounded-lg p-2 hover:bg-gray-100">
              <span className="text-xl">🔍</span>
            </button>
            <button className="relative rounded-lg p-2 hover:bg-gray-100">
              <span className="text-xl">🛒</span>
              <span className="absolute right-0 top-0 h-5 w-5 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">
                3
              </span>
            </button>
            <button className="hidden sm:block rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">
              登录
            </button>
          </div>
        </div>
      </header>

      {/* 面包屑 */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-4 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm">
            <a href="#" className="text-gray-500 hover:text-gray-700">
              首页
            </a>
            <span className="text-gray-400">/</span>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              服装
            </a>
            <span className="text-gray-400">/</span>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              T恤
            </a>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">高品质纯棉T恤</span>
          </nav>
        </div>
      </div>

      {/* 主要内容 */}
      <main className="px-4 lg:px-8 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* 图片画廊 */}
            <div className="space-y-4">
              {/* 主图 */}
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-white ring-1 ring-gray-900/5">
                <div className="flex h-full items-center justify-center text-9xl">
                  {images[selectedImage].src}
                </div>
                <button className="absolute right-4 top-4 rounded-full bg-white p-2 shadow-lg hover:bg-gray-50">
                  <span className="text-xl">🔍</span>
                </button>
                <div className="absolute left-4 top-4 rounded-full bg-red-500 px-3 py-1 text-sm font-medium text-white">
                  新品
                </div>
              </div>

              {/* 缩略图 */}
              <div className="flex gap-3 overflow-x-auto pb-2">
                {images.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 overflow-hidden rounded-lg ring-2 transition-all ${
                      selectedImage === index
                        ? 'ring-blue-500 ring-offset-2'
                        : 'ring-transparent hover:ring-gray-300'
                    }`}
                  >
                    <div className="h-20 w-20 flex items-center justify-center bg-white text-4xl">
                      {image.src}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 产品信息 */}
            <div className="space-y-6">
              {/* 标题和价格 */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900 lg:text-4xl">
                  高品质纯棉T恤 - 2024新款
                </h1>
                <p className="mt-2 text-lg text-gray-600">
                  舒适透气 · 时尚百搭 · 经典圆领
                </p>
                <div className="mt-4 flex items-baseline gap-3">
                  <span className="text-4xl font-bold text-gray-900">
                    ¥199
                  </span>
                  <span className="text-xl text-gray-400 line-through">
                    ¥299
                  </span>
                  <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-600">
                    6.7折
                  </span>
                </div>
              </div>

              {/* 颜色选择 */}
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">颜色</span>
                  <span className="text-sm text-gray-500">
                    {colors.find((c) => c.name === selectedColor)?.label}
                  </span>
                </div>
                <div className="mt-3 flex gap-3">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`relative h-12 w-12 rounded-full ring-2 transition-all ${
                        selectedColor === color.name
                          ? 'ring-blue-500 ring-offset-2'
                          : 'ring-gray-300 hover:ring-gray-400'
                      }`}
                      style={{ backgroundColor: color.value }}
                      aria-label={color.label}
                    >
                      {selectedColor === color.name && (
                        <span className="absolute inset-0 flex items-center justify-center text-white">
                          ✓
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* 尺码选择 */}
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">尺码</span>
                  <button className="text-sm text-blue-600 hover:text-blue-700">
                    尺码指南
                  </button>
                </div>
                <div className="mt-3 grid grid-cols-6 gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`rounded-lg border-2 py-3 text-center text-sm font-medium transition-all ${
                        selectedSize === size
                          ? 'border-blue-500 bg-blue-50 text-blue-600'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* 数量选择 */}
              <div>
                <span className="text-sm font-medium text-gray-900">数量</span>
                <div className="mt-3 flex items-center gap-4">
                  <div className="flex items-center rounded-lg border border-gray-300">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
                      disabled={quantity <= 1}
                    >
                      -
                    </button>
                    <span className="w-12 text-center font-medium">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-sm text-gray-500">
                    库存: 999+ 件
                  </span>
                </div>
              </div>

              {/* 购买按钮 */}
              <div className="flex gap-4">
                <button className="flex-1 rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  立即购买
                </button>
                <button className="flex-1 rounded-lg border-2 border-gray-900 px-8 py-4 font-semibold text-gray-900 transition-colors hover:bg-gray-50">
                  加入购物车
                </button>
                <button className="rounded-lg border-2 border-gray-300 p-4 hover:border-gray-400 hover:bg-gray-50">
                  <span className="text-xl">❤️</span>
                </button>
              </div>

              {/* 服务保障 */}
              <div className="rounded-xl bg-gray-50 p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-2xl">{feature.icon}</span>
                      <div>
                        <p className="font-medium text-gray-900">
                          {feature.title}
                        </p>
                        <p className="text-sm text-gray-600">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 产品详情和评价 */}
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {/* 产品详情 */}
            <div className="lg:col-span-2">
              <div className="rounded-xl bg-white p-6 ring-1 ring-gray-900/5">
                <h2 className="text-2xl font-bold text-gray-900">产品详情</h2>
                <div className="mt-6 space-y-4 text-gray-700">
                  <p>
                    这款高品质纯棉T恤采用100%优质棉面料，手感柔软舒适，透气性佳。
                    经典圆领设计，适合各种脸型，无论是单穿还是内搭都能展现时尚品味。
                  </p>
                  <p>
                    精密的车工和细节处理，每一道工序都经过严格把控，确保产品品质。
                    多种颜色和尺码可选，满足不同需求。
                  </p>
                  <div className="mt-6 rounded-lg bg-gray-50 p-4">
                    <h3 className="font-semibold text-gray-900">产品参数</h3>
                    <dl className="mt-4 grid gap-3 sm:grid-cols-2">
                      <div className="flex">
                        <dt className="w-24 text-gray-600">材质:</dt>
                        <dd className="text-gray-900">100% 纯棉</dd>
                      </div>
                      <div className="flex">
                        <dt className="w-24 text-gray-600">季节:</dt>
                        <dd className="text-gray-900">春夏秋冬</dd>
                      </div>
                      <div className="flex">
                        <dt className="w-24 text-gray-600">领型:</dt>
                        <dd className="text-gray-900">圆领</dd>
                      </div>
                      <div className="flex">
                        <dt className="w-24 text-gray-600">袖长:</dt>
                        <dd className="text-gray-900">短袖</dd>
                      </div>
                      <div className="flex">
                        <dt className="w-24 text-gray-600">版型:</dt>
                        <dd className="text-gray-900">修身</dd>
                      </div>
                      <div className="flex">
                        <dt className="w-24 text-gray-600">洗涤:</dt>
                        <dd className="text-gray-900">机洗/手洗</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            {/* 用户评价 */}
            <div>
              <div className="rounded-xl bg-white p-6 ring-1 ring-gray-900/5">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">用户评价</h2>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex text-yellow-400">
                      {'⭐'.repeat(5)}
                    </div>
                    <span className="text-lg font-semibold text-gray-900">
                      4.8
                    </span>
                    <span className="text-gray-600">(2,345条评价)</span>
                  </div>
                </div>

                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div
                      key={review.id}
                      className="border-b border-gray-200 pb-6 last:border-0 last:pb-0"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 text-xl">
                          {review.avatar}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <p className="font-medium text-gray-900">
                              {review.user}
                            </p>
                            <span className="text-xs text-gray-500">
                              {review.date}
                            </span>
                          </div>
                          <div className="mt-1 flex text-yellow-400 text-sm">
                            {'⭐'.repeat(review.rating)}
                          </div>
                          <p className="mt-2 text-sm text-gray-700">
                            {review.content}
                          </p>
                          {review.images.length > 0 && (
                            <div className="mt-2 flex gap-2">
                              {review.images.map((img, index) => (
                                <div
                                  key={index}
                                  className="h-16 w-16 rounded-lg bg-gray-100 flex items-center justify-center text-3xl"
                                >
                                  {img}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="mt-6 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
                  查看全部评价
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
