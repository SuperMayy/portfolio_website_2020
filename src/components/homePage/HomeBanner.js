import React, { useEffect, useRef } from "react"

import {
  Banner,
  Video,
  BannerTitle,
  Canvas,
  Headline,
} from "../../styles/homeStyles"
import Vid from "../../assets/video/video(2).mp4"

//context
import { useGlobalStateContext } from "../../context/globalContext"

//Custom Hook
// import useWindowSize from "../../hooks/useWindowSize"

const HomeBanner = ({ onCursor }) => {
  let canvas = useRef(null)

  const { currentTheme } = useGlobalStateContext()

  const size = typeof window !== "undefined" && {
    width: window.innerWidth,
    height: window.innerHeight,
  }

  useEffect(() => {
    const windowSize = {
      width: window.innerWidth,
      height: window.innerHeight,
    }
    let renderingElement = canvas.current
    let drawingElement = renderingElement.cloneNode()

    let drawingCtx = drawingElement.getContext("2d")
    let renderingCtx = renderingElement.getContext("2d")

    let lastX
    let lastY

    let moving = false

    renderingCtx.globalCompositeOperation = "source-over"
    renderingCtx.fillStyle = currentTheme === "dark" ? "#000000" : "#ffffff"
    renderingCtx.fillRect(0, 0, windowSize.width, windowSize.height)

    renderingElement.addEventListener("mouseover", e => {
      moving = true
      lastX = e.pageX - renderingElement.offsetLeft
      lastY = e.pageY - renderingElement.offsetTop
    })

    renderingElement.addEventListener("mouseup", e => {
      moving = false
      lastX = e.pageX - renderingElement.offsetLeft
      lastY = e.pageY - renderingElement.offsetTop
    })

    renderingElement.addEventListener("mousemove", e => {
      if (moving) {
        drawingCtx.globalCompositeOperation = "source-over"
        renderingCtx.globalCompositeOperation = "destination-out"
        let currentX = e.pageX - renderingElement.offsetLeft
        let currentY = e.pageY - renderingElement.offsetTop
        drawingCtx.lineJoin = "round"
        drawingCtx.moveTo(lastX, lastY)
        drawingCtx.lineTo(currentX, currentY)
        drawingCtx.closePath()
        drawingCtx.lineWidth = 120
        drawingCtx.stroke()
        lastX = currentX
        lastY = currentY
        renderingCtx.drawImage(drawingElement, 0, 0)
      }
    })
  }, [])

  const parent = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const child = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  }

  return (
    <Banner>
      <Video>
        <video height="100%" width="100%" loop autoPlay src={Vid} />
      </Video>
      {typeof window !== "undefined" && (
        <Canvas
          height={size.height}
          width={size.width}
          ref={canvas}
          onMouseEnter={() => onCursor("hovered")}
          onMouseLeave={onCursor}
        />
      )}

      <BannerTitle variants={parent} initial="initial" animate="animate">
        <Headline variants={child}>I</Headline>
        <Headline variants={child}>CODE</Headline>
      </BannerTitle>
    </Banner>
  )
}

export default HomeBanner
