<p align=center><img src=./icon.svg width=128px /></p>

# Dewaan
Tiny self-hosted modern forum software for small companies.

# Database
Dewaan uses MongoDB to store data.

# Getting Started
Only tested on Ubuntu 22 LTS. Your mileage may vary.

- Install [Docker](https://docs.docker.com/engine/install/ubuntu/)
- For Development *(optional)*
	- Install [Mudeer](https://github.com/xorasan/mudeer)
- Clone Dewaan repo
	- `git clone https://github.com/xorasan/dewaan.git`
- For Production
	- Get the latest stable release of Dewaan (**TODO** needs to be published)
- Setup important variables
	- Create a file called `.env` in your Dewaan directory and paste this into it
		```
		DEWAAN_MONGO_URI=mongodb://PLEASE_CHANGE_ME:PLEASE_CHANGE_ME@dewaan-mongodb:27017/
		DEWAAN_MONGO_USER=PLEASE_CHANGE_ME
		DEWAAN_MONGO_PASS=PLEASE_CHANGE_ME
		DEWAAN_MONGO_DB=dewaan
		DEWAAN_MONGO_PORT=27017
		DEWAAN_WEB_PORT=3060
		```
	- This file is used by Docker to feed environment variables to running instances of Dewaan
	- `DEWAAN_MONGO_DB` is the name of the MongoDB database Dewaan will use to store its data
	- `DEWAAN_MONGO_PORT` can help run multiple instances of MongoDB on the same machine
	- `DEWAAN_WEB_PORT` this is where Dewaan's Web UI will be accessible e.g `localhost:3060`
	- `DEWAAN_MONGO_USER` & `DEWAAN_MONGO_PASS` should be changed *before* you build and run the image since these will setup access to your database, leaving them unchanged is a security hazard
	- `DEWAAN_MONGO_URI` this is an old *deprecated* variable that will soon be removed
	- **TODO** add a one-time step in Dewaan Web to configure these variables or generate them intelligently
- Build the image
	- `./build-docker-image.sh`
- Run the image
	- `docker compose up`
	- you can use `docker compose up -d` to run it in the background
	- `docker compose logs` to view the logs if running in the background
- Create your *owner* account
	- **TODO** make this step more user friendly
	- Visit `localhost:3060`
	- Sign up, pick a memorable *username* and a strong password
	- Once logged into Dewaan, use `modify-owner.js <username> 1` to make yourself the owner of your brand new Dewaan instance!
- Have fun!

# Goals
[TODO](https://github.com/xorasan/dewaan/blob/main/TODO.md)






