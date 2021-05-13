import { createGlobalStyle } from "styled-components/macro";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
:root {
  --color-spotify-logo-green: #1ed760;
  --color-spotify-green: #1db954;

  --color-black: #121212;
  --color-grey-1: #1c1c1c;
  --color-grey-1-70: rgba(28, 28, 28, 0.9);
  --color-grey-1-70: rgba(28, 28, 28, 0.7);
  --color-grey-1-50: rgba(28, 28, 28, 0.5);
  --color-grey-1-30: rgba(28, 28, 28, 0.3);
  --color-grey-2: #2e2e2e;
  --color-grey-3: #5c5c5c;
  --color-grey-4: #9c9898;
  --color-grey-5: #a3a3a3;
  --color-grey-6: #b6b6b6;
  --color-white: #f1f1f1;

  --font-size-base: 1rem;
  --font-size-1: 1.2rem;
  --font-size-2: 1.44rem;
  --font-size-3: 1.728rem;
  --font-size-4: 2.074rem;
  --font-size-5: 2.488rem;
  --font-size-6: 2.986rem;
  --font-size-7: 3.583rem;
  --font-size-8: 4.3rem;
  --font-size-9: 5.16rem;

  --spacing-size-xs-1: 0.5rem;
  --spacing-size-sm-1: 1rem;
  --spacing-size-sm-2: 1.25rem;
  --spacing-size-sm-3: 1.5rem;
  --spacing-size-sm-4: 1.75rem;
  --spacing-size-md-1: 2rem;
  --spacing-size-md-2: 2.5rem;
  --spacing-size-lg-1: 3rem;
  --spacing-size-lg-2: 3.5rem;
  --spacing-size-xl: 5rem;
  --spacing-size-xxl: 7rem;
  --spacing-size-xxxl: 10rem;
}

* {
  margin: 0;
  padding: 0;
}

*,
*::after,
*::before {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 62.5%; /* 62.5% with 1rem = 10px; Browser Default is 16px */

  font-family: "Roboto", sans-serif;
  line-height: 1.75;
  letter-spacing: 1.25px;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

html,
body {
  width: 100%;
  max-width: 100%;
  position: relative;
}

a {
  color: var(--color-white);
  text-decoration: none;
}
/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100%;
  overflow-x: hidden;
  background-color: var(--color-grey-1);
  color: var(--color-white)
}

#root {
    min-height: 100%;
}

/* Make images easier to work with */
img,
picture {
  width: 100%;
  display: block;
}

vertical-align: middle;

input,
select,
textarea,
button {
  font-family: inherit;
  outline: none;
  &::placeholder {
      opacity: 0.7;
  }
}

/* Remove all animations and transitions for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

@media ${theme.bp.desktopL} {
  html {
    font-size: 59.5%; 
  }
};

@media ${theme.bp.desktopS} {
  html {
    font-size: 54.5%; 
  }
};

@media ${theme.bp.tabletS} {
  html {
    font-size: 52.5%; 
  }
}

@media ${theme.bp.mobileL} {
  html {
    font-size: 50.5%; 
  }
}`;

export default GlobalStyle;
