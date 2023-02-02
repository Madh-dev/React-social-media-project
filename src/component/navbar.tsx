
import { Link } from 'react-router-dom'
import { auth } from '../config/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth'


const Navbar = () => {
  
  const [user] = useAuthState(auth)


  const signUserOut = async () => {
    signOut(auth)
  }
  return (
    <div className="navbar">
      <div className="links">
        <Link to={'/'} style={{ marginRight: '20px' }}>Home</Link>
        {!user ? (
          <Link to={'/login'}>Login</Link>) : (
          <Link to={'/createpost'}>Create Post</Link>
        )
        }


      </div>
      <div className="user">
        {user && (
          <>
            <p>{user?.displayName}</p>
            <img src={user?.photoURL || ""} width='20' height='20' alt='' />
            <button onClick={signUserOut}> Log Out</button>
          </>
        )

        }

      </div>
    </div>
  )
}

export default Navbar