# Changelog

New features, API changes & bug fixes are tracked here. We try our best to keep this comprehensive.

## 43xx

* Database Addon
  * anything related to `sync` has been moved to Synchronizer, Database no longer interacts with Network
* Synchronizer
  * handles `sync` logic by itself, Database is now only used for memory
  * when returning objects to Recycler's adapter on `get`, cached indices are assigned as the objects `.order`
* Sockets
  * `Sockets.emit_by_context( context_checker, ...args )` can be used to check context & emit events per connection depending on the context
* Recycler
  * `.order` properties in objects are now the preferred method of figuring out where an element is gonna spawn
  * when changing `.order` , elements are swapped, new `.order`s are reflected in objects
  * `.insert` now always uses `.reorder` to assign new `.order`s based on the very first elements `.order`

## 42xx

* Recycler
  * updated items now blip for 300ms
  * `recycler.get_selection()` to get an array of selected objects from its list
  
* Lists
  * setting `my_list.select_sk` to a Softkey object overrides the main Select button of a list
  * after sorting items, use `my_list.restore_selection`  to make `.selected`  reflect the order of the selected item
* Addons
  * `Addons.add_global|remove_global` now add / remove globals in all active addon contexts
    * you can listen for this changes using
      * `Hooks.run('addons-global-added', { source_addon, object_name });`
      * `Hooks.run('addons-global-removed', { source_addon, object_name });`

  * `Addons.get_global()`  to get a global variable, use case: avoid `need` for an addon, listen to its activation & get its global from there 
  * SVG icons in your addon's `icons/` directory can be accessed using `get_icon( icon_name )`
    * if no `icon_name` is given, it returns the addon's primary icon
  * `collect_hook( hook )` to garbage collect it later, for instance, when you wanna override module lists that use hooks internally, tho you can't destroy the list, you can at least collect the hooks


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
