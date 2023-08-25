let nomes = [];
let profissoes = [];
let nome = document.getElementById("nome");
let profissao = document.getElementById("profissao");


function adc(){
  nomes.push(nome.value);
  profissoes.push(profissao.value);
  console.log(nomes, profissoes);
}

function rmv(){
   let pos = nomes.indexOf(nome.value);
   if(pos !== -1){
      nomes.splice(pos,1);
      profissoes.splice(pos,1);
   }

    else{
        console.log("O nome digitado "+nome.value+" não foi encontrado")
    }
    console.log(nomes, profissoes);
}