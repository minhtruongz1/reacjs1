import React, { Component } from 'react';
import TabledataRow from '../TabledataRow';

class Tableuser extends Component {
  deleteButtonClick = (idUser)=>{
    this.props.deleteUser(idUser);
  }
  mappingdata = ()=>this.props.data.map((value,key)=>(
    <TabledataRow 
    editFunClick ={(user)=> this.props.editFun(value)}
    key={key}
     stt={key+1}
      name={value.name}
       phone={value.phone}
      status={value.status}
      id={value.id}
      deleteButtonClick = {(idUser)=>this.deleteButtonClick(idUser)}
    />
  ))
    render() {
     
        return (      
          <div className="col">
           
              <table className="table table-striped table-inverse ">
                <thead className="thead-inverse">
                  <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>chuc vu</th>
                    <th>nut</th>
                  </tr>
                </thead>
                <tbody>
                 
                {this.mappingdata()}
                </tbody>
              </table>
            </div>
        
        
     
            
        );
    }
}

export default Tableuser;