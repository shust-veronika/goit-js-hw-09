const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

const saveData = localStorage.getItem(localStorageKey);

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
    alert('Please fill in all fields')
    return;
  }

  console.log(formData);
  form.reset();
  localStorage.removeItem(localStorageKey);

  formData = {
    email: '',
    message: '',
  }
})
