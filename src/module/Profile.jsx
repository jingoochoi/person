import { useState } from 'react'
import '../css/profile.css'
export function Profile() {
    const[name,setName]=useState(1)
    const mola=(a)=>{
        setName(a)
    }
    const dt=new Date()
    const year=dt.getFullYear()
    const mons=dt.getMonth()+1
    const days=dt.getDate()
    return(
        <>
            <h1>PROFILE</h1>
            {
                name===1&&<div className='bx'>
                <h2>이름: 최진구</h2>
                <div className="baka" onClick={()=>mola(0)}>🔁</div></div>
            }
            {
                name===0&&<div className='bx'>
                <h2>name: tony jingoo choi</h2>
                <div className="baka" onClick={()=>mola(1)}>🔁</div></div>
            }
            <h2 style={{display:'block',textAlign:'center',marginTop:'100px'}}>TODAY IS {year}.{mons<10?'0'+mons:mons}.{days<10?'0'+days:days}</h2>
            <h2 style={{display:'block',textAlign:'center',marginTop:'100px'}}>MY BIRTHDAY IS 02.06</h2>
            <h2 style={{display:'block',textAlign:'center',marginTop:'100px'}}>MY AGE IS {mons>2||mons===2&&days>=6?year-1991:year-1991-1}(international age)</h2>
            <h2 style={{display:'block',textAlign:'center',marginTop:'100px'}}>MY SKILLS: marketing, accounting and web front-end(with react)</h2>
        </>
    )
}