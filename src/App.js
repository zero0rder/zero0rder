import React, { Component } from 'react';
import NavigationBar from './components/navigation/navigationBar';
import Desktop from './components/desktop/desktop';
import { MobileLanding } from './components/mobile/landing';
import { AppContainer, ContentSection } from './styled';
import './App.css';
//this.containerRef = React.createRef();
// toggleMenu = () => {
//     const contentContainer = this.containerRef.current;
//     contentContainer.classList.toggle('is-nav-open');
// }

const viewportQuery = window.matchMedia('(max-width: 448px)');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutModalOpen: false,
      projectsModalOpen: true,
      isMobile: viewportQuery.matches
    };
    
  }

  componentDidMount(){
    viewportQuery.onchange = () => this.setState(state => ({...state, isMobile: viewportQuery.matches}))
  }

  componentWillUnmount(){
    viewportQuery.removeEventListener(viewportQuery.onchange)
  }

  // componentDidUpdate(){}

  modalToggle = (modalType) => this.setState(state => ({...state, [modalType]: !state[modalType]}))

  render() {
    return (
      <AppContainer className='app'>
        <ContentSection className='content-section' mobile={this.state.isMobile}>
          {
            this.state.isMobile ? (<MobileLanding/>) : (
                <>
                  <NavigationBar toggle={this.modalToggle} />
                  <Desktop toggle={this.modalToggle} flags={[this.state.aboutModalOpen, this.state.projectsModalOpen]} />
                </>
            )
          }
        </ContentSection>
      </AppContainer>
    )
  }
}

export default App;