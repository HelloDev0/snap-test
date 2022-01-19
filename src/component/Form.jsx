import React from 'react'
import { useHistory } from 'react-router-dom'
import './style.css'

const Form = () => {
    const history=useHistory()
    return (
        <>
            <div className="container">
                <div className="row my-4">
                    <div className="col-sm-12 ">
                        <p className='alerts fw-bold mx-auto p-2 rounded-3' >
                        Reminder Please do not open your test yet. We will let you know when it is time.</p>
                    </div>

                </div>
                <div className="squitch row">
                    <div className="col-md-4">
                        <div class="loginForm mb-4 text-start">
                            <label for="exampleFormControlInput1" class="form-label fw-bold">First Name <span className='text-danger'>*</span></label>
                            <input type="text" class="form-control border-0"
                                id="exampleFormControlInput1" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="loginForm mb-4 text-start">
                            <label for="exampleFormControlInput1" class="form-label fw-bold">Last Name <span className='text-danger'>*</span></label>
                            <input type="text" class="form-control border-0"
                                id="exampleFormControlInput1" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="loginForm mb-4 text-start">
                            <label for="exampleFormControlInput1" class="form-label fw-bold">Date of Birth <span className='text-danger'>*</span></label>
                            <input type="text" class="form-control border-0"
                                id="exampleFormControlInput1" />
                        </div>
                    </div>
                </div>
                <div className="squitch row">
                    <div className="col-md-6">
                        <div class="loginForm mb-4 text-start">
                            <label for="exampleFormControlInput1" class="form-label fw-bold">Email Address <span className='text-danger'>*</span></label>
                            <input type="text" class="form-control border-0"
                                id="exampleFormControlInput1" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="loginForm mb-4 text-start">
                            <label for="exampleFormControlInput1" class="form-label fw-bold">Mobile Phone Number<span className='text-danger'>*</span></label>
                            <input type="text" class="form-control border-0"
                                id="exampleFormControlInput1" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div class="loginForm mb-4 text-start">
                            <label for="exampleFormControlInput1" class="form-label fw-bold">Address<span className='text-danger'>*</span></label>
                            <input type="text" class="form-control border-0"
                                id="exampleFormControlInput1" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div class="loginForm mb-4 text-start">
                            <label for="exampleFormControlInput1" class="form-label fw-bold">Address Line 2<span className='text-danger'>*</span></label>
                            <input type="text" class="form-control border-0"
                                id="exampleFormControlInput1" />
                        </div>
                    </div>
                </div>
                <div className="squitch row">
                    <div className="col-md-4">
                        <div class="loginForm mb-4 text-start">
                            <label for="exampleFormControlInput1" class="form-label fw-bold">City<span className='text-danger'>*</span></label>
                            <input type="text" class="form-control border-0"
                                id="exampleFormControlInput1" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="loginForm mb-4 text-start">
                            <label for="exampleFormControlInput1" class="form-label fw-bold">State<span className='text-danger'>*</span></label>
                            <input type="text" class="form-control border-0"
                                id="exampleFormControlInput1" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="loginForm mb-4 text-start">
                            <label for="exampleFormControlInput1" class="form-label fw-bold">Zip Code<span className='text-danger'>*</span></label>
                            <input type="text" class="form-control border-0"
                                id="exampleFormControlInput1" />
                        </div>
                    </div>
                </div>
                <div className="squitch row">
                    <div className="col-md-4">
                        <div class="loginForm mb-4 text-start">
                            <label for="exampleFormControlInput1" class="form-label fw-bold">Gender (at birth)<span className='text-danger'>*</span></label>
                            <input type="text" class="form-control border-0"
                                id="exampleFormControlInput1" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="loginForm mb-4 text-start">
                            <label for="exampleFormControlInput1" class="form-label fw-bold">Race<span className='text-danger'>*</span></label>
                            <input type="text" class="form-control border-0"
                                id="exampleFormControlInput1" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="loginForm mb-4 text-start">
                            <label for="exampleFormControlInput1" class="form-label fw-bold">Ethnicity<span className='text-danger'>*</span></label>
                            <input type="text" class="form-control border-0"
                                id="exampleFormControlInput1" />
                        </div>
                    </div>
                    <div className="col-md-12 " >
                        <div className="form-check mx-auto mx-0 p-0 my-2" style={{width:'400px'}}>
                        <label for="exampleFormControlInput1" class="form-label fw-bold text-start">Identity Confirmation<span className='text-danger'>*</span></label>
                        </div>
                    
                        <div class="form-check mx-auto mb-3" style={{width:'400px'}}>
                            
                            <input class="form-check-input ml-0" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                            I hereby verify that all the information provided above is true and accurate.
                            </label>
                        </div>
                        <div class="form-check mx-auto mb-3" style={{width:'400px'}}>
                            
                            <input class="form-check-input ml-0" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                            Terms & Conditions <span className='text-danger'>*</span>
                            </label>
                        </div>
                    </div>
                    

                </div>
                <div className="row text-center">
                <div className="col-sm-12 mt-2">
                        <div className="prevBtn btn px-5 py-2.5" 
                        onClick={()=>{history.push('/login')}}>
                            Previous</div>
                        <div className="nextBtn btn m-3 px-5 py-2.5"
                        onClick={()=>{history.push('/snap')}}>
                            Next</div>
                    </div>

                    <div className="footerDot col-sm-12" >
                        <span ><i class="fas fa-circle"></i></span>
                        <span ><i class="fas fa-circle"></i></span>
                        <span style={{ color: '#5554e6' }}><i class="fas fa-circle"></i></span>
                        <span><i class="fas fa-circle"></i></span>
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

export default Form
