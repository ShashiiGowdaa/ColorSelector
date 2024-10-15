import React, { Component } from 'react'

export default class ColorSelector extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         color: 'color'
      }
    }
    colorSelector = (event) =>{
        this.setState({
            color: event.target.value
        })
    }
  render() {
    return (
        <div className="container mt-5">
        <div className="card p-4 shadow-sm">
          <h4 className="mb-3">Select Your Favorite Color</h4>
          <div className="form-group">
            <select
              className="form-control"
              value={this.state.color}
              onChange={this.colorSelector}>
              <option value="color">Color</option>
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
            </select>
          </div>
          {this.state.color !== 'color' && (
            <p className="mt-3">
              Your favorite color is{' '}
              <span
                className="font-weight-bold"
                style={{ color: this.state.color }}>
                {this.state.color}
              </span>.
            </p>
          )}
        </div>
      </div>
    )
  }
}
