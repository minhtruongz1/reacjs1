import React, { Component } from 'react';

class Inputuser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:'',
            name:'',
            phone:'',
            status:''
        }
    }
    
    isChange = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
        // var item = {};
        // item.id = this.state.id;
        // item.name= this.state.name;
        // item.phone = this.state.phone;
        // item.status = this.state.status;
        
    }

    hienthi=()=>{
        if(this.props.hienthiform===true){
            return ( <div className="col"> 
                       <h2>them moi thanh vien</h2>
                        <form >
                        <div className="form-group">                  
                            <input onChange={(event)=>this.isChange(event)} type="text"  className="form-control mb-3" name ="name" placeholder="name" aria-describedby="helpId" />                     
                            <input onChange={(event)=>this.isChange(event)} type="text" className="form-control mb-3" name ="phone" placeholder="phone" aria-describedby="helpId" />
                            <div className="form-group">  
                            <select defaultValue="2" onChange={(event)=>this.isChange(event)} className="form-control" name ="status" >
                                <option value= "1"> admin</option>
                                <option value="2">nomal</option>
                            </select>
                            </div>
                        </div> 
                        <div className="form-group">
                        <input onClick={(name,phone,status)=>this.props.add(this.state.name, this.state.phone, this.state.status)} className="btn btn-block btn-primary" value="them moi" type="reset"/>
                        </div>
                        </form>
                       
                </div>
                )
        }
    }
  
    render() {
     //console.log(this.state.aritem);
        return (
        
                  <div >
                 
                   {this.hienthi()}
                </div>
           
        );
    }
}

export default Inputuser;