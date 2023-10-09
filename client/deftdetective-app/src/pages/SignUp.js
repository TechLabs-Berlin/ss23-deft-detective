import Login from "../components/Login"
import Register from "../components/Register"
import './style.css';

export function SignUp() {
    return (
        <>
            <div className="container">
                <Register />
                <Login />
            </div>
        </>
    )
}

export default SignUp