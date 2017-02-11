# Main Navigation

# Megamenu Dropdown

**Bethlehem** supports Megamenu Dropdown, with the help of two plugins that comes bundled with the theme namely :  **Visual Composer** plugin and **Bethlehem Extensions** plugin.

## Building a megamenu dropdown item

### 1. Static Block Post Type

A megamenu item in **Bethlehem** theme is a **Static Block**. This **Static Block** is available on activating **Bethlehem Extensions** Plugin.

![](http://transvelo.github.io/docs/bethlehem/images/admin-static-content.png)

### 2. Enable Visual Composer for Static Block

1. Navigate to **Settings > Visual Composer**.
2. In **Post Types** under **Role Manager** tab , make sure **custom** is selected and **static_block** is checked.<br/>![](http://transvelo.github.io/docs/bethlehem/images/vc-settings.png)
3. Go to **Static Content > Add New** and make sure it has a button just below the title with visual composer icon and text that reads **Backend Editor**.<br/>![](http://transvelo.github.io/docs/bethlehem/images/visual-composer-button.png)

### 3. Add a new megamenu item

1. Navigate to **Static Content > Add New**.
2. Give it a title, lets say **"Pages Submenu"** item. The title is not used anywhere in displaying the menu.
3. Click on **Backend Editor**. It will display Visual Composer Backend Editor. We will use this back end editor to build our megamenu item.

 ![](http://transvelo.github.io/docs/bethlehem/images/test-megamenu-item.png)

4. Let us add a simple text block. Click on **Add text block** button and the result will look like this.<br/>![](http://transvelo.github.io/docs/bethlehem/images/add-text-block.png)
5. Click on **Publish** button.

### 4. Adding megamenu item as a submenu to a menu item

1. Navigate to **Appearance > Menus**.
2. On top right corner of your screen, you will find a dropdown menu **Screen Options**. Click on it.
3. In the dropdown that appears, check on **Static Content Blocks** under **Show on screen**. You will now see **Static Content Blocks** listed in the left side. <br/>![](http://transvelo.github.io/docs/bethlehem/images/static-content-block-left-menu.png)
4. Choose the menu you want to edit. In my case I've chose a menu that is hooked to **Main Menu** location.
5. Now check the **Pages Submenu** and click on **Add to menu**.
6. Drag the **Pages Submenu** box and drop it under any existing menu as a submenu.<br/>
![](http://transvelo.github.io/docs/bethlehem/images/static-block-submenu.png)
7. Click on **Save Menu**.
8. Now the megamenu will is added as a submenu and it should look like this: <br/> ![](http://transvelo.github.io/docs/bethlehem/images/megamenu-as-submenu.png)

### 5. How to make megamenu full width?

If we want the megamenu to be full width ? It is easy.

1. Go to **Appearance > Menus **.
2. Click on the caret on the top-right of menu item that contains the megamenu subitem to expand it.
3. In the **CSS Classes** text box, enter `full-width`. This will make the megamenu to full width.
![](http://transvelo.github.io/docs/bethlehem/images/menu-css-class-enable.png)
4. If the **CSS Classes** field is not visible. Click on **Screen Options** on the top-right corner of the screen and check on **CSS Classess** under **Show advanced menu properties**.
![](http://transvelo.github.io/docs/bethlehem/images/make-menu-full-width.png)
4. Click on **Save Menu**.

<div class="alert alert-danger">**Alert :** Please do not use **Static Content Block** as a top level menu item or as submenu menu item beyond level 1. Do not use other menu items with **Static Content Block** menu item.</div>
