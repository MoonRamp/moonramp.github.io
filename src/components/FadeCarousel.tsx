import { Component, createSignal, children, onMount } from 'solid-js';

import Alert from '@suid/material/Alert';
import Button from '@suid/material/Button';
import Box from '@suid/material/Box';
import Container from '@suid/material/Container';
import Fade from '@suid/material/Fade';

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

  // TODO
  onMount(async () => {
  });

  setMaxChildren(props.children.length);
  return (
    <Box sx={{opacity: opacity(), transition: `opacity ${duration}ms ease-out ${delay}ms`}}>
      <>{props.children[currentChild()]}</>
    </Box>
  );
};

export default FadeCarousel;
