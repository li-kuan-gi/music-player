function MusicPlayer(props: { url: string }) {
  return (
    <div className="player">
      <audio src={props.url}></audio>
    </div>
  );
}

export default MusicPlayer;
