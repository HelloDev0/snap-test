import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Footer from '../components/Footer'


export const InstructionPage = () => {
    const history = useHistory()
    const [video,setVideo]=useState(null)
    // console.log("cehek it",video);
    return (
        <>
            <div className="container">
                <div className="row my-4">
                    <div className="col-sm-12 ">
                        <p className='alerts fw-bold mx-auto p-2 rounded-3 text-center' >
                            We are almost ready! Here's how it works
                        </p>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6 text-center my-2 ">
                    {!video ?(
                        <div className='text-start mx-auto'
                        style={{paddingLeft:'18.5%'}}
                        >
                            <p className='fw-bold'
                                style={{ color: '#5554e6' }}
                                > How to take your COVID test:</p>
                            <p> 1) Let's review what's in your kit</p>
                            <p>   2) How to take your test</p>
                            <p>   3) What results look like</p>
                            <p>  4) Let's see your results! Hold up the test for us to take a look</p>
                        </div>
                        ):(
                            <div className='mx-auto'>
                                <iframe width="80%" height="315" src="https://www.youtube.com/embed/qBt_H4Gc-rU" title="YouTube video player"
                                 frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                
                            </div>
                        )}
                        {!video?(
                        <div className='d-flex justify-content-center'>
                            <button className='instBtn btn px-4 py-2 my-3'
                            onClick={()=>{setVideo(true)}}
                            > <i class="fas fa-play" style={{paddingRight:'5px'}}></i>Watch Instructional Video</button>
                        </div>
                        ):(
                            <div className='d-flex justify-content-center'>
                            {/* <button className='instBtn btn px-4 py-2 my-3'
                            onClick={()=>{setVideo(null)}}
                            > Close</button> */}
                            <h5 className='mt-4 ' 
                            style={{ cursor:'pointer' ,color:'#5554e6',fontWeight:'600'}} onClick={()=>{setVideo(null)}}>Close Video Tutorial</h5>
                        </div>
                        )}
                        <div className='d-flex justify-content-center'>
                            {/* <a href="https://youtu.be/qBt_H4Gc-rU" className='text-decoration-none text-dark'> https://youtu.be/qBt_H4Gc-rU</a> */}
                        </div>
                    </div>
                </div>
                <div className="row text-center mt-5">
                    <div className="col-sm-12 mt-2">
                        <div className="prevBtn btn px-5 py-2.5"
                            onClick={() => { history.push('/identity') }}>
                            Previous</div>
                        <div className="nextBtn btn m-3 px-5 py-2.5"
                            onClick={() => { history.push('/recordvideo') }}>
                            Next</div>
                    </div>

                    <Footer index={4} />
                </div>
            </div>
        </>
    )
}


