
import ImageUploader from "./components/ImageUploader";
import VoiceRecorder from "./components/VoiceRecorder";
import QRScanner from "./components/QRScanner";
import FaceRecognition from "./components/FaceRecognition";

function App() {
  const handleScanSuccess = (decodedText) => {
    alert(`QR Code détecté : ${decodedText}`);
  };
  const handleScanError = (error) => {
    console.error("Erreur de scan :", error);
  };
  return (
    <div>
      
      <FaceRecognition />
      <VoiceRecorder />
      <h1>Scanner QR Code</h1>
      <QRScanner onScanSuccess={handleScanSuccess} onScanError={handleScanError} />
      
      <ImageUploader />
    </div>
  );
}

export default App;

