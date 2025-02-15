import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect } from "react";


// eslint-disable-next-line react/prop-types
const QRScanner = ({ onScanSuccess, onScanError }) => {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      { fps: 10, qrbox: 250 }
    );

    scanner.render(onScanSuccess, onScanError);

    return () => {
      scanner.clear();
    };
  }, [onScanSuccess, onScanError]);

  return <div id="reader"></div>;
};

export default QRScanner;
