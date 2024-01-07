const upperset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerset = "abcdefghijklmnopqrstuvwxyz"
const numberset = "1234567890"
const symbolsset = "~!@#$%^&*()_+/"

const upperInput = document.getElementById("upper-case")
const lowerInput = document.getElementById("lower-case")
const numberInput = document.getElementById("Numbers")
const symbolsInput = document.getElementById("Symbols")
const passBox = document.getElementById("password-box")
const totalChar = document.getElementById("total-char")

const getRandomData = (dataset) => {
  return dataset[Math.floor(Math.random() * dataset.length)]

}
const generatePassword = (password = "") => {
  if (upperInput.checked) {
    password += getRandomData(upperset)
  }
  if (lowerInput.checked) {
    password += getRandomData(lowerset)
  }
  if (numberInput.checked) {
    password += getRandomData(numberset)
  }
  if (symbolsInput.checked) {
    password += getRandomData(symbolsset)
  }
  if (password.length < totalChar.value) {
    return generatePassword(password)
  }
  passBox.innerText = truncateString(password, totalChar.value)
}
document.getElementById("btn").addEventListener(
  "click",
  function () {
    generatePassword()
  }
)


function truncateString(str, num) {
  if (str.length > num) {
    let subStr = str.substring(0, num)
    return subStr
  } else {
    return str
  }
}


