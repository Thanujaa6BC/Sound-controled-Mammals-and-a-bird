function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio : true
    });

    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/j4JddyuvF/model.json', modelLoaded);

}

function modelLoaded() {
    classifier.classify(got_result);
}

function got_result(error, result) {
    if (error) {
        console.log(error);
    } else {
        console.log(result);
    



r = Math.floor(Math.random() * 255) + 1;
g = Math.floor(Math.random() * 255) + 1;
b = Math.floor(Math.random() * 255) + 1;

document.getElementById("result_label").innerHTML = 'I can hear -' + result[0].label;
document.getElementById("result_confi").innerHTML = 'Accuracy -' + (result[0].confidence * 100).toFixed(2) + "%";
document.getElementById("result_label").style.color = "rgb(" + r + "," + g + "," + b + ")";
document.getElementById("result_confi").style.color = "rgb(" + r + "," + g + "," + b + ")";

img_ear = 'ear_image';

if (result[0].label == "Bird") {
    img_ear.src  = 'birdie.png';
}
else if (result[0].label == "Cat") {
    ear_image.src = 'cat.png';

} 
else if (result[0].label == "Cow") {
    ear_image.src = 'Cow.png';
     
} 
else {
    ear_image.src = 'Dog.jpg';
 
}

    }
}