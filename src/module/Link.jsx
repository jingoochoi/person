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
                <h3>모바일 전용 화면으로 보시면 됩니다. 버튼 클릭 후 결과창이 뜨며 일정시간(3초) 이후에 다시 버튼 화면으로 전환됩니다.</h3>
                <a href="#" onClick={base}>GOBASE BASEBALL GAME</a>
                <h3>모바일 전용 화면으로 보시면 됩니다. 버튼 클릭 후 결과창이 뜨며 일정시간(2초) 이후에 다시 버튼 화면으로 전환됩니다.</h3>
                <a href="#" onClick={game}>GAME INFORMATION WEB</a>
            </div>
        </>
    )
}