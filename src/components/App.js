import React, { Component } from 'react';
import './App.css';
import Headerform from './Headerform';
import Inputuser from './Inputuser';
import Tableuser from './Tableuser';
import Seachform from './Seachform';
import datauser from './datauser.json';
const { v4: uuidv4 } = require('uuid');
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienthiform: false,
      data: datauser,
      seachText:"",
      editUserStatus: false,
      editUserObject:{}
    }
  }
  
  componentWillMount() {
    if(localStorage.getItem('datauser') === null){
      localStorage.setItem('datauser',JSON.stringify(datauser));
    }else{
      var temp = JSON.parse(localStorage.getItem('datauser'));
      this.setState({
        data: temp
      });
    }
  }
  
  doitrangthai = () => {
    this.setState({
      hienthiform: !this.state.hienthiform
    });
  }
  getSeachText = (dl) => {
  this.setState({
    seachText : dl
  });
  }

  GetNewUserData =(name,phone,status)=>{
    var item ={};
    item.id=uuidv4();;
    item.name= name;
    item.phone = phone;
    item.status = status;
   
    var items = this.state.data;
    items.push(item);
     this.setState({
       data: items
     });
     localStorage.setItem('datauser',JSON.stringify(items));
  }
  editFun = (user) => {
    this.setState({
      editUserStatus: !this.state.editUserStatus,
      editUserObject: user
    });
  }
  
changeEditStatus =(infor)=>{
  this.setState({
    editUserStatus: !this.state.editUserStatus
  });
  var tempdata = this.state.data;
  tempdata.forEach((value,key)=>{
    if(value.id === infor.id){
      value.name = infor.name;
      value.phone = infor.phone;
      value.status = infor.status;
    }
 });
 localStorage.setItem('datauser',JSON.stringify(tempdata));
}
deleteUser = (idUser)=>{
  var tempdata = this.state.data.filter(item => item.id !== idUser);
  this.setState({
    data : tempdata
  });
  localStorage.setItem('datauser',JSON.stringify(tempdata));
}

  render() {
    var ketqua=[];
    this.state.data.forEach((item)=>{
      if(item.name.indexOf(this.state.seachText) !== -1){
        ketqua.push(item);
      }
    })
 
    //console.log(this.state.data);
    return (
      <div >
     <Headerform/>
     <Seachform 
                editUserObject = {this.state.editUserObject}
                ketnoi={()=>this.doitrangthai()}
                hienthiform={this.state.hienthiform}
                checkConnect={(dl)=>this.getSeachText(dl)}
                editUserStatus={this.state.editUserStatus}
                changeEditStatus={(infor)=>this.changeEditStatus(infor)}
                
     />
        <div className="container">
          <div className="row">
            <Tableuser editFun={(user)=>this.editFun(user)}
                        data={ketqua}   
                        deleteUser = {(idUser)=>this.deleteUser(idUser)}         
                        />
            <Inputuser add={(name,phone,status)=>this.GetNewUserData(name,phone,status)} hienthiform={this.state.hienthiform}/>
          </div>
        </div>
    </div>
    );
  }
}

export default App;
