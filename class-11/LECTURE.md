# Class 11: HTML Audio + Video, CSS Grid, BusMall

## Announcements

* Final Exam
  * The same format as quizzes
    * Multiple.
    * 30ish questions.
    * There are retakes.
* Feedback
  * There is just soooo much work.
    * Struggle to keep up.
  * CSS is a struggle
    * We should spend more time on review / implementation.
    * I will try to go over this material as much.
      * We need to prioritize JS.
  * Remo is a blocker.
  * Ya'll really love review / morning exercises.

## Code Review

* Wireframe Excercise
  * See review folder

## HTML Media + CSS Grid

HTML has native elements that let you display video, and play audio files.

* Make sure your extensions are audio / video extensions.
* Come with browser specific controls.
* Media does NOT play automatically, unless you mute your audio.
  * Browser force you to mute.
* `controls` attribute must be included to let the user control the audio.
 
```html

<video src="assets/video/video.mp4">

<audio src="assets/audio/music.mp3" controls muted>

```

## CSS Grid

A layout method, that works similar to flex, but while flex only lets you work in 1 dimension:

* Take an HTML container, and tell it's children to be a `row` or a `column`.

CSS grid let's you specify 2 dimensions for your layout.

* let's you define how many and how big your rows & columns.

## Click Tracking

1. We need to present images to a User

2. The user needs to click on images to vote on a specific image.

3. We need to track based on image.
   1. How many times is a specific image clicked.

4. We need to display a new image, after a click has been made.

### Problem domain

How Many Images?

* We need something to keep track of all of our images.

What is an Image:
  * Image Id 
  * number of clicks: 0
  * url: some image file to display
  * Is the image rendered.
