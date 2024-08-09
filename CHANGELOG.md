# Changelog

New features, API changes & bug fixes are tracked here. We try our best to keep this comprehensive.

## 42xx

* Lists
	* setting `my_list.select_sk` to a Softkey object overrides the main Select button of a list
	* after sorting items, use `my_list.restore_selection`  to make `.selected`  reflect the order of the selected item
* Addons
	* SVG icons in your addon's `icons/` directory can be accessed using `get_icon( icon_name )`
		* if no `icon_name` is given, it returns the addon's primary icon

## 41xx
* Lists
	* `my_list.on_changes( callback )` reports `set` and `remove` events using Hooks
* Accounts Addon
* Access Addon
* Sockets Addon
	* moved out SocketIO from the core, now it's an addon
	* it will provide a unified API to other addons
	* it automatically tracks all socket connections
	* validates contexts using acknowledgements
* Softkeys
	* Added `short`, it is a short name that is shown on smaller screens like `'Reactiv.'` instead of `'Reactivate'`
* Network
	* `intercept`s now use Hooks API
* Hooks
	* Introducing `until_many`, aggregates results from many promises
* Themes Addon
	* Auto detects system theme
* Addons UI Addon
	* this addon has been created to ease deving non-essential parts of the Addons module
	* Sorts the list by moving active addons to the top
	* Dims inactive addons
* Addons
	* now provides its list using `Addons.get_list()`
	* Addons can now be marked `system` and `private`
	* Upon Deactivation
		* listeners are now auto-remove()'d

## 40xx
* Lists & Recyclers are now auto-destroy()'d on Addon deactivation

## 37xx
* Addons
	* Upon Deactivation
		* Globals are auto removed 
		* Hooks are auto-remove()'d
