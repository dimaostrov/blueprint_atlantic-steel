import React, { Component } from "react";
import { Navbar, NavbarGroup, NavbarHeading, NavbarDivider, Button, Alignment, Colors } from '@blueprintjs/core';

class Header extends Component {
  constructor(props){
    super(props);

    this.state = {
      isTop: true  
    };
    this.onScroll = this.onScroll.bind(this)
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.onScroll(isTop);
      }
    });
  }

  onScroll(isTop) {
    this.setState({ isTop });
  }

  render(){
    return (
        <Navbar 
        fixedToTop={true} 
        style={{background: Colors.DARK_GRAY5}} 
        className={this.state.isTop ? 'header' : 'sticky' }>
        <div>
        <NavbarGroup>
            <NavbarHeading>Atlantic Steel</NavbarHeading>
        </NavbarGroup>
        <NavbarGroup  align={Alignment.RIGHT}>   
            <Button className="pt-minimal" icon="home" text="Home" />
            <Button className="pt-minimal" icon="briefcase" text="About Us" />
            <Button className="pt-minimal" icon="office" text="Gallery" />
            <Button className="pt-minimal" icon="envelope" text="Contact Us" />
        </NavbarGroup>
        </div>
      </Navbar>
    )
  }    
}


export default Header;