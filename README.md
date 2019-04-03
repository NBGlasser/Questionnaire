# Questionnaire

## What I set out to do:
I was trying to use node and express to make a parody of a buzzfeed or facebook personality quiz.

## Tools used:
* Node/Express
* HTML
* CSS
* Client-side JavaScript

## What I did:
To start off, I made the HTML for both pages, then I started by writing the client side JavaScript on the main, Questionnaire page. The first thing I did was make a timer to get rid of the fake ad(I know the button doesn't work, it's not supposed to), then I wrote logic for dynamically generating URLs to the images I was using. Lastly, on the first page, I set a click listener to trim the data a user input to the form and post it to the server.
Next I decided to write the logic for the server, and after requiring my dependencies, writing most of the basic get and post requests was fairly straightforward. However, I struggled a lot with the correct notation for sending static files.
Lastly I made the client-side JavaScript for the results page. To start off with that, I did a get request to the /api/submission path, and if it was successful it would loop through the five cereals I manually input. I then converted my objects into arrays using object.values and I used another for loop to compare the values within each cereal array to the values input in the last submission to the JSON. The JavaScript would then print the name and picture of the cereal with the lowest difference score to the HTML.

## Issues I had
The only real problems I had in doing this were related to using my images on a the server generated site. I was going in blind about serving static files with express and even after getting a hint it took me a couple hours to work out. On top of that, I had no idea that Heroku was case sensitive towards filenames while local hosting is not, so I could only render one image on Heroku for a little while and I had no idea why.
