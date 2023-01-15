import { ChangeEvent, useState } from "react";
import MusicPlayer from "./MusicPlayer";

function MusicPannel() {
  const [file, setFile] = useState<File | null>(null);
  return (
    <>
      <input
        type="file"
        onChange={(e: ChangeEvent) => {
          handleInputChange(e, setFile);
        }}
      />
      {file && <MusicPlayer file={file} />}
    </>
  );
}

function handleInputChange(
  e: ChangeEvent,
  setFile: React.Dispatch<React.SetStateAction<File | null>>
) {
  const target = e.target as HTMLInputElement;
  const file = (target.files as FileList)[0];
  setFile(file);
}

export default MusicPannel;
