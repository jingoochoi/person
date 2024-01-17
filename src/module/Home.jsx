import { useState } from "react"
import { List } from "./List"
import { Map } from "./Map"
import '../css/home.css'
export function Home() {
    const [list,setList]=useState(true)
    const lmap=(a)=>{
        setList(a)
    }    
    return(
        <>
            <input type="text" style={{width:'500px',border:'1px solid black',borderRadius:'21px'}} placeholder="🚩 위치를 검색해주세요"/>
            {
              list&&<>
            <br /><b style={{cursor:'pointer'}} onClick={()=>lmap(false)}>지도로 보기</b>
            <List></List></>
            }
            {
              !list&&<>
              <br /><b style={{cursor:'pointer'}} onClick={()=>lmap(true)}>리스트 보기</b>
                <Map></Map></>
            }
        </>
    )
}