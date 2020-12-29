# Skynet Chat

This is my first ever web application, it's a simple chat application where the user interacts with the computer, which responds with random responses. Script written in JavaScript, DOM queried using jQuery and HMTL and CSS used for markup and styling.

![skynetchathome](https://user-images.githubusercontent.com/71923215/95297993-a2c8cb80-087b-11eb-984e-e16b91158f84.jpg)

## How to use

```shell
index.html
```

## Features

1) Username: User enters their name when the page opens, which serves as their display name throughout the messaging.

2) Welcome: Skynet responds with a welcome message, using the user's name.

3) Colour bubbles: Like most modern chat applications, messages appear in coloured bubbles, user's colour is blue and the computer's is
   silver.
   
![skynetchatmsgs](https://user-images.githubusercontent.com/71923215/95298204-ff2beb00-087b-11eb-9522-ec9ee589343f.jpg)

4) Timestamp: Every message bubble has a small display of the time it was posted in the bottom right corner.

5) Most recent message: Like any chat application, the scrollbar follows the most recent message, as it is posted.

6) Random responses: In our script file have an array of 20 preloaded responses, each time the user sends a message, Skynet responds with 
   one of these messages at random.

7) Time delays: To provide some semblance of real life conversational flow, Skynet doesn't respond immediately, there is a delay which
   ranges from 1.5 to 2.5 seconds. The delay is short enough to provide a nice flow, but not long enough to disengage the user, whom of course
   knows they are not talking to a human.

8) Responsive: Use of CSS Flexbox makes the application responsive in the browser.
