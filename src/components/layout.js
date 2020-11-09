import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// Components
import Header from './header';
import Cursor from '../components/customCursor';
import Navigation from "../components/navigation";
import Footer from "../components/footer";

//Context
import {useGlobalStateContext, useGlobalDispatchContext} from "../context/globalContext";


//styled components
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  
  ${normalize}
  *{
    text-decoration: none;
    cursor: none; 
  }

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segeo UI' , Roboto;
    background: ${props => props.theme.background};
    overscroll-behavior: none;
    overflow-x: hidden;
  }

`


const Layout = ({ children }) => {
  const dispatch = useGlobalDispatchContext()
  const { cursorStyles, currentTheme } = useGlobalStateContext()
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

const [hamburgerPosition, setHamburgerPosition] = useState({
  x: 0,
  y: 0,
})

  //dark theme
  const darkTheme = {
    background: '#000',
    text: '#fff',
    orange: '#FF9000',
    left: `${hamburgerPosition.x}px`,
    top: `${hamburgerPosition.y}px`,
  }

  const lightTheme = {
    background: '#fff',
    text: '#000',
    orange: '#FF9000',
    left: `${hamburgerPosition.x}px`,
    top: `${hamburgerPosition.y}px`,
  }



  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({type: 'CURSOR_TYPE', cursorType: cursorType})
  }

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <ThemeProvider theme={currentTheme === 'dark'? darkTheme: lightTheme}>
      <GlobalStyle />
      <Cursor toggleMenu={toggleMenu}/>
      <Header onCursor={onCursor} 
      toggleMenu={toggleMenu} 
      setToggleMenu={setToggleMenu}
      hamburgerPosition={hamburgerPosition}
      setHamburgerPosition={setHamburgerPosition}
      />
      <Navigation
      toggleMenu={toggleMenu} 
      setToggleMenu={setToggleMenu}
      onCursor={onCursor}
      />
      <main>{children}</main>
      <Footer onCursor={onCursor}/>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
