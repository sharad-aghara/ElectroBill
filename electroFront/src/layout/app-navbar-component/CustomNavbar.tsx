import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

export const CustomNavbar = () => {
    return (
        <nav className="fixed h-16 bg-white top-0 left-0 right-0 flex items-center px-4 shadow-md z-10">
            <div className="flex items-center gap-4 w-full">
                <div className="h-full flex items-center">
                    {/* <button className="bg-gray-300 p-2 rounded-md">☰</button> */}
                    <MenuOutlinedIcon className="text-black" />
                </div>
                <div>
                    <h3 className="text-black">
                        <span>ElectroBill</span>
                    </h3>
                </div>
            </div>
        </nav>
    );
};
