import { createSlice } from '@reduxjs/toolkit'
import type { User } from '../../types'

export type UsersState = {
  items: User[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

const initialState: UsersState = {
  items: [],
  status: 'idle',
  error: null,
}

/**
 * TODO: Add createAsyncThunk, reducers, and selectors (PROJECT_OUTLINE.md — Users module).
 */
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
})

export default usersSlice.reducer
