import '../css/link.css'
export function Link() {
    const foot=()=>{window.open('https://jingoochoi.github.io/football/','',`width=300,height=${300*2},top=${window.innerHeight/2-300},left=${window.innerWidth/2-300/2}`)}
    const base=()=>{window.open('https://jingoochoi.github.io/gobase/','',`width=300,height=${300*2},top=${window.innerHeight/2-300},left=${window.innerWidth/2-300/2}`)}
    const game=()=>{window.open('https://jingoochoi.github.io/tonypj2/','_blank')}
    return(
        <>
            <h1>LINK</h1>
            <div className="link">
                <a href="#" onClick={foot}>FOOTBALL SOCCER GAME</a>
                <a href="#" onClick={base}>GOBASE BASEBALL GAME</a>
                <a href="#" onClick={game}>GAME INFORMATION WEB</a>
            </div>
        </>
    )
}