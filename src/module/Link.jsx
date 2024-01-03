export function Link() {
    return(
        <>
            <h1>LINK</h1>
            <a href="#" onClick={window.open('https://jingoochoi.github.io/football/','',`width=300,height=${300*2},top=${window.innerHeight/2-300},left=${window.innerWidth/2-300/2}`)}>FOOTBALL SOCCER GAME</a>
            <a href="#" onClick={window.open('https://jingoochoi.github.io/gobase/','',`width=300,height=${300*2},top=${window.innerHeight/2-300},left=${window.innerWidth/2-300/2}`)}>GOBASE BASEBALL GAME</a>
            <a href="#" onClick={window.open('https://jingoochoi.github.io/tonypj2/','_blank')}>GAME INFORMATION WEB</a>
        </>
    )
}