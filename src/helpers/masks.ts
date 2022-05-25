export function validationPhone(event: React.SyntheticEvent): string {
  const value = (event.target as HTMLInputElement).value;
  var result = value.replace(/\D/g, "");
  result = result.replace(/^0/, "");
  if (result.length > 10) {
    result = result.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
  } else if (result.length > 5) {
    result = result.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
  } else if (result.length > 2) {
    result = result.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
  } else {
    result = result.replace(/^(\d*)/, "($1");
  }
  return result;
}
