var largura = 0
var altura = 0
var vidas = 1
var tempo = 10

//Nivel de dificuldade do jogo
var criaMosquitoTempo = 1000

var nivel = window.location.search
nivel = nivel.replace('?', '')

   if(nivel === 'facil') {
      //facil
      criaMosquitoTempo = 1500

   } else if(nivel === 'normal') {
      //normal
      criaMosquitoTempo = 1000

   } else if(nivel === 'dificil') {
      //dificil
      criaMosquitoTempo = 750
   }

function ajustaTamanhoPalcoJogo() {
   largura = window.innerWidth
   altura = window.innerHeight

   console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

//Cronômetro
var cronometro = setInterval(function() {

   tempo -= 1

   if(tempo < 0) {
      clearInterval(cronometro)
      clearInterval(criaMosquito)
      window.location.href = 'vitoria.html'
   } else {
      document.getElementById('cronometro').innerHTML = tempo
   }

}, 1000)

function posicaoRandomica() {

   //remoer o mosquito anterior (caso exista)
   if(document.getElementById('mosquito')) {
      document.getElementById('mosquito').remove()
      
      if(vidas > 3) {

         window.location.href = 'game_over.html'
      }else {
         document.getElementById('v' + vidas).src = 'img/coracao_vazio.png'

         vidas++
      }
      
   }

   var posicaoX = Math.floor(Math.random() * largura) - 90
   var posicaoY = Math.floor(Math.random() * altura) - 90

   posicaoX = posicaoX < 0 ? 0 : posicaoX
   posicaoY = posicaoY < 0 ? 0 : posicaoY

   console.log(posicaoX, posicaoY)

   //criar elemento html
   var mosquito = document.createElement('img')
   mosquito.src = 'img/mosquito.png'
   mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
   mosquito.style.left = posicaoX + 'px'
   mosquito.style.top = posicaoY + 'px'
   mosquito.style.position = 'absolute'
   mosquito.id = 'mosquito'
   mosquito.onclick = function() {
      this.remove()
   }
   

   document.body.appendChild(mosquito)
}

//Tamanho randomico do mosquito
function tamanhoAleatorio() {
   var classe = Math.floor(Math.random() * 3)

   switch(classe) {
      case 0:
         return 'mosquito1'

      case 1:
         return 'mosquito2'

      case 2:
         return 'mosquito3'
         
   }
}

//Lado para qual o mosquito esta direcionado; esquerdo/direito
function ladoAleatorio() {
   var classe = Math.floor(Math.random() * 2)

   switch(classe) {
      case 0:
         return 'ladoA'

      case 1:
         return 'ladoB'
         
   }
}