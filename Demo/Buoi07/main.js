// console.log("Hello")
let weightInput = document.getElementById('weight');
let heightInput = document.getElementById('height');
let calBtn = document.getElementById('calBtn');

let weight, height;

weightInput.addEventListener('change',function(e)
{
    //getvalue
    weight = e.target.value; //string
    weight = parseFloat(weight);
    console.log("w= " + weight)
});

heightInput.addEventListener('change',function(e)
{
    //getvalue
    height = e.target.value; //string
    height = parseFloat(height);//Integer,  Float, Double
    console.log("h= " + height)
});

calBtn.addEventListener('click', function(){
    let BMI = weight/(height*height)
    console.log(BMI);
})


