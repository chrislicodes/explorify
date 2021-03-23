import { createGlobalStyle } from "styled-components/macro";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
:root {
  --color-spotify-logo-green: #1ed760;
  --color-spotify-green: #1db954;

  --color-black: #121212;

  --color-grey-1: #202020;
  --color-grey-1-70: rgba(32, 32, 32, 0.7);
  --color-grey-1-50: rgba(32, 32, 32, 0.5);
  --color-grey-1-30: rgba(32, 32, 32, 0.3);
  --color-grey-2: #323232;
  --color-grey-3: #5c5c5c;
  --color-grey-4: #9c9898;
  --color-grey-5: #a3a3a3;
  --color-grey-6: #b6b6b6;

  --color-white: #f1f1f1;

  --font-size-base: 1rem;
  --font-size-xs: 1.2rem;
  --font-size-sm: 1.4rem;
  --font-size-md: 1.5rem;
  --font-size-md-2: 1.7rem;
  --font-size-lg: 2rem;
  --font-size-xl: 2.4rem;
  --font-size-xxl: 2.8rem;
  --font-size-xxxl: 3.0rem;

  --spacing-size-base: 2rem;
  --spacing-size-xxs: 0.20rem;
  --spacing-size-xs: 0.5rem;
  --spacing-size-s: 0.75rem;
  --spacing-size-sm-1: 1rem;
  --spacing-size-sm-2: 1.25rem;
  --spacing-size-sm-3: 1.5rem;
  --spacing-size-sm-4: 1.75rem;
  --spacing-size-md: 2rem;
  --spacing-size-md-2: 2.5rem;
  --spacing-size-lg: 3rem;
  --spacing-size-lg-2: 3.5rem;
  --spacing-size-xl: 5rem;
  --spacing-size-xl-2: 7rem;
  --spacing-size-xxl: 10rem;
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
  font-size: 60.5%; /* Usually 62.5% with 1rem = 10px; Browser Default is 16px */

  font-family: "Roboto", sans-serif;
  line-height: 1.6;
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

@media ${theme.bp.desktopS} {
  html {
    font-size: 58.5%; 
  }
};

@media ${theme.bp.tabletS} {
  html {
    font-size: 55.5%; 
  }
}`;
export default GlobalStyle;
