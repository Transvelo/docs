# Contact Page

Contact Page of Bethlehem is built using **Visual Composer**.It has 2 rows. The **Visual Composer** Backend editor of the page look like this

![](http://transvelo.github.io/bethlehem/docs/images/contact.png)


### Row 1
---
* It has one column with two elements which are title and contact form 7.

#### **Title Widget Setting**

![](http://transvelo.github.io/bethlehem/docs/images/contact-page-title-setting.png)

#### **Contact Form 7 Setting**

**Configuring Contact Form**

1. Navigate to **Contact > Contact Forms**.
2. In the form  textarea, edit the existing code as follows :<br/><br/>

    ```

   <div class="col-2">
    [text* your-name placeholder "Full Name"]
    </div>
    <div class="col-2">
        [email* your-email placeholder "Email address"]
    </div>
    <div class="col-1">[text your-subject placeholder "Subject of your message"]</div>
    <div class="col-1">[textarea your-message]</div>

    [submit class:contact-btn "Send"]
    ```
4. Click on **Save** button and view the output.


Here is the contact form setting

![](http://transvelo.github.io/bethlehem/docs/images/contact-page-form-setting.png)


### Row 2
---
* It has only one element, which is event venue location.

![](http://transvelo.github.io/bethlehem/docs/images/contact-page-event-location-setting.png)


