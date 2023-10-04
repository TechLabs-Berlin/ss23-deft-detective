import { Link } from "react-router-dom"

export function Where() {
    return (
        <>
            <h1>Where</h1>
            <Link to="/when"><button>Back</button></Link>
            <Link to="/preview"><button>Next</button></Link>
        </>
    )
}