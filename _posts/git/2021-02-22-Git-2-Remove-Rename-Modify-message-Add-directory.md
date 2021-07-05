---
layout: post
title: '(Git_2) Remove, Rename, Modify message, Add directory'
date: '2021-02-22T09:40:50.986Z'
categories: git
note: none
---

### Introduction

### Why

### How

#### Remove a file from git

The following code will remove the file from version control of git, but it doesn’t remove the file

$ git rm --cached xxx.html

#### Rename a file

For example, if we rename test.html to test1.html as following

$ mv test.html test1.html

Then check status

![](/Users/chenyongzhe/coding/practice_not_for_github/javascript_practice/medium-to-markdown/medium-export/posts/md_1623056197395/img/1__lOaf90IWCk6c1__cxC2mK__A.png)

after we add the changes,

![](/Users/chenyongzhe/coding/practice_not_for_github/javascript_practice/medium-to-markdown/medium-export/posts/md_1623056197395/img/1__2QLeNwnKpbyBYz0n3PG__Qw.png)

git itself will find they are same file and it is a renaming process

#### Modify the message of commits

there are four method:

1.  delete .git (not recommended)
2.  use rebase
3.  use reset
4.  use — amend (change the last commit message only)

**use — amend**

For example, if the current historical commit messages is as follow:

![](/Users/chenyongzhe/coding/practice_not_for_github/javascript_practice/medium-to-markdown/medium-export/posts/md_1623056197395/img/1__inL5vmok0Njg94hDTirDHw.png)

The last message is inappropriate, then we can use

$ git commit --amend

Then the vim opened

![](/Users/chenyongzhe/coding/practice_not_for_github/javascript_practice/medium-to-markdown/medium-export/posts/md_1623056197395/img/1__GAgdrx__4FWfs3eOKozKdvA.png)

Then use the [vim coding](https://t5204713910.medium.com/git-1-installation-presetting-start-to-git-4a5935312db8) we can change the message to what we want

**add file to last commit**

If there is a file we want to combine into last commit, we can just use — amend. That is,

![](/Users/chenyongzhe/coding/practice_not_for_github/javascript_practice/medium-to-markdown/medium-export/posts/md_1623056197395/img/1__25__eiVQ__E0az2mjGdDn__KQ.png)

As we can see, there is a test2.html file, and use -amend the last commit will be as follow

![](/Users/chenyongzhe/coding/practice_not_for_github/javascript_practice/medium-to-markdown/medium-export/posts/md_1623056197395/img/1__Zx7C8QUch63Sd9AVm__kd0w.png)

#### Add directory into git

Git only reads a directory containing a file. If we create a directory only, git cannot track this directory; for example,

![](/Users/chenyongzhe/coding/practice_not_for_github/javascript_practice/medium-to-markdown/medium-export/posts/md_1623056197395/img/1__udjg5uNTgnt8ACTr5cq8BQ.png)

If we want to let git to recognize this directory, we should create the directory with a file; for example,

![](/Users/chenyongzhe/coding/practice_not_for_github/javascript_practice/medium-to-markdown/medium-export/posts/md_1623056197395/img/1__HxtSQ2nudmYpVPRiQCFCHA.png)

Then it can read the directory

### Reference:

[**什麼是 Git？為什麼要學習它？ - 為你自己學 Git | 高見龍**  
_← 上一章：寫在最前面 - 為你自己學 Git！ 下一章：與其它版本控制系統的差異 → 如果你問大部份正在使用 Git 這個工具的人「什麼是 Git」，他們大多可能會回答你「Git 是一種版本控制系統」，專業一點的可能會回答你說「Git…_gitbook.tw](https://gitbook.tw/chapters/introduction/what-is-git.html "https://gitbook.tw/chapters/introduction/what-is-git.html")[](https://gitbook.tw/chapters/introduction/what-is-git.html)