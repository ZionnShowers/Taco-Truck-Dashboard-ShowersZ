//Zionn Showers
//10-23-2026
//Taco Truck Dashboard
/* We had to make a user inferface for a Taco Truck, while following the requirements and optional challenges. I chose to do one of the challenges, being the end day button. This was both easier and harder than I expected it to be, mainly because I mostly kept forgetting certain functions and had to constantly ask for help and occasionally look it up on the internet. But there were times when I felt like I was in the perfect mindset, never wanting to stop and wanting to continue the flow. */
//Peer Reviewer: 
//Review: 


-----INSTRUCTIONS-----

Instructions
Pick a side: you are building this for Isaiah’s truck or for Jose’s, and I want to know which from the moment the page loads.

Requirements
1. Header
The truck’s name
A status line that says Closed when the page loads

2. Open and Close button
Changes the Open/Closed text and adds a class.

3. Today’s location
A labelled text input and a Set button
Set button puts what they typed on the dashboard
Empty box does nothing

4. The menu
Two labelled text inputs, item name and description, plus an Add button
Each Add builds a row containing the name, the description, and a Sold one button
Either box empty, nothing gets added
On a successful add, both boxes clear

5. Marking something sold out
Clicking an item’s name toggles a sold-out class on that row

6. Total sold
One number on the dashboard
Every Sold one button on every row adds one to it

7. How it looks
Built for a phone, 375px, the only width it has to work at
Not bare boxes. Spacing, type sizes, sections that read as separate.
Every input has a <label>

8. Script layout
Five sections, this order, every time. Leave empty ones in.
// ----- data -----
// ----- elements -----
// ----- functions -----
// ----- listeners -----
// ----- run at load -----

Must be peer reviewed.

Turn in
The GitHub Repo link

Challenges
Not required. Do them if you finish, in any order, and list them in your README.

Clear the day. A button that resets the total to zero, the status to Closed, and empties the location.

Remove an item. Each row gets its own Remove button that takes only that row off.

A third status. Add Busy. Only one status class on the page at a time.

Count each item separately. Every row keeps its own count as well as the total.

Sold out means sold out. A sold-out item’s Sold one button stops doing anything until it is available again.

Best seller. A line naming whichever item has sold the most.