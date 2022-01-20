import React from 'react'
import { useHistory } from 'react-router-dom'
import './style.css'

const Instruction = () => {
    const history = useHistory()
    return (
        <>
            <div className="container">
                <div className="row my-4">
                    <div className="col-sm-12 ">
                        <p className='alerts fw-bold mx-auto p-2 rounded-3 text-center' >
                            We are almost ready! Here's how it works
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mx-auto my-2 ">
                        <div style={{paddingLeft:'18.5%'}}>
                            <p className='fw-bold'
                                style={{ color: '#5554e6' }}> How to take your COVID test:</p>
                            <p> 1) Let's review what's in your kit</p>
                            <p>   2) How to take your test</p>
                            <p>   3) What results look like</p>
                            <p>  4) Let's see your results! Hold up the test for us to take a look</p>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <button className='instBtn btn px-4 py-2 my-3'
                            >Watch Instructional Video</button>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <a href="https://youtu.be/qBt_H4Gc-rU" className='text-decoration-none text-dark'> https://youtu.be/qBt_H4Gc-rU</a>
                        </div>
                    </div>
                </div>
                <div className="row text-center mt-5">
                    <div className="col-sm-12 mt-2">
                        <div className="prevBtn btn px-5 py-2.5"
                            onClick={() => { history.push('/snap') }}>
                            Previous</div>
                        <div className="nextBtn btn m-3 px-5 py-2.5"
                            onClick={() => { history.push('/recordvideo') }}>
                            Next</div>
                    </div>

                    <div className="footerDot col-sm-12" >
                        <span ><i className="fas fa-circle"></i></span>
                        <span ><i className="fas fa-circle"></i></span>
                        <span ><i className="fas fa-circle"></i></span>
                        <span ><i className="fas fa-circle"></i></span>
                        <span style={{ color: '#5554e6' }}><i className="fas fa-circle"></i></span>
                        <span><i className="fas fa-circle"></i></span>
                        <span><i className="fas fa-circle"></i></span>
                        <span><i className="fas fa-circle"></i></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Instruction
