import { Link } from "react-router-dom"

export function When() {
    return (
        <>
            <h1>When</h1>
            <Link to="/what"><button>Back</button></Link>
            <Link to="/where"><button>Next</button></Link>
        </>
    )
}