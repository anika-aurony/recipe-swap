import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
const ShowRecipe = ({meal}) => {
    return (
        <div className="card card-compact w-9/12 my-8 bg-base-100 shadow-xl ">
            <figure>
                <Image
                    className="w-full"
                    src={meal.strMealThumb}
                    alt="Next.js Logo"
                    width={180}
                    height={37}
                    priority
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{meal.strMeal}</h2>
                {meal.strCategory &&
                <p><span className='text-l'>Category:</span> <strong>{meal.strCategory}</strong></p>
            }
                <div className="card-actions justify-end mt-3">
                    <button className="btn bg-[#b91c1c] text-[white]">
                        <Link href={`/${meal.idMeal}`}> View Details </Link>
                        </button>
                </div>
            </div>
        </div>
    );
};

export default ShowRecipe;