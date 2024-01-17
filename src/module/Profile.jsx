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
            <div className="probx" style={{width:'100%',height:'130px',backgroundColor:'#ccc',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <img src='https://media.muckrack.com/profile/images/569056/james-jung.png.256x256_q100_crop-smart.png' style={{width:'100px',height:'100px',borderRadius:'50%'}}></img>
                <div className="name" style={{display:'flex',flexDirection:'column',height:'100px',justifyContent:'space-evenly'}}>
                    <span>hyundai0203</span>
                    <span>프로필 수정</span>
                </div>
            </div>
            <h2 style={{display:'block',textAlign:'left',cursor:'pointer',marginTop:'30px'}}>개인정보</h2>
            <h2 style={{display:'block',textAlign:'left',cursor:'pointer',marginTop:'30px'}}>고객센터</h2>
            <h2 style={{display:'block',textAlign:'left',cursor:'pointer',marginTop:'30px'}}>설정</h2>
            <h2 style={{display:'block',textAlign:'left',cursor:'pointer',marginTop:'30px'}}>회원탈퇴</h2>
            <h2 style={{display:'block',textAlign:'left',cursor:'pointer',marginTop:'30px'}}>로그아웃</h2>
            <h2 style={{display:'block',textAlign:'left',cursor:'pointer',marginTop:'30px'}}>임대인 모드</h2>
        </>
    )
}