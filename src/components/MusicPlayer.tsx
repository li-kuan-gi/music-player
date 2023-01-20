import { useEffect, useRef, useState } from "react";
import PlayPauseButton from "./PlayPauseButton";

type Props = {
  url: string;
};

function MusicPlayer(props: Props) {
  const { audioRef, isPlaying, togglePlayPause, handleEnded } = useMusic(props);
  return (
    <div className="player">
      <audio src={props.url} ref={audioRef} onEnded={handleEnded} />
      <PlayPauseButton
        isPlaying={isPlaying}
        togglePlayPause={togglePlayPause}
      />
    </div>
  );
}

function useMusic(props: Props) {
  const initPlaying = false;

  const [isPlaying, setIsPlaying] = useState(initPlaying);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // reset state when props change
  useEffect(() => {
    setIsPlaying(initPlaying);
  }, [props]);

  // imperatively control the audio
  useEffect(() => {
    isPlaying ? audioRef.current?.play() : audioRef.current?.pause();
  }, [isPlaying]);

  function togglePlayPause() {
    setIsPlaying(!isPlaying);
  }

  function handleEnded() {
    setIsPlaying(false);
  }

  return { audioRef, isPlaying, togglePlayPause, handleEnded };
}

export default MusicPlayer;
