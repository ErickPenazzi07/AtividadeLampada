//---------atividade 1 ------------------

let led = "ligar";

const ligar = () => {
  let btnEnviar = document.getElementById("btnEnviar");
  let imgLampada = document.getElementById("lampada");

  if (led == "ligar") {
    // lampada.innerHTML = `<img id="lampada" src="img/acesa.jpg" alt="Lâmpada">`;
    imgLampada.src = "./img/acesa.jpg"; // src = SOURCE = CAMINHO = LOCAL DO ARQUIVO
    imgLampada.alt = "Lampada acesa.";

    btnEnviar.innerHTML = "Apagar";
    led = "apagar";
  } else {
    // lampada.innerHTML = `<img id="lampada" src="img/apagada.jpg" alt="Lâmpada">`;
    imgLampada.src = "./img/apagada.jpg"; // src = SOURCE = CAMINHO = LOCAL DO ARQUIVO
    imgLampada.alt = "Lampada apagada.";

    btnEnviar.innerHTML = "Acender";
    led = "ligar";
  }
};

//----------------Atividade 2 -----------------

const gerarImagem = () => {
  let qtdImagem = document.getElementById("inQtdImg").value; //valor informado pelo usuario
  let canvas = document.getElementById("canvas");

  canvas.innerHTML = "";

  for (let i = 1; i < qtdImagem; i++) {
    canvas.innerHTML += `<img class = "imagem" id = "lampada" scr = "./img/acesa.jpg"`;
  }
};

//---------------Atividade 4 -----------------
calcular = () => {
  let valorDoPedido = document.getElementById("inValorPedido").value;
  let percentualDeped = document.getElementById("inPercDesc");
  let valordesx = document.getElementById("inValDesc");
  let inValFinal = document.getElementById("inValFinal");

  switch (true) {
    case valorDoPedido >= 500 && valorDoPedido < 1000:
      percentualDeped.value = 0.5;
      break;
    case valorDoPedido >= 1000 && valorDoPedido < 1500:
      percentualDeped.value = 0.8;
      break;
    case valorDoPedido >= 1500 && valorDoPedido < 2000:
      percentualDeped.value = 1;
      break;
    case valorDoPedido >= 2000:
      percentualDeped.value = 1.5;
      break;
    default:
      break;
  }
  valordesx.value = (percentualDeped.value / 100) * valorDoPedido;
  inValFinal.value = valorDoPedido - valordesx.value;
};

//--------------Atividade 03-----------------

// document.getElementById("mensagem-erro").style.display = "none";
// const validaForm = () => {
//   let inData = document.getElementById("inData").value;
//   let inCli = document.getElementById("inCli").value;
//   let inFone = document.getElementById("inFone").value;
//   let inMail = document.getElementById("inMail").value;
//   let inProd = document.getElementById("inProd").value;
//   let inQtd = document.getElementById("inQtd").value;
//   let inVal = document.getElementById("inVal").value;
//   let mensagem = document.getElementById("mensagem-erro");

//   //apagando as informações de erro
//   mensagem.innerText = "";

//   //validação dos dados
//   inData == "" && (mensagem.innerHTML += "Data Inválida <br>");
//   inCli == "" && (mensagem.innerHTML += "Nome do Cliente Inválida <br>");
//   inFone == "" && (mensagem.innerHTML += "Telefone Inválida <br>");
//   inMail == "" && (mensagem.innerHTML += "E-mail Inválida <br>");
//   inProd == "" && (mensagem.innerHTML += "Produto Inválida <br>");
//   inQtd == "" && (mensagem.innerHTML += "Qtde Inválida <br>");
//   inVal == "" && (mensagem.innerHTML += "Valor Inválida <br>");

//   //mostrar | ocultar erro
//   mensagem.innerText == ""
//     ? (mensagem.style.display = "nome")
//     : (mensagem.style.display = "block");

//   // mostrar | ocultar erro
//   msgErro.innerText == ""
//     ? ((msgErro.style.display = "none"), (msgErro.innerText = "enviado!"))
//     : (msgErro.style.display = "block");


//   mensagem.innerText == "enviado!" &&
//     ((mensagem.style.display = "block"),
//     (mensagem.innerText = "Formulário enviado com sucesso!"),
//     (mensagem.className = "verde"));
// };


//validação do Proefssor


const validaForm = () => {
  // captura dos dados
  let inData = document.getElementById("inData").value;
  let inCli = document.getElementById("inCli").value;
  let inFone = document.getElementById("inFone").value;
  let inMail = document.getElementById("inMail").value;
  let inProd = document.getElementById("inProd").value;
  let inQtd = document.getElementById("inQtd").value;
  let inVal = document.getElementById("inVal").value;
  let msgErro = document.getElementById("mensagem-erro");

  //apagando as informações de erro
  msgErro.innerText = "";

  // validação dos dados
  inData == "" && (msgErro.innerHTML += "Data inválida <br>");
  inCli == "" && (msgErro.innerHTML += "Nome do cliente inválido <br>");
  inCli.length < 3 &&
    (msgErro.innerHTML += "Nome do cliente com tamanho inválido! <br>");
  inFone == "" && (msgErro.innerHTML += "Telefone inválida <br>");
  inMail == "" && (msgErro.innerHTML += "E-mail inválida <br>");
  inMail.length < 6 && (msgErro.innerHTML += "E-mail inválida <br>");
  inProd == "" && (msgErro.innerHTML += "Produto inválida <br>");
  inProd.length < 6 && (msgErro.innerHTML += "Produto inválida <br>");
  inQtd == "" && (msgErro.innerHTML += "Qtde inválida <br>");
  inQtd < 0 && (msgErro.innerHTML += "Qtde negativa! <br>");
  inVal == "" && (msgErro.innerHTML += "Valor inválida <br>");
  inVal < 0 && (msgErro.innerHTML += "Valor negativo! <br>");

  // mostrar | ocultar erro
  msgErro.innerText == ""
    ? ((msgErro.style.display = "none"), (msgErro.innerText = "enviado!"))
    : (msgErro.style.display = "block");

  msgErro.innerText == "enviado!" &&
    ((msgErro.style.display = "block"),
    (msgErro.innerText = "Formulário enviado com sucesso!"),
    (msgErro.className = "verde"));
};