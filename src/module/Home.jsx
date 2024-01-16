import { useState } from "react"
import { List } from "./List"
import { Map } from "./Map"

export function Home() {
    const [list,setList]=useState(true)
    const lmap=(a)=>{
        setList(a)
    }    
    return(
        <>
            <input type="text" style={{width:'500px',border:'1px solid black',borderRadius:'21px'}}/>
            <span style={{position:'absolute',left:'20px',top:'2vh'}}>🚩</span>
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