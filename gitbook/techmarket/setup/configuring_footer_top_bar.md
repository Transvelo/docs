# Configuring Footer Top Bar

## Footer Top Bar

Footer Top Bar has 2 sections and they are

### **Configuring Newsletter Form**-

Display Newsletter Sign-up Form to know about new Products.
1. Navigate to **Contact > Contact Forms**.
2. In the form markup textarea, edit the existing code as follows :<br/><br/>


     ``
    <div class="form-group row">
    <div class="col-xs-12 col-md-6">
    <label>First name <abbr class="required"                        title="required">*</abbr></label>
        [text* first-name class:input-text  first-name]
    </div>
    <div class="col-xs-12 col-md-6">
    <label>Last name <abbr class="required"                         title="required">*</abbr></label>
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

3. Click on **Save** button and view the output.


Here is the newsletter form setting
![](http://transvelo.github.io/docs/techmarket/images/newsletter-form-setting.png)

### **Social Icons**

**Social Icons** - Links to Social media profiles. It can be set from **Sportexx > Social  Media**<br/>![](http://transvelo.github.io/docs/techmarket/images/theme-options-social-media.png)

## Sample Output of the Footer Top Bar

![](http://transvelo.github.io/docs/techmarket/images/footer-top-bar.png)
