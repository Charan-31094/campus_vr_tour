
async function r(i) {
    let url = '../data/data_b.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

var popupContainer = document.createElement('div');
        popupContainer.classList.add('popup-container');
        popupContainer.style.display = 'none';

        var popupImage = document.createElement('img');
        popupImage.classList.add('popup-image');
        popupContainer.appendChild(popupImage);

        var closeButton = document.createElement('div');
        closeButton.classList.add('popup-button');
        closeButton.innerHTML = '<i class="fas fa-times"></i>';
        closeButton.addEventListener('click', function () {
            popupContainer.style.display = 'none';
        });
        popupContainer.appendChild(closeButton);

        document.body.appendChild(popupContainer);

        function openPopup(imageUrl) {
            popupImage.src = imageUrl;
            popupContainer.style.display = 'flex';
        }

        document.getElementById('btn_change_size').addEventListener('click', function () {
            openPopup('../images/main.png');
        });