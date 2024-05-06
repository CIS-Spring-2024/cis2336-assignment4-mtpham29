/* Button is clicked and Class and ID are taken to display Menus */
document.addEventListener('click', function(e){
    if(e.target.classList.contains('menu_button')){
        var targetId = e.target.getAttribute('data-target');
        var relatedDiv = document.getElementById(targetId);
        var all_divs = this.documentElement.querySelectorAll('.relatedDiv');
        all_divs.forEach(function(div){
            if(div.id!==targetId){
                div.style.display="none";
            }
        });
        if(relatedDiv){
            relatedDiv.style.display="block";
        }
    }
});
/* Button is clicked to put in order forms for specific menu foods */
document.addEventListener('click', function(e){
    if(e.target.classList.contains('order_button')){
        var targetIdtwo = e.target.getAttribute('data-targettwo');
        var relatedDivtwo = document.getElementById(targetIdtwo);
        var all_divstwo = this.documentElement.querySelectorAll('.relatedDivtwo');
        all_divstwo.forEach(function(div){
            if(div.id!==targetIdtwo){
                div.style.display="none";
            }
        });
        if(relatedDivtwo){
            relatedDivtwo.style.display="block";
        }
    }
});
/* Name and Phone number validation */
function nameValidation(){
    let name = document.getElementById('name').value;
    let errorName = document.getElementById('nameError');
    if (name === ('')){
        errorName.innerText = 'Required: Please provide your name.'
        return false;
    } else {
        errorName.innerText = ''
        return true;
    }
}
function phoneValidation(){
    let phone = document.getElementById('phone').value;
    let errorPhone = document.getElementById('phoneError');
    if (phone.length !== 10){
        errorPhone.innerText = 'Please provide a 10 digit phone number.'
    } else{
        errorPhone.innerText = '';
        return true;
    }
}
/* Order Validation */
function orderSubmitted(event, typeMeal){
    event.preventDefault();
    let valid = nameValidation() && phoneValidation();
    let items = [];

    if (typeMeal === 'breakfast'){
        items = ['waffles','yogurt', 'riceporridge', 'eggs'];}
        else if (typeMeal === 'lunch'){
            items = ['tacos', 'spicycurry', 'empanadas', 'beefandbroccoli'];}
        else if (typeMeal === 'dinner'){
            items = ['salmon', 'steak', 'pizza', 'salad'];}
        for (let item of items){
            let itemtype = document.getElementById(item);
            let itemquantity = document.getElementById(item + 'quantity');
            let itemerror = document.getElementById(item + 'error');
            let quantity = parseInt(itemquantity.value);
            if (itemtype.value === '0' || isNaN(quantity) || quantity < 0 || quantity > 10){
                itemerror.innerText = 'Please pick a valid item and quantity.';
                valid = false;
            }
            else{
                itemerror.innerText = '';
            }
                
            }
            if (valid){
                console.log('Name:', document.getElementById('name').value);
                console.log('Confirmation Phone Number:', document.getElementById('phone').value);
                for (let item of items){
                    let itemtype = document.getElementById(item);
                    let itemquantity = document.getElementById(item + 'quantity');
                    let quantity = itemquantity.value|| 0;
                    console.log(item + ' '+ itemtype.value+ ' '+ 'Quantity:', quantity);}
                    alert('Your Order has been Submitted!');
                }
            }
/* script for about button */
function savequestion() {
    var questionTextarea = document.getElementById('questionTextarea');
    var questions = questionTextarea.value;
    alert("Question submitted: \n" + questions);
    console.log('Question:' + questions)
    questionTextarea.value = '';
}
/* script for contact information form */
document.getElementById('contactinfo').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name2 = document.getElementById('name2').value;
    var email2 = document.getElementById('email2').value;
    var phone2 = document.getElementById('phone2').value;
    var message2 = document.getElementById('message2').value;

    var phonePattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
        if (!phonePattern.test(phone2)) {
            document.getElementById('phone2').classList.add('error2');
            return;
        } else {
            document.getElementById('phone2').classList.remove('error2');
        }
    
    console.log("Name: " + name2);
    console.log("Email: " + email2);
    console.log("Phone Number: " + phone2);
    console.log("Message: " + message2);

    alert('Thanks for reaching out!');
    
    document.getElementById('name2').value = '';
    document.getElementById('email2').value = '';
    document.getElementById('message2').value = '';
});