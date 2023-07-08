import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

function FileUpload(props) {
  const [uploadedFiles, setUploadedFiles] = useState(null);
  const [fileType, setFileType] = useState("");

  const { getRootProps, getInputProps, open } = useDropzone({
    onDropAccepted: (acceptedFiles) => {
      console.log(acceptedFiles)
      fileUploadHandler(acceptedFiles);
    },
  });

  const fileUploadHandler = (acceptedFiles) => {
    props?.onUpload(acceptedFiles);
  };

  useEffect(() => {
    // const fileReader = new FileReader();
    // if (uploadedFiles == props?.image) {
    //   fileReader.onloadend = () => {
    //     if (uploadedFiles?.type.includes("image")) {
    //       setPreviewImage(fileReader.result);
    //       console.log(fileReader.result);
    //     }
    //     // } else if (uploadedFiles?.type.includes("video")) {
    //     //   setPreviewVideo(fileReader.result);
    //     //   console.log(fileReader.result);
    //     // }
    //   };
    //   fileReader.readAsDataURL(uploadedFiles);
    // } else {
    //   setPreviewImage(props?.image || "");
    // }
  }, []);

  return (
    <div
      {...getRootProps()}
      className="h-full text-purple-600 flex justify-center p-6 items-center cursor-pointer border-2 border-purple-600 border-dashed text-base"
    >
      <input {...getInputProps()} />
      <FontAwesomeIcon icon={faUpload} />
      <p className="text-sm font-medium">Upload your files here!</p>
    </div>
  );
}

export default FileUpload;
