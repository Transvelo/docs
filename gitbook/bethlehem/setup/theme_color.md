# Theme Color

**Bethlehem** comes with 6 predefined color schemes. You can also create your own scheme and use it.

## Using a predefined color

1. Navigate to **Bethlehem** page.
2. Select **Styling** tab
3. Choose **Yes** for **Use a predefined color scheme** option.
4. Choose the color of your choice from the dropdown for **Main Theme Color**. Colors available : **green**, **blue**, **red**, **orange**, **violet** and **yellow**.
5. Click on **Save Changes** button.

![](http://transvelo.github.io/docs/bethlehem/images/theme-options-styling.png)


## Using a custom theme color

Using a custom color is simple but it requires a few extra steps.

### Method 1 (Recommended) : Using SASS

1. Navigate to **assets/sass/color/custom-color.scss** file.
2. On line 5, set **$primary-color** to the color of your choice as a HEX value.
3. Compile **assets/sass/color/custom-color.scss** file to **assets/css/custom-color.css**
4. You can also use [sassmeister.com](http://sassmeister.com) to compile the LESS file and copy the output to **assets/css/custom-color.css**

### Method 2 : Using CSS and Find and Replace

1. Navigate to **assets/css/custom-color.css** file.
2. Do a find and replace of yellow color which is **#ffb400** with your choice of color as a HEX value.
3. We have also used darken and lighten version of the primary color. Replace them as well. Use [sassmeister.com](http://sassmeister.com) to find out the lighten and darken values for your color.
