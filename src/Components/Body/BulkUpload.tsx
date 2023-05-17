import { useState } from "react";
import Dropzone from "react-dropzone";
import { toast } from "react-toastify";
import { handleUploadCsvReport } from "../../Api/api";
import FileIcon from "../../assets/svg/iconmonstr-file-5.svg";
import CSVIcon from "../../assets/svg/iconmonstr-note-14.svg";
import Loader from "../Layout/Loader";

export default function BulkUpload() {
  const [file, setFile] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const notify = (msg: string) => toast(msg);

  const handleSubmit = () => {
    setLoading(true);
    let data = new FormData();
    data.append("file", new File([file[0]], file[0].name));

    handleUploadCsvReport(data)
      .then((res) => {
        if (res.status === 200) {
          setLoading(false);
          notify("Report added successfully");
        } else {
          setLoading(false);
          notify("record has not been added");
        }
      })
      .catch((err) => {
        setLoading(false);
        notify("record has not been added");
      });
  };
  return (
    <div className="w-full h-full  flex flex-col justify-center items-center font-secondary">
      <div className="h-1/3 w-3/4">
        <Dropzone
          onDrop={(acceptedFiles) => setFile(acceptedFiles)}
          maxFiles={1}
          accept={{
            "text/csv": [".csv"],
          }}
        >
          {({ getRootProps, getInputProps }) => (
            <section className="h-full w-full flex flex-col items-center justify-center">
              <div
                {...getRootProps()}
                className="w-full h-full bg-bgColorTwo flex justify-center items-center rounded-lg bg-secondary bg-opacity-20"
              >
                <input {...getInputProps()} className="w-full h-full" />
                <div className="flex text-center items-center">
                  <img
                    src={CSVIcon}
                    alt="CSV Icon"
                    style={{ height: "68px" }}
                  />
                  <div className="font-poppins font-bold text-xl text-center">
                    Upload CSV <br />{" "}
                    <span className="font-poppins font-extralight text-xs ml-4">
                      Click or drag to upload
                    </span>
                  </div>
                </div>
              </div>
              {file && (
                <div className="h-20 border-dashed w-full mt-4 border-bgColorTwo flex items-center font-poppins font-bold">
                  <div className="flex gap-1">
                    <img src={FileIcon} alt="File Icon" />
                    <span>{file[0].name}</span>
                  </div>
                </div>
              )}
            </section>
          )}
        </Dropzone>
      </div>

      {!loading ? (
        <button
          onClick={handleSubmit}
          disabled={!file}
          className={
            file
              ? "px-4 py-2 bg-primary text-white font-bold mt-4 rounded "
              : "px-4 py-2 bg-secondary bg-opacity-50 text-white font-bold mt-4 rounded "
          }
        >
          Submit
        </button>
      ) : (
        <Loader />
      )}
    </div>
  );
}
