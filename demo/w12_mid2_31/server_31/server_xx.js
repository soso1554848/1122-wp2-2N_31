import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { nanoid } from 'nanoid';

import { tasks } from './dataTasks.js';
import { blogs_xx } from './dataBlogs_xx.js';

let taskList = tasks;
let blogList_xx = blogs_xx;

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello from Server ...');
});

/*
********************
 API for blogs
********************
 */

app.get('/api/blogs', (req, res) => {
  res.json({ blogList_xx });
});

app.post('/api/blogs/loadAll', (req, res) => {
  blogList_xx = blogs_xx;
  console.log('blogList_xx', JSON.stringify(blogList_xx));
  res.json({ msg: ' load all blogs' });
});

app.post('/api/blogs', (req, res) => {
  const { id, img, remote_img, category, title, desc } = req.body;
  console.log('title', title);
  const newBlog = { id, img, remote_img, category, title, desc };
  blogList_xx = [...blogList_xx, newBlog];
  res.json({ blog: newBlog });
});

app.patch('/api/blogs/:id', (req, res) => {
  const { id } = req.params;
  const { img, remote_img, category, title, desc } = req.body;
  blogList_xx = blogList_xx.map((item) => {
    if (item.id == id) {
      return { id, img, remote_img, category, title, desc };
    }
    return item;
  });
  res.json({ msg: 'blog updated' });
  console.log('blogList_xx', JSON.stringify(blogList_xx));
});

app.delete('/api/blogs/clearAll', (req, res) => {
  blogList_xx = [];
  console.log('blogList_xx', JSON.stringify(blogList_xx));
  res.json({ msg: 'clear all blogs' });
});

app.delete('/api/blogs/:id', (req, res) => {
  const { id } = req.params;
  blogList_xx = blogList_xx.filter((item) => item.id != id);
  console.log('blogList_xx', blogList_xx);
  res.json({ msg: 'blog remove' });
});

/*
********************
 API for tasks
********************
 */

app.get('/api/tasks', (req, res) => {
  res.json({ taskList });
});

app.post('/api/tasks', (req, res) => {
  const { id, title, descrip, category, img, remote_url } = req.body;
  console.log('title', title);
  const newBlog = { id, title, descrip, category, img, remote_url };
  blogList = [...blogList, newBlog];
  res.json({ task: newBlog });
});

app.patch('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { isDone } = req.body;
  console.log('id isDone', id, isDone);
  taskList = taskList.map((item) => {
    if (item.id === id) {
      return { ...item, isDone };
    }
    return item;
  });
  res.json({ msg: 'task updated' });
});

app.delete('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  taskList = taskList.filter((item) => item.id != id);
  res.json({ msg: 'task removed' });
});

const port = process.env.PORT || 5000;

const startApp = () => {
  try {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {}
};

startApp();
