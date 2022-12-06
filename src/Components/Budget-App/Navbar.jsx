export const UserNavbar = () => {
    return (
        <>
            <div className="flex justify-between border border-black">
               
                <ul className="bg-blue-400 w-1/3 text-center border-r-2 border-black">
                    <li className="p-2">Borcelli Planning 2022</li>
                </ul>

                <ul className="bg-blue-400 w-1/6 text-center border-l-2 border-r-2 border-black">
                    <button><li className="p-2">PLAN</li></button>
                </ul>

                <ul className="flex w-1/5 justify-around bg-blue-400 border-l-2 border-r-2 border-black">
                    <button><li><i className="fa-regular fa-calendar-plus p-2"></i></li></button>
                    <button><li><i className="fa-regular fa-message p-2"></i></li></button>
                    <button><li><i className="fa-regular fa-bell p-2"></i></li></button>
                    <button><li><i className="fa-solid fa-user-tie p-2"></i></li></button>
                </ul>

                <ul className="w-1/12 text-center border-l-2 border-black bg-blue-400">
                    <button><li><i className="fa-solid fa-arrow-left-long p-3"></i></li></button>
                </ul>
                
            </div>

            
        </>
    )
}