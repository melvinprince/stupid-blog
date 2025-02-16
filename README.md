---

# Stupid Blog

A minimal, straightforward blog setup for those who prefer simplicity over complexity.

## About

This project aims to provide an extremely simple blogging platform, where the focus is on content rather than elaborate features. Essentially, it's for those who are "sick of complex blogging solutions" and just want to manage posts via markdown files in a Git repository.

## Features

- **Markdown Support**: Write posts in Markdown for simplicity.
- **Git Integration**: Manage your blog content with Git versioning.
- **No Database**: Content is stored as static files, no need for a database.

## Getting Started

### Prerequisites

- Git installed on your machine
- A GitHub account (or any Git hosting service)

### Installation

1. **Clone the Repository**:
   ```sh
   git clone git@github.com/melvinprince/stupid-blog.git
   cd stupid-blog
   ```

2. **Setup your Environment**:
   - If you want to use GitHub Pages for hosting:
     - Edit, push changes, and they will be live. GitHub Pages will serve your files directly from this repository.

   - Alternatively, use any static site host or serve it locally with tools like `http-server`:
     ```sh
     npm install -g http-server
     http-server -o
     ```

### Usage

- **Create Posts**: Simply add markdown files to a directory named `posts` or similar:
  - Use a naming convention like `YYYY-MM-DD-title.md` for easy sorting.
  
- **Edit Posts**: Edit these markdown files directly in your text editor.

- **Commit and Push**:
  ```sh
  git add .
  git commit -m "Added new post"
  git push origin main
  ```

- **Customize**:
  - Modify the `index.html` or use a simple template system if provided for headers, footers, etc.

### Contributing

Contributions are welcome! If you have ideas to make this even simpler or have found a better way to do something, please fork the repository and submit a pull request.

### License

This project is open-source under the [MIT License](LICENSE).

---
