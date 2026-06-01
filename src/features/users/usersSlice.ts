import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import type { User } from '../../types'
import { createUser, fetchUsers } from './usersApi'

const usersAdapter = createEntityAdapter<User>({
  sortComparer: (a, b) => a.name.localeCompare(b.name),
})

export type UsersState = ReturnType<typeof usersAdapter.getInitialState> & {
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

const initialState: UsersState = usersAdapter.getInitialState({
  status: 'idle',
  error: null,
})

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded'
        usersAdapter.setAll(state, action.payload)
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? 'Failed to fetch users'
      })
      .addCase(createUser.fulfilled, (state, action) => {
        usersAdapter.addOne(state, action.payload)
      })
  },
})

export const usersSelectors = usersAdapter.getSelectors()

export default usersSlice.reducer
