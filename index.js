const bars = document.querySelector('.bars')
const times = document.querySelector('.times')
const aside = document.querySelector('.aside')
bars.addEventListener('click', () => myfun('open'))
times.addEventListener('click', () => myfun('close'))
const myfun = (navCondition) => {
    if (navCondition == 'open') {
        aside.classList.add('show-now');
        bars.style.display = "none"
        times.style.display = "block"
    }
    else {
        aside.classList.remove('show-now');
        bars.style.display = "block"
        times.style.display = "none"
    }

}
function circle3d() {
    $(document).ready(function () {
        if (!$('#mycanvas').tagcanvas({
            textColour: "#08fdd8",
            outlineColor: "transparent",
            reverse: true,
            depth: 0.8,
            maxSpeed: 0.05,
            weight: true
        }, 'tags')) {
            $('#mycanvasContainer')
        }
    })

}
function rubertextanimation() {
    document.querySelectorAll(".reuber").forEach((e) => {
        var clatter = ""
        e.textContent.split("").forEach((e) => {
            clatter += `<span id="textani">${e}</span>`
        })
        e.innerHTML = clatter
    })
}
function scrollOnClickOfBtb() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function (e) {
            e.preventDefault()
            var a = document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: "smooth"
            })
            console.log(a);
        })
    })
}
circle3d()
rubertextanimation()
scrollOnClickOfBtb()

