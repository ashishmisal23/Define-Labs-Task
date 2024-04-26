document.addEventListener('DOMContentLoaded', (event) => {
    let slider = document.getElementById('sectionBanner');
    let readBtn = document.getElementById('readMoreBtn');
    let closePopupBtn = document.getElementById('closePopupBtn');

    let class1 = 'slide1';
    let class2 = 'slide2';
    let count = 0;

    setInterval(() => {
        event.preventDefault()

        count === 0 ? (
            slider.classList.remove(class1),
            slider.classList.add(class2),
            console.log("Class changed"),
            count = 1
        ) : (

            slider.classList.remove(class2),
            slider.classList.add(class1),
            console.log("Class changed"),
            count = 0
        )

    }, 3000);


    let popup = document.getElementById('popup');

    readBtn.addEventListener('click', function () {
        popup.classList.add('show');
        document.getElementById('overlay').classList.add('show');
    });

    closePopupBtn.addEventListener('click', function () {
        popup.classList.remove('show');
        document.getElementById('overlay').classList.remove('show');
    });

})

