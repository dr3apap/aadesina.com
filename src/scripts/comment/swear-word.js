const fs = require('fs')
const path = require('path')

const filePath = './swear-words.csv'
const baseDir = path.join(__dirname, filePath)
const swearWords = fs.readFileSync(baseDir, (err, data) => {
  if (!err && data) {
    return JSON.parse(data)
  } else {
    console.log(`Error: ${err}`)
  }
})
console.log(swearWords)
//export default swear_words;
