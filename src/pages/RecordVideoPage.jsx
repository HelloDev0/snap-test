import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Footer from '../components/Footer'
import VideoRecorder from 'react-video-recorder'
import { Upload } from '@aws-sdk/lib-storage';
import { S3Client, S3 } from '@aws-sdk/client-s3';

import('buffer').then(({ Buffer }) => { global.Buffer = Buffer; })


export const RecordVideoPage = () => {
  const history = useHistory()
  const webcamRef = React.useRef(null);
  const mediaRecorderRef = React.useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [hasVideo, setHasVideo] = useState(false);
  const [videoUri, setVideoUri] = useState("");

  const [cameraOn, setCameraOn] = useState(false);

  const videoConstraints = {
    // width: 1280,
    // height: 720,
    facingMode: "user"
  };

  // const handleStartCaptureClick = React.useCallback(() => {
  //   setCapturing(true);
  //   mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
  //     mimeType: "video/webm"
  //   });
  //   mediaRecorderRef.current.addEventListener(
  //     "dataavailable",
  //     handleDataAvailable
  //   );
  //   mediaRecorderRef.current.start();
  // }, [webcamRef, setCapturing, mediaRecorderRef]);

  // const handleDataAvailable = React.useCallback(
  //   ({ data }) => {
  //     if (data.size > 0) {
  //       setRecordedChunks((prev) => prev.concat(data));
  //     }
  //   },
  //   [setRecordedChunks]
  // );

  // const handleStopCaptureClick = React.useCallback(() => {
  //   mediaRecorderRef.current.stop();
  //   setCapturing(false);
  // }, [mediaRecorderRef, webcamRef, setCapturing]);

  // const stopRecord = () => {
  //   mediaRecorderRef.current.stop();
  //   setCapturing(false);
  //   console.log(recordedChunks)
  // }

  // const handleDownload = React.useCallback(() => {
  //   if (recordedChunks.length) {
  //     const blob = new Blob(recordedChunks, {
  //       type: "video/webm"
  //     });
  //     const url = URL.createObjectURL(blob);
  //     const a = document.createElement("a");
  //     document.body.appendChild(a);
  //     a.style = "display: none";
  //     a.href = url;
  //     a.download = "react-webcam-stream-capture.webm";
  //     a.click();
  //     window.URL.revokeObjectURL(url);
  //     setRecordedChunks([]);
  //   }
  // }, [recordedChunks]);

  //===== aws upload=============
  // const uploadVideo = async (blob) => {


  //   const target = {
  //     Bucket: 'snaptest-dev',
  //     Key: 'video.webm',
  //     Body: blob
  //   };

  //   const cred = {
  //     accessKeyId: 'AKIAQCTZGOYUVKTL3O4Z',
  //     secretAccessKey: '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'
  //   }

  //   try {
  //     const parallelUploads3 = new Upload({
  //       client: new S3Client({
  //         region: 'us-east-1',
  //         credentials: cred
  //       }),
  //       params: target,
  //       queueSize: 4, // optional concurrency configuration
  //       partSize: '5MB', // optional size of each part
  //       leavePartsOnError: false,
  //     })

  //     parallelUploads3.on("httpUploadProgress", (progress) => {
  //       console.log(progress);
  //     })

  //     await parallelUploads3.done(() => {
  //       console.log('upload complete');
  //     });
  //   } catch (err) {
  //     console.log('upload error--->>>>', err)
  //   }
  // }
  //==============================


  return (

    <>
      <div className="container">
        <div className="row my-4">
          <div className="col-sm-12 ">
            <p className='alerts fw-bold mx-auto p-2 rounded-3 text-center' >
              Please wait to open your COVID test; we will let you know when it is time to start!
            </p>
          </div>
        </div>

        <div className="row ">
          <div className="col-md-6 text-center mx-auto">
            <p style={{ color: '#5554e6' }} className='fw-bold ml-5 '>Press record, open your test, and begin!</p>
            
            <div style={{ width: '100%', height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

              {!cameraOn && <div className="nextBtn btn m-3 px-5 py-2.5"
                onClick={() => { setCameraOn(true) }}>
                Record</div>
              }
              {cameraOn &&
                <VideoRecorder
                  onRecordingComplete={videoBlob => {
                    setCameraOn(false)
                    // Do something with the video...
                    console.log('videoBlob', videoBlob)
                    // uploadVideo(videoBlob)
                  }}
                />
              }
              <div className='row justify-content-center'>
                {/* {!capturing ?
                  <div className='d-flex p-0 justify-content-center align-items-center border border-2 border-secondary rounded-circle' style={{ width: '50px', height: '50px', cursor: 'pointer' }}>
                    <div className='rounded-circle' style={{ width: '40px', height: '40px', backgroundColor: 'red' }}></div>
                  </div>
                  :
                  <div className='d-flex p-0 justify-content-center align-items-center border border-2 border-secondary rounded-circle' style={{ width: '50px', height: '50px', cursor: 'pointer' }}
                    onClick={() => {
                      stopRecord()
                    }}>
                    <div style={{ width: '25px', height: '25px', backgroundColor: 'red', borderRadius: '5px' }}></div>
                  </div>
                } */}

                {/* <div className='d-flex p-0 justify-content-center align-items-center border border-2 border-secondary rounded-circle' style={{ width: '50px', height: '50px', cursor: 'pointer' }}>
                  <div className='rounded-circle' style={{ width: '40px', height: '40px', backgroundColor: 'red' }}></div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="row text-center mt-5">
          <div className="col-sm-12 mt-2">
            <div className="prevBtn btn px-5 py-2.5"
              onClick={() => { history.push('/instruction') }}>
              Previous</div>
            <div className="nextBtn btn m-3 px-5 py-2.5"
              onClick={() => { history.push('/testresult') }}>
              Next</div>
          </div>

          <Footer index={5} />
        </div>
      </div>
    </>
  )
}

