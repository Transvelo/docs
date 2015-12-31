# Megamenu Dropdown

**MyBag** supports Megamenu Dropdown, with the help of two plugins that comes bundled with the theme namely :  **Visual Composer** plugin and **MyBag Extensions** plugin.

## Building a megamenu dropdown item

### 1. Static Block Post Type

A megamenu item in **MyBag** theme is a **Static Block**. This **Static Block** is available on activating **MyBag Extensions** Plugin.

![](http://transvelo.github.io/docs/mybag/images/admin-static-content.png)

### 2. Enable Visual Composer for Static Block

1. Navigate to **Settings > Visual Composer**.
2. Choose **Custom ** option in *Post types** under **Role Manager** tab , make sure **static_block** is checked.<br/>![](http://transvelo.github.io/docs/mybag/images/vc-settings.png)
3. Go to **Static Content > Add New** and make sure it has a button just below the title with visual composer icon and text that reads **Backend Editor**.<br/>![](http://transvelo.github.io/docs/mybag/images/visual-composer-button.png)

### 3. Add a new megamenu item

1. Navigate to **Static Content > Add New**.
2. Give it a title, lets say **"Megamenu Item : Shop"** item. The title is not used anywhere in displaying the menu.
3. Click on **Backend Editor**. It will display Visual Composer Backend Editor. We will use this back end editor to build our megamenu item.
![](http://transvelo.github.io/docs/mybag/images/test-megamenu-item.png)

4. Let us add a simple text block. Click on **Add text block** button and the result will look like this.<br/>![](http://transvelo.github.io/docs/mybag/images/add-text-block.png)
5. Click on **Publish** button.

### 4. Adding megamenu item as a submenu to a menu item

1. Navigate to **Appearance > Menus**.
2. On top right corner of your screen, you will find a dropdown menu **Screen Options**. Click on it.
3. In the dropdown that appears, check on **Static Content Blocks** under **Show on screen**. You will now see **Static Content Blocks** listed in the left side. <br/>![](http://transvelo.github.io/docs/mybag/images/static-content-block-left-menu.png)
4. Choose the menu you want to edit. In my case I've chose a menu that is hooked to **Primary Menu** location.
5. Now check the **Megamenu Item : Shop** and click on **Add to menu**.
6. Drag the **Megamenu Item : Shop** box and drop it under any existing menu as a submenu.<br/>
![](http://transvelo.github.io/docs/mybag/images/static-block-submenu.png)
7. Click on **Save Menu**.
8. Now the megamenu will is added as a submenu and it should look like this: <br/> ![](http://transvelo.github.io/docs/mybag/images/megamenu-as-submenu.png)

<div class="alert alert-danger">**Alert :** Please do not use **Static Content Block** as a top level menu item or as submenu menu item beyond level 1. Do not use other menu items with **Static Content Block** menu item.</div>

