import { modalAlerts } from './utils.js'

async function signupFormHandler(event) {
    event.preventDefault();
    console.log("clicked signup button")

    const username = document.querySelector('#email-login').value.trim();
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    const alert = document.querySelector('#login-modal-alert')

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: {'Content-Type': 'application/json'}
        })
        
        if (response.ok) {
            modalAlerts(alert,'success','Successful sign-up!')

            document.location.replace('/dashboard')
            console.log('success');
        }
        else
        {
            modalAlerts(alert, 'error', response.statusText);
            console.log(response.status)
        }

    }
    else {
            modalAlerts(alert,'warning','All fields must be completed')
            resetModalHandler();
    }
}

async function loginFormHandler(event) {
    event.preventDefault();

    const password = document.querySelector('#password-login').value.trim();
    const email = document.querySelector('#email-login').value.trim();

    const alert = document.querySelector('#login-modal-alert')

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        })
        
        if (response.ok) {
            modalAlerts(alert,'success','Success!')
            document.location.replace('/')
        }
        else {
            modalAlerts(alert, 'error', 'invalid');
        }
        

    }
    else {
        modalAlerts(alert, 'error', 'invalid');
    }
}

document.querySelector('#signup-btn').addEventListener('click', signupFormHandler);
document.querySelector('#login-btn').addEventListener('click', loginFormHandler);