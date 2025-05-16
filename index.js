import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

var today = new Date();
var currentDay = today.getDate();
var currentMonth = today.getMonth();
var currentYear = today.getFullYear();
var today = currentDay + "/" + currentMonth + "/" + currentYear;

var blogPosts = [
    {
        id: 1,
        title: "First Post",
        author: "Ash Moore",
        createdAt: today,
        content: "This is the first blog post for the example app"
    },
    {
        id: 2,
        title: "Second Post",
        author: "Ash Moore",
        createdAt: today,
        content: "This is the second blog post for the example app"
    }
];

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req,res) => {
    let deleted = req.query.deleted;
    res.render("index.ejs", { posts: blogPosts, deleted: deleted });
});

app.get("/add", (req,res) => {
    res.render("add.ejs");
});

app.post("/edit", (req,res) => {
    let postId = parseInt(req.body.postId);
    let post = getPost(postId);
    let updated = req.query.updated;
    res.render("edit.ejs", { post: post, updated: updated });
});

app.post('/delete', (req,res) => {
    let postId = parseInt(req.body.postId);
    blogPosts = blogPosts.filter((post) => post.id !== postId);
    res.redirect("/?deleted=true");
});

app.post('/save', (req,res) => {
    let postId = parseInt(req.body.postId);
    let postToSave = blogPosts.find((post) => post.id === postId);

    if (postToSave) {
        postToSave.title = req.body.postTitle;
        postToSave.author = req.body.postAuthor;
        postToSave.content = req.body.postContent;
    } else {
        blogPosts.push( {
            id: blogPosts.length + 1,
            title: req.body.postTitle,
            author: req.body.postAuthor,
            content: req.body.postContent,
            createdAt: today
        });
    }
    
    res.redirect("/?updated=true");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

function getPost(id) {
    let blogPost = blogPosts.find((post) => post.id === id);
    
    return blogPost;
}