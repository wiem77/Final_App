import React, { useState } from "react"
import "./OffersCard.css"
const OffersCard = (props) => {
  const [cards] = useState([
    {
      jobRef: 12346,
      title: "JobName222",
      description: "JobDescription222",
      jobName: "dzzdv",
      jobRate: "8",
      place: "dzdzdz",
      datOfPublish: "22-99-66",
      dateToDoJOb: "cdcdc",
      i: 3,
    },
    {
      jobRef: 12348,
      title: "JobName222",
      description: "JobDescription222",
      jobName: "dzzdv",
      jobRate: "8",
      place: "dzdzdz",
      datOfPublish: "22-99-66",
      dateToDoJOb: "cdcdc",
      i: 2,
    },
    {
      jobRef: 12349,
      title: "JobName222",
      description: "JobDescription222",
      jobName: "dzzdv",
      jobRate: "8",
      place: "dzdzdz",
      datOfPublish: "22-99-66",
      dateToDoJOb: "cdcdc",
      i: 1,
    },
  ])
  // const HandleDelete = (jobRef) => {
  //   cards.filter((el, index) => index !== jobRef)
  //   console.log(jobRef)
  // }
  return (
    <div>
      <section>
        <div className="container">
          <div className="cards">
            {cards.map((card, i) => (
              <div key={card.jobRef} className="card">
                <h3>{card.jobName}</h3>
                <p>{card.jobDescription}</p>
                <p>{card.jobRate}</p>
                <p>{card.place}</p>
                <p>{card.dateToDoJOb}</p>
                <p>{card.datOfPublish}</p>
              </div>
            ))}
            {/* <button variant="outline-success" onClick={() => HandleDelete(i)}>
              not Interested
            </button> */}
          </div>
        </div>
        <button
          variant="outline-success"
          onClick={() => window.location.reload(false)}
        >
          Click to reload!
        </button>
      </section>
    </div>
  )
}

export default OffersCard
