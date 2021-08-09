import { keyframes } from 'styled-components'

export const moveEyesDown = keyframes`
  0% { 
    margin-top: 15%;
  }

  35% {
    margin-top: 19%; 
  }

  65% {
   margin-top: 19%;
  }
  
  100% { 
   margin-top: 15%;
  }
`

export const moveMouthDown = keyframes`
  0% { 
    bottom: 18%;
  }

  35% {
    bottom: 16%; 
  }

  65% {
    bottom: 16%; 
  }
  
  100% { 
    bottom: 18%;
  }
`

export const wink = keyframes`
  0% {
    height: 20px;
    margin-top: 0;
  }

  30% {
    height: 3px;
    margin-top: 8px; 
  }

  70% {
    height: 3px;
    margin-top: 8px; 
  }

  100% {
    height: 20px;
    margin-top: 0; 
  }
`

export const blink = keyframes`
  0% {
    height: 20px;
    margin-top: 0;
  }

  25% {
    height: 2px;
    margin-top: 8px; 
  }

  50% {
    height: 20px;
    margin-top: 0; 
  }

  75% {
    height: 2px;
    margin-top: 8px; 
  }

  100% {
    height: 20px;
    margin-top: 0; 
  }
`

export const moveAngryHead = keyframes`
  0% {
    transform: translateX(0%);
  }

  20% {
    transform: translateX(-20%);
  }

  40% {
    transform: translateX(15%);
  }

  60% {
    transform: translateX(-10%);
  }

  80% {
    transform: translateX(5%);
  }

  100% {
    transform: translateX(0%);
  }
`

export const speeching = keyframes`
  0% {
    height: 20%;
    margin-top: 0;
  }

  20% {
    height: 25%;
    margin-top: 8px;
  }

  40% {
    height: 20%;
    margin-top: 0;
  }

  60% {
    height: 25%;
    margin-top: 8px;
  }

  80% {
    height: 20%;
    margin-top: 0;
  }

  100% {
    height: 25%;
    margin-top: 8px;
  }
`

export const jiggle = keyframes`
  0% {
    transform: rotate(-1deg);
	}

	50% {
   	transform: rotate(1deg);
	}
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 0.9;
  }
`;

export const scaleIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(.5);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
`;
