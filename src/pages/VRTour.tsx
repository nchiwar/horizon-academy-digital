import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Text } from "@react-three/drei";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Info, RotateCcw, ZoomIn, Move } from "lucide-react";
import { useState } from "react";

// 3D Scene Components
function CampusBuilding({ position, color, label }: { position: [number, number, number]; color: string; label: string }) {
  return (
    <group position={position}>
      <mesh castShadow>
        <boxGeometry args={[2, 3, 2]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <Text
        position={[0, 2, 0]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </group>
  );
}

function Ground() {
  return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
      <planeGeometry args={[30, 30]} />
      <meshStandardMaterial color="#2d5a3d" />
    </mesh>
  );
}

function CampusScene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <Ground />
      <CampusBuilding position={[-4, 1, 0]} color="#1e3a5f" label="Admin Block" />
      <CampusBuilding position={[0, 1, 0]} color="#d4a253" label="STEM Lab" />
      <CampusBuilding position={[4, 1, 0]} color="#2d8659" label="Arts Center" />
      <CampusBuilding position={[-4, 1, -5]} color="#1e3a5f" label="Primary School" />
      <CampusBuilding position={[0, 1, -5]} color="#d4a253" label="Secondary School" />
      <CampusBuilding position={[4, 1, -5]} color="#2d8659" label="Sports Complex" />
      
      {/* Ground markings */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.4, 2]}>
        <circleGeometry args={[3, 32]} />
        <meshStandardMaterial color="#4a7c5d" />
      </mesh>
      
      <Environment preset="sunset" />
    </>
  );
}

const hotspots = [
  {
    id: 1,
    name: "STEM Laboratory",
    description: "State-of-the-art science and technology labs with cutting-edge equipment for hands-on learning.",
    culturalNote: "Integrates traditional Nigerian problem-solving approaches with modern STEM methodologies.",
  },
  {
    id: 2,
    name: "Arts & Culture Center",
    description: "Dedicated spaces for music, drama, and visual arts celebrating Nigerian heritage.",
    culturalNote: "Features traditional instruments from across Nigeria and hosts cultural performances.",
  },
  {
    id: 3,
    name: "Sports Complex",
    description: "Professional facilities for football, basketball, athletics, and indoor sports.",
    culturalNote: "Promotes traditional Nigerian sports alongside international athletic programs.",
  },
  {
    id: 4,
    name: "Digital Library",
    description: "Modern library with extensive collection of physical and digital resources.",
    culturalNote: "Houses significant collection of African literature and Nigerian historical texts.",
  },
];

export default function VRTour() {
  const [selectedHotspot, setSelectedHotspot] = useState(hotspots[0]);

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-display text-5xl font-bold text-primary mb-4">
            Virtual Campus Tour
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our world-class facilities in immersive 3D
          </p>
        </div>

        {/* 3D Viewer */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-[600px] bg-gradient-to-b from-sky-400 to-sky-200">
                  <Canvas shadows camera={{ position: [8, 8, 8], fov: 60 }}>
                    <CampusScene />
                    <OrbitControls
                      enablePan={true}
                      enableZoom={true}
                      enableRotate={true}
                      maxPolarAngle={Math.PI / 2}
                      minDistance={5}
                      maxDistance={20}
                    />
                  </Canvas>
                  
                  {/* Controls Overlay */}
                  <div className="absolute top-4 left-4 space-y-2">
                    <Badge className="bg-white/90 text-foreground backdrop-blur-sm flex items-center gap-2">
                      <Move className="h-3 w-3" />
                      Click & Drag to Rotate
                    </Badge>
                    <Badge className="bg-white/90 text-foreground backdrop-blur-sm flex items-center gap-2">
                      <ZoomIn className="h-3 w-3" />
                      Scroll to Zoom
                    </Badge>
                    <Badge className="bg-white/90 text-foreground backdrop-blur-sm flex items-center gap-2">
                      <RotateCcw className="h-3 w-3" />
                      Right-Click to Pan
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Hotspot Information */}
          <div>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Info className="h-5 w-5 text-accent" />
                  <h3 className="font-display text-xl font-bold">Location Info</h3>
                </div>
                
                <div className="space-y-4">
                  {hotspots.map((hotspot) => (
                    <button
                      key={hotspot.id}
                      onClick={() => setSelectedHotspot(hotspot)}
                      className={`w-full text-left p-4 rounded-lg border transition-all ${
                        selectedHotspot.id === hotspot.id
                          ? "border-accent bg-accent/10"
                          : "border-border hover:border-accent/50"
                      }`}
                    >
                      <h4 className="font-semibold text-lg mb-1">{hotspot.name}</h4>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {hotspot.description}
                      </p>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Selected Hotspot Details */}
        <Card className="bg-gradient-to-r from-primary to-primary/80 text-white">
          <CardContent className="py-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h2 className="font-display text-3xl font-bold mb-4">
                  {selectedHotspot.name}
                </h2>
                <p className="text-lg mb-4 opacity-90">
                  {selectedHotspot.description}
                </p>
              </div>
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg">
                <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                  🇳🇬 Nigerian Heritage Integration
                </h3>
                <p className="opacity-90">
                  {selectedHotspot.culturalNote}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <h2 className="font-display text-3xl font-bold text-primary mb-4">
            Want to See More?
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            Schedule an in-person campus tour to experience our facilities firsthand
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gold-gradient text-primary font-semibold">
              Schedule Campus Visit
            </Button>
            <Button size="lg" variant="outline">
              Contact Admissions
            </Button>
          </div>
        </div>

        {/* Technical Note */}
        <Card className="mt-8 bg-muted">
          <CardContent className="pt-6">
            <p className="text-sm text-center text-muted-foreground">
              <strong>Interactive 3D Experience:</strong> This virtual tour uses Three.js technology 
              to provide an immersive campus experience. Use your mouse to explore different angles 
              and perspectives of our facilities.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
