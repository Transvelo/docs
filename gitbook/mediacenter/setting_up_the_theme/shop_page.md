# Product Archive/Shop Page

A Product Archive/Shop page is a **WooCommerce** page used to display the products added. It displays according to the settings given in **WooCommerce > Settings > Products**.

## Available Layouts

In **MediaCenter** theme, the shop page can be displayed in 3 available layouts which are :
1. **Left Sidebar** - This is the default layout of Shop page in our theme. It has a content section occupying 75% of the screen and a widgetized sidebar section to its left occupying 25% of the screen.
2. **Right Sidebar** - This layout is same as the Left Sidebar layout except that the sidebar section is in the right side of the screen.
3. **Full-width** - This layout does not contain any sidebars. The entire screen has the content section.

You can select the layout of the shop from **MC Options > Shop Tab > Shop Page Settings > Shop Page Layout**.

## Content Section

The Content Section of the Shop Page displays either Products or Categories or both depending on the choice given in **Shop Page Display** option under **WooCommerce > Settings > Products**.

### Displaying Product Categories

Product Categories/ Subcategories are displayed according to the layout in grids. It will display the **Product Category image** and **Product Category Title**. We recommend displaying only Products in Product Archive/Shop Pages.

### Displaying Product Items

#### Number of product items per row

In Product Archive/Shop Page, product items can be displayed in various ways depending on the **Product Item size** and **the layout** chosen. The table below will give an idea about the number of product items displayed per row :

| Product Item Size / Shop Layout | With Sidebar | Without Sidebar |
| -- | -- | -- | -- |
| **Size Small** | 4 items per row | 6 items per row |
| **Size Medium** | **3 items per row** (default) | 4 items per row |
| **Size Large** | 2 items per row | 3 items per row |

You can select the Product Item Size under **MC Options > Shop Tab > General**.

#### Number of product items displayed per page

Once we have chosen the shop layout and product item size, we'll have the number of product items displayed per row. The number of product items per page is recommended to be a multiple of the number of product items displayed per row.

You can set the number of items displayed from **MC Options > Shop Tab > General > Number of Products Per Page**

#### Animating the Product Items

Product items can be animated when the appear on viewport. More than 25+ CSS3 animation effects are available which includes :

1. BounceIn
2. FadeIn
3. FlipIn
4. LightSpeedIn
5. RotateIn
6. RoleIn
7. ZoomIn

You can set whether you want to animate the product item from **MC Options > Shop Tab > Product Item Settings > Product Item Animation **

#### Lazy Loading

Lazy loading is a technique used to defer the loading of an image until the point at which it is needed i.e. when the image appears in the viewport. This will contribute to faster page loading since the images are not loaded until required.

You can enable/disable Lazy loading of Product Item images from **MC Options > Shop Tab > Product Item Settings > Echo Lazy Loading**

#### Product Item List View

All product items has 2 views Grid and List view. The list view is enabled and the user will have the option to switch between the views via the Control bar which is present just above the product items.

## Sidebar Section

Shop Sidebar if enabled in the layout has two widgetized areas.

1. **Product Filters** - This will have all the widgets used for layered navigation.
2. **Shop Sidebar** - This will have the general widgets.

![](http://transvelo.github.io/docs/mediacenter/images/shop-sidebars.png)

Both the widgetized areas can be populated from **Appearance > Widgets**

### Product Filters Sidebar

This widgetized area contains all the widgets used for layered navigation. In the default preview we have used :

1. **WooCommerce Layered Nav** Widget : To filter products by attributes.
2. **MediaCenter Brands Filter** Widget : To filter products by brands.
3. **WooCommerce Price Filter** Widget : To filter products by price.

![](http://transvelo.github.io/docs/mediacenter/images/sidebar-product-filters.png)

### Shop Sidebar

This widgetized area contains widgets that generally go into shop's sidebar. In the default preview we have used :

1. **WooCommerce Product Categories** Widget : Displays list of Product Categories.
2. **WooCommerce Products** Widget : Configured to display **On-Sale Products**.
3. **WP Text** Widget: To display an image banner.
4. **WooCommerce Products** Widget : Configured to display **Featured Products**.

![](http://transvelo.github.io/docs/mediacenter/images/sidebar-shop.png)
