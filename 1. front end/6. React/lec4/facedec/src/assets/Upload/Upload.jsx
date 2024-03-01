import React, { useContext, useState } from 'react';
import { PostContext } from '../Context/StoreContext';

export default function Upload() {
  const nowcontext = useContext(PostContext);

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [file, setFile] = useState(null);
  

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the selected file is jpg or png
    if (file && !file.name.match(/\.(jpg|jpeg|png)$/)) {
      alert('Please select a valid jpg or png file.');
      return;
    }

    // Access the values here
    const url = URL.createObjectURL(file)
    nowcontext.add(name, username, url , "1.png");

    // Reset the form fields after submission if needed
    setName('');
    setUsername('');
    setFile(null);
  };
  return (
    <>
      <div
        style={{
          width: 'calc(100vw - 280px)',
          height: 'calc(100vh - 94px)',
          backgroundImage: 'url("")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/001/963/650/original/abstract-tech-sci-fi-hologram-frame-template-design-background-vector.jpg")'
        }}
      >
        <div className="container m-3 p-3 "
        style={{
         width:'70vw'
        }}
        >
          <form onSubmit={handleSubmit}>
            <div className="container">
              <div className="input-group mb-5">

                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Username(enter only first name )"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id = "buttone"
                />
              </div>
              <div className="input-group mb-5" >
                <input
                  type="text"
                  className="form-control text-white"
                  id = "buttone"
                  placeholder="email"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={username}
                  onChange={(e) => {return setUsername(e.target.value)}}
                />
              </div>
              <div>
                <label htmlFor="formFileLg" className="form-label text-white m-5" style = {{fontSize:'24px'}}>
                  enter your photo here 
                </label>
                <input
                  className="form-control form-control-lg"
                  id="buttone"
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
            
                />
                <button id="buttone" className = "mt-5" type="submit">submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
