import React, { Component } from "react";
import { Header } from "./Header";
import "./App.css";
import { JobListings } from "./JobListings";
import { Form } from "./Form";
import { Footer } from "./Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.newSetState = this.newSetState.bind(this);
  }

  componentDidMount() {
    fetch("./listings.json")
      .then(response => response.json())
      .then(response => {
        this.setState({ data: response });
      })
      .catch(err => console.log(err));
  }

  newSetState(data) {
    var newData = this.state.data;
    newData.unshift(data);
    return this.setState({
      data: newData
    });
  }

  render() {
    return (
      <div id="app">
        <Header />
        <main>
          <section>
            <h2>Job Listings</h2>
            <ul id="job-listings">
              <JobListings listings={this.state.data} />
            </ul>
          </section>
          <Form getData={this.newSetState} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
