//our text
let text =
  " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga eligendi assumenda delectus ipsam ipsum perspiciatis cupiditate sint esse temporibus, laboriosam nulla accusantium doloribus?";

// our div. which we want to add text to this root div
const root = document.getElementById("root");

//count from zero to our text length
let index = 0;

// function which to write on browser
function textWrite() {
  root.innerText = text.slice(0, index);
  index++;
  if (index > text.length) {
    index = 0;
  }
}

// time to each second or minute. which you want you can add time
setInterval(textWrite, 100);
