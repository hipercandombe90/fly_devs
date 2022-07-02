import Task from '../models/Task.mjs';
import {getPagination} from '../libs/gerPagination.mjs'

export const findAllTasks = async (req, res) => {
  try {
    const {size, page, name, age} =req.query
   const condition = name ? {
    name : {$regex: new RegExp(name), $options: "i"},
   }
   : {};
   const condition2 = age ? {
    age : {$regex: new RegExp(age), $options: "i"},
   }
   : {};

    const {limit, offset} = getPagination(page, size);
    const tasks = await Task.paginate(condition, condition2, {offset ,limit});
    res.json(tasks)
    }catch (error) {
      res.status(500).json({
        message: error.message || 'Something goes wrong',
      });
    }
    };

export const CreateTask = async (req, res) => {
  if (!req.body.name) {
    return res.status(400).send({message: ' el nombre no puede ser nulo'})
  }
  try {
        const newTask = new Task({ 
          name: req.body.name, 
          lastname: req.body.lastname, 
          age: req.body.age});
      const taskSaved = await newTask.save();
        res.json(taskSaved)
    } catch (error) {
      res.status(500).json({
        message: error.message || 'Create goes wrong',
      });
    }
    };

export const findOneName = async (req, res) => {
  const tasks = await Task.find().pretty()
}


export const findOneTasks = async (req, res) => {
  try {
  const { id } = req.params;
      
  const task = await Task.findById(id);
  // validar si existe la tarea
      if (!task) 
      return res
      .status(404)
      .json({message: 'El usuario no existe'});
       res.json(task);
       // mensaje de error por error interno
} catch (error) {
  res.status(500).json({
    message: error.message || `Error devolviendo un usuario ${id}`,
  });
}
};


export const deleteTasks = async (req, res) => {
  const {id} = req.params;
  try {
         await Task.findByIdAndDelete(id)
         res.json({
          message: 'Usuario eliminado correctamente'
         });
         } catch {
          res.status(500).json({
           message: `No se pudo elimiar el id:${id} del usuario`
          });
          }
        }

export const updateTask = async (req, res) => {
await Task.findByIdAndUpdate(req.params.id, req.body)
res.json({message: 'Edad actualizada'})
} 