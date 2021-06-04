function strip(x: string | number) {
  if (typeof x == 'number')
    return x.toFixed(2);
  return x.trim();
}

class MyGachi {
  header: 'this is my sport room'
  result: 'AAAAAAA'
}

class MyError {
  header: 'error header'
  message: 'error message'
}

function handle(response: MyGachi | MyError) {
  if (response instanceof MyGachi)
    return response.result
  return response.message;
}

//===========================

type AlertType = 'success' | 'danger' | 'warning';

function setAlertType(type: AlertType): void {
  console.log(type);
}
setAlertType('success')
setAlertType('warning')
// setAlertType('default')
