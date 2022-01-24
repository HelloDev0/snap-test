import React from 'react';
import { useHistory } from 'react-router-dom';


export const FinishPage = () => {
    const history = useHistory()
    return <>
        <div className="container">
            <div className="row text-center mt-5">
                <div className="col-md-12 ">
                    <h3 className='fw-bold mx-auto' >You're done!</h3>
                    <img src="images/finishBanner.png" alt="congratulations" className='my-3' />
                    <p className='finishtxt'>Our certified medical professionals will review your test soon.
                        Please be on the look out for an email from us with your results.</p>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-sm-12 mt-2">

                    <div className="nextBtn btn m-3 px-5 py-2.5"
                        onClick={() => { history.push('/final') }}>
                        Finish</div>
                </div>
                <p className='finshFooter'><span className='fw-bold'>Help:</span> Hello@doctegrity.com</p>
                <p className='finshFooter'><span className='fw-bold'>Contact us:</span> (877) 342-5152 </p>

            </div>
        </div>
    </>;
};


