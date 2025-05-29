import React, { useEffect, useState } from 'react'
import { createFilm, getFilm, updateFilm } from '../services/FilmsService'
import { useNavigate, useParams } from 'react-router-dom'

const FilmsComponent = () => {
    const [name, setName] = useState('')
    const[description, setDescription] = useState('')
    const[imdb, setImdb] = useState('')

    const {id} = useParams();

    const [errors, setErrors] = useState({

        name: '',
        description: '',
        imdb: ''

    })

    const navigator = useNavigate();

    useEffect(() => {
        if(id){
            getFilm(id).then((response) => {
                setName(response.data.name);
                setDescription(response.data.description);
                setImdb(response.data.imdb);
            }).catch(error => {
                console.error(error);
            })
        }
    }, [id])

    function saveOrUpdateFilm(e){
        e.preventDefault();

        if(validateForm()){
            
            const film = {name, description, imdb}
            console.log(film);

            if(id){
                updateFilm(id, film).then((response) => {
                    console.log(response.data);
                    navigator('/films')
                }).catch(error => {
                    console.error(error);
                })
            }else{
                createFilm(film).then((response) => {
                    console.log(response.data);
                    navigator('/films')
                }).catch(error => {
                    console.error(error);
                })
            }
        }
    }

    function validateForm(){
        let valid = true;

        const errorsCopy = {... errors}

        if(name.trim()){
            errorsCopy.name = '';
        } else {
            errorsCopy.name = "Name is required";
            valid = false;
        }

        if(description.trim()) {
            errorsCopy.description = '';
        }else{
            errorsCopy.description = "Description is required";
            valid = false;
        }

        if(imdb.trim()) {
            errorsCopy.imdb = '';
        }else{
            errorsCopy.imdb = "Imdb rating is required";
            valid = false;
        }

        setErrors(errorsCopy)

        return valid;
    }

    function pageTitle(){
        if(id){
            return <h2 className='text-center'>Update Film</h2>
        }else {
            <h2 className='text-center'>Add Film</h2>
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
                            <label className='form-label'>Film Name:</label>
                            <input
                                type = 'text'
                                placeholder='Enter Film Name'
                                name='name'
                                value={name}
                                className={`form-control ${ errors.name ? 'is-invalid': ''}`}
                                onChange={(e) => setName(e.target.value)}
                            > 
                            </input>
                            {errors.name && <div className='invalid-feedback'>{errors.name}</div>}

                        </div>
                        
                        <div className='form-group mb-2'>
                            <label className='form-label'>Description:</label>
                            <input
                                type = 'text'
                                placeholder='Enter Film Description'
                                name='description'
                                value={description}
                                className={`form-control ${ errors.description ? 'is-invalid': ''}`}
                                onChange={(e) => setDescription(e.target.value)}
                            > 
                            </input>
                            {errors.description && <div className='invalid-feedback'>{errors.description}</div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Imdb rating:</label>
                            <input
                                type = 'text'
                                placeholder='Enter Imdb Rating'
                                name='imdb'
                                value={imdb}
                                className={`form-control ${ errors.imdb ? 'is-invalid': ''}`}
                                onChange={(e) => setImdb(e.target.value)}
                            > 
                            </input>
                            {errors.imdb && <div className='invalid-feedback'>{errors.imdb}</div>}
                        </div>

                        <button className='btn btn-success' onClick={saveOrUpdateFilm}>Submit</button>

                    </form>

                </div>

            </div>

        </div>


    </div>
  )


}

export default FilmsComponent