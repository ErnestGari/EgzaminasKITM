import React, {useEffect, useState} from 'react'
import { deleteFilm, listFilms } from '../services/FilmsService'
import { useNavigate } from 'react-router-dom'

const ListFilmComponent = () => {

    const [films, setFilms] = useState([])

    const navigator = useNavigate();


    useEffect(() => {
        getAllFilms();
    }, [])

    function getAllFilms(){
        listFilms().then((response) => {
            setFilms(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewFilm(){
        navigator('/add-film')
    }

    function updateFilm(id){
        navigator(`/edit-film/${id}`)
    }

    function removeFilm(id){
        console.log(id);

        deleteFilm(id).then((response) =>{
            getAllFilms();
        }).catch(error => {
            console.error(error)
        })
    }

      return (
    <div className='container'>

        <h2 className='text-center'>List of Films</h2>
        <button className='btn btn-primary mb-2' onClick={addNewFilm}>Add Film </button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Film id</th>
                    <th>Film Name</th>
                    <th>Film Description</th>
                    <th>Film Imdb</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
    Array.isArray(films) && films.length > 0 && films.map(film =>
                        <tr key={film.id}>
                            <td>{film.id}</td>
                            <td>{film.name}</td>
                            <td>{film.description}</td>
                            <td>{film.imdb}</td>
                            <td>
                                <button className='btn btn-info' onClick={() => updateFilm(film.id)}>Update</button>
                                <button className='btn btn-danger' onClick={() => removeFilm(film.id)} style={{marginLeft: '10px'}}>Delete</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>

    </div>
  )
}


export default ListFilmComponent