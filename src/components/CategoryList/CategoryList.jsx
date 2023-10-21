import { createFactory, useEffect, useState } from "react";

const CategoryList = () => {
    const [categori, setCategori] = useState ([]);
    const [logo, category_name, availability] = categori;

    useEffect(() => {
            fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategori(data));
    }, [])
    return (
        <div>
            <div className="text-center mt-8 mb-8">
            <h2 className="font-bold text-4xl">Job Category List</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
           
               
            </div>
        </div>
    );};

export default CategoryList;