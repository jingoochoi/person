import { useContext } from "react"
import { ctxt } from "../module/context"
import { Profile } from "../module/Profile"
import { Link } from "../module/Link"
import { Map } from "../module/Map"

export function Mainarea() {
    const tt=useContext(ctxt)
    return(
        <>
            {tt.mode==='pro'?<Profile></Profile>:tt.mode==='link'?<Link></Link>:tt.mode==='map'?<Map></Map>:''}
        </>
    )
}