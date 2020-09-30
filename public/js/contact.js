const sa1 = document.querySelector(".sweet-1")
const sa2 = document.querySelector(".sweet-2")
const sa3 = document.querySelector(".sweet-3")
const sa4 = document.querySelector(".sweet-4")
const form = document.querySelector("#form")

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
});

form.addEventListener("submit", (e) => {
    if (sa1.value.trim() == "" || sa2.value.trim() == "" || sa3.value.trim() == "" || sa4.value.trim() == "") {
        e.preventDefault()

        Toast.fire({
            icon: "error",
            title: "Please enter all the details.",
        });
    }
})