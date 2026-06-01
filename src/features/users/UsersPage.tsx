import UsersForm from './users-form/UsersForm'
import UsersTable from './UsersTable'

export default function UsersPage() {
  return (
    <div className="page users-page">
      <UsersForm />
      <UsersTable />
    </div>
  )
}
