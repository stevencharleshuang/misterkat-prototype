$(document).ready(() => {
  // console.log('jQuery ready!');
  /* Nav MouseOver Events */
  $('.dropdown').on('mouseenter', () => {
    let dropdownGBCR = $('.dropdown')[0].getBoundingClientRect();
    let dropdownGBCRRatio = Math.floor(dropdownGBCR.width / dropdownGBCR.height) / 2;
    let dropdownWidth = Math.floor(dropdownGBCR.width) - dropdownGBCRRatio;
    let dropdownLeft = dropdownGBCR.left;
    let dropdownTop = dropdownGBCR.bottom;

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
  });

  $('.dropdown').on('mouseleave', () => {
    $('.dropdown').css({
      'border-radius': '5px'
    });
    $('.dropdown-content')
      .css({
        'display': 'none'
    });

  });

  /* Nav MouseClick Events */
  $('.about').on('click', () => {
    $('main').html(`
      <div class="about-content">
        <h1>This is alllll about MisterKat</h1>
      </div>
    `);
  })

  $('.recipes').on('click', () => {
    $('main').html(`
      <div class="recipes-content">
        <h1>These are alllll the MisterKat Recipes</h1>
      </div>
    `);
  })

  /* MisterKat Adventures */
  $('.local').on('click', () => {
    $('main').html(`
      <div class="recipes-content">
        <h1>These are alllll the MisterKat Local adventures</h1>
      </div>
    `);
  })

  $('.east-coast').on('click', () => {
    $('main').html(`
      <div class="recipes-content">
        <h1>These are alllll the MisterKat East Coast adventures</h1>
      </div>
    `);
  })

  $('.usa').on('click', () => {
    $('main').html(`
      <div class="recipes-content">
        <h1>These are alllll the MisterKat USA adventures</h1>
      </div>
    `);
  })

  $('.international').on('click', () => {
    $('main').html(`
      <div class="recipes-content">
        <h1>These are alllll the MisterKat International adventures</h1>
      </div>
    `);
  })

  $('.logo').on('click', () => {
    $('main').html(`
      <div class="hero">
        Hello MisterKat!
      </div>
    `);
  })

});
