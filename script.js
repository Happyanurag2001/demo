let imp = document.querySelector("input");
imp.addEventListener("input", function (dets) {
  if (dets.data !== null) {
    console.log(dets.data);
  }
});

let select = document.querySelector("select");
select.addEventListener("change", function (dets) {
  console.log(dets.target.value);
});

let device = document.querySelector("#device");
select.addEventListener("change", function (dets) {
  // device.innerText = dets.target.value+" Selected";
  device.innerText = `${dets.target.value} Selected`;
});

// whole screen dynamically letter chage
let h2 = document.querySelector("h2");
window.addEventListener("keydown", function (dets) {
  if (dets.key === " ") {
    h2.textContent = "SPC";
    h2.style.color = "yellow";
    console.log(dets.key);
  } else {
    h2.textContent = dets.key;
    h2.style.color = "red";
    console.log(dets.key);
  }
});

// choose file option
let inp_f = document.querySelector("#inp_f");
let upload_btn = document.querySelector("#upload_btn");
upload_btn.addEventListener("click", function(dets){
  inp_f.click();
});
// --------------> displaying file name in button 
inp_f.addEventListener('change', function(dets){
  let file =dets.target.files[0];
  if(file){
    upload_btn.textContent=file.name;
  }
});

