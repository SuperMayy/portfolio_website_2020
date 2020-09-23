import React, {useState, useEffect} from 'react';
import {Link} from "gatsby";
import {motion} from "framer-motion";

//Scroll Behavior 
import {useInView} from "react-intersection-observer";
import {useAnimation} from "framer-motion";

//Styled Components
import {Container, Flex} from "../../styles/globalStyles";
import {
  HomeFeaturedSection, 
  FeaturedContent, 
  FeaturedVideo, 
  FeaturedProjects,
} from "../../styles/homeStyles";

const HomeThree = ({onCursor}) => {
    const [hovered, setHovered] = useState(false);
    const animation = useAnimation();
    const [featuredRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: "-200px"
    })

    useEffect(() => {
        if (inView) {
            animation.start("visible")
        }
    }, [animation, inView])

    return (
        <HomeFeaturedSection
        ref={featuredRef}
        animate={animation}
        initial="hidden"
        variants={{
            visible: {
                opacity: 1,
                y: 0,
                transition: {duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9]},
            },
            hidden: {
                opacity: 0,
                y: 72,
            },
        }}
        >
          <Container>
            <Link to="https://supermayy.github.io/jermesbyjerm.github.io/">
            <FeaturedContent 
            onHoverStart={() => setHovered(!hovered)}
            onHoverEnd={() => setHovered(!hovered)}
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={onCursor}
            id="product3"
            >
            <Flex spaceBetween>
            <h3 style={{color: "#ff9000"}}>NOT RESPONSIVE</h3>
            <motion.div 
            className="meta" 
            style={{color: "#ff9000"}}
            animate={{opacity: hovered ? 1: 0 }}
            transition={{duration: 0.6, ease: [.6, .05, -0.01, 0.9]}}
            >
              <h4>MADE IN</h4>
              <h4>November 2019</h4>
           </motion.div>
          </Flex>
          <h2 className="featured-title">
            Jermes
            <span className="arrow">
              <motion.svg animate={{x: hovered ? 48: 0 }}
              transition={{duration: 0.6, ease: [.6, .05, -0.01, 0.9]}}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 101 57"
            >
            <path
              d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
              fill="#FFF"
              fillRule="evenodd"
            ></path>
            </motion.svg> 
            </span>
          </h2>
            </FeaturedContent>
            <FeaturedVideo>
              <video loop autoPlay src='../../assets/video/jerm.mp4'>

              </video>
            </FeaturedVideo>
            </Link>
          </Container>
          <Container>
            <FeaturedProjects
            onHoverStart={() => setHovered(!hovered)}
            onHoverEnd={() => setHovered(!hovered)}
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={onCursor}
            >
              <Flex flexEnd>
                <Link to="https://github.com/SuperMayy/Text2Speech">
                <button>
                <span>GET CODE</span>
                </button>
                </Link>
              </Flex>
            </FeaturedProjects>
          </Container>
        </HomeFeaturedSection>
    )
}

export default HomeThree;