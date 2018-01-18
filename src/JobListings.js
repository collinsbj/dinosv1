import React from "react";

export class JobListings extends React.Component {
  render() {
    return this.props.listings.map(job => {
      let dino;
      job.interested.length == 1 ? (dino = "dino is") : (dino = "dinos are");
      return (
        <li>
          <h4>{job.title}</h4>
          <small>{job.pay}</small>
          <p>{job.description}</p>
          <small>
            {job.interested.length} {dino} interested in this job
          </small>
        </li>
      );
    });
  }
}
