# Configuring Footer Style 5

**MyBag**'s footer has 2 rows.

* The first row is called **Footer Top Widgets**.
* The second row is called **Bottom Bar**.

Here is the Footer's anatomy:

![](http://transvelo.github.io/docs/mybag/images/footer-style-5.png)

## Footer Top Widgets

The **Footer Top Widgets** is the top most row in the footer. It is a widgetized area and can be populated from **Appearance > Widgets > Footer Top Widgets**.

* It has an element which is Text Block element.
* **Text Block** : The content of the text block:

```
<div class="textwidget">
    <div class="row">
        <div class="col-md-4">
            <div class="newsletter-info">
                <p class="title">Stay Connected to MyBag</p>
            </div>
        </div>
        <div class="col-md-8">
            [mc4wp_form id="1591"]
        </div>
    </div>
</div>
```
Here is the screenshot for Footer Top Widget setting

![](http://transvelo.github.io/docs/mybag/images/footer-5-widget-setting.png)

## Bottom Bar

The **Bottom Bar** has three sections.

### Footer Widgets:

The **Footer Widgets** is a widgetized area and can be populated from **Appearance > Widgets > Footer Widgets**.

* It has an element which is Text Block element.
* **Text Block** : The content of the text block:

```
<div class="textwidget">
    <ul class="footer-links clearfix list-unstyled">
        <li>
            <a href="#">Disclaimer</a>
        </li>
        <li>
            <a href="#">Terms and Conditions</a>
        </li>
        <li>
            <a href="#">Privacy Policy</a>
        </li>
    </ul>
</div>
```
### Footer Logo:

This is the same as the website logo and can be set from **MyBag > Footer > Use Header Logo**.

### Footer Payment Logo:
Displays all the payment methods available to the user. There is no default and each logo needs to be uploaded to media library. The recommended resolution for payment logos is **70x60 pixels**

![](http://transvelo.github.io/docs/mybag/images/theme-options-footer.png)
