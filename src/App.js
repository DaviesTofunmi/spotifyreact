
import './App.css';
import MusicRect from './MusicRect';
import './MusicRect.css'

import PlayyCards from './PlayyCards';
import './PlayyCards.css'
import { useRef, useEffect, useState } from 'react';
import axios from 'axios';




function App() {
  // const bodyy= {
  //   backgroundColor: "black",
  //   height: "100vh",
  //   width: '100%'
  // };
  const myUseRef= useRef([])
  console.log(myUseRef.current);
  const [myData, setmyData] = useState([])
  useEffect(() => {
    axios.get("https://robo-music-api.onrender.com/music/my-api").then((res)=>{
      console.log(res.data)
      setmyData(res.data)

    })
    
  }, [])
  const playmusic = (i) =>{
     const music = myUseRef.current[i]
     console.log(music);
     if (music.paused) {
      music.play()
     }else{
      music.pause()
     }
  }
  
  

  return (
    <>
      <div className='bodyy' >

        <div className='left'>
          <div className="leftTop">
           

          </div>
          <div className="leftBottom">

          </div>


        </div>
        <div className="right">
          <div className="right_nav">
            <div class="ios_arrows">
              <div class="arrows">
                <span id="arrow_left" class="material-symbols-outlined">
                  arrow_back_ios
                </span>
              </div>
              <div class="arrows">
                <span id="arrow_left" class="material-symbols-outlined">
                  arrow_forward_ios
                </span>
              </div>
            </div>

          </div>
          <div className="right_content">
    
           <h1 >
              Good Afternoon
            </h1>
         
           <div className="recentMusic">
           <MusicRect song='Timeless' image={require('.//images/Davido.png')} />
            <MusicRect song='Tems' image={require('.//images/Boj.png')} />
            <MusicRect song='Sza' />
            <MusicRect song='Olamide' />
            <MusicRect song='Bnxn' />
            <MusicRect song='Wizkid' />
           </div>
           <div className='rows'> 
           <div class="content_header">
                        <h2>Your top mixes</h2>
                        <p><b>Show all</b></p>
                    </div>
           <div className='playlists'>
            <PlayyCards image={require('.//images/daily1.png')} mix='Daily Mix 1' artists= 'Blaqbonez, Wizkid, Teni and more'/>
            <PlayyCards image={require('.//images/daily2.png')} mix='Daily Mix 2' artists= 'Sza, Lojay, Jaleel and more'/>
            <PlayyCards image={require('.//images/daily3.png')} mix='Daily Mix 3' artists= 'Skepta, Gabzy, Chip and more'/>
            <PlayyCards image={require('.//images/daily4.png')} mix='Daily Mix 4' artists= 'Bnxn, Taves, Ruger and more'/>
            <PlayyCards image={require('.//images/Olamide.png')} mix='Daily Mix 5' artists= 'Asa, Tuface, Olamide and more'/>

           </div>

           </div>
           <div style={{display: 'flex'}}>
            {myData.map((element, index)=>(
              <div key={index}>
              <audio ref={(el)=> myUseRef.current[index] = el} src={element.songUrl} ></audio>
              <PlayyCards image={element.songImage} mix={element.songTitle} playmusic={()=> playmusic(index)}/>
              
           
              </div>
            ))}
             
           </div>



         

          </div>

        </div>


      </div>
    </>
  );
}

export default App;
