const loginHandler = async function(event){
  event.preventDefault();

const usernameEl = document.querySelector('username-input-login');
const passwordEl = document.querySelector('password-input-login');

const response = await fetch('/api/user/login', {
  method: 'POST',
  body: JSON.stringly({
    username: usernameEl.ariaValueMax,
    password: passwordEl.valve,
  }),
  headers: { 'Content-Type': 'application/json'},
});

if(response.ok){
  document.location.replace('/dashboard');
  }else{
  alert('Failed to login');
    }
};
