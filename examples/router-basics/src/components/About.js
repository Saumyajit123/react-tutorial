import {Link} from 'react-router-dom'


function About(){
    return(
        <div>
            <h1>About Page</h1>
            <p>This is basic react router tutorial</p>
            <Link to="/">Go to Home page</Link>
            <br/>
            <Link to = '/user/saumyajit'>Saumyajit</Link>
            <br/>
            <Link to = '/user/swarnendu'>Swarnendu</Link>
        </div>
    )
}

export default About ; 