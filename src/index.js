console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {
    loadImages()
    loadBreed()
    const dropdown = document.querySelector('select#breed-dropdown')
    const ul = document.querySelector('ul#dog-breeds')
    dropdown.addEventListener('change', (e) => {
      ul.innerHTML = '';
      const choice = e.target.value 
      breeds.filter(breed => {
  
        if(breed[0] === choice) {
          const li = document.createElement('li')
          li.id = breed
          li.textContent = breed
          changeColor(li)
          ul.appendChild(li)
        }
      })
    })  
  })
  
  function loadImages() {
    const url = 'https://dog.ceo/api/breeds/image/random/4'
    return fetch(url)
    .then(response => response.json())
    .then(data => {
      const images = data.message
      for(let image of images) {
        addImage(image)
      }
    })
  }
  
  function addImage(imageUrl) {
    const container = document.getElementById('dog-image-container')
    const img = document.createElement('img')
    img.src = imageUrl
    container.appendChild(img)
  }
  
  function loadBreed() {
    const url = 'https://dog.ceo/api/breeds/list/all'
    return fetch(url)
    .then(res => res.json())
    .then(data => {
      breeds = Object.keys(data.message)
      for(let breed of breeds) {
        addBreed(breed)
      }
    })
  }
  
  function addBreed(el) {
    const ul = document.querySelector('ul#dog-breeds')
    const li = document.createElement('li')  
    li.className = 'dogBreed'
    li.textContent = el
    changeColor(li)
    ul.appendChild(li)
  }
  
  function changeColor(el) {
    el.addEventListener('click', () => {
      el.style.color = '#9C51E0'
    })
  }