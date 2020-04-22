import React, { Component }from 'react';

const TableHead = () => {
  return (
    <thead>
      <th>Code</th>
      <th>Price</th>
      <th>Description</th>
      <th>Date</th>
      <th>Delivery</th>
    </thead>
  );
}

const TableBody = props => {
  const rows = props.dels.map((del, index)=>{
    return (
      <tr key={ index }>
        <td>{ del.code }</td>
        <td>{ del.price }</td>
        <td>{ del.description }</td>
        <td>{ del.date }</td>
        <td><button onClick={()=>{ props.checkOk(index) }} className="waves-effect waves-light cyan accent-3 btn">Ok</button></td>
      </tr>
    );
  });
  return ( <tbody>{ rows }</tbody> );   
}

class Table extends Component { 
  render(){
    const { dels, checkOk } = this.props;
    return(
      <div className="centered highlight col s5 card-panel marginAndPadding">
        <h3>Pendents Deliveries</h3>
        <table>
          <TableHead />
          <TableBody dels={ dels } checkOk={ checkOk } />
        </table>
      </div>
    );
  }
}
export default Table;