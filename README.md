# TADA Sudoku

TADA Sudoku is sudoku checker api. Built on top of nodeJS and expressJS.

# Installation

for development purpose simply pull or download the code, install the dependencies and devDependencies and start the server.

```sh
$ cd tada-sudoku
$ npm i
$ node index.js
```

For production environments...

```sh
$ npm install --production
$ NODE_ENV=production node app
```

# How to use

[POST] {your_url}/api/validate
HEADERS:
Content-type: application/json
BODY:

```json
{
  "data": [
    [2, 7, 5, 1, 9, 8, 3, 6, 4],
    [1, 4, 3, 5, 7, 6, 9, 2, 8],
    [8, 9, 6, 2, 4, 3, 1, 7, 5],
    [3, 2, 8, 4, 6, 1, 7, 5, 9],
    [4, 5, 7, 9, 8, 2, 6, 1, 3],
    [6, 1, 9, 7, 3, 5, 4, 8, 2],
    [7, 8, 1, 3, 2, 4, 5, 9, 6],
    [5, 3, 2, 6, 1, 9, 8, 4, 7],
    [9, 6, 4, 8, 5, 7, 2, 3, 1]
  ]
}
```

### Docker

TADA sudoku is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 80, so change this within the Dockerfile if necessary. When ready, simply use the Dockerfile to build the image.

```sh
cd tada-sudoku
docker build -t indra/tadasudoku .
```

This will create the tada-sudoku image and pull in the necessary dependencies.

Once done, run the Docker image and map the port to whatever you wish on your host. In this example, we simply map port 80 of the host to port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -p 80:8080 <youruser>/tada-sudoku
```

Verify the deployment by testing the validate api (Please see section how to use).

## License

MIT
