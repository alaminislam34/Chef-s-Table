const Header = () => {
    return (
        <div className="flex flex-col md:flex-row gap-8 justify-between items-center my-4 p-6">
           <div>
             <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold">Recipe Calories</h2>
           </div>
            <ul className="lg:flex justify-center items-center gap-12 hidden">
                <li><a className="text-[#150B2B cursor-pointer">Home</a></li>
                <li><a className="text-[#150B2B cursor-pointer">Recipes</a></li>
                <li><a className="text-[#150B2B cursor-pointer">About</a></li>
                <li><a className="text-[#150B2B cursor-pointer">Search</a></li>
            </ul>
            <form className="flex justify-center items-center gap-3">
                <div className="relative">
                    <input className="py-2 pl-8 rounded-full shadow" type="text" placeholder='Search' />
                    <i className="fa-solid fa-magnifying-glass absolute top-3 left-3"></i>
                </div>
                <a className="bg-[#0BE58A] py-1 px-2 rounded-full cursor-pointer text-black text-2xl"><i className="fa-regular fa-circle-user"></i></a>
            </form>
        </div>
    );
};

export default Header;