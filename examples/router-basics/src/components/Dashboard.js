import { useState, useEffect} from "react";

function Dashboard(){

    const [data, setData]  = useState([]);

     useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts").then((result)=>{
            result.json().then((resp)=>{
                
               setData(resp); 
            })
        })
    }, [])

    console.log(data);

    return(
        <div>
            <h1>Dashboard</h1>
            {
                data.map((item)=>
                    <ul>
                        {/* <li>{item.userId}</li> */}
                        <li>{item.id}</li>
                        <li>{item.title}</li>
                        <li>{item.body}</li>

                    </ul>
                )
            }
        </div>
    )
}

export default Dashboard;