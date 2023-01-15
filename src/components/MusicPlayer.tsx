import { useDidUpdateEffect } from "../helper";

function MusicPlayer(props: { file: File }) {
  const url = window.URL.createObjectURL(props.file);

  useDidUpdateEffect(() => {
    return () => window.URL.revokeObjectURL(url);
  }, [url]);

  return (
    <div className="player">
      <audio controls src={url}></audio>;
    </div>
  );
}

export default MusicPlayer;
