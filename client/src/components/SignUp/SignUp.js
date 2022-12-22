import React from "react"
import { useState } from "react"
import { Modal, Button, Form } from "react-bootstrap"
import "./SignUp.css"
import { useForm } from "react-hook-form"
import { registerPerson } from "../../js/actions/AuthActions"
import { useDispatch } from "react-redux"

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
  })
  const dispatch = useDispatch()
  const submit = ({ firstName, lastName, cin, email, tel, password, age }) => {
    dispatch(
      registerPerson({
        firstName,
        lastName,
        cin,
        email,
        tel,
        password,
        age,
      })
    )
  }
  console.log("errors", errors)
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <>
      <div className="btn">
        <Button variant="secondary" onClick={handleShow}>
          Sign Up
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>SignUp !</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(submit)}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Cin </Form.Label>
              <Form.Control
                {...register("cin", {
                  required: "CIN is required !!",
                  minLength: {
                    value: 8,
                    message: "CIN Must Contain 8 Number",
                  },
                  maxLength: {
                    value: 8,
                    message: "CIN Must Contain 8 Number",
                  },
                })}
                type="cin"
                placeholder="cin"
                autoFocus
              />
              <p className="errors">{errors.cin?.message}</p>

              <Form.Label>First Name</Form.Label>
              <Form.Control
                {...register("firstName", {
                  required: "firstName is required !!",
                })}
                type="firstName"
                placeholder="firstName"
                autoFocus
              />
              <p className="errors">{errors.firstName?.message}</p>

              <Form.Label>lastName</Form.Label>
              <Form.Control
                {...register("lastName", {
                  required: "LastName is required !!",
                })}
                type="lastName"
                placeholder="lastName"
                autoFocus
              />
              <p className="errors">{errors.lastName?.message}</p>

              <Form.Label>Age</Form.Label>
              <Form.Control
                {...register("age", {
                  required: "Age is required !!",
                })}
                type="age"
                placeholder="age"
                autoFocus
              />
              <p className="errors">{errors.age?.message}</p>

              <Form.Label>Email</Form.Label>
              <Form.Control
                {...register("email", {
                  required: "Email is required !!",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "email must be valid",
                  },
                })}
                type="email"
                placeholder="email"
                autoFocus
              />
              <p className="errors">{errors.email?.message}</p>

              <Form.Label>PhoneNumber</Form.Label>
              <Form.Control
                {...register("tel", {
                  required: "tel is required !!",
                  minLength: {
                    value: 8,
                    message: "Phone Number Must Contain 8 Number",
                  },
                  maxLength: {
                    value: 8,
                    message: "Phone Number Must Contain 8 Number",
                  },
                })}
                type="tel"
                placeholder="tel"
                autoFocus
              />
              <p className="errors">{errors.tel?.message}</p>

              <Form.Label>Password</Form.Label>
              <Form.Control
                {...register("password", {
                  required: "password is required !!",
                })}
                type="password"
                placeholder="password"
                autoFocus
              />
              <p className="errors">{errors.password?.message}</p>
            </Form.Group>
            <Button variant="outline-success" type="submit">
              {" "}
              Register
            </Button>{" "}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default SignUp
