import PropTypes from 'prop-types';
import { useState } from "react"

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default function PlayerTop({players, setScore}){

    const randPlayer = players[Math.floor(Math.random() * players.length)+1];
    const [player, setPlayer] = useState(randPlayer.name);
    const [playertd, setPlayertd] = useState(randPlayer.touchdowns);

    const newPlayer = () => {
        const otherPlayertd = document.querySelector('#pbot');
        const playertdnum = document.querySelector('#ptop');
        const topOver = document.querySelector('#topOverlay');
        console.log(playertd);
        console.log(otherPlayertd.innerText);

        if(playertd >= otherPlayertd.innerText){
            playertdnum.style.opacity = '1';
            topOver.style.backgroundColor = 'rgb(124,252,0)';

            sleep(2000).then(() => {
            playertdnum.style.opacity = '0';
            topOver.style.backgroundColor = '';
            const randPlayerNew = players[Math.floor(Math.random() * players.length)+1];
            setPlayer(randPlayerNew.name)
            setPlayertd(randPlayerNew.touchdowns);
            setScore((prevScore) => prevScore + 1);
        })
        }
        else{
            playertdnum.style.opacity = '1';
            topOver.style.backgroundColor = 'rgb(255,6,6)';

            sleep(2000).then(() => {
            playertdnum.style.opacity = '0';
            topOver.style.backgroundColor = '';
            const randPlayerNew = players[Math.floor(Math.random() * players.length)+1];
            setPlayer(randPlayerNew.name)
            setPlayertd(randPlayerNew.touchdowns);
            setScore(0);
            console.log("Top Player has less TD's")
            })
        }
    }

    return(
        <overlay-top id="topOverlay" style={{backgroundColor: "rgba(124,252,0,0)"}}>
        <player-top onClick={newPlayer}>
            <div className='nameandtd'>
            <div-one className="ptop">{player}</div-one>
            <div-one className="ptop" id="ptop" style={{opacity: "0"}}>{playertd}</div-one>
            </div>
        </player-top>
        </overlay-top>
    )
}

PlayerTop.propTypes = {
    players: PropTypes.array,
    setScore: PropTypes.func
}