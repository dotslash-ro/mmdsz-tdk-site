type FileUploadProps = {
  file?: File;
  setFile: (file: File) => void;
  fileFormats: string;
  id: string;
};

const FileUpload = ({ file, setFile, fileFormats, id }: FileUploadProps) => {
  return (
    <div>
      <div className="my-6 flex w-full items-center justify-center">
        <label
          htmlFor={id}
          className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50"
        >
          {!file ? (
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="h-16 w-16">
                <path d="M23 17h-3v-3h-2v3h-3v2h3v3h2v-3h3v-2zm-7 5v2h-15v-24h10.189c3.163 0 9.811 7.223 9.811 9.614v2.386h-2v-1.543c0-4.107-6-2.457-6-2.457s1.518-6-2.638-6h-7.362v20h13z" />
              </svg>
              <p className="mb-2 py-3 text-gray-900">Fájl feltöltéséhez kattints erre a mezőre</p>
              <p className="text-xs text-gray-500">{fileFormats}</p>
            </div>
          ) : (
            <div>
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="h-16 w-16"
                >
                  <path d="M4 22v-20h16v11.543c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-7.362zm18-7.614v-14.386h-20v24h10.189c3.163 0 9.811-7.223 9.811-9.614zm-10.967.614c2.258-4.05 3.826-6.13 5.967-7.999l-.278-.641c-2.596 1.616-3.993 2.833-6.106 5.231-1.125-.802-1.76-1.169-2.76-1.654l-.856.792c1.711 1.585 2.64 2.631 4.033 4.271z" />
                </svg>
                <p className="py-3 text-lg text-gray-900">{file.name}</p>
                <p className="mb-2 text-sm text-gray-500">
                  Módosításhoz húzz ide egy más fájlt vagy kattints erre a mezőre
                </p>
              </div>
            </div>
          )}
          <input
            id={id}
            type="file"
            name="document"
            accept="application/pdf"
            className="hidden"
            onChange={(e) => {
              if (e.target.files) {
                setFile(e.target.files[0]);
              }
            }}
          />
        </label>
      </div>
    </div>
  );
};

export default FileUpload;
