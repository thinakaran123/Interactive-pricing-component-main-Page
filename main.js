slider = document.getElementById("slider");

checkbox = document.getElementById("cb");
views = document.getElementById("views");
dollars = document.getElementById("dollars");
let dollarsv;

function updatevalues() {
  const value = slider.value;
  if (value === "0") {
    document.getElementById("slider").style.accentColor.background =
      "linear-gradient(to right, pink 0% pink 50%,red 50% red 100%)";
    views.textContent = "10K";
    if (checkbox.checked) {
      dollarsv = 8.0 * 0.25;
    } else {
      dollarsv = "8.00";
    }
    dollars.textContent = dollarsv;
  }
  if (value === "25") {
    views.textContent = "50K";

    if (checkbox.checked) {
      dollarsv = 12.0 * 0.25;
    } else {
      dollarsv = "12.00";
    }
    dollars.textContent = dollarsv;
  }
  if (value === "50") {
    views.textContent = "100K";

    if (checkbox.checked) {
      dollarsv = 16.0 * 0.25;
    } else {
      dollarsv = "16.00";
    }
    dollars.textContent = dollarsv;
  }
  if (value === "75") {
    views.textContent = "500K";

    if (checkbox.checked) {
      dollarsv = 24.0 * 0.25;
    } else {
      dollarsv = "24.00";
    }
    dollars.textContent = dollarsv;
  }
  if (value === "100") {
    views.textContent = "1M";

    if (checkbox.checked) {
      dollarsv = 36.0 * 0.25;
    } else {
      dollarsv = "36.00";
    }
    dollars.textContent = dollarsv;
  }
}
slider.addEventListener("input", updatevalues);
checkbox.addEventListener("change", updatevalues);
