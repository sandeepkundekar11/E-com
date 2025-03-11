import React from "react";

const SkeletonLoader = () => {
    return (

        <div class="flex items-center justify-center h-screen w-full bg-gray-100">
            {/*  Circular Loader  */}
            <div class="relative w-12 h-12">
                {/* Outer Circle */}
                <div class="absolute w-full h-full border-4 border-gray-200 rounded-full"></div>
                {/* Inner Circle (Animated)  */}
                <div
                    class="absolute w-full h-full border-4 border-t-blue-500 border-r-blue-500 border-b-transparent border-l-transparent rounded-full animate-spin"
                ></div>
            </div>
        </div>

    );
};

export default SkeletonLoader;