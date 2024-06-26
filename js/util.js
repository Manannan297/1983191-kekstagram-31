import { DEBOUNCE_DELAY } from './consts.js';

const isEscapeKey = (evt) => evt.key === 'Escape';

function debounce (callback, timeoutDelay = DEBOUNCE_DELAY) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export { isEscapeKey, debounce };
