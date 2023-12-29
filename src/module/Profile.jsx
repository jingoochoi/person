import { useState } from 'react'
import '../css/profile.css'
export function Profile() {
    const[name,setName]=useState(1)
    return(
        <>
            <h1>PROFILE</h1>
            {
                name===1&&<div className='bx'>
                <h2>이름: 최진구</h2>
                <div className="baka">🔁</div></div>
            }
            {
                name===0&&<div className='bx'>
                <h2>name: tony jingoo choi</h2>
                <div className="baka">🔁</div></div>
            }
        </>
    )
}