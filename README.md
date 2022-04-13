# ImageWebApi

The project is a webApi to resize images.

## Tools

Node, Express, TypeScript, Jasmine, Sharp

## Usage

```sh
npm run dev
http://localhost:7010/api/images/
http://localhost:7010/api/images?filename=1028.png&width=200&height=200
```
> Note: `filename&width&height` are required for Image resize.

> Note: Add source image to `imgages/full` folder and final images is placed in `imgages/thumb` folder.

## License
[MIT](https://choosealicense.com/licenses/mit/)
