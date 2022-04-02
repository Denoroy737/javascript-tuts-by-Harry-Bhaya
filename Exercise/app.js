console.log("hello world");
// create a class library and implement the following:
// constructor must take the book list as an argument
// getBookList()
// issueBook(bookname, user)
// returnBook(bookname)
class library {
  constructor(
    GivenBookname,
    GivenBookclass,
    GivenBookprice,
    GivenBookLangauge
  ) {
    this.Name = GivenBookname;
    this.Class = GivenBookclass;
    this.Price = GivenBookprice;
    this.Langauge = GivenBookLangauge;
  }
  getBookList() {
    return library;
  }
  getBookList()
}

class user extends library {
  constructor(
    GivenBookname,
    GivenBookclass,
    GivenBookprice,
    GivenBookLangauge
  ) {
    super(GivenBookname, GivenBookclass, GivenBookprice, GivenBookLangauge);
  }
  issueBook() {
    if (this.Name == "History") {
      return "History";
    } else {
      return "Enter given book name";
    }
  }
}

let GivenBookname = [
  "History",
  "Maths",
  "Marathi",
  "Hindi",
  "Geography",
  "English",
];
kena = new user("History", "8th", 47, "English");
console.log(kena);
// (History, Maths, Marathi, Hindi, Geography, English)
