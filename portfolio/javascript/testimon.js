const testimonials = [

    {
        name: "Client Name",
        company: "Company Name",
        image: "images/client1.jpg",
        stars: "★★★★★",
        review: "Write the client's testimonial here.",
        date: "July 2026"
    },

    {
        name: "Client Name",
        company: "Company Name",
        image: "images/client2.jpg",
        stars: "★★★★★",
        review: "The AI automation improved our workflow and saved our team valuable time.",
        date: "August 2026"
    }

];

function addTestimonial(name, company, image, stars, review) {

    testimonials.push({

        name,
        company,
        image,
        stars,
        review

    });

    displayTestimonials();

}