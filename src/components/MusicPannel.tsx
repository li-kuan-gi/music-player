import { useState } from "react";
import MusicInput from "./MusicInput";
import MusicPlayer from "./MusicPlayer";

function MusicPannel() {
  const [url, setURL] = useState<string | null>(null);
  return (
    <>
      <MusicInput handleChangeMusicURL={setURL} />
      {url && <MusicPlayer url={url} />}
    </>
  );
}

export default MusicPannel;
