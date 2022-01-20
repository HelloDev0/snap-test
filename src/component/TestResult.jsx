import React from 'react';
import { useHistory } from 'react-router-dom';
import './style.css'

const TestResult = () => {
    const history=useHistory()
    return <>
        <div className="container">
            <div className="row mt-4"
            style={{ marginLeft:'11rem'}}>
                {/* <div className="col-sm-12 ">
                    <p className='alerts fw-bold mx-auto p-2 rounded-3 text-center' >
                        Please wait to open your COVID test; we will let you know when it is time to start!
                    </p>
                </div> */}
                <div className="col-md-6 mx-auto my-3"
                >
                    <div>
                        <p className='fw-bold fs-5' style={{ color: '#5554e6' }}>let's see how you deed</p>
                        <p className='text-secondary'>Please take a clear picture of your test result</p>
                    </div>
                    <div className='my-5'>
                        <label>take a picture of your test</label><br />
                        <div className='bg-white border-0 mt-3'>
                            <img src="Group 8134.png" alt="click" />
                        </div>
                    </div>
                    <div>
                        <label>what do you think your test result is? <span className='text-danger'>*</span></label>
                        <br />
                        <select className="selectmenu mt-3" aria-label="Default select example">
                            <option selected>Your Answer</option>
                            <option value="1">Negative</option>
                            <option value="2">Positive</option>
                            <option value="3">Don't Know</option>
                        </select>
                    </div>
                </div>

            </div>
            <div className="row text-center mt-5">
                <div className="col-sm-12 mt-2">
                    <div className="prevBtn btn px-5 py-2.5"
                        onClick={() => { history.push('/recordvideo') }}>
                        Previous</div>
                    <div className="nextBtn btn m-3 px-5 py-2.5"
                        onClick={() => { history.push('/testresult') }}>
                        Next</div>
                </div>

                <div className="footerDot col-sm-12" >
                    <span ><i className="fas fa-circle"></i></span>
                    <span ><i className="fas fa-circle"></i></span>
                    <span ><i className="fas fa-circle"></i></span>
                    <span ><i className="fas fa-circle"></i></span>
                    <span ><i className="fas fa-circle"></i></span>
                    <span ><i className="fas fa-circle"></i></span>
                    <span style={{ color: '#5554e6' }}><i className="fas fa-circle"></i></span>
                    <span><i className="fas fa-circle"></i></span>
                </div>
            </div>
        </div>
    </>;
};

export default TestResult;
