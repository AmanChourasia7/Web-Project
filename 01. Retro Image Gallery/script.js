document.addEventListener('DOMContentLoaded', function() {
    const images = [
        {
            src: "image.jpg",
            desc: "Image 1",
            date: "2024-08-03",
            camera: "Canon EOS 5D Mark IV",
            size: "300KB",
            location: "New York, USA"
        },
        {
            src: "image1.jpg",
            desc: "Image 1",
            date: "2024-08-03",
            camera: "Canon EOS 5D Mark IV",
            size: "300KB",
            location: "New York, USA"
        },
        {
            src: "image.jpg",
            desc: "Image 1",
            date: "2024-08-03",
            camera: "Canon EOS 5D Mark IV",
            size: "300KB",
            location: "New York, USA"
        },
        {
            src: "image1.jpg",
            desc: "Image 1",
            date: "2024-08-03",
            camera: "Canon EOS 5D Mark IV",
            size: "300KB",
            location: "New York, USA"
        },
        {
            src: "image2.jpg",
            desc: "Image 1",
            date: "2024-08-03",
            camera: "Canon EOS 5D Mark IV",
            size: "300KB",
            location: "New York, USA"
        },
        {
            src: "image3.jpg",
            desc: "Image 1",
            date: "2024-08-03",
            camera: "Canon EOS 5D Mark IV",
            size: "300KB",
            location: "New York, USA"
        },
        {
            src: "image2.jpg",
            desc: "Image 1",
            date: "2024-08-03",
            camera: "Canon EOS 5D Mark IV",
            size: "300KB",
            location: "New York, USA"
        },
        {
            src: "image3.jpg",
            desc: "Image 1",
            date: "2024-08-03",
            camera: "Canon EOS 5D Mark IV",
            size: "300KB",
            location: "New York, USA"
        },{
            src: "image.jpg",
            desc: "Image 1",
            date: "2024-08-03",
            camera: "Canon EOS 5D Mark IV",
            size: "300KB",
            location: "New York, USA"
        },
        {
            src: "image1.jpg",
            desc: "Image 1",
            date: "2024-08-03",
            camera: "Canon EOS 5D Mark IV",
            size: "300KB",
            location: "New York, USA"
        },
        {
            src: "image.jpg",
            desc: "Image 1",
            date: "2024-08-03",
            camera: "Canon EOS 5D Mark IV",
            size: "300KB",
            location: "New York, USA"
        },
        {
            src: "image1.jpg",
            desc: "Image 1",
            date: "2024-08-03",
            camera: "Canon EOS 5D Mark IV",
            size: "300KB",
            location: "New York, USA"
        },
        {
            src: "image2.jpg",
            desc: "Image 1",
            date: "2024-08-03",
            camera: "Canon EOS 5D Mark IV",
            size: "300KB",
            location: "New York, USA"
        },
        {
            src: "image3.jpg",
            desc: "Image 1",
            date: "2024-08-03",
            camera: "Canon EOS 5D Mark IV",
            size: "300KB",
            location: "New York, USA"
        },
        {
            src: "image2.jpg",
            desc: "Image 1",
            date: "2024-08-03",
            camera: "Canon EOS 5D Mark IV",
            size: "300KB",
            location: "New York, USA"
        },
        {
            src: "image3.jpg",
            desc: "Image 1",
            date: "2024-08-03",
            camera: "Canon EOS 5D Mark IV",
            size: "300KB",
            location: "New York, USA"
        },{
            src: "image.jpg",
            desc: "Image 1",
            date: "2024-08-03",
            camera: "Canon EOS 5D Mark IV",
            size: "300KB",
            location: "New York, USA"
        },
        {
            src: "image1.jpg",
            desc: "Image 1",
            date: "2024-08-03",
            camera: "Canon EOS 5D Mark IV",
            size: "300KB",
            location: "New York, USA"
        },
        {
            src: "image.jpg",
            desc: "Image 1",
            date: "2024-08-03",
            camera: "Canon EOS 5D Mark IV",
            size: "300KB",
            location: "New York, USA"
        },
        {
            src: "image1.jpg",
            desc: "Image 1",
            date: "2024-08-03",
            camera: "Canon EOS 5D Mark IV",
            size: "300KB",
            location: "New York, USA"
        },
        {
            src: "image2.jpg",
            desc: "Image 1",
            date: "2024-08-03",
            camera: "Canon EOS 5D Mark IV",
            size: "300KB",
            location: "New York, USA"
        },
        {
            src: "image3.jpg",
            desc: "Image 1",
            date: "2024-08-03",
            camera: "Canon EOS 5D Mark IV",
            size: "300KB",
            location: "New York, USA"
        },
        {
            src: "image2.jpg",
            desc: "Image 1",
            date: "2024-08-03",
            camera: "Canon EOS 5D Mark IV",
            size: "300KB",
            location: "New York, USA"
        },
        {
            src: "image3.jpg",
            desc: "Image 1",
            date: "2024-08-03",
            camera: "Canon EOS 5D Mark IV",
            size: "300KB",
            location: "New York, USA"
        },{
            src: "image.jpg",
            desc: "Image 1",
            date: "2024-08-03",
            camera: "Canon EOS 5D Mark IV",
            size: "300KB",
            location: "New York, USA"
        },
        {
            src: "image1.jpg",
            desc: "Image 1",
            date: "2024-08-03",
            camera: "Canon EOS 5D Mark IV",
            size: "300KB",
            location: "New York, USA"
        },
        {
            src: "image.jpg",
            desc: "Image 1",
            date: "2024-08-03",
            camera: "Canon EOS 5D Mark IV",
            size: "300KB",
            location: "New York, USA"
        },
        {
            src: "image1.jpg",
            desc: "Image 1",
            date: "2024-08-03",
            camera: "Canon EOS 5D Mark IV",
            size: "300KB",
            location: "New York, USA"
        },
        {
            src: "image2.jpg",
            desc: "Image 1",
            date: "2024-08-03",
            camera: "Canon EOS 5D Mark IV",
            size: "300KB",
            location: "New York, USA"
        },
        {
            src: "image3.jpg",
            desc: "Image 1",
            date: "2024-08-03",
            camera: "Canon EOS 5D Mark IV",
            size: "300KB",
            location: "New York, USA"
        },
        {
            src: "image2.jpg",
            desc: "Image 1",
            date: "2024-08-03",
            camera: "Canon EOS 5D Mark IV",
            size: "300KB",
            location: "New York, USA"
        },
        {
            src: "image3.jpg",
            desc: "Image 1",
            date: "2024-08-03",
            camera: "Canon EOS 5D Mark IV",
            size: "300KB",
            location: "New York, USA"
        },
        // Add more images as needed
    ];

    let currentImageIndex = 0;
    let autoplayInterval;

    const gallery = document.getElementById('gallery');
    const lightboxContainer = document.getElementById('lightbox-container');

    images.forEach((image, index) => {
        const figure = document.createElement('figure');
        const link = document.createElement('a');
        const img = document.createElement('img');
        const figcaption = document.createElement('figcaption');

        img.src = image.src;
        img.alt = image.name;
        img.dataset.lightbox = `image${index + 1}`;
        link.href = `#image${index + 1}`;
        link.appendChild(img);
        figcaption.textContent = image.name;
        figure.appendChild(link);
        figure.appendChild(figcaption);

        gallery.appendChild(figure);

        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        lightbox.id = `image${index + 1}`;

        const close = document.createElement('a');
        close.href = '#';
        close.classList.add('close');
        close.textContent = '×';

        const lightboxImg = document.createElement('img');
        lightboxImg.src = image.src;
        lightboxImg.alt = image.name;

        const leftInfo = document.createElement('div');
        leftInfo.classList.add('left-info');

        leftInfo.innerHTML = `
            <p class="highlight">Location: ${image.location}</p>
            <p class="highlight">Date: ${image.date}</p>
            <p class="small">Camera/Phone: ${image.camera}</p>
            <p class="small">Size: ${image.size}</p>
            <p class="image-name-narrow">${image.desc}</p>
        `;

        const rightButtons = document.createElement('div');
        rightButtons.classList.add('right-buttons');

        const downloadBtn = document.createElement('a');
        downloadBtn.href = image.src;
        downloadBtn.classList.add('button');
        downloadBtn.setAttribute('download', image.name);
        downloadBtn.innerHTML = 'Download';

        const autoplayBtn = document.createElement('a');
        autoplayBtn.href = '#';
        autoplayBtn.classList.add('button');
        autoplayBtn.innerHTML = 'Autoplay';

        autoplayBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (autoplayInterval) {
                clearInterval(autoplayInterval);
                autoplayInterval = null;
            } else {
                autoplayInterval = setInterval(() => {
                    navigateLightbox(currentImageIndex, 1);
                }, 2000);
            }
        });

        rightButtons.appendChild(autoplayBtn);
        rightButtons.appendChild(downloadBtn);

        const bottomBar = document.createElement('div');
        bottomBar.classList.add('bottom-bar');
        bottomBar.appendChild(leftInfo);
        bottomBar.appendChild(rightButtons);

        const leftArrow = document.createElement('button');
        leftArrow.classList.add('arrow-button', 'left');
        leftArrow.innerHTML = '&larr;';
        leftArrow.addEventListener('click', () => navigateLightbox(currentImageIndex, -1));

        const rightArrow = document.createElement('button');
        rightArrow.classList.add('arrow-button', 'right');
        rightArrow.innerHTML = '&rarr;';
        rightArrow.addEventListener('click', () => navigateLightbox(currentImageIndex, 1));

        lightbox.appendChild(close);
        lightbox.appendChild(leftArrow);
        lightbox.appendChild(lightboxImg);
        lightbox.appendChild(rightArrow);
        lightbox.appendChild(bottomBar);

        lightboxContainer.appendChild(lightbox);
    });

    function navigateLightbox(index, direction) {
        const newIndex = (index + direction + images.length) % images.length;
        currentImageIndex = newIndex;
        window.location.hash = `#image${newIndex + 1}`;
    }

    lightboxContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('close')) {
            if (autoplayInterval) {
                clearInterval(autoplayInterval);
                autoplayInterval = null;
            }
        }
    });
});
