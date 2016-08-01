# Contact v2 Page

Contact v2 page of Electro is built using **Visual Composer**.It has 1 row. The **Visual Composer** Backend editor of the page look like this

![](http://transvelo.github.io/docs/electro/images/contact-v2.png)


### Row 1
---
* It has two columns of ratio 1/2 : 1/2.

##### Column 1 (1/2) :

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

##### Column 2 (1/2) :

* This column has **store-info store-info-v2** as class name.
* It has 2 elements which are Google Maps and Text Block Element.
* Here is the screenshot of Google Maps Setting page.

![](http://transvelo.github.io/docs/electro/images/google-map-setting.png)

**Text Block** : The content of the text block setting

```
<h2 class="contact-page-title">Our Address</h2>
17 Princess Road London, Greater London NW1 8JR, UK
Support(+800)856 800 604
Email: <a href="mailto:contact@yourstore.com">info@electro.com</a>
<h3>Opening Hours</h3>
Monday to Friday: 9am-9pm
Saturday to Sunday: 9am-11pm
<h3>Careers</h3>
If you're interested in employment opportunities at Electro, please email us: <a href="mailto:contact@yourstore.com">contact@yourstore.com</a>
```






