import React from "react"
import { useState } from "react"
import { Modal, Button, Form } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { loginPerson } from "../../js/actions/AuthActions"
import { useDispatch } from "react-redux"

// import "./Signin.css"

const Signin = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "all",
  })
  const dispatch = useDispatch()
  const submit = ({
    email,

    password,
  }) => {
    dispatch(
      loginPerson({
        email,
        password,
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
          {" "}
          Sign IN!!
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In !</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(submit)}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Welcome,back </Form.Label>
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
              <Form.Label>Password</Form.Label>
              <Form.Control
                {...register("password", {
                  required: "password is required !!",
                  pattern: {
                    value:
                      /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/,
                    message:
                      "Password must at least Contain 6Characters ,One UpperCase,One LowerCase,One Number and one Special Case Character",
                  },
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
export default Signin
