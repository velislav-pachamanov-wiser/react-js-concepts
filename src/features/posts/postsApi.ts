import type { Post } from '../../types'
import { API_URL } from '@consts/consts'

/**
 * TODO: Implement JSONPlaceholder fetch helpers (GET /posts, GET /posts/:id, mutations).
 * Use these functions from TanStack Query hooks (see PROJECT_OUTLINE.md — Posts module).
 */

export async function fetchPosts(): Promise<Post[]> {
  const response = await fetch(`${API_URL}/posts`);
  return response.json();
}

export async function fetchPostById(_id: string | number): Promise<Post> {
  if (!_id) throw new Error('Post ID is required')
  const response = await fetch(`${API_URL}/posts/${_id}`);
  return response.json();
}
