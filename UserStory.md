# bus-mall
# User Stories
go to "http://172.16.11.9:8080/" to practice on the concept.

**USER**
**DEVELOPER**
As a user I want a site that instruct a user to make a choice out of three images, which is saved each time to collect data about the personality of the person using the site.
As a developer I want to build the site using HTML, CSS, and Javascript to keep the structure simple and focused on the images.
As a user I want the results of the quiz displayed clearly at the end, and for the quiz to be infinitely repeatable.
As a user I want the photos to refresh every time I click them so that I can pick a new one each time.
As a user I want to be able to click on any one of the three photos displayed.
As a user I want my choices to be tracked, totaled and returned to me after a certain number of clicks.
As a user I would like the opportunity to have my choices cleared so that I can go through the images and choose again.
As a developer I want to create a loop to allow for 25 clicks.
As a developer I want to assign a value to each of the photos and then create a function that generates 3 random numbers in that range and uses those to return the photos for each 'round'.
As a developer I want to create an error exception if the user does not click one of the photos.
As a developer I want to track the user clicks and tally them. Then render the totals to the DOM.
After the last click a 'View Results Now' button should be rendered in the DOM.
After button is clicked, unordered list of results and a list item for the total number of clicks are shown as well as a reset button that will clear the totals and start the count again.
As a developer I want to style the site simply so that the images are prominently displayed.
As a developer I want to keep track of how many times each item was shown. Also, how many times each item was clicked when it was shown. Calculate the percentage based on those two values.

- The thing you want to build today will select three random photos from the image directory and display them side-by-side-by-side in the browser window.
- In addition, you'll want to be able to receive clicks on those displayed images, and track those clicks for each image.
- Upon receiving a click, three new random images need to be automatically displayed.
- To do this, you'll want a constructor function that creates an object associated with each image, and has properties for the name of the image, its filepath, the number of times it has been shown, and the number of times it has been clicked.
- After 15 total clicks, disable any further vote functionality, and display a button for the user to view the results.
- Upon clicking the 'view results' button, display a list showing each image name and it's corresponding tally of clicks.
- Don't forget to publish the total amount of clicks (this will be used for a later assignment).
