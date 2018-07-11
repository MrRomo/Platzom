export default function platzom(str) {
  let translation = str;

  // Si la palabra termina con "ar", se le quitan esas dos letras
  if (str.toLowerCase().endsWith("ar")) {
    translation = str.slice(0, -2)
  }

  // Si la palabra inicia con Z, se le aÃ±ade "pe" al final.
  if (str.toLowerCase().startsWith("z")) {
    translation += "pe"
  }

  // Si la palabra traducida tiene 10 o mÃ¡s letras,
  // se debe partir en dos por la mitad y unir con un guiÃ³n medio
  const length = translation.length
  if (length >= 10) {
    const firstHalf = translation.slice(0, Math.round(length / 2))
    const secondHalf = translation.slice(Math.round(length / 2))
    translation = `${firstHalf}-${secondHalf}`
    // translation = [firstHalf, secondHalf].join('-')
  }

  function minMay(str) {
    const length = str.length
    let translation = ''
    let capitalize = true
    for (let i = 0; i < length; i++) {
      const char = str.charAt(i)
      translation += capitalize ? char.toUpperCase() : char.toLowerCase()
      capitalize = !capitalize
    }

    return translation
  }

  function reverse(str) {
    return str.split('').reverse().join('')
  }

  // Por Ãºltimo, si la palabra original es un palÃ­ndromo,
  // ninguna regla anterior cuenta y se devuelve la misma palabra pero
  // intercalando letras mayÃºsculas y minÃºsculas
  if (str == reverse(str)) {
    return minMay(str)
  }

  return translation
}
