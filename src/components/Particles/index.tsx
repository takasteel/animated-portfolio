import { useFrame } from "@react-three/fiber";
import { useCallback, useMemo, useRef } from "react";
import * as THREE from 'three';

export function Particles() {
  const texture = new THREE.TextureLoader().load('/images/circle.png')
  const bufferRef = useRef(null);
  const particlesRef = useRef(null);
  const COUNT = 60
  const SEP = 3
  
  let t = 0;
  let f = 0.003;
  let a = 1.5 ;

  const graph = useCallback((x, z) => {
    return Math.sin(f * (x ** 2 + z ** 2 + t)) * a;
  }, [t, f, a])

  let positions = useMemo(() => {
    let positions = []
    for(let xi = 0; xi < COUNT; xi++) {
      for(let zi = 0; zi < COUNT; zi++) {
        let x = SEP * (xi - COUNT / 2);
        let z = SEP * (zi - COUNT / 2);
        let y = graph(x,z);
        positions.push(x, y, z);
      }
    }
    return new Float32Array(positions)
  }, [COUNT, SEP, graph])
  
  useFrame(() => {
    t += 10;
    const positions = bufferRef.current.array;
    let i = 0;
    for(let xi = 0; xi < COUNT; xi++) {
      for(let zi = 0; zi < COUNT; zi++) {
        let x = SEP * (xi - COUNT / 2);
        let z = SEP * (zi - COUNT / 2);
        positions[i+1] = graph(x ,z);
        i += 3;
      }
    }
    particlesRef.current.rotation.y += 0.0005;
    bufferRef.current.needsUpdate = true;
  })

  return(
    <points ref={particlesRef} rotation={[0, 0.3 * Math.PI, 0]} position={[0, -8, 0]}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          ref={bufferRef}
          attachObject={['attributes', 'position']}
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        attach="material"
        map={texture}
        color={0x706e09}
        size={0.5}
        sizeAttenuation
        transparent={false}
        alphaTest={0.5}
        opacity={1.0}
      />
    </points>
  ); 
}