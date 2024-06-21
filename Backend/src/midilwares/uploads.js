const multer = require('multer');

// For Food images
const foodStorage = multer.diskStorage({
    destination: 'uploads/foodimage',
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}${file.originalname}`);
    }
});


// For Avatar
const avatarStorage = multer.diskStorage({
    destination: 'uploads/userimage',
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}${file.originalname}`);
    }
});


const uploadFood = multer({ storage: foodStorage });


const uploadAvatar = multer({ storage: avatarStorage });

module.exports = { uploadFood, uploadAvatar };
