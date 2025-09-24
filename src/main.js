import DOM from "./DOM.js";

(() => {
  const id = Number(prompt("please enter your user id"));
  const getData = async (id) => {
    try {
      const response = await fetch(
        `https://coffe-store-api.fly.dev/get_user/${id}`,
        {
          mode: "cors",
          method: "GET",
        }
      );
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  const buyCoffee = async (id) => {
    try {
      const response = await fetch(
        `https://coffe-store-api.fly.dev/buy/${id}`,
        {
          mode: "cors",
          method: "GET",
        }
      );
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  const updateUI = (data) => {
    DOM.REWARD_COFFEE_COUNTER.innerText = data.coffee_reward;
    DOM.COFFEE_COUNTER_LABEL.innerText = data.coffee_counter;
    DOM.PROGRESS_BAR.value = data.coffee_counter;
  };

  getData(id).then((res) => {
    if (!res) return;
    if (res?.new_user) {
      alert("I created your account with the id " + id);
    }
    console.log(res);
    updateUI(res.user);
  });

  DOM.BUY_BUTTON.addEventListener("click", () => {
    buyCoffee(id).then((res) => {
      if (!res) return;
      updateUI(res.user);
    });
  });
})();
