import { useEffect } from 'react'
import { Card } from '../../components/ui/Card'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { fetchUsers } from './usersApi'
import { usersSelectors } from './usersSlice'

/**
 * Reads users from the Redux store (entity adapter cache).
 * Fetches once while status is idle; revisiting the route reuses stored data.
 */
export default function UsersTable() {
  const dispatch = useAppDispatch()
  const status = useAppSelector((state) => state.users.status)
  const error = useAppSelector((state) => state.users.error)
  const users = useAppSelector((state) => usersSelectors.selectAll(state.users))

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers())
    }
  }, [dispatch, status])

  if (status === 'loading' || status === 'idle') {
    return <div>Loading users…</div>
  }

  if (status === 'failed') {
    return <div role="alert">Error: {error}</div>
  }

  return (
    <Card title="Users">
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> ({user.username}) — {user.email}
          </li>
        ))}
      </ul>
    </Card>
  )
}
