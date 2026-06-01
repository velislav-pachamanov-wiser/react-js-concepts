import type { Post } from '../../types'
import { API_URL } from '@consts/consts'

export async function fetchPosts(): Promise<Post[]> {
  const response = await fetch(`${API_URL}/posts`);
  return response.json();
}

export async function fetchPostById(_id: string | number): Promise<Post> {
  if (!_id) throw new Error('Post ID is required')
  const response = await fetch(`${API_URL}/posts/${_id}`);
  return response.json();
}
