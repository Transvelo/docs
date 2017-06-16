# Contact

Contact Page is built using **Contactpage Template** with 3 rows. The Backend editor of the page look like this

![](http://transvelo.github.io/docs/pizzaro/images/contact-page-setting.png)

## Content Section

1. Navigate to **Contact** page and make sure **Contactpage** is choosen under **Page Attributes > Template**.
2. Click on **Publish**.
3. After Publish, **Contact** options will appear in the meta box area.

### Row 1
---

![](http://transvelo.github.io/docs/pizzaro/images/contact-page-setting-row-1.png)

### Row 2
---

![](http://transvelo.github.io/docs/pizzaro/images/contact-page-setting-row-2.png)


### Row 3
---

![](http://transvelo.github.io/docs/pizzaro/images/contact-page-setting-row-3.png)

#### Sample Contact Form code:

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

<div class="form-group row">
<div class="col-xs-12 col-md-6">
<label> Your Email*</label>
    [email* your-email]
</div>
<div class="col-xs-12 col-md-6">
<label>Subject</label>
    [text subject class:input-text your-subject]
</div>
</div>

<div class="form-group">
<label>Your Message</label>
    [textarea your-message]
</div>

<div class="form-group clearfix">
<p>[submit "Send Message"]</p>
</div>
```
