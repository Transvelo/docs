# Configuring Footer Style 2

**MyBag**'s footer has 3 rows.

* The first row is called **Footer Top Widgets**.
* The second row is called **Footer Widgets**.
* The third row is called **Bottom Bar**.

Here is the Footer's anatomy:

![](http://transvelo.github.io/docs/mybag/images/footer-style-2.png)

## Footer Top Widgets

The **Footer Top Widgets** is the top most row in the footer. It is a widgetized area and can be populated from **Appearance > Widgets > Footer Top Widgets**.

In the preview it has 3 widgets. Technically it is possible to have more than or less than 3 widgets and the width will be automatically adjust to be equally shared by the number of widgets.

By default the footer top widgets is populated with 3 instances of 3 widgets and they are :

1. **WooCommerce Products** Widget - configured to display **Featured Products**
2. **WooCommerce Products** Widget - configured to display **Special Products**
3.  **WooCommerce Products** Widget - configured to display **Top Rated Products**

![](http://transvelo.github.io/docs/mybag/images/footer-2-top-widget-setting.png)

## Footer Widgets

The **Footer Widgets** is the second row in the footer. It is a widgetized area and can be populated from **Appearance > Widgets > Footer Widgets**.

In the preview it has 5 widgets. Technically it is possible to have more than or less than 5 widgets and the width will be automatically adjust to be equally shared by the number of widgets.

By default the footer widgets is populated with 5 widgets and they are :

1. **Custom Menu** Widget - configured to display **Shop Categories Menu**
2. **Custom Menu** Widget - configured to display **Product Care Menu**
3. **Text** Widget - edit this content in Text Widget
```
<div class="footer-brand">
<p>
<a href="#"><img alt=" " src="http://demo2.transvelo.in/mybag/wp-content/themes/mybag/assets/images/logo.png"></a>
</p>
<ul class="list-unstyled social-icons">
<li><a href="#" class="fa fa-facebook"></a></li>
<li><a href="#" class="fa fa-twitter"></a></li>
<li><a href="#" class="fa fa-google-plus"></a></li>
<li><a href="#" class="fa fa-rss"></a></li>
</ul>
</div>
```

4. **Custom Menu** Widget - configured to display **Customer Service Menu**
5. **Text** Widget - edit this content in Text Widget
```
<p class="opening-hours"><span class="key">Monday-Sunday</span><span class="value">10:00 - 19:00</span></p>
<p class="opening-hours"><span class="key">Sunday &amp; Holidays</span><span class="value">12:00 - 17:00</span></p>
```

![](http://transvelo.github.io/docs/mybag/images/footer-2-widget-setting.png)

## Bottom Bar

The **Bottom Bar** has two sections and these 2 sections can be configured via **MyBag > Footer**.

1. **Copyright Information** - the default is "*&copy; 2015 <a href="http://demo2.transvelo.in/mybag/">MyBag</a>*"
2. **Payment Logos** - Displays all the payment methods available to the user. There is no default and each logo needs to be uploaded to media library. The recommended resolution for payment logos is **70x60 pixels**

![](http://transvelo.github.io/docs/mybag/images/theme-options-footer.png)


