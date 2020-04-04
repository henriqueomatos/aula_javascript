

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://www.oantagonista.com/");
    //window.location.href = "https://www.oantagonista.com/";
}

function trocar (){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui.";
}

function load(){
    alert("página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}




/*
function validaIdade(idade){
    var validar
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));
*/




/*
function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/
    




/*
var d = new Date();
alert(d);
alert(d.getMonth()+1);
alert(d.getMinutes());
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/



/*
var count;
for(count=0; count <=5; count++){
    alert(count);
};
*/



/*var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
};
*/


/*var idade = prompt("Qual sua idade?");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/



/*var frutas= [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]

console.log(frutas);
alert(frutas[1].nome);*/




/*var fruta= {nome:"maçã", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);*/





//lista.push("uva");
//lista.pop();
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista.join("|"));





//var nome = "Henrique Matos";
//var idade = 28;
//var idade2 = 10;
//alert(nome + " tem " + idade + " anos.");
//console.log(nome);
//console.log(idade + idade2);*/
