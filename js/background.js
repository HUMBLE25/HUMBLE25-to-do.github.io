const images = ["0.jpeg","1.jpeg","2.jpeg","3.jpeg"];

const chosenImg = images[Math.trunc(Math.random() * images.length)];

const bgImg =document.createElement("img");

bgImg.src = `img/${chosenImg}`;

//body에서 가장 마지막에 추가하는 매서드 appendChild
// mdn참고 append()와 appendChild의 차이점
// Element.append() can append several nodes and strings, whereas Node.appendChild() can only append one node.
document.body.appendChild(bgImg);
// document.body.append(bgImg);

// body에서 가장 먼저 추가하는 매서드 prepend 
// document.body.prepend(bgImg);