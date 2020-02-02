export function responseStatus(response) {
  //this is temporary code, when i check request status code
  if (response.status === 200) {
    console.info(`The request has succeeded, status code = ${response.status}`);
    return true
  } else if (response.status === 400 || response.status === 404) {
    console.error(`Bade request, status code = ${response.status}`);
  } else if (response.status === 500 || response.status === 503) {
    console.error(`Server error, status code = ${response.status}`);
  } else {
    console.error(`We have a some problem, status code = ${response.status}`);
  }
}
