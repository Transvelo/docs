# Megamenu Dropdown

**Techmarket** supports Megamenu Dropdown, with the help of two plugins that comes bundled with the theme namely : King Composer plugin and Techmarket Extensions plugin.


## Building a megamenu dropdown item

### 1. Static Block Post Type

A megamenu item in **Techmarket** theme is a **Static Block**. This **Static Block** is available on activating **Techmarket Extensions** Plugin.

![](http://transvelo.github.io/docs/techmarket/admin-static-content.png)

### 2. Enable King Composer for Static Block

1. Navigate to **Settings > King Composer**.
2. In **General Settings** tab , make sure **static_block** is selected.<br/>![](http://transvelo.github.io/docs/techmarket/images/vc-settings.png)
3. Go to **Static Content > Add New** and make sure it has a button just below the title with king composer icon and text that reads **Edit with KingComposer**.<br/>![](http://transvelo.github.io/docs/techmarket/images/king-composer-button.png)

### 3. Add a new megamenu item

1. Navigate to **Static Content > Add New**.
2. Give it a title, lets say **"Pages Megamenu Item"** item. The title is not used anywhere in displaying the menu.
3. Click on **Edit with KingComposer**. It will display King Composer Backend Editor. We will use this back end editor to build our megamenu item.
![](http://transvelo.github.io/docs/techmarket/images/test-megamenu-item.png)

4. Let us add a simple text block. Click on **Add text block** button and the result will look like this.<br/>![](http://transvelo.github.io/docs/techmarket/images/add-text-block.png)
5. Click on **Publish** button.

### 4. Adding megamenu item as a submenu to a menu item

1. Navigate to **Appearance > Menus**.

2. On top right corner of your screen, you will find a dropdown menu **Screen Options**. Click on it.

3. In the dropdown that appears, check on **Static Content Blocks** under **Show on screen**. You will now see **Static Content Blocks** listed in the left side. <br/>![](http://transvelo.github.io/docs/techmarket/images/menu-sb-enable.png)

4. Choose the menu you want to edit.In my case I've chose a menu that is hooked to **Primary Nav** location.

5. Now check the **Pages Megamenu Item** and click on **Add to menu**.

6. Drag the **Pages Megamenu Item** menu item under any existing menu as a submenu.<br/>
![](http://transvelo.github.io/docs/techmarket/images/menu-sb-add.png)

7. Click on **Save Menu**.

<div class="alert alert-danger">**Alert :** Please do not use **Static Content Block** as a top level menu item or as submenu menu item beyond level 1. Do not use other menu items with **Static Content Block** menu item.</div>

## Adding Icon Class to a menu item

![](http://transvelo.github.io/docs/techmarket/images/menu-icon-class-add.png)

## Adding CSS Class to a menu item

![](http://transvelo.github.io/docs/techmarket/images/menu-css-class-enable.png)

![](http://transvelo.github.io/docs/techmarket/images/menu-css-class-add.png)




