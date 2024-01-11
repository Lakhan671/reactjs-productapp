import React from "react";
import { useDispatch } from 'react-redux';
import { productsActions } from '../../store/productsStore';
import { useFormik } from "formik";
import { useSelector } from 'react-redux';
import {useNavigate } from 'react-router-dom';
import './FormSection.css';
const validate = (values) => {
  const errors = {};
  if (!values.description) {
    errors.description = "Description cannot be empty";
  }

  if (!values.category) {
    errors.price = "category is required";
  } 

  if (!values.price) {
    errors.price = "price is required";
  } else if (values.price.length < 0) {
    errors.price = "price must not be less than 0 ";
  }
  return errors;
};

function FormSection() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.editProduct);
  const isEdit = useSelector((state) => state.products.isEdit);
  function uuid(){
    let  randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
   return randLetter + Date.now();
  }

  let initalValue={
    description: "",
    category: "",
    isSpecial: false,
    price: "",
    expDate: "",
    pid:uuid()
  };
  const formik = useFormik({
    initialValues: isEdit?product:initalValue,
    validate,
    onSubmit: (values) => {
      if(!isEdit){
        dispatch(productsActions.addProduct(values));
        initalValue.pid=uuid();
      }else{
        dispatch(productsActions.editProduct(values));
        dispatch(productsActions.isEditStatus(false));
        
      }
      formik.setValues(initalValue);
      navigate('/');
    },
  });

  return (

    <div className="section-container">
      <div className="row">
         <div className=" heading justify-content-center align-items-center">Add Product</div>
      </div>
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-sm-12 col-md-6">
          <div className="form-container">
            <form onSubmit={formik.handleSubmit}>
              <textarea
                type="text"
                placeholder="Description"
                name="description"
                id="description"
                onChange={formik.handleChange}
                value={formik.values.description}
                className="form-control"
              />
              {formik.errors.description ? (
                <div className="error">{formik.errors.description}</div>
              ) : null}

              <label  className="form-label">Category list (select one):</label>
              <select className="form-select mb-2" id="category" name="category" onChange={formik.handleChange}
                value={formik.values.category}>
                <option>vegetables</option>
                <option>meat</option>
                <option>furniture</option>
                <option>Electronic</option>
                <option>Toys & games</option>
              </select>
              <input
                type="number"
                placeholder="Price"
                name="price"
                id="price"
                className="form-control"
                onChange={formik.handleChange}
                value={formik.values.price}
              />

              {formik.errors.price ? (
                <div className="error">{formik.errors.price}</div>
              ) : null}

              <input
                type="date"
                placeholder="Expire date"
                name="expDate"
                id="expDate"
                onChange={formik.handleChange}
                value={formik.values.expDate}
              />

              {formik.errors.expDate ? (
                <div className="error">{formik.errors.expDate}</div>
              ) : null}
              <div className="form-check">
                <input
                  type="checkbox"
                  placeholder="isSpecial"
                  name="isSpecial"
                  id="isSpecial"
                  className="form-check-input check-box-size"
                  onChange={formik.handleChange}
                  checked={formik.values.isSpecial}
                /><label className="form-check-label mt-1 mx-2 h6">is on special</label>
                {formik.errors.isSpecial ? (
                  <div className="error">{formik.errors.isSpecial}</div>
                ) : null}
              </div>

              <button
                type="submit"
                className="submit-btn text-white cursor-pointer"
              >
                Save Products
              </button>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
}

export default FormSection;
