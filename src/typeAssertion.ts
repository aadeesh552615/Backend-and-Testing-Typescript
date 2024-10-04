let form = document.getElementById("myForm")!;
let formInp = document.querySelector("#formInp") as HTMLInputElement;
form.onsubmit = (event: SubmitEvent) => {
  event.preventDefault();
  const value: number = Number(formInp.value);
  console.log(value);
  const h2 = document.createElement("h2");
  h2.textContent = (value + 20).toString();
  const body = document.querySelector("body")!;
  body.append(h2);
};
