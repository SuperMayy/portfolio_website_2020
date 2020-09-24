import { useState, useEffect } from "react"

export default function useWindowSize() {
  const isBrowser = typeof window !== "undefined"
  function getSize() {
    if (isBrowser) {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      }
    } else {
      return {
        width: 0,
        height: 0,
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
