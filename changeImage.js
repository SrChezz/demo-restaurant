let cardFullColors = document.querySelectorAll('.full-colors')

let changeText = function (cardNumber, colorNumber, colorName) {
    
    let text = cardFullColors[cardNumber].children[4].children[0]
    let colorSelected = cardFullColors[cardNumber].children[4].children[1].children[colorNumber]


   
    text.innerHTML = `AVAILABLE IN: ${colorName}`;
    
    
 
}  

let card = document.querySelectorAll('.card')

let insideImage = function (cardNumber) {
    let insideImage = card[cardNumber].children[1]
    let insideButton = card[cardNumber].children[0]

    insideButton.classList.toggle("inside-active")
    insideImage.classList.toggle("image-inside-active")
}

let changeImage = function (cardNumber, colorNumber, imageURL) {
    
    //This is the image, we need it to change the image url
    /* let image = card[cardNumber].children[card[cardNumber].children.length - 3] */
    let image = card[cardNumber].children[2]

    // This is the color that was clicked, it is gonna become active now
    /* let colorSelected = card[cardNumber].children[card[cardNumber].children.length - 2].children[colorNumber] */
    let colorSelected = card[cardNumber].children[3].children[0].children[colorNumber]
    
    // This is the color that was activated before
    let colorActive = document.querySelectorAll('.colors .active')[cardNumber]


    /* console.log(card[cardNumber].children[3].children[0].children[colorNumber]) */
    /* console.log(document.querySelectorAll('.colors .active')[cardNumber]) */

    /* let card = cards[cardNumber]
    let color = colors[colorNumber]
    let active = actives[cardNumber] */

    
        image.src = imageURL;
        colorActive.classList.remove("active")
        colorSelected.classList.add("active");
    
}  
