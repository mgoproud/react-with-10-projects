import { useParams } from "react-router-dom"

const User = () => {

    const { userid } = useParams()

  return (
    <div>
        <h1 className='text-4xl bg-pink-500 text-white text-center py-3'>User {userid}</h1>

    </div>
  )
}

export default User
