interface Book {
    title: string;
    author: string;
    year: number;
    available: boolean;
}

class Library {
    private books: Book[] = [];

    addBook(book: Book): void {
        this.books.push(book);
        console.log("Book added: " + book.title);
    }

    findBook(title: string): Book | undefined {
        return this.books.find((book: Book) => book.title === title);
    }

    borrowBook(title: string): void {
        const book: Book | undefined = this.findBook(title);

        if (book === undefined) {
            console.log("Book not found: " + title);
            return;
        }

        if (book.available === false) {
            console.log("Book is already borrowed: " + title);
            return;
        }

        book.available = false;
        console.log("Book borrowed: " + title);
    }

    returnBook(title: string): void {
        const book: Book | undefined = this.findBook(title);

        if (book === undefined) {
            console.log("Book not found: " + title);
            return;
        }

        book.available = true;
        console.log("Book returned: " + title);
    }
}

const library: Library = new Library();

const book1: Book = {
    title: "Clean Code",
    author: "Robert C. Martin",
    year: 2008,
    available: true
};

const book2: Book = {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    year: 1999,
    available: true
};

const book3: Book = {
    title: "Refactoring",
    author: "Martin Fowler",
    year: 1999,
    available: true
};

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

console.log(library.findBook("Clean Code"));
console.log(library.findBook("Harry Potter"));

library.borrowBook("Clean Code");
library.borrowBook("Clean Code");
library.returnBook("Clean Code");
library.borrowBook("Harry Potter");