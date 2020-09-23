import React, {useState, useEffect} from 'react';
import {Container, Flex } from "../../styles/globalStyles";
import 
{
    HomeAboutSection, 
    About, 
    Services, 
    AccordionHeader, 
    AccordionIcon,
    AccordionContent
} from "../../styles/homeStyles";

import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import { useGlobalStateContext } from '../../context/globalContext';


const accordionIds = [
  {
    id: 0,
    title: 'My Services',
    results: [
        'Full-stack Development',
        'Front-end and UI design',
        'Shopifty',
        'Oracle',
    ]
  },
  {
    id: 1,
    title: 'My Tech Stack',
    results: [
        'HTML5/ CSS3/ JavaScript(ES6)',
        'Reactjs',
        'Express and Nodejs',
        'MongoDB'
    ]
  },
  {
    id: 2,
    title: 'Extra',
    results: [
        'Big fan of Marvel',
        'Nutella is my weakness',
        'Movies over Series',
        'Books over Movies'
    ]
  }

]

const HomeAbout = ({onCursor}) => {
    const animation = useAnimation();
    const [aboutRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: "-200px"
    })

    useEffect(() => {
        if (inView) {
            animation.start("visible")
        }
    }, [animation, inView])

    const [expanded, setExpanded] = useState(0)
    return (
        <HomeAboutSection 
        ref={aboutRef}
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
        id="about"
        >
          <Container>
            <Flex alignTop>
              <About>
                <h2>
                  So I like to code...
                </h2>
                <p>
                Currently I'm am Head of Technology at Fionita's Project and was a Software Engineer at Enigen. 
                I've got a degree in biochemistry and I'm starting a masters next year in Computer Science.
                Click on the links to find out more about me and <b><a
                style={{color: "#ff9000"}}
                onMouseEnter={() => onCursor('hovered')}
                onMouseLeave={onCursor}
                href="/src/assets/cv(2).docx"
                download="May-Showumi(CV).docx"
                >here</a></b> to get a copy of my CV. Contact me via <b style={{color: "#ff9000"}}> 07460364657</b>, 
                or <b style={{color: "#ff9000"}}>mayowashowumi@outlook.com.</b>
                </p>
              </About>
              <Services>
                <h3>About Me</h3>
                {accordionIds.map((details, index) => (
                    <Accordion 
                    key={index} 
                    details={details} 
                    expanded={expanded}
                    setExpanded={setExpanded}
                    onCursor={onCursor}
                    />
                ))}
              </Services>
            </Flex>
          </Container>
        </HomeAboutSection>
    )
}

const Accordion = ({details, expanded, setExpanded, onCursor}) => {
    const isOpen = details.id === expanded;
    const [hovered, setHovered] = useState(false);
    const {currentTheme} = useGlobalStateContext();
    return (
        <>
          <AccordionHeader
          onClick={() => setExpanded(isOpen ? false : details.id)}
          onMouseEnter={() => onCursor('hovered')}
          onMouseLeave={onCursor}
          onHoverStart={() => setHovered(!hovered)}
          onHoverEnd={() => setHovered(!hovered)}
          whileHover={{
              color: currentTheme === 'dark' ? '#ffffff': '#000000'
          }}
          >
            <AccordionIcon>
              <motion.span
              animate={{rotate: isOpen || hovered ? 0 : 45, x: 3}}
              transition={{ duration: 0.2, ease: [0.06, 0.05, -0.01, 0.9] }}
              ></motion.span>
              <motion.span
              animate={{rotate: isOpen || hovered ? 0 : -45, x: -3}}
              transition={{ duration: 0.2, ease: [0.06, 0.05, -0.01, 0.9] }}
              ></motion.span>
            </AccordionIcon>
             {details.title}
          </AccordionHeader>
          <AccordionContent 
          key='content' 
          animate={{height: isOpen || hovered ? '100%': '0'}}
          transition={{ duration: 0.8, ease: [0.06, 0.05, -0.01, 0.9] }}
          >
            {details.results.map((result, index) => (
                <span key={index}>{result}</span>
            ))}
          </AccordionContent>
        </>
    )
}

export default HomeAbout