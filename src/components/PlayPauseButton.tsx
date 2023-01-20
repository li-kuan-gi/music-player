function PlayPauseButton(props: {
  isPlaying: boolean;
  togglePlayPause: () => void;
}) {
  const iconText = props.isPlaying ? "\u23F8\uFE0F" : "\u25B6\uFE0F";

  function handleClick() {
    props.togglePlayPause();
  }

  return <input type="button" value={iconText} onClick={handleClick} />;
}

export default PlayPauseButton;
