const slide = document.getElementById('slider');

const nextMove = ()=>{
  if(slide.classList.contains('slider1')){
      slide.classList.remove('slider1');
      slide.classList.add('slider2');
      console.log("1");
  }else if(slide.classList.contains('slider2')){
      slide.classList.remove('slider2');
      slide.classList.add('slider3');
      console.log("2");
  }else if(slide.classList.contains('slider3')){
      slide.classList.remove('slider3');
      slide.classList.add('slider4');
      console.log("3");
  }
  else {
      slide.classList.remove('slider4');
      slide.classList.add('slider1');
      console.log("4");
  }
}

setInterval(()=>{
  nextMove();
},1500);