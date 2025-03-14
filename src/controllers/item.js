import ErrorHandler from '../middlewares/error.js';
import { Item } from "../models/item.js";


//  deleteItem, getItem,  

export const createItem = async (req, res,next) => {
  try {

    const { title, description, image, category, status, location, contactInfo } = req.body;
    await Item.create({
      title,
      description,
      image,
      category,
      status,
      location,
      contactInfo,
      user: req.user,
    });

    res.status(201).json({
      success: true,
      message: 'Item added Successfully',
    });

  } catch (error) {
    next(error);
  }
};



export const getItems = async (req, res, next) => {
  try {
    const { category } = req.query;

 
    const query = {};
    if (category) {
      query.category = category.toLowerCase();
    }

    const items = await Item.find(query);
    res.status(200).json(items);
  } catch (error) {
    next(error);
  }
};



export const updateItem = async (req, res, next) => {

  try {
    const { id } = req.params;
    const item = await Item.findById(id);

    const { title, description, image, category, status, location, contactInfo } = req.body;

    if (!item) {
      return next(new ErrorHandler('item not found', 404));
    }

    item.title = title || item.title;
    item.description = description || item.description;
    item.image = image || item.image;
    item.category = category || item.category;
    item.status = status || item.status;
    item.location = location || item.location;
    item.contactInfo = contactInfo || item.contactInfo;

    
    const updatedItem = await item.save();

    return res.status(200).json({
      success: true,
      message: 'Item updated successfully',
      updatedItem
    });
  } catch (error) {
    next(error);
  }
};

export const deleteItem = async (req, res, next) => {

  try {
    const { id } = req.params;
    const item = await Item.findById(id);

    if (!item) {
      return next(new ErrorHandler('Item not found', 404));
    }

    await item.deleteOne();

    res.status(200).json({
      success: true,
      message: 'Item Deleted!'

    })
  } catch (error) {
    next(error);
  }
};
export const getItem = async (req, res, next) => {

  try {
    const { id } = req.params;
    const item = await Item.findById(id);

    if (!item) {
      return next(new ErrorHandler('Item not found', 404));
    }

    res.status(200).json({
      success: true,
      item,

    })
  } catch (error) {
    next(error);
  }
};