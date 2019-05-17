# express-endpoint
Express endpoint running on docker


## Steps Involved

- [x] Setup express server
- [x] Setup Docker Comntainer
- [ ] Profit 🧀 🧀 🧀

### Setup express endpoint

Docker must be installed. To check this type `docker --version` in the console.

Create normal express app and pick a server

```javascript
import express from 'express';

// Set default port
const PORT = 5000;

// Set up the express app
const app = express();

// Root URL
app.get('/', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'Server up and running!'
    })
});

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});
```

### Setup docker

* Create Dockerfile

```bash

touch Dockerfile

```

* Enter details in dockerfile
  * This specifies which docker image you want to use as a base
  * Also spefies the name of the working directory 
  * Here you can specify the command to install dependencies `npm install`
  * You can also specify the command to run the app `npm start` 

```yaml
# My first docker file.
FROM node:9-slim
# WORKDIR specifies the directory our
# application's code will live within
WORKDIR /app
# We copy our package.json file to our
# app directory
COPY package.json /app
# We then run npm install to install
# express for our application
RUN npm install
# We then copy the rest of our application
# to the app direcoty
COPY . /app
# We start our application by calling
# npm start.
CMD ["npm", "start"]
```

Now need to build this image:

```bash
docker build -t node-docker .
```

The build process will begin and output progress to console and assuming all went well will end with a `Successfully built <hash id>` nessage

To now run our image we need to run the following:


```bash
docker run -d -p 9000:5000 node-docker
```


* *** Pay special attention to the `-p` arguments, the format is `<extenal port>:<internal port>` ***
* This means if I have my app running on port 5000 within express that I will map that to port 9000 for the outside world.
* The `-d` means to run detached (no logging in console)
* If you want it to be interactive, replace with `-it`

The output from console should show a hash id.

To see the image is up and running 