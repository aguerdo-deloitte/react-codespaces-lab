import { useState } from "react";
import Book from "./Book";

function BookList() {
  const [books, setBooks] = useState([
    {
      title: "The Lord Of The Rings",
      author: "J R Tolkien",
    },
    {
      title: "The Hobbit",
      author: "J R Tolkien",
    },
  ]);

  return (
    <div className="table-responsive">
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Book</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {books.map(function (item, i) {
            return <Book key={i} author={item.author} title={item.title} />;
          })}
        </tbody>
      </table>
      <button type="button" className="btn btn-primary" 
    onClick={() => {
         addBook({ title: "The Silmarillion", 
  author: "J R R Tolkien" });
 }}>Add Book</button>

    </div>
  );

  function addBook(book) {
    setBooks([...books, book]);
  }


}

export default BookList;
