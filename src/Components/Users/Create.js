import React, {Component} from 'react';
import BreadMenu from "../Design/BreadMenu";
class Create extends Component {
  constructor(props){
    super(props);
    this.state = {value: ''};
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    this.setState({value: event.target.value});
  }
  handleSubmit(event){
    event.preventDefault();
    const data = new FormData(event.target)
    console.log(data);
  }
  render() {
    return (
      <div>
        {/* eslint-disable-next-line react/jsx-no-undef */}
          <BreadMenu name={'create nav menu'} />
        <div style={{marginTop: 10}}>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>User Name: </label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Add Name: </label>
              <input
                type="text"
                className="form-control"
                value={this.state.value} onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>Add Number: </label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Register User"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Create;
