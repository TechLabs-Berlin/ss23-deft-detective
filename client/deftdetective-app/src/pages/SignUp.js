import { Link } from "react-router-dom"

export function SignUp() {
    return (
        <>
            <nav>
                <Link to="/preview"><button>Back</button></Link>
            </nav>
            <h1>Sign Up</h1>
            <Link to="/submitmessage"><button>Sign Up</button></Link>

            <h1>Sign In</h1>
            <Link to="/submitmessage"><button>Sign In</button></Link>
        </>
    )
}