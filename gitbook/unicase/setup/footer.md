# Footer

**Unicase** footer has 3 rows.

* The first row is called **Footer Top Widget area**  with **Footer Contact Information** section.
* The second row is called **Footer Bottom Widget area**.
* Below the footer is the **Bottom Bar** which has **Copyright Information** on left and **Payment Logos** on right.

Here is the Footer's anatomy:

![](http://transvelo.github.io/docs/unicase/images/footer-anatomy.png)

## Footer Contact Information

The **Footer Contact Information** is also the part in Footer Top Widget. This section has :

* **Logo** - This is the same as the website logo and can be set from **Unicase > General Tab**.
* **Footer Contact Info Text** - The default value is *"Nam libero tempore, cum soluta nobis est ses eligendi optio cumque cum soluta nobis est ses eligendi optio cumque.."* and can be changed from **Unicase > Footer Tab**.
* **Get in Touch** - Links to Social media profiles. It can be set from **Unicase > Social Media**<br/>![](http://transvelo.github.io/docs/unicase/images/theme-options-social-media.png)
* Edit the information as required and click on **Save Changes** in **Unicase** page

## Configuring MailChimp Sign-Up Form-

Display Newsletter Sign-up Form to know about new Products.

1. Navigate to **MailChimp for WP > Forms**.
2. In the form markup textarea, edit the existing code as follows :


    ```
     <div class="form-inline form-newsletter">
        <div class="form-group">
        	<label for="mc4wp_email">Sign up for newsletter</label>
        	<input type="email" class="input-email form-control" id="mc4wp_email" name="EMAIL" placeholder="Sign up for newsletter" required />
        	<button type="submit" class="btn btn-submit btn-primary">subscribe</button>
        </div>
    </div>
    ```


3. Set Load Form Style(css) as No.

4. Click on Save button and view the output.

## Footer Top Widget Area

The **footer Top widget area** is adjacent to Footer Contact Information section. It is a widgetized area and can be populated from **Appearance > Widgets > Footer Top Widgets**.

In the preview it has 3 widgets. Technically it is possible to have more than or less than 3 widgets and the width will be automatically adjust according to the **.col** values in the **row**.

* Column 1 :Drag and drop **MailChimp-Sign_up form**.
* Column 2 : Select the **Text** widget and Edit the following code :<br/><br/>


```
<div class="opening-time">
		<div class="table-responsive">
			<table class="table">
				<tbody>
					<tr><td>Monday-Friday:</td><td>08.00 To 18.00</td></tr>
					<tr><td>Saturday:</td><td>09.00 To 20.00</td></tr>
					<tr><td>Sunday:</td><td>10.00 To 20.00</td></tr>
				</tbody>
			</table>
		</div><!-- /.table-responsive -->
		<p class="contact-number">Hot Line:(400)888 868 848</p>
	</div>
```

* Column 3 : Select the **Text** widget and Edit the following code :<br/><br/>

```
    <ul class="contact-info">
        <li class="media">
            <div class="pull-left">
                <span class="icon fa-stack fa-lg">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-map-marker fa-stack-1x fa-inverse"></i>
                </span>
            </div>
            <div class="media-body">
                <p>868 Any Stress,Burala Casi,Picasa USA.</p>
            </div>
        </li>

        <li class="media">
            <div class="pull-left">
                <span class="icon fa-stack fa-lg">
                <i class="fa fa-circle fa-stack-2x"></i>
                <i class="fa fa-mobile fa-stack-1x fa-inverse"></i>
                </span>
            </div>
            <div class="media-body">
                <p>(400) 0888 888 888<br>(400) 888 888 888</p>
            </div>
        </li>

        <li class="media">
            <div class="pull-left">
                <span class="icon fa-stack fa-lg">
                <i class="fa fa-circle fa-stack-2x"></i>
                <i class="fa fa-envelope fa-stack-1x fa-inverse"></i>
                </span>
            </div>
            <div class="media-body">
                <span><a href="#">Contact @Unicase.com</a></span><br>
                <span><a href="#">Sale @Unicase.com</a></span>
            </div>
        </li>
    </ul>
```

## Footer Bottom Widget Area

The **Footer Bottom Widget Area** is the second row in the footer. It is a widgetized area and it can contain any number of widgets. It can be populated from **Appearance > Widgets > Footer Bottom Widget Area**.

In the preview it has 4 **Text** widgets. Technically it is possible to have more than or less than 4 widgets.

* Column 1 : In the **Text** widget, edit this following code:<br/><br/>

```
<ul class="list-unstyled">
    <li><a href="http://demo2.transvelo.in/unicase/?page_id=32">About</a></li>
    <li><a href="http://demo2.transvelo.in/unicase/?page_id=8">Contact</a></li>
    <li><a href="http://demo2.transvelo.in/unicase/?page_id=10">FAQ</a></li>
    <li><a href="http://demo2.transvelo.in/unicase/?page_id=12">Terms and Conditions</a></li>
    <li><a href="http://demo2.transvelo.in/unicase/?page_id=76">Track Your Order</a></li>
</ul>
```


* Column 2 : In the **Text** widget, edit this following code:<br/><br/>

```
<ul class="list-unstyled">
    <li><a href="http://demo2.transvelo.in/unicase/?page_id=32">About</a></li>
    <li><a href="http://demo2.transvelo.in/unicase/?page_id=8">Contact</a></li>
    <li><a href="http://demo2.transvelo.in/unicase/?page_id=10">FAQ</a></li>
    <li><a href="http://demo2.transvelo.in/unicase/?page_id=12">Terms and Conditions</a></li>
    <li><a href="http://demo2.transvelo.in/unicase/?page_id=76">Track Your Order</a></li>
</ul>
```

* Column 3 : In the **Text** widget, edit this following code:<br/><br/>

```
<ul class="list-unstyled">
    <li><a href="http://demo2.transvelo.in/unicase/?page_id=32">About</a></li>
    <li><a href="http://demo2.transvelo.in/unicase/?page_id=8">Contact</a></li>
    <li><a href="http://demo2.transvelo.in/unicase/?page_id=10">FAQ</a></li>
    <li><a href="http://demo2.transvelo.in/unicase/?page_id=12">Terms and Conditions</a></li>
    <li><a href="http://demo2.transvelo.in/unicase/?page_id=76">Track Your Order</a></li>
</ul>
```

* Column 4 : In the **Text** widget, edit this following code:<br/><br/>

```
<ul class="list-unstyled">
    <li><a href="http://demo2.transvelo.in/unicase/?page_id=32">About</a></li>
    <li><a href="http://demo2.transvelo.in/unicase/?page_id=8">Contact</a></li>
    <li><a href="http://demo2.transvelo.in/unicase/?page_id=10">FAQ</a></li>
    <li><a href="http://demo2.transvelo.in/unicase/?page_id=12">Terms and Conditions</a></li>
    <li><a href="http://demo2.transvelo.in/unicase/?page_id=76">Track Your Order</a></li>
</ul>
```

## Bottom Bar

The **Bottom Bar** has two sections and these 2 sections can be configured via **Unicase > Footer Tab**.

1. **Copyright Information** - the default is "*&copy; 2015 <a href="http://demo2.transvelo.in/unicase/">Unicase Store</a>*"
2. **Payment Logos** - Displays all the payment methods available to the user. There is no default and each logo needs to be uploaded to media library. The recommended resolution for payment logos is **40x29 pixels**

![](http://transvelo.github.io/docs/unicase/images/theme-options-bottom-bar.png)



