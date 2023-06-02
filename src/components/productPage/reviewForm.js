import React from 'react'
import { Rating } from 'react-simple-star-rating';
import { useForm } from 'react-hook-form'

export default function ReviewForm({name}) {
    console.log(name);
    let {register} = useForm()
  return (
    <>
        <div>
            <p>You’re rewiewing</p>
            <p>{name}</p>
            <p>Your rating<span>*</span></p>
            <p>Rating</p>
            <Rating size={20} fillColor='orange' emptyColor='gray' />
            <form>
                <label>Nickname<span>*</span></label>
                <input type='text' {...register("nickname", { pattern:/[[A-Za-z]]/})} required/>
                <label>Summary<span>*</span></label>
                <input type='text' {...register("nickname", { pattern:/[[A-Za-z]]/})} required/>
                <label>review<span>*</span></label>
                <textarea rows={5} cols={10} {...register("nickname", { pattern:/[[A-Za-z]]/})} required/>
            </form>
        </div>
    </>
  )
}
