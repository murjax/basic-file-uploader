import './App.css';
import { useState } from 'react';

function App() {
  const [file, setFile] = useState()

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
    }).then((response) => {
      console.log(response);
    });
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>React File Upload</h1>
        <input
          type="file"
          onChange={handleChange}
          data-test="file-input"
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default App;
