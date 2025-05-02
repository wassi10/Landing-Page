// Testimonial

const testimonials = [
    {
        text: "The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus.",
        img: "Assets/logo/user.png",
        name: "Jenny Wilson",
        role: "Vice President"
    },
    {
        text: "A fantastic team that truly cares about their customers! Their attention to detail and responsiveness is remarkable.",
        img: "https://randomuser.me/api/portraits/men/45.jpg",
        name: "Michael Johnson",
        role: "Product Manager"
    },
    {
        text: "Working with them was a seamless experience. Their expertise and dedication made our project a huge success!",
        img: "Assets/logo/user.png",
        name: "Sophia Martinez",
        role: "CEO"
    },
    {
        text: "Working with them was a seamless experience. Their expertise and dedication made our project a huge success! Working with them was a seamless experience. Their expertise and dedication made our project a huge success!",
        img: "Assets/logo/user.png",
        name: "Khadiza Akther",
        role: "Software Engineer"
    }
];

let currentIndex = 0;

function updateTestimonial(index) {
    document.getElementById("testimonial-text").textContent = testimonials[index].text;
    document.getElementById("client-img").src = testimonials[index].img;
    document.getElementById("client-name").textContent = testimonials[index].name;
    document.getElementById("client-role").textContent = testimonials[index].role;
}

function prevTestimonial() {
    currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
    updateTestimonial(currentIndex);
}

function nextTestimonial() {
    currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
    updateTestimonial(currentIndex);
}



// FAQ
const btns = document.querySelectorAll('.icon');

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const accordion = btn.closest('.accordion');
        accordion.classList.toggle('onstate'); // Toggle current one

        // Close others
        document.querySelectorAll('.accordion').forEach(acc => {
            if (acc !== accordion) {
                acc.classList.remove('onstate');
            }
        });
    });
});
