import React, { useEffect, useRef } from 'react'
import * as faceapi from 'face-api.js';

export default function FD(props) {
  const videoRef = useRef(document.getElementById(props.vid));

  useEffect(() => {

    const startWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.log("Error accessing webcam:", error);
      }
    };

    function getLabeledFaceDescription() {
      const labels = ["sashrik"]; 
      labels.map((label) => {
        let description = [];
        for (let i = 1; i <= 2; i++) {
          // Your logic for creating face descriptions goes here
        }
      });
    }

    Promise.all([
      faceapi.nets.ssdMobilenetv1.loadFromUri("/models"),
      faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
      faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
  ]).then(startWebcam)


  }, []); 

  return (
    <div>
      <video
        ref={videoRef}
        id={props.vid}
        width="600"
        height="450"
        autoPlay
      />
    </div>
  );
}
