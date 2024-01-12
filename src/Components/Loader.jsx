import {Html, useProgress } from '@react-three/drei'

const Loader = () => {

  const {progress} = useProgress();

  return (
    <Html>
        <div className="flex justify-center items-center">
            <div className="w-20 h-20 border-2 border-opacity-20 border-black
            border-t-blue-900 rounded-full animate-spin"/>
            <div className="text-black text-lg ml-4">{progress.toFixed(2)} % loaded</div>
        </div>
    </Html>
  )
}

export default Loader