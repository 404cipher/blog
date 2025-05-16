# Blog app created with Express JS &amp; EJS
<br>

# Features
- [x] users should be able to create new posts
- [x] homepage should list all blog posts 
- [x] users should be able to edit posts
- [x] users should be able to delete posts
- [x] the app should be well styled and responsive, ensuring a good UX on desktop & mobile devices

<br>

## Routes
- [x] / = main route
- [x] /add = add new post (POST)
- [x] /edit = edit a post (PUT)
- [x] /delete = delete a post (DELETE)

<br> 

## Add Pages
- [x] index.ejs
- [x] add.ejs
- [x] edit.ejs

<br>

## Partials
- [x] header.ejs
- [x] footer.ejs

<br>

## Tasks
- [x] store blog posts in array of JS objects containing:
    - title 
    - id
    - author
    - created date
    - content

- [x] view page display the post title, author, date created and content

- [x] include header and footer on every page
  
- [x] call `/delete/id` to remove a post when delete button is clicked on the post

- [x] call `/edit/id` to update a post when the edit button is clicked on the post item

- [x] show a form on the `/add` with the following fields:
    - title 
    - author
    - content
    
- [x] call `/save` when a new post is being created and the save button is clicked

- [x] on the `/save` route push the `req.body` form data as a new object into the posts array and redirect to `/` 

- [x] on the `/edit` route update the object in the posts array with the data passed into `req.body`

- [x] on the `/delete` route remove the post from the posts array by using the id passed in from the `req.body`