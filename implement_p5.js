function p5Draw(id) {
  let eraseEnable = false;
  let buttons = {};
  const conceptDiv = document.getElementById('general_tree');
  const conceptWidth = conceptDiv.offsetWidth;
  return function(sketch) {
    sketch.setup = function() {
      setupImage('/assets/img/' + id + '.png', sketch, conceptWidth)
      setupEraseButton(id, sketch)
      setupSaveButton(id, sketch)
      setupCanvas(id, sketch)
      setupGraphics(sketch)
    };
    sketch.draw = function() {
      sketch.image(sketch.img, 0, 0, conceptWidth, 400);
      sketch.image(sketch.graphic, 0, 0)
    };
    sketch.mouseDragged = function() {
      if (!eraseEnable) {
        sketch.graphic.fill('black');
        sketch.graphic.noStroke();
        sketch.graphic.ellipse(sketch.mouseX, sketch.mouseY, 5, 5);
      } else {
        sketch.graphic.fill('white');
        sketch.graphic.noStroke();
        sketch.graphic.ellipse(sketch.mouseX, sketch.mouseY, 10, 10);
      }
    };
    function setupImage(imagePath, sketch, conceptWidth) {
      const request = new XMLHttpRequest();
      request.open("GET", imagePath, false);
      request.send();
      if(request.status == 404) {
        sketch.img = sketch.createImage(conceptWidth, 400)
      } else {
        sketch.img = sketch.loadImage(imagePath)
      }
    }
    function setupGraphics (sketch) {
      sketch.graphic = sketch.createGraphics(conceptWidth, 400);
    }
    function setupEraseButton(id, sketch) {
      buttons[id] = sketch.createButton(id);
      buttons[id].parent(id + ' toggle_erase');
      buttons[id].addClass("border rounded px-4");
      buttons[id].mouseClicked(eraseButtonClicked)
    };
    function eraseButtonClicked() {
      buttons[id].toggleClass("bg-indigo-100");
      buttons[id].toggleClass("border");
      if (eraseEnable) {
        sketch.noErase();
        eraseEnable = false;
      }
      else {
        sketch.erase();
        eraseEnable = true;
      }
    }
    function setupSaveButton(id, sketch) {
      buttons[id] = sketch.createButton('save');
      buttons[id].parent(id + ' toggle_erase');
      buttons[id].addClass("border rounded px-4");
      buttons[id].mouseClicked(saveButtonClicked)
    };
    function setupCanvas (id, sketch) {
      const concept = sketch.createCanvas(conceptWidth, 400);
      concept.parent(id + ' canvas');
    }
    function saveButtonClicked() {
      sketch.saveCanvas(id + '.png');
    }
  };
}
