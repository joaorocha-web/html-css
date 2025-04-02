var img = document.querySelector('img#teste')
        img.addEventListener('mouseout', voltar)
        img.addEventListener ('mouseenter', alterar)
        img.addEventListener('click', aumentar)
        function alterar(){
            img.style.background= 'red'
        }
        function voltar(){
            img.style.background=  'var(--cor1)'
        }
        function aumentar(){
            img.style.width= '500px'
            img.style.height = '330px'
        }

        function mostrar(){
            var nome = document.getElementById('inome')
            var empresa = document.getElementById ('iemp')
            var faturamento = document.getElementById('ifat')
            var email = document.getElementById('iemail')
            var dados = document.getElementById('dados')
            dados.style.width='80vw'
            dados.style.height='200px'
            dados.style.background='white'
            dados.style.margin= '20px auto'
            dados.style.padding= '20px'
            dados.style.borderRadius= '15px 10px'
            dados.style.boxShadow='1px 2px 8px black'
            dados.innerHTML= `<p>Okay, recebemos o seus dados.</p> <p>No formulário preenchido consta que <strong>${nome.value}</strong> é proprietário da empresa <strong>${empresa.value}</strong> cujo faturamento médio mensal é de <strong>R$${faturamento.value},00</strong>.</p> <p>Entraremos em contato através do email: <strong>${email.value}</strong>.</p> ` 
            
        }