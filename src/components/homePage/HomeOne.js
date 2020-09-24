import React, {useState, useEffect} from 'react';
import {Link} from "gatsby";
import {motion} from "framer-motion";
import Vid from '../../assets/video/ui.mp4';

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

const HomeOne = ({onCursor}) => {
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
        id="product1"
        >
          <Container>
            <Link to="https://www.figma.com/proto/kYuGK77n7jIgyzx52uoztX/Ibstock-B2C-(mobile-design)?node-id=210493%3A449&viewport=312%2C89%2C0.1688549667596817&scaling=scale-down">
            <FeaturedContent 
            onHoverStart={() => setHovered(!hovered)}
            onHoverEnd={() => setHovered(!hovered)}
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={onCursor}
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
              <h4>July 2020</h4>
           </motion.div>
          </Flex>
          <h2 className="featured-title">
            UI Design
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
              <video loop autoPlay src={Vid}>

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
                <Link to="https://www.figma.com/proto/Knf6Bf8x4McVLrZLXZHD6O/Ibstock-B2C-(Design)?node-id=209369%3A449&viewport=-839%2C334%2C0.5&scaling=scale-down-width">
                <button>
                <span>MORE</span>
                </button>
                </Link>
              </Flex>
            </FeaturedProjects>
          </Container>
        </HomeFeaturedSection>
    )
}

export default HomeOne;