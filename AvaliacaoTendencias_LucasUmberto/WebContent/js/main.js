function addCartao(){
  var nome = document.getElementsByName("nome");
  nome = nome[0].value;
  var idade = document.getElementsByName("idade");
  idade = idade[0].value;
  
  
  var sexo = document.forms[0].sexo.value;
  
  if(sexo == "Feminino"){
	  sexo = "img/fem.jpg";
  }else{
	  sexo = "img/masc.jpg";
  }
  
  var cores = document.getElementById("cores");
  var cor = cores.options[cores.selectedIndex].value;

  var div = document.createElement('div');
  document.body.appendChild(div);
  div.setAttribute("class", "cartao");
  div.innerHTML = '<img src="'+sexo+'" align="left"><br>'+nome+'<br>'+idade+' anos<br>'+cor;
};
