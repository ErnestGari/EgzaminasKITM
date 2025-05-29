import React, { useEffect, useState } from 'react'
import { createCategory, getCategory, updateCategory} from '../services/CategoryService'
import { useNavigate, useParams } from 'react-router-dom'

const CategoriesComponent = () => {
    const [category_name, setCategoryName] = useState('')

    const {id} = useParams();

    const [errors, setErrors] = useState({

        category_name: ''

    })

    const navigator = useNavigate();

    useEffect(() => {
        if(id){
            getCategory(id).then((response) => {
                setCategoryName(response.data.category_name);
            }).catch(error => {
                console.error(error);
            })
        }
    }, [id])

    function saveOrUpdateCategory(e){
        e.preventDefault();

        if(validateForm()){
            
            const category = {category_name}
            console.log(category);

            if(id){
                updateCategory(id, category).then((response) => {
                    console.log(response.data);
                    navigator('/categories')
                }).catch(error => {
                    console.error(error);
                })
            }else{
                createCategory(category).then((response) => {
                    console.log(response.data);
                    navigator('/categories')
                }).catch(error => {
                    console.error(error);
                })
            }
        }
    }

    function validateForm(){
        let valid = true;

        const errorsCopy = {... errors}

        if(category_name.trim()){
            errorsCopy.name = '';
        } else {
            errorsCopy.name = "Category name is required";
            valid = false;
        }

        setErrors(errorsCopy)

        return valid;
    }

    function pageTitle(){
        if(id){
            return <h2 className='text-center'>Update Category</h2>
        }else {
            <h2 className='text-center'>Add Category</h2>
        }
    }

    
  return (
    <div className='container'>
        <br></br>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {
                    pageTitle()
                }
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Category Name:</label>
                            <input
                                type = 'text'
                                placeholder='Enter Category Name'
                                name='category_name'
                                value={category_name}
                                className={`form-control ${ errors.category_name ? 'is-invalid': ''}`}
                                onChange={(e) => setName(e.target.value)}
                            > 
                            </input>
                            {errors.name && <div className='invalid-feedback'>{errors.category_name}</div>}

                        </div>
                        
                        <button className='btn btn-success' onClick={saveOrUpdateCategory}>Submit</button>

                    </form>

                </div>

            </div>

        </div>


    </div>
  )


}

export default CategoriesComponent