Test assessment.  
 
A simple React component that gets random images from Flickr every X seconds or by click.

In the project directory run:

`npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

`npm test`

Launches the test runner in the interactive watch mode.<br>

`npm run build`

Builds the app for production to the `build` folder.<br>

### Example

```
//...

import RandomImage from './randomImage'

<RandomImage interval={3000}/>

//...
```

### Props

#### interval

Type: Number: 10000
  
New image fetching interval in ms.

#### ...props
Any valid `<img/>` props. 