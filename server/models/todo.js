import mongoose from 'mongoose';

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    color: String,
    done: Boolean,
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;
