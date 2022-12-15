import React from "react"
import validate from "./validateInfo"
import UseForm from "./UseForm"
import "./Form.css"

const AddForm = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = UseForm(
    submitForm,
    validate
  )

  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>ADD the Offer that you want</h1>
        <div className="form-inputs">
          <label className="form-label">Name Of the Job</label>
          <input
            className="form-input"
            type="text"
            name="jobName"
            placeholder="Enter the Job Name"
            value={values.jobName}
            onChange={handleChange}
          />
          {errors.jobName && <p>{errors.jobName}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Description</label>
          <input
            className="form-input"
            type="jobDescription"
            name="jobDescription"
            placeholder="Enter the job description write all the details"
            value={values.jobDescription}
            onChange={handleChange}
          />
          {errors.jobDescription && <p>{errors.jobDescription}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Adresse</label>
          <input
            className="form-input"
            type="place"
            name="place"
            placeholder="Enter The exacte Adresse"
            value={values.place}
            onChange={handleChange}
          />
          {errors.place && <p>{errors.place}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">how much cost this job</label>
          <input
            className="form-input"
            type="jobRate"
            name="jobRate"
            placeholder="Confirm your password"
            value={values.jobRate}
            onChange={handleChange}
          />
          {errors.jobRate && <p>{errors.jobRate}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Date to do the job</label>
          <input
            className="form-input"
            type="dateToDoJOb"
            name="dateToDoJOb"
            placeholder="Confirm the Date to do job"
            value={values.dateToDoJOb}
            onChange={handleChange}
          />
          {errors.dateToDoJOb && <p>{errors.dateToDoJOb}</p>}
        </div>
        <button className="form-input-btn" type="submit">
          Add
        </button>
      </form>
    </div>
  )
}

export default AddForm
