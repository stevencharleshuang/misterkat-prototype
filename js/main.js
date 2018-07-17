$(document).ready(() => {
  // console.log('jQuery ready!');
  $('.dropdown').on('mouseenter', () => {
    let dropdownGBCR = $('.dropdown')[0].getBoundingClientRect();
    let dropdownGBCRRatio = Math.floor(dropdownGBCR.width / dropdownGBCR.height / 2)
    let dropdownWidth = Math.floor(dropdownGBCR.width) - dropdownGBCRRatio;
    let dropdownLeft = dropdownGBCR.left;
    let dropdownTop = dropdownGBCR.bottom;
    console.log(dropdownGBCR);
    console.log(dropdownGBCRRatio);
    $('.travel').css({
      'border-radius': '5px 5px 0 0'
    });
    $('.dropdown-content')
      .css({
        'display': 'block',
        'position': 'absolute',
        'left': dropdownLeft,
        'top': dropdownTop,
        'width': dropdownWidth,
        'text-align': 'center',
        'margin': '0',
        'padding': '0'
      });
    $('.dropdown-content')
      .css({
      });
  })
  $('.dropdown').on('mouseleave', () => {
    $('.dropdown').css({
      'border-radius': '5px'
    });
    $('.dropdown-content')
      .css({
        'display': 'none'
    });
  })
});
