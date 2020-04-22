import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

import NavBarDefault from './components/navbar';
import Table from './components/table';
import FormAddDels from './components/form';
import './App.css';

class App extends Component {

  state = {
    dels: [
      {
        'code':'8891291',
        'price':20,
        'description':'Pizza dupla: Calabreza/Queijos',
        'date':'2020-04-12 22:10',
      },
      {
        'code':'8891291',
        'price':20,
        'description':'Pizza dupla: Calabreza/Queijos',
        'date':'2020-04-12 22:10',
      },
      {
        'code':'8891291',
        'price':20,
        'description':'Pizza dupla: Calabreza/Queijos',
        'date':'2020-04-12 22:10',
      },
      {
        'code':'8891291',
        'price':20,
        'description':'Pizza dupla: Calabreza/Queijos',
        'date':'2020-04-12 22:10',
      },
      {
        'code':'8891291',
        'price':20,
        'description':'Pizza dupla: Calabreza/Queijos',
        'date':'2020-04-12 22:10',
      },
      {
        'code':'8891291',
        'price':20,
        'description':'Pizza dupla: Calabreza/Queijos',
        'date':'2020-04-12 22:10',
      },
      {
        'code':'8891291',
        'price':20,
        'description':'Pizza dupla: Calabreza/Queijos',
        'date':'2020-04-12 22:10',
      },
      {
        'code':'8891291',
        'price':20,
        'description':'Pizza dupla: Calabreza/Queijos',
        'date':'2020-04-12 22:10',
      },
      {
        'code':'8891291',
        'price':20,
        'description':'Pizza dupla: Calabreza/Queijos',
        'date':'2020-04-12 22:10',
      },
      {
        'code':'6881727',
        'price':100,
        'description':'3 - Pizza dupla: Calabreza/Queijos',
        'date':'2020-04-12 19:10',
      }   
    ],
  };
  checkOk=index=>{
    const { dels } = this.state;
    this.setState({
      dels: dels.filter((code, pos)=>{
        console.log(index, pos);
        return index !== pos;
      }),
    });
  }
  listenerForm = del => {
    this.setState({ dels: [...this.state.dels, del ] });
  }
  render () { 
    return (
      <Fragment>
        <NavBarDefault /> 
        <div className="row marginAndPadding">
          <FormAddDels listenerForm={ this.listenerForm } />
          <Table dels={ this.state.dels } checkOk={ this.checkOk } />  
        </div>
      </Fragment>
    );
  };
}

export default App;
