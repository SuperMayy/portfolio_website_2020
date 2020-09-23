import React, { useEffect, useRef } from "react"

// Scroll Animations
// import { useInView } from "react-intersection-observer"
// import { useAnimation } from "framer-motion"

//Styled Components
import { Container, Flex } from "../styles/globalStyles"
import { FooterNav, FooterContent, FooterSocial } from "../styles/footerStyles"

//Icons
import { GitHub, LinkedIn } from "../assets/svg/social-icons"

//Custom Hooks
// import useElementPosition from "../hooks/useElementPosition"

const Footer = ({onCursor}) => {

 {/* const githubRef = useRef(null)
  const githubPosition = useElementPosition(githubRef)

  const linkedinRef = useRef(null)
  const linkedinPosition = useElementPosition(linkedinRef)

  const animation = useAnimation()
  const [footerRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  })
  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView])

  const menuHover = x => {
    onCursor("locked")
    setHamburgerPosition({ x: x })
  } */}

  return (
    <FooterNav>
      <Container>
        <Flex spaceBetween>
          <FooterContent>
            <p>07460 364657</p>
            <p>mayowashowumi@outlook.com</p>
          </FooterContent>
          <FooterSocial>
            <a
              href="https://github.com/SuperMayy"
              target="_blank"
              onMouseEnter={() => onCursor("hovered")}
              onMouseLeave={onCursor}
            >
              <GitHub />
            </a>
            <a
              href="https://www.linkedin.com/in/may-showumi-b95056137/?originalSubdomain=uk"
              target="_blank"
              onMouseEnter={() => onCursor("hovered")}
              onMouseLeave={onCursor}
            >
              <LinkedIn />
            </a>
          </FooterSocial>
        </Flex>
      </Container>
    </FooterNav>
  )
}

export default Footer;