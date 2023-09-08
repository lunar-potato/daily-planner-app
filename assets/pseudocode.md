# Daily Planner App Pseudocode
1. Initializing planner
    - Creating array for timeblocks (Setting it hourly)
    - Create element for timeblocks and appending to container

2. Displaying current time and day
    - Get current date and time format using Day.js
    - Updating currentDayElement to display the formatted date

3. Color-coding the timeblocks
    - Get current time and format accordingly
    - Looping through timeblocks
        - Time of the timeblock
        - If timeblock time is before current time, it is past class
        - If timeblock time is current time, it is present class
        - If timeblock tiem is after the current time, it is future class

4. Setting event handlers
    - Adding click event listeners to buttons (save).
        - Getting description from textbox area
        - Saving description to local storage
    - When refreshed,
        - Check if there is a saved event in local storage
        - If yes, load and display description in the textbox area.

5. Loading the app
    - App should run color-coded timeblock