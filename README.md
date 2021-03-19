# Notebook App

## Vanilla JS Project. No libraries, no frameworks, just JavaScript

As the title suggests, the purpose of this project was to build a single page front-end web application using only javascript. The app is written in pure javascript, without the use of additional libraries and frameworks, including testing frameworks, which also needed to be written in javascript.

**Check out the deployed application here:**

[Notes for Codes](http://notes-for-codes.surge.sh/)
---------------------------------------------------

## Design considerations

The program was designed to meet the requirements of these [user stories](#user-stories)

the first thing to build was a testing framework, in order to be able to follow a TDD process and test drive the rest of the application.


## User Stories
```
As a programmer
I can see a list of my notes, where each note is abbreviated to the first 20 characters
So I can find the one I want

As a programmer
I can create a new note
So I can record something I need to remember

As a programmer
I can see the full text of an individual note on its own page
So I can see all the information in the note

As a programmer
I can use shortcodes like `:fire:` that get converted into emojis like 🔥
So I can record notes with fun little pictures

As a programmer
I can refresh the page and still see my notes
So I can remember what I took down
```

Objects   | Messages
----------|-----------
Note      | content (property)
Note      | preview (property)
Notebook  | notes (property)
Notebook  | add (function)
Notebook  | previews (function)
