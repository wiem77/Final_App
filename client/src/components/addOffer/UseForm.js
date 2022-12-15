import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { addOffer } from "../../js/actions/AuthActions"
const UseForm = (callback, validate) => {
  const [values, setValues] = useState({
    jobDescription: "",
    jobRate: "",
    dateToDoJOb: "",
    jobName: "",
    place: "",
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const dispatch = useDispatch()
  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(validate(values))
    setIsSubmitting(true)
    dispatch(addOffer(values))
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback()
    }
  }, [errors])

  return { handleChange, handleSubmit, values, errors }
}

export default UseForm
