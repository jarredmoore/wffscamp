// Function to toggle the sidebar
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
  }
  
  // Function to open the lightbox
  function openLightbox(imageSrc, caption) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
  
    lightboxImage.src = imageSrc;
    lightboxCaption.textContent = caption;
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent scrolling while lightbox is open
  }
  
  // Function to close the lightbox
  function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
  }
  
  // Function to change lightbox image (prev or next)
  function changeLightboxImage(direction) {
    const currentImage = document.getElementById('lightbox-image').src;
    const images = document.querySelectorAll('.picture img');
    let currentIndex;
  
    for (let i = 0; i < images.length; i++) {
      if (images[i].src === currentImage) {
        currentIndex = i;
        break;
      }
    }
  
    let newIndex = currentIndex + direction;
    if (newIndex < 0) {
      newIndex = images.length - 1;
    } else if (newIndex >= images.length) {
      newIndex = 0;
    }
  
    openLightbox(images[newIndex].src, images[newIndex].alt);
  }
  
  // Function to toggle full-screen mode for images
  function toggleFullscreen() {
    const lightboxImage = document.getElementById('lightbox-image');
    if (!document.fullscreenElement) {
      lightboxImage.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }
  
  // Event listeners for the sidebar toggle button and lightbox close button
  document.getElementById('sidebar-toggle').addEventListener('click', toggleSidebar);
  document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
  
  // Event listeners for keyboard events to navigate lightbox images and toggle full-screen mode
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeLightbox();
    } else if (event.key === 'ArrowLeft') {
      changeLightboxImage(-1);
    } else if (event.key === 'ArrowRight') {
      changeLightboxImage(1);
    }
  });
  