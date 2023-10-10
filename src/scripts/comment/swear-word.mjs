import fs from 'fs'
import csv from 'csv-parser'

const swearWords = []
const filePath = 'src/scripts/comment/swear-words.csv'

fs.createReadStream(filePath)
  .pipe(
    csv([
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
    ])
  )
  .on('data', (data) => {
    if (data) {
      swearWords.push(data)
    } else {
      console.log(`Error: ${err}`)
    }
  })
  .on('end', () => {
    console.log(swearWords)
  })
//export default swear_words;
