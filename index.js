import express from 'express';
import fs from 'fs';


const posts = JSON.parse(fs.readFileSync('./posts.json', 'utf8'));
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index.ejs', { posts });
});

app.get('/create-post', (req, res) => {
    res.render('newpost.ejs');
});

app.get('/post/:id', (req, res) => {
    const post = posts.find(post => post.id === parseInt(req.params.id));
    res.render('viewpost.ejs', { post });
});

app.post('/post/edit-post/:id', (req, res) => {
    const post = posts.find(post => post.id === parseInt(req.params.id));
    if (post) {
        res.render('editpost', { post });
    } else {
        res.status(404).send('Post not found');
    }
});

app.post('/edit-post/:id', (req, res) => {
    const postIndex = posts.findIndex(post => post.id === parseInt(req.params.id));
    posts[postIndex].title = req.body.title;
    posts[postIndex].content = req.body.content;
    fs.writeFile('./posts.json', JSON.stringify(posts, null, 2), (err) => {
        if (err) throw err;
        res.redirect('/');   
    }); 
});

app.post('/post/delete-post/:id', (req, res) => {
    const postIndex = posts.findIndex(post => post.id === parseInt(req.params.id));
    posts.splice(postIndex, 1);
    fs.writeFileSync('./posts.json', JSON.stringify(posts),);

    res.redirect('/');
});

app.post('/new-post', (req, res) => {
    const addedPost =  {
        id: posts.length + 1,
        title: req.body.title,
        content: req.body.content
    }
    posts.push(addedPost);
    fs.writeFileSync('./posts.json', JSON.stringify(posts));
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});