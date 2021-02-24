import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Components
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

const App = () => {
  return(
    <Fragment>
    <Header />
    <Main />
    <Footer/>
    </Fragment>
    
  )
}

ReactDOM.render(<App />, document.getElementById("root"));