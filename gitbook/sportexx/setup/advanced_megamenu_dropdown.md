# Advanced Megamenu Dropdown

We built our simple Megamenu in previous section. We are now going to build a little complex mega menu using **Visual Composer**.

## Revisiting Test Megamenu Item Static Block

* Navigate to **Static Content > Static Blocks**.
* It should display the **"Test Megamenu Item"** that we created from previous section.
* Click on edit and you should see an existing text block.
* Delete the text edit block by hovering over the block and clicking on the button which has the trash icon.

![](http://transvelo.github.io/docs/sportexx/images/edit-test-megamenu-item.png)

## A complex Megamenu Item

### 1. The Grid

* Our Complex Megamenu item will now have 4 columns.
* On the top-right of each row, you will find a grid icon, next to the move icon.
* Click on the grid icon and it will expand to various grid option available.
* We will select a predefined grid which is 1/4 + 1/4 + 1/4 + 1/4. <br/>![](http://transvelo.github.io/docs/sportexx/images/vc-four-column-grid.png)

* Once you click on the predefined grid layout it will look like this :<br/>![](http://transvelo.github.io/docs/sportexx/images/vc-four-col-grid-on-selection.png)



### 2. Populating the Grid

* **Visual Composer** comes with lot of elements that can be added to the Grid.
* Column 1 - Click on the **Add** button. It should popup **Add Element** button. Let us add **WP Custom Menu** widget under **Wordpress Widgets**. I have already created a menu (via **Appearance > Menus**).
 * **Widget Title** : WooCommerce
 * **Menu** : Woocommerce Pages ( name of the menu created already)
* Column 2 - Click on the **Add** button. It should popup **Add Element** button. Let us add **WP Custom Menu** widget under **Wordpress Widgets**. I have already created a menu (via **Appearance > Menus**).
  * **Widget Title** : Shop Sidebar
  * **Menu** : Shop Sidebar Pages ( name of the menu created already)
* Column 3 - Click on the **Add** button. It should popup **Add Element** button. Let us add **WP Custom Menu** widget under **Wordpress Widgets**. I have already created a menu (via **Appearance > Menus**).
  * **Widget Title** : Shop Fullwidth
  * **Menu** : Shop Fullwidth Pages ( name of the menu created already)
* Column 4 - Click on the **Add** button. It should popup **Add Element** button. Let us add **WP Custom Menu** widget under **Wordpress Widgets**. I have already created a menu (via **Appearance > Menus**).
 * **Widget Title** : Product Types
 * **Menu** : Product Types ( name of the menu created already)

### 3. How does the Grid look after populating ?

![](http://transvelo.github.io/docs/sportexx/images/vc-megamenu-backend-editor.png)

Click on **Publish** button and view the output.

### 4. The Output

![](http://transvelo.github.io/docs/sportexx/images/vc-megamenu-advanced.png)

### 5. Making the megamenu dropdown full-width

The megamenu now looks advanced and neat. What if we want the megamenu to be full width ? It is easy.

1. Go back to **Appearance > Menus **.
2. Click on the caret on the top-right of menu item that contains the megamenu subitem to expand it.
3. In the **CSS Classes** text box, enter `yamm-fw`. This will make the subitem extend to full width of the container.
4. If the **CSS Classes** field is not visible. Click on **Screen Options** on the top-right corner of the screen and check on **CSS Classess** under **Show advanced menu properties**.
4. Click on **Save Menu**.

![](http://transvelo.github.io/docs/sportexx/images/yamm-fw.png)

### 6. Megamenu Full-width

![](http://transvelo.github.io/docs/sportexx/images/yamm-fw-output.png)


