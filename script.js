let gonder = document.getElementById("gonder")
let temizle = document.getElementById("temizle")
let input = document.getElementById("input")
let yazilacaklar = document.getElementById("yazilacaklar")


gonder.addEventListener("click", function () {

    let p = document.createElement("p")
    p.append(input.value)
    yazilacaklar.appendChild(p)
    p.innerHTML = input.value
    input.value = ""

    p.addEventListener("dblclick", function () {
        yazilacaklar.removeChild(p);
    })

    p.addEventListener("click", function () {
        p.style.textDecoration = "line-through";
    })

    temizle.addEventListener("click", function () {
        yazilacaklar.removeChild(p);
    })
})