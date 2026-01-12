const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

let formData = localStorage.getItem(localStorageKey)

if (saveData) {
  formData = JSON.parse(saveData);
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener('input', (evt) => {
  const { name, value } = evt.target;
formData[name] = value;
localStorage.setItem(localStorageKey, JSON.stringify(formData));
});
form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (!formData.email || !formData.message) {
    return;
  }

  console.log(formData);
  form.elements.email.value = '';
  form.elements.message.value = '';

  formData.email = '';
  formData.message = '';
  localStorage.removeItem(localStorageKey);
})
