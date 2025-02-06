// Include body scripts in the right order
// They will be concatenated using gulp-rigger in body.min.js

//= vendor/jquery.js
//= lib/jquery.navkit.js
//= lib/jquery.portfolio.js

const scriptURL = 'https://script.google.com/macros/s/AKfycbzUzFPuMb18DW4neylOus4nu7TpeMcIdj5VLWNZ6js6-ZCDTnBP_49MR-7MDjrgytbXrw/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      console.log('Success!', response);
      window.location.replace('/thank-you.html'); })
    .catch(error => console.error('Error!', error.message))
})
