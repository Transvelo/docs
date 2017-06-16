# Subscribe PopUp Modal

Here is the link for Wordpress PopUp plugin

* **[Wordpress PopUp](https://wordpress.org/plugins/wordpress-popup/)** — Allows you to create unlimited number of popups with different looks and configurations.

After installing the plugin please navigate to **PopUp** > **Add New** > **Main PopUp Content** here paste this following code in Text Mode format

## The Html Code


```
<div class="row body-content">
<div class="col-xs-12 col-md-5 left-content">
<h2 class="text">Be the first to <strong>Know about new arrivals</strong></h2></div>
<div class="col-xs-12 col-md-6 right-content">
<div class="subscribe-and-connect">
<div class="newsletter">
<h4 class="newsletter-title">Subscribe</h4>
<form>
<div class="newsletter-form">
<div class="input-group"><input class="form-control" type="text" placeholder="Enter your email address" /><span class="input-group-btn"><button class="btn btn-primary" type="button">Sign Up</button></span></div>
</div>
</div>
</form></div>
</div>
</div>
```
## The CSS Code

Paste this following css in Custom CSS which is below the Main PopUp Content

```
#popup .wdpu-text,
#popup .wdpu-msg {
    background: #1c1c1c;
    font-family: Lato;
}
#popup .wdpu-text {
    padding: 0;
}

#popup .wdpu-msg {
    max-width: 1141px;
}
#popup h2.text{
    color: #f6f6f6;
    font-size: 72px;
    font-weight: 300;
    line-height: 60px;
    text-transform: uppercase;
    padding-right: 15%;
    margin-bottom: 10px;
}

#popup .body-content {
    padding: 70px 90px;
}

#popup .subscribe-and-connect h4.newsletter-title {
font-size: 19px;
color: #c9c9c9;
vertical-align: middle;
margin-right: 32px;
font-family: 'Open Sans', sans-serif;
line-height: 36px;
display: inline-block;
font-weight: 400;
margin-bottom: 0;
}

#popup .subscribe-and-connect form {
    display: inline-block;
    margin: 0;vertical-align: middle;
}

#popup .wdpu-inner {
    overflow: visible;
}

#popup .left-content,
#popup .right-content {
    display: table-cell;
    vertical-align: middle;
    float: none;
}

#popup .subscribe-and-connect {
     padding-right: 80px;
    text-align: right;
}
```
