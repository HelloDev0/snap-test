import React from 'react'
import { useHistory } from 'react-router-dom'
import "./style.css"

const Start = () => {
    const history = useHistory()
    return (
        <>
            <div className='container text-center mt-3'>
                <div className="row">
                    <div className="col-sm-12">
                        <p className='alerts fw-bold mx-auto p-2 rounded-3' >Please wait to open your COVID test; we will let you know when it is time to start!</p>
                    </div>
                    <div className="col-sm-12 my-1">
                        <h3 className='fw-bold'>Rapid COVID Testing</h3>
                    </div>
                    <div className="col-sm-12">
                        <div className='nt-center-img'>
                            <img className='nt-center-img' src="https://snaptest-media-testbase.s3.amazonaws.com/web-media/uploads/2022/01/snaptest-banner.svg" alt="SnapTest Covid Testing Banner" />
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <p className='text-secondary my-5 mx-auto' style={{ width: '30%',fontSize:'16px' }}>Take your COVID test... Anytime, anyplace! Your health is our priority!</p>
                    </div>
                    <div className="col-sm-12 m-1">
                        <button className="btn py-2 px-3" style={{ backgroundColor: "#5554e6", color: '#fff' }}
                        onClick={()=>{history.push('/login')}}
                        >Start New Test</button>
                    </div>
                    <div className="footerDot col-sm-12 mt-4">
                        <span style={{color:'#5554e6'}}><i class="fas fa-circle"></i></span>
                        <span><i class="fas fa-circle"></i></span>
                        <span><i class="fas fa-circle"></i></span>
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

export default Start
