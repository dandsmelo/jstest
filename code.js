//sessionStorage
function adicionar() {
    let dados = "informática"        
    sessionStorage.setItem("curso", dados)
}
function lerlocal(){
    let n = sessionStorage.getItem("curso")
    alert(n)
}
function remove() {      
   sessionStorage.removeItem("curso");         
}

//localStorage
function adicionar() {
    let dados = "informática"
    localStorage.setItem("curso", dados)
}
function ler(){
    let n = localStorage.getItem("curso")
    alert(n)
}
function remover(){
    localStorage.removeItem("curso")
}

// questão 8
function logon(){  
    const dados = JSON.parse(localStorage.getItem("tds"))
    let login = document.querySelector("#login").value
    let senha = document.querySelector("#senha").value
  
  for (let i = 0; dados.length > i; i++) {
    if (dados[i] == null) {
       alert("Verificando")
    } else {
      if (login == dados[i].nome && senha == dados[i].senha) {
        console.log("conectado")
        let n = JSON.stringify(dados[i]);
        sessionStorage.setItem("user", n)
        let url = "airline.html"
        window.open(url)
        break
      } 
    } 
    }
} 
  