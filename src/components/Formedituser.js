import React, { Component } from 'react';

class Formedituser extends Component {
 constructor(props) {
     super(props);
     this.state={
         id : this.props.editUserObject.id,
         name : this.props.editUserObject.name,
         phone : this.props.editUserObject.phone,
         status : this.props.editUserObject.status
     }
 }
 isChange = (event) => {
     const name = event.target.name;
     const value = event.target.value;
     this.setState({
         [name]:value
     });
 }
 
    render() {

        return (
            <div className="row">
               <div className="col bg-secondary"> 
                       <h2 className="text-white text-center">chinh sua thong tin</h2>
                        <form >
                        <div className="form-group">                  
                            <input defaultValue={this.props.editUserObject.name} onChange={(event)=>this.isChange(event)} className="form-control mb-3" name ="name" placeholder="name" aria-describedby="helpId" />                     
                            <input defaultValue={this.props.editUserObject.phone} onChange={(event)=>this.isChange(event)} type="text" className="form-control mb-3" name ="phone" placeholder="phone" aria-describedby="helpId" />
                            <div className="form-group">  
                            <select defaultValue={this.props.editUserObject.status} onChange={(event)=>this.isChange(event)} className="form-control" name ="status" >
                                <option value={1}> admin</option>
                                <option value={2}>nomal</option>
                            </select>
                            </div>
                        </div> 
                        <div className="form-group">
                        <input onClick={(infor)=>this.props.changeEditStatus(this.state)} className="btn btn-block btn-danger" value="luu" type="reset"/>
                        </div>
                        </form>
                       
                </div>
            </div>
        );
    }
}

export default Formedituser;