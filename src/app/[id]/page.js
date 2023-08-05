"use client"
import { fetchSingleMealData } from '@/redux/slices/mealSlice';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const SingleRecipePage = ({ params: { id } }) => {
    const dispatch = useDispatch();
    const { data, status, error } = useSelector((state) => state.meal);

    useEffect(() => {
        console.log(id)
        dispatch(fetchSingleMealData(id));
    }, [dispatch]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }
    console.log(data)
    let singleMeal = data && data[0]
    return (
        <div className='container mx-auto py-10'>
            {data &&
                <div className='card'>
                    <div className="flex justify-center ">
                        <figure className='flex-1'><Image
                            className="w-11/12   "
                            src={singleMeal.strMealThumb}
                            alt="Next.js Logo"
                            width={180}
                            height={37}
                            priority
                        /></figure>
                        <div className="card-body flex-column  align-center">
                            <h2 className=" text-center text-2xl">{singleMeal.strMeal}</h2>
                          
                            <ul className='text-center'>
                                <p className='pb-4 text-xl bold pt-8'>Ingredients:</p>
                                <li>{singleMeal.strIngredient1}</li>
                                <li>{singleMeal.strIngredient2}</li>
                                <li>{singleMeal.strIngredient3}</li>
                                <li>{singleMeal.strIngredient4}</li>
                                <li>{singleMeal.strIngredient5}</li>
                                <li>{singleMeal.strIngredient6}</li>
                                <li>{singleMeal.strIngredient7}</li>
                                <li>{singleMeal.strIngredient8}</li>
                                <li>{singleMeal.strIngredient9}</li>
                                <li>{singleMeal.strIngredient10}</li>
                                <li>{singleMeal.strIngredient11}</li>
                                <li>{singleMeal.strIngredient12}</li>
                                <li>{singleMeal.strIngredient13}</li>
                                <li>{singleMeal.strIngredient14}</li>
                                <li>{singleMeal.strIngredient15}</li>
                                <li>{singleMeal.strIngredient16}</li>
                                <li>{singleMeal.strIngredient17}</li>
                                <li>{singleMeal.strIngredient18}</li>
                                <li>{singleMeal.strIngredient19}</li>
                                <li>{singleMeal.strIngredient20}</li>
                            </ul>

                        </div>
                    </div>

                    <div className='mt-10'>
                        <h6 className='text-xl mb-2 bold'>Instruction:</h6>
                        <p>{singleMeal.strInstructions}</p></div>
                </div>

            }

        </div>
    );
};

export default SingleRecipePage;