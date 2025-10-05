import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { userApi, type User } from '@/services/api'

// 获取用户列表
export function useUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: userApi.getUsers,
    staleTime: 5 * 60 * 1000, // 5分钟内数据被认为是新鲜的
    gcTime: 10 * 60 * 1000, // 10分钟后清理缓存
  })
}

// 获取单个用户
export function useUser(id: number) {
  return useQuery({
    queryKey: ['users', id],
    queryFn: () => userApi.getUser(id),
    enabled: !!id, // 只有当 id 存在时才执行查询
  })
}

// 创建用户
export function useCreateUser() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: userApi.createUser,
    onSuccess: () => {
      // 创建成功后，使用户列表缓存失效，触发重新获取
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
  })
}

// 更新用户
export function useUpdateUser() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<User> }) =>
      userApi.updateUser(id, data),
    onSuccess: (updatedUser) => {
      // 更新成功后，更新缓存中的用户数据
      queryClient.setQueryData(['users', updatedUser.id], updatedUser)
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
  })
}

// 删除用户
export function useDeleteUser() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: userApi.deleteUser,
    onSuccess: (_, deletedId) => {
      // 删除成功后，从缓存中移除该用户
      queryClient.removeQueries({ queryKey: ['users', deletedId] })
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
  })
}
