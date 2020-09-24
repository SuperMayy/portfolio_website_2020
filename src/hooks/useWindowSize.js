import { useState, useEffect } from "react"

export default function useWindowSize() {
  function getSize() {
    if (typeof window !== "undefined") {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      }
    } else {
      return {
        width: "100%",
        height: "100%",
      }
    }
  }

  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    function handleResize() {
      setWindowSize(getSize())
    }

    window.addEventListener("resize", handleResize)

    return () => window.addEventListener("resize", handleResize)
  }, [])

  return windowSize
}
