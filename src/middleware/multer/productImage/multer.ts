    // src/core/middleware/multer/multer.ts
    import multer from 'multer';

    // const storage = multer.memoryStorage();
    const storage = multer.diskStorage({}); 
    const upload = multer({ storage,
        
     });

    export default upload;
