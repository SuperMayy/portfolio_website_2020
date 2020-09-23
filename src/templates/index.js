import React from "react"
import Layout from "../components/layout"

//components
import HomeBanner from "../components/homePage/HomeBanner"
import HomeContent from "../components/homePage/HomeContent"
import HomeFeatured from "../components/homePage/HomeFeatured"
import HomeOne from "../components/homePage/HomeOne"
import HomeTwo from "../components/homePage/HomeTwo"
import HomeThree from "../components/homePage/HomeThree"
import HomeAbout from "../components/homePage/HomeAbout"

//Context
import {useGlobalStateContext, useGlobalDispatchContext} from "../context/globalContext";


const IndexPage = props => {
  const {currentTheme, cursorStyles} = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()

  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({type: 'CURSOR_TYPE', cursorType: cursorType})
  }
  
  
  return (
  <Layout>
    <HomeBanner onCursor={onCursor}/>
    <HomeContent />
    <HomeFeatured onCursor={onCursor}/>
    <HomeOne onCursor={onCursor}/>
    <HomeTwo onCursor={onCursor}/>
    <HomeThree onCursor={onCursor}/>
    <HomeAbout onCursor={onCursor}/>
  </Layout>
  )
}

export default IndexPage
