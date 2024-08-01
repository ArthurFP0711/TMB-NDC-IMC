
function calcTMB(){
    //variáveis
    const peso = Number(document.getElementById('peso').value)
    const altura = Number(document.getElementById('altura').value)
    const idade = Number(document.getElementById('idade').value)
    const tmbres = document.getElementById('tmbres')
    const gender = document.getElementById('gender').value
   
    //Calculando TMB
    let tmb = Number()
    if(gender == 'M'){
         tmb = Number(88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * idade))
    }
    if(gender == 'F'){
         tmb = Number(655 + (9.6*peso) + (1.8*altura) - (4.7*idade) )
    }

    console.log(tmb)
    //Calculando NDC
    const Atividade = document.getElementById('atv').value
    const NDC = Atividade*tmb
    const ndcres = document.getElementById('ndcres')


    //Calculando IMC
    const AlturaEmMetros = altura / 10
    const imc = Number(peso / (AlturaEmMetros*AlturaEmMetros) *100)
    const imcres = document.getElementById('imcres')

    if(peso != '' & idade != '' & altura != ''){
        tmbres.innerHTML = `${tmb.toFixed(2)} kcal`
        ndcres.innerHTML = `${NDC.toFixed(2)} kcal`
        imcres.innerHTML =  `${imc.toFixed(4)}`
    }else{
        alert('Preencha todos os campos')
    }

    const abaixo = document.getElementById('abaixo')
    const normal = document.getElementById('normal')
    const excesso = document.getElementById('excesso')
    const grau1 = document.getElementById('grau1')
    const grau2 = document.getElementById('grau2')
    const grau3 = document.getElementById('grau3')

    abaixo.style.backgroundColor = '#fff'
    normal.style.backgroundColor = '#fff'
    excesso.style.backgroundColor = '#fff'
    grau1.style.backgroundColor = '#fff'
    grau2.style.backgroundColor = '#fff'
    grau3.style.backgroundColor = '#fff'

    if(imc < 18.5){
        abaixo.style.backgroundColor = 'grey'

    }else if(imc > 18.5 & imc < 24.9){
        normal.style.backgroundColor = 'grey'
    }else if(imc > 24.9 & imc < 30){
        excesso.style.backgroundColor = 'grey'
    }else if(imc > 29.9 & imc < 35){
        grau1.style.backgroundColor = 'grey'
    }else if(imc > 34.9 & imc < 39.9){
        grau2.style.backgroundColor = 'grey'
    }else if(imc >= 40){
        grau3.style.backgroundColor = 'grey'
    }

    
}



