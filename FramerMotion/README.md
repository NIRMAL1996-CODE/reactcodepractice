1. ANIMATE:
You can’t use the animate prop twice in the same motion.div element.
always remember in keyframes x values should be equals to y values if providing both. 

2. SCALE:
If you set animate={{ scale: 3 }}, the element will really become 3 times bigger than its original size. n here in current example its zoom in n out accord to values using keyframes

3. ROTATE:  
When you use the array [90, 180, 90] for rotate, it will:
Start at 90°.
Rotate to 180°, which means it moves 90° more from 90°.
Then, it will rotate back to 90° (moving -90° from 180°).
So, each step is relative to the previous one.

4. BORDER_RADIUS:
You can animate border-radius in Framer Motion just like other properties.
For example, starting with a 0% border-radius (which makes it a square), you can change it to 50% (creating a circle), and then return to 0% (square again). 
This works with both absolute values (like 0%, 50%) or relative values (like "+=10%"). 
The animation smoothly transitions between these values, just like rotate or scale.
