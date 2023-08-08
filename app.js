const passwordToggle = document.querySelector('.js-password-toggle')

passwordToggle.addEventListener('change', function() {
  const password = document.querySelector('.js-password'),
    passwordLabel = document.querySelector('.js-password-label')

  if (password.type === 'password') {
    password.type = 'text'
    passwordLabel.innerHTML = '<img class="h-full" src="./assets/images/icon/eye-open.png" alt="">'
  } else {
    password.type = 'password'
    passwordLabel.innerHTML = '<img class="h-full" src="./assets/images/icon/eye-close.png" alt="">'
  }

  password.focus()
})
