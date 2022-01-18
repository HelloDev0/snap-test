import React from 'react'
import { useHistory } from 'react-router-dom'

const Start = () => {
    const history=useHistory()
    return (
        <>
            <div className='container text-center mt-5'>
                <div className="row">
                    <div className="col-sm-12">
                        <p className='fw-bold fs-6 mx-auto p-2 rounded-3' style={{ backgroundColor: 'rgb(255 228 228 )', fontSize: '12px', width: '40%', color: "rgb(173 81 80 )" }}>Please wait to open your COVID test; we will let you know when it is time to start!</p>
                    </div>
                    <div className="col-sm-12">
                        <h3 className='fw-bold'>Rapid COVID Testing</h3>
                    </div>
                    <div className="col-sm-12">
                        <div className='nt-center-img'>
                            <img className='nt-center-img' src="https://snaptest-media-testbase.s3.amazonaws.com/web-media/uploads/2022/01/snaptest-banner.svg" alt="SnapTest Covid Testing Banner" />
                        </div>
                    </div>
                    <div className="col-sm-12">
                    <p className='text-secondary my-5 mx-auto' style={{ width: '40%' }}>Take your COVID test... Anytime, anyplace! Your health is our priority!</p>
                    </div>
                    <div className="col-sm-12">
                    <div className="btn py-2 px-3 my-3" style={{ backgroundColor: "#5554e6", color: '#fff' }}
                    onClick={history.push('/login')}>Start New Test</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Start
