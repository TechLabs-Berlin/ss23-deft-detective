import { Link } from "react-router-dom"

export function Preview() {
    return (
        <>
            <div className="container">
                <h1>Preview</h1>
                <Link to="/where"><button>Back</button></Link>
                <Link to="/signup"><button>Next</button></Link>
            </div>
        </>
    )
}