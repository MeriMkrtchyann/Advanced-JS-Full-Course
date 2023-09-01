const Pagination = {

    pagesObj : {},

    init (array , number)  { 

        let arrLength = array.length

        for (let key = 1 ; key <= (arrLength / number) + 1 ; key++){
            this.pagesObj[key] = array.splice(0 , number)
        }

    } ,

    page : 1 ,

    getPageItems () {

       console.log(this.pagesObj[this.page])

    },

    nextPage () {

        this.page += 1

        return Pagination
    },

    goToPage (pageNumber) {

        this.page = pageNumber

    },

    prevPage () {

        this.page -= 1
        return Pagination

    },

    firstPage () {

        this.page = 1
    },

    lastPage (){

        this.page = pagesObj.length
    }

}


const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
Pagination.init(alphabetArray, 4);

console.log(JSON.stringify(Pagination.pagesObj))

Pagination.getPageItems(); // ["a", "b", "c", "d"]

Pagination.nextPage(); // add the current page by one

Pagination.getPageItems(); // ["e", "f", "g", "h"]

Pagination.nextPage().nextPage(); // the ability to call chainable

Pagination.getPageItems(); 

Pagination.goToPage(1); // current page must be set to 3

Pagination.getPageItems();