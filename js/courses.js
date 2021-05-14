const coursesContainer = document.querySelector('.courses')

const courses = [
    {
        title: "Master React Native",
        author: "Rahul T",
        rating: 4.7,
        noOfReviews: 25000,
        price: 2500,
        special: 'bestseller',
        imgSrc: 'images/react-native.jpg'
    },
    {
        title: "Web Dev Bootcamp",
        author: "Angela Yu",
        rating: 4.7,
        noOfReviews: 255000,
        price: 8640,
        special: 'bestseller',
        imgSrc: 'images/web-dev.jpg'
    },
    {
        title: "Advanced CSS",
        author: "Jonas",
        rating: 4.2,
        noOfReviews: 500,
        price: 500,
        special: 'new',
        imgSrc: 'images/sass.jpg'
    },
    {
        title: "Master Wordpress",
        author: "Brad Schiff",
        rating: 4.7,
        noOfReviews: 2500,
        price: 1000,
        special: 'bestseller',
        imgSrc: 'images/wordpress.jpg'
    },
    {
        title: "Python Bootcamp",
        author: "Jose Portilla",
        rating: 4.9,
        noOfReviews: 205000,
        price: 3000,
        special: 'bestseller',
        imgSrc: 'images/python.jpg'
    },
    {
        title: "React course",
        author: "Net Ninja",
        rating: 4.7,
        noOfReviews: 2000,
        price: 6000,
        special: 'bestseller',
        imgSrc: 'images/react.jpg'
    }
]

let html = ``
courses.forEach(course => {
    html += `
    <div class="course">
        <div class="course-image">
            <img src="${course.imgSrc}" alt="">
        </div>
        <h2 class="course-title">${course.title}</h2>
        <p class="course-author">${course.author}</p>
        <div class="review">
            <p>${course.rating}</p>

            <div class="stars">
                <img src="images/icons/star-filled.svg" alt="">
                <img src="images/icons/star-filled.svg" alt="">
                <img src="images/icons/star-filled.svg" alt="">
                <img src="images/icons/star-filled.svg" alt="">
                <img src="images/icons/star-half.svg" alt="">
            </div>
            <p class="no-of-reviews">(${course.noOfReviews})</p>
            
        </div>
        <h2 class="money">Rs.${course.price}</h2>
        <div class="${course.special}">
            <p>${course.special}</p>
        </div>
        <div class="add-to-cart">
            <img src="images/icons/cart.svg" alt="">
        </div>
    </div>

    `
})

coursesContainer.innerHTML = html


const leftScroll = document.querySelector('.left-scroll')
const rightScroll = document.querySelector('.right-scroll')
leftScroll.addEventListener('click', () => {
    coursesContainer.scrollBy({
        top: 0,
        left: -700,
        behavior: 'smooth'
    })
    
})


rightScroll.addEventListener('click', () => {
    coursesContainer.scrollBy({
        top: 0,
        left: 700,
        behavior: 'smooth'
    }) 
})