import React, {useState} from "react";
import { Link } from "gatsby";
import {motion, AnimatePresence} from "framer-motion";

//Styled components
import {Container, Flex} from "../styles/globalStyles";
import {Nav, NavHeader, CloseNav, NavList, NavFooter, NavVideos} from "../styles/navigationStyles";
import { FooterNav, FooterContent, FooterSocial } from "../styles/footerStyles"
//Icons
import { GitHub, LinkedIn } from "../assets/svg/social-icons"

const navRoutes = [
    {
        id: 0, 
        title: 'DESIGN2TECH',
        path:'/#project0', 
        video: 'design2tech.mp4'
    },
    {
        id: 1, 
        title: 'UI DESIGNS', 
        path:'/#project1', 
        video: 'ui.mp4'
    },
    {
        id: 2, title: 'TEXT-N-SPEAK', 
        path:'/#project2', 
        video: 'textnspeak.mp4'
    },
    {
        id: 3, title: 'JERMES', 
        path:'/#project3', 
        video: 'jerm.mp4'
    },
    {
        id: 4, 
        title: 'ABOUT ME', 
        path:'/#about', 
        video: 'video.mp4'
    },
]

const Navigation = ({toggleMenu, setToggleMenu, onCursor}) => {
    const [revealVideo, setRevealVideo] = useState({
        show: false,
        video: 'design2tech.mp4',
        key: 0,
    })
  return (
      <>
          {toggleMenu && (
            <Nav 
            initial={{x: "-100%"}} 
            exit={{x: "-100%"}} 
            animate={{x: toggleMenu ? 0 : "-100%"}}
            transition={{duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9]}}
            >
            <Container>
              <NavHeader>
                <Flex spaceBetween noHeight>
                  <h2>Menu</h2>
                  <CloseNav 
                  onClick={() => setToggleMenu(!toggleMenu)}
                  onMouseEnter={() => onCursor('pointer')}
                  onMouseLeave={onCursor}
                  >
                    <button>
                      <span></span>
                      <span></span>
                    </button>
                  </CloseNav>
                </Flex>
              </NavHeader>
              <NavList>
                <ul>
                     {navRoutes.map(route => (
                        <motion.li 
                          onMouseEnter={() => onCursor('pointer')}
                          onMouseLeave={onCursor}
                          key={route.id} 
                          onHoverStart={() => 
                            setRevealVideo({
                            show: true,
                            video: route.video,
                            key: route.id,
                          })
                        }
    
                        onHoverEnd={() => 
                            setRevealVideo({
                            show: false,
                            video: route.video,
                            key: route.id,
                          })
                        }
    
                        >
                        <Link to={`${route.path}`}>
                          <motion.div initial={{x: -108}} 
                          whileHover={{
                            x: -40,
                            transition: {
                                duration: 0.4,
                                ease: [0.6, 0.05, -0.01, 0.9]
                            }
                        }}
                           
                          className="link">
                            <span className="arrow">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 101 57"
                            >
                            <path
                              d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                              fill="#FFF"
                              fillRule="evenodd"
                            ></path>
                            </svg> 
                            </span>
                            {route.title}
                          </motion.div>
                        </Link>
                      </motion.li>
                     ))}  
                </ul>
              </NavList>
              <NavFooter>
                <Flex spaceBetween>
                  <FooterContent>
                  <p>mayowashowumi@outlook.com</p>
                  </FooterContent>
                  <FooterSocial>
            <a
              href="https://github.com/SuperMayy"
              target="_blank"
              onMouseEnter={() => onCursor("pointer")}
              onMouseLeave={onCursor}
            >
              <GitHub />
            </a>
            <a
              href="https://www.linkedin.com/in/may-showumi-b95056137/?originalSubdomain=uk"
              target="_blank"
              onMouseEnter={() => onCursor("pointer")}
              onMouseLeave={onCursor}
            >
              <LinkedIn />
            </a>
          </FooterSocial>
                </Flex>
              </NavFooter>
              <NavVideos>
                <motion.div 
                animate={{width: revealVideo.show ? 0 : '100%'}} 
                className="reveal"></motion.div>
                <div className="video">
                  <AnimatePresence initial={false} exitBeforeEnter>
                  <motion.video
                  key={revealVideo.key}
                  src={`../assets/video/${revealVideo.video}`}
                  initial={{opacity: 0}}
                  exit={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                    }}
                  loop
                  autoPlay
                  ></motion.video>
                  </AnimatePresence>
                </div>
              </NavVideos>
            </Container>
          </Nav>
          )}
      </>
  )
}

export default Navigation;