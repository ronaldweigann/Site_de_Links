function  toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    // if (html.classList.contains('light')) {
    //     html.classList.remove('light')
    // } else {
    //     html.classList.add('light')
    // }

    // Pegar a imagem
    const img = document.querySelector('#profile img')

    // Substituir a imagem
    if (html.classList.contains('light')) {
    // Se tiver light mode, adicionar a imagem com light
        img.setAttribute('src','./assets/avatar.png')
    } else {
    // Se tiver sem light mode, manter a imagem normal
        img.setAttribute('src','./assets/avatar-light.png')
    }
}

