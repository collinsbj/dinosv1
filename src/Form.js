import React from "react";

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newData: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    var newObj = {
      title: event.target[0].value,
      pay: event.target[1].value,
      description: event.target[2].value,
      interested: []
    };
    this.props.getData(newObj);
    event.target.reset();
  }

  render() {
    return (
      <aside id="side-bar">
        <h3>Add a Job</h3>
        <form className="job-form" onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" />
          <label htmlFor="pay">Compensation</label>
          <input type="text" name="pay" />
          <label htmlFor="description">Description</label>
          <textarea name="description" rows="8" cols="40" />
          <input type="submit" name="submit" value="Submit" />
        </form>
      </aside>
    );
  }
}
