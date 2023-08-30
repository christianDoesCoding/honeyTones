import express from 'express';
// import mongoose from 'mongoose'; // Uncomment if you plan to use mongoose
import path from 'path';
import { profileController } from './ProfileController.js';  // Adjust the path as necessary

const app = express();
const router = express.Router();
const firstObj = './songSelector';


app.get('/', (req, res) => {
    return res.status(200).sendFile(path.resolve(__dirname, './src/index.html')); 
})
app.get('/styles.css', (req, res) => {
    return res.status(200).sendFile(path.resolve(__dirname, './src/styles.css'))
})

//after picking color, go to /links
app.get('/songSelector', profileController.selectSong, (req, res) => {
    return res.status(200).sendFile({firstObj: res.locals.linkResp});
  });

router.post('/songSelector', require('.profileController').selectSong);

//import { profileController } from '/profileController'

//const PORT = 8080; //3000?


//app.use(express.json()) //parse JSON from incoming request
//STRETCH: automatically goes to login once starting app


//after correct login, go to homepage



//links will pick specific color chosen
    //is adding an additional links directory from home page necessary?
    //logic is to use a (not-viewable) links page to direct to specific color


    //Explore button?
    
    
    //handling clicks on song buttons//opens page into a new tab
    //opening window upon returning to webpage after listening to song
    
    //STRETCH: rendering AI picture
    //STRETCH: accessing a friend's profile
  
    //STRETCH: 404 error
        /*app.use((req, res, next) => {
            return res.status(404).sendFile(path.resolve(___dirname, './src/404.html'));
        })
        */

//global error handler
    /*app.use((err, req, res, next) => {
        const defaultErr = {
            log: 'Express error handler - unknown middleware error',
            status: 500,
            message: { err: 'An error occurred' },
        };
    const errorObj = Object.assign({}, defaultErr, err)
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
    })
    */
    
/*
app._router.listen(PORT () => console.log(`Listening on PORT: ${PORT}`));
*/

export default router;