import React from 'react'

const Header = () => {
    return (
        <>
            <div className="nt-header d-flex justify-content-center mt-5" 
            // style={{marginTop:'120px'}}
            >
                <div className="flex items-center">
                    <div>
                        <a href="https://snaptest.testbase.info/" className="custom-logo-link" rel="home">
                            <img width="233" height="60" 
                        src="SnapTestLogo-1.svg" 
                        className="custom-logo" alt="SnapTest"/></a>
                    </div>

                    
                </div>

            </div>
        </>
    )
}

export default Header
