import Link from "next/link"
import { redirect } from "next/navigation"

const Homepage = () => {
  redirect('/dashboard');
  return (
    <div className="text-red-800">
      <Link href='/dashboard'>Go to dashboard</Link>
    </div>

  )
}

export default Homepage

