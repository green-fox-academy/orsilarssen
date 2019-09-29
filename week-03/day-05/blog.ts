/*Blog
Reuse your BlogPost class
Create a Blog class which can
store a list of BlogPosts
add BlogPosts to the list
delete(int) one item at given index
update(int, BlogPost) one item at the given index and update it with another BlogPost*/

'use strict'


//import { lstat } from "fs";

class BlogPost {
    public authorName: string;
    public title: string;
    public text: string
    public publicationDate: string;

    constructor(title: string, authorName: string, publicationDate: string, text: string) {
        this.authorName = authorName;
        this.title = title;
        this.text = text;
        this.publicationDate = publicationDate;
    }
}

class Blog {
    lisOfBlogPost: BlogPost[];

    constructor(listOfBlogPost: BlogPost[] = []) {
        this.lisOfBlogPost = listOfBlogPost;
    }

    add(title: string, authorName: string, publicationDate: string, text: string): void {
        this.lisOfBlogPost.push(new BlogPost(title, authorName, publicationDate, text))
    }

    delete(i: number) {
        this.lisOfBlogPost.splice(i, 1)
        console.log(`Deleted BlogPost at index ${i}`);
    }
    update(i: number, title?: string, authorName?: string, publicationDate?: string, text?: string) {
        let cur_blogpost = this.lisOfBlogPost[i];
        console.log(cur_blogpost.text)
        if (title != undefined) {
            cur_blogpost.title = title;
        }
        if (authorName != undefined) {
            cur_blogpost.authorName = authorName;
        }
        if (publicationDate != undefined) {
            cur_blogpost.publicationDate = publicationDate;
        }
        if (text != undefined) {
            cur_blogpost.text = text;
        }
        console.log(cur_blogpost.text)
    }
}

//let blogPost1 = new BlogPost('Lorem Ipsum','John Doe','2000.05.04.', 'Lorem ipsum dolor sit amet.')
//console.log(blogPost1)  

let MyBlog = new Blog;

MyBlog.add('Lorem Ipsum', 'John Doe', '2000.05.04.', 'Lorem ipsum dolor sit amet.');
//MyBlog.delete(0);
MyBlog.update(0,undefined,undefined,undefined,'newtext');
