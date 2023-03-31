# 03 JavaScript: Password Generator

## Description 

This is a site that utilizes Javascript, HTML, and CSS. Although the html and css are minimal, the main part of the code is the javascript, which is the main function of this project. This is a project that allows you to generate a password given what parameters you choose to have. The motivation to build this project was the see how I can improve on my coding skills with javascript in particular. Because we learned in class how to implement HTML and CSS, implementing javascript would be the third pillar in web development. As stated before, HTML is like the skeleton, CSS dresses the skeleton, and javascript allows the thing to function, to move. With this project focusing more on how it moves, you can see through the code that there are many functions that reference the html code. Although it may be fairly simple code, you can see that it affects the buttons and the way the user interacts with the website. 

Because passwords can be easily hacked and stolen, it is crucial to be generating a strong and secure password. Because this website allows you to choose what parameters you want to implement, it solves the issue of ever wanting a stronger password or not.

[Finished Website](https://kevinhng77.github.io/Javascript-Rework/)
[Github Repo](https://github.com/kevinhng77/Javascript-Rework)


## Installation

First, by cloning the repository down to your computer, you can copy down the existing index.html file. Next, open it up with GitBash and type in "code ." , which should open up VSCode. From there, there were a lot of errors and things that needed to be fixed, which will be went over in the next section.


## Usage 

From opening the front page, you are immediately greeted with an image that says "Generate a Password" as well as a red button that says "Generate Password". These are primarily coded through the HTML and CSS. If you look through the HTML, you can see that there was a button div with class='btn', which is what makes this a button that's clickable. Now going to the CSS, if you go to class selector btn, you can see that this is where the background color and the whole asthetic of the button shows.


[Example 1](./assets/example-1.png)

The next thing that stands out about this page is that once you click the generate password button, you will immediately be prompted with different prompts on the website. This is mainly in part due to the javascript, where you create functions for the user to interact with the website. As mentioned, this is what makes the website work, the web API. If you look through the javascript file, you can see that there are many if statements with the confirm method. This is a built in method from javascript that prompts the user with a box that has an "ok" and a "cancel" button. Looking further into the code, if you were to click the OK button, you can see that this changes the input.

[Example 2](./assets/example-2.png)

After filling out all the prompts and inputting the correct number of digits for the password, you'll be generated a password. Which you can see, is linked in the HTML. If you look in the javascript file, you can see that the function at the top of the page was linked to the password text area in the HTML page, which allowed this new password to take the place of the placeholder text.

[Example 3](./assets/example-3.png)


## Credits

Special shoutout to TA Kyle Vance for assisting me with this project. He helped me configure my code when there were errors with my variables and taught me more about javascript.


## License

N/A

## Badges

N/A

## Features

N/A

## Contributing

N/A

## Tests

N/A