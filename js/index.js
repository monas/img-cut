var cropper;

function uzkraunam(event) {
  const image = document.getElementById("image");
  console.log("apsikerpam", event);

  console.log("entering openFile()");
  var input = event.target;

  var reader = new FileReader();
  reader.onload = function () {
    var dataURL = reader.result;
    // var output = document.getElementById('output');
    image.src = dataURL;

    cropper = new Cropper(image, {
      aspectRatio: 16 / 9,
      crop(event) {
        console.log(event.detail.x);
        console.log(event.detail.y);
        console.log(event.detail.width);
        console.log(event.detail.height);
        console.log(event.detail.rotate);
        console.log(event.detail.scaleX);
        console.log(event.detail.scaleY);
      }
    });
    cropper.crop();

    // const rr = cropper.getCroppedCanvas().toDataUrl("image/jpeg");
    // ;{
    //   width: 160,
    //   height: 90,
    //   minWidth: 256,
    //   minHeight: 256,
    //   maxWidth: 4096,
    //   maxHeight: 4096,
    //   fillColor: "#fff",
    //   imageSmoothingEnabled: false,
    //   imageSmoothingQuality: "high"
    // });
  };
  reader.readAsDataURL(input.files[0]);
}

function apsikerpam() {
  console.log(cropper.getCroppedCanvas().toDataUrl("image/jpeg"));
}
