import './style.css';

export function SubmitMessage() {
    return (
        <>
            <div className="container">
                <h1>Submitted!</h1>
                <h2>We have send an Email to all the location you selected.
                    <p>The one that has your lost item will reply you soon!</p>
                </h2>
            </div>
        </>
    )
}

export default SubmitMessage