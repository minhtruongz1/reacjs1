import React, { Component } from 'react';
import Formedituser from './Formedituser';

class Seachform extends Component {
    constructor(props) {
        super(props);
        this.state={
            dl:''
        }
    }
    
    nutkichhoat = () => {
        if(this.props.hienthiform === true){
            return <div onClick={()=>this.props.ketnoi()} className="btn btn-block btn-danger mb-4"> dong</div>
        }else{
           return <div className="btn btn-block btn-secondary mb-4" onClick={()=>this.props.ketnoi()}>them moi thanh vien</div>
        }
    }
    isChange = (event)=>{
        this.setState({
            dl : event.target.value
        });
        this.props.checkConnect(this.state.dl);
    }
    showFormEdit =()=> {
        if(this.props.editUserStatus===true){
             return  (<Formedituser 
                    editUserObject= {this.props.editUserObject}
                     changeEditStatus ={(infor)=>this.props.changeEditStatus(infor)} />)
        }
       
    }


    render() {
      
        return (
            <div className="container">
              {this.showFormEdit()}
                <form className="form-inline active-cyan-4">
                <input className="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search" aria-label="Search"
                onChange={(event)=>this.isChange(event)} />
                <div className="btn btn-outline-primary" onClick ={()=> this.props.checkConnect(this.state.dl)}>Tìm</div>
                </form>
                <hr />
                {this.nutkichhoat()}
            </div>
        );
    }
}

export default Seachform;