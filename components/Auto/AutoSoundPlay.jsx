import ReactAudioPlayer from 'react-audio-player';
import song from '../../assets/song/fun-life-112188.mp3';
export const AutoSoundPlay = () => {
    return (
        <>
        <div hidden={true}>
            <ReactAudioPlayer
                src={song}
                autoPlay="true"
                loop="true"
                controls="true" 
                preload="false"
            />
        </div>
        </>
    )
}
