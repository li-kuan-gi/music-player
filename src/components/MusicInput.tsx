import { ChangeEvent, useState } from "react";

function MusicInput(props: { handleChangeMusic: (url: string) => void }) {
  const handleChangeMusic = useChangeMusic(props.handleChangeMusic);

  return <input type="file" onChange={handleChangeMusic} />;
}

function useChangeMusic(handleChangeMusicURL: (url: string) => void) {
  const [previousURL, setPreviousURL] = useState<string | null>(null);

  const handleChangeMusic = (e: ChangeEvent) => {
    const url = getInputFileURL(e);
    if (url) {
      if (previousURL) {
        window.URL.revokeObjectURL(previousURL);
      }
      setPreviousURL(url);
      handleChangeMusicURL(url);
    }
  };

  return handleChangeMusic;
}

function getInputFileURL(e: ChangeEvent): string | undefined {
  const fileInputElement = e.target as HTMLInputElement;
  const files = fileInputElement.files as FileList;
  if (files.length > 0) {
    return window.URL.createObjectURL(files[0]);
  } else {
    return undefined;
  }
}

export default MusicInput;
