The project is a React-based library management system utilizing Firebase services for real-time database management and user authentication. It includes components like "Home" for displaying books, "Profile" enabling users to manage owned books, "BookData" for detailed book views, and "AddBook" for adding new books with title, author, description, and cover image. Through a clean UI and React Router for navigation, it provides an intuitive interface for efficiently managing a digital library, leveraging Firebase for data handling and authentication.

# Home Component (Home.js)
The Home component retrieves data from the Firestore database and displays a list of books. It uses useState and useEffect hooks to fetch book data from Firebase and render the book cards with information such as title, author, description, and an option to read more about each book. Clicking the "Read more" button navigates to detailed book information.

# Profile Component (Profile.js)
The Profile component manages user profiles and their associated books. Upon authentication, it retrieves the user's profile information and the books they own. It displays user details, owned books, and provides an option to delete books. Additionally, it shows borrowed books and an option to lend or return them.

# LendBook Component (LendBook.js)
The LendBook component handles the borrowing and returning of books. It fetches books from the Firestore database that are currently borrowed by the authenticated user. It displays the borrowed books and provides a "Return" button for each book, allowing users to return the borrowed items.

# BookData Component (BookData.js)
The BookData component displays detailed information about a specific book. It retrieves data from Firebase based on the book ID in the URL. It shows book details such as title, author, description, availability, and owner information. Users can lend or return books if they are not the owners and the book is available.

# AddImage Component (AddImage.js)
The AddImage component handles uploading cover images for books. It utilizes Firebase Storage to upload images, providing an input field to select an image file and an upload button. Upon successful upload, it triggers a function to retrieve the download URL of the uploaded image.

# State Initialization:
useState is used to manage the component's local state for title, author, description, and imageUrl. These states hold the information related to the book being added.

# Handling Image URL Change:
The handleImageUrlChange function is passed down to the AddImage component as a prop (onImageUrlChange). It receives the URL of the uploaded image from the AddImage component and sets the imageUrl state accordingly.

# Adding Book to Firestore Database:
The bookDatabase function is triggered upon form submission. It gathers the book details (title, author, description, imageUrl) and uses Firebase Firestore's addDoc method to create a new document in the 'book' collection with these details.
It then updates the user's document in the 'users' collection, associating the newly added book with the user by updating the 'books' array field using arrayUnion.
After successfully adding the book to the database and updating the user's profile, it resets the form fields, navigates the user to the profile page, and logs relevant information for debugging purposes.

# Rendered JSX:
The component's UI consists of a form for entering book details (title, author, description), an AddImage component for uploading the book's cover image, and a submit button for adding the book.
The form fields (title, author, description) are controlled inputs that update the respective state values when changed.
Upon submission, the bookDatabase function is called to handle the addition of the book to the Firestore database.
