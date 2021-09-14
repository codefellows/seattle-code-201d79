# Class 02: Basics of HTML, CSS, and JS

## Announcements

* First learning journal
* The first quiz will open upp tomorrow (09/15), and is due before the end of class Thursday.

## Warm Up

You are given access to a web server directory, which will serve content over the internet. The directory strucutre looks like this, after you run `tree`:

```md
.
| -- assets/
|     |-- profile.png
|     |-- title.png
| -- pages/
|     | -- contact.html
|     | -- about.html
| -- README.md 
+ -- index.html
```

Your job is to re-organize the directory to look like this:

```md
.
| -- assets
|		| -- profile.png
|		| -- title.png
| -- pages
|		| -- contact.html
| 	| -- about.html
| -- README.md
+ -- index.html

```

what bash terminal commands could we run to convert our directory structure?

```bash
mkdir assets #creates assets folder
mv profile.png assets/profile.png
mv title.png assets/title.png
mkdir pages
# cd pages
touch pages/contact.html
touch pages/about.html
# cd ..
mv home.html ./index.html ## renaming home.html to index.html
rm thumbnail.png
touch README.md
```

## Code Review

* 4 Questions
  * prompts
    * background color fo an ordered list.
  * What questions did you ask?
    * what is your least favorite ice cream? - Sam
    * What is you favorite drink? - Jared
    * Where would like to vacation next? - Brannon
    * What's you favorite whether condition - Ibraheem
* 4 Responses
  * storing values in variables.

## Browser App Basics (HTML, CSS, JS)

* HTML attributes
  * id
  * classes
  * both are meant to provide a way to select items in CSS (as well as JS).
  * Attribute are defined on a single elements, and should be difined in the openning element tag.
  * <link> element, used for "linking" to external resources that typically would go in the head.
* The browser gives elements some default styling.
  * reset.css
  * A lot of developers don't want any default styles applied to the webpage.
* Selecting Elements in CSS.
  * When selecting AN element by id attribute, we can use `#` to select that element
  * When selecting MULTIUPLE elements by classname, we can use the `.`.
* Data Types
* conditional logic / flow control
  * if
  * then
  * else


## Review

* What is the difference between an `id` and a `class`?
  * brandon: id is for a single element, class is for a group.
    * Will out HTML break if we have elements that share.
* How do I link an external Stylesheet?
  * <link rel="stylesheet" href="styles.css">
    * href attribute should receive a relative path to a css file.
* How do I link an external javascript file?
  * <script src="app.js"></script>
    * the `src` attribute is more for "embedding" content into our document.
