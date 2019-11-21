import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, tap, retryWhen, delay, scan } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

bookCache: {[isbn: string]: Book} = { }
booksCache: Book[] = []

  constructor(private http: HttpClient) { }

  getBooks() : Observable<Book[]>{
   
    let cachedBooks = this.booksCache
    if(cachedBooks.length !== 0){
      console.log("got a cache hit for books ")
      return of (cachedBooks)
    }

    return this.http.get<Book[]>("/books").pipe(
    // tap(_ => this.booksCache = Book[] ),
     catchError(err => cachedBooks ? of(cachedBooks) : throwError)
    )
  }

  getBook(isbn: string): Observable<Book>{

    let cachedBook = this.bookCache[isbn]

    if (cachedBook !== undefined){
      console.log("got a cache hit")
      return of (cachedBook)
    }

    return this.http.get<Book>(`/books/${isbn}`).pipe(
      tap(book => this.bookCache[isbn] = book),
      catchError(err => cachedBook ? of(cachedBook) : throwError)
    )
  }

  deleteBook(isbn: string ): Observable<any>{
    return this.http.delete(`/books/${isbn}`).pipe(

     tap(_ => delete this.bookCache[isbn]),
     catchError((err: HttpErrorResponse) => {
        if(err.status == 0){
          return throwError("Please check network connection")

        }else{
          return throwError("there is an issue with server")
        }
     })
   )
  }

  saveBook(book: Book): Observable<any> {
    return this.http.put(`/books/${book.isbn}`, book).pipe(
      tap(_ => this.bookCache[book.isbn] = book)
    )
  }

}

export class Book {

  isbn: string
  title: string
  price: number
}