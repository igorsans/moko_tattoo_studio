const ErrorModel = (msg, error, httpstatus) => {
  return {
    dados: {
        mensagem: msg,
        error: error
    },
    status: httpstatus
  };
};

export default ErrorModel
