import React from 'react'
import { useHistory } from 'react-router-dom'


export const StartPage = () => {
    const history = useHistory()
    return (
        <>
            <div className='container text-center mt-3'>
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12 ">
                        <p className='alerts fw-bold mx-auto p-2 rounded-3' >Please wait to open your COVID test; we will let you know when it is time to start!</p>
                    </div>
                    <div className="col-md-12 col-sm-12 col-xs-12  my-1">
                        <h3 className='fw-bold'>Rapid COVID Testing</h3>
                    </div>
                    <div className="col-md-12 col-sm-12 col-xs-12 ">
                        <div className='nt-center-img'>
                            <img className='nt-center-img img-fluid' src="images/startBanner.png" alt="SnapTest Covid Testing Banner" />
                        </div>
                    </div>
                    <div className="col-md-12 col-sm-12 col-xs-12 ">
                        <p className='startText text-secondary my-5 mx-auto' >Take your COVID test... Anytime, anyplace! Your health is our priority!</p>
                    </div>
                    <div className="col-md-12 col-sm-12 col-xs-12  m-1">
                        <button className="startBtn btn py-2 px-3" 
                        onClick={()=>{history.push('/login')}}
                        >Start New Test</button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

