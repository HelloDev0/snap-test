import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Footer from '../components/Footer'


export const DetailsFormPage = () => {
    const history = useHistory()
    const raceArr = ['American Indian or Alaska Native', 'Asian', 'Black or African American', 'Multi-racial', 'Native Hawaiian or other Pacific Islander', 'White', 'Other', 'Unknown', 'Prefer not to share']
    const stateArr = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Florida',
        'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
        'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
        'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
        'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin',
        'Wyoming', 'Armed Forces Americas', 'Armed Forces Europe', 'Armed Forces Pacific']

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dob, setDob] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [address, setAddress] = useState('')
    const [address2, setAddress2] = useState('')
    const [city, setCity] = useState('')
    const [states, setStates] = useState('')
    const [zip, setZip] = useState('')
    const [gender, setGender] = useState('')
    const [race, setRace] = useState('')
    const [ethnicity, setEthnicity] = useState('')
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);

    // for validation
    const [err, setErr] = useState(false);
    const [names, setNames] = useState(false);
    const [emailv, setEmailv] = useState(false)
    const [numberv, setNumberv] = useState(false)
    const [auth,setAuth]=useState(false)

    const handleSubmit = () => {

        if (!firstName || !lastName || !dob || !email || !mobile || !address || !address2 || !city || !states || !zip || !gender || !race || !ethnicity) {
            setErr(true)
        } else if (firstName.length < 3 || lastName.length < 3) {
            setNames(true)
        } else if (! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setEmailv(true)
        } else if (mobile.length < 10 || mobile.length > 10) {
            setNumberv(true)
        }
        else if (!check1 || !check2) {
            alert('Please check your identity confirmation')
            setAuth(true)
            console.log(auth);
        } else {
            history.push('/identity')
        }

    }

    return (
        <>
            <div className="formPage container">
                <div className="row my-4">
                    <div className="col-sm-12 col-xs-12 ">
                        <div className='alerts text-center mx-auto px-2 py-1 rounded-3 fw-bold' >
                            <p> Reminder <br /> Please do not open your test yet. We will let you know when it is time.</p></div>
                    </div>

                </div>
                <div className="squitch row">
                    <div className="col-md-4 col-sm-12 col-xs-12">

                        <div className="loginForm mb-4 text-start">
                            <label htmlFor="exampleFormControlInput1" className="form-label">First Name <span className='text-danger'>*</span></label>
                            {err || names ? (<input type="text"
                                className="form-control border border-danger"
                                id="exampleFormControlInput1"
                                name='firstName'
                                placeholder='Minimum 3 character'
                                value={firstName}
                                onChange={e => setFirstName(e.target.value)} />
                            ) : (
                                <input type="text"
                                    className="form-control border-0"
                                    id="exampleFormControlInput1"
                                    name='firstName'
                                    value={firstName}
                                    onChange={e => setFirstName(e.target.value)} />
                            )}
                        </div>

                    </div>
                    <div className="col-md-4 col-sm-12 col-xs-12">
                        <div className="loginForm mb-4 text-start">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Last Name <span className='text-danger'>*</span></label>
                            {err || names ? (<input type="text" className="form-control border border-danger"
                                id="exampleFormControlInput1"
                                name='lastName'
                                placeholder='Minimum 3 character'
                                value={lastName}
                                onChange={e => setLastName(e.target.value)}
                            />) : (
                                <input type="text" className="form-control border-0"
                                    id="exampleFormControlInput1"
                                    name='lastName'
                                    value={lastName}
                                    onChange={e => setLastName(e.target.value)}
                                />
                            )}
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 col-xs-12">
                        <div className="loginForm mb-4 text-start">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Date of Birth <span className='text-danger'>*</span></label>
                            {err ? (
                                <input type="date" className="form-control border border-danger" placeholder=''
                                    id="exampleFormControlInput1"
                                    name='dob'
                                    value={dob}
                                    onChange={e => setDob(e.target.value)} />
                            ) : (
                                <input type="date" className="form-control border-0" placeholder=''
                                    id="exampleFormControlInput1"
                                    name='dob'
                                    value={dob}
                                    onChange={e => setDob(e.target.value)} />
                            )}
                        </div>
                    </div>
                </div>
                <div className="squitch row">
                    <div className="col-md-6">
                        <div className="loginForm mb-4 text-start">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email Address <span className='text-danger'>*</span></label>
                            {err || emailv ? (
                                <input type="email" className="form-control border border-danger"
                                    id="exampleFormControlInput1"
                                    name='email'
                                    placeholder='i,e: example@example.com'
                                    value={email}
                                    onChange={e => setEmail(e.target.value)} />
                            ) : (
                                <input type="email" className="form-control border-0"
                                    id="exampleFormControlInput1"
                                    name='email'
                                    value={email}
                                    onChange={e => setEmail(e.target.value)} />
                            )}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="loginForm mb-4 text-start">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Mobile Phone Number<span className='text-danger'>*</span></label>
                            {err || numberv ? (
                                <input type="number" className="form-control border border-danger"
                                    id="exampleFormControlInput1"
                                    name='mobile'
                                    placeholder='Number must be of 10 digit.'
                                    value={mobile}
                                    onChange={e => setMobile(e.target.value)} />
                            ) : (
                                <input type="number" className="form-control border-0"
                                    id="exampleFormControlInput1"
                                    name='mobile'
                                    value={mobile}
                                    onChange={e => setMobile(e.target.value)} />
                            )}
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="loginForm mb-4 text-start">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Address<span className='text-danger'>*</span></label>
                            {err ? (
                                <input type="text" className="form-control border border-danger"
                                    id="exampleFormControlInput1"
                                    name='address'
                                    value={address}
                                    onChange={e => setAddress(e.target.value)} />
                            ) : (
                                <input type="text" className="form-control border-0"
                                    id="exampleFormControlInput1"
                                    name='address'
                                    value={address}
                                    onChange={e => setAddress(e.target.value)} />
                            )}
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="loginForm mb-4 text-start">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Address Line 2<span className='text-danger'>*</span></label>
                            {err ? (
                                <input type="text" className="form-control border border-danger"
                                    id="exampleFormControlInput1"
                                    name='address2'
                                    value={address2}
                                    onChange={e => setAddress2(e.target.value)} />
                            ) : (
                                <input type="text" className="form-control border-0"
                                    id="exampleFormControlInput1"
                                    name='address2'
                                    value={address2}
                                    onChange={e => setAddress2(e.target.value)} />
                            )}
                        </div>
                    </div>
                </div>
                <div className="squitch row">
                    <div className="col-md-4 col-sm-12 col-xs-12">
                        <div className="loginForm mb-4 text-start">
                            <label htmlFor="exampleFormControlInput1" className="form-label">City<span className='text-danger'>*</span></label>
                            {err ? (
                                <input type="text" className="form-control border border-danger"
                                    id="exampleFormControlInput1"
                                    name='city'
                                    value={city}
                                    onChange={e => setCity(e.target.value)} />
                            ) : (
                                <input type="text" className="form-control border-0"
                                    id="exampleFormControlInput1"
                                    name='city'
                                    value={city}
                                    onChange={e => setCity(e.target.value)} />
                            )}
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 col-xs-12">
                        <div className="loginForm mb-4 text-start">
                            <label htmlFor="exampleFormControlInput1" className="form-label">State<span className='text-danger'>*</span></label>
                            {err ? (
                                <select className="selectmenu2 mt- border border-danger px-2"
                                    aria-label="Default select example"
                                    name="states"
                                    value={states}
                                    onChange={(e) => setStates(e.target.value)}>
                                    <option selected value=''>Select ..</option>
                                    {
                                        stateArr.map((s) => {
                                            return <option value={s}>{s}</option>
                                        })
                                    }

                                </select>
                            ) : (
                                <select className="selectmenu2 mt- border-0 px-2"
                                    aria-label="Default select example"
                                    name="states"
                                    value={states}
                                    onChange={(e) => setStates(e.target.value)}>
                                    <option selected value=''>Select ..</option>
                                    {
                                        stateArr.map((s) => {
                                            return <option value={s}>{s}</option>
                                        })
                                    }

                                </select>
                            )}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="loginForm mb-4 text-start">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Zip Code<span className='text-danger'>*</span></label>
                            {err ? (
                                <input type="text" className="form-control border border-danger"
                                    id="exampleFormControlInput1"
                                    name='zip'
                                    value={zip}
                                    onChange={e => setZip(e.target.value)} />
                            ) : (
                                <input type="text" className="form-control border-0"
                                    id="exampleFormControlInput1"
                                    name='zip'
                                    value={zip}
                                    onChange={e => setZip(e.target.value)} />
                            )}
                        </div>
                    </div>
                </div>
                <div className="squitch row">
                    <div className="col-md-4">
                        <div className="loginForm mb-4 text-start">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Gender (at birth)<span className='text-danger'>*</span></label>
                            {err ? (
                                <select className="selectmenu2 mt-3 border border-danger px-2"
                                    aria-label="Default select example"
                                    name="gender"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}>
                                    <option defaultValue="">Select ..</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                    <option value="Unknown">Unknown</option>
                                </select>
                            ) : (
                                <select className="selectmenu2 mt-3 border-0 px-2"
                                    aria-label="Default select example"
                                    name="gender"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}>
                                    <option selected value="">Select ..</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                    <option value="Unknown">Unknown</option>
                                </select>
                            )}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="loginForm mb-4 text-start">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Race<span className='text-danger'>*</span></label>
                            {err ? (
                                <select className="selectmenu2 mt-3 border border-danger px-2"
                                    aria-label="Default select example"
                                    name="race"
                                    value={race}
                                    onChange={(e) => setRace(e.target.value)}>
                                    <option selected value=''>Select ..</option>
                                    {raceArr.map(p => {
                                        return <option value={p}>{p}</option>
                                    })}

                                    {/* <option value="2">Positive</option>
                                <option value="3">Don't Know</option> */}
                                </select>) : (
                                <select className="selectmenu2 mt-3 border-0 px-2"
                                    aria-label="Default select example"
                                    name="race"
                                    value={race}
                                    onChange={(e) => setRace(e.target.value)}>
                                    <option selected value=''>Select ..</option>
                                    {raceArr.map(p => {
                                        return <option value={p}>{p}</option>
                                    })}

                                    {/* <option value="2">Positive</option>
                                <option value="3">Don't Know</option> */}
                                </select>
                            )}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="loginForm mb-4 text-start">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Ethnicity<span className='text-danger'>*</span></label>
                            {err ? (
                                <select className="selectmenu2 mt-3 border border-danger px-2"
                                    aria-label="Default select example"
                                    name="ethnicity"
                                    value={ethnicity}
                                    onChange={(e) => setEthnicity(e.target.value)}>
                                    <option selected value=''>Select ..</option>
                                    <option value="Hispanic or Spanish origin">Hispanic or Spanish origin</option>
                                    <option value="Not Hispanic or Spanish origin">Not Hispanic or Spanish origin</option>
                                    <option value="Prefer not to share">Prefer not to share</option>
                                </select>
                            ) : (
                                <select className="selectmenu2 mt-3 border-0 px-2"
                                    aria-label="Default select example"
                                    name="ethnicity"
                                    value={ethnicity}
                                    onChange={(e) => setEthnicity(e.target.value)}>
                                    <option selected value=''>Select ..</option>
                                    <option value="Hispanic or Spanish origin">Hispanic or Spanish origin</option>
                                    <option value="Not Hispanic or Spanish origin">Not Hispanic or Spanish origin</option>
                                    <option value="Prefer not to share">Prefer not to share</option>
                                </select>
                            )}
                        </div>
                    </div>
                    {auth===true?(
                    <div className="col-md-12 text-danger" >
                        <div className="form-check mx-auto mx-0 p-0 my-2" style={{ width: '400px' }}>
                            <label htmlFor="exampleFormControlInput1" className="form-label text-start fw-normal">Identity Confirmation<span className='text-danger'>*</span></label>
                        </div>

                    
                        <div className="form-check mx-auto mb-3" style={{ width: '400px' }}>
                            <input className="form-check-input ml-0 "
                                type="checkbox" value='' onChange={() => setCheck1(!check1)} id="flexCheckDefault" />

                            <label className="formDeclare form-check-label fw-normal" htmlFor="flexCheckDefault">
                                I hereby verify that all the information provided above is true and accurate.
                            </label>
                        </div>
                        <div className="form-check mx-auto mb-3" style={{ width: '400px' }}>
                            <input className="form-check-input ml-0 " type="checkbox" value=''
                                onChange={() => setCheck2(!check2)} id="flexCheckDefault" />

                            <label className="form-check-label fw-normal" htmlFor="flexCheckDefault">
                                Terms & Conditions <span className='text-danger'>*</span>
                            </label>
                        </div>
                        
                    </div>
                    ):(
                        <div className="col-md-12 col-sm-12 col-xs-12" >
                        <div className="form-check mx-auto mx-0 p-0 my-2" style={{ width: '400px' }}>
                            <label htmlFor="exampleFormControlInput1" className="form-label text-start fw-normal">Identity Confirmation<span className='text-danger'>*</span></label>
                        </div>

                    
                        <div className="form-check mx-auto mb-3" style={{ width: '400px' }}>
                            <input className="form-check-input ml-0 "
                                type="checkbox" value='' onChange={() => setCheck1(!check1)} id="flexCheckDefault" />

                            <label className="formDeclare form-check-label fw-normal" htmlFor="flexCheckDefault">
                                I hereby verify that all the information provided above is true and accurate.
                            </label>
                        </div>
                        <div className="form-check mx-auto mb-3" style={{ width: '400px' }}>
                            <input className="form-check-input ml-0 " type="checkbox" value=''
                                onChange={() => setCheck2(!check2)} id="flexCheckDefault" />

                            <label className="form-check-label fw-normal" htmlFor="flexCheckDefault">
                                Terms & Conditions <span className='text-danger'>*</span>
                            </label>
                        </div>
                        
                    </div>
                    )}
                    


                </div>
                <div className="row text-center">
                    <div className="col-sm-12 col-xs-12 mt-2 ">
                        <div className="prevBtn btn px-5 py-2.5"
                            onClick={() => { history.push('/login') }}>
                            Previous</div>
                        <div className="nextBtn btn m-3 px-5 py-2.5"
                            onClick={handleSubmit}>
                            Next</div>
                    </div>

                    <Footer index={2} />
                </div>




            </div>
        </>
    )
}


