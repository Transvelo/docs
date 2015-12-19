# Contact v1

Contact Page<sup>v1</sup> of Media Center is built using **Visual Composer**.It has 2 rows. The **Visual Composer** Backend editor of the page look like this

![](http://transvelo.github.io/mediacenter/docs/assets/images/contactv1.png)

### Row 1
---
* It has one column which and the element is MediaCenter Google Map.
* Here is the screenshot of Google Map Setting page.

![](http://transvelo.github.io/mediacenter/docs/assets/images/contactv1-googleMap-setting.png)

### Row 2
---
* It has two columns in ratio 8/12 : 4/12.

##### Column 1 (8/12) :

* It has 2 elements which are Text Block element and Contact Form 7 element.
* **Text Block** : The content of the text block:

```
<h2 class="bordered">Leave a Message</h2>
Maecenas dolor elit, semper a sem sed, pulvinar molestie lacus. Aliquam dignissim, elit non mattis ultrices, neque odio ultricies tellus, eu porttitor nisl ipsum eu massa.
```

* **Contact Form 7 **: Here is the image for Contact Form 7 Setting page.
* Sample Contact Form 7 code :
```
<div class="cf-style-1"><div class="row field-row"><div class="col-xs-12 col-sm-6"><label>Your Name*</label>[text* your-name class:le-input]</div><div class="col-xs-12 col-sm-6"><label>Your Email*</label>[email* your-email class:le-input]</div></div><!-- /.field-row --><div class="field-row"><label>Subject</label>[text your-subject class:le-input]</div><!-- /.field-row --><div class="field-row"><label>Your Message</label>[textarea your-message x8 class:le-input]</div><!-- /.field-row --><div class="buttons-holder">[submit class:le-button class:huge "Send Message"]</div><!-- /.buttons-holder --></div>
```

![](http://transvelo.github.io/mediacenter/docs/assets/images/contactv1-form7-setting.png)

##### Column 2 (4/12) :

* It has only one element
* **Text Block** : Contents of text block given below :

```
<h2 class="bordered">Our Store</h2>
<address>17 Princess Road
London, Greater London
NW1 8JR, UK</address>
<h3>Hours of Operation</h3>
<ul class="list-unstyled operation-hours">
	<li class="clearfix"><span class="day">Monday:</span><span class="pull-right hours">12-6 PM</span></li>
	<li class="clearfix"><span class="day">Tuesday:</span><span class="pull-right hours">12-6 PM</span></li>
	<li class="clearfix"><span class="day">Wednesday:</span><span class="pull-right hours">12-6 PM</span></li>
	<li class="clearfix"><span class="day">Thursday:</span><span class="pull-right hours">12-6 PM</span></li>
	<li class="clearfix"><span class="day">Friday:</span><span class="pull-right hours">12-6 PM</span></li>
	<li class="clearfix"><span class="day">Saturday:</span><span class="pull-right hours">12-6 PM</span></li>
	<li class="clearfix"><span class="day">Sunday</span><span class="pull-right hours">Closed</span></li>
</ul>
<h3>Career</h3>
If you're interested in employment opportunities at MediaCenter, please email us: <a href="mailto:contact@yourstore.com">contact@yourstore.com</a>
```
