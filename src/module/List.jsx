import '../css/list.css'
export function List() {
    return(
        <>
            <div className="last">
                <li style={{display:'flex',marginTop:'10px'}}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVzSuPAU2pa7p72hcV4oHuK4eqH_UcDwYFw&usqp=CAU" alt="" style={{width:'50%'}}/>
                    <p>1인용 오피스<br />서울시 강남구 역삼동<br />6,000원<br />총 120,000원</p>
                </li>
                <li style={{display:'flex',marginTop:'10px'}}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVzSuPAU2pa7p72hcV4oHuK4eqH_UcDwYFw&usqp=CAU" alt="" style={{width:'50%'}}/>
                    <p>1인용 오피스<br />서울시 서초구 양재동<br />5,000원<br />총 100,000원</p>
                </li>
            </div>
        </>
    )
}