import { useQuery } from '@tanstack/react-query'
import { Card } from '../../components/ui/Card'
import { fetchTodos } from './todoApi'
import styles from './TodoListStyle.module.scss'

/**
 * TODO: List todos, optimistic updates or refetch after mutation (PROJECT_OUTLINE.md).
 */
export default function TodoList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['todos'],
    queryFn: () => fetchTodos(),
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <Card title="Todos" bodyClassName={styles['todos-list']}>
      {data?.map((todo) => (
        <Card key={todo.id} title={todo.title}>
          {todo.body ? <p>{todo.body}</p> : null}
          <p>{todo.completed ? 'Completed' : 'Not Completed'}</p>
        </Card>
      ))}
    </Card>
  )
}


