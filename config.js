var config = [
  {
    post: 'https://www.instagram.com/p/CCTspZVnqHc',
    redirect: 'https://bit.ly/3qbd47',
    alt: '#47 - [Tech] Versionamento e GIT com o Filho da Nuvem'
  },
  {
    post: 'https://www.instagram.com/p/CCBmuWknWHs',
    redirect: 'https://bit.ly/3qbd46',
    alt: '#46 - [Politize-se] Vida LGBTQ+ na Tecnologia'
  },
  {
    post: 'https://www.instagram.com/p/CB_UuVvHxU2',
    redirect: 'https://bit.ly/3qbd46',
    alt: '#46 - [Politize-se] Vida LGBTQ+ na Tecnologia'
  },
  {
    post: 'https://www.instagram.com/p/CB3OCplH5mp',
    redirect: 'https://bit.ly/3qbd-45',
    alt: '#45 - [Politize-se] Glamourização do Sofrimento'
  },
  {
    post: 'https://www.instagram.com/p/CB1WXbPHf7i',
    redirect: 'https://bit.ly/3qbd-45',
    alt: '#45 - [Politize-se] Glamourização do Sofrimento'
  },
  {
    post: 'https://www.instagram.com/p/CByAZuuHgm6',
    redirect: 'https://bit.ly/3qbd-45',
    alt: '#45 - [Politize-se] Glamourização do Sofrimento'
  },
  {
    post: 'https://www.instagram.com/p/CBtXSITnNYq',
    redirect: 'https://bit.ly/3qbd-45',
    alt: '#45 - [Politize-se] Glamourização do Sofrimento'
  },
  {
    post: 'https://www.instagram.com/p/CBeEqfOHqc1',
    redirect: 'https://bit.ly/3qbd-45',
    alt: '#45 - [Politize-se] Glamourização do Sofrimento'
  },
  {
    post: 'https://www.instagram.com/p/CBMCjatnaWq',
    redirect: 'https://bit.ly/3qbd44',
    alt: '#44 - [Tech] UX Design'
  },
  {
    post: 'https://www.instagram.com/p/CA8pIraHWka',
    redirect: 'https://bit.ly/3qbd43',
    alt: '#43 - [Politize-se] Filosofia na Periferia com o CAEF'
  },
  {
    post: 'https://www.instagram.com/p/CAqVmDKnLBc',
    redirect: 'https://quebradev.com.br/covid19-e-planejamento-urbano-na-periferia',
    alt: '#42 - [Politize-se] Covid-19 e Planejamento Urbano na Periferia'
  },
  {
    post: 'https://www.instagram.com/p/CAVYSASn7kJ',
    redirect: 'https://bit.ly/3qbd41',
    alt: '#41 - [Tech] Chatbots'
  },
  {
    post: 'https://www.instagram.com/p/CAIrCEcHBhN',
    redirect: 'https://bit.ly/3qbd40',
    alt: '#40 - [Vivências] Maternidade e Mercado de Trabalho'
  },
  {
    post: 'https://www.instagram.com/p/B_xUGf8HU_H',
    redirect: 'https://bit.ly/3qbd39',
    alt: '#39 - [Tech] PHP - com Hussani e Marcel Santos'
  },
  {
    post: 'https://www.instagram.com/p/B_fQwNsn1_z',
    redirect: 'https://bit.ly/3qbd38',
    alt: '#38 - [Tech] O que é Ciência de Dados?'
  }
]

function buildImage (postUrl, redirect, alt) {
  var link = document.createElement('a')
  link.setAttribute('href', redirect)

  var div = document.createElement('div')
  div.classList.add('col-4')

  var imageLink = postUrl + '/media?size=l'
  var img = document.createElement('img')

  img.setAttribute('src', imageLink)
  img.setAttribute('alt', alt)
  img.setAttribute('title', alt)

  link.appendChild(img)
  div.appendChild(link)

  return div
}

function main () {
  var images = config.map(function (url) {
    return buildImage(
      url.post,
      url.redirect,
      url.alt
    )
  })

  images.forEach(function (image) {
    document.querySelector('#image-list').appendChild(image)
  })
}

window.onload = main
