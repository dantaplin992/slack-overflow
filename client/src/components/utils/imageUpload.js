import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";
import { AiFillPropertySafety } from "react-icons/ai";

function ImageUpload({ getUrl, currentUser }) {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const uploadFile = () => {
    console.log('uploading file')
    console.log('file: ', imageUpload)
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        console.log('url: ', url)
        getUrl(url)
        setImageUrls((prev) => [...prev, url]);
      }
      );
    }
    );
  }
  
  return (
    <div className="App">
      {imageUrls.length == 0 ? (
        <><input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button name="image" onClick={uploadFile}> Upload Image</button>
      </>
      ) : null }
      
      {imageUrls.map((url) => {
        // return <img src={url} />
        //alert that image is uploaded
        return <div>Image uploaded to {url}</div>
      })}
    </div>
  );
}

export default ImageUpload;