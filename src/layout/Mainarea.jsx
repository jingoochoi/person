import { useContext } from "react"
import { ctxt } from "../module/context"
import { Profile } from "../module/Profile"
import { Link } from "../module/Link"
import { Map } from "../module/Map"
import { Geocode } from "../module/Geocode"
import { List } from "../module/List"
import { Home } from "../module/Home"

export function Mainarea() {
    const tt=useContext(ctxt)
    return(
        <>
            {tt.mode==='pro'?<Profile></Profile>:tt.mode==='link'?<List></List>:tt.mode==='map'?<Home></Home>:tt.mode==='geo'?<Geocode></Geocode>:''}
        </>
    )
}