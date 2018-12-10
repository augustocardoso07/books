const basicBook = {
	volumeInfo: {
		title: 'Teste',
		pageCount: 0,
		authors: [],
		imageLinks: {
			thumbnail: 'http://books.google.com/books/content?id=AAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
		}
	},
	saleInfo: {
		saleability: 'FOR_SALE',
		listPrice: {
			amount: 100,
		}
	}
}

const book1 = {
	"kind": "books#volume",
	"id": "Ff72AAAAQBAJ",
	"etag": "eaDbRDku/rI",
	"selfLink": "https://www.googleapis.com/books/v1/volumes/Ff72AAAAQBAJ",
	"volumeInfo": {
	 "title": "Flowers",
	 "authors": [
	  "Victoria Charles"
	 ],
	 "publisher": "Parkstone International",
	 "publishedDate": "2014-01-07",
	 "description": "Flowers are the centerpiece in the majority of pictorial still-lifes. By painting their colours and forms, artists from Brueghel to O’Keeffe have created symbols for both life and mortality. Van Gogh’s sunflowers, Monet’s water lilies and Matisse’s bouquets are, of course, unforgotten. Most of the works contained in Flowers are true masterpieces, which have often marked whole epochs and styles.",
	 "industryIdentifiers": [
	  {
	   "type": "ISBN_13",
	   "identifier": "9781781609361"
	  },
	  {
	   "type": "ISBN_10",
	   "identifier": "1781609365"
	  }
	 ],
	 "readingModes": {
	  "text": true,
	  "image": true
	 },
	 "pageCount": 317,
	 "printType": "BOOK",
	 "categories": [
	  "Art"
	 ],
	 "maturityRating": "NOT_MATURE",
	 "allowAnonLogging": false,
	 "contentVersion": "0.2.2.0.preview.3",
	 "panelizationSummary": {
	  "containsEpubBubbles": false,
	  "containsImageBubbles": false
	 },
	 "imageLinks": {
	  "smallThumbnail": "http://books.google.com/books/content?id=Ff72AAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
	  "thumbnail": "http://books.google.com/books/content?id=Ff72AAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
	 },
	 "language": "en",
	 "previewLink": "http://books.google.com.br/books?id=Ff72AAAAQBAJ&printsec=frontcover&dq=flowers&hl=&cd=1&source=gbs_api",
	 "infoLink": "https://play.google.com/store/books/details?id=Ff72AAAAQBAJ&source=gbs_api",
	 "canonicalVolumeLink": "https://market.android.com/details?id=book-Ff72AAAAQBAJ"
	},
	"saleInfo": {
	 "country": "BR",
	 "saleability": "FOR_SALE",
	 "isEbook": true,
	 "listPrice": {
	  "amount": 11.6,
	  "currencyCode": "BRL"
	 },
	 "retailPrice": {
	  "amount": 11.6,
	  "currencyCode": "BRL"
	 },
	 "buyLink": "https://play.google.com/store/books/details?id=Ff72AAAAQBAJ&rdid=book-Ff72AAAAQBAJ&rdot=1&source=gbs_api",
	 "offers": [
	  {
	   "finskyOfferType": 1,
	   "listPrice": {
		"amountInMicros": 1.16E7,
		"currencyCode": "BRL"
	   },
	   "retailPrice": {
		"amountInMicros": 1.16E7,
		"currencyCode": "BRL"
	   },
	   "giftable": true
	  }
	 ]
	},
	"accessInfo": {
	 "country": "BR",
	 "viewability": "PARTIAL",
	 "embeddable": true,
	 "publicDomain": false,
	 "textToSpeechPermission": "ALLOWED",
	 "epub": {
	  "isAvailable": true,
	  "acsTokenLink": "http://books.google.com.br/books/download/Flowers-sample-epub.acsm?id=Ff72AAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
	 },
	 "pdf": {
	  "isAvailable": true,
	  "acsTokenLink": "http://books.google.com.br/books/download/Flowers-sample-pdf.acsm?id=Ff72AAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
	 },
	 "webReaderLink": "http://play.google.com/books/reader?id=Ff72AAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
	 "accessViewStatus": "SAMPLE",
	 "quoteSharingAllowed": false
	},
	"searchInfo": {
	 "textSnippet": "Van Gogh’s sunflowers, Monet’s water lilies and Matisse’s bouquets are, of course, unforgotten. Most of the works contained in Flowers are true masterpieces, which have often marked whole epochs and styles."
	}
   }

export {book1};

export default basicBook;