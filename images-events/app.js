//TDD 
// Make objects for each image - name, image, clicks - seen? (check)
// constructor function ^^ (check)
// create count variable (check)
// counting guesses ONLY allowing a certain number and then you can't guess any more
// render two images - must be two different images
// - renders
// - pick goats
// you can click - listener
// when you click it counts AND renders new images
// stretch goal - make sure images don't repeat each round 
// wipe out data of results to start over - render the results
// Get global variables

// Global Variables

//TDD 
// Make objects for each image - name, image, clicks - seen? (check)
// constructor function ^^ (check)
// create count variable (check)
// counting guesses ONLY allowing a certain number and then you can't guess any more
// render two images - must be two different images
// - renders
// - pick goats
// you can click - listener
// when you click it counts AND renders new images
// stretch goal - make sure images don't repeat each round 
// wipe out data of results to start over - render the results
// Get global variables

// Global Variables
const results = document.getElementById('goat-clicks')
const bothGoats = document.getElementById('all_goats')
const rightGoatImg = document.getElementById('right_goat_img')
const leftGoatImg = document.getElementById('left_goat_img')
const rightGoatPElem = document.getElementById('right_goat_p')
const leftGoatPElem = document.getElementById('left_goat_p')

console.log(results)

let totalClicks = 0;

let leftGoat = null;
let rightGoat = null;

// CONSTRUCTOR FUNCTION
const GoatPictures = function (name, imagePath) {
    this.name = name;
    this.imagePath = imagePath;
    this.clicks = 0;
    this.timesShown = 0;

    GoatPictures.allImages.push(this);
}
// ADDED PROPERTY TO GOAT PICTURES OBJECT THAT'S AN ARRAY
GoatPictures.allImages = []

const renderGoats = function () {
    // USE THE RIGHT AND LEFT GLOBAL VARIABLES FOR THE IMAGE AND THE P TAG TO STICK TO THE GOATS ON THE PAGE
    leftGoatImg.src = leftGoat.imagePath;
    rightGoatImg.src = rightGoat.imagePath;
    rightGoatPElem.textContent = rightGoat.name;
    leftGoatPElem.textContent = leftGoat.name;

}

// WRITE A FUNCTION THAT PICKS TWO DIFFERENT GOATS
function goatPicker() {
    // write a function that picks one goat at random, and then another, making sure the first goat and second goat are not the same
    const leftIndex = Math.floor(Math.random() * GoatPictures.allImages.length)
    console.log(GoatPictures.allImages)
    console.log(leftIndex)
    let rightIndex = Math.floor(Math.random() * GoatPictures.allImages.length)
    console.log(rightIndex)

    // A DIFFERNT INDEX NUMBER THATN THE FIRST ONE
    while (rightIndex === leftIndex) {
        rightIndex = Math.floor(Math.random() * GoatPictures.allImages.length)
        console.log(rightIndex)
    }
    leftGoat = GoatPictures.allImages[leftIndex];
    rightGoat = GoatPictures.allImages[rightIndex];
}

// DISPLEY VOTE COUNT FUNCTION
function displayVoteCount() {
    results.innerHTML = '';
    let h2Elem = document.createElement('h2')
    h2Elem.textContent = 'Goat Likes'
    results.appendChild(h2Elem);
    for (let goat of GoatPictures.allImages) {
        const liElem = document.createElement('li');
        console.log('goat', goat)
        liElem.textContent = `${goat.name}: ${goat.clicks}`
        results.appendChild(liElem)
    }
}

// HANDLE THE RSULE OF A CLICK
function handleClick(event) {
    console.log(event.target);
    const clickedTarget = event.target;
    const id = clickedTarget.id;
    console.log('clickedTarget.id', clickedTarget.id)
    // we need a way to compare the left goat and right goat to what we clicked on to mae sure we count the vote
    // if they vote 10 times or less do this
    if (totalClicks < 10) {
        if (id === 'left_goat_img' || id === 'right_goat_img') {
            //   INCREMENT VOTES TOTAL
            //  INCREMENT THE PARTICULAR VOTES FOR THE GOAT WE CLICKED ON
            if (id === 'left_goat_img') {
                leftGoat.clicks++;
            } else {
                rightGoat.clicks++;
            }
            totalClicks++;
            leftGoat.timesShown++;
            rightGoat.timesShown++;
            goatPicker();
            renderGoats();
        }
    }
    if (totalClicks == 10) {
        bothGoats.removeEventListener('click', handleClick);
        displayVoteCount();
    }
}

new GoatPictures('Bunny Goat', 'assets/bunny-goat.png');
new GoatPictures('Cool Goat', 'assets/cool-goat.jpeg');
new GoatPictures('Cruisin Goat', 'assets/cruisin-goat.jpeg');
new GoatPictures('Float Your Goat', 'assets/float-your-goat.jpeg');
new GoatPictures('Goat Away', 'assets/goat-away.jpeg');
new GoatPictures('Goat Out Of Hand', 'assets/goat-out-of-hand.jpeg');
new GoatPictures('Kissing Goat', 'assets/kissing-goat.jpeg');
new GoatPictures('Lucky Goat', 'assets/lucky-goat.jpeg');
new GoatPictures('Sassy Goat', 'assets/sassy-goat.jpeg');
new GoatPictures('Smiling Goat', 'assets/smiling-goat.jpeg');
new GoatPictures('Sweater Goat', 'assets/sweater-goat.jpeg');

// ADD AND EVENT LISTENER TO ALL GOATS DIV
bothGoats.addEventListener('click', handleClick);
goatPicker();
renderGoats();
