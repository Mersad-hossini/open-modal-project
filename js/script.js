let $ = document
let modalBtn = $.getElementById("modalBtn")
let modalParent = $.querySelector(".modal-parent")
let firstSection = $.getElementById("section")
let closeSpan = $.querySelector(".X")

function openModal() {
    modalParent.style.display = "block"
    firstSection.style.filter = "blur(10px)"
    modalBtn.blur() // برای از بین رفتن بوردر پشت دکمه
}

function closeModal() {
    modalParent.style.display = "none"
    firstSection.style.filter = "blur(0px)"
}

function escapeModal(e) {
    if(e.keyCode === 27) {
        closeModal()
    }
}

modalBtn.addEventListener("click" , openModal)
closeSpan.addEventListener("click" , closeModal)
$.body.addEventListener("keydown" , escapeModal)