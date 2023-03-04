import { Box, Button, Center, Container, Image, Stack, keyframes, usePrefersReducedMotion } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";


import welcome from "./imgs/iamges.png";
import moldvoabig from "./imgs/moldova_big.png";
import ornament1 from "./imgs/11.png";
import ornament2 from "./imgs/12.png";

const App = () => {

  const [screen, setScreen] = useState(0);
  const [bg, setBg] = useState(123);

  const rotateBackground = (now, to) => {

    console.log(now);
    if(now > to){

    } else {
      setBg(now + 1);
      console.log("21");
      setTimeout(()=>{
        rotateBackground(now + 1, to);
      }, 1)
    }

  }
 
  const goNext = () => {
    setScreen(screen + 1);
    rotateBackground(bg, bg + 180);

  }

  return (
      <Container  padding={"0px"} h="100vh" pt="75px" bgGradient={"linear("+bg+"deg, #0046A4, #FFD200 , #CC092F)"}>
    
      {
        screen === 0 ? (
          <Container p="0px">
            <Box pos={"absolute"}  >
              <Image src={moldvoabig} />
              <Center pt="50px">
                <Button 
                  bg={"#00000028"}
                  onClick={goNext}
                  borderWidth="1px"
                  borderColor={"#00000055"}
                  borderRadius="2px"
                  color={"#ffffff"}
                  zIndex="100"
                  >
                  Start your adventures
                </Button>
              </Center>

            </Box>
            <Stack  justifyContent="space-between" direction='row' w="100%" pos={"absolute"}>
              <Image className="imgblur" src={ornament2} w="80px" h={"80%"} />

              <Image className="imgblur" src={ornament1} w="80px" h={"80%"}/>
            </Stack>
          </Container>
        ) : screen === 1 ? (
          <></>
        ) : screen === 2 ? (
          <></>
        ) : screen === 3 ? (
          <></> 
        ) : (
          <></>
        ) 
      }
    </Container>
  );
};

export default App;