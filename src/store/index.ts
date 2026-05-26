import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../features/users/usersSlice'

/**
 * TODO: Add middleware, listeners, or RTK Query api slice as you progress (PROJECT_OUTLINE.md).
 */
export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
