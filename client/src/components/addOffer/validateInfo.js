export default function validateInfo(values) {
  let errors = {}

  if (!values.jobName.trim()) {
    errors.jobName = "Name of the Job required"
  }

  if (!values.jobDescription) {
    errors.jobDescription = " Description is required"
  } else if (values.jobDescription.length < 10) {
    errors.jobDescription = "Description needs to be 10 characters or more"
  }

  if (!values.dateToDoJOb) {
    errors.dateToDoJOb = "Date To Do JOb is required"
  } else if (
    !/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/
  ) {
    errors.dateToDoJOb = "Date To Do JOb Required"
  }
  if (!values.jobRate) {
    errors.jobRate = "Rate is required"
  } else if (values.jobRate < 8) {
    errors.dateToDoJOb = "the minimun rate is 8 for each offer"
  }
  if (!values.place) {
    errors.place = "Adress is required"
  } else if (values.place.length < 8) {
    errors.place = "Adress needs to be 8 characters or more"
  }
  return errors
}
