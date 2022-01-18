import React from 'react'

const Header = () => {
    return (
        <>
            <div className="nt-header d-flex justify-content-center mt-3" 
            // style={{marginTop:'120px'}}
            >
                <div className="flex justify-between items-center">
                    <div>
                        <a href="https://snaptest.testbase.info/" className="custom-logo-link" rel="home">
                            <img width="233" height="60" 
                        src="https://snaptest-media-testbase.s3.amazonaws.com/web-media/uploads/2022/01/SnapTestLogo-1.svg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQCTZGOYU2ENGOURT%2F20220118%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220118T120510Z&X-Amz-SignedHeaders=host&X-Amz-Expires=21600&X-Amz-Signature=459ee0f756c5cd05982daff9b5708fbe8e7b8474006a1ab6ec8207e13a87d10e" 
                        className="custom-logo" alt="SnapTest"/></a>
                    </div>

                    <div className="lg:hidden">
                        {/* <a href="" aria-label="Toggle navigation" id="primary-menu-toggle">
                            <svg viewBox="0 0 20 20" class="inline-block w-6 h-6" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g stroke="none" stroke-width="1" fill="currentColor" fill-rule="evenodd">
                                    <g id="icon-shape">
                                        <path d="M0,3 L20,3 L20,5 L0,5 L0,3 Z M0,9 L20,9 L20,11 L0,11 L0,9 Z M0,15 L20,15 L20,17 L0,17 L0,15 Z" id="Combined-Shape"></path>
                                    </g>
                                </g>
                            </svg>
                        </a> */}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Header
