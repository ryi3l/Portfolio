const contacts = document.getElementById('contacts-section');
const getInTouchButton = document.getElementById('get-in-touch-button');
const projects = document.getElementById('projects-section');
const viewMyWorkButton = document.getElementById('view-my-work-button');

const enlargedImageContainer = document.getElementById('enlarged-image-container');
const enlargedImage = document.getElementById('enlarged-image');
const images = document.querySelectorAll('#images img');

if (getInTouchButton && contacts) {
    getInTouchButton.addEventListener("click", function(){
        contacts.scrollIntoView({
            behavior: 'smooth'
        });
    });
}

if (viewMyWorkButton && projects) {
    viewMyWorkButton.addEventListener("click", function(){
        projects.scrollIntoView({
            behavior: 'smooth'
        });
    });
}



if (enlargedImageContainer && enlargedImage) {
    images.forEach((image) => {
        image.addEventListener("click", function(){
            enlargedImageContainer.classList.add("active");
            enlargedImage.src = image.src;
            enlargedImageContainer.appendChild(enlargedImage);
        });
        enlargedImageContainer.addEventListener("click", function(event){
            if (event.target === event.currentTarget) {
                enlargedImageContainer.classList.remove("active");
            }
        });
    });
    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            enlargedImageContainer.classList.remove("active");
        }
    });
}
