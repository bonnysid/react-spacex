import React, { Component } from 'react';
import './style.css';
import Header from './components/Header';
import Main from './components/Main';
import Features from './components/Features';
import Footer from './components/Footer';
import FetchData from './service/FetchData';

export default class App extends Component{

  fetchData = new FetchData();

  state = {
    rocket: "Falcon 1",
    rocketFeatures: null,
    rockets: [],
  };

  componentDidMount() {
    this.updateRocket();
  }

  updateRocket() {
    this.fetchData.getRocket()
      .then(data => {
        this.setState({rockets: data.map(item => item.name)});
        return data;
      })
      .then(data => data.find(item => item.name === this.state.rocket))
      .then(rocketFeatures => this.setState({ rocketFeatures }));
  }

  changeRocket = rocket => {
    this.setState({
      rocket
    }, this.updateRocket)
  }

  render() {
    return (
      <>
        <Header rockets={this.state.rockets} changeRocket={this.changeRocket}/>
        <Main rocket={this.state.rocket}/>
        <Features rocketFeatures={this.state.rocketFeatures}/>
        <Footer />
      </>
    );
  }

}
