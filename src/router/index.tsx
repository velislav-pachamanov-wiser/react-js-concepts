/* eslint-disable react-refresh/only-export-components -- route table exports `router` + lazy route modules */
import { lazy, Suspense } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import AppShell from '../components/layout/AppShell'
import { Spinner } from '../components/ui/Spinner'

const PostsPage = lazy(() => import('../features/posts/PostsPage'))
const PostDetail = lazy(() => import('../features/posts/PostDetail'))
const TodosPage = lazy(() => import('../features/todos/TodosPage'))
const UsersPage = lazy(() => import('../features/users/UsersPage'))
const AnimationsPage = lazy(() => import('../features/animations/AnimationsPage'))
const FadeDemo = lazy(() => import('../features/animations/demos/FadeDemo'))
const ListDemo = lazy(() => import('../features/animations/demos/ListDemo'))
const PageTransitionDemo = lazy(() => import('../features/animations/demos/TransitionDemo'))

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
        element: <Navigate to="/posts" replace />,
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
        children: [
          { index: true, element: <Navigate to="fade" replace /> },
          {
            path: 'fade',
            element: (
              <Suspense fallback={<RouteFallback />}>
                <FadeDemo />
              </Suspense>
            ),
          },
          {
            path: 'list',
            element: (
              <Suspense fallback={<RouteFallback />}>
                <ListDemo />
              </Suspense>
            ),
          },
          {
            path: 'transition',
            element: (
              <Suspense fallback={<RouteFallback />}>
                <PageTransitionDemo />
              </Suspense>
            ),
          },
        ],
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
