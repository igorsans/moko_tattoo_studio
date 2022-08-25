
    export const validaId = (id) => {if (isNaN(id)) throw new Error("id inválido")}    

    export const validaUser = (nome, tel, dataNascimento, email) => {
        if(nome.length < 10) throw new Error("Seu nome deve ter ao menos 10 caracteres")
        if(tel.length < 8) throw new Error("Telefone inválido")
        if(dataNascimento.length === 10) throw new Error("Data de nascimento inválido")
        if(email.indexOf("@") >= 1 ) throw new Error("E-mail inválido")
    }


