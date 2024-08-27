const evenArr = (arr) => {
  let filteredArr = arr.filter((element) => element % 2 === 0)
  console.log(filteredArr)
}
evenArr([1, 4, 2, 8, 3])
