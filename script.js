window.onload = function(){
    imgDiv = document.querySelector('#img-div');
    imgChoix = document.querySelectorAll('.choice');
    imgChoix.forEach(element => {
        element.addEventListener('click', myChoice);
    });

    imgGallery = document.querySelectorAll('.image');
    imgGallery.forEach(element => {
        element.addEventListener('mouseenter', showCaption);
    });

    imgGallery.forEach(element => {
        element.addEventListener('mouseleave', hideCaption);
    });

    captionGallery = document.querySelectorAll('.caption-img');
}


function myChoice(){
    switch (this.className) {
        case "circle pink choice":
            imgDiv.setAttribute('src', './images/headphones/color-option01.jpg');
            circleColor(this);
            break;
        case "circle gray-200 choice":
            imgDiv.setAttribute('src', './images/headphones/color-option02.jpg');
            circleColor(this);
            break;
        case "circle gray-300 choice":
            imgDiv.setAttribute('src', './images/headphones/color-option03.jpg');
            circleColor(this);
            break;
        case "circle flag1 choice":
            imgDiv.setAttribute('src', './images/headphones/color-option04.jpg');
            circleColor(this);
            break;
        case "circle flag2 choice":
            imgDiv.setAttribute('src', './images/headphones/color-option05.jpg');
            circleColor(this);
            break;
        case "circle flag3 choice":
            imgDiv.setAttribute('src', './images/headphones/color-option06.jpg');
            circleColor(this);
            break;
    }
}

function showCaption(){
    captionGallery.forEach(element => {
        if (this.dataset.id == element.dataset.id){
            element.style.visibility = "visible";
        }
    });
}


function hideCaption(){ 
    captionGallery.forEach(element => {
        if (this.dataset.id == element.dataset.id){
            element.style.visibility = "hidden";
        }
    });
}

function circleColor(circle){
    imgChoix.forEach(element => {
        element.style.outlineColor = "#7e879c";
    });
    imgChoix.forEach(element => {
        if (element.id =! circle.id){
            circle.style.outlineColor = "#7e879c";
        }
        else {
            circle.style.outlineColor = "#ff4243";
        }
    });
}