# Next Steps

## Foods - ability to calculate CHO per Portion

* Check that `nf_total_carbohydrate` field is CHO/100g
* ~~Add property on Controller which is "Portion Weight" (PW) - this will be populated by the user and is initially set to 100g~~
* ~~Add input of `type=number` which allows the user to set the PW (in grams)~~
  * ~~add `action` handler which `set`s the PW on the Controller~~
* ~~Add computed property "Portion CHO" on Food Controller which is: (Food's CHO per 100g)/100 * PW - this should be set to observe PW (via `property` so that when this is changed the "Portion CHO" value is recalculated)~~
* ~~Print value of "Portion CHO" to Food View~~
* Utilise Ember Data for Foods
  * create custom Adapter for Foods 
  * test that Food queries are being cached by Ember Data to avoid multiple API calls
* Nest Food single page underneath Foods resource to ensure nav active state is correct

## Meals - ability to add "Food Portions" to a Meal

* ~~Create "Portions" field defined directly on individual Meal model~~
  * ~~Question: do we need this to be a seperate resource or can we define directly on the Model?~~
  * ~~Portion contains: i) Reference to existing Food ii) Portion amount [of that Food] in `g` of CHO~~
* ~~Add button to "Food" single View to allow user to add the current Portion to the current Meal:~~
  * ~~add select element which displays a list of all the Meals~~
  * ~~add submit button which allows user to submit a selected Meal~~
  * ~~conditionalise display of select & button (using `{{#if}}`) based on there being a positive "Portion CHO" value of Controller~~
* ~~Add action to Food Controller to creation new Portion on a selected Meal:~~
  * ~~add action on Food Controller~~
  * ~~process form values into reusable vars for Food, Food Portion CHO and Meal~~
  * ~~get record for Meal~~
  * ~~set new Portion item on Meal's "Portions" field containing the values for the submitted Food and Portion~~
  * ~~save the record to persist it~~
  * ~~Show links to for user as suggested next steps: "View Meal" (the Meal) and "Find another Food" (search page)~~
* Display message on addition of Portion
  * set property "portionAdded" which is set to false every time the user transitions out of the Meal view
  * set portionAdded property to true on transition from Portion creation process
  * conditionalise display of "Success" message based on portionAdded property


## Header
* Investigate and establish best method for managing Header toolbar buttons (eg: "Cancel", "New"...etc)






## Create reusable Settings

* Create "Settings" Route and template
* Create FIXTURE model for Settings:
  * Insulin <--> CHO ratio
  * Active Meal - reference to a single Meal which can be manually set by the user or is automatically set when the user adds a Portion to the Meal

## Calculate Insulin dose for individual Food

* Add "Insulin Dose" as a nested Route under "Food" (singular!) resource
* Add "Insulin Dose" template with dummy content
* Add less visually prominent button to calculate Insulin Dose
* Conditionalise display of button based on there being a positive "Portion CHO" value of Controller
* Add action handler on Food Controller which transitions to the "Insulin Dose" route
* Add Insulin Dose Controller
* Question: can we get the :param for the Food ID from a url like /foods/:food_id/dose ?
* Question: should we be able to link directly to a Food's Portion's Insulin Dose (a bit overkill?)?
* Question: can we use url query params for this purpose