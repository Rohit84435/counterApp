let val = document.querySelector("#num");
let decrease = document.querySelector(".dec");
let increase = document.querySelector(".inc");
let reset = document.querySelector(".reset");
let change = document.querySelector(".change");
console.log(change.innerHTML);

decrease.addEventListener("click", function () {
  let curVal = parseInt(val.innerText);
  //   console.log(val.innerHTML);
  val.innerText = curVal - parseInt(change.value);
});
increase.addEventListener("click", function (e) {
  let curVal = parseInt(val.innerText);
  //   console.log(curVal);
  val.innerText = curVal + parseInt(change.value);
});

reset.addEventListener("click", () => {
  val.innerHTML = 0;
});
