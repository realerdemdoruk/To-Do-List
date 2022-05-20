let gonder = document.getElementById("gonder")
let temizle = document.getElementById("temizle")
let input = document.getElementById("input")
let yazilacaklar = document.getElementById("yazilacaklar")

gonder.addEventListener("click", function () {

    // let p = document.createElement("p")
    let p;
    
    // p.append(input.value)
    // yazilacaklar.appendChild(p)
    // p.innerHTML = input.value
    // input.value = ""


    let verim = localStorage.setItem("veriler",input)
    localStorage.getItem("veriler")


    // p.addEventListener("dblclick", function () {
    //     yazilacaklar.removeChild(p);
    // })

    // p.addEventListener("click", function () {
    //     p.style.textDecoration = "line-through";
    // })

    // temizle.addEventListener("click", function () {
    //     yazilacaklar.removeChild(p);
    // })

})