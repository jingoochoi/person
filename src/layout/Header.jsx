import { useContext, useEffect, useLayoutEffect, useState } from 'react'
import '../css/header.css'
import { ctxt } from '../module/context'
import { GoogleLogin, GoogleOAuthProvider, googleLogout } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
import $ from 'jquery'
export function Header() {
    const tt=useContext(ctxt)
    const[logg,setLogg]=useState(false)
    function cess(googleUser) {
        var profile = googleUser.getBasicProfile();
        console.log(profile)
        // profile.getId()
        // profile.getName()
        // profile.getImageUrl()
        // profile.getEmail()
        setLogg(true)
    }
    function signOut() {
        window.gapi.load('auth2', () => {
            window.gapi.auth2.init({
              client_id: '471246988772-6ssmcn8qdcasdo1v8kcon3iqg167a3po.apps.googleusercontent.com',
            });
          });
    }
    useEffect(()=>{
        $('.head h3').eq(0).css({opacity:1})
    },[])
    useEffect((e)=>{
        $('.head h3').on('click',function () {
            $(this).css({opacity:1}).siblings().css({opacity:.3})
        })
    })
    return(
        <>
            <div className='head'>
                <h3 onClick={()=>tt.chan('map')}>🏠<br />홈</h3>
                <h3 onClick={()=>tt.chan('link')}>🔖<br />위시</h3>
                <h3 onClick={()=>tt.chan('geo')}>GEOCODE</h3>
                <h3 onClick={()=>tt.chan('link')}>📜<br />예약</h3>
                <h3 onClick={()=>tt.chan('pro')}>🙎‍♂️<br />내 정보</h3>
                {/* {
                    !logg&&<>
                < className="g-signin2" data-onsuccess={onSignIn}>LOGIN</ h3>
                </>
                }
                {
                    logg&&
                    <h3 onClick={signOut}>LOGOUT</h3>
                } */}
                {/* <GoogleOAuthProvider    clientId='471246988772-6ssmcn8qdcasdo1v8kcon3iqg167a3po.   apps.googleusercontent.com'>
                    <GoogleLogin onSuccess={(cr)=>{
                        // console.log(cr)
                        let dato=jwtDecode(cr.credential)
                        // console.log(dato)
                        // console.log(dato.alg,dato.kid,dato.typ)
                        setLogg(true)
                    }} onError={()=>{
                        console.log('error')
                    }}></GoogleLogin>
                </GoogleOAuthProvider> */}
            </div>
        </>
    )
}