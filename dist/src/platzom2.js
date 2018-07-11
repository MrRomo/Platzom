export default function platzom(str) {
  let translation = str;
  // si la palabra termina en ar, se le quitan esos dos caracteres
  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0, -2);
  }

  //si la palabra comienza con z, se le añade pe al final
  if (str.toLowerCase().startsWith('z')) {
    translation += 'pe';
  }
  //si la palabra tiene 10 o mas letras se debe partir a la mitad y unir con un guion en el medio
  const length = translation.length;
  if (length >= 10) {
    const firstHalf = translation.slice(0, Math.round(length / 2));
    const secondHalf = translation.slice(Math.round(length / 2));
    console.log(firstHalf);
    console.log(secondHalf);
    translation = `${firstHalf}-${secondHalf}`;
  }

  const reverse = str => str.split('').reverse().join('');
  function minWay(str) {
    const length = str.length;
    let translation = '';
    let capitalize = true;
    for (let i = 0; i < length; i++) {
      const char = str.charAt(i);
      translation += capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize;
    }
    return translation;
  }

  if (str == reverse(str)) {
    return minWay(str);
  }
  //si la palabra original es un palindromo, ninguna regla anterior cuenta, y se devuelve la misma palabra, alternando mayusculas y minusculas
  return translation;
}