import { useEffect, useState, useContext } from "react";
import {AuthContext } from "../AuthContext";

function Profile(){
    const {user} = useContext(AuthContext);


    return(
        <div className="profile">

            <h1>Name:</h1>

        </div>

    )
    
}



export default Profile