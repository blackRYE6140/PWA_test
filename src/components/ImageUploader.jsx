import { useState } from "react";

const ImageUploader = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="container">
      <h2>Upload image</h2>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {image && <img src={image} alt="Uploaded" style={{ width: "100%", marginTop: "10px" }} />}
    </div>
  );
};

export default ImageUploader;
