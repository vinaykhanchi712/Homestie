document.addEventListener("DOMContentLoaded", () => {
    const ia1 = document.querySelector(".input-alert1")
    const ia2 = document.querySelector(".input-alert2")
    const ia3 = document.querySelector(".input-alert3")
    const ia4 = document.querySelector(".input-alert4")
    const ia5 = document.querySelector(".input-alert5")
    const ia6 = document.querySelector(".input-alert6")
    const ia7 = document.querySelector(".input-alert7")
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
        if (ia1.value.trim() == "" || ia2.value.trim() == "" || ia3.value.trim() == "" || ia4.value.trim() == "" || ia5.value.trim() == "" || ia7.value.trim() == "" || ia6.value.trim() === "choosehere") {
            e.preventDefault()
            Toast.fire({
                icon: "error",
                title: "Please enter all the details.",
            });
        }
    })
})