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


const project = [
    {
        src: "./Image/p1.png",
        title: "E-learning website",
        technology: "MERN STACK",
        href: "https://lmsfrontend-omega.vercel.app/",
        desc: "Developed e-learning platform using MERN stack, Next.js, and Tailwind CSS Integrated Razorpay payment gateway for seamless transactions. Implemented user authentication with JWT and a range of user features. Managed course CRUD operations and integrated review functionality. Used technologies such as Multer and NodeMailer for backend functionalities, alongside Redux for frontend state management."
    },
    {
        src: "./Image/p3.png",
        title: "E-commerce website",
        technology: "MERN STACK",
        href: "https://tmdb-next-js-red.vercel.app/",
        desc: "Developed an ecommerce app using MERN stack.  Implemented user and product CRUD operations.Incorporated order management and user authentication features. Designed an admin panel for seamless management of the platform.communication skills."
    },
    {
        src: "./Image/p2.png",
        title: "Movex website",
        technology: "Next.js TMDB API  Tailwind.css",
        href: `https://tmdb-next-js-red.vercel.app/`,
        desc: `Created responsive movie website using Next.js, Tailwind CSS, and TMDB
        API.
        Integrated TMDB API to fetch movie data for seamless browsing and
        search functionality.
        Implemented Redux for efficient state management, enhancing user
        experience.
        Designed an admin panel for seamless management of the platform.
        Designed user-friendly interface with Tailwind CSS, ensuring
        responsiveness across devices.`
    },
    {
        src: "./Image/p4.png",
        title: "Fanta animated website",
        technology: "HTML CSS JavaScript",

        href: `https://fanta-mu.vercel.app/`,

        desc: `Created responsive movie website using Next.js, Tailwind CSS, and TMDB
        API.
        Integrated TMDB API to fetch movie data for seamless browsing and
        search functionality.
        Implemented Redux for efficient state management, enhancing user
        experience.
        Designed an admin panel for seamless management of the platform.
        Designed user-friendly interface with Tailwind CSS, ensuring
        responsiveness across devices.`
    },
    {
        src: "./Image/p5.png",
        title: "GSAP ANIMATION",
        technology: "HTML CSS JavaScript",
        href: `https://gsap-animation-two.vercel.app/`,

        desc: `Created responsive movie website using Next.js, Tailwind CSS, and TMDB
        API.
        Integrated TMDB API to fetch movie data for seamless browsing and
        search functionality.
        Implemented Redux for efficient state management, enhancing user
        experience.
        Designed an admin panel for seamless management of the platform.
        Designed user-friendly interface with Tailwind CSS, ensuring
        responsiveness across devices.`
    },
    {
        src: "./Image/p6.png",
        title: "bubble Game",
        technology: "HTML CSS JavaScript",

        href: `https://bubble-game-zeta-orpin.vercel.app/`,
        desc: `Created responsive movie website using Next.js, Tailwind CSS, and TMDB
        API.
        Integrated TMDB API to fetch movie data for seamless browsing and
        search functionality.
        Implemented Redux for efficient state management, enhancing user
        experience.
        Designed an admin panel for seamless management of the platform.
        Designed user-friendly interface with Tailwind CSS, ensuring
        responsiveness across devices.`
    },
    {
        src: "./Image/p7.png",
        title: "CYBERFRICTION",
        technology: "HTML CSS JavaScript Canvas",
        href: "https://crazy-fancy-canvas.vercel.app/",
        desc: `Created responsive movie website using Next.js, Tailwind CSS, and TMDB
        API.
        Integrated TMDB API to fetch movie data for seamless browsing and
        search functionality.
        Implemented Redux for efficient state management, enhancing user
        experience.
        Designed an admin panel for seamless management of the platform.
        Designed user-friendly interface with Tailwind CSS, ensuring
        responsiveness across devices.`
    },

]


const projectDes = document.querySelector("#projectDes");
const projectContainer = document.querySelector(".projectContainer");

var clutter = "";
project.forEach((e, i) => {
    clutter += `
    <div  class="projectCart w-[220px] h-[220px] overflow-hidden relative">
    <a href=${e.href}>
        <img class="projectImage" src=${e.src} alt="">
        <div class="">
            <img src="./Image/circle.png" class="hoverSeemore" alt="">
        </div>
    </a>
</div>

    `
});
projectContainer.innerHTML = clutter;


const text = projectDes.textContent;
const projectCart = document.querySelectorAll(".projectCart");

projectCart.forEach((e, i) => {
    e.addEventListener("mouseenter", (event) => {
        projectDes.textContent = project[i].desc;
    });
    e.addEventListener("mouseleave", (event) => {
        projectDes.textContent = text;
    });
});



document.getElementById('downloadButton').addEventListener('click', function() {
    // PDF file URL
    var pdfUrl = '../Image/AniketResume.pdf'; // Replace this with the actual path to your PDF file

    // Create an anchor element
    var downloadLink = document.createElement('a');
    
    // Set attributes for download link
    downloadLink.href = pdfUrl;
    downloadLink.download = 'Aniket-Patidar-Resume.pdf'; // File name for download

    // Append the anchor element to the body
    document.body.appendChild(downloadLink);

    // Trigger the click event of the anchor element
    downloadLink.click();

    // Remove the anchor element from the DOM after download
    document.body.removeChild(downloadLink);
});


var on = document.querySelector("#on");
var off = document.querySelector("#off");
var soundElement = document.querySelector("#sound");
var soundcloudFill = document.querySelector(".ri-soundcloud-fill");
var isPlaying = false; // Represents the state of the song

soundElement.addEventListener("click", function(e) {
    var currentColor = soundcloudFill.style.color;

    if (currentColor === 'rgb(8, 253, 216)') { 
        soundcloudFill.style.color = '#f50057';
        off.style.display = "inline";
        on.style.display = "none";
        isPlaying = false; 
        turnOffSong();
    } else {
        soundcloudFill.style.color = '#08fdd8';
        on.style.display = "inline";
        off.style.display = "none";
        isPlaying = true; 
        playSong();
    }
});

const myAudio =  document.querySelector('#myAudio');

function playSong() {
    myAudio.play();
    console.log("Playing the song");
}


function turnOffSong() {
    myAudio.pause();
    console.log("Turning off the song");
}
