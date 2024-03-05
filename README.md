# scorekeeper app

This is a simple scorekeeping app to be used in conjunction with [OBS](https://obsproject.com/). It is designed with Super Smash Bros. Melee in mind but could be used for many different tournament formats with head to head matchups.

It allows you to quickly edit and save fields which will each be saved to a text file:

1. Player 1 name
2. Player 1 score
3. Player 2 name
4. Player 2 score
5. Tournament round (e.g. Winners Semi-Finals)
6. Tournament name

How to use:

1. Set your stream layout in OBS to include the fields above. Recommended: Set a transform such as "Scale to width of bounds" for the names so they always fit
2. Install [Node.js](https://nodejs.org/en)
3. Download this repository
4. On a command terminal such as bash, navigate to the directory
5. Create a folder called "text" in the root directory where the repository is saved (`mkdir text`)
6. Run `npm install`
7. Run `node app.js`
8. Open the link that is printed in the terminal
9. Click "save"
10. Set the fields in OBS to "Read from file." Choose the files in the "text" directory you created in step 5.