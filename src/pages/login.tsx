import {auth,provider} from '../config/auth'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
export const Login = ()=>{
    const navigate = useNavigate()
    const signInWithGOogle = async()=>{
        const result = await signInWithPopup(auth,provider);
        console.log(result);
        navigate('/');
    }

    return(
        <div>
            <p>Sign In With Google To Continue</p>
            <button onClick={signInWithGOogle}>Sign In with Google</button>
        </div>
    )
}