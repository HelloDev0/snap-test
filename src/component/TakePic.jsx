import React, {  useState } from 'react'
import { useHistory } from 'react-router-dom'
import Webcam from "react-webcam";


const TakePic = () => {
    const history = useHistory()
    const webcamRef1 = React.useRef(null);
    const webcamRef2 = React.useRef(null);
    const [hasPhotoID, setHasPhotoID] = useState(false);
    const [hasPhotoSelf, setHasPhotoSelf] = useState(false);
    const [photoIDuri, setPhotoIDuri] = useState("");
    const [photoSelfUri, setPhotoSelfUri] = useState("");

    const videoConstraints = {
        // width: 1280,
        // height: 720,
        facingMode: "user"
    };


    const clickIDPhoto = () => {
        try {
            const imageSrc = webcamRef1.current.getScreenshot();
            if (imageSrc) {
                // console.log('clicked photo---->>>>', imageSrc)
                setPhotoIDuri(imageSrc)
                setHasPhotoID(true)
            }
        } catch (err) {
            console.log('web cam click error---->>>', err)
        }
    }
    const clickSelfPhoto = () => {
        try {
            const imageSrc = webcamRef2.current.getScreenshot();
            if (imageSrc) {
                // console.log('clicked photo---->>>>', imageSrc)
                setPhotoSelfUri(imageSrc)
                setHasPhotoSelf(true)
            }
        } catch (err) {
            console.log('web cam click error---->>>', err)
        }
    }


    return (
        <>
            <div className="container">
                <div className="row my-4">
                    <div className="col-sm-12 ">
                        <p className='alerts fw-bold mx-auto p-2 rounded-3 text-center' >
                            <span > Reminder </span><br />
                            Please do not open your test yet. We will let you know when it is time.</p>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-md-8 mx-auto">
                        <p className='fw-bold' style={{ color: '#5554e6' }}>Picture #1</p>
                        <p className='text-secondary'>Let's verify that you are you! Position all 4 corners of the front of your photo ID clearly in the frame and press the button to capture a picture</p>
                        <p>Please take a picture of your drivers license or valid state ID. <span className='text-danger'>*</span> </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mx-auto my-5">

                        {hasPhotoID ?
                            <>
                                <img src={photoIDuri} alt="photoID" style={{ width: '100%', height: '500px' }} />
                                <div className='row justify-content-center'>
                                    <div className='d-flex justify-content-center align-items-center border border-2 border-secondary rounded-circle mt-2' style={{ width: '50px', height: '50px', cursor: 'pointer' }} onClick={() => { setPhotoIDuri(''); setHasPhotoID(false); }}>
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
                                        ref={webcamRef1}
                                        screenshotFormat="image/jpeg"
                                        videoConstraints={videoConstraints}
                                    />
                                    <div className='row justify-content-center'>
                                        <div className='d-flex justify-content-center align-items-center border border-2 border-secondary rounded-circle' style={{ width: '50px', height: '50px', cursor: 'pointer' }} onClick={() => clickIDPhoto()}>
                                            <i className="fas fa-camera text-secondary" style={{ fontSize: '25px' }}></i>
                                        </div>
                                    </div>
                                </div>
                            </>}


                    </div>
                </div>

                <div className="row ">
                    <div className="col-md-8 mx-auto">
                        <p className='fw-bold' style={{ color: '#5554e6' }}>Picture #2</p>
                        <p className='text-secondary'>Next - Let's see who is taking the test! Make sure your face is in the frame and press the button to capture a selfie.
                        </p>
                        <p>Please take a clear picture of yourself. <span className='text-danger'>*</span> </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mx-auto my-5">

                        {hasPhotoSelf ?
                            <>
                                <img src={photoSelfUri} alt="photoID" style={{ width: '100%', height: '500px' }} />
                                <div className='row justify-content-center'>
                                    <div className='d-flex justify-content-center align-items-center border border-2 border-secondary rounded-circle mt-2' style={{ width: '50px', height: '50px', cursor: 'pointer' }} onClick={() => { setPhotoSelfUri(''); setHasPhotoSelf(false); }}>
                                        <i class="fas fa-redo text-secondary" style={{ fontSize: '25px' }}></i>
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
                                        ref={webcamRef2}
                                        screenshotFormat="image/jpeg"
                                        videoConstraints={videoConstraints}
                                    />
                                    <div className='row justify-content-center'>
                                        <div className='d-flex justify-content-center align-items-center border border-2 border-secondary rounded-circle' style={{ width: '50px', height: '50px', cursor: 'pointer' }} onClick={() => clickSelfPhoto()}>
                                            <i class="fas fa-camera text-secondary" style={{ fontSize: '25px' }}></i>
                                        </div>
                                    </div>
                                </div>
                            </>}


                    </div>
                </div>


                <div className="row text-center">
                    <div className="col-sm-12 mt-2">
                        <div className="prevBtn btn px-5 py-2.5"
                            onClick={() => { history.push('/form') }}>
                            Previous</div>
                        <div className="nextBtn btn m-3 px-5 py-2.5"
                            onClick={() => { history.push('/instruction') }}>
                            Next</div>
                    </div>

                    <div className="footerDot col-sm-12" >
                        <span ><i class="fas fa-circle"></i></span>
                        <span ><i class="fas fa-circle"></i></span>
                        <span ><i class="fas fa-circle"></i></span>
                        <span style={{ color: '#5554e6' }}><i class="fas fa-circle"></i></span>
                        <span><i class="fas fa-circle"></i></span>
                        <span><i class="fas fa-circle"></i></span>
                        <span><i class="fas fa-circle"></i></span>
                        <span><i class="fas fa-circle"></i></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TakePic