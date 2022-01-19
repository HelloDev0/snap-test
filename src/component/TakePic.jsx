import React from 'react'
import { useHistory } from 'react-router-dom'

const TakePic = () => {
    const history=useHistory()
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

                <div className="row ">
                    <div className="col-md-8 mx-auto">
                        <p className='fw-bold' style={{ color: '#5554e6' }}>Picture #2</p>
                        <p className='text-secondary'>Next - Let's see who is taking the test! Make sure your face is in the frame and press the button to capture a selfie.
                        </p>
                        <p>Please take a clear picture of yourself. <span className='text-danger'>*</span> </p>
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
