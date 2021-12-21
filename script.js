function calcular(){
    var p=window.document.getElementById('peso')
    var a=window.document.getElementById('altura')
    var r=window.document.getElementById('res')
    var n1=Number(p.value)
    var n2=Number(a.value)
    var imc=(n1/n2**2)
    res.innerHTML=`<p>O seu IMC está em ${imc.toFixed(1)}</p>`
  
    if(imc < 18.5){
    res.innerHTML+=`<p>Você está abaixo do peso!</p>`
    }else if(imc >= 18.5 && imc < 25){
    res.innerHTML+=`<p>Você está com o peso normal!</p>`
    }else if(imc >= 25 && imc < 30){
    res.innerHTML+=`<p>Você está com sobre peso!</p>`
    }else if(imc >= 30 && imc < 35){
    res.innerHTML+=`<p>Você está com obesidade grau 1!</p>`
    }else if(imc >= 35 && imc < 40){
    res.innerHTML+=`<p>Você está com obesidade grau 2!</p>`
    }else
    res.innerHTML+=`<p>Você está com obesidade mórbida!</p>`
