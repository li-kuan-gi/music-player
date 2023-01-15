import { ChangeEvent, useState } from "react";
import MusicPlayer from "./MusicPlayer";

function MusicPannel() {
  const [path, setPath] = useState<string>("");
  return (
    <>
      <input
        type="file"
        onChange={(e: ChangeEvent) => {
          handleInputChange(e, path, setPath);
        }}
      />
      <div className="music-player">{path && <MusicPlayer path={path} />}</div>
    </>
  );
}

function handleInputChange(
  e: ChangeEvent,
  path: string,
  setPath: React.Dispatch<React.SetStateAction<string>>
) {
  window.URL.revokeObjectURL(path as string);
  const url = getUrlFromChange(e);
  setPath(url);
}

function getUrlFromChange(e: ChangeEvent): string {
  const target = e.target as HTMLInputElement;
  const file = (target.files as FileList)[0];
  return window.URL.createObjectURL(file);
}

export default MusicPannel;
