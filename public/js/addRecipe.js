const newFormHandler = async (event) => {
  event.preventDefault();
  // Collect values from the add recipe form
  const name = document.querySelector('#recipe-name').value.trim();
  const ingredients = document
    .querySelector('#recipe-ingredients')
    .value.trim();
  const method = document.querySelector('#recipe-desc').value.trim();
  const cat_id = document.querySelector('#recipe-cat').selectedIndex;
  const prep_time = document.querySelector(
    'input[name="prep-time"]:checked'
  ).value;
  const has_nuts = document.querySelector('#nuts:checked') !== null;
  const vegan = document.querySelector('#vegan:checked') !== null;
  const photo = document.querySelector('#input-files').files[0];
  // formdata for sending all content types
  const formData = new FormData();
  formData.append('name', name);
  formData.append('ingredients', ingredients);
  formData.append('method', method);
  formData.append('prep_time', prep_time);
  formData.append('cat_id', cat_id);
  formData.append('vegan', vegan);
  formData.append('has_nuts', has_nuts);
  formData.append('file', photo);

  if (name && ingredients && method && prep_time && cat_id) {
    const response = await fetch('/api/add-recipe', {
      method: 'POST',
      body: formData,
    });
    if (response.ok) {
      document.getElementById('add').innerHTML = 'Recipe Created successfully';
      setTimeout(function () {
      // If successful, redirect the browser to the profile page
        document.location.replace('/api/user-profile');
      }, 2000);
    } else {
      alert('Failed to create recipe');
    }
  }
};

document
  .querySelector('.new-recipe-form')
  .addEventListener('submit', newFormHandler);
