const revWords = (str) => {
  let wordsArr = str.split(' ')
  let revArr = wordsArr.reverse()
  let revSentence = ''
  wordsArr.map((word)=>{
    revSentence+=word+' ';
  })
  console.log(revSentence)
}
revWords('My name is Khan')
