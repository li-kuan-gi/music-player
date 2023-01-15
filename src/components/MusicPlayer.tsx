function MusicPlayer(props: { path: string }) {
  return <audio controls src={props.path}></audio>;
}

export default MusicPlayer;
