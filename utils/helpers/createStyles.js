
const serviceStyles = (position, length, screenWidth) => {
  const style = {}
  if (screenWidth < 420) {
    style.width = '200px';
    style.height = "200px";
    style.top = String((230 * position) + 130) + 'px';
  } else if (screenWidth < 650) {
    position % 2 ? style.right = '2.5vw' : style.left = '2.5vw';
    const verticalPosition = position % 2 ? (position - 1)/2 : position/2;
    style.width = 'calc(50vw - 5vw)';
    style.height = 'calc(50vw - 5vw)';
    // style.top = String((230 * verticalPosition) + 130) + 'px';
    style.top = `calc((50vw * ${verticalPosition}) + 25vw)`;
  } else if (screenWidth < 1000) {
    const verticalPosition = Math.ceil((position + 1) / 3);
    const horizontalPosition = position % 3;
    style.width = '30vw';
    style.height = '30vw';
    style.top = `calc((33vw * ${verticalPosition - 1}) + 15vw + 25px)`;
    if (position % 3 === 0){
      style.left = '2.5vw';
    } else if (position % 3 === 2) {
      style.right = '2.5vw';
    }
  } else {
    const verticalPosition = Math.ceil((position + 1) / 4);
    const horizontalPosition = position % 4;
    style.width = '17vw';
    style.height = '20vw';
    style.top = `calc((23vw * ${ verticalPosition -1 }) + 10vw + 25px )`;
    if (horizontalPosition === 0){
      style.left = '10vw'
    } else if (horizontalPosition === 3){
      style.right = '10vw'
    } else {
      style.left = `calc((4vw + 17vw)*${ horizontalPosition } + 10vw)`
    }
    
  }
  return style;
}

const serviceListLength = (length, screenWidth) => {
  const style = {}
  if (screenWidth < 420) {
    style.height = String(230 * length) + 'px';
  } else if (screenWidth < 600){
    length = length % 2 ? length + 1: length;
    style.height = `calc((50vw - 2.5vw + 30px) * ${length /2})`
  } else if (screenWidth < 1000){
    style.height = `calc((30vw + 30px) * ${ Math.ceil(length / 3) })`
  } else {
    style.height = `calc((20vw + 30px) *${ Math.ceil(length/4) })`
  }

  return style
}

module.exports = {
  serviceStyles,
  serviceListLength
}