import React from 'react'
import { useHistory } from 'react-router-dom'
import './style.css'

const RecordVideo = () => {
    const history=useHistory()
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
                    <div className="col-md-6 mx-auto" style={{paddingLeft:'8rem'}}>
                        <p>Press record,open your test, and begin!</p>
                        <input type='file'/>
                    </div>
                </div>
                <div className="row text-center mt-5">
                    <div className="col-sm-12 mt-2">
                        <div className="prevBtn btn px-5 py-2.5"
                            onClick={() => { history.push('/instruction') }}>
                            Previous</div>
                        <div className="nextBtn btn m-3 px-5 py-2.5"
                            onClick={() => { history.push('/recordvideo') }}>
                            Next</div>
                    </div>

                    <div className="footerDot col-sm-12" >
                        <span ><i class="fas fa-circle"></i></span>
                        <span ><i class="fas fa-circle"></i></span>
                        <span ><i class="fas fa-circle"></i></span>
                        <span ><i class="fas fa-circle"></i></span>
                        <span ><i class="fas fa-circle"></i></span>
                        <span style={{ color: '#5554e6' }}><i class="fas fa-circle"></i></span>
                        <span><i class="fas fa-circle"></i></span>
                        <span><i class="fas fa-circle"></i></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecordVideo
