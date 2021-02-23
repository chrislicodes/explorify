export const getHashParams = function () {
  var hashParams = {};
  var e,
    r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
  while ((e = r.exec(q))) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
};

export const transformDuration = (ms) => {
  return new Intl.DateTimeFormat(navigator.lang, {
    minute: "2-digit",
    second: "2-digit",
  }).format(ms);
};

export const capitalizeWord = (word) => {
  return word[0].toUpperCase() + word.slice(1);
};
