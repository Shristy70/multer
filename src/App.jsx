import { useState } from "react";
import axios from "axios";

function App() {
  const [fileData, setFileData] = useState();
  const handleFileChange = (e) => {
    console.log(e.target.files);
    setFileData(e.target.files[0]);
    console.log(fileData);
  };

  const handelSubmit = async () => {
    const formData = new FormData();
    formData.append("file", fileData);
    let api = "http://localhost:8080/upload";
    const response = await axios.post(api, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response);
    alert("file upload");
  };

  return (
    <>
      <div>
        <h1>Welcome to file upload</h1>
        upload image : <input type="file" onChange={handleFileChange} />
        <br />
        <br />
        <button onClick={handelSubmit}>Upload !!</button>
      </div>
    </>
  );
}

export default App;
