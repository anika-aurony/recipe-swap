"use client"
import { fetchCategoryMealData, fetchIngredientMealData, fetchMealData, fetchSortedMealData } from '@/redux/slices/mealSlice';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ShowRecipe from './ShowRecipe';
import { AiOutlineSortAscending } from 'react-icons/ai';

const MyRecipes = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchTerm1, setSearchTerm1] = useState('');
    const [searchTerm2, setSearchTerm2] = useState('');
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
        setSearchTerm('')
    };
    const handleCategoryInputChange = (event) => {
        setSearchTerm1(event.target.value);
    };

    const handleSearchCategory = () => {
        dispatch(fetchCategoryMealData(searchTerm1));
        setSearchTerm1('')
    };

    const handleIngredientInputChange = (event) => {
        setSearchTerm2(event.target.value);
    };

    const handleIngredientSearch = () => {
        dispatch(fetchIngredientMealData(searchTerm2));
        setSearchTerm2('')
    };

    const handleFilter = () => {
        dispatch(fetchSortedMealData(searchTerm || 'sa'));
    }

    return (
        <div>

            <div className='w-5/6 mx-auto flex  justify-between '>
                <div className='flex me-10'>
                    <input type="text" placeholder="Search By Category" value={searchTerm1} onChange={handleCategoryInputChange} className="input input-bordered input-primary w-full max-w-xs" />
                    <button className="btn bg-[#b91c1c] text-[white] ms-3 " onClick={handleSearchCategory}>Search</button>
                </div>
                <div className='flex me-10'>
                    <input type="text" placeholder="Search By Main Ingredient" value={searchTerm2} onChange={handleIngredientInputChange} className="input input-bordered input-primary w-full max-w-xs w-full" />
                    <button className="btn bg-[#b91c1c] text-[white] ms-3" onClick={handleIngredientSearch}>Search</button>
                </div>
                <div className='flex'>
                    <input type="text" placeholder="Search By Name" value={searchTerm} onChange={handleInputChange} className="input input-bordered input-primary w-full max-w-xs" />
                    <button className="btn bg-[#b91c1c] text-[white] ms-3" onClick={handleSearch}>Search</button>
                    <button className="btn bg-[#b91c1c] text-[white] ms-10 border-none justify-end" onClick={handleFilter}>Sort <AiOutlineSortAscending className='text-xl' /></button>
                </div>

            </div>

            {data && data.length > 0 ? (
                <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left w-11/12 mx-auto ps-10">
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