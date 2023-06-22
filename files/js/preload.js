function preloadImages() {
    for (let i = 1; i <= 7; i++) {
      const img = new Image();
      img.src = `../files/images/himg/h-9-c (${i}).jpg`;
    }
  }
    preloadImages();