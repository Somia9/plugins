// let canvas= document.getElementById('c');
// let ctx =canvas.getContext('2d');
// ctx.moveTo(0,0);
// ctx.lineTo(200,100);
// ctx.strock();



//start counter
// let counter=[];

// let counterInterval= setInterval(() => {
//     counter++;
//     document.getElementById('projectsCounter').innerHTML=counter;

//     if (counter ==100) {
//       clearInterval(counterInterval); 
//     }
    
// }, 50);

// let clientCounterInterval= setInterval(() => {
//     counter++;
//     document.getElementById('clientsCounter').innerHTML=counter;

//     if (counter == 50) {
//       clearInterval(clientCounterInterval); 
//     }
    
// }, 50);

// //end counter



// $(document).ready(function() {

    
//     new WOW().init();

//     $(".owl-carousel").owlCarousel(
//         {   items:4,
//             loop:true,
//             merge:true,

//         });

   
//     $(".skitter-large").skitter(
//         {theme : 'clean' ,
//         preview	:true ,
//         interval :500,
//         // thumbs:true ,
//         focus_position:'leftBottom'
//     });

//     var typed = new Typed('.element', {
//         strings: ['hello...',
//             'These are testing plugins...',
//        'Have a great day!'],
//         smartBackspace: false, // Default value
//         typeSpeed: 70,
//         backSpeed:70,
//         fadeOut: true,
//         loop: true,
//         showCursor: false,

//       });
//   });


//   function addDarkmodeWidget() {
//     new Darkmode().showWidget();
//   }
//   window.addEventListener('load', addDarkmodeWidget);


(function() {
    var canvas = this.__canvas = new fabric.Canvas('c');
    fabric.Object.prototype.transparentCorners = false;
    canvas.setWidth(window.innerWidth);
    canvas.setHeight(window.innerHeight);

  
    var rect1 = new fabric.Rect({
      width: 200, height: 100, left: 0, top: 50, angle: 30,
      fill: 'rgba(255,0,0,0.5)'
    });
  
    var rect2 = new fabric.Rect({
      width: 100, height: 100, left: 350, top: 250, angle: -10,
      fill: 'rgba(0,200,0,0.5)'
    });
  
    var rect3 = new fabric.Rect({
      width: 50, height: 100, left: 275, top: 350, angle: 45,
      stroke: '#eee', strokeWidth: 10,
      fill: 'rgba(0,0,200,0.5)'
    });
  
    var circle = new fabric.Circle({
      radius: 50, left: 275, top: 75, fill: '#aac'
    });
  
    var triangle = new fabric.Triangle({
      width: 100, height: 100, left: 50, top: 300, fill: '#cca'
    });
  
    canvas.add( circle);
    canvas.on({
      'object:moving': onChange,
      'object:scaling': onChange,
      'object:rotating': onChange,
    });
  
    function onChange(options) {
      options.target.setCoords();
      canvas.forEachObject(function(obj) {
        if (obj === options.target) return;
        obj.set('opacity' ,options.target.intersectsWithObject(obj) ? 0.5 : 1);
      });
    }
    document.querySelector('.upper-canvas').addEventListener('click' ,function(e){
        let r =Math.random()*255;
        let g =Math.random()*255;
        let b =Math.random()*255;
        let rad =Math.random()*100;

        var circle = new fabric.Circle({
            radius: rad , left: e.clientX, top: e.clientY, fill: `rgb(${r} ,${g},${b})`
          });
        canvas.add( circle);
    
    });

    
  })();

