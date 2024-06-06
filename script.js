function redirecionar() {
    if (document.getElementById('estudante').checked){
        window.location.href = "pagina_estudante.html";
    } else if (document.getElementById('biblio').checked){
        window.location.href = "pagina_blibliotecaria.html";
    } else {
        alert("Por favor, selecione uma opção.");
    }
}

const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementsByClassName("close")[0];
const addBookForm = document.getElementById("addBookForm");

openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

addBookForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const bookTitle = document.getElementById("bookTitle").value;
  const publicationDate = document.getElementById("publicationDate").value;
  // Aqui você pode adicionar a lógica para enviar os dados do livro para onde desejar
  console.log("Título:", bookTitle);
  console.log("Data de Publicação:", publicationDate);
  modal.style.display = "none";
  addBookForm.reset();
});

const openDeleteModalBtn = document.getElementById("openDeleteModalBtn");
const deleteModal = document.getElementById("deleteModal");
const deleteCloseBtn = document.getElementsByClassName("delete-close")[0];
const deleteBookForm = document.getElementById("deleteBookForm");

openDeleteModalBtn.addEventListener("click", () => {
  deleteModal.style.display = "block";
});

deleteCloseBtn.addEventListener("click", () => {
  deleteModal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target == deleteModal) {
    deleteModal.style.display = "none";
  }
});

deleteBookForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const bookIdToDelete = document.getElementById("bookIdToDelete").value;
  // Aqui você pode adicionar a lógica para deletar o livro com o ID fornecido
  console.log("ID do Livro a Deletar:", bookIdToDelete);
  deleteModal.style.display = "none";
  deleteBookForm.reset();
});