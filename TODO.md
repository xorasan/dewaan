# TODO

* [ ] Modules
	* [ ] divide into two kinds
	* [ ] shouldn't require compilation
	* [ ] should be able to load during runtime

* [ ] Store

* [x] Rooms
	* [ ] Sort
		* [x] sort by date created, both ways

* [x] Messages
	* [x] Pagination
		* [ ] limit sync to latest messages
		* [ ] load older on demand

* [x] Accounts
	* [x] Ownership
		* [x] cli tool to modify ownership
		* [x] show ownership status
		* [ ] deliver notifications about changes

* [x] Profile

* [x] Sessions

* [x] Deployment
	* [x] `DEWAAN_MONGO_PORT` & `DEWAAN_WEB_PORT` can be used to change default port so you can run multiple instances
	* [ ] Upload the latest package
	* [ ] Figure out a way to deliver packages more efficiently
	* [ ] Dewaan should support automatically updating itself to new stable versions

* [ ] Misc
	* [ ] Write tools to import from Rocket.chat and Mattermost
	* [x] Make the MongoDB connection string dynamic (eg: to allow connecting to dynamic docker containers)
	* [ ] Free time slots, users should be able to offer time slots in groups and DMs when they'll be free
		* [ ] these can then be used to schedule meetings
		* [ ] they should show up as vertical slots, limited by the next few days or a week or so
		* [ ] they also say something like in 2h or in 2.5d
		* [ ] horizontal line hints to show hours, days, weeks etc














