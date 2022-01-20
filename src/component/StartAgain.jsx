import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './style.css'

const StartAgain = () => {
    const history=useHistory()
    useEffect(() => {
      setTimeout(() => {
          history.push('/')
      }, 5000);
    }, []);
    
  return <>
        <div className="container">
            <div className="row text-center">
                <div className="col-md-12">
                <img src="Group 8150.png" alt="start again for new test"  className='my-5'/>
                <p className='StartagainText'>Submission complete.</p>
                <button className='Startagainbtn btn'
                onClick={()=>{history.push('/')}}>Return to start a new test</button>
                <p className='finshFooter mt-4'>You will redirected </p>
                <p className='finshFooter mb-4'>automatically in 5 seconds ...</p>
                <p className='finshFooter mt-5'><span className='fw-bold'>Help:</span> Hello@doctegrity.com</p>
                <p className='finshFooter'><span className='fw-bold'>Contact us:</span> (877) 342-5152 </p>
                </div>
            </div>
        </div>
  </>;
};

export default StartAgain;
