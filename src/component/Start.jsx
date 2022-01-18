import React from 'react'

const Start = () => {
    return (
        <>
            <div className='container text-center mt-5'>
                <p className='text-danger fw-bold fs-6 w-25 mx-auto p-2 rounded-3' style={{backgroundColor:'rgb(255 228 228 )'}}>Please wait to open your COVID test; we will let you know when it is time to start!</p>
                <h3 className='fw-bold'>Rapid COVID Testing</h3>
                <div className='nt-center-img'>
                    <img className='nt-center-img' src="https://snaptest-media-testbase.s3.amazonaws.com/web-media/uploads/2022/01/snaptest-banner.svg" alt="SnapTest Covid Testing Banner" />
                </div>
            </div>
        </>
    )
}

export default Start
