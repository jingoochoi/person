import $ from 'jquery'
export function Login() {
    const butn=()=>{
        $('.logs').hide()
    }
    return(
        <>
            <div className="logs" style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly',alignItems:'center',width:'100%',height:'100vh',position:'absolute',zIndex:333,backgroundColor:'white'}}>
                <h1>나만의 업무공간,<br />NOOKUP</h1>
                <b style={{cursor:'pointer',outline:'1px solid black'}} onClick={butn}>소셜 로그인</b>
            </div>
        </>
    )
}