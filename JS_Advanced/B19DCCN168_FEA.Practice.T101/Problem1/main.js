
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((users) => {
    const userSelect = document.querySelector(".form-select");
    users.forEach((user) => {
      const option = document.createElement("option");
      option.value = user.id;
      option.textContent = user.name;
      userSelect.appendChild(option);
    });
    userSelect.addEventListener("change", fetchAlbums);
  });

function fetchAlbums() {
  const userId = document.querySelector(".form-select").value;
  const gallery = document.querySelector(".gallery");
  gallery.innerHTML = '';

  fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
    .then(res => res.json())
    .then(albums => {
        albums.forEach(album => {
            const albumRow = document.createElement('div');
            albumRow.className = "row my-3 d-flex justify-content-around";
            const albumTitle = document.createElement('h3');
            albumTitle.className = "text-start mb-2";
            // const albumDiv = document.createElement('div');
            // albumDiv.className = 'col-2 mb-4';
            albumTitle.textContent = `Album ${album.id}: ${album.title}`;
            albumRow.appendChild(albumTitle);
            // albumRow.appendChild(albumDiv);
            gallery.appendChild(albumRow);
            fetchPhoto(album.id, albumRow);
        })
    })
}

function fetchPhoto(albumId, albumRow) {
    fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
        .then(res => res.json())
        .then(photos => {
            photos.forEach(photo => {
                const photoCard = document.createElement('div');
                photoCard.className = 'col-2 card my-3';
                const image = document.createElement('img');
                image.className = 'card-img-top w-100 p-0';
                image.src = photo.url;
                image.alt = photo.title;
                photoCard.appendChild(image);

                const cardBody = document.createElement('div');
                cardBody.className = 'card-body';
                const cardTitle = document.createElement('h5');
                cardTitle.className = 'card-title';
                cardTitle.textContent = `Photo ${photo.id}`;
                cardBody.appendChild(cardTitle);

                const cardText = document.createElement('p');
                cardText.className = 'card-text';
                cardText.textContent = photo.title;
                cardBody.appendChild(cardText);
                photoCard.appendChild(cardBody);
                albumRow.appendChild(photoCard);
            })
        })
}