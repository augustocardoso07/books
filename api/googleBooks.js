import * as deepmerge from 'deepmerge';
import basicBook from '../basicBook';

export const fetchBooks = async (query, page) => {
  try {
    //console.log(query)
    const num = 10;
    startIndex = page * num;
    console.log('Begin of the API call', query, page);
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${startIndex}&maxResults=${num}`);
    console.log('End of the call');
    const result = await response.json();
    const books = result.items.map(book => deepmerge.all([basicBook, book]));
    return books;
  } catch (err) {
    alert('Opss, something was wrong', err)
    console.log(err);
    return err;
  }
}
