import axios from 'axios'

// 创建 axios 实例
export const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// 请求拦截器
api.interceptors.request.use(
  (config) => {
    console.log('发送请求:', config.method?.toUpperCase(), config.url)
    return config
  },
  (error) => {
    console.error('请求错误:', error)
    return Promise.reject(error)
  }
)

// 响应拦截器
api.interceptors.response.use(
  (response) => {
    console.log('收到响应:', response.status, response.config.url)
    return response
  },
  (error) => {
    console.error('响应错误:', error.response?.status, error.message)
    return Promise.reject(error)
  }
)

// 用户相关 API
export interface User {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export interface Comment {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

// 用户 API
export const userApi = {
  // 获取所有用户
  getUsers: async (): Promise<User[]> => {
    const response = await api.get('/users')
    return response.data
  },

  // 获取单个用户
  getUser: async (id: number): Promise<User> => {
    const response = await api.get(`/users/${id}`)
    return response.data
  },

  // 创建用户
  createUser: async (userData: Omit<User, 'id'>): Promise<User> => {
    const response = await api.post('/users', userData)
    return response.data
  },

  // 更新用户
  updateUser: async (id: number, userData: Partial<User>): Promise<User> => {
    const response = await api.put(`/users/${id}`, userData)
    return response.data
  },

  // 删除用户
  deleteUser: async (id: number): Promise<void> => {
    await api.delete(`/users/${id}`)
  }
}

// 文章 API
export const postApi = {
  // 获取所有文章
  getPosts: async (): Promise<Post[]> => {
    const response = await api.get('/posts')
    return response.data
  },

  // 获取用户的文章
  getUserPosts: async (userId: number): Promise<Post[]> => {
    const response = await api.get(`/users/${userId}/posts`)
    return response.data
  },

  // 获取单个文章
  getPost: async (id: number): Promise<Post> => {
    const response = await api.get(`/posts/${id}`)
    return response.data
  },

  // 创建文章
  createPost: async (postData: Omit<Post, 'id'>): Promise<Post> => {
    const response = await api.post('/posts', postData)
    return response.data
  },

  // 更新文章
  updatePost: async (id: number, postData: Partial<Post>): Promise<Post> => {
    const response = await api.put(`/posts/${id}`, postData)
    return response.data
  },

  // 删除文章
  deletePost: async (id: number): Promise<void> => {
    await api.delete(`/posts/${id}`)
  }
}

// 评论 API
export const commentApi = {
  // 获取文章评论
  getPostComments: async (postId: number): Promise<Comment[]> => {
    const response = await api.get(`/posts/${postId}/comments`)
    return response.data
  }
}

// 模拟延迟的函数（用于演示加载状态）
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
