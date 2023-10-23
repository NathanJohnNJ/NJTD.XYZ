import './hex.css';

const Reset = () => {
    const resetClickMe = () =>{
        const r = document.getElementById('reset')
        r.innerHTML = 'CLICK ME!'
    }
    const resetReset = () =>{
        const r = document.getElementById('reset')
        r.innerHTML = 'RESET'
    }

    return (
        <div classNAme="hexWrapper">
            <div className="child" id="reset" onMouseOver={resetClickMe} onMouseOut={resetReset} onClick={() => {window.open('http://localhost:3000/portfolio', "_self")}}>RESET</div>
        </div>
    )
}

export default Reset;