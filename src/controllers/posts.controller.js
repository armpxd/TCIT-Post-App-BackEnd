import { post } from "../models/post.js";

export const getPost = async (req, res) => {
    try {
        const posts = await post.findAll();
        res.json(posts);
    } catch( err ) {
        return res.status(500).json({message: err.message});

    }
}

export const createPost = async (req, res) => {
    const {name, description} = req.body;

    try {
       const newPost = await post.create({
            name,
            description 
        });
    res.json(newPost);
        
    } catch (err) {
        return res.status(500).json({message: err.menssage});
    }
}

export const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedPost = await post.findByPk(id);
        await post.destroy({
            where: {
                id,
            },
        });
        res.json(deletedPost);
    } catch (err) {
        return res.status(500).json({ message: err.message});
    }
}