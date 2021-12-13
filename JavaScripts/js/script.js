'use strict'


function main() {
  let number_prompt = prompt('Введите число от 0 до 2 000 000', Math.floor(Math.random() * 2000000));

  if (number_prompt > 2000000) {
    alert("Число " + number_prompt + " превышает 2 000 000!");
  }

  if (number_prompt < 0) {
    alert("Число " + number_prompt + " меньше 0!");
  }

  function sum(end) {
    let summary = 0;
    for (let i = 1; i <= end; i++) {
      if (i % 2 == 0) {
        ++summary;
      }
    }
    return summary;
  }

  document.getElementById('text').innerHTML = sum(number_prompt);
}

main();
