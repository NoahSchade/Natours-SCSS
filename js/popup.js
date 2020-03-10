window.onload = (event) => {
  /**
   * Check if an element is out of the viewport
   * @param  {Node}  elem The element to check
   * @return {Object}     A set of booleans for each side of the element
   */
  var isOutOfViewport = function (elem) {

    // Get element's bounding
    var bounding = elem.getBoundingClientRect();

    // Check if it's out of the viewport on each side
    var out = {};
    out.top = bounding.top < 0;
    out.left = bounding.left < 0;
    out.bottom = bounding.bottom > (window.innerHeight || document.documentElement.clientHeight);
    out.right = bounding.right > (window.innerWidth || document.documentElement.clientWidth);
    out.any = out.top || out.left || out.bottom || out.right;

    return out;

  };

  var elem = document.querySelector('.popup-invisible__content');
  var popup = document.querySelector('.popup__content');

  var addClassIfOut = function () {
    var isOut = isOutOfViewport(elem);
    if (isOut.any) {
      popup.classList.add("popup__content-outOfViewport");
    } else {
      popup.classList.remove("popup__content-outOfViewport");
    }
  };

  addClassIfOut();
  window.addEventListener('resize', addClassIfOut, false);
};