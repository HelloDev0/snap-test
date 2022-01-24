import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

import Webcam from "react-webcam";
import Footer from '../components/Footer';


export const TestResultPage = () => {
    const history = useHistory()
    const webcamRef = React.useRef(null);
    const [hasPhotoResult, setHasPhotoResult] = useState(false);
    const [photoResultUri, setPhotoResultUri] = useState("");
    const [testResult, setTestResult] = useState("");
    const [expecRes,setExpecRes]=useState(false)
    const handleSubmit=()=>{
        if(testResult===''){
            setExpecRes(true)
        }else{
            history.push('/finish')
        }
    }

    const videoConstraints = {
        // width: 1280,
        // height: 720,
        facingMode: "user"
    };

    const clickResultPhoto = () => {
        try {
            const imageSrc = webcamRef.current.getScreenshot();
            if (imageSrc) {
                // console.log('clicked photo---->>>>', imageSrc)
                setPhotoResultUri(imageSrc)
                setHasPhotoResult(true)
            }
        } catch (err) {
            console.log('web cam click error---->>>', err)
        }
    }

    return <>
        <div className="container">
            <div className="row mt-4 mx-auto"
            // style={{ marginLeft: '11rem' }}
            >
                {/* <div className="col-sm-12 ">
                    <p className='alerts fw-bold mx-auto p-2 rounded-3 text-center' >
                        Please wait to open your COVID test; we will let you know when it is time to start!
                    </p>
                </div> */}
                <div className="col-md-6  mt-3 justify-content-center d-flex" style={{ width: '100%' }}
                >
                    <div>
                        <p className='fw-bold fs-5' style={{ color: '#5554e6' }}>let's see how you deed</p>
                        <p className='text-secondary'>Please take a clear picture of your test result</p>
                    </div>
                </div>

                {/* <div className='my-5'>
                        <label>take a picture of your test</label><br />
                        <div className='bg-white border-0 mt-3'>
                            <img src="Group 8134.png" alt="click" />
                        </div>
                    </div> */}
                <div className="row w-100">
                    <div className="col-md-6 mx-auto my-5">
                        {hasPhotoResult ?
                            <>
                                <img src={photoResultUri} alt="photoID" style={{ width: '100%', height: '500px' }} />
                                <div className='row justify-content-center'>
                                    <div className='d-flex justify-content-center align-items-center border border-2 border-secondary rounded-circle mt-2' style={{ width: '50px', height: '50px', cursor: 'pointer' }} onClick={() => { setPhotoResultUri(''); setHasPhotoResult(false); }}>
                                        <i className="fas fa-redo text-secondary" style={{ fontSize: '25px' }}></i>
                                    </div>
                                </div>
                            </>
                            :
                            <>
                                <div style={{ width: '100%', height: '500px', justifyContent: 'center', alignItems: 'center' }}>
                                    <Webcam
                                        audio={false}
                                        height={'auto'}
                                        width={'auto'}
                                        ref={webcamRef}
                                        screenshotFormat="image/jpeg"
                                        videoConstraints={videoConstraints}
                                    />
                                    <div className='row justify-content-center'>
                                        <div className='d-flex justify-content-center align-items-center border border-2 border-secondary rounded-circle' style={{ width: '50px', height: '50px', cursor: 'pointer' }} onClick={() => clickResultPhoto()}>
                                            <i className="fas fa-camera text-secondary" style={{ fontSize: '25px' }}></i>
                                        </div>
                                    </div>
                                </div>
                            </>}
                    </div>
                </div>

                <div className="row justify-content-center d-flex my-5">

                    <label className='text-center mb-2'>what do you think your test result is? <span className='text-danger'>*</span></label>
                    {expecRes?(
                    <select className="selectmenu mt-3 border border-danger px-2"
                        aria-label="Default select example"
                        name="testResult"
                        value={testResult}
                        onChange={(e) => setTestResult(e.target.value)}>
                        <option selected value="">Please select one ..</option>
                        <option value="Negative">Negative</option>
                        <option value="Positive">Positive</option>
                        <option value="Don't Know">Don't Know</option>
                    </select>
                    ):(
                        <select className="selectmenu mt-3 border-0 px-2"
                        aria-label="Default select example"
                        name="testResult"
                        value={testResult}
                        onChange={(e) => setTestResult(e.target.value)}>
                        <option selected value="">Select ..</option>
                        <option value="Negative">Negative</option>
                        <option value="Positive">Positive</option>
                        <option value="Don't Know">Don't Know</option>
                    </select>
                    )}

                </div>

            </div>
            <div className="row text-center mt-5">
                <div className="col-sm-12 mt-2">
                    <div className="prevBtn btn px-5 py-2.5"
                        onClick={() => { history.push('/recordvideo') }}>
                        Previous</div>
                    <div className="nextBtn btn m-3 px-5 py-2.5"
                        onClick={handleSubmit}>
                        Next</div>
                </div>

                <Footer index={6} />
            </div>
        </div>
    </>;
};

