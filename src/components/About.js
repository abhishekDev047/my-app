import React from 'react'

// import PropTypes from 'prop-types'

export default function About(props) {

  // const [darkmode, setdarkmode] = useState(
  //   {
  //       backgroundColor: 'black',
  //       color: 'white'
  //   })

  //   const [btntext, setbtntext] = useState("Disable Dark Mode")

  //   const togglestyle = ()=>{
  //      if(darkmode.color === 'white'){
  //       setdarkmode({
  //           backgroundColor: 'white',
  //           color: 'black'   
  //       })
  //       setbtntext("Enable Dark Mode")
  //      } 
  //      else{
  //       setdarkmode({
  //           backgroundColor: 'black',
  //           color: 'white'   
  //       })
  //       setbtntext("Disable Dark Mode")
  //      }
  
  //   };
    
  return (
 <>
  <div className="container" style={{backgroundColor: props.mode==='light'?'white':'#333638', color: props.mode==='light'?'black':'white'}}>
    <h2 className='my-4'>About Us </h2>
    <div className="accordion" id="accordionExample">
    <div className="accordion-item" style={{backgroundColor: props.mode==='light'?'white':'#333638', color: props.mode==='light'?'black':'white'}}>
    <h2 className="accordion-header" id="headingOne">
    <button className="accordion-button" style={{backgroundColor: props.mode==='light'?'white':'#333638', color: props.mode==='light'?'black':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
    TextUtils is free to use 
    </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
    <div className="accordion-body">
    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </div>
    </div>
    </div>
    <div className="accordion-item" style={{backgroundColor: props.mode==='light'?'white':'#333638', color: props.mode==='light'?'black':'white'}}>
    <h2 className="accordion-header" id="headingTwo">
    <button className="accordion-button collapsed" style={{backgroundColor: props.mode==='light'?'white':'#333638', color: props.mode==='light'?'black':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
    Device compatible
    </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
    <div className="accordion-body">
    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </div>
    </div>
    </div>
    <div className="accordion-item" style={{backgroundColor: props.mode==='light'?'white':'#333638', color: props.mode==='light'?'black':'white'}}>
    <h2 className="accordion-header" id="headingThree">
    <button className="accordion-button collapsed" style={{backgroundColor: props.mode==='light'?'white':'#333638', color: props.mode==='light'?'black':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
    Browser compatible
    </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
    <div className="accordion-body">
    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </div>
    </div>
    </div>
    </div>
    {/* <button type='button' onClick={togglestyle} className='btn btn-primary my-4'>{btntext}</button> */}
  </div>
 </>
  )
};
