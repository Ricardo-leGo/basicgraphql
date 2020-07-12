  
const range = 254;  

export let keyframes = `@-webkit-keyframes animation {
  10% {color:rgb(${Math.round(Math.random() * range)},
                 ${Math.round(Math.random() * range)},
                 ${Math.round(Math.random() * range)}
  )}
  30% {color:rgb(${Math.round(Math.random() * range)},
                 ${Math.round(Math.random() * range)},
                 ${Math.round(Math.random() * range)}
  )}
  50% {color:rgb(${Math.round(Math.random() * range)},
                 ${Math.round(Math.random() * range)},
                 ${Math.round(Math.random() * range)}
  )}
  70% {color:rgb(${Math.round(Math.random() * range)},
                 ${Math.round(Math.random() * range)},
                 ${Math.round(Math.random() * range)}
  )}
  90% {color:rgb(${Math.round(Math.random() * range)},
                 ${Math.round(Math.random() * range)},
                 ${Math.round(Math.random() * range)}
  )}
}`;



export const anim = { 
    textAlign: "center",
    fontSize: "7rem",
    display: "block",
    margin: "5vh auto",
    animationName: "animation",
    animationDuration:"1s",
    animationIterationCount:10
  }



