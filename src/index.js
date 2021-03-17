import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// Import uuid
import { v4 as uuidv4 } from 'uuid';



// Components
import Header from "./Components/Header/Header";
import ContactList from "./Components/ContactList/contactlist";
import Footer from "./Components/Footer/Footer";
import AddNewContact from './Components/AddNewContact/addnewcontact';
import NotFound from './Components/NotFound/NotFound';
import EditContact from './Components/EditContact/editContact'

class App extends Component {
  URL = 'https://fe01-5081b-default-rtdb.firebaseio.com/List.json'
  state = {
    List: [],
    currentContact: "",
    searchContact: []
  }

  componentDidMount(){
    this.updateDatabase();
  }

  updateDatabase = () => {
    fetch(this.URL)
      .then(responce => {
        return responce.json();
      }).then(data => {
        if (data !== null) {
          this.setState(() => {
            return {
              List: data,
              searchContact: data
            }
          })
        } else {
          this.setState(() => {
            return {
              List: [],
              searchContact: []
            }
          })
        } 
        
      })
      .catch(err => console.log(err))
  }

  saveData = (contactList) => {
    fetch(this.URL, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contactList),
    }).then(response => {
      console.log("saveData response")
    }).catch(err => console.log())
  }

  onInputChange = (event) => {    
    let inputValue = event.target.value;    
    const filterNames = this.state.List.filter(names => {
      return names.Name.toLowerCase().includes(inputValue.toLowerCase());
    })
    this.setState(() => {
      return {
        searchContact: filterNames,
      };
    });  
  }

  onDelete = (Id) => {
    const index = this.state.List.findIndex((elem) => elem.Id === Id);
    const partOne = this.state.List.slice(0, index);
    const partTwo = this.state.List.slice(index + 1);
    const newList = [...partOne, ...partTwo];
    this.setState(() => {
      return {
        List: newList,
        searchContact: newList
      };
    });
    this.saveData(newList);
  }

onAddContact = (newContact) => {
  const tmpList = this.state.List.slice();
  const newList = [...tmpList, newContact];
  this.setState(()=>{
    return{
      List: newList
    }
    
  })
  this.saveData(newList)
}

onEdit = (Id) => {
  const index = this.state.searchContact.findIndex((elem) => elem.Id === Id);
  let newList = this.state.List[index];
  this.setState({
    currentContact: newList[index]
  })
}

onEditCurrentContact = (newContact) => {
  const { Id } = newContact;
  const index = this.state.List.findIndex((elem) => elem.Id === Id);
  const partOne = this.state.List.slice(0, index);
  const partTwo = this.state.List.slice(index + 1);
  const newList = [...partOne, newContact, ...partTwo];

  this.setState(() => {
    return {
      List: newList,
    };
  })
this.setState(() => {
  return {
    searchContact: newList,
  };
})
}

  onStatusChange = (Id) => {
    const index = this.state.searchContact.findIndex((elem) => elem.Id === Id);
    let newList = this.state.List.slice();
    if (newList[index].Status === "Inactive") {
      newList[index].Status = "Active"
    } else if (newList[index].Status === "Active") {
      newList[index].Status = "Pending";
    } else if (newList[index].Status === "Pending") {
      newList[index].Status = "Banned";
    } else {
      newList[index].Status = "Inactive";
    }

    this.setState(() => {
      return {
        searchContact: newList
      }
    })
  }

  render() {
    const { List, currentContact, searchContact } = this.state;
    console.log("APP state => ", this.state)
    return (
      <Fragment>
        <Router>
        <Header onInputChange={this.onInputChange} />
          <Switch>
            <Route path="/" exact render={() => <ContactList searchContact={searchContact} onEdit={this.onEdit} List={List} onStatusChange={this.onStatusChange} onDelete={this.onDelete} onInputChange={this.onInputChange} />} />
            <Route path="/add-contact" exact render={() => <AddNewContact onAddContact={this.onAddContact} />} />
            <Route path="/editContact" exact render={() => <EditContact currentContact={currentContact} onEditCurrentContact={this.onEditCurrentContact} />} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Router>
        
      </Fragment>

    )
  }
}
ReactDOM.render(<App />, document.getElementById("root"));