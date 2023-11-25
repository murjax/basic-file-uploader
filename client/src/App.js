import './App.css';
import { useState, useRef } from 'react';

function App() {
  const [file, setFile] = useState();
  const [uploadResult, setUploadResult] = useState();
  const fileInput = useRef(null);

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  function handleSubmit(event) {
    event.preventDefault()

    const url = 'http://localhost:3001/upload';
    const formData = new FormData();
    formData.append('file', file);

    fetch(url, {
      method: 'POST',
      mode: 'cors',
      body: formData
    }).then((response) => response.json()).then((json) => {
      fileInput.current.value = null;
      setUploadResult(json.message);
    });
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>React File Upload</h1>
        <input
          type="file"
          onChange={handleChange}
          ref={fileInput}
        />
        <button type="submit">Upload</button>
      </form>
      <br/>
      <div>
        <span>Upload Result: {uploadResult}</span>
      </div>
    </div>
  );
}

export default App;
