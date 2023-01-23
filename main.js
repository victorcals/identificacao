
//Sintaxe utlizando varias variáveis.
//const github = 'jakeliny'
//const youtube = 'jakelinygracielly'
//const instagram = "jakeliny.gracielly"
//const facebook = 'maykbrito'
//const twitter = 'jakelinytec'

//Sintaxe utilizando uma variável(classe)
const LinksSocialMedia = {
    github: 'victorcals',
    instagram: 'victorcals_',
    facebook: 'sinbad.18',
    twitter: 'JinCals99'
}



function changeSocialMediaLinks() {
    //Para chamar tem que acessar o DOM, lá você consegue ler e alterar o momvimento.
    //Sintaxe completa para alterar
    //document.getElementById('userName').textContent = 'Emilie'

    for (let li of linksHtml.children) {
        //alert(li.getAttribute('class'))
        const social = li.getAttribute('class') //Para criar e guardar valor de um HTML dentro de uma variável
        li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`

        //alert(li.children[0].href)
    }
}

changeSocialMediaLinks()
//Pegando informações via API GitHub e utilizando Json

function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${LinksSocialMedia.github}`

    //Como pegar a url e pega no Json
    //Comando fetch, ele vai bater na url da API pegar o que a API responder.
    fetch(url)
        .then(response => response.json()) //Quando for somente uma função não é necessário as chaves
        .then(data => {
            userName.textContent = data.name
            bio.textContent = data.bio
            //textContent = função para alterar o testo de um certo local
            userGiLink.href = data.url
            //Quando for trocar href não se coloca textecontent, se coloca href
            profileImage.src = data.avatar_url
            userLogin.textContent = data.login
            //Lembrando, sempre que quiser alterar algo tem que dar um ID. Class para trocar somente o solicitado.
        })
    //Promisse, recurso JavaScript para coletar informação(nesse caso será utilizado o then)
    //Arroe Functions
    //ex normal funcition nomedafuncao(argumentos){}
    //code
    //ex arroe function(forma reduzida da função)
    //argumento =>{}(função anonima)
    //Se for executar a função usar função normal, quando for somente captar valores pode se udar arroe function
}
getGitHubProfileInfos()

  //Criar repositorio e jogar na internet.
