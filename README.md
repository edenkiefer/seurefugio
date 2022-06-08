# seurefugio

Documentação do script.js

Esse bloco de código faz uma simulação do que seria a quantidade de pessoas ajudadas em tempo real.
Primeiro declaro uma variável que vai armazenar a quantidade de pessoas ajudadas, depois um temporizador onde ele aumenta a quantidade de pessoas ajudadas randomicamente com a função ```Math.random().```

``` javascript
var peapleHelped = 10000;

setInterval(function () {
    display = document.querySelector('#peapleHelped');
    peapleHelped += Math.floor(Math.random() * 101)
    display.textContent = peapleHelped;
}, 3000);
```

Já o bloco a seguir é uma função feita para mudar o conteúdo da página.
Recebo um parâmetro na função e ai eu verifico qual conteúdo vai ficar ou não na página através dos ifs.
Consigo obter cada uma das tags através da função ```document.getElementeById(id)``` que me permite obter objetos da DOM e manipula-los no JS.
Escondo e mostro eles atribuindo outro valor a propriedade ```display``` de cada um.

```javascript
function changeContainer(container) {
    if (container == "home") {
        document.getElementById("home").style.display = "block";
        document.getElementById("help").style.display = "none";
        document.getElementById("contact").style.display = "none";
    }
    
    if (container == "help") {
        document.getElementById("help").style.display = "block";
        document.getElementById("home").style.display = "none";
        document.getElementById("contact").style.display = "none";
    }

    if (container == "contact") {
        document.getElementById("contact").style.display = "block";
        document.getElementById("home").style.display = "none";
        document.getElementById("help").style.display = "none";
    }
}
```