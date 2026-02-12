// All clothes
const all_clothes = {
  under: "none",
};

// Under clothes
const under = [
  "none",
  "under_suit_1",
  "under_suit_2",
  "under_suit_3",
];

// Show and hide images
function show_image(img_id) {
  let img = document.getElementById(img_id);
  img.style.visibility = 'visible';
}

function hide_image(img_id) {
  let img = document.getElementById(img_id);
  img.style.visibility = 'hidden';
}

// Change under clothes
function under_change(selected_under) {
  let img_id = `dressup_image_day__${selected_under}`;
  let img = document.getElementById(img_id);

  if (window.getComputedStyle(img).visibility === 'visible') {
    hide_image(img_id);
  } else {
    show_image(img_id);
  }
}
