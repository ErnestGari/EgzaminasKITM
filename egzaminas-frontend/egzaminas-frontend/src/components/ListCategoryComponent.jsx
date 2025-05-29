import React, {useEffect, useState} from 'react'
import { deleteCategory, listCategory } from '../services/CategoryService'
import { useNavigate } from 'react-router-dom'

const ListCategoryComponent = () => {

    const [categories, setCategories] = useState([])

    const navigator = useNavigate();


    useEffect(() => {
        getAllCategories();
    }, [])

    function getAllCategories(){
        listCategory().then((response) => {
            setCategories(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewCategory(){
        navigator('/add-category')
    }

    function updateCategory(id){
        navigator(`/edit-category/${id}`)
    }

    function removeCategory(id){
        console.log(id);

        deleteCategory(id).then((response) =>{
            getAllCategories();
        }).catch(error => {
            console.error(error)
        })
    }

      return (
    <div className='container'>

        <h2 className='text-center'>List of Categories</h2>
        <button className='btn btn-primary mb-2' onClick={addNewCategory}>Add Category </button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Category id</th>
                    <th>Category Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    categories.map(category =>
                        <tr key={category.id}>
                            <td>{category.id}</td>
                            <td>{category.category_name}</td>

                            <td>
                                <button className='btn btn-info' onClick={() => updateCategory(category.id)}>Update</button>
                                <button className='btn btn-danger' onClick={() => removeCategory(category.id)} style={{marginLeft: '10px'}}>Delete</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>

    </div>
  )
}


export default ListCategoryComponent