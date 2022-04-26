let text =
  " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga eligendi assumenda delectus ipsam ipsum perspiciatis cupiditate sint esse temporibus, laboriosam nulla accusantium doloribus?";

const root = document.getElementById("root");

let index = 0;

function textWrite() {
  root.innerText = text.slice(0, index);
  index++;
  if (index > text.length) {
    index = 0;
  }
}

setInterval(textWrite, 100);
