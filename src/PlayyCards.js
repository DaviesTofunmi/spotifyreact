import React from 'react'
import './PlayyCards'
import playmusic from './App'



const PlayyCards
    = ({mix, playmusic ,index, image, artists}) => {
        return (
            <div>
                <div className="playlist_cards">
                    <img src={image} alt="" />
                    <div id='play' className="play_btn"  onClick={()=>playmusic(index)}>
                    <span class="material-symbols-outlined">
play_arrow
</span>
                    </div>

                    <p>{mix}</p>
                    <span>{artists}</span>
                </div>

            </div>
        )
    }
    

export default PlayyCards
