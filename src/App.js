import React, { Component } from 'react';
import LandingPage from './components/pages/landingPage';
import NavigationBar from './components/navigation/navigationBar';
import MenuPanel from './components/navigation/menuPanel';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.containerRef = React.createRef();
  } 

  toggleMenu = () => {
      const contentContainer = this.containerRef.current;
      contentContainer.classList.toggle('is-nav-open');
  }
  
  render(){
    return (
      <div ref={this.containerRef} className='app'>
        <MenuPanel />
        <section className='content-section'>
          <NavigationBar toggleMenu={this.toggleMenu}/>
          <LandingPage />
        </section>
      </div>
    )
  }
}

export default App;
