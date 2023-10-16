import Login from "../components/Login"
import Register from "../components/Register"
import './style.css';

export function SignUp() {
    return (
        <>
            <div className="containerHome">
                <Register />
                <Login />
                <Link to="/submitmessage"><button className="noneyet" type="submit">See last page</button></Link>
            </div>
        </>
    )
}

export default SignUp