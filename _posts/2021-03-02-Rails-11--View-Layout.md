---
title: (Rails_11) View-Layout
description: CSRF (Cross-site request forgery
date: '2021-03-02T04:06:21.786Z'
categories: []
keywords: []
slug: /@t5204713910/rails-11-view-layout-a9b26ace5ab6
---

### CSRF (Cross-site request forgery)

In app/views/layouts/application.html.erb,

<%= csrf\_meta\_tags %>

protects website from CSRF attack: If I know someone has the authority, I can send some scam website to him. After he click the website, the website will send some coding such as DELETE to the routes.

### How rails find layout for specific method?

In rails, If the controller name is xxxController, then it will try to find xxx.html.erb in app/views/layouts first and then go to application.html.erb.

#### Specific html in Controller

If I want it to render specific html, xxx, in Controller, I can do the following code

class CandidatesController < ApplicationController  
  layout "xxx"  
  ...  
end

#### Specific html in Action

If I want it to render specific html, xxx, in Action, I can do the following code

class CandidatesController < ApplicationController  
    
  def index  
    [@candidates](http://twitter.com/candidates "Twitter profile for @candidates") = Candidate.all  
    render layout: "xxx"  
  end

  ...

end

### If I want multiple yield?

To have multiple yield in one html, you need to have tag for rails identifying which yield to fill in. For example, when I call main page, by default, rails will go to layout to find application.html.erb. Then it detects yield, so it go to the views/xxx/yyy.html.erb to find what to be filled into yield if we call a method in webpage xxx/yyy. To help rails to identify which yield to choose, in yyy.html.erb

...  
<title><%= yield :test %></title>  
...  
<%= yield %>

and in application.html.erb, there are two method: provide and content\_for

#### provide

<% provide :test, "Hello" %>

...

It will fill Hello into yield :test, and fill the rest of code into yield

#### content\_for

<% content\_for :test do %>  
Hello  
<% end %>

...

It will fill Hello to yield :test and fill the rest of code into yield

### Partial Render

In rails,

<% render "form" %>

means it will find \_form.html.erb file in the same directory and put the content into the place of render. Partial render fits the reusage of a html.

For example, if the file,`_form.html.erb:`

<%= simple\_form\_for(candidate) do |f| %>  
  <%= f.input :name, label: "name" %>  
  <%= f.input :age, label: "age" %>  
  <%= f.input :party, label: "party" %>  
  <%= f.input :politics, label: "presentation" %>  
  <%= f.submit %>  
<% end %>

Then, in `edit.html.erb:`

<h1>Edit Candidate</h1>  
<%= render "form", candidate: [@candidate](http://twitter.com/candidate "Twitter profile for @candidate") %>  
<br />  
<%= link\_to 'back to candidates list', candidates\_path %>

it will put the codes of`_form.html.erb` on the place of `render` in edit.html.erb and input the value of `@candidate` to `candidate` .

#### Why `candidate: @candidate` ?

Because `_form.html.erb` as reusable file, it should not take any responsible to find the variable @candidate rather being fed value to candidate with @candidate.

### View Helper

Take a look at following

<tr>  
  <td>  
   <% if gender == 1 %>  
     male  
   <% elsif gender == 0 %>  
     female  
   <% else %>  
     anything  
   <% end %>    
  </td>  
</tr>

There is if else logic in it. However, because view should just render template, the logic should not in view, so in rails, there is helper to solve this problem.

In helper, we can define a function

def user\_gender (gender)

  if gender == 1  
    return "male"  
  elsif gender == 0  
    return "female"  
  else  
    return "anything"

  end

end

Then the logic in html can be written as

<tr>  
  <td>  
   <%= user\_gender(gender) %>  
  </td>  
</tr>

### Reference:

[**為你自己學 Ruby on Rails | 高見龍**  
_如其標題，學習不需要為公司、長官或同事，不需要為別人，只為你自己。 立即購買 以下所有內容是我在 五倍紅寶石 Ruby on Rails 培訓課程所用到的補充教材，實體書已在各書店通路上市。本書以 Ruby 2.4.1 以及 Rails…_railsbook.tw](https://railsbook.tw/ "https://railsbook.tw/")[](https://railsbook.tw/)