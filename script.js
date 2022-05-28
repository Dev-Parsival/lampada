function liga(){
  lampada = document.querySelector("#lampada");
  let bgImagem = document.querySelector("#lampada").style;
  let bgImagemStyle = bgImagem.backgroundImage = "url('https://i.stack.imgur.com/ybxlO.jpg')";
  bgImagem.backgroundPosition = "center";
}

function desliga(){
  let bgImagem = document.querySelector("#lampada").style;
  let bgImagemStyle = bgImagem.backgroundImage = "url('http://i.stack.imgur.com/b983w.jpg')";
  bgImagem.backgroundPosition = "center";
}
