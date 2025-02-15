import { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";

const FaceRecognition = () => {
  const videoRef = useRef();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadModels = async () => {
      await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
      await faceapi.nets.faceLandmark68Net.loadFromUri("/models");
      await faceapi.nets.faceRecognitionNet.loadFromUri("/models");
      await faceapi.nets.ssdMobilenetv1.loadFromUri("/models");
      setLoading(false);
    };

    loadModels();
  }, []);

  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => (videoRef.current.srcObject = stream))
      .catch((err) => console.error(err));
  };

  return (
    <div className="container">
      <h2>Reconnaissance Faciale</h2>
      {loading ? <p>Chargement des modèles...</p> : <button onClick={startVideo}>Démarrer</button>}
      <video ref={videoRef} autoPlay width="400" height="300" />
    </div>
  );
};

export default FaceRecognition;
