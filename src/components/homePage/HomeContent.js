import React, {useEffect} from 'react';

//Scroll Behavior 
import {useInView} from "react-intersection-observer";
import {useAnimation} from "framer-motion";

import {Container} from "../../styles/globalStyles";
import {HomeContentSection, Content} from "../../styles/homeStyles";


const HomeContent = () => {
    const animation = useAnimation();
    const [contentRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: "-200px"
    })

    useEffect(() => {
        if (inView) {
            animation.start("visible")
        }
    }, [animation, inView])

    return (
        <HomeContentSection
        ref={contentRef}
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
            <Content>
            I'm May, a self-taught developer with around 3 years of coding experience and 
            a bubbly personality. My skills include: full-stack development (Reactjs, Nodejs, Express, MongoDB), 
            UI Design, RESTful APIs and several libraies and frameworks.
            </Content>
          </Container>
        </HomeContentSection>        
    )
}

export default HomeContent