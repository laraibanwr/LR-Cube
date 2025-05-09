import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const decodedData = jwt.verify(token, 'your_secret_key');
        req.userId = decodedData?.id;
        next();
    } catch (error) {
        console.error(error);
        return res.status(403).json({ message: "Forbidden" });
    }
};

export default auth;
