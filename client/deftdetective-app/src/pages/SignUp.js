import Login from "../components/Login"
import Register from "../components/Register"

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