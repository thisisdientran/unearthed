const header = document.querySelector('header')

const headerContainer = document.createElement('div')
headerContainer.className = 'header-container'

const headerLeft = document.createElement('div')
headerLeft.className = 'header-left'

const headerLogo = document.createElement('img')
headerLogo.src = '../logo.png'

const headerTitle = document.createElement('h1')
headerTitle.textContent = 'UnEarthed'

headerLeft.appendChild(headerLogo)
headerLeft.appendChild(headerTitle)

const headerRight = document.createElement('div')
headerRight.className = 'header-right'

const headerButton = document.createElement('button')
headerButton.textContent = 'Home'
headerButton.addEventListener('click', function handleClick(event){
    window.location = '/'
})

headerRight.appendChild(headerButton)
headerContainer.appendChild(headerLeft)
headerContainer.appendChild(headerRight)
header.appendChild(headerContainer)

// const nullResponse = document.createElement('h2')
// nullResponse.textContent = 'No Gifts Available 😞'
// header.appendChild(nullResponse)