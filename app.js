// Show and hide images
function show_image(img_id) {
  let img = document.getElementById(img_id);
  img.style.visibility = 'visible';
}

function hide_image(img_id) {
  let img = document.getElementById(img_id);
  img.style.visibility = 'hidden';
}

// ---------------------------- DAY ---------------------------- //

function day_clothes_change(selected) {
  let img_id = `dressup_image_day__${selected}`;
  let img = document.getElementById(img_id);

  if (window.getComputedStyle(img).visibility === 'visible') {
    hide_image(img_id);
  } else {
    show_image(img_id);
  }
}

// ---------------------------- NIGHT ---------------------------- //

function night_clothes_change(selected) {
  let img_id = `dressup_image_night__${selected}`;
  let img = document.getElementById(img_id);

  if (window.getComputedStyle(img).visibility === 'visible') {
    hide_image(img_id);
  } else {
    show_image(img_id);
  }
}
