import React, { useState } from "react"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap"
import { useDispatch } from "react-redux"
import { updateOffer } from "../../js/actions/AuthActions"
import ButtonM from "@mui/material/Button"

const EditModal = ({ offer }) => {
  const [modal, setModal] = useState(false)
  const [jobName, setNameOffer] = useState(offer.jobName)
  const [jobDescription, setDescription] = useState(offer.jobDescription)
  const [place, setPlace] = useState(offer.place)
  const [dateToDoJOb, setDateToDo] = useState(offer.dateToDoJOb)
  const [jobRate, setjobRate] = useState(offer.jobRate)

  const toggle = () => {
    setModal(!modal)
    setNameOffer(offer.jobName)
    setPlace(offer.place)
    setDateToDo(offer.dateToDoJOb)
    setDescription(offer.jobDescription)
    setjobRate(offer.jobRate)
  }
  const dispatch = useDispatch()
  const editt = () => {
    dispatch(
      updateOffer(offer._id, {
        jobName,
        jobDescription,
        place,
        jobRate,
        dateToDoJOb,
      })
    )
    toggle()
  }
  return (
    <div>
      <ButtonM size="small" onClick={toggle}>
        Edit OFFER{" "}
      </ButtonM>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit OFFER</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="JobName">JobName</Label>
              <Input
                value={jobName}
                onChange={(e) => setNameOffer(e.target.value)}
                type="jobName"
                name="jobName"
                id="JobName"
                placeholder="JobName"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">name</Label>
              <Input
                value={jobDescription}
                onChange={(e) => setDescription(e.target.value)}
                type="jobDescription"
                name="jobDescription"
                id="jobDescription"
                placeholder=" jobDescription"
              />
            </FormGroup>
            <FormGroup>
              <Label for="jobRate">jobRate</Label>
              <Input
                value={jobRate}
                onChange={(e) => setjobRate(e.target.value)}
                type="text"
                name="jobRate"
                id="jobRate"
                placeholder="jobRate placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="jobRate">dateToDoJOb</Label>
              <Input
                value={dateToDoJOb}
                onChange={(e) => setDateToDo(e.target.value)}
                type="text"
                name="dateToDoJOb"
                id="dateToDoJOb"
                placeholder="dateToDoJOb"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="dark" onClick={editt}>
            save
          </Button>{" "}
          <Button color="secondary">Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default EditModal
