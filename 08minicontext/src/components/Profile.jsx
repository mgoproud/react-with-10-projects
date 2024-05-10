import { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {

    const {user} = useContext(UserContext)

    if(!user) return <h1>User Not Found</h1>

  return (
    <div>
        <h1>
        Profile: {user.username}
        </h1>
      
    </div>
  )
}

export default Profile
Profile: {}