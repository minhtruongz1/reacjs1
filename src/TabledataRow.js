import React, { Component } from 'react';

class TabledataRow extends Component {

    chucvu = ()=>{
        if(this.props.status ==1){
            return "admin"
        }else if(this.props.status ==2){
            return "nomal"
        }else{
            return "nv"
        }
    }
    deleteButtonClick = (idUser) =>{
      this.props.deleteButtonClick(idUser);
    }
    render() {
        return (
            <tr>    
                    <td scope="row">{this.props.stt}</td>
                    <td >{this.props.name}</td>
                    <td>{this.props.phone}</td>
                    <td>{this.chucvu()}</td>
                    <td>
                      <div className="btn-group" role="group">
                        <div className="btn btn-danger" onClick={()=>this.props.editFunClick()}>sua</div>
                        <div className="btn btn-primary" onClick ={(idUser)=>this.deleteButtonClick(this.props.id)}>xoa</div>
                      </div>
                    </td>
                </tr>
        );
    }
}

export default TabledataRow;