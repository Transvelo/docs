# Home v5 with Visual Composer

Home v5 of Pizzaro is built using **Visual Composer**.It has 6 rows. The **Visual Composer** Backend editor of the page look like this

![](http://transvelo.github.io/docs/pizzaro/images/vc-home-v5.png)

## The Code

Please switch your editor to classic mode and paste the code given here :

```
[vc_row][vc_column][rev_slider_vc alias="home-v5-slider" el_class="home-v5-slider"][/vc_column][/vc_row][vc_row][vc_column][pizzaro_product_categories pre_title="Pick your taste" section_title="Explore Menu" orderby="name" order="ASC" limit="4" slugs="burgers,coffees,cold-drinks,desserts"][/vc_column][/vc_row][vc_row][vc_column][vc_tta_tabs active_section="1" el_class="pizzaro-vc-tabs"][vc_tta_section title="Wraps" tab_id="1490260607077-17f86a14-c29b"][pizzaro_products shortcode_tag="product_category" category="cold-drinks" limit="5" columns="5"][/vc_tta_section][vc_tta_section title="Pizza Sets" tab_id="1490260607132-b2d31380-e8d4"][pizzaro_products shortcode_tag="products" product_id="45,51,48,56,58" limit="5" columns="5"][/vc_tta_section][vc_tta_section title="Burgers" tab_id="1490260611396-a707fe1d-1743"][pizzaro_products shortcode_tag="product_category" limit="5" columns="5" category="burgers"][/vc_tta_section][/vc_tta_tabs][/vc_column][/vc_row][vc_row][vc_column][pizzaro_banner bg_image="76" title="STUDENT HAPPY HOURS" action_link="#" condition="<em>*</em>Only in Mondays in local from 8:00 am to 9:00 pm." el_class="center-right"][/vc_column][/vc_row][vc_row][vc_column][pizzaro_products shortcode_tag="product_category" title="Todays Delicious Pasta" limit="6" columns="6" category="pasta"][/vc_column][/vc_row][vc_row][vc_column][pizzaro_newsletter title="Subscribe to Newsletter" marketing_text="Subscribe to receive our weekly Hot Promotions every Monday!" bg_image="77"][/vc_column][/vc_row]
```
