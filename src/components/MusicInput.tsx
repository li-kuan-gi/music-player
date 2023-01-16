import { ChangeEvent, useState } from "react";

function MusicInput(props: {
  handleChangeMusicURL: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const handleInputChange = useChangeMusic(props.handleChangeMusicURL);

  return <input type="file" onChange={handleInputChange} />;
}

function useChangeMusic(
  handleChangeMusicURL: React.Dispatch<React.SetStateAction<string | null>>
) {
  const [previousURL, setPreviousURL] = useState<string | null>(null);

  const handleInputChange = (e: ChangeEvent) => {
    if (previousURL) {
      window.URL.revokeObjectURL(previousURL);
    }

    const url = getInputFileURL(e);

    setPreviousURL(url);
    handleChangeMusicURL(url);
  };

  return handleInputChange;
}

function getInputFileURL(e: ChangeEvent): string {
  const fileInputElement = e.target as HTMLInputElement;
  const file = (fileInputElement.files as FileList)[0];
  return window.URL.createObjectURL(file);
}

export default MusicInput;
