let imp = document.querySelector('input');
imp.addEventListener('input', function(dets){
    if(dets.data!==null){
        console.log(dets.data);

    }

});


let select= document.querySelector('select');
select.addEventListener('change', function(dets){
    console.log(dets.target.value);
});


let device = document.querySelector('#device');
select.addEventListener('change', function(dets){
    // device.innerText = dets.target.value+" Selected";
    device.innerText = `${dets.target.value} Selected`;
});