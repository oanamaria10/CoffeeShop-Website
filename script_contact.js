window.onload= function(){
    const form = document.querySelector('form');
    const element = document.getElementsByTagName('header')[0];
    const computedStyle = getComputedStyle(element);
    form.style.backgroundColor = computedStyle.color;
    const firstNameInput = document.getElementById('first_name');
    const lastNameInput = document.getElementById('last_name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');

    firstNameInput.type = 'text';
    firstNameInput.minLength = 3;
    firstNameInput.maxLength = 30;
    firstNameInput.required = true;
    lastNameInput.type = 'text';
    lastNameInput.minLength = 3;
    lastNameInput.maxLength = 30;
    lastNameInput.required = true;
    emailInput.type = 'email';
    emailInput.required = true;
    phoneInput.type = 'text';
    phoneInput.required = true;
    messageInput.type = 'text';
    messageInput.required = true;

    function handleSubmit(event) {
        event.preventDefault(); 
        event.stopPropagation(); 
        if (validateForm()) {
            sendFormData();
        }
    }
    function validateForm() {
        if (
        firstNameInput.value.trim() === '' ||
        lastNameInput.value.trim() === '' ||
        emailInput.value.trim() === '' ||
        phoneInput.value.trim() === '' ||
        messageInput.value.trim() === ''
        ) {
            alert('Please fill in all fields.');
            return false; 
        }
        const phonePattern = /^\d{3}-\d{3}-\d{3}$/;
        if (!phonePattern.test(phoneInput.value)) {
            alert('Please enter a valid phone number (e.g., 123-456-789).');
            return false; 
        }
        const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        if (!emailPattern.test(emailInput.value)) {
            alert('Please enter a valid email address.');
            return false; 
        }
        return true; 
    }
    function sendFormData() {
        const firstName = firstNameInput.value;
        const lastName = lastNameInput.value;
        const email = emailInput.value;
        const phone = phoneInput.value;
        const message = messageInput.value;
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Email:', email);
        console.log('Phone Number:', phone);
        console.log('Message:', message);
        form.reset();
    }
    form.addEventListener('submit', handleSubmit);
}