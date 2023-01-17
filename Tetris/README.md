Mimstris
An arcade puzzle game created in JS using React / Redux.

🎥 Featured in a lighting talk at the 2017 dotJS Conference in Paris.

Note: This was originally coded in 2016 and there have been a lot of new developments in JavaScript, React, and Redux since then. I gave the project a very basic update in 2022 (since it wasn't compiling for me anymore) but the code remains mostly unchanged.

This game is open-source, free, and just for funsies!

👉 Play Now! 🎮 📺
Screen Shot

Motivation
After watching Meth Meth Method's video I was inspired to create a similar game for the following reasons:

To try my hand at making a game using functional programming methodologies.
To try out some JS tools that I hadn't used before
I thought it would be fun to make up crazy custom shapes and/or game modes.
Some of the tools I used:

redux for state management
reselect for memoized selectors
react for component rendering
Ducks for module organization
AVA for unit tests and nyc for code coverage
lodash for numerous utility functions
random-seed to create a deterministic game mode (where every game is the same order of pieces)
pressed for detecting key presses in update loop (I created this library for this project)
babel, webpack, standard (code style)
ES6
Controls
Key	Action
Left, A	Left
Right, D	Right
Down, S	Down
Shift, Up	Rotate Right
Z, /	Rotate Left
Enter	Pause / Restart Game
M	Mute / Unmute music
