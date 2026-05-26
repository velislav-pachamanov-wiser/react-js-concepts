import TodoForm from './TodoForm'
import TodoList from './TodoList'

/**
 * TODO: Compose TodoForm + TodoList; page-level data strategy (PROJECT_OUTLINE.md).
 */
export default function TodosPage() {
  return (
    <div className="page todos-page">
      <TodoForm />
      <TodoList />
    </div>
  )
}
