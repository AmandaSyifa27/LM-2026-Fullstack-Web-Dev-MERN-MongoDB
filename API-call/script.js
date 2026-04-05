const fetchBtn = document.getElementById("fetchBtn");
const output = document.getElementById("output");
const loading = document.getElementById("loading");

fetchBtn.addEventListener("click", () => {
 output.innerHTML = "";
 loading.classList.remove("hidden");
 fetchBtn.disabled = true;

 fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
   loading.classList.add("hidden");
   fetchBtn.disabled = false;

   users.forEach((user) => {
    const card = document.createElement("div");
    card.classList.add("user-card");

    card.innerHTML = `
            <div class="user-name">${user.name}</div>
            <div class="user-detail">Email: <span>${user.email}</span></div>
            <div class="user-detail">Username: <span>${user.username}</span></div>
            <div class="user-detail">Kota: <span>${user.address.city}</span></div>
            <div class="user-detail">Perusahaan: <span>${user.company.name}</span></div>
            `;

    output.appendChild(card);
   });
  })
  .catch((err) => {
   loading.classList.add("hidden");
   fetchBtn.disabled = false;

   const errMessage = document.createElement("div");
   errMessage.classList.add("error-message");
   errMessage.textContent = "Gagal mengambil data. Silakan coba lagi.";
   output.appendChild(errMessage);
  });
});
