function displaySpec(describes, it, result, message) {

}

function createDescribes(describe) {
  const element = document.createElement('p');
  element.setAttribute('class', 'describe');
  const node = document.createTextNode(describe);
  element.appendChild(node);
  document.getElementById('specs').appendChild(element);
}

createDescribes('This')
