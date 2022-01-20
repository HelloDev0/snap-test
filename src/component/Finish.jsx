import React from 'react';
import { useHistory } from 'react-router-dom';

const Finish = () => {
    const history=useHistory()
  return <>
    <div className="container">
        <div className="row text-center mt-5">
            <div className="col-md-12 ">
                <h3 className='fw-bold mx-auto' >You're done!</h3>
                <img src="Group 8151.png" alt="congratulations" className='my-3'/>
                <p className='finishtxt'>Our certified medical professionals will review your test soon.
                     Please be on the look out for an email from us with your results.</p>
            </div>
        </div>
        <div className="row text-center">
                    <div className="col-sm-12 mt-2">
                        
                        <div className="nextBtn btn m-3 px-5 py-2.5"
                            onClick={() => { history.push('/snap') }}>
                            Finish</div>
                    </div>

                    {/* <div className="footerDot col-sm-12" >
                        <span ><i className="fas fa-circle"></i></span>
                        <span ><i className="fas fa-circle"></i></span>
                        <span style={{ color: '#5554e6' }}><i className="fas fa-circle"></i></span>
                        <span><i className="fas fa-circle"></i></span>
                        <span><i className="fas fa-circle"></i></span>
                        <span><i className="fas fa-circle"></i></span>
                        <span><i className="fas fa-circle"></i></span>
                        <span><i className="fas fa-circle"></i></span>
                    </div> */}
                </div>
    </div>
  </>;
};

export default Finish;
