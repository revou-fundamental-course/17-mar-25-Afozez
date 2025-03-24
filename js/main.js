// Regex untuk angka 0-9
const regexNumber = /^[0-9]+$/;

// Memanggil elemen form menggunakan id
const formSquarePerimeter = document.getElementById('form-square-perimeter');
const formSquareArea = document.getElementById('form-square-area');

// Memanggil elemen input menggunakan id
const inputSquareArea = document.getElementById('input-square-area');
const inputSquarePerimeter = document.getElementById('input-square-perimeter');

// Memanggil elemen hasil
const resultSquareArea = document.getElementById("result-square-area"); 
const resultSquarePerimeter = document.getElementById("result-square-perimeter"); 

// Fungsi validasi input
const formValidation = (value) => {
    if (!value) {
        alert("Input tidak boleh kosong"); // Cek apakah input kosong
        return true // Mengembalikan true jika input kosong
    }
    if (!regexNumber.test(value)) {
        alert("Input hanya boleh berupa angka"); // Cek apakah input adalah angka
        return true // Mengembalikan true jika input kosong
    } 
    
    if(value > 10000) {
        alert("Input karakter tidak boleh lebih dari 10.000 ribu"); // Cek apakah input adalah angka
        return true // Mengembalikan true jika input kosong
    }

    return false  // Mengembalikan false jika input valid
};

// Fungsi untuk menghitung luas persegi
const calculateSquareArea = () => {
    const value = inputSquareArea.value; // Ambil nilai input
    
    if(formValidation(value)) return //Panggil fungsi validasi form
    
    const result = value * value; // Menghitung luas persegi (S x S)
    
    // Menampilkan hasil
    resultSquareArea.innerText = `L = S x S
    L = ${value} x ${value}
    L = ${result}`;
    
    inputSquareArea.value = ""
};

// Fungsi untuk menghitung keliling persegi
const calculateSquarePerimeter = () => {
    const value = inputSquarePerimeter.value; // Ambil nilai input
    
    if(formValidation(value)) return //Panggil fungsi validasi form
    
    const result = 4 * value; // Menghitung keliling persegi (4 x S)
    
    // Menampilkan hasil
    resultSquarePerimeter.innerText = `K = 4 x S    
    K = 4 x ${value}
    K = ${result}`;

    inputSquarePerimeter.value = ""
};

// Event listener untuk form luas persegi
formSquareArea.addEventListener("submit", (e) => {
    e.preventDefault(); // Mencegah halaman refresh
    calculateSquareArea(); // Panggil fungsi hitung luas
}); 

// Event listener untuk form keliling persegi
formSquarePerimeter.addEventListener("submit", (e) => {
    e.preventDefault(); // Mencegah halaman refresh
    calculateSquarePerimeter(); // Panggil fungsi hitung keliling
});

// Fungsi reset hasil 
function resetSquarePerimeter() {
    resultSquarePerimeter.innerText = ""
}


// Fungsi reset hasil
function resetSquareArea() {
    resultSquareArea.innerText = ""
}