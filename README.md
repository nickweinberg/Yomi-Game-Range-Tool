
### Yomi Game Range Tool
##### (With adjustable sliders) *WOAH*


[What is Yomi?](http://www.fantasystrike.com/guide/index.php/Yomi)

Occasionally you'll believe that optimal play requires a certain range of plays (maybe 50% attack, 25% throw, 25% dodge)
and yet you don't trust your faulty meat-brain to calculate this choice correctly. You're in luck!

Enter javascript's (pseudo)random number generator! An emotionless number picker forged by cold heartless steel.

Slide sliders until you're satisfied with the range. Then follow it's recommendation.


To start a very basic localhost server:
`python run.py`


#### TODO
* Make it (a lot) look nicer.
* Add ability to 'save ranges' for common scenarious (ex. knockdown mixups).
* Make slider have 5% steps. (Should be easy but more involved since 'steps' attribute doesn't work in jsx).
* Work on sliders to max out if there's no more available weight to assign.
* gulp to transform JSX (just using JSXTransformer at the moment)