import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../components/Footer";


export const LoginPage = () => {
    const history = useHistory()
    const [code, setCode] = useState("")
    const [empid, setEmpid] = useState("")
    const [codee, setCodee] = useState(false);
    const [empide, setEmpide] = useState(false)

    const nextForm = () => {
        validate()
        
    }

    const validate = () => {

        if (code.length < 6) {
            setCodee(true)
        }
        else if (empid.length < 6) {
            setCodee(false)
            setEmpide(true)
        }
        else {
            setEmpide(false)
            setCodee(false)
            history.push('/detailsform')
        }

    };


    return (
        <>
            <div className="container text-center mt-5">
                <div className="row">
                    <div className="col-md-12 col-xs-12 mb-4">
                        <p className="alerts fw-bold mx-auto p-2 rounded-3">
                            Please wait to open your COVID test; we will let you know when it
                            is time to start!
                        </p>
                    </div>
                    <div className="col-md-12 col-xs-12 mx-auto my-3 " style={{ width: "435px" }}>
                        <div className="loginForm mb-4 text-start ">
                            <label htmlFor="exampleFormControlInput1" className="form-label fw-bold">Company Code <span className='text-danger'>*</span></label>

                            {codee ? (<input type="text"
                                className="form-control border border-danger"
                                id="exampleFormControlInput1"
                                name="code"
                                minLength='6'
                                value={code}
                                onChange={e => setCode(e.target.value)}

                            />) : (
                                <input type="text"
                                    className="form-control border-0"
                                    id="exampleFormControlInput1"
                                    name="code"
                                    minLength='6'
                                    value={code}
                                    onChange={e => setCode(e.target.value)}

                                />
                            )}
                        </div>
                        <div className="loginForm mb-4 text-start ">
                            <label
                                htmlFor="exampleFormControlTextarea1" className="form-label fw-bold">
                                Employee ID #<span className="text-danger">*</span>
                            </label>
                            {empide ? (
                                <input
                                    type="text"
                                    className="form-control border border-danger"
                                    id="exampleFormControl2"
                                    name="employeeId"
                                    minLength='6'
                                    rows="3"
                                    value={empid}
                                    onChange={(e) => { setEmpid(e.target.value) }}
                                />) : (
                                <input
                                    type="text"
                                    className="form-control border-0"
                                    id="exampleFormControl2"
                                    name="employeeId"
                                    minLength='6'
                                    rows="3"
                                    value={empid}
                                    onChange={(e) => { setEmpid(e.target.value) }}
                                />
                            )}
                        </div>
                    </div>

                    <div className="col-sm-12 col-xs-12 mt-5">
                        <div className="prevBtn btn px-5 py-2.5"
                            onClick={() => { history.push('/') }}>
                            Previous</div>
                        <div className="nextBtn btn m-3 px-5 py-2.5"
                            onClick={nextForm}>
                            Next</div>
                    </div>

                    <Footer index={1} />
                </div>
            </div>
        </>
    );
};

