const form = document.querySelector("form")
console.log(form);

form.addEventListener('submit',function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#Weight").value)
    const result = document.querySelector(".result")

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = 'Plese give a valid height'
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = 'Plese give a valid weight'
    } else {
        result.innerHTML = `${(weight /((height* height)/ 10000)).toFixed(2)}`
    }
    

})