
 var nome = document.getElementById('nome')
 var idade = document.getElementById('idade')
 var altura = document.getElementById('altura')
 var peso = document.getElementById('peso')
 var feminina = document.getElementById('feminina')
 var masculino = document.getElementById('masculino')
 var msg = document.getElementById('resultado')

document.getElementById('calcular').addEventListener('click', validateImc)


   function validateImc (){

      if (nome.value == '' || idade.value =='' || altura.value =='' || peso.value =='' || (masculino.checked==false && feminina.checked==false)){
        msg.textContent = 'Todos os campos são requeridos'
        document.getElementById('calcular').removeEventListener('click', calcularImc )
       
      } else {

        calcularImc()

      }
    }

   function calcularImc(){
     var arrayPessoa = [nome.value, idade.value, altura.value, peso.value]
      if(feminina.checked){
          arrayPessoa.push("F")
      }else if (masculino.checked){
          arrayPessoa.push("M")
      } else {

      }
      
      var Imc = Number(arrayPessoa[3]) / (Number(arrayPessoa[2] )/ 100 * Number(arrayPessoa[2] )/ 100).toFixed(2)
      
      var classificacao = ''
      if(Imc < 16){

          classificacao = 'Baixo peso, muito grave'
      
        }else if (Imc <= 16.99) {
      
          classificacao = 'Baixo peso, grave'
      
        } else if (Imc <= 17.49){
      
           classificacao = 'baixo peso'
      
        } else if( Imc <= 24.99){

          classificacao = 'Peso normal'
      
        } else if( Imc <= 29.99){
    
          classificacao = 'Sobrepeso'
      
        } else if( Imc <= 34.99){ 

          classificacao = 'Obesidade grau I'
         
        } else if( Imc <= 39.99){
      
          classificacao = 'Obesidade grau II'
            
        } else { 
      
          classificacao = 'Obesidade grau III'
        }

        msg.textContent = `${nome.value} seu IMC é ${Imc.toFixed(2)} e você está com ${classificacao}`

    }
