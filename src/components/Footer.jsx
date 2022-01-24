import { useState } from "react";

const Footer = (props) => {
    const [index] = useState(props.index)
    
    // console.log(index);
    const footerArr=[1,2,3,4,5,6]
    
    return <>
        <div className="footerDot col-sm-12 mt-4">
            {
                footerArr.map((val,i)=>{
                   

                    if(val===index) {
                        
                        return <span key={i} style={{ color: '#5554e6' }}><i className="fas fa-circle"></i></span>
                    }else{
                        return <span key={i} ><i className="fas fa-circle"></i></span>
                    }
                   
                })
            }

        </div>
    </>;
};

export default Footer;
