import { Box, Button, Center, Container, Image, Stack, keyframes, usePrefersReducedMotion } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";




const HomeScreen = () => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const [bg, setBg] = useState(123+180);
  const [elementOpacity, setElementOpacitiy] = useState(0);
  
  useEffect(()=>{
    opacitysShow(0);
  }, [])

  const rotateBackground = (now, to) => {
    if(now > to){
 
    } else {
      setBg(now + 1);
      setTimeout(()=>{
        rotateBackground(now + 1, to);
      }, 1)
    }
  }

  const opacitysShow = (now) => {
    if(now > 1){
      setElementOpacitiy(1);
    } else {
      setElementOpacitiy(now);
      setTimeout(()=>{
        opacitysShow(now + 0.01);
      }, 1)
    }
  }

  const opacitysHide = (now) => {
    if(now < 0){
      setElementOpacitiy(0);
      // to do naviagate to next screen
    } else {
      setElementOpacitiy(now);
      setTimeout(()=>{
        opacitysHide(now - 0.005);
      }
      , 1)
    }
  }
 
  const goNext = () => {
    opacitysHide(elementOpacity);
    rotateBackground(bg, bg + 180);

  }

  return (
      <Container  padding={"0px"} h="100vh" pt="75px" w={windowSize.current[0]} bgGradient={"linear("+bg+"deg, #0046A4, #FFD200 , #CC092F)"}>
          <Container p="0px" opacity={elementOpacity}>
            <Stack  justifyContent="space-between" direction='row' w="100%" pos={"absolute"}>
              {/* <Image src={ornament2} w="80px" h={"80%"} />

              <Image  src={ornament1} w="80px" h={"80%"}/> */}
            </Stack>
          </Container>
    </Container>
  );
};

export default HomeScreen;