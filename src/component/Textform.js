import React,{useState} from 'react'

export default function Textform(prop) {
  const[text,settext]=useState('');  

  const handleupclick = ()=>{
    console.log("" + text )
    let newtext = text.toUpperCase();
    settext(newtext)
    
  }
  const handlelwclick = ()=>{
    console.log("" + text )
    let newtext = text.toLowerCase();
    settext(newtext)
    
  }

  const handelonchange = (event)=>{
    settext(event.target.value)
  }
  return (
<div>
   <div className="mb-3">
    <h4  className='mb-3'>{prop.heading}</h4>
    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='Enter Your Message' onChange={handelonchange} value={text} rows="8"></textarea>
      <button type="submit" className="btn btn-primary mt-3" onClick={handleupclick}>Covert To Uppercase</button>

      <button type="submit" className="btn btn-primary mt-3 mx-2" onClick={handlelwclick}>Covert To Lowercase</button>

  </div>
  </div>
  )
}
