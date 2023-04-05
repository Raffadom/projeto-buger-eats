describe('Get Http', ()=> {
    it.only('faz uma requisição HTTP', ()=> {
        cy.request('https://viacep.com.br/ws/45985666/json/')
          .should((response)=> {
            const {status, statusText, body} = response
            expect(status).to.equal(200)
            expect(statusText).to.equal('OK')
          })
    })
})