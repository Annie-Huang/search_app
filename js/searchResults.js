export const buildSearchResults = (resultArray) => {
  resultArray.forEach(result => {
    const resultItem = createResultItem(result);
    const resultContents = document.createElement('div');
    resultContents.classList.add('resultContents');
    if (result.img) {
      const resultImage = createResultImage(result);
      resultContents.append(resultImage);
    }
    const resultText = creatResultText(result);
    resultContents.append(resultText);
    resultItem.append(resultContents);
  })
}

const createResultItem = (result) => {

}
const createResultImage = (result) => {

}
const creatResultText = (result) => {

}
