# blog
Blog app created with Express JS &amp; EJS
Blog project 

########
Features
########
- users should be able to create new posts
- homepage should list all blog posts 
- users should be able to edit and delete posts
- the app should be well styled and responsive, ensuring a good UX on desktop & mobile devices



######
Routes
######
/ = main route
/add = add new post (POST)
/edit = edit a post (PUT)
/delete = delete a post (DELETE)


#####
Pages
#####
index.ejs
add.ejs
edit.ejs



########
Partials
########
header.ejs
footer.ejs



############
HOW IT WORKS
############
- blog posts will be stored as an array of JS objects containing:
    - title 
    - id
    - author
    - created date
    - content

- each post item on the page will set the id in a data-id attribute

- clicking a post will send a request to /view/id

- the view page will display the title, author, date created and content

- header and footer will be included as a partial for every page

- each post item will contain a Delete button, which when pressed will redirect to /delete/id

- each post item will also have a Edit button, which when pressed will redirect to /edit/id

- the /add page will show a form with the following fields:
    - title 
    - author
    - content
    
- when the save button is clicked the /save route is called

- the /save route will push the req.body form data as a new object into the posts array and will redirect to main page

- the /edit route will update the object in the posts array with the data passed into req.body

- the /delete route will remove the post from the posts array by using the id passed in from the req.body