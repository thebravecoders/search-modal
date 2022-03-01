const model = document.querySelector('.model');
const searchInput = document.querySelector('.model__search-input');
const searchList = document.querySelector('.search__list');


const data = [
      {
            name: 'Chrome',
            picture: 'chrome.png'
      },
      {
            name: 'Mozilla Firefox',
            picture: 'Firefox.png'
      },
      {
            name: 'Terminal',
            picture: 'terminal.png'
      },
      {
            name: 'Files',
            picture: 'files.png'
      }
]


const searchHandler = string => {

      const filteredData = data.filter(({ name }) => name.toLocaleLowerCase().includes(string.toLocaleLowerCase()));

      const filteredItem = filteredData.map(({ name, picture }) => `<div class="search__item">
                                                                        <img src="img/${picture}" alt="" class="search__item-img">
                                                                        <span class="search__item-name">${name}</span>
                                                                    </div>`).join('')

      searchList.innerHTML = string && filteredItem;

}


addEventListener('keydown', event => {



      if (searchInput !== document.activeElement)
            event.preventDefault();


      if (event.ctrlKey && event.keyCode === 75) {
            model.classList.add('model__active')
            searchInput.focus();
      } else if (event.keyCode === 27) {
            model.classList.remove('model__active')
      }

})


searchInput.addEventListener('input', event => {
      searchHandler(event.target.value)
})