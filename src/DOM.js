const DOM = (() => {
  const REWARD_COFFEE_COUNTER = document.querySelector(
    ".reward-coffee-counter"
  );
  const COFFEE_COUNTER_LABEL = document.querySelector(
    "label[for='coffee-counter-progress']"
  );
  const PROGRESS_BAR = document.querySelector("#coffee-counter-progress");
  const BUY_BUTTON = document.querySelector("#buy-coffee-button");

  return {
    REWARD_COFFEE_COUNTER,
    COFFEE_COUNTER_LABEL,
    PROGRESS_BAR,
    BUY_BUTTON,
  };
})();

export default DOM;
