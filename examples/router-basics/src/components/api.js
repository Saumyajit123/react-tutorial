import { useEffect, useState } from "react";

function Api(){

    const [usersData, setUsersData]  =useState([]);

    useEffect(()=>{
        getUsersData();
    }, [])

    async function getUsersData() {
        const url = "https://dummyjson.com/users";
        let response = await fetch(url);
        response = await response.json();
        //console.log(response);   
        setUsersData(response.users)     
    }
    console.log(usersData);

    return(
        <div>
            <h1>API fetch data</h1>
            <ul className="head">
                        <li>First Name</li>
                        <li>Last Name</li>
                        <li>Age</li>
            </ul>
            {
                usersData && usersData.map((user)=>(
                    <ul className="userList">
                        <li>{user.firstName}</li>
                        <li>{user.lastName}</li>
                        <li>{user.age}</li>
                    </ul>
                ))
            }
        </div>
    )
}

export default Api