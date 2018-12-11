const button = document.getElementById('submit-btn');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('password1');
const messageText = document.querySelector('#messageText');
const token = window.location.search.replace('?token=','');

button.addEventListener('click', (event) => {
 event.preventDefault();
  if (password.value !== confirmPassword.value) {
    messageText.textContent = 'Inputed Password does not Match';
  }
  const inputData = {
    password: password.value
  };
  event.preventDefault();
  fetch(`https://efe-sendit.herokuapp.com/api/v1/users/auth/resetpassword`, {
    method: 'PUT',
    headers: { 'content-type': 'application/json', 'x-access-token': token },
    body: JSON.stringify(inputData)
  })
    .then(res => res.json())
    .then((res) => {
            if (res.message === 'Email sent.') {
             window.location.href = 'signin.html';
            }else if (res.message === 'Authentication Failed') {
              messageText.textContent = res.message;
        }else {
              messageText.textContent =  res.message;
          }
      })
      .catch(error => {
          messageText.textContent = error + '' +'server error'
      })
      });
        

