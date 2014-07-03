function addCartao(){
  var nome = document.getElementsByName("nome");
  nome = nome[0].value;
  var idade = document.getElementsByName("idade");
  idade = idade[0].value;
  
  var sexo = document.getElementsByName('sexo');
  var sexo_selecionado;
  for(var i = 0; i < sexo.length; i++){
      if(sexo[i].checked){
    	  sexo_selecionado = sexo[i].value;
      }
  }
  if(sexo_selecionado = "feminino"){
	  sexo_selecionado = "img/fem.jpg";
  }else{
	  sexo_selecionado = "img/masc.jpg";
  }
  
  var cores = document.getElementById("cores");
  var cor = cores.options[cores.selectedIndex].value;

  var div = document.createElement('div');
  document.body.appendChild(div);
  div.setAttribute("class", "cartao");
  div.innerHTML = '<img src="'+sexo_selecionado+'" align="left"><br>'+nome+'<br>'+idade+' anos<br>'+cor;
};
