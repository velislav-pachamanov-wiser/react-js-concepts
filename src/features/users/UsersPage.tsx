import UsersTable from './UsersTable'

/**
 * TODO: Dispatch thunk on mount, loading/error UI (PROJECT_OUTLINE.md — Users).
 */
export default function UsersPage() {
  return (
    <div className="page users-page">
      <UsersTable />
    </div>
  )
}
