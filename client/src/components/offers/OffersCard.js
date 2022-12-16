import React, { useState } from "react"
import "./OffersCard.css"
import { useDispatch } from "react-redux"

import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"

import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
const OffersCard = ({ offer }) => {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Name :{offer.jobName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Description:{offer.jobDescription}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Place:{offer.place}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            jobRate:{offer.jobRate}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Date To Do JOb{offer.dateToDoJOb}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default OffersCard
