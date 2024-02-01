
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

async function fetchAlbums () {
  const userId = document.querySelector(".form-select").value;
  const gallery = document.querySelector(".gallery");
  gallery.innerHTML = '';

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}/albums`
  );
  const albums = await res.json();

  for (let album of albums) {
    const albumDiv = document.createElement('div');
    albumDiv.className = 'gallery';
    const albumRow = document.createElement('div');
    albumRow.className = 'row my-3';
    const albumTitle = document.createElement('h3');
    albumTitle.className = "text-start mb-2";
    albumTitle.textContent = `Album ${album.id}: ${album.title}`;
    albumRow.appendChild(albumTitle);
    albumDiv.appendChild(albumRow);
    await fetchPhoto(album.id, albumRow);
    gallery.appendChild(albumDiv);
  }
}

async function fetchPhotos(albumId, albumRow) {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`
    );
  const photos = await res.json();

  const albumCol = document.createElement('div');
  albumCol.className = 'col-12';
  const albumCardBody = document.createElement('div');
  albumCardBody.className = 'card-body';
  for (let photo of photos ) {
    const photoCard = document.createElement('div');
    photoCard.className = 'card';
  }
}