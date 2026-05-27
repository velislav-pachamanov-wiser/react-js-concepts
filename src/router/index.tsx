/* eslint-disable react-refresh/only-export-components -- route table exports `router` + lazy route modules */
import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import AppShell from '../components/layout/AppShell'
import { Spinner } from '../components/ui/Spinner'

const DashboardPage = lazy(() => import('../features/dashboard/DashboardPage'))
const PostsPage = lazy(() => import('../features/posts/PostsPage'))
const PostDetail = lazy(() => import('../features/posts/PostDetail'))
const TodosPage = lazy(() => import('../features/todos/TodosPage'))
const UsersPage = lazy(() => import('../features/users/UsersPage'))
const AnimationsPage = lazy(() => import('../features/animations/AnimationsPage'))

function RouteFallback() {
  return <Spinner />
}

/**
 * TODO: Error boundaries, nested post layout, breadcrumbs (PROJECT_OUTLINE.md — Routing).
 */
export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<RouteFallback />}>
            <DashboardPage />
          </Suspense>
        ),
      },
      {
        path: 'posts',
        element: (
          <Suspense fallback={<RouteFallback />}>
            <PostsPage />
          </Suspense>
        ),
      },
      {
        path: 'posts/:postId',
        element: (
          <Suspense fallback={<RouteFallback />}>
            <PostDetail />
          </Suspense>
        ),
      },
      {
        path: 'todos',
        element: (
          <Suspense fallback={<RouteFallback />}>
            <TodosPage />
          </Suspense>
        ),
      },
      {
        path: 'users',
        element: (
          <Suspense fallback={<RouteFallback />}>
            <UsersPage />
          </Suspense>
        ),
      },
      {
        path: 'animations',
        element: (
          <Suspense fallback={<RouteFallback />}>
            <AnimationsPage />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: (
          <div className="page not-found">
            <p>404 — Not Found.</p>
          </div>
        ),
      },
    ],
  },
])
