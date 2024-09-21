const texts = ["Student", "Frontend Developer", "UI/UX Designer", "Tech Enthusiast"];
let index = 0;
const dynamicTextElement = document.querySelector('.dynamic-text');

function changeText() {
    console.log("Changing text..."); // Debugging
    dynamicTextElement.classList.add('fade'); // Tambahkan efek fade

    setTimeout(() => {
        index = (index + 1) % texts.length; // Increment index
        dynamicTextElement.textContent = texts[index]; // Ganti teks
        dynamicTextElement.classList.remove('fade'); // Hapus efek fade
    }, 500); // Waktu untuk menunggu efek fade
}

setInterval(changeText, 2000); // Ganti teks setiap 3 detik