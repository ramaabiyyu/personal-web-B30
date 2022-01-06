// alert("Selamat siang B30") //memberi pemberitahuan

// document.write("Halo batch 30") //memberikan tulisan

// console.log("Selamat") //untuk informasi Debug

//variabel
//tipe data

// let firstName = "Muhammad Abiyyu"
// let lastName = "Rama"

// let gelas = "Kopi"
// console.log(gelas)

//var let const

//var bisa di deklarasikan ulang
// var piring = "nasi"
// var piring = "lauk"

// //let tidak bisa dideklarasikan ulang
// let gelas = "Kopi"
// gelas = "Susu"

// //const data tidak dapat diubah/tetap
// const mangkok = "Mie Ayam"
// //mangkok = "Bakso"

// console.log(piring)
// console.log(gelas)
// console.log(mangkok)

// let firstName = "Muhammad Abiyyu"
// let lastName = "Rama"
// let age = 20

// //ada dua metode penulisan
// let allData = "Nama Depan "+firstName+" Nama Belakang "+lastName+" Umur "+age
// let allData2 = `Nama Depan ${firstName} Nama Belakang ${lastName} Umur ${age}`

// console.log(allData);
// console.log(allData2);

// //function

// function getData(day, year){
//     console.log(firstName);
//     console.log(lastName);
//     console.log(age);

//     console.log(day);
//     console.log(year);
// }

// getData("Jumat", 2021);

// //variasi cara pengolahan data bisa angka maupun teks
// function penjumlahan(bilangan1, bilangan2){
//     return bilangan1 + bilangan2
// }

// console.log(penjumlahan(20,10));

// function sum(bill1, bill2){
//     let result = bill1 + bill2

//     console.log(result)
// }

// sum(20, 50);


function submitData(){
    
    let name = document.getElementById("input-name").value

    // console.log(name);

    let phonenumber = document.getElementById("input-number").value

    // console.log(phonenumber);

    let email = document.getElementById("input-email").value

    // console.log(email);

    let status = document.getElementById("input-status").value

    // console.log(status);

    let messages = document.getElementById("input-messages").value

    // console.log(messages);

    let dataObject = {
        name: name,
        phonenumber: phonenumber,
        email: email,
        status: status,
        messages: messages    
    }

    console.log(dataObject)

    // condition

    if(name == ""){
        alert("Nama wajib diisi")
    } else if(phonenumber == ""){
        alert("Nomor telephone wajib diisi")
    } else if(email == ""){
        alert("Email wajib diisi")
    } else if(status == ""){
        alert("Status wajib diisi")
    } else if(messages == ""){
        alert("Message wajib diisi")
    } else {
        // let emailReceiver = "ramapnj81@gmail.com"

        let a = document.createElement("a")

        a.href = `mailto: ${email}?subject=${status}&body=Hallo my name is ${name} ${messages} contact me ${phonenumber}`
        a.click()

        
    }
    
    // if(name == "" || email =="" || phonenumber == "" || status == "" || messages == ""){
    //     alert("Semua wajib diisi")
    // }
    
    


}
