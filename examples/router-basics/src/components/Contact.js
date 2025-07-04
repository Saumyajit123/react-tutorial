import { Link, Outlet, useNavigate } from "react-router-dom";


function Contact(){

    const home = useNavigate();

    return(
        <div>
            <h1>Contact details</h1>
            <Link to='company'>Comapny</Link>
            <br/>
            <Link to='channel'>Channel</Link>
            <Outlet />
            <br/>
            <button onClick={()=>home('/')}>Go to Home page</button>
        </div>
    );
}

export default Contact;