import { useContext, useState } from 'react'
import '../css/header.css'
import { ctxt } from '../module/context'
import { GoogleLogin, GoogleOAuthProvider, googleLogout } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
export function Header() {
    const tt=useContext(ctxt)
    const[logg,setLogg]=useState(false)
    function onSignIn(googleUser) {
        var profile = googleUser.getBasicProfile();
        console.log(profile)
    }
    return(
        <div className='head'>
            <h3 onClick={()=>tt.chan('pro')}>PROFILE</h3>
            <h3 onClick={()=>tt.chan('link')}>LINK</h3>
            <h3 onClick={()=>tt.chan('map')}>MAP</h3>
            <h3 onClick={()=>tt.chan('geo')}>GEOCODE</h3>
            {
                !logg&&<>
            <h3 className="g-signin2" data-onsuccess={onSignIn}>LOGIN</h3>
            </>
            }
            <GoogleOAuthProvider clientId='471246988772-6ssmcn8qdcasdo1v8kcon3iqg167a3po.apps.googleusercontent.com'>
                <GoogleLogin onSuccess={(cr)=>{
                    // console.log(cr)
                    let dato=jwtDecode(cr.credential)
                    // console.log(dato)
                    // console.log(dato.alg,dato.kid,dato.typ)
                    setLogg(true)
                }} onError={()=>{
                    console.log('error')
                }}></GoogleLogin>
            </GoogleOAuthProvider>
        </div>
    )
}