# Contact v1 Page

Contact v1 page of Electro is built using **Visual Composer**.It has 2 rows. The **Visual Composer** Backend editor of the page look like this

![](http://transvelo.github.io/docs/electro/images/contact-v1.png)

### Row 1
---
* It has one column which and the element is Google Map.
* Here is the screenshot of Google Map Setting page.

![](http://transvelo.github.io/docs/electro/images/google-map-setting.png)

### Row 2
---
* It has two columns in ratio 3/4 + 1/4.

##### Column 1 (3/4) :

* This column has **contact-form** as class name.
* It has 2 elements which are Text Block element and Contact Form 7 element.
* **Text Block** : The content of the text block:
*
```
<h2 class="contact-page-title">Leave us a Message</h2>
Maecenas dolor elit, semper a sem sed, pulvinar molestie lacus. Aliquam dignissim, elit non mattis ultrices,
neque odio ultricies tellus, eu porttitor nisl ipsum eu massa.
```
* **Contact Form 7 **: Here is the image for Contact Form 7 Setting page.
* Sample Contact Form 7 code :

```
<div class="form-group row">
<div class="col-xs-12 col-md-6">
<label>First name*</label>
    [text* first-name class:input-text  first-name]
</div>
<div class="col-xs-12 col-md-6">
<label>Last name*</label>
    [text* last-name class:input-text  last-name]
</div>
</div>

<div class="form-group">
<label>Subject</label>
    [text subject class:input-text your-subject]
</div>

<div class="form-group">
<label>Your Message</label>
    [textarea your-message]
</div>

<div class="form-group clearfix">
<p>[submit "Send Message"]</p>
</div>
```

![](http://transvelo.github.io/docs/electro/images/contact-form-7-setting.png)

##### Column 2 (1/4) :
* This column has **store-info** as class name.
* It has only one element
* **Text Block** : Contents of text block given below :

```
<h2 class="contact-page-title">Our Store</h2>
<address>17 Princess Road
London, Greater London
NW1 8JR, UK</address>
<h3>Hours of Operation</h3>
<ul class="list-unstyled operation-hours inner-right-md">
	<li class="clearfix"><span class="day">Monday:</span><span class="pull-right flip hours">12-6 PM</span></li>
	<li class="clearfix"><span class="day">Tuesday:</span><span class="pull-right flip hours">12-6 PM</span></li>
	<li class="clearfix"><span class="day">Wednesday:</span><span class="pull-right flip hours">12-6 PM</span></li>
	<li class="clearfix"><span class="day">Thursday:</span><span class="pull-right flip hours">12-6 PM</span></li>
	<li class="clearfix"><span class="day">Friday:</span><span class="pull-right flip hours">12-6 PM</span></li>
	<li class="clearfix"><span class="day">Saturday:</span><span class="pull-right flip hours">12-6 PM</span></li>
	<li class="clearfix"><span class="day">Sunday</span><span class="pull-right flip hours">Closed</span></li>
</ul>
<h3>Careers</h3>
<p class="inner-right-md">If you're interested in employment opportunities at Electro, please email us: <a href="mailto:contact@yourstore.com">contact@yourstore.com</a></p>
```
