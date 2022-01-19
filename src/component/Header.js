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
                        src="https://snaptest-media-testbase.s3.amazonaws.com/web-media/uploads/2022/01/SnapTestLogo-1.svg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQCTZGOYU2ENGOURT%2F20220119%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220119T052938Z&X-Amz-SignedHeaders=host&X-Amz-Expires=21600&X-Amz-Signature=27a8e47109f02eb4dc48940fa02e4562386374a6ea8b2a9539fed54b38d82163" 
                        className="custom-logo" alt="SnapTest"/></a>
                    </div>

                    
                </div>

            </div>
        </>
    )
}

export default Header
