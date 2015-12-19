# Footer

**MediaCenter**'s footer has 2 rows separated by a **product search** bar.

* The first row is called **Footer Widget area**
* The second row has 2 sections, a widget area called **Footer Bottom Widget area** and **Footer Contact Information** section.
* Below the footer is the **Bottom Bar** which has **Copyright Information** on left and **Payment Logos** on right.

Here is the Footer's anatomy:

![](http://transvelo.github.io/docs/mediacenter/images/footer-anatomy.png)

## Footer Widget Area

The **footer widget area** is the top most row in the footer. It is a widgetized area and can be populated from **Appearance > Widgets > Footer Widget Area**.

In the preview it has 3 widgets. Technically it is possible to have more than or less than 3 widgets and the width will be automatically adjust to be equally shared by the number of widgets.

By default the footer widget area is populated with 3 instances of 2 widgets and they are :

1. **WooCommerce Products** Widget - configured to display **Featured Products**
2. **WooCommerce Products** Widget - configured to display **On Sale Products**
3. **WooCommerce Top Rated Products** Widget.

![](http://transvelo.github.io/docs/mediacenter/images/footer-widget-area.png)

## Footer Contact Information

The **Footer Contact Information** is just below the **Footer widget area** and is separated by **Product Search** bar. This section has :

* **Logo** - This is the same as the website logo and can be set from **MC Options > General Tab**.
* **Footer Contact Info Text** - The default value is *"Feel free to contact us via phone,email or just send us mail."* and can be changed from **MC Options > Footer Tab**.
* **Footer Contact Info Address** - The default value is "*17 Princess Road, London, Greater London NW1 8JR, UK 1-888-8MEDIA (1-888-892-9953)*" and can be changed from **MC Options > Footer Tab**<br/>![](http://transvelo.github.io/docs/mediacenter/images/footer-contact-information.png)
* **Get in Touch** - Links to Social media profiles. It can be set from **MC Options > Social Media**<br/>![](http://transvelo.github.io/docs/mediacenter/images/theme-options-social-media.png)
* Edit the information as required and click on **Save Changes** in **MC Options** page.

## Footer Bottom Widget Area

The **Footer Bottom Widget Area** is adjacent to **Footer Contact Information** section. It is a widgetized area and it can contain any number of widgets. It can be populated from **Appearance > Widgets > Footer Bottom Widget Area**.

In the preview it has 4 widgets. Technically it is possible to have more than or less than 4 widgets.

By default the footer bottom widget area is populated with 4 instances of 4 widgets and they are :

1. **WooCommerce Categories** Widgets - configured to display **Find It Fast** section
2. **WP Meta** Widget - configured to display **Meta** Information links.
2. **WP Pages** Widget - configured to display **Pages** menu links.
3. **WP Text/HTML** Widget - configured to display **Information** section.

<div class="alert alert-warning alert-block">
**Pro Tip:** Each widget in **footer bottom widget area** has a margin-right of **60px** ( CSS Rule : **#footer .footer-bottom-widget-area .columns**). Adjust the margin-right value to accomodate more widgets.
</div>

![](http://transvelo.github.io/docs/mediacenter/images/footer-bottom-widget-area.png)

## Bottom Bar

The **Bottom Bar** has two sections and these 2 sections can be configured via **MC Options > Footer Tab**.

1. **Copyright Information** - the default is "*&copy; &lt;a href="&lt;website-url&gt;"&gt;Media Center&lt;/a&gt; - All Rights Reserved.*"
2. **Payment Logos** - Displays all the payment methods available to the user. There is no default and each logo needs to be uploaded to media library. The recommended resolution for payment logos is **40x29 pixels**

![](http://transvelo.github.io/docs/mediacenter/images/theme-options-bottom-bar.png)


