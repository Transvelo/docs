# Theme Color

**MediaCenter** comes with 6 predefined color schemes. You can also create your own scheme and use it.

## Using a predefined color

1. Navigate to **MC Options** page.
2. Select **Styling** tab
3. Choose **Yes** for **Use a predefined color scheme** option.
4. Choose the color of your choice from the dropdown for **Main Theme Color**. Colors available : **green**, **blue**, **red**, **orange**, **navy** and **dark green**.
5. Click on **Save Changes** button.

![](http://transvelo.github.io/mediacenter/docs/assets/images/theme-option-styling.png)


## Using a custom theme color

Using a custom color is simple but it requires a few extra steps.

### Method 1 (Recommended) : Using LESS

1. Navigate to **assets/less/custom-color.less** file.
2. On line 7, set **@primary-color** to the color of your choice as a HEX value.
3. Compile **assets/less/custom-color.less** file to **assets/css/custom-color.css**
4. You can also use [less2css.org](http://less2css.org/) to compile the LESS file and copy the output to **assets/css/custom-color.css**

### Method 2 : Using CSS and Find and Replace

1. Navigate to **assets/css/green.css** file.
2. Copy the entire file content and paste it in **assets/css/custom-color.css**.
3. Open **assets/css/custom-color.css** file using your favourite code editor.
4. Do a find and replace of green color which is **#59b210** with your choice of color as a HEX value.
5. We have also used darken and lighten version of the primary color. Replace them as well. Use [less2css.org](http://less2css.org) to find out the lighten and darken values for your color.
