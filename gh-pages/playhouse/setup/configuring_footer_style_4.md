# Configuring Footer Style 4

**MyBag**'s footer has 3 rows.

* The first row is called **Footer Top Widgets**.
* The second row is called **Footer Widgets**.
* The third row is called **Bottom Bar**.

Here is the Footer's anatomy:

![](http://transvelo.github.io/docs/mybag/images/footer-style-4.png)

## Footer Top Widgets

The **Footer Top  Widgets** is the top most row in the footer. It is a widgetized area and can be populated from **Appearance > Widgets > Footer Top Widgets**.

In the preview it has 5 widgets. Technically it is possible to have more than or less than 5 widgets and the width will be automatically adjust to be equally shared by the number of widgets.

By default the footer widgets is populated with 5 widgets and they are :

1. **Custom Menu** Widget - configured to display **Handbags Menu**.

2. **Custom Menu** Widget - configured to display **Bags Menu**.

3. **Custom Menu** Widget - configured to display **Wallets Menu**.

4. **Custom Menu** Widget - configured to display **About Us Menu**.
5. **Custom Menu** Widget - configured to display **Support Menu**.

Here is the screenshot for Footer Top Widget setting

![](http://transvelo.github.io/docs/mybag/images/footer4-top-widget-setting.png)

## Footer Widgets

The **Footer Widgets** is the second row in the footer. It is a widgetized area and can be populated from **Appearance > Widgets > Footer Widgets**.

It has a row with two columns

### Column 1:

* It has an element which is Text Block element.
* **Text Block** : The content of the text block:
```
<div class="textwidget">
    <div class="newsletter-info">
        <p class="title">Sign up and get 30% off</p>
        <p class="tagline">Be the first to know about the latest fashion new and get exclusive offers</p>
    </div>
</div>
```

### Column 2:

* It has an element which is MailChimp Form.

**MailChimp Sign-Up Form** Widget - configured to display **Newsletter Form**

![](http://transvelo.github.io/docs/mybag/images/footer4-widget-setting.png)

## Bottom Bar

The **Bottom Bar** has two rows.

### Row 1

1.**Text Widget** - : The content of the text block:

```
<ul class="contact-info">
    <li>
        <a href="#">hello@mybag.com</a>
    </li>
    <li>
        <a href="#">61709</a>
    </li>
</ul>
```

2.**Logo** - This is the same as the website logo and can be set from **MyBag > Footer > Use Header Logo**.

3.**Social Icons** - Links to Social media profiles. It can be set from **MyBag > Social Media**<br/>![](http://transvelo.github.io/docs/mybag/images/theme-options-social-media.png)

### Row 2

1.**Footer Quick Links** - Footer Menu which is hooked in Footer Quick Link nav menu location.

2.**Copyright Information** - the default is "*&copy; 2016 <a href="http://demo2.transvelo.in/mybag/">MyBag</a>*"

![](http://transvelo.github.io/docs/mybag/images/theme-options-footer.png)
