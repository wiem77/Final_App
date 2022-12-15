import React, { useState } from "react"
import "./Form.css"
import FormSuccess from "./Formsucess"
import AddForm from "./AddForm"

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  function submitForm() {
    setIsSubmitted(true)
  }
  return (
    <>
      <div className="form-container">
        <span className="close-btn">×</span>
        <div className="form-content-left">
          {/* <img className='form-img' src='img/img-2.svg' alt='spaceship' /> */}
        </div>
        {!isSubmitted ? <AddForm submitForm={submitForm} /> : <FormSuccess />}
      </div>
    </>
  )
}

export default Form
