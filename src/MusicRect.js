
import './MusicRect.css'



const MusicRect
 = ({song, image}) => {
    
  return (
    <div>
             <div class="music_rect">
                        <div class="music_rect_left">
                        <img src={image} alt="" />
                            <p>{song}</p>
                         </div>
                            <div class="play_circle2">
                            <span class="material-symbols-outlined">
play_arrow
</span>
                        </div>
                    </div>

    </div>
  )
}

export default MusicRect
