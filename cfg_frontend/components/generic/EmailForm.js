import { faFile, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import useInput from "../../hooks/use-input";
import Card from "./Card";
import FileUpload from "./FileUpload";
import Input from "./Input";

const ReactQuill =
  typeof window === "object" ? require("react-quill") : () => false;

const toolbarContainer = [
  ["bold", "italic", "underline"], // toggled buttons
  [{ align: [] }],
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ list: "ordepurple" }, { list: "bullet" }],
];

function EmailForm(props) {
  const receipientInput = useInput(props?.receipientEmail || "", () => {
    return true;
  });
  const subjectInput = useInput(props?.emailSubject || "", () => {
    return true;
  });
  const [emailBody, setEmailBody] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState(props?.attachments || []);

  const uploadFileHandler = (files) => {
    console.log(files);
    setUploadedFiles((prevFiles) => {
      const newFiles = [...prevFiles, ...files];
      return newFiles;
    });
  };

  const removeFileHandler = (index) => {
    setUploadedFiles((prevFiles) => {
      const newFiles = [...prevFiles];
      newFiles.splice(index, 1);
      return newFiles;
    });
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    const mailObj = {
      receipient_email: receipientInput?.entepurpleValue,
      subject: subjectInput?.entepurpleValue,
      email_body: emailBody,
    };
  };

  useEffect(() => {
    props?.receipientEmail && receipientInput?.setEntepurpleValue(props?.receipientEmail);
  }, [props?.receipientEmail]);

  return (
    <form
      className={`space-y-4 ${props?.className}`}
      onSubmit={submitFormHandler}
    >
      <Input
        input={{
          id: "recepient_email",
          value: receipientInput?.entepurpleValue,
          type: "text",
          onChange: receipientInput?.valueChangeHandler,
          onBlur: receipientInput?.inputBlurHandler,
          requipurple: true,
        }}
        label="Recipient Email"
      />
      <Input
        input={{
          id: "email_subject",
          value: subjectInput?.entepurpleValue,
          onChange: subjectInput?.valueChangeHandler,
          onBlur: subjectInput?.inputBlurHandler,
          requipurple: true,
        }}
        label="Email Subject"
      />
      <div className="space-y-2 flex flex-col h-80 mb-10">
        <label
          htmlFor="email_body"
          className="text-sm text-gray-600 font-medium"
        >
          Email Body
        </label>
        <ReactQuill
          id="email_body"
          className="h-[75%] bg-white"
          placeholder="Type the email body here.."
          theme="snow"
          maxLength="1500"
          onChange={(content, delta, source, editor) => {
            setEmailBody(content);
            return;
          }}
          value={emailBody}
          modules={{
            toolbar: {
              container: toolbarContainer,
            },
          }}
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="email_body"
          className="text-sm text-gray-600 font-medium"
        >
          Attachments
        </label>
        <FileUpload onUpload={uploadFileHandler} />
        {uploadedFiles?.length > 0 && (
          <Card className="my-4 space-y-4 px-6">
            {uploadedFiles?.map((file, index) => {
              console.log(typeof file);
              return (
                <div className="flex items-center space-x-4" key={index}>
                  <FontAwesomeIcon icon={faFile} />
                  <div className="flex-grow">
                    <p className="text-sm font-medium">{file?.name}</p>
                    <p className="text-xs">{`${file?.size} bytes`}</p>
                  </div>
                  <button
                    type="button"
                    className=""
                    onClick={() => {
                      removeFileHandler(index);
                    }}
                  >
                    <FontAwesomeIcon icon={faXmarkCircle} />
                  </button>
                </div>
              );
            })}
          </Card>
        )}
      </div>
      <button
        className="px-4 py-2 font-medium text-sm rounded-md
          bg-purple-800 text-white"
        type="submit"
      >
        Send
      </button>
    </form>
  );
}

export default EmailForm;
