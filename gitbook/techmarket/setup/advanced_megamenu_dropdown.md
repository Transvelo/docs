# Advanced Megamenu Dropdown

We built our simple Megamenu in previous section. We are now going to build a little complex mega menu using **King Composer**.

## Revisiting Test Megamenu Item Static Block

* Navigate to **Static Content > Static Blocks**.
* It should display the **"Pages Megamenu Item"** that we created from previous section.
* Click on edit and you should see an existing text block.
* Delete the text edit block by hovering over the block and clicking on the button which has the trash icon.

![](http://transvelo.github.io/docs/techmarket/images/edit-test-megamenu-item.png)

## A complex Megamenu Item

### 1. The Grid

* Our Complex Megamenu item will now have 4 columns.
* On the top-right of each row, you will find a grid icon, next to the move icon.
* Click on the grid icon and it will expand to various grid option available.
* We will select a predefined grid which is 1/4 + 1/4 + 1/4 + 1/4.
* Once you click on the predefined grid layout it will look like this :<br/>![](http://transvelo.github.io/docs/techmarket/images/vc-four-col-grid-on-selection.png)



### 2. Populating the Grid

* **King Composer** comes with lot of elements that can be added to the Grid.

#### Row 1 has 4 columns.
* Column 1 - Click on the **Add** button. It should popup **Add Element** button. Let us add **Custom Menu** widget under **Wordpress Widgets**. I have already created a menu (via **Appearance > Menus**).
 * **Widget Title** :
 * **Menu** : Pages Menu #1 ( name of the menu created already)
* Column 2 -  Click on the **Add** button. It should popup **Add Element** button. Let us add **Custom Menu** widget under **Wordpress Widgets**. I have already created a menu (via **Appearance > Menus**).
 * **Widget Title** :
 * **Menu** : Pages Menu #2 ( name of the menu created already)
* Column 3 -  Click on the **Add** button. It should popup **Add Element** button. Let us add **Custom Menu** widget under **Wordpress Widgets**. I have already created a menu (via **Appearance > Menus**).
 * **Widget Title** :
 * **Menu** : Pages Menu #3 ( name of the menu created already)
* Column 4 -  Click on the **Add** button. It should popup **Add Element** button. Let us add **Custom Menu** widget under **Wordpress Widgets**. I have already created a menu (via **Appearance > Menus**).
 * **Widget Title** :
 * **Menu** : Pages Menu #4 ( name of the menu created already)

### 3. How does the Grid look after populating ?

![](http://transvelo.github.io/docs/techmarket/images/kc-megamenu-backend-editor.png)

Click on **Publish** button and view the output.

### 4. Output of megamenu

![](http://transvelo.github.io/docs/techmarket/images/megamenu-output.png)


### 5. Making the megamenu dropdown as half of the width

1. Go back to **Appearance > Menus **.
2. Click on the caret on the top-right of menu item that contains the megamenu subitem to expand it.
3. In the **CSS Classes** text box, enter `yamm-hw`.
4. This will make the subitem extend to three half of the container.
4. If the **CSS Classes** field is not visible. Click on **Screen Options** on the top-right corner of the screen and check on **CSS Classess** under **Show advanced menu properties**.
4. Click on **Save Menu**.

![](http://transvelo.github.io/docs/techmarket/images/megamenu-half-1.png)

### 6. The Output of the megamenu dropdown as  half of the width
![](http://transvelo.github.io/docs/techmarket/images/megamenu-half-1-out.png)


### 7. Making the megamenu dropdown as three half of the width

1. Go back to **Appearance > Menus **.
2. Click on the caret on the top-right of menu item that contains the megamenu subitem to expand it.
3. In the **CSS Classes** text box, enter `yamm-tfw`.
4. This will make the subitem extend to three half of the container.
4. If the **CSS Classes** field is not visible. Click on **Screen Options** on the top-right corner of the screen and check on **CSS Classess** under **Show advanced menu properties**.
4. Click on **Save Menu**.

![](http://transvelo.github.io/docs/techmarket/images/megamenu-half-1-out.png)

### 8. The Output of the megamenu dropdown as three half of the width
![](http://transvelo.github.io/docs/techmarket/images/megamenu-half-out.png)

### 9. To make the Menu Item as Highlight or Bold

1. Go back to **Appearance > Menus **.
2. Click on the caret on the top-right of menu item that contains the megamenu subitem to expand it.
3. In the **CSS Classes** text box, enter `highlight`. This will make the menu item as BOLD.
4. If the **CSS Classes** field is not visible. Click on **Screen Options** on the top-right corner of the screen and check on **CSS Classess** under **Show advanced menu properties**.
4. Click on **Save Menu**.

![](http://transvelo.github.io/docs/techmarket/images/highlight-menu.png)

### 10. The Output of the Highlight Menu

![](http://transvelo.github.io/docs/techmarket/images/highlight-menu-output.png)

### 11. Adding Class Name for Single Image which extend outside of the content area in Vertical Menu

1. Navigate to Static Content > Add New.
2. Give it a title, lets say "**Mobiles & Tablets Megamenu Item**". The title is not used anywhere in displaying the menu.
3. Click on Backend Editor. It will display Visual Composer Backend Editor. We will use this back end editor to build our Mobiles & Tablets Megamenu Item.
4. **Mobiles & Tablets Megamenu** Item has 2 rows.
5. First row has **Single Image** Setting. Here is the screenshot for **Single Image Setting**.<br>
![](http://transvelo.github.io/docs/techmarket/images/static-block-image-setting.png)
6. On the Row settings of the Single Image Block, add the class name **bg-yamm-content** in
Extra Class Name option. Here is the screenshot for your refenece<br>
![](http://transvelo.github.io/docs/techmarket/images/single-image-row-setting.png)


### 12. Output of Single Image which extend outside of the content area in Vertical Menu
![](http://transvelo.github.io/docs/techmarket/images/megamenu-half-out.png)
<div class="alert alert-info">**Megamenu Fullwidth** : Please add "yamm-fw" css class to its parent menu item to make megamenu fullwidth.</div>
