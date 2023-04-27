import Input from "../components/input"; 
import React from 'react'
import Confirmation from "../components/confirmations"; 

function Page(){

    const getData = (data) =>{
        console.log(data)

    }
    return(
        <div>
        <h1>Step by step</h1>
        <Input onSubmit={getData} />
        </div>
    )
}

export default Page