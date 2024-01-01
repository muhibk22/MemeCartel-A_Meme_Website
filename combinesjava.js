// External JavaScript file

document.addEventListener("DOMContentLoaded", function () {
    // Get all images except the logo and background
    var images = document.querySelectorAll(".images img:not(.logo)");

    // Add click event listener to each image
    images.forEach(function (image) {
        image.addEventListener("click", function () {
            // Open the image in a new tab
            openImageInNewTab(image.src);
        });
    });

    function openImageInNewTab(imageSrc) {
        // Open the image in a new tab
        window.open(imageSrc, "_blank");
    }
});
