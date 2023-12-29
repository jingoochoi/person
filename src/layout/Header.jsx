import { useContext } from 'react'
import '../css/header.css'
import { ctxt } from '../module/context'
export function Header() {
    const tt=useContext(ctxt)
    return(
        <div className='head'>
            <h3 onClick={()=>tt.chan('pro')}>PROFILE</h3>
            <h3 onClick={()=>tt.chan('link')}>LINK</h3>
            <h3 onClick={()=>tt.chan('map')}>MAP</h3>
        </div>
    )
}