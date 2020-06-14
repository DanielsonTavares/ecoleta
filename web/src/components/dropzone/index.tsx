import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import "./styles.css";
import { FiUpload } from "react-icons/fi";

interface Props {
  onFileUploaded: (file: File) => void;
}

const Dropzone: React.FC<Props> = (props) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState("");

  const onDrop = useCallback(
    (acceptedFiles) => {
      console.log(acceptedFiles);
      /*Se estiver usando o atributo multiple no input, este vetor terá mais de uma posição */
      const file = acceptedFiles[0];
      const fileUrl = URL.createObjectURL(file);
      setSelectedFileUrl(fileUrl);

      props.onFileUploaded(file);
    },
    [props]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <div className="dropzone" {...getRootProps()}>
      {/**Se for para aceitar mais de um arquivo, basta utilizar atributo 'multiple' neste imput */}
      <input {...getInputProps()} accept="image/*" />

      {selectedFileUrl ? (
        <img src={selectedFileUrl} alt="Imagem do estabelecimento" />
      ) : (
        <>
          {isDragActive ? (
            <p>Solte o arquivo aqui ...</p>
          ) : (
            <p>
              {" "}
              <FiUpload /> Arraste uma imagem para cá, ou clique para
              selecionar.
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default Dropzone;
