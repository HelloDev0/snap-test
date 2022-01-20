import React from 'react'
import { useHistory } from 'react-router-dom'
import './style.css'

const Login = () => {
    const history = useHistory()
    return (
        <>
            <div className='container text-center mt-5'>
                <div className="row">
                    <div className="col-sm-12 mb-4">
                        <p className='alerts fw-bold mx-auto p-2 rounded-3' >Please wait to open your COVID test; we will let you know when it is time to start!</p>
                    </div>
                    <div className="col-sm-12 mx-auto my-3" style={{ width: '35%' }}>
                        <div className="loginForm mb-4 text-start">
                            <label for="exampleFormControlInput1" className="form-label fw-bold">Company Code <span className='text-danger'>*</span></label>
                            <input type="text" className="form-control border-0"
                                id="exampleFormControlInput1" />
                        </div>
                        <div className="loginForm mb-4 text-start">
                            <label for="exampleFormControlTextarea1" className="form-label fw-bold">Employee ID #<span className='text-danger'>*</span></label>
                            <input type='text' className="form-control border-0"
                                id="exampleFormControl2" rows="3"></input>
                        </div>


                    </div>

                    <div className="col-sm-12 mt-5">
                        <div className="prevBtn btn px-5 py-2.5"
                            onClick={() => { history.push('/') }}>
                            Previous</div>
                        <div className="nextBtn btn m-3 px-5 py-2.5"
                            onClick={() => { history.push('/form') }}>
                            Next</div>
                    </div>

                    <div className="footerDot col-sm-12" style={{ marginTop: '6.8rem' }}>
                        <span ><i className="fas fa-circle"></i></span>
                        <span style={{ color: '#5554e6' }}><i className="fas fa-circle"></i></span>
                        <span><i className="fas fa-circle"></i></span>
                        <span><i className="fas fa-circle"></i></span>
                        <span><i className="fas fa-circle"></i></span>
                        <span><i className="fas fa-circle"></i></span>
                        <span><i className="fas fa-circle"></i></span>
                        <span><i className="fas fa-circle"></i></span>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Login
