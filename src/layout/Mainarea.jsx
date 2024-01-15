import { useContext } from "react"
import { ctxt } from "../module/context"
import { Profile } from "../module/Profile"
import { Link } from "../module/Link"
import { Map } from "../module/Map"
import { Geocode } from "../module/Geocode"
import { List } from "../module/List"

export function Mainarea() {
    const tt=useContext(ctxt)
    return(
        <>
            {tt.mode==='pro'?<Profile></Profile>:tt.mode==='link'?<List></List>:tt.mode==='map'?<Map></Map>:tt.mode==='geo'?<Geocode></Geocode>:''}
        </>
    )
}