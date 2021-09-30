# Class 14: Psych Safety / CSS Animations

## Psych Safety with Brook!

* Thanks for participating.

## Announcements

Project week begins tomorrow morning, there will be code review, but the rest of the day:

* Assigning project teams
* Go through a bunch of documentation.
* Working with your group to come up with an idea.
  * 4 Prep Assignments.
  * Same team members all week.
* The project will be web applications, only front end stuff.

Final Exam Opens tomorrow as well, due on Sunday, there are retakes.

Resubmissions are due by the end of the day Sunday(oct 3rd, 11:59PM).

## Code Review

* Built out all the form event programming
  * Rendering 3 unique images, tallying up clicks.
* Installed and used Chartjs to render some charts regarding clicks / timesShown
* Added persistence with localStorage
  * Reading
  * Writing

## CSS Animations

We can tell our elements to move from "state" to "state"

* How do we need this transition to look?
* keyframes
* duration of animation?
* What time intervals should we use.

3 ways to animate any element:
 *  provide a pseudo class that applies another "state" for our CSS.
    *  `element:hover` , `element:active`
 *  Provide a specified animation by name!
 *  A combination of the two of these.

```css
{
  background-color: red;
} /* we can transition from this state */

{
  background-color: blue;
} /* to this state

```

## Instantiating our JS Constructor Objects

Loading new HTML pages requires us to recreate all our objects from localStorage.
