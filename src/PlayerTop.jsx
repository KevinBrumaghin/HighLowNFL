import PropTypes from 'prop-types';
import { useState } from "react"
import { motion, useAnimate } from "framer-motion";

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default function PlayerTop({players, setScore}){

    const randPlayer = players[Math.floor(Math.random() * players.length)+1];
    const [player, setPlayer] = useState(randPlayer.name);
    const [playertd, setPlayertd] = useState(randPlayer.touchdowns);
    const [scope, animate] = useAnimate();

    const newPlayer = () => {
        const otherPlayertd = document.querySelector('#pbot');
        const playertdnum = document.querySelector('#ptop');
        const topOver = document.querySelector('#topOverlay');
        const botOver = document.querySelector('#botOverlay');
        console.log(playertd);
        console.log(otherPlayertd.innerText);

        if(playertd >= otherPlayertd.innerText){
            animate([["#ptop", {y: 20}]])
            playertdnum.style.opacity = '1';
            topOver.style.backgroundColor = 'rgb(124,252,0)';
            topOver.disabled = true;
            botOver.onClick = null;

            sleep(2000).then(() => {
            animate([["#ptop", {y: -20}]])
            playertdnum.style.opacity = '0';
            topOver.style.backgroundColor = '';
            topOver.disabled = false;
            botOver.disabled = false;
            const randPlayerNew = players[Math.floor(Math.random() * players.length)+1];
            setPlayer(randPlayerNew.name)
            setPlayertd(randPlayerNew.touchdowns);
            setScore((prevScore) => prevScore + 1);
        })
        }
        else{
            animate([["#ptop", {y: 20}]])
            playertdnum.style.opacity = '1';
            topOver.style.backgroundColor = 'rgb(255,6,6)';
            topOver.disabled = true;
            botOver.disabled = true;

            sleep(2000).then(() => {
            animate([["#ptop", {y: -20}]])
            playertdnum.style.opacity = '0';
            topOver.style.backgroundColor = '';
            topOver.disabled = false;
            botOver.disabled = false;
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
        <player-top id="playertop" onClick={newPlayer}>
            <div ref={scope} className='nameandtd'>
            <div-one className="ptop">{player}</div-one>
            <motion.section className="ptop" id="ptop" style={{opacity: "0"}}>{playertd}</motion.section>
            </div>
        </player-top>
        </overlay-top>
    )
}

PlayerTop.propTypes = {
    players: PropTypes.array,
    setScore: PropTypes.func
}