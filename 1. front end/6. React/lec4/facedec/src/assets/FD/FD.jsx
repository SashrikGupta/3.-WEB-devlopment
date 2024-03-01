import React, { useEffect, useRef , useContext} from 'react';
import * as faceapi from 'face-api.js';
import styles from './FD.module.css' ; 
import { PostContext } from '../Context/StoreContext';
export default function FD(props) {

   const videoRef = useRef();
   const nowcontext = useContext(PostContext) ; 

   useEffect(() => {
     const loadModels = async () => {
       await Promise.all([
         faceapi.nets.ssdMobilenetv1.loadFromUri("/models"),
         faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
         faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
       ]);
       console.log("Models loaded successfully");
       props.onset(true) ; 
       startWebcam();
     };
 
     const getLabeledFaceDescriptions = async () => {
       const labels = nowcontext.labels ; 

       return Promise.all(
         labels.map(async (label) => {
           const descriptions = [];
             const img = await faceapi.fetchImage(label.file);
             const detections = await faceapi
               .detectSingleFace(img)
               .withFaceLandmarks()
               .withFaceDescriptor();
             descriptions.push(detections.descriptor);
           return new faceapi.LabeledFaceDescriptors(label.name, descriptions);
         })
       );
     };
 
     const startWebcam = () => {
       navigator.getUserMedia(
         { video: {} },
         (stream) => {
           videoRef.current.srcObject = stream;
           videoRef.current.addEventListener('loadeddata', () => {
             // Once video data is loaded, start face recognition setup
             setupFaceRecognition();
           });
         },
         (err) => console.error(err)
       );
     };
 

     const setupFaceRecognition = async () => {
      const labeledFaceDescriptors = await getLabeledFaceDescriptions();
      const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors);
    
      
      const container = document.getElementById(props.div);
      container.style.position = 'relative'; // Make sure it's positioned relative
      container.style.width = '100%'; // Set the width to 100% of the parent container
      container.style.maxWidth = `${videoRef.current.videoWidth}px`; // Set the max width to the video width
      container.style.maxHeight = `${videoRef.current.videoHeight}px`; // Set the max height to the video height
      container.style.margin = 'auto' ;

      const root = document.getElementById('vid')
      root.append(container);
    
      const video = videoRef.current;
      const canvas = faceapi.createCanvasFromMedia(video);
      container.appendChild(canvas);
      container.appendChild(video);
       
      const displaySize = {
        width: video.videoWidth,
        height: video.videoHeight,
      };
      faceapi.matchDimensions(canvas, displaySize);
    
      setInterval(async () => {
        const detections = await faceapi
          .detectAllFaces(video)
          .withFaceLandmarks()
          .withFaceDescriptors();
    
        const resizedDetections = faceapi.resizeResults(detections, displaySize);
    
        canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
    
        const results = resizedDetections.map((d) => {
          return faceMatcher.findBestMatch(d.descriptor);
        });

        //const confidenceScore = results[0].distance;
  
        if(results && results.length > 0)
        {
         console.log(results[0].distance) ;
         props.func(results[0].distance , results[0].label) ;
         console.log(results[0].label) ;


        results.forEach((result, i) => {
         
          const box = resizedDetections[i].detection.box;

          // Extract x and y coordinates
          const x = box.x;
          const y = box.y;
        

        
          const drawBox = new faceapi.draw.DrawBox(box, {
            label: result.toString(),
            lineWidth: 2,
            boxColor: 'rgba(255,255,255,1)',
            drawLabelOptions: {
              fontSize: 12,
              fontColor: 'white',
              backgroundColor: 'blue',
            },
          });



          drawBox.draw(canvas);
        });
      } 
      else
      {
       console.log(0.0) ;
       props.func(0.0,"uk") ;
      }
      }, 1000);
    };
    
    
 
     loadModels();
 
   }, []);

  return (
    <>

      <div id = {props.div}>
      <video ref={videoRef} 
            autoPlay 
            playsInline muted
            style ={{
              display:'absolute'
           }}
      >

      </video>
       
      </div>

  
   

    </>
  )
}
