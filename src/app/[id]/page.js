"use client"
import { fetchSingleMealData } from '@/redux/slices/mealSlice';
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
    
    return (
        <div>
           recipe {id}
        </div>
    );
};

export default SingleRecipePage;