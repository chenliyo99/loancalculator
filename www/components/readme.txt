Create a new Component
=============================================

1 - Run in console/terminal

python templateCopy.py MyComponentName '$TEMPLATE$'

where MyComponentName is the name of the new component and '$TEMPLATE$' is the key you have to use for replacing in the component template.


2 - Add the following require in the file: src/app/storyboard/loader.js

goog.require("idr.components.MyComponentName");


3 - Add the following require in the file: src/app/runtime/runtime.js

goog.require("idr.runtime.MyComponentName");


4 - Replace the following in the file src/app/components/<new_component>/mycomponentname.js 

4.1 - "%CATEGORY%" keyword by the real category 

idr.components.Component.call(this, "MyComponentName", "%CATEGORY%");

4.2 - $TEMPLATE_TITLE$ keyword by the entry from the dictionary for tne new component

this.addMenuEntry("MyComponentName.BLANK", storyboardDictionary.menuEntry$TEMPLATE_TITLE$, "default-icon");


5 - Add a new instance in the components array in the Loader constructor. File: src/app/storyboard/loader.js:

    /** @private */
    this._components = [
          ...
          new idr.components.MyComponentName()
    ];

