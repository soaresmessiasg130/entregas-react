import React, { Component } from 'react';

class FormAddDels extends Component {
  constructor(props) {
    super(props);
    this.stateInitial = {
      code:'',
      price:'',
      description:'',
      date:'',
    }
    this.state = this.stateInitial;
  }

  observerInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  scheduleAnDel = () => {
    this.props.listenerForm(this.state);
    this.setState(this.stateInitial);
  }

  render(){
    const { code, price, description, date} = this.state;
    return(
      <form className="col s5 card-panel marginAndPadding">
        <h3>Schedule an order</h3>
        
        <div className="row">
          <div className="col s4">      
            <label htmlFor='code'>Client code: </label>
            <input id="code" name="code" type="text" vale={ code } onChange={ this.observerInput }/>
          </div>
          <div className="col s4">
            <label htmlFor='price'>Price: </label>
            <input id="price" name="price" type="text" value={ price } onChange={ this.observerInput }/>
          </div>
          <div className="col s4">
            <label htmlFor='date'>Delievery date: </label>
            <input id="date" name="date" type="text" value={ date } onChange={ this.observerInput }/>
          </div>
          <div className="col s12">
            <label htmlFor='description'>Description: </label> 
            <input id="description" name="description" type="text" value={ description } onChange={ this.observerInput }/>
          </div>
          <div className="col s4">
            <button className="waves-effect waves-light green accent-3 btn" onClick={ this.scheduleAnDel } type='button'>Schedule</button>
          </div>
        </div>
      </form>
    );
  }
}

export default FormAddDels;