import { ReactMediaRecorder } from "react-media-recorder";

const VoiceRecorder = () => {
  return (
    <div>
      <h2>Enregistreur vocal</h2>
      <ReactMediaRecorder
        audio
        render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
          <div>
            <p>Statut : {status}</p>
            <button onClick={startRecording}>Démarrer enregistrement</button>
            <button onClick={stopRecording}>Arrêter enregistrement</button>
            {mediaBlobUrl && <audio src={mediaBlobUrl} controls />}
          </div>
        )}
      />
    </div>
  );
};

export default VoiceRecorder;
