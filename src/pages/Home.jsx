import {useState, Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../Components/Loader'

import Temple from '../models/temple'
import Sky from '../models/Sky'
import Ajolote from '../models/Ajolote'
import HomeInfo from '../Components/HomeInfo'


const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustTempleForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -45];
    let rotation = [0.1, -0.75, 0]

    if (window.innerWidth < 768) {
      screenScale = [0.75, 0.75, 0.75];
    } else {
      screenScale = [1.0, 1.0, 1.0]
    }
  return [screenScale, screenPosition, rotation]
  }

  const adjustAjoloteForScreenSize = () => {
    let ajoloteScale = [0.4, 0.4, 0.4]; 
    let ajolotePosition = [-12, -1.5, -10];
    let rotation = [0.1, 0.6, 0]

    if (window.innerWidth < 768) {
      ajoloteScale = [.5, .5, 0.5];
      ajolotePosition = [0, -1.5, 0]
    } else {
      ajoloteScale = [.3, .3, .3]
      ajolotePosition = [0, -4, -4]
    }

  return [ajoloteScale, ajolotePosition]
  }

  const [templeScale, templePosition, templerotation] = adjustTempleForScreenSize();
  const [AjoloteScale, AjolotePosition] = adjustAjoloteForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-28 right-20 z-10 flex justify-left text-white">
        {currentStage && <HomeInfo currentStage = {currentStage}/>}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000}}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1,1,1]} intensity={2}/>
          <ambientLight intensity={0.5}/>
          <pointLight />
          <spotLight />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>            
            <Sky isRotating={isRotating} />
            <Temple 
              position = {templePosition}
              scale = {templeScale}
              rotation = {templerotation}
              isRotating = {isRotating}
              setIsRotating = {setIsRotating}
              setCurrentStage={setCurrentStage}
            />
            <Ajolote 
              isRotating = {isRotating}
              AjolotePosition = {AjolotePosition}
              AjoloteScale = {AjoloteScale}
              rotation = {[0,20,0]}
            />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home