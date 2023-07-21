import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../Redux/DynamicCounter/action";

const DynamicCounter = () => {
    const count = useSelector((state)=>state.dynamic.count);
    const dispatch = useDispatch();
    const handleIncrement = (value) =>{
        dispatch(increment(value))
    }
    const handleDecrement = (value) =>{
        dispatch(decrement(value))
    }
    return (
        <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
                <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
                    Simple Counter Application
                </h1>
                <div className="max-w-md mx-auto mt-10 space-y-5">
                    <div
                        className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
                    >
                        <div className="text-2xl font-semibold">{count}</div>
                        <div className="flex space-x-3">
                            <button onClick={()=>handleIncrement(3)}
                                className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                            >
                                Increment
                            </button>
                            <button onClick={()=>handleDecrement(2)} 
                                className="bg-red-400 text-white px-3 py-2 rounded shadow"
                            >
                                Decrement
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default DynamicCounter;