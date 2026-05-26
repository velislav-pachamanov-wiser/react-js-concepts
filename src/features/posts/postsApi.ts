import type { Post } from '../../types'

/**
 * TODO: Implement JSONPlaceholder fetch helpers (GET /posts, GET /posts/:id, mutations).
 * Use these functions from TanStack Query hooks (see PROJECT_OUTLINE.md — Posts module).
 */

export async function fetchPosts(): Promise<Post[]> {
  return []
}

export async function fetchPostById(_id: string | number): Promise<Post> {
  void _id
  throw new Error('TODO: implement fetchPostById')
}
