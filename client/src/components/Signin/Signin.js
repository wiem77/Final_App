import React from "react"
import { useState } from "react"
import { loginPerson } from "../../js/actions/AuthActions"
import { useDispatch } from "react-redux"

import "./Signin.css"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
} from "reactstrap"

const Signin = () => {
  const [modal, setModal] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const toggle = () => {
    setModal(!modal)
  }

  const dispatch = useDispatch()

  const handleLogin = () => {
    dispatch(loginPerson({ email, password }))

    setEmail("")
    setPassword("")
  }

  return (
    <div>
      <Button className="btnsignin" variant="secondary" onClick={toggle}>
        Sign in
      </Button>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Login</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                value={email}
                name="email"
                id="email"
                placeholder="email"
                className="mb-3"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Label for="password">Password</Label>
              <Input
                type="password"
                value={password}
                name="password"
                id="password"
                placeholder="Password"
                className="mb-3"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                color="dark"
                style={{ marginTop: "2rem" }}
                block
                onClick={handleLogin}
              >
                Login
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default Signin
