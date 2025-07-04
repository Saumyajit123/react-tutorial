
import {Link, useNavigate} from 'react-router-dom'


function Home(){
    const navigate = useNavigate();

    return(
        <div>
            <h1>Home Page</h1>
            <p>This is 1st react web page</p>
            <Link to="/about">Go to About page</Link><br/>
            <button onClick={()=>navigate('/about')}>Go to About page</button><br/>
            <button onClick={()=>navigate('/contact')}>Go to Contact page</button>


        </div>
    )
}

export default Home ; 