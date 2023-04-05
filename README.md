# Testes Automatizados com Cypress baseado no site "BugerEats"

Olá Tudo bem?

Um site bastante interessante para treinar testes automatizados de software é o 
'https://buger-eats.vercel.app/', um site criado com a finalidade de treinar testes automatizados. 
Ainda estou em processo de aprendizagem dessa ferramenta magnífica que é o Cypress, então os testes podem não estar perfeitos mas foram feitos de acordo com os meus conhecimentos atuais da ferramenta.

Espero que gostem!

## Estrutura dos testes

- Utilizei a versão até então mais recente do Cypress (12.9.0)
- Para fazer o upload de arquivos utilizando a pasta "Fixtures", utilizei o "cypress-file-upload" na versão  "^5.0.8"
- Depois, na pasta 'E2E' em 'Support':
  'import 'cypress-file-upload'
- Também criei o arquivo 'cypress.env.json' para adicionar os dados sensíveis utilizados nos testes
- É importante criar o '.gitignore' para o git não subir esses dados ao dar o commit

Obs: deixei uma cópia do 'cypress.env.json' com o nome de 'cypress.env. copy.json' com a estrutura utilizada nos testes. Utilize esse modelo para criar um arquivo "cypress.env.json" e adicione as informações contidas no modelo de acordo com sua preferencia.

- Confira também a estrutura que utilizei de configuração dos testes em 'cypress.config.js'
OBS: não esqueça de definir a 'baseUrl' corretamente, será fundamental para a estrutura dos testes

- Nos comandos customizados em 'commands.js', criei um comando customizado 'preencheCamposObrigatorios' para o preeenchimento dos campos obrigatórios do cadastro, e o comando customizado 'verificaEnderecoCorreto' verifica que os campos do endereço foram preenchidos automaticamente ao definir o cep e clicar em "Buscar CEP". O campo "Número" e "Complemento" foram definidos e verificados no comando customizado 'preencheCamposObrigatorios'.
- Para gerar um video dos seus testes rodando, você deve alterar para 'True' em 'cypress.config.js', e rodar os testes em Headless (npm cypress run) no terminal.

## Sobre os testes

Plano de testes

 Utilizar a interface gráfica de usuário para realizar testes automatizados de funcionalidade e usabilidade como:

- O objetivo principal é cadastrar um usuário com sucesso preenchendo corretamente todos os dados obrigatórios do formulário;
- Verificar que existem três métodos de entrega e que apenas um deve ser selecionado para que o formulário seja submetido com sucesso;
- Verificar que ao submeter o formulário em branco, varias mensagens de alerta devem estar visíveis;
- Verificar que a formatação dos campos estão sendo respeitadas;
- Verificar que o campo que pede que seja anexado um arquivo de foto da CNH está funcionando corretamente, não permite que o formulário seja submetido sem que o arquivo seja carregado e não aceita outra foto que não seja a da CNH;
- Verificar que a funcionalidade "Busca CEP" esta retornando o endereço correto ao ser submetido;
- Verificar que o campo "Nome Completo" está sendo respeitado e, ao ser submetido, não aceita apenas o primeiro nome;
- 

  OBS: Foram encontrados alguns bugs nos tests, mas isso eu vou deixar para vcs descobrirem hehehe!

## Espero que possa ser util no seu processo de aprendizagem. Valeu!
___

Rafael Domingos Santos (Q.A Analist)
https://github.com/Raffadom
https://www.linkedin.com/in/rafael-domingos-aab12060/