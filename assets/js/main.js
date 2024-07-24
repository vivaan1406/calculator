let calc_btns = document.querySelectorAll(".calc_btn");
let display = document.querySelector("#display");
let isSymbolClicked = false;

for (let calc_btn of calc_btns) {
  // console.log(calc_btn);
  calc_btn.addEventListener("click", function () {
    let this_element = this;
    let this_value = this_element.value;

    if (this_value == "AC") {
      display.value = 0;
      isSymbolClicked = false;
    } else if (this_value == "=") {
      let display_final_value = display.value;
      let calculated_value = eval(display_final_value);
      // console.log(calculated_value);
      display.value = calculated_value;
      isSymbolClicked = false;
    } else if (this_value == "C") {
      let display_value_string = display.value;
      display.value = display_value_string.slice(0, -1);
      if (display_value_string.length == 1) {
        display.value = 0;
      }
      isSymbolClicked = false;
    } else {
      if (display.value == 0) {
        if (this_element.classList.contains("symbol_btn")) {
          return false;
        }
        display.value = this_value;
      } else {
        if (!this_element.classList.contains("symbol_btn")) {
          isSymbolClicked = false;
        }

        if (isSymbolClicked) {
          let display_content = display.value;
          let dipslay_content_new = display_content.slice(0, -1);
          display.value = dipslay_content_new;
          display.value += this_value;
          isSymbolClicked = true;
        } else {
          display.value += this_value;
        }

        if (this_element.classList.contains("symbol_btn")) {
          isSymbolClicked = true;
        }
      }
    }
  });
}
