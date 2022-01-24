import React from 'react'

const Header = () => {
    return (
        <>
            <div className="container d-flex justify-content-center mt-5"
            // style={{marginTop:'120px'}}
            >
                <div className="row">
                    <div className="col-md-12 col-sm-12 flex items-center">
                        <div>
                            <a href="https://snaptest.testbase.info/" className="custom-logo-link" rel="home">
                                <img
                                    src="SnapTest Logo.png"
                                    className="custom-logo h-100" alt="SnapTest" /></a>
                        </div>


                    </div>
                </div>

            </div>
        </>
    )
}

export default Header
