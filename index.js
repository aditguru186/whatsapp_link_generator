console.log("Welcome to console on index Script!");
const url = "https://wa.me/";
const generateLink = () =>{
    var inputElement = document.getElementById("InputElement");
    let valueOfInput = inputElement.value;
    var finalUrl = "";
    let response = validateInputTobeNumber(valueOfInput);
    if(response.response === 200){
        valueOfInput = response.value;
        finalUrl = url + response.value;
        document.getElementById("resultId").innerHTML = finalUrl;
        document.getElementById("resultId").href = finalUrl;
        console.log(finalUrl)
    }
    else{
        console.log("Invalid number")
    }
}
const validateInputTobeNumber = (value) =>{
    var response = {
        response : 200,
        value : value
    }
    if(value.length < 10 || value.length > 13 || value.length === 11){
        response.response = 400;
        return response;
    }
    else if(value.substring(0,3) === "+91" && value.length === 13){
        response.value = value.substring(1);
        return response;
    }
    else if(value.substring(0,2) === "91" && value.length === 12){
        return response;
    }
    else if(value.length === 10 && value.substring(0,3) !== "+91"){
        response.value = "91"+value;
        return response;
    }
    else{
        response.response = 400;
        return response;
    }

}