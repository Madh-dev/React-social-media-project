import React from 'react'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

export const CreateForm = () =>{

    const schema = yup.object().shape({
        title:yup.string().required('You must add a title.'),
        description: yup.string().required('You must add description.')
    })
    const {register,handleSubmit} = useForm({
        resolver: yupResolver(schema)
    })
const onCreatePost = (data:any)=>{
    console.log(data)
}
    return(
        <form onSubmit={handleSubmit(onCreatePost)}>
            <input type='text' placeholder='Title....' {...register('title')} />
            <textarea  placeholder='Description....' {...register('description')} />
            <input type='submit' className="submitForm" />
        </form>
    )
}