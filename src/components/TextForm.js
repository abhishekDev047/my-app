import React, {useState} from 'react'

export default function TextForm(props)
{

    const handleUpClick = () => {
        // console.log("Uppercase was clicked " +text);
        let newtext = text.toUpperCase();
        setText(newtext) 
    }
    const handleLowClick = () => {
        // console.log("Uppercase was clicked " +text);
        let newtext = text.toLowerCase();
        setText(newtext)
    }
    const handleclearClick = () => {
        // console.log("Uppercase was clicked " +text);
        let newtext = "";
        setText(newtext)
    }
    const handletrimClick = () => {
        // console.log("Uppercase was clicked " +text);
        let newtext = text.trim();
        setText(newtext)
    }
    const handleCopyClick = () => {
      let text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();
    };

    const handleOnChange = (event) => {
        // console.log("On Change");
       setText(event.target.value);
    }
  const [text, setText] = useState('')
//   setText('new text') this is correct way to change the text....
  return (
<>
  <div className='container' style={{color: props.mode==='light'?'black':'white'}}>
    <div className="mb-3">
        <label htmlFor="myBox" className="form-label"><h1>{props.heading}</h1></label>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#333638', color: props.mode==='light'?'black':'white'}}id="myBox" rows="10"></textarea>
    </div>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}> Convert to Uppercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}> Convert to Lowercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleclearClick}> Clear all</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handletrimClick}> Trim</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopyClick}> Copy</button>
  </div>
  <div className="container my-4" style={{color: props.mode==='light'?'black':'white'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters. </p>
      <p>{ 0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read </p>
      <h3>Preview</h3>
      <p> {text}</p>
  </div>
</>
  )
};
