const agendamentosModel = {
    
    modelar: (obj) => {
        return {
            idCliente: obj.idCliente,
            tattoId: obj.tattoId,
            horario: obj.horario
        }
    },

};

export default agendamentosModel;
