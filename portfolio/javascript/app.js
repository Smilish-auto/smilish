const container = document.getElementById("projectContainer");

function loadProjects(){

container.innerHTML="";

projects.forEach(project=>{

const badges=project.tech.map(t=>`

<span class="bg-cyan-500/20 px-3 py-1 rounded-full">

${t}

</span>

`).join("");

container.innerHTML+=`

<div class="glass rounded-3xl overflow-hidden hover:scale-105 transition">

<img
src="${project.image}"
class="w-full h-60 object-cover">

<div class="p-6">

<h3 class="text-2xl font-bold">

${project.title}

</h3>

<p class="text-gray-300 mt-4">

${project.description.substring(0,90)}...

</p>

<button

onclick='openProject(${JSON.stringify(project)})'

class="mt-8 w-full bg-cyan-500 py-3 rounded-xl">

View Project

</button>

</div>

</div>

`;

});

}

loadProjects();

function openProject(project){

document.getElementById("modalImage").src=project.image;

document.getElementById("modalTitle").innerHTML=project.title;

document.getElementById("modalDescription").innerHTML=project.description;

document.getElementById("modalDemo").href=project.demo;

document.getElementById("modalGithub").href=project.github;

const tech=document.getElementById("modalTech");

tech.innerHTML="";

project.tech.forEach(item=>{

tech.innerHTML+=`

<span class="bg-cyan-500/20 px-3 py-1 rounded-full">

${item}

</span>

`;

});

document.getElementById("projectModal").classList.remove("hidden");

document.getElementById("projectModal").classList.add("flex");

}

function closeModal(){

document.getElementById("projectModal").classList.add("hidden");

document.getElementById("projectModal").classList.remove("flex");

}
// FORM
/*
const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const data = new FormData(form);

    const body = Object.fromEntries(data.entries());

    const response = await fetch(
        "YOUR_N8N_WEBHOOK_URL",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }
    );

    if (response.ok) {
        alert("Thank you for contacting Smilish Automation! Your message has been received. I'll get back to you soon.");
");
        form.reset();
    } else {
        alert("Something went wrong.");
    }

})*/
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    alert("Thank you for contacting Smilish Automation! Your message has been received. I'll get back to you soon.");

    form.reset();
});


//TESTIMONY

const testimonialContainer = document.getElementById("testimonialContainer");

if (testimonialContainer) {

    testimonials.forEach(client => {

        testimonialContainer.innerHTML += `

        <div class="glass rounded-3xl p-8 hover:scale-105 transition-all duration-500">

            <div class="flex items-center gap-4 mb-5">

                <img
                    src="${client.image}"
                    alt="${client.name}"
                    class="w-16 h-16 rounded-full object-cover border-2 border-cyan-500">

                <div>

                    <h3 class="text-xl font-bold">
                        ${client.name}
                    </h3>

                    <p class="text-cyan-400 text-sm">
                        ${client.company}
                    </p>

                </div>

            </div>

            <div class="text-yellow-400 text-xl mb-4">
                ${client.stars}
            </div>

            <p class="text-gray-300 italic leading-8">
                "${client.review}"
            </p>

            <p class="text-gray-500 text-sm mt-5">
                ${client.date}
            </p>

        </div>

        `;

    });


    function displayTestimonials() {

    const container = document.getElementById("testimonialContainer");

    container.innerHTML = "";

    testimonials.forEach(client => {

        container.innerHTML += `

        <div class="glass rounded-3xl p-8">

            <img src="${client.image}"
            class="w-16 h-16 rounded-full object-cover mb-4">

            <h3 class="text-xl font-bold">

                ${client.name}

            </h3>

            <p class="text-cyan-400">

                ${client.company}

            </p>

            <div class="text-yellow-400 text-xl">

                ${client.stars}

            </div>

            <p class="mt-4">

                "${client.review}"

            </p>

        </div>

        `;

    });

}

displayTestimonials();

}
const stars = document.querySelectorAll(".star");

stars.forEach((star, index) => {

    star.addEventListener("click", () => {

        stars.forEach((s, i) => {

            s.textContent = i <= index ? "★" : "☆";

            s.classList.toggle("text-yellow-400", i <= index);

        });

    });

});
