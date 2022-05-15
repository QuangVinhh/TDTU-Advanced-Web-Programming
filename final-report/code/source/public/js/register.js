
const form = document.getElementById('register-form');
const fullname = document.getElementById('fullname');
const gender = document.getElementById('gender');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const address = document.getElementById('address');
const birthday = document.getElementById('birthday');
const check = document.getElementById('register-check');

const uploadFrontID = document.getElementById('upload-frontID');
const imageFrontID = document.getElementById('image-frontID');
const nameFrontID = document.getElementById('name-frontID');

const uploadBackID = document.getElementById('upload-backID');
const imageBackID = document.getElementById('image-backID');
const nameBackID = document.getElementById('name-backID');

//-----Fullname
fullname.addEventListener('input', (e) => {
    setSuccess(fullname)
})

fullname.addEventListener('focusout', (e) => {
    const fullnameValue = fullname.value.trim();
    if (fullnameValue === '') {
        setError(fullname, 'Please enter your Fullname !')
    }
})

//-----Gender
gender.addEventListener('input', (e) => {
    setSuccess(gender)
})

gender.addEventListener('focusout', (e) => {
    const genderValue = gender.value.trim();
    if (genderValue === '') {
        setError(gender, 'Please choose your Gender !')
    }
})

//-----Email
email.addEventListener('input', (e) => {
    setSuccess(email)
})

email.addEventListener('focusout', (e) => {
    const emailValue = email.value.trim();
    if (emailValue === '') {
        setError(email, 'Please enter your Email !')
    }
})

//-----Phone
phone.addEventListener('input', (e) => {
    setSuccess(phone)
})

phone.addEventListener('focusout', (e) => {
    const phoneValue = phone.value.trim();
    if (phoneValue === '') {
        setError(phone, 'Please enter your Phone !')
    }
})

//-----Address
address.addEventListener('input', (e) => {
    setSuccess(address)
})

address.addEventListener('focusout', (e) => {
    const addressValue = address.value.trim();
    if (addressValue === '') {
        setError(address, 'Please enter your Address !')
    }
})

//-----Birthday
birthday.addEventListener('input', (e) => {
    setSuccess(birthday)
})

birthday.addEventListener('focusout', (e) => {
    const birthdayValue = birthday.value.trim();
    if (birthdayValue === '') {
        setError(birthday, 'Please choose your Birthday !')
    }
})

//-----Check
check.addEventListener('change', (e) => {
    setSuccess(check)
})

check.addEventListener('focusout', (e) => {
    const checkValue = check.checked;
    if (checkValue === false) {
        setError(check, 'Please verify our License !')
    }
})

//-----Front ID
uploadFrontID.onchange = () => {
    const reader = new FileReader();
    reader.readAsDataURL(uploadFrontID.files[0]);
    console.log(uploadFrontID.files[0]);
    reader.onload = () => {
        imageFrontID.setAttribute("src", reader.result);
    }
    nameFrontID.textContent = uploadFrontID.files[0].name;
}

uploadFrontID.addEventListener('change', (e) => {
    setSuccess(uploadFrontID)
})

//-----Back ID
uploadBackID.onchange = () => {
    const reader = new FileReader();
    reader.readAsDataURL(uploadBackID.files[0]);
    console.log(uploadBackID.files[0]);
    reader.onload = () => {
        imageBackID.setAttribute("src", reader.result);
    }
    nameBackID.textContent = uploadBackID.files[0].name;
}

uploadBackID.addEventListener('change', (e) => {
    setSuccess(uploadBackID)
})

//-----Form
form.addEventListener('submit', (e) => {

    const fullnameValue = fullname.value.trim();
    const genderValue = gender.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const addressValue = address.value.trim();
    const birthdayValue = birthday.value.trim();
    const checkValue = check.checked;
    const frontIDValue = imageFrontID.src;
    const backIDValue = imageBackID.src;

    if (fullnameValue === '') {
        e.preventDefault();
        setError(fullname, 'Please enter your Fullname !');
    } else { setSuccess(fullname) }

    if (genderValue === '') {
        e.preventDefault();
        setError(gender, 'Please choose your Gender !');
    } else { setSuccess(gender) }

    if (emailValue === '') {
        e.preventDefault();
        setError(email, 'Please enter your Email !');
    } else { setSuccess(email) }

    if (phoneValue === '') {
        e.preventDefault();
        setError(phone, 'Please enter your Phone !');
    } else { setSuccess(phone) }

    if (addressValue === '') {
        e.preventDefault();
        setError(address, 'Please enter your Address !');
    } else { setSuccess(address) }

    if (birthdayValue === '') {
        e.preventDefault();
        setError(birthday, 'Please choose your Birthday !');
    } else { setSuccess(birthday) }

    if (checkValue === false) {
        e.preventDefault();
        setError(check, 'Please verify our License !');
    } else { setSuccess(check) }

    if (frontIDValue === '') {
        e.preventDefault();
        setError(uploadFrontID, 'Please upload your Frontside ID !');
    } else { setSuccess(uploadFrontID) }

    if (backIDValue === '') {
        e.preventDefault();
        setError(uploadBackID, 'Please upload your Backside ID !');
    } else { setSuccess(uploadBackID) }

});

//-----function
function setError(input, message) {
    const formControl = input.parentElement;
    const errorMessage = formControl.querySelector('.register-message');

    errorMessage.innerText = message;
    if (input === check) {
        formControl.className = 'register-form-check register-error';
    }
    else if (input === uploadFrontID || input === uploadBackID) {
        formControl.className = 'register-image register-error col-lg-6';
    }
    else {
        formControl.className = 'register-input register-error col-lg-6';
    }
}

function setSuccess(input) {
    const formControl = input.parentElement;
    if (input === check) {
        formControl.className = 'register-form-check';
    }
    else if (input === uploadFrontID || input === uploadBackID) {
        formControl.className = 'register-image col-lg-6';
    }
    else {
        formControl.className = 'register-input col-lg-6';
    }
}






