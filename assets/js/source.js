// $(document).ready(function(){
//
// // jumbotron hero header text increase on scroll
//     var controller9 = new ScrollMagic.Controller();
//
// // pin the intro
//     var pinIntroScene = new ScrollMagic.Scene({
//         triggerElement: '.jumbotron.hero',
//         triggerHook: 0.1,
//         duration: '50%'
//     })
//     // .setPin('.header-js', {pushFollowers: false})
//         .setClassToggle('.header-js', 'header-js-secondary') // add class to project01
//         /*    .addIndicators({
//          name: 'fade scene',
//          colorTrigger: 'black',
//          indent: 200,
//          colorStart: '#75C695'
//          }) // this requires a plugin*/
//         .addTo(controller9);
//
//
// // jumbotron hero header bg colour change on scroll
//     var controller121 = new ScrollMagic.Controller();
//
//     var changeToRed = TweenMax.to('.jumbotron.hero', 0.5, {
//         backgroundColor: '#E3000F'
//     });
//
//     var whenInContainer = new ScrollMagic.Scene({
//         triggerElement: '.jumbotron',
//         triggerHook: 0.2,
//         duration: '50%'
//     })
//         .setTween(changeToRed)
//         .addTo(controller121);
//     /*        .addIndicators({
//      name: 'fade scene',
//      colorTrigger: 'black',
//      indent: 200,
//      colorStart: '#75C695'
//      });*/
//
// });