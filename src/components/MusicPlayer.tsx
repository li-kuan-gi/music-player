import { useEffect, useRef, useState } from "react";
import PlayPauseButton from "./PlayPauseButton";

type Props = {
  url: string;
};

function MusicPlayer(props: Props) {
  const {
    audioRef,
    isPlaying,
    hasPlayed,
    hasPaused,
    togglePlayPause,
    hasEnded,
  } = useMusic(props);

  return (
    <div className="player">
      <audio
        src={props.url}
        ref={audioRef}
        onPlay={hasPlayed}
        onPause={hasPaused}
        onEnded={hasEnded}
      />
      <PlayPauseButton
        isPlaying={isPlaying}
        togglePlayPause={togglePlayPause}
      />
    </div>
  );
}

function useMusic(props: Props) {
  const initPlaying = false;

  const [isPlaying, setPlaying] = useState(initPlaying);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // reset state when props change
  useEffect(() => {
    setPlaying(initPlaying);
    // eslint-disable-next-line
  }, [props]);

  // imperatively control the audio
  useEffect(() => {
    isPlaying ? audioRef.current?.play() : audioRef.current?.pause();
  }, [isPlaying]);

  function togglePlayPause() {
    setPlaying(!isPlaying);
  }

  function hasEnded() {
    setPlaying(false);
  }

  function hasPlayed() {
    setPlaying(true);
  }

  function hasPaused() {
    setPlaying(false);
  }

  return {
    audioRef,
    isPlaying,
    hasPlayed,
    hasPaused,
    togglePlayPause,
    hasEnded,
  };
}

export default MusicPlayer;
