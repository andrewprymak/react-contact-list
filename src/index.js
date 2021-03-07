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

class App extends Component {

  state = {
    List: [
      {
        "Id": uuidv4(),
        "Avatar": "20",
        "Name": "Mila Kunis",
        "Created": "2013/08/08",
        "Role": "Admin",
        "Status": "Inactive",
        "Email": "mila@kunis.com",
        "Gender": "women"
      },
      {
        "Id": uuidv4(),
        "Avatar": "50",
        "Name": "Camil Johnson",
        "Created": "2013/08/08",
        "Role": "User",
        "Status": "Pending",
        "Email": "camil@gmail.com",
        "Gender": "men"
      },
      {
        "Id": uuidv4(),
        "Avatar": "33",
        "Name": "Jennifer Johnson",
        "Created": "2013/08/03",
        "Role": "Moderator",
        "Status": "Active",
        "Email": "jj@gmail.com",
        "Gender": "women"
      },
      {
        "Id": uuidv4(),
        "Avatar": "46",
        "Name": "Michael Jackson",
        "Created": "2013/08/03",
        "Role": "Moderator",
        "Status": "Banned",
        "Email": "mj@gmail.com",
        "Gender": "men"
      }
    ]
  }

  onDelete = (Id) => {
    const index = this.state.List.findIndex((elem) => elem.Id === Id);
    const partOne = this.state.List.slice(0, index);
    const partTwo = this.state.List.slice(index + 1);
    const newList = [...partOne, ...partTwo];
    this.setState(() => {
      return {
        List: newList,
      };
    });
  }

  onStatusChange = (Id) => {
    const index = this.state.List.findIndex((elem) => elem.Id === Id);
    let newList = this.state.List.slice();
    if (newList[index].Status === "Inactive") {
      newList[index].Status = "Active"
    }

    this.setState(() => {
      return {
        List: newList
      }
    })
  }

  render() {
    const { List } = this.state;
    console.log("APP state => ", this.state)
    return (
      <Fragment>
        <Router>
        <Header />
          <Switch>
            <Route path="/" exact render={() => <ContactList List={List} onStatusChange={this.onStatusChange} onDelete={this.onDelete} />} />
            <Route path="/add-contact" exact render={() => <AddNewContact  />} />
          </Switch>
          <Footer />
        </Router>
        
      </Fragment>

    )
  }
}
ReactDOM.render(<App />, document.getElementById("root"));