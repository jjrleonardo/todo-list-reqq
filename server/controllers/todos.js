import mongoose from 'mongoose';

import Todo from '../models/todo.js';

export const getTodos = async (req, res) => {
    try {
        const todo = await Todo.find();

        res.status(200).json(todo);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createTodo = async (req, res) => {
    const todo = req.body;

    const newTodo = new Todo(todo);

    try {
       await newTodo.save();

       res.status(201).json(newTodo);
    } catch (error) {
        res.status(409).json({message: error.message});
    }

}

export const updateTodo = async (req, res) => {
    const { id } = req.params;
    const { title, description, color, done } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedTodo = { title, description, color, done, _id: id };

    await Todo.findByIdAndUpdate(id, updatedTodo, { new: true });

    res.json(updatedTodo);

}

export const deleteTodo = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Todo.findByIdAndRemove(id);

    res.json({ message: "Todo deleted successfully." });
}
