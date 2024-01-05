import { useContext, useState } from 'react'
import '../css/header.css'
import { ctxt } from '../module/context'
import { GoogleLogin, GoogleOAuthProvider, googleLogout } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
export function Header() {
    const tt=useContext(ctxt)
    const[logg,setLogg]=useState(false)
    
    return(
        <div className='head'>
            <h3 onClick={()=>tt.chan('pro')}>PROFILE</h3>
            <h3 onClick={()=>tt.chan('link')}>LINK</h3>
            <h3 onClick={()=>tt.chan('map')}>MAP</h3>
            <h3 onClick={()=>tt.chan('geo')}>GEOCODE</h3>
            {
                !logg&&<>
            <h3>LOGIN</h3>
            </>
            }
            <GoogleOAuthProvider clientId='471246988772-6ssmcn8qdcasdo1v8kcon3iqg167a3po.apps.googleusercontent.com'>
                {({ signIn, signOut, isSignedIn }) => (
                  <>
                    {isSignedIn ? (
                      <googleLogout
                        clientId='471246988772-6ssmcn8qdcasdo1v8kcon3iqg167a3po.apps.           googleusercontent.com'
                        buttonText="Logout"
                        onLogoutSuccess={() => {
                          signOut();
                          // 필요한 경우 추가적인 로그아웃 동작 수행
                          setLogg(false)
                        }}
                      />
                    ) : (
                      <GoogleLogin
                        clientId='471246988772-6ssmcn8qdcasdo1v8kcon3iqg167a3po.apps.           googleusercontent.com'
                        onSuccess={(cr) => {
                          let dato = jwtDecode(cr.credential);
                          // 필요한 경우 추가적인 로그인 동작 수행
                          signIn()
                          setLogg(true)
                        }}
                        onError={() => {
                          console.log('error');
                        }}
                      />
                    )}
                  </>
                )}
</GoogleOAuthProvider>
        </div>
    )
}