import React from "react"
import EditModal from "./EditModel"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { delteOffer } from "../../js/actions/AuthActions"
import { useDispatch } from "react-redux"
import "./MyOffer.css"
function MyOffer() {
  const dispatch = useDispatch()
  // const getOffer = () => {
  //   dispatch(getOfferByid(offer._id))
  // }

  const deletOffer = () => {
    dispatch(delteOffer(offer._id))
  }
  const offer = {
    jobName: "babysitting",
    jobDescription: "aaaaaaaaaaaaaaaaaaaaaaaaaaa",
    place: "sousse hammam sousse",
    jobRate: 15,
  }
  return (
    <div>
      <div className="img">
        <div className="cardOff">
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {/* {offer.jobName}
            {offer.jobRef} */}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {/* {offer.jobDescription} */}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {/* {offer.place} */}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {/* {offer.jobRate} */}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {/* Date To Do JOb{offer.dateToDoJOb} */}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={deletOffer}>
                Delete
              </Button>

              <EditModal offer={offer} />
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default MyOffer
