"use client"
import { fetchMealData } from '@/redux/slices/mealSlice';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ShowRecipe from './ShowRecipe';

const MyRecipes = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();
    const { data, status, error } = useSelector((state) => state.meal);

    useEffect(() => {
        dispatch(fetchMealData('sa'));
    }, [dispatch]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }
    console.log(data)
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        dispatch(fetchMealData(searchTerm));
    };

    return (
        <div>

            <div className='w-1/3 mx-auto'>
                <input type="text" placeholder="Type here" value={searchTerm} onChange={handleInputChange} className="input input-bordered input-primary w-full max-w-xs" />
                <button className="btn bg-[#b91c1c] text-[white] ms-8" onClick={handleSearch}>Search</button>
            </div>

            {data && data.length > 0 ? (
                <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left w-11/12 mx-auto">
                    {data.map((meal) => (

                        <div key={meal.idMeal} >
                            <ShowRecipe meal={meal}></ShowRecipe>

                        </div>

                    ))}
                </div>
            ) : (
                <div>No meals found.</div>
            )}

        </div>
    );
};

export default MyRecipes;