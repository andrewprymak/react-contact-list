import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//redux
import store from "./store";
import {Provider} from "react-redux";

// Components
import Header from "./Components/Header/Header";
import ContactList from "./Components/ContactList/contactlist";
import Footer from "./Components/Footer/Footer";
import AddNewContact from './Components/AddNewContact/addnewcontact';
import NotFound from './Components/NotFound/NotFound';
import EditContact from './Components/EditContact/editContact'

class App extends Component {
  
  // state = {
  //   List: [],
  //   currentContact: " ",
  //   searchContact: []  
  // }



//   onInputChange = (event) => {    
//     let inputValue = event.target.value;    
//     const filterNames = this.state.List.filter(names => {
//       return names.Name.toLowerCase().includes(inputValue.toLowerCase());
//     })
//     this.setState(() => {
//       return {
//         searchContact: filterNames,
//       };
//     });  
//   }

//   onDelete = (Id) => {
//     const index = this.state.List.findIndex((elem) => elem.Id === Id);
//     const partOne = this.state.List.slice(0, index);
//     const partTwo = this.state.List.slice(index + 1);
//     const newList = [...partOne, ...partTwo];
//     this.setState(() => {
//       return {
//         List: newList,
//         searchContact: newList
//       };
//     });
//     this.saveData(newList);
//   }

// onAddContact = (newContact) => {
//   const tmpList = this.state.List.slice();
//   const newList = [...tmpList, newContact];
//   this.setState(()=>{
//     return{
//       List: newList
//     }
    
//   })
//   this.saveData(newList)
// }

// onEdit = (Id) => {
//   const index = this.state.searchContact.findIndex((elem) => elem.Id === Id);
//   let newList = this.state.List[index];
//   this.setState({
//     currentContact: newList[index]
//   })
// }

// onEditCurrentContact = (newContact) => {
//   const { Id } = newContact;
//   const index = this.state.List.findIndex((elem) => elem.Id === Id);
//   const partOne = this.state.List.slice(0, index);
//   const partTwo = this.state.List.slice(index + 1);
//   const newList = [...partOne, newContact, ...partTwo];

//   this.setState(() => {
//     return {
//       List: newList,
//     };
//   })
//   this.setState(() => {
//     return {
//       searchContact: newList,
//     };
//   })
// }

//   onStatusChange = (Id) => {
//     const index = this.state.searchContact.findIndex((elem) => elem.Id === Id);
//     let newList = this.state.List.slice();
//     if (newList[index].Status === "Inactive") {
//       newList[index].Status = "Active"
//     } else if (newList[index].Status === "Active") {
//       newList[index].Status = "Pending";
//     } else if (newList[index].Status === "Pending") {
//       newList[index].Status = "Banned";
//     } else {
//       newList[index].Status = "Inactive";
//     }

//     this.setState(() => {
//       return {
//         searchContact: newList
//       }
//     })
//     this.saveData(newList)
//   }

//   onAddContact = (newContact) => {
//     const tmpList = this.state.List.slice();
//     const newList = [...tmpList, newContact];
//     this.setState(() => {
//       return {
//         List: newList
//       }
//     })
//     this.setState(() => {
//       return {
//         searchContact: newList
//       }
//     })
//     this.saveData(newList)
//   }

  render() {
    // const { List, currentContact, searchContact } = this.state;
    return (
      <Provider store={store}>
        <Router>
        <Header onInputChange={this.onInputChange} />
          <Switch>
            <Route path="/" exact component={ContactList} />
            <Route path="/add-contact" exact component={AddNewContact} />
            <Route path="/editContact" exact component={EditContact} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Router>
        </Provider>
      

    )
  }
}
ReactDOM.render(<App />, document.getElementById("root"));