//step 1: create base class

class LibraryItem {
    constructor(title, isAvailable) {
        this.title = title;
        this.isAvailable = true;
     }

     checkoutTitle() {
        this.isAvailable = false;
        console.log(`\nYou have checked out ${this.title}.\n`)
     }

     returnTitle() {
        this.isAvailable = true;
        console.log(`\n${this.title} has been returned.\n`);
     }

     describe() {
        let status;
        if (this.isAvailable) {
            status = "available for checkout";
        } else {
            status = "currently unavailable";
        }
        console.log(`\n${this.title} is ${status}.\n`)
     }
}

//step 2: extend base class
class Book extends LibraryItem {
    constructor (title, isAvailable, author, genre, isbn) {
        super(title, isAvailable);
        this.author = author;
        this.genre = genre;
        this.isbn = isbn;
    }
}

class DVD extends LibraryItem {
    constructor (title, isAvailable, genre, director, duration, upc) {
        super (title, isAvailable);
        this.genre = genre;
        this.director = director;
        this.duration = duration;
        this.upc = upc;
    }
}

class Magazine extends LibraryItem {
    constructor (title, isAvailable, issueNumber, publisher,) {
        super (title, isAvailable);
        this.issueNummber = issueNumber;
        this.publisher = publisher;    
    }
}

//step 3: instantiate objects
let aCourtOfThornsAndRoses = new Book(`A Court of Thorns and Roses`, false, `Sarah J. Maas`, `fantasy romance`, 9781526605399);
let atomicHabits = new Book(`Atomic Habits`, true, `James Clear`, `self help`, 9780735211292);
let myBestFriendsExcorcism = new Book("My Best Friend`s Excorcism", true, `Gary Hendrix`, `horror; fiction`, 1594748624);

let americanPsycho = new DVD(`American Psycho`, true, `horror`, `Mary Harron`, `190 minutes`, 48984269009);
let twentyTwoJumpStreet = new DVD(`22 Jump Street`, false, `comedy`, `Phil Lord, Christopher Miller`, `112 minutes`, 43396439672);
let tombstone = new DVD(`Tombstone`, true, `western`, `George Cosmatos`, `127 minutes`, 786936725247); 

let sportsIllustrated = new Magazine(`Sports Illustrated`, true, `April 2025`, `Minute Media`);
let theHockeyNews = new Magazine(`The Hockey News`, false, `April 2025`, `W.M. Kiplinger`);

//step 4: test inheritance
//managing availabilty 
console.log(aCourtOfThornsAndRoses); //shows orignal listing
aCourtOfThornsAndRoses.describe(); // displays that book is available
aCourtOfThornsAndRoses.checkoutTitle(); //displays that book has now been checked out 

console.log(aCourtOfThornsAndRoses); //shows updated listing, now availability is false
aCourtOfThornsAndRoses.describe(); //book is no longer available
aCourtOfThornsAndRoses.returnTitle(); //displays book has been returned message

console.log(aCourtOfThornsAndRoses); //listing reupdates and book is now available again
aCourtOfThornsAndRoses.describe(); // displays book is once again available 

//accessing additional properties
console.log(americanPsycho); //movies differ from books, removes author, genre, and isbn, adds genre, director, duration, and upc






