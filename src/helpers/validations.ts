export function validationPhone(value: string): string {
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

export function validationEmail(value: string): boolean {
  const validation = new RegExp(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  );
  return validation.test(value);
}

export function validationName(value: string) {
  return value.length < 3 ? false : true;
}

// function handleSubmit(event: React.SyntheticEvent): boolean {
//   event.preventDefault();
//   const target = event.target as typeof event.target & {
//     name: { value: string };
//     email: { value: string };
//     phone: { value: string };
//   };

//   const name = target.name.value;
//   const email = target.email.value;
//   const phone = target.phone.value;
//   subscribeLeads({ name, email, phone });
// }

// function handleErros() {
//   if (phone && validationEmail(email)) {
//     console.log("Válido");
//   }
// }

// useEffect(() => {}, [phone, email]);

//
