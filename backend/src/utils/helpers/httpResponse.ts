function badRequest(error: { message: string }) {
  return {
    statusCode: 400,
    body: error.message,
  };
}
function success(data: unknown) {
  return {
    statusCode: 200,
    body: data,
  };
}

function noFound(data: string) {
  return {
    statusCode: 204,
    body: data,
  };
}

function server(error: unknown) {
  return {
    statusCode: 400,
    body: error,
  };
}

export { badRequest, server, success, noFound };
