import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { postApi, commentApi, type Post } from '@/services/api'

// 获取文章列表
export function usePosts() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: postApi.getPosts,
    staleTime: 5 * 60 * 1000,
  })
}

// 获取单个文章
export function usePost(id: number) {
  return useQuery({
    queryKey: ['posts', id],
    queryFn: () => postApi.getPost(id),
    enabled: !!id,
  })
}

// 获取用户的文章
export function useUserPosts(userId: number) {
  return useQuery({
    queryKey: ['posts', 'user', userId],
    queryFn: () => postApi.getUserPosts(userId),
    enabled: !!userId,
  })
}

// 获取文章评论
export function usePostComments(postId: number) {
  return useQuery({
    queryKey: ['comments', 'post', postId],
    queryFn: () => commentApi.getPostComments(postId),
    enabled: !!postId,
  })
}

// 创建文章
export function useCreatePost() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: postApi.createPost,
    onSuccess: (newPost) => {
      // 创建成功后，更新相关缓存
      queryClient.invalidateQueries({ queryKey: ['posts'] })
      queryClient.invalidateQueries({ queryKey: ['posts', 'user', newPost.userId] })
    },
  })
}

// 更新文章
export function useUpdatePost() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<Post> }) =>
      postApi.updatePost(id, data),
    onSuccess: (updatedPost) => {
      queryClient.setQueryData(['posts', updatedPost.id], updatedPost)
      queryClient.invalidateQueries({ queryKey: ['posts'] })
    },
  })
}

// 删除文章
export function useDeletePost() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: postApi.deletePost,
    onSuccess: (_, deletedId) => {
      queryClient.removeQueries({ queryKey: ['posts', deletedId] })
      queryClient.invalidateQueries({ queryKey: ['posts'] })
    },
  })
}
