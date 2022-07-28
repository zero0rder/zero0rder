import React, { Component } from 'react';
import Desktop from './components/desktop/desktop';
import { MobileLanding } from './components/mobile/landing';
import { AppContainer, ContentSection } from './styled';
import './App.css';

const viewportQuery = window.matchMedia('(max-width: 448px)');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isMobile: viewportQuery.matches };
    
  }

  componentDidMount(){
    viewportQuery.onchange = () => this.setState(state => ({...state, isMobile: viewportQuery.matches}))
  }

  componentWillUnmount(){
    viewportQuery.removeEventListener(viewportQuery.onchange)
  }

  // componentDidUpdate(){}

  render() {
    return (
      <AppContainer className='app'>
        <ContentSection className='content-section' mobile={this.state.isMobile}>
          { this.state.isMobile ? <MobileLanding /> : <Desktop /> }
        </ContentSection>
      </AppContainer>
    )
  }
}

export default App;