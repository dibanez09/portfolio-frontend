import { Canvas } from '@react-three/fiber';
import HomePageScene from '../components/3d/scene/HomePageScene';

const Index = () => {
  return (
    <div className="h-[300vh]">
      <div className="fixed top-0 left-0 right-0 h-[100vh]">
        <Canvas>
          <HomePageScene />
        </Canvas>
      </div>
    </div>
  );
};

export default Index;
