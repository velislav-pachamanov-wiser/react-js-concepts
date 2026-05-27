/**
 * TODO: Align fields with JSONPlaceholder responses as you implement each feature.
 * @see PROJECT_OUTLINE.md
 */

export type Post = {
  userId: number
  id: number
  title: string
  body: string
}

export type Todo = {
  userId: number
  id: number
  title: string
  body?: string
  completed: boolean
}

export type User = {
  id: number
  name: string
  username: string
  email: string
}
