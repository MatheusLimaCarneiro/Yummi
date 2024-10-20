function sendEmail() {
    var params = {
    nome: document.getElementById("nome").value,
    email: document.getElementById("email").value,
    telefone: document.getElementById("telefone").value,
    mensagem: document.getElementById("mensagem").value
  };


if (params.nome === "" || params.email === "" || params.telefone === "" || params.mensagem === "") {
    alert("Por favor, preencha todos os campos!");
    return;
}

const servicoId = "service_lfkz1xw"
const template = "template_qd8d0mc"

emailjs
.send(servicoId, template, params).then((res) => {
  document.getElementById("nome").value = " ";
  document.getElementById("email").value = " ";
  document.getElementById("telefone").value = " ";
  document.getElementById("mensagem").value = " ";
  console.log("Mensagem enviada com sucesso!", res.status);
  alert("Mensagem enviada com sucesso!");
})
.catch((err) => {
    console.error("Erro ao enviar mensagem ", err);
  });
}


