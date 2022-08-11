import React, { Component } from 'react';
import './App.css'
import Nav from './Components/Nav/Nav';
import './Components/Nav/Nav.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'editing',
      sidebar: {
        topRow: {
            name: "",
            imgFile: null,
        },
        middleRow: {

        },
        bottomRow: {

        },
      },
      file: null,
    }
    this.onSubmit=this.onSubmit.bind(this);
    this.onImgUpload = this.onImgUpload.bind(this)
  }


  switchMode = (e) => e.target.checked ? this.setState({mode: 'previewing'}) : this.setState({mode: 'editing'})
  onNameInputUpdate = (e) => this.setState({sidebar:{topRow: {name: e.target.value, imgFile: this.state.sidebar.topRow.imgFile}}})
  onImgUpload = (e) => this.setState({sidebar: {topRow: {imgFile: URL.createObjectURL(e.target.files[0])}}})
  onSubmit = (e) => e.preventDefault();

  render() { 
    return (
      <div className="App">
        <div className="nav">
          <Nav mode={this.state.mode}/>
          <div className='modetoggle'>
            <input type="checkbox" id="switch" onChange={this.switchMode}/><label htmlFor="switch" className='switchLabel'>Toggle</label>
          </div>
        </div>
        <div className="main">
          <div className="main--sidebar">
            <div className="sidebar--form--container">
              <form action="" className="sidebar--form">
              <div className="formrow--container">
                <input type="text" id="name" value={this.state.sidebar.topRow.name} onChange={this.onNameInputUpdate} placeholder="Your Name" className='user--name' required/>
                {this.state.sidebar.topRow.imgFile? null : <input type="file" onChange={this.onImgUpload} required/>}
                <img src={this.state.sidebar.topRow.imgFile} className="user--image" required/>
              </div>
              <div className="formrow--container">
              </div>
              <div className="formrow--container">
              </div>
              </form>

            </div>


          </div>
          <div className="main-app"></div>
        </div>
        <div className="footer"></div>
      </div>
    )
  }
}
 
export default App;