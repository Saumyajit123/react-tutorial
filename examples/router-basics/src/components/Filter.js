import { useNavigate } from "react-router-dom";

function Filter(){

    const details = useNavigate();

    return(
        <div>
            <h1>Filter page</h1>
            <br/>
            <button onClick={()=>details('/')}>Go to Home page</button>
        </div>
    );
}

export default Filter; 