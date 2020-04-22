export default (message: string, data: any, error_code: number): any => {
  let response: any = {
    success: !error_code,
    message,
    data
  };

  if(error_code) {
    response['error_code'] = error_code;
  } 

  return response;
}

