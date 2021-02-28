import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Components
import Header from './Components/Header/Header';
import Search from './Components/Search/search';
import ContactList from './Components/ContactList/contactlist';
import Footer from './Components/Footer/Footer';

class App extends Component {

  state = {
    List: [
      {
        "Avatar" : "https://www.bootdey.com/img/Content/avatar/avatar3.png",
        "Name" : "Mila Kunis",
        "Created" : "2013/08/08",
        "Role" : "Admin",
        "Status" : "Active",
        "Email" : "mila@kunis.com"
      },
      {
        "Avatar" : "https://www.bootdey.com/img/Content/avatar/avatar2.png",
        "Name" : "Camil Johnson",
        "Created" : "2013/08/10",
        "Role" : "User",
        "Status" : "Active",
        "Email" : "camol@gmail.com"
      },
      {
        "Avatar" : "https://www.bootdey.com/img/Content/avatar/avatar4.png",
        "Name" : "Johny Sins",
        "Created" : "2013/08/12",
        "Role" : "User",
        "Status" : "Active",
        "Email" : "sins@gmail.com"
      }
    ]
  }

  render(){
    const {List} = this.state;
    return(
      <Fragment>
      <Header />
      <Search/>
      <ContactList List={List} />
      <Footer/>
      </Fragment>
      
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));