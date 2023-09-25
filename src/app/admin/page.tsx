import { AdminButton } from "@/components/AdminButton/AdminButton"

export default function Admin() {

  console.log('-- ADMIN PAGE - Server Component --')

  return (
    <div className="min-h-screen">
      Admin Page

      <AdminButton />
    </div>
  )
}