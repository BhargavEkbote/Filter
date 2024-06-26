
function preload()
{

}

function setup()
{
    let canvas = document.createElement('canvas');
    canvas.id = 'myCanvas';
    canvas.width = 500; // Set canvas width
    canvas.height = 500; // Set canvas height

    // Center canvas on the screen
    canvas.style.position = 'absolute';
    canvas.style.top = '50%';
    canvas.style.left = '50%';
    canvas.style.transform = 'translate(-50%, -50%)';

    document.body.appendChild(canvas);
}

function draw()
{

}

function saveFilteredCanvas() {
    // Example: Save canvas as PNG image
    let link = document.createElement('a');
    link.download = 'filtered_image.png';
    canvas.toBlob(function(blob) {
        link.href = URL.createObjectURL(blob);
        link.click();
    }, 'image/png');
}

// Call setup function when the page loads
window.onload = setup;
