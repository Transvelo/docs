# Advanced Megamenu Dropdown

We built our simple Megamenu in previous section. We are now going to build a little complex mega menu using **Visual Composer**.

## Revisiting Pages Submenu Static Block

* Navigate to **Static Content > Static Blocks**.
* It should display the **"Pages Submenu"** that we created from previous section.
* Click on edit and you should see an existing text block.
* Delete the text edit block by hovering over the block and clicking on the button which has the trash icon.

![](http://transvelo.github.io/bethlehem/docs/images/edit-page-submenu.png)


## A complex Megamenu Item

### 1. The Grid

* Our Complex Megamenu item will now have 3 columns.
* On the top-right of each row, you will find a grid icon, next to the move icon.
* Click on the grid icon and it will expand to various grid option available.
* Now we need 3 columns with the ration of 6/12 + 3/12 + 3/12 , but it is not in the predefined grid for that we click custom icon to set the gird.
* After setting the custom grid it will look like this :<br/>![](http://transvelo.github.io/bethlehem/docs/images/vc-three-col-grid-on-selection.png)



### 2. Populating the Grid

* **Visual Composer** comes with lot of elements that can be added to the Grid.
* Column 1 - Click on the **Add** button. It should popup **Add Element** button. Let us add **Single Image**.
 * **Image** : Upload Image
* Column 2 - Click on the **Add** button. It should popup **Add Element** button. Let us add **Text Block** and eidt the following code

```
<h5>Blog Pages</h5>
<ul>
	<li><a href="http://demo.transvelo.in/wp/bethlehem/?page_id=13">Blog Classic with Sidebar</a></li>
	<li><a href="http://demo.transvelo.in/wp/bethlehem/?page_id=1569">Blog Grid View</a></li>
	<li><a href="http://demo.transvelo.in/wp/bethlehem/?p=89">Blog Single Entry</a></li>
</ul>
<h5>Ministries</h5>
<ul>
	<li><a href="http://demo.transvelo.in/wp/bethlehem/?post_type=ministries">Ministries Grid View</a></li>
	<li><a href="http://demo.transvelo.in/wp/bethlehem/?post_type=ministries">Ministries List View</a></li>
	<li><a href="http://demo.transvelo.in/wp/bethlehem/?ministries=childrens-ministry">Single Ministry</a></li>
</ul>
<h5><a href="http://demo.transvelo.in/wp/bethlehem/?page_id=1594">Home v2</a></h5>

```

* Column 3 - Click on the **Add** button. It should popup **Add Element** button. Let us add **Text Block** and edit the following code

 ```
 <h5>Shop</h5>
<ul>
	<li><a href="http://demo.transvelo.in/wp/bethlehem/?post_type=product">Shop Grid</a></li>
	<li><a href="http://demo.transvelo.in/wp/bethlehem/?post_type=product">Shop List</a></li>
	<li><a href="http://demo.transvelo.in/wp/bethlehem/?product=the-magician-king">Product Single</a></li>
	<li><a href="http://demo.transvelo.in/wp/bethlehem/?page_id=7">Login</a></li>
	<li><a href="http://demo.transvelo.in/wp/bethlehem/?page_id=5">Shop - Cart</a></li>
	<li><a href="http://demo.transvelo.in/wp/bethlehem/?page_id=6">Shop - Checkout</a></li>
</ul>
<h5>Stories</h5>
<ul>
	<li><a href="http://demo.transvelo.in/wp/bethlehem/?post_type=stories">Stories View</a></li>
	<li><a href="http://demo.transvelo.in/wp/bethlehem/?stories=loose-thread-john-doe-story-2">Single Story</a></li>
</ul>
```

### 3. How does the Grid look after populating ?

![](http://transvelo.github.io/bethlehem/docs/images/vc-megamenu-backend-editor.png)

Click on **Publish** button and view the output.

### 4. The Output

![](http://transvelo.github.io/bethlehem/docs/images/vc-megamenu-advanced.png)

### 5. Split the megamenu dropdown in Left and Right Column

The megamenu now looks advanced and neat. What if we want the megamenu to be full width ? It is easy.

1. Go back to **Appearance > Menus **.
2. Click on the caret on the top-right of menu item that contains the megamenu subitem to expand it.
3. In the **CSS Classes** text box, enter `split-right`. This will make the megamenu to split into left nav and right nav.
4. If the **CSS Classes** field is not visible. Click on **Screen Options** on the top-right corner of the screen and check on **CSS Classess** under **Show advanced menu properties**.
4. Click on **Save Menu**.
![](http://transvelo.github.io/bethlehem/docs/images/split-right-setting.png)

### Output of the Split Megamenu
![](http://transvelo.github.io/bethlehem/docs/images/split-right-output.png)



