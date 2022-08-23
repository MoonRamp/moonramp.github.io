import { Component, createSignal, onMount } from 'solid-js';

import Box from '@suid/material/Box';

const duration = 5000;
const delay = 0;

const [opacity, setOpacity] = createSignal(1.0);
const [currentChild, setCurrentChild] = createSignal(0);
const [maxChildren, setMaxChildren] = createSignal(0);
setInterval(() => {
    if (opacity() == 1.0) {
      setOpacity(0.0)
    } else {
      const next = currentChild() + 1;
      if (next >= maxChildren()) {
        setCurrentChild(0);
      } else {
        setCurrentChild(next);
      }
      setTimeout(() => setOpacity(1.0), 100)
    }
  }, duration + delay
);

const FadeCarousel: Component = (props) => {

  onMount(async () => {
    // TODO
  });

  setMaxChildren(props.children.length);
  return (
    <Box minHeight='26em' sx={{opacity: opacity(), transition: `opacity ${duration}ms ease-out ${delay}ms`}}>
      <>{props.children[currentChild()]}</>
    </Box>
  );
};

export default FadeCarousel;
