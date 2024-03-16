import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'https://unpkg.com/three@0.127.0/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'https://unpkg.com/three@0.127.0/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'https://unpkg.com/three@0.127.0/examples/jsm/postprocessing/ShaderPass.js';
import { GLTFLoader } from './GLTFLoader.js';





const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Orbit Controls
const cameraControl = new OrbitControls(camera, renderer.domElement);


// Load 3D object: Stained Glass with textures
const loader = new GLTFLoader();


// Load a glTF resource
loader.load(
    // resource URL
    '/Assets/Objects/Window/scene.gltf',
    // called when the resource is loaded
    function ( gltf ) {


        const windowSG1 = gltf.scene;
        windowSG1.scale.set(5, 12, 5);
        windowSG1.position.set(0, 58, -98.5);
        scene.add(windowSG1);

        const windowSG2 = gltf.scene.clone(); 
        windowSG2.scale.set(5, 9.5, 5); 
        windowSG2.position.set(15, 50, -98.5); 
        scene.add(windowSG2);

        const windowSG3 = gltf.scene.clone(); 
        windowSG3.scale.set(5, 9.5, 5); 
        windowSG3.position.set(-15, 50, -98.5); 
        scene.add(windowSG3);

        const windowSG4 = gltf.scene.clone();
        windowSG4.scale.set(3, 6.5, 5);
        windowSG4.position.set(0, 80, 130);
        scene.add(windowSG4);

        const windowSG5 = gltf.scene.clone();
        windowSG5.scale.set(3, 6, 5);
        windowSG5.position.set(10, 78, 130);
        scene.add(windowSG5);

        const windowSG6 = gltf.scene.clone();
        windowSG6.scale.set(3, 6, 5);
        windowSG6.position.set(-10, 78, 130);
        scene.add(windowSG6);

    },
    // called while loading is progressing
    function ( xhr ) {
        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    },
    // called when loading has errors
    function ( error ) {
        console.log( 'An error happened' );
    }
);

loader.load(
    // resource URL
    '/Assets/Objects/Statue2/scene.gltf',
    function ( gltf ) {

        const statue1 = gltf.scene;
        statue1.scale.set(15, 15, 15); 
        statue1.position.set(-1, 9, 29.5);
		statue1.rotation.y = Math.PI / 2; 
        scene.add( statue1 ); 

		const statue2 = gltf.scene.clone(); 
        statue2.scale.set(15, 15, 15); 
        statue2.position.set(1, 9, 29);
		statue2.rotation.y = Math.PI / -2; 
        scene.add( statue2 ); 

		const statue3 = gltf.scene.clone(); 
        statue3.scale.set(18, 18, 18); 
        statue3.position.set(-23, 7.2, -50);
		statue3.rotation.y = Math.PI / 20 ;
        scene.add( statue3 );

		const statue4 = gltf.scene.clone();
        statue4.scale.set(18, 18, 18); 
        statue4.position.set(23, 7.2, -50);
		statue4.rotation.y = Math.PI / -20 ;
        scene.add( statue4 ); 

        gltf.animations; 
        gltf.scene; 
        gltf.scenes; 
        gltf.cameras; 
        gltf.asset; 

    },
    function ( xhr ) {

        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

    },
    function ( error ) {

        console.log( 'An error happened' );

    }
);

loader.load(
    '/Assets/Objects/Brazier/scene.gltf',
    function ( gltf ) {

        const brazier1 = gltf.scene; 
        brazier1.scale.set(0.75, 0.75, 0.75);
        brazier1.position.set(16.5, 6.6, -41);
		brazier1.rotation.y = Math.PI / 5; // Rotate 45 degrees
        scene.add( brazier1 ); 

		const brazier2 = gltf.scene.clone(); 
        brazier2.scale.set(0.75, 0.75, 0.75); 
        brazier2.position.set(-21.5, 6.6, -41);
		brazier2.rotation.y = Math.PI / 5; // Rotate 45 degrees
        scene.add( brazier2 ); 

		const brazier3 = gltf.scene.clone(); 
        brazier3.scale.set(0.75, 0.75, 0.75); 
        brazier3.position.set(7.5, 4, 21.5);
		brazier3.rotation.y = Math.PI / 5; // Rotate 45 degrees
        scene.add( brazier3 ); 

		const brazier4 = gltf.scene.clone(); 
        brazier4.scale.set(0.75, 0.75, 0.75); 
        brazier4.position.set(-12.5, 4, 21.5);
		brazier4.rotation.y = Math.PI / 5; // Rotate 45 degrees
        scene.add( brazier4 ); 

		const brazier5 = gltf.scene.clone(); 
        brazier5.scale.set(0.75, 0.75, 0.75); 
        brazier5.position.set(-21.5, 9, -57);
		brazier5.rotation.y = Math.PI / 5; // Rotate 45 degrees
        scene.add( brazier5 ); 

		const brazier6 = gltf.scene.clone(); 
        brazier6.scale.set(0.75, 0.75, 0.75); 
        brazier6.position.set(16.5, 9.5, -57);
		brazier6.rotation.y = Math.PI / 5; // Rotate 45 degrees
        scene.add( brazier6 ); 

        gltf.animations; 
        gltf.scene; 
        gltf.scenes; 
        gltf.cameras; 
        gltf.asset; 

    },
    function ( xhr ) {

        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

    },
    
    function ( error ) {

        console.log( 'An error happened' );

    }
);

loader.load(
    
    '/Assets/Objects/Chandelier/scene.gltf',
 
    function ( gltf ) {

        const chandelier = gltf.scene; 
        chandelier.scale.set(0.4, 0.4, 0.4); 
        chandelier.position.set(0, 40, 20);
        scene.add( chandelier ); 

        const chandelier2 = gltf.scene.clone(); 
        chandelier2.scale.set(0.4, 0.4, 0.4);
        chandelier2.position.set(0, 40, -30);
        scene.add( chandelier2 ); 

        gltf.animations; 
        gltf.scene; 
        gltf.scenes;
        gltf.cameras; 
        gltf.asset; 

    },
    
    function ( xhr ) {

        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

    },
   
    function ( error ) {

        console.log( 'An error happened' );

    }
);

loader.load(
    
    '/Assets/Objects/Curtain/scene.gltf',
   
    function ( gltf ) {

        const curtainModel = gltf.scene; 
        curtainModel.scale.set(10, 20, 9); 
        curtainModel.position.set(30, 40, -25);
        scene.add( curtainModel ); 

        const curtainModel2 = gltf.scene.clone(); 
        curtainModel2.scale.set(10, 20, 9); 
        curtainModel2.position.set(-30, 40, -25);
        curtainModel2.rotation.y = Math.PI / 2 + Math.PI / 2; 
        scene.add( curtainModel2 ); 

        const curtainModel3 = gltf.scene.clone();
        curtainModel3.scale.set(10, 20, 9); 
        curtainModel3.position.set(30, 40, 50);
        scene.add( curtainModel3 ); 

        const curtainModel4 = gltf.scene.clone(); 
        curtainModel4.scale.set(10, 20, 9); 
        curtainModel4.position.set(-30, 40, 50);
        curtainModel4.rotation.y = Math.PI / 2 + Math.PI / 2; 
        scene.add( curtainModel4 ); 

        gltf.animations; 
        gltf.scene; 
        gltf.scenes; 
        gltf.cameras; 
        gltf.asset; 

    },
    
    function ( xhr ) {

        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

    },
    
    function ( error ) {

        console.log( 'An error happened' );

    }
);

//Statue Dais
const stDaisGeom = new THREE.BoxGeometry(6, 8, 8);
const floorMaterial2 = new THREE.MeshStandardMaterial({color: 0x595959});
const stDais1 = new THREE.Mesh(stDaisGeom, floorMaterial2);
stDais1.position.set(-32, 5, 30);
scene.add(stDais1);

//Statue Dais
const stDais2 = new THREE.Mesh(stDaisGeom, floorMaterial2);
stDais2.position.set(32, 5, 28.3);
scene.add(stDais2);



// Base Floor
const floorGeometry = new THREE.BoxGeometry(75, 0.1, 200); 
const floorTexture = new THREE.TextureLoader().load('https://cdn.architextures.org/textures/22/04/flagstone-rubble-624d7b91ef9ee-1200.jpg');
floorTexture.wrapS = THREE.RepeatWrapping;
floorTexture.wrapT = THREE.RepeatWrapping;
floorTexture.repeat.set(5, 15); //
const floorMaterial = new THREE.MeshPhongMaterial({map: floorTexture, color: 0x808080, side: THREE.DoubleSide });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.position.set(0, -0.05, 0); 
scene.add(floor);

//T Floor: Longer
const floorTLGeometry = new THREE.BoxGeometry(20, 1.5, 200);
const floorTL = new THREE.Mesh(floorTLGeometry, floorMaterial2);
floorTL.position.set(0, 1, 0);
scene.add(floorTL);

//T Floor: Longer (Stairs 1)
const floorTL1Geometry = new THREE.BoxGeometry(22.5, 1.2, 200);
const floorTLS = new THREE.Mesh(floorTL1Geometry, floorMaterial2);
floorTLS.position.set(0, 0.5, 0);
scene.add(floorTLS);

//T Floor: Longer (Stairs 2)
const floorTL2Geometry = new THREE.BoxGeometry(25, 0.7, 200);
const floorTLS2 = new THREE.Mesh(floorTL2Geometry, floorMaterial2);
floorTLS2.position.set(0, 0.2, 0);
scene.add(floorTLS2);

//T Floor: Shorter 1
const floorTSGeometry = new THREE.BoxGeometry(75, 1.5, 40);
const floorTS = new THREE.Mesh(floorTSGeometry, floorMaterial2);
floorTS.position.set(0, 1.01, -20);
scene.add(floorTS);

//Flood Diagonal 1 (front)
const floorDiagGeom1 = new THREE.BoxGeometry(10, 1.5, 30);
const FloorDiag1 = new THREE.Mesh(floorDiagGeom1, floorMaterial2);
FloorDiag1.position.set(10, 0.99, 0);
scene.add(FloorDiag1);
FloorDiag1.rotation.y = Math.PI / -3; 

//Flood Diagonal 2 (front)
const floorDiagGeom2 = new THREE.BoxGeometry(10, 1.5, 30);
const FloorDiag2 = new THREE.Mesh(floorDiagGeom2, floorMaterial2);
FloorDiag2.position.set(-10, 0.99, 0);
scene.add(FloorDiag2);
FloorDiag2.rotation.y = Math.PI / 3; 

//Flood Diagonal 1 (back)
const FloorDiag3 = new THREE.Mesh(floorDiagGeom2, floorMaterial2);
FloorDiag3.position.set(10, 0.99, 60);
scene.add(FloorDiag3);
FloorDiag3.rotation.y = Math.PI / 3;

//Flood Diagonal 2 (back)
const FloorDiag4 = new THREE.Mesh(floorDiagGeom1, floorMaterial2);
FloorDiag4.position.set(-10, 0.99, 60);
scene.add(FloorDiag4);
FloorDiag4.rotation.y = Math.PI / -3; 


//T Floor: Shorter 2
const floorTSGeometry2 = new THREE.BoxGeometry(75, 1.5, 40);
const floorTS2 = new THREE.Mesh(floorTSGeometry2, floorMaterial2);
floorTS2.position.set(0, 1.01, 80);
scene.add(floorTS2);

//T Floor: Shorter 3
const floorTS3 = new THREE.Mesh(floorTSGeometry2, floorMaterial2);
floorTS3.position.set(0, 1.01, 100);
scene.add(floorTS3);


// BALCONY FLOORS, ETC
//T Floor: Shorter 4 (BALCONY)
const floorTSGeometry4 = new THREE.BoxGeometry(75, 1.5, 40);
const floorTS4 = new THREE.Mesh(floorTSGeometry4, floorMaterial2);
floorTS4.position.set(0, 55, 115);
scene.add(floorTS4);

// Balcony Sides
const floorTSGeometry5 = new THREE.BoxGeometry(20, 1.5, 40);
const balconyFloorSide1 = new THREE.Mesh(floorTSGeometry5, floorMaterial2);
balconyFloorSide1.position.set(30, 55, 75);
scene.add(balconyFloorSide1);

const balconyFloorSide2 = new THREE.Mesh(floorTSGeometry5, floorMaterial2);
balconyFloorSide2.position.set(-30, 55, 75);
scene.add(balconyFloorSide2);

//Balcony Balustrades Center
const balconyBalGeom = new THREE.BoxGeometry(42, 3, 2);
const balconyBal1 = new THREE.Mesh(balconyBalGeom, floorMaterial2);
balconyBal1.position.set(0, 57, 95);
scene.add(balconyBal1);

//Balcony Balustrades
const balconyBalGeom1 = new THREE.BoxGeometry(2, 3, 42);
const balconyBalS1 = new THREE.Mesh(balconyBalGeom1, floorMaterial2);
balconyBalS1.position.set(20, 57, 75);
scene.add(balconyBalS1);

const balconyBalS2 = new THREE.Mesh(balconyBalGeom1, floorMaterial2);
balconyBalS2.position.set(-20, 57, 75);
scene.add(balconyBalS2);

const balconyBalGeom2 = new THREE.BoxGeometry(18, 3, 2);
const balconyBalss1 = new THREE.Mesh(balconyBalGeom2, floorMaterial2);
balconyBalss1.position.set(30, 57, 55);
scene.add(balconyBalss1);

const balconyBalss2 = new THREE.Mesh(balconyBalGeom2, floorMaterial2);
balconyBalss2.position.set(-30, 57, 55);
scene.add(balconyBalss2);


// Dais 1 for the throne
const daisGeom = new THREE.BoxGeometry(75, 3.5, 70);
const Dais1 = new THREE.Mesh(daisGeom, floorMaterial2);
Dais1.position.set(0, 3, -68);
scene.add(Dais1);

// Dais 1 Main Stairs (1)
const dais1Stair1Geom = new THREE.BoxGeometry(75, 3.5, 70);
const dais1Stair1 = new THREE.Mesh(dais1Stair1Geom, floorMaterial2);
dais1Stair1.position.set(0, 1, -65);
scene.add(dais1Stair1);

// Dais 1 Main Stairs (1)
const dais1Stair2 = new THREE.Mesh(dais1Stair1Geom, floorMaterial2);
dais1Stair2.position.set(0, 2, -66.5);
scene.add(dais1Stair2);

// Dais sides 1
const dsGeom = new THREE.BoxGeometry(17, 3.5, 8);
const ds1 = new THREE.Mesh(dsGeom, floorMaterial2);
ds1.position.set(29, 3, -29);
scene.add(ds1);

// Dais sides 1 (Stair 1)
const dsStair1Geom = new THREE.BoxGeometry(21, 2.5, 8);
const dsStair1 = new THREE.Mesh(dsStair1Geom, floorMaterial2);
dsStair1.position.set(29, 1.5, -26);
scene.add(dsStair1);

// Dais sides 1 (Stair 2)
const dsStair2Geom = new THREE.BoxGeometry(19, 3, 8);
const dsStair2 = new THREE.Mesh(dsStair2Geom, floorMaterial2);
dsStair2.position.set(29, 2.25, -27.5);
scene.add(dsStair2);

// Dais side 2
const ds2 = new THREE.Mesh(dsGeom, floorMaterial2);
ds2.position.set(-29, 3, -29);
scene.add(ds2);

// Dais sides 2 (Stair 1)
const dsStair3 = new THREE.Mesh(dsStair1Geom, floorMaterial2);
dsStair3.position.set(-29, 1.5, -26);
scene.add(dsStair3);

// Dais sides 1 (Stair 2)
const dsStair4 = new THREE.Mesh(dsStair2Geom, floorMaterial2);
dsStair4.position.set(-29, 2.25, -27.5);
scene.add(dsStair4);

// Dais 2 for the throne
const daisGeom2 = new THREE.BoxGeometry(75, 4.5, 52.5);
const Dais2 = new THREE.Mesh(daisGeom2, floorMaterial2);
Dais2.position.set(0, 6, -75);
scene.add(Dais2);

// Dais 2 Stair 1
const dais2Stairs1Geom = new THREE.BoxGeometry(75, 3, 52.5);
const Dais2Stair1 = new THREE.Mesh(dais2Stairs1Geom, floorMaterial2);
Dais2Stair1.position.set(0, 4.5, -72);
scene.add(Dais2Stair1);

// Dais 2 Stair 2
const dais2Stairs2Geom = new THREE.BoxGeometry(75, 3.75, 52.5);
const Dais2Stair2 = new THREE.Mesh(dais2Stairs2Geom, floorMaterial2);
Dais2Stair2.position.set(0, 5.25, -73.5);
scene.add(Dais2Stair2);


//Dais Proper
const daisProperGeom1 = new THREE.CylinderGeometry( 19, 19, 4, 7 );
const daisProper1 = new THREE.Mesh( daisProperGeom1, floorMaterial2 ); 
daisProper1.position.set(0, 10, -83);
scene.add( daisProper1 );

//Dais Proper 2 (Bottom Stair)
const daisProperGeom2 = new THREE.CylinderGeometry( 22, 22, 3, 7 );
const daisProper2 = new THREE.Mesh( daisProperGeom2, floorMaterial2 ); 
daisProper2.position.set(0, 8, -83);
scene.add( daisProper2 );

//Dais Proper 3 (Middle Stair)
const daisProperGeom3 = new THREE.CylinderGeometry( 20.5, 20.5, 3.5, 7 );
const daisProper3 = new THREE.Mesh( daisProperGeom3, floorMaterial2 ); 
daisProper3.position.set(0, 9, -83);
scene.add( daisProper3 );

// Brazier 1 (by the Dais)
const brazierGeom = new THREE.BoxGeometry(3, 8, 3);
const roughStoneTexture = new THREE.TextureLoader().load('https://cdn.architextures.org/textures/20/11/rough-limestone-5fc4cd2dd3792-1200.jpg');
roughStoneTexture.wrapS = THREE.RepeatWrapping;
roughStoneTexture.wrapT = THREE.RepeatWrapping;
roughStoneTexture.repeat.set(1,1); //
const brazierMaterial = new THREE.MeshBasicMaterial( { map: roughStoneTexture, color: 0x303030} );
const bz1 = new THREE.Mesh(brazierGeom, floorMaterial2);
bz1.position.set(19, 2.5, -31.5);
scene.add(bz1);

// Brazier 2 (by the Dais)
const bz2 = new THREE.Mesh(brazierGeom, floorMaterial2);
bz2.position.set(-19, 2.5, -31.5);
scene.add(bz2);

// Brazier 3 (by the tables)
const bz3 = new THREE.Mesh(brazierGeom, floorMaterial2);
bz3.position.set(-10, 0, 31);
scene.add(bz3);

// Brazier 4 (by the tables)
const bz4 = new THREE.Mesh(brazierGeom, floorMaterial2);
bz4.position.set(10, 0, 31);
scene.add(bz4);

// Brazier 5 (by the dais proper)
const bz5 = new THREE.Mesh(brazierGeom, floorMaterial2);
bz5.position.set(-19, 6, -48);
scene.add(bz5);

// Brazier 6 (by the tables)
const bz6 = new THREE.Mesh(brazierGeom, floorMaterial2);
bz6.position.set(19, 6, -48);
scene.add(bz6);

//Carpet
const carpetGeom = new THREE.CylinderGeometry( 10, 10, 0.4, 32 );
const carpetTexture = new THREE.TextureLoader().load('/Assets/textures/Cloth_Textures/ClothTextures.jpg');
carpetTexture.wrapS = THREE.RepeatWrapping;
carpetTexture.wrapT = THREE.RepeatWrapping;
carpetTexture.repeat.set(1,1); //
const carpetMaterial = new THREE.MeshLambertMaterial( { map: carpetTexture, color: 0x00261e} ); 
const carpet = new THREE.Mesh( carpetGeom, carpetMaterial ); 
carpet.position.set(0, 2, -10);
scene.add( carpet );

const carpetGeom2 = new THREE.CylinderGeometry( 12, 12, 0.6, 32 );
const carpet2 = new THREE.Mesh( carpetGeom2, carpetMaterial ); 
carpet2.position.set(0, 12, -82);
scene.add( carpet2 );

const carpet3 = new THREE.Mesh( carpetGeom, carpetMaterial ); 
carpet3.position.set(0, 2, 70);
scene.add( carpet3 );

const longCarpetGeom = new THREE.BoxGeometry(11, 0.3, 57);
const longCarpet = new THREE.Mesh(longCarpetGeom, carpetMaterial);
longCarpet.position.set(0, 2, 30);
scene.add(longCarpet);

const longCarpet2Geom = new THREE.BoxGeometry(11, 0.3, 15);
const longCarpet2 = new THREE.Mesh(longCarpet2Geom, carpetMaterial);
longCarpet2.position.set(0, 2, 90);
scene.add(longCarpet2);

const sLongCarpetGeom = new THREE.BoxGeometry(23, 0.3, 10);
const sLongCarpet1 = new THREE.Mesh(sLongCarpetGeom, carpetMaterial);
sLongCarpet1.position.set(23, 2, -11);
scene.add(sLongCarpet1);

const sLongCarpet2 = new THREE.Mesh(sLongCarpetGeom, carpetMaterial);
sLongCarpet2.position.set(-23, 2, -11);
scene.add(sLongCarpet2);

const sLongCarpet3 = new THREE.Mesh(sLongCarpetGeom, carpetMaterial);
sLongCarpet3.position.set(-23, 2, 70);
scene.add(sLongCarpet3);

const sLongCarpet4 = new THREE.Mesh(sLongCarpetGeom, carpetMaterial);
sLongCarpet4.position.set(23, 2, 70);
scene.add(sLongCarpet4);

const circleWindowGeom = new THREE.CylinderGeometry(8, 8, 4, 32);
const stainedGlassTexture = new THREE.TextureLoader().load('/Assets/Objects/Window/textures/window_colored_emissive.png');
stainedGlassTexture.wrapS = THREE.RepeatWrapping;
stainedGlassTexture.wrapT = THREE.RepeatWrapping;
stainedGlassTexture.repeat.set(0.5,0.5); //
const circleWindowMat = new THREE.MeshLambertMaterial({map:stainedGlassTexture}); 
const circleWindow = new THREE.Mesh(circleWindowGeom, circleWindowMat);
circleWindow.position.set(0, 120, -100);
circleWindow.rotation.x = Math.PI / 2;
scene.add(circleWindow);

//Throne: Backrest
const backrestThroneGeom = new THREE.BoxGeometry(5, 8, 1.5);
const redClothTexture = new THREE.TextureLoader().load('/Assets/textures/Cloth_Textures/ClothTextures.jpg');
redClothTexture.wrapS = THREE.RepeatWrapping;
redClothTexture.wrapT = THREE.RepeatWrapping;
redClothTexture.repeat.set(1,1); //
const throneClothMaterial = new THREE.MeshLambertMaterial({map:redClothTexture, color: 0x450800}); 
const backrestThrone = new THREE.Mesh(backrestThroneGeom, throneClothMaterial);
backrestThrone.position.set(0, 17, -90);
scene.add(backrestThrone);

//Throne: Hexagon Part
const throneHexGeom = new THREE.CylinderGeometry(4., 4.5, 1.5, 6);
const throneHex = new THREE.Mesh(throneHexGeom, throneClothMaterial);
throneHex.position.set(0, 20, -90);
throneHex.rotation.x = Math.PI / 2;
scene.add(throneHex);

//Throne: Seat
const seatThroneGeom = new THREE.BoxGeometry(4.5, 1, 3);
const seatThrone = new THREE.Mesh(seatThroneGeom, throneClothMaterial);
seatThrone.position.set(0, 14, -88);
scene.add(seatThrone);

//Throne: Side
const sideThroneGeom = new THREE.BoxGeometry(1, 4, 4);
const sideThrone = new THREE.Mesh(sideThroneGeom, throneClothMaterial);
sideThrone.position.set(3, 14, -89);
scene.add(sideThrone);

//Throne: Side
const sideThrone2 = new THREE.Mesh(sideThroneGeom, throneClothMaterial);
sideThrone2.position.set(-3, 14, -89);
scene.add(sideThrone2);

//Throne thorns
const throneThornGeom = new THREE.BoxGeometry(0.5, 3, 0.5);
const throneThornMaterial = new THREE.MeshLambertMaterial({ color: 0x000000});
const throneThorn1 = new THREE.Mesh(throneThornGeom, throneThornMaterial);
throneThorn1.position.set(0, 26, -91);
//throneHex.rotation.x = Math.PI / 2;
scene.add(throneThorn1);

const throneThorn2 = new THREE.Mesh(throneThornGeom, throneThornMaterial);
throneThorn2.position.set(-5, 23, -91);
throneThorn2.rotation.z = Math.PI / 3;
scene.add(throneThorn2);

const throneThorn3 = new THREE.Mesh(throneThornGeom, throneThornMaterial);
throneThorn3.position.set(5, 23, -91);
throneThorn3.rotation.z = Math.PI / -3;
scene.add(throneThorn3);

const throneThornGeom2 = new THREE.BoxGeometry(15, 0.5, 0.5);
const throneThorn4 = new THREE.Mesh(throneThornGeom2, throneThornMaterial);
throneThorn4.position.set(0, 19, -91);
scene.add(throneThorn4);

//Door Outside
const doorOutsideGeom = new THREE.BoxGeometry(10, 30, 0.1);
const doorOutsideTexture = new THREE.TextureLoader().load('/Assets/textures/Door_Outside/Skyhold_Exterior.png');
doorOutsideTexture.wrapS = THREE.RepeatWrapping;
doorOutsideTexture.wrapT = THREE.RepeatWrapping;
doorOutsideTexture.repeat.set(1, 1); //
const doorOutsideMat = new THREE.MeshBasicMaterial({map:doorOutsideTexture}); 
const doorOutside = new THREE.Mesh(doorOutsideGeom, doorOutsideMat);
doorOutside.position.set(0, 17, 99);
scene.add(doorOutside);
 
// Curtain Pole
const curtainPoleGeom = new THREE.BoxGeometry(100, 2, 2);
const curtainPole = new THREE.Mesh(curtainPoleGeom, floorMaterial2);
curtainPole.position.set( 0, 85, -25);
scene.add(curtainPole);

const curtainPoleGeom2 = new THREE.BoxGeometry(100, 2, 2);
const curtainPole2 = new THREE.Mesh(curtainPoleGeom2, floorMaterial2);
curtainPole2.position.set( 0, 85, 50);
scene.add(curtainPole2);

//Texture for pillars and dooorframes
const pillarTexture = new THREE.TextureLoader().load('/Assets/textures/Pillar/PillarTextures.jpg');
pillarTexture.wrapS = THREE.RepeatWrapping;
pillarTexture.wrapT = THREE.RepeatWrapping;
pillarTexture.repeat.set(0.5, 30); 
const pillarMaterial = new THREE.MeshLambertMaterial({ map: pillarTexture, color: 0x7a7a7a });

const doorFrameTextures = new THREE.TextureLoader().load('/Assets/textures/Pillar/PillarTextures.jpg');
doorFrameTextures.wrapS = THREE.RepeatWrapping;
doorFrameTextures.wrapT = THREE.RepeatWrapping;
doorFrameTextures.repeat.set(1,1); 

// Door
const actualDoorGeom = new THREE.BoxGeometry(10, 15, 1);
const doorTexture = new THREE.TextureLoader().load('/Assets/textures/Door/Door_Textures.png');
doorTexture.wrapS = THREE.RepeatWrapping;
doorTexture.wrapT = THREE.RepeatWrapping;
doorTexture.repeat.set(1, 1); 
const doorMaterial = new THREE.MeshLambertMaterial({map:doorTexture, color: 0xcc9266}); 
const actualDoor1 = new THREE.Mesh(actualDoorGeom, doorMaterial);
actualDoor1.rotation.y = -Math.PI / 2; 
actualDoor1.position.set( 37, 8.5, -12);
scene.add(actualDoor1);

const actualDoor2 = new THREE.Mesh(actualDoorGeom, doorMaterial);
actualDoor2.rotation.y = -Math.PI / 2; 
actualDoor2.position.set( -37, 8.5, -12);
scene.add(actualDoor2);

const actualDoor3 = new THREE.Mesh(actualDoorGeom, doorMaterial);
actualDoor3.rotation.y = -Math.PI / 2; 
actualDoor3.position.set( 37, 8.5, 70);
scene.add(actualDoor3);

const actualDoor4 = new THREE.Mesh(actualDoorGeom, doorMaterial);
actualDoor4.rotation.y = -Math.PI / 2; 
actualDoor4.position.set( -37, 8.5, 70);
scene.add(actualDoor4);

const actualDoor5 = new THREE.Mesh(actualDoorGeom, doorMaterial);
actualDoor5.rotation.y = -Math.PI / 2; 
actualDoor5.position.set( 37, 15, -60);
scene.add(actualDoor5);

const actualDoor6 = new THREE.Mesh(actualDoorGeom, doorMaterial);
actualDoor6.rotation.y = -Math.PI / 2; 
actualDoor6.position.set( -37, 15, -60);
scene.add(actualDoor6);

//DoorFrame (Width)
const doorFrame1Geom = new THREE.BoxGeometry(2, 2, 14);
const doorFrameMaterial = new THREE.MeshLambertMaterial({ map: pillarTexture,color: 0x3d3d3d });
const doorFrame1 = new THREE.Mesh(doorFrame1Geom, doorFrameMaterial);
doorFrame1.position.set( 37, 16, -12);
scene.add(doorFrame1);

const doorFrame2 = new THREE.Mesh(doorFrame1Geom, doorFrameMaterial);
doorFrame2.position.set( -37, 16, -12);
scene.add(doorFrame2);

const doorFrame3 = new THREE.Mesh(doorFrame1Geom, doorFrameMaterial);
doorFrame3.position.set( 37, 16, 70);
scene.add(doorFrame3);

const doorFrame4 = new THREE.Mesh(doorFrame1Geom, doorFrameMaterial);
doorFrame4.position.set( -37, 16, 70);
scene.add(doorFrame4);

const doorFrame5 = new THREE.Mesh(doorFrame1Geom, doorFrameMaterial);
doorFrame5.position.set( 37, 21.5, -60);
scene.add(doorFrame5);

const doorFrame6 = new THREE.Mesh(doorFrame1Geom, doorFrameMaterial);
doorFrame6.position.set( -37, 21.5, -60);
scene.add(doorFrame6);


//DoorFrame (Length1)
const doorFrameGeom2 = new THREE.BoxGeometry(2, 15, 2);
const doorFrameL11 = new THREE.Mesh(doorFrameGeom2, doorFrameMaterial);
doorFrameL11.position.set( 37, 8, -18);
scene.add(doorFrameL11);

const doorFrameL12 = new THREE.Mesh(doorFrameGeom2, doorFrameMaterial);
doorFrameL12.position.set( -37, 8, -18);
scene.add(doorFrameL12);

const doorFrameL13 = new THREE.Mesh(doorFrameGeom2, doorFrameMaterial);
doorFrameL13.position.set( 37, 8, 64);
scene.add(doorFrameL13);

const doorFrameL14 = new THREE.Mesh(doorFrameGeom2, doorFrameMaterial);
doorFrameL14.position.set( -37, 8, 64);
scene.add(doorFrameL14);

const doorFrameL15 = new THREE.Mesh(doorFrameGeom2, doorFrameMaterial);
doorFrameL15.position.set( 37, 13, -66);
scene.add(doorFrameL15);

const doorFrameL16 = new THREE.Mesh(doorFrameGeom2, doorFrameMaterial);
doorFrameL16.position.set( -37, 13, -66);
scene.add(doorFrameL16);

//DoorFrame (Length1)
const doorFrameL21 = new THREE.Mesh(doorFrameGeom2, doorFrameMaterial);
doorFrameL21.position.set( 37, 8, -6);
scene.add(doorFrameL21);

const doorFrameL22 = new THREE.Mesh(doorFrameGeom2, doorFrameMaterial);
doorFrameL22.position.set( -37, 8, -6);
scene.add(doorFrameL22);

const doorFrameL23 = new THREE.Mesh(doorFrameGeom2, doorFrameMaterial);
doorFrameL23.position.set( 37, 8, 76);
scene.add(doorFrameL23);

const doorFrameL24 = new THREE.Mesh(doorFrameGeom2, doorFrameMaterial);
doorFrameL24.position.set( -37, 8, 76);
scene.add(doorFrameL24);

const doorFrameL25 = new THREE.Mesh(doorFrameGeom2, doorFrameMaterial);
doorFrameL25.position.set( 37, 13, -54);
scene.add(doorFrameL25);

const doorFrameL26 = new THREE.Mesh(doorFrameGeom2, doorFrameMaterial);
doorFrameL26.position.set( -37, 13, -54);
scene.add(doorFrameL26);

//Torches
const TorchGeom = new THREE.BoxGeometry(0.5, 4, 0.5);
const Torch1 = new THREE.Mesh(TorchGeom, doorFrameMaterial);
Torch1.position.set( 35, 11, -18);
Torch1.rotation.z = Math.PI / 6;
scene.add(Torch1);

const Torch2 = new THREE.Mesh(TorchGeom, doorFrameMaterial);
Torch2.position.set( 35, 11, -6);
Torch2.rotation.z = Math.PI / 6;
scene.add(Torch2);

const Torch3 = new THREE.Mesh(TorchGeom, doorFrameMaterial);
Torch3.position.set( -35, 11, -18);
Torch3.rotation.z = Math.PI / -6;
scene.add(Torch3);

const Torch4 = new THREE.Mesh(TorchGeom, doorFrameMaterial);
Torch4.position.set( -35, 11, -6);
Torch4.rotation.z = Math.PI / -6;
scene.add(Torch4);

const Torch5 = new THREE.Mesh(TorchGeom, doorFrameMaterial);
Torch5.position.set( 35, 11, 64);
Torch5.rotation.z = Math.PI / 6;
scene.add(Torch5);

const Torch6 = new THREE.Mesh(TorchGeom, doorFrameMaterial);
Torch6.position.set( 35, 11, 76);
Torch6.rotation.z = Math.PI / 6;
scene.add(Torch6);

const Torch7 = new THREE.Mesh(TorchGeom, doorFrameMaterial);
Torch7.position.set( -35, 11, 64);
Torch7.rotation.z = Math.PI / -6;
scene.add(Torch7);

const Torch8 = new THREE.Mesh(TorchGeom, doorFrameMaterial);
Torch8.position.set( -35, 11, 76);
Torch8.rotation.z = Math.PI / -6;
scene.add(Torch8);

const Torch9 = new THREE.Mesh(TorchGeom, doorFrameMaterial);
Torch9.position.set( 7.5 , 24, -97.5);
Torch9.rotation.x = Math.PI / 6;
scene.add(Torch9);

const Torch10 = new THREE.Mesh(TorchGeom, doorFrameMaterial);
Torch10.position.set( -7.5 , 24, -97.5);
Torch10.rotation.x = Math.PI / 6;
scene.add(Torch10);

const Torch11 = new THREE.Mesh(TorchGeom, doorFrameMaterial);
Torch11.position.set( 35, 16, -66);
Torch11.rotation.z = Math.PI / 6;
scene.add(Torch11);

const Torch12 = new THREE.Mesh(TorchGeom, doorFrameMaterial);
Torch12.position.set( 35, 16, -54);
Torch12.rotation.z = Math.PI / 6;
scene.add(Torch12);

const Torch13 = new THREE.Mesh(TorchGeom, doorFrameMaterial);
Torch13.position.set( -35, 16, -66);
Torch13.rotation.z = Math.PI / -6;
scene.add(Torch13);

const Torch14 = new THREE.Mesh(TorchGeom, doorFrameMaterial);
Torch14.position.set( -35, 16, -54);
Torch14.rotation.z = Math.PI / -6;
scene.add(Torch14);


// Tabletop
const tableTopGeom = new THREE.BoxGeometry(7, 1, 24);
const furnitureWoodTexture = new THREE.TextureLoader().load('/Assets/textures/Furniture_Wood/WoodTextures.jpg');
furnitureWoodTexture.wrapS = THREE.RepeatWrapping;
furnitureWoodTexture.wrapT = THREE.RepeatWrapping;
furnitureWoodTexture.repeat.set(1,1); //
const tableMaterial = new THREE.MeshLambertMaterial({ map: furnitureWoodTexture, color: 0x693612});
const tableTop1 = new THREE.Mesh(tableTopGeom, tableMaterial);
tableTop1.position.set( 22, 3, 17);
scene.add(tableTop1);

const tableTop2 = new THREE.Mesh(tableTopGeom, tableMaterial);
tableTop2.position.set( 22, 3, 44);
scene.add(tableTop2);

const tableTop3 = new THREE.Mesh(tableTopGeom, tableMaterial);
tableTop3.position.set( -22, 3, 17);
scene.add(tableTop3);

const tableTop4 = new THREE.Mesh(tableTopGeom, tableMaterial);
tableTop4.position.set( -22, 3, 44);
scene.add(tableTop4);


//Candle
const candleGeom = new THREE.CylinderGeometry( 0.5, 0.5, 2, 10 );
const candleMaterial = new THREE.MeshLambertMaterial({ color: 0xddded1 });
const candle1 = new THREE.Mesh(candleGeom, candleMaterial);
candle1.position.set( 22, 4, 24);
scene.add(candle1);

const candle2 = new THREE.Mesh(candleGeom, candleMaterial);
candle2.position.set( 22, 4, 10);
scene.add(candle2);

const candle3 = new THREE.Mesh(candleGeom, candleMaterial);
candle3.position.set( 22, 4, 51);
scene.add(candle3);

const candle4 = new THREE.Mesh(candleGeom, candleMaterial);
candle4.position.set( 22, 4, 37);
scene.add(candle4);


const candle5 = new THREE.Mesh(candleGeom, candleMaterial);
candle5.position.set( -22, 4, 24);
scene.add(candle5);

const candle6 = new THREE.Mesh(candleGeom, candleMaterial);
candle6.position.set( -22, 4, 10);
scene.add(candle6);

const candle7 = new THREE.Mesh(candleGeom, candleMaterial);
candle7.position.set( -22, 4, 51);
scene.add(candle7);

const candle8 = new THREE.Mesh(candleGeom, candleMaterial);
candle8.position.set( -22, 4, 37);
scene.add(candle8);


//Table base

const tableBaseGeom = new THREE.BoxGeometry(2, 3, 20);
const tableBase = new THREE.Mesh(tableBaseGeom, tableMaterial);
tableBase.position.set( 22, 1, 17);
scene.add(tableBase);

const tableBase2 = new THREE.Mesh(tableBaseGeom, tableMaterial);
tableBase2.position.set( 22, 1, 44);
scene.add(tableBase2);

const tableBase3 = new THREE.Mesh(tableBaseGeom, tableMaterial);
tableBase3.position.set( -22, 1, 17);
scene.add(tableBase3);

const tableBase4 = new THREE.Mesh(tableBaseGeom, tableMaterial);
tableBase4.position.set( -22, 1, 44);
scene.add(tableBase4);

//Wood Chairs
const woodChairGeom = new THREE.BoxGeometry(3, 2.5, 24);
const woodChair1 = new THREE.Mesh(woodChairGeom, tableMaterial);
woodChair1.position.set( 17, 1, 17);
scene.add(woodChair1);

const woodChair2 = new THREE.Mesh(woodChairGeom, tableMaterial);
woodChair2.position.set( 27, 1, 17);
scene.add(woodChair2);

const woodChair3 = new THREE.Mesh(woodChairGeom, tableMaterial);
woodChair3.position.set( 27, 1, 44);
scene.add(woodChair3);

const woodChair4 = new THREE.Mesh(woodChairGeom, tableMaterial);
woodChair4.position.set( 17, 1, 44);
scene.add(woodChair4);

const woodChair5 = new THREE.Mesh(woodChairGeom, tableMaterial);
woodChair5.position.set( -17, 1, 17);
scene.add(woodChair5);

const woodChair6 = new THREE.Mesh(woodChairGeom, tableMaterial);
woodChair6.position.set( -27, 1, 17);
scene.add(woodChair6);

const woodChair7 = new THREE.Mesh(woodChairGeom, tableMaterial);
woodChair7.position.set( -27, 1, 44);
scene.add(woodChair7);

const woodChair8 = new THREE.Mesh(woodChairGeom, tableMaterial);
woodChair8.position.set( -17, 1, 44);
scene.add(woodChair8);

// Chandelier Strings
const stringGeom = new THREE.BoxGeometry(0.1, 150, 0.1);
const stringMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff }); 
const string1 = new THREE.Mesh(stringGeom, stringMaterial);
string1.position.set(0, 128, 20);
scene.add(string1);

const string2 = new THREE.Mesh(stringGeom, stringMaterial);
string2.position.set(0, 128, -30);
scene.add(string2);


// Walls
const wallTexture = new THREE.TextureLoader().load('/Assets/textures/Wall_Masonry/WallTextures.jpg');
wallTexture.wrapS = THREE.RepeatWrapping;
wallTexture.wrapT = THREE.RepeatWrapping;
wallTexture.repeat.set(15, 15); //
const wallMaterial = new THREE.MeshPhongMaterial({ map: wallTexture, color: 0x3d3d3d });


const wall1 = createWall(75, 200, 1, wallMaterial);
const wall2 = createWall(75, 150, 1, wallMaterial);
const wall3 = createWall(1, 150, 260, wallMaterial); 
const wall4 = createWall(1, 150, 260, wallMaterial); 

// Actually columns not walls
const wall5 = createWall(3.5, 150, 2, pillarMaterial);
const wall6 = createWall(3.5, 150, 2, pillarMaterial);

const wall7 = createWall(3.5, 150, 2, pillarMaterial);
const wall8 = createWall(3.5, 150, 2, pillarMaterial);

const wall9 = createWall(3.5, 150, 2, pillarMaterial);
const wall10 = createWall(3.5, 150, 2, pillarMaterial);

const wall11 = createWall(3.5, 150, 2, pillarMaterial);
const wall12 = createWall(3.5, 150, 2, pillarMaterial);

// Entrance Wall
const wall13 = createWall(75, 200, 1, wallMaterial);

// Set wall positions individually
wall1.position.set(0, 100, -100); 
wall2.position.set(0, -20, 100); 

wall3.position.set(37.5, 75, 0); 
wall4.position.set(-37.5, 75, 0); 

// Actually columns not walls
wall5.position.set(36, 75, -21); 
wall6.position.set(-36, 75, -21); 

wall7.position.set(36, 75, -1.02); 
wall8.position.set(-36, 75, -1.02); 


wall9.position.set(36, 75, 61.02); 
wall10.position.set(-36, 75, 61.02); 

wall11.position.set(36, 75, 80); 
wall12.position.set(-36, 75, 80); 

wall13.position.set(0, 100, 130);



scene.add(wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13);

// ROOF
const roof1 = new THREE.Mesh(new THREE.BoxGeometry(10, 65, 260), wallMaterial);
const roof2 = new THREE.Mesh(new THREE.BoxGeometry(10, 65, 260), wallMaterial);


// Position the walls
roof1.position.set(20, 170, 0); 
roof2.position.set(-20, 170, 0); 


roof1.rotation.z = Math.PI / 4.5; 
roof2.rotation.z = -Math.PI / 4.5; 

// Add the walls to the scene
scene.add(roof1, roof2);

//ROOF BEAMS
//Beam for first set of doors
const beamGeom = new THREE.BoxGeometry(2.8, 65, 2);
const beam1 = new THREE.Mesh(beamGeom, floorMaterial2);
beam1.position.set(20, 160, -21);
beam1.rotation.z = -Math.PI / -4.5;
scene.add(beam1);

const beam2 = new THREE.Mesh(beamGeom, floorMaterial2);
beam2.position.set(-20, 160, -21);
beam2.rotation.z = -Math.PI / 4.5;
scene.add(beam2);

const beam3 = new THREE.Mesh(beamGeom, floorMaterial2);
beam3.position.set(20, 160, -1.02);
beam3.rotation.z = -Math.PI / -4.5;
scene.add(beam3);

const beam4 = new THREE.Mesh(beamGeom, floorMaterial2);
beam4.position.set(-20, 160, -1.02);
beam4.rotation.z = -Math.PI / 4.5;
scene.add(beam4);

// Beam for 2nd set of doors
const beam5 = new THREE.Mesh(beamGeom, floorMaterial2);
beam5.position.set(20, 160, 61.02);
beam5.rotation.z = -Math.PI / -4.5;
scene.add(beam5);

const beam6 = new THREE.Mesh(beamGeom, floorMaterial2);
beam6.position.set(-20, 160, 61.02);
beam6.rotation.z = -Math.PI / 4.5;
scene.add(beam6);

const beam7 = new THREE.Mesh(beamGeom, floorMaterial2);
beam7.position.set(20, 160, 80);
beam7.rotation.z = -Math.PI / -4.5;
scene.add(beam7);

const beam8 = new THREE.Mesh(beamGeom, floorMaterial2);
beam8.position.set(-20, 160, 80);
beam8.rotation.z = -Math.PI / 4.5;
scene.add(beam8);


// Ambient light - very soft, almmost nonexistent. To simply replicate reflected brightness throughout the scene.
const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.1); 
scene.add(ambientLight);

// WindowLight1
const WindowLights = new THREE.PointLight(0xffebc7, 10, 10); 
WindowLights.position.set(0, 85, -80); 
scene.add(WindowLights);

const WindowLights3 = new THREE.PointLight(0xffebc7, 10, 10); 
WindowLights3.position.set(0, 55, -80); 
scene.add(WindowLights3);

// Balcony Windows
const WindowLights5 = new THREE.PointLight(0xffebc7, 3, 60); 
WindowLights5.position.set(0, 80, 100); 
scene.add(WindowLights5);

// Balcony Blue light
const spotlight5 = new THREE.SpotLight(0x80a2ff, 10, 100, Math.PI / 2, 0.5, 2); // Parameters: (color, intensity, distance, angle, penumbra, decay)
spotlight5.position.set(0, 120, 105); 
spotlight5.target.position.set(0, 0, -85); // Target position for the light, pointing downwards
scene.add(spotlight5);

// WindowLight2
const WindowLights2 = new THREE.PointLight(0xffebc7, 5, 60); 
WindowLights2.position.set(0, 50, -70); 
scene.add(WindowLights2);

const WindowLights4 = new THREE.PointLight(0xffebc7, 5, 40); 
WindowLights4.position.set(0, 120, -70); 
scene.add(WindowLights4);

// Spotlight coming from window
const spotlight = new THREE.SpotLight(0x037dff, 5, 10, Math.PI / 2, 0.5, 2); 
spotlight.position.set(0, 20, -95); 
spotlight.target.position.set(0, 0, -50); 
scene.add(spotlight);

// Spotlight coming from window (Blue Upper)
const spotlight1 = new THREE.SpotLight(0x80a2ff, 10, 100, Math.PI / 2, 0.5, 2);
spotlight1.position.set(0, 130, -95); 
spotlight1.target.position.set(0, 0, -100); 
scene.add(spotlight1);

// Spotlight coming from window (Blue Lower)
const spotlight4 = new THREE.SpotLight(0x80a2ff, 10, 100, Math.PI / 2, 0.5, 2); 
spotlight4.position.set(0, 80, -95); 
spotlight4.target.position.set(0, 0, -90); 
scene.add(spotlight4);

// Spotlight coming from door outside
const spotlight3 = new THREE.SpotLight(0xffebc7, 10, 50, Math.PI / 2, 0.5, 2); 
spotlight3.position.set(0, 30, 95); 
spotlight3.target.position.set(0, 0, 70);
scene.add(spotlight3);



// Add point lights for the braziers
const brazierLight1 = new THREE.PointLight(0xd44c02, 4, 10); 
brazierLight1.position.set(-19, 8, -31.5); 
scene.add(brazierLight1);

const brazierLight2 = new THREE.PointLight(0xd44c02, 4, 10); 
brazierLight2.position.set(19, 8, -31.5); 
scene.add(brazierLight2);

const brazierLight3 = new THREE.PointLight(0xd44c02, 4, 10); 
brazierLight3.position.set(10, 5, 31); 
scene.add(brazierLight3);

const brazierLight4 = new THREE.PointLight(0xd44c02, 4, 10); 
brazierLight4.position.set(-10, 5, 31); 
scene.add(brazierLight4);

const brazierLight5 = new THREE.PointLight(0xd44c02, 4, 10); 
brazierLight5.position.set(-19, 13, -48); 
scene.add(brazierLight5);

const brazierLight6 = new THREE.PointLight(0xd44c02, 4, 10); 
brazierLight6.position.set(19, 13, -48); 
scene.add(brazierLight6);

// Torch light
const torchLight1 = new THREE.PointLight(0xd44c02, 6, 15); 
torchLight1.position.set( 33, 12, -18); 
scene.add(torchLight1);

const torchLight2 = new THREE.PointLight(0xd44c02, 6, 15); 
torchLight2.position.set( 33, 12, -6); 
scene.add(torchLight2);

const torchLight3 = new THREE.PointLight(0xd44c02, 6, 15); 
torchLight3.position.set( -33, 12, -18); 
scene.add(torchLight3);

const torchLight4 = new THREE.PointLight(0xd44c02, 6, 15); 
torchLight4.position.set( -33, 12, -6); 
scene.add(torchLight4);

const torchLight5 = new THREE.PointLight(0xd44c02, 6, 15); 
torchLight5.position.set( 33, 12, 64); 
scene.add(torchLight5);

const torchLight6 = new THREE.PointLight(0xd44c02, 6, 15); 
torchLight6.position.set( 33, 12, 76); 
scene.add(torchLight6);

const torchLight7 = new THREE.PointLight(0xd44c02, 6, 15); 
torchLight7.position.set( -33, 12, 64); 
scene.add(torchLight7);

const torchLight8 = new THREE.PointLight(0xd44c02, 6, 15); 
torchLight8.position.set( -33, 12, 76); 
scene.add(torchLight8);

const torchLight9 = new THREE.PointLight(0xd44c02, 6, 15);
torchLight9.position.set(7.5 , 24, -94.5); 
scene.add(torchLight9);

const torchLight10 = new THREE.PointLight(0xd44c02, 6, 15); 
torchLight10.position.set(-7.5 , 24, -94.5); 
scene.add(torchLight10);

const torchLightBack1 = new THREE.PointLight(0xd44c02, 6, 15); 
torchLightBack1.position.set(7.5 , 15, 97); 
scene.add(torchLightBack1);

const torchLightBack2 = new THREE.PointLight(0xd44c02, 6, 15); 
torchLightBack2.position.set(-7.5 , 15, 97);
scene.add(torchLightBack2);

const torchLight11 = new THREE.PointLight(0xd44c02, 6, 15); 
torchLight11.position.set( 33, 16, -66); 
scene.add(torchLight11);

const torchLight12 = new THREE.PointLight(0xd44c02, 6, 15); 
torchLight12.position.set( 33, 16, -54); 
scene.add(torchLight12);

const torchLight13 = new THREE.PointLight(0xd44c02, 6, 15); 
torchLight13.position.set( -33, 16, -66); 
scene.add(torchLight13);

const torchLight14 = new THREE.PointLight(0xd44c02, 6, 15); 
torchLight14.position.set( -33, 16, -54); 
scene.add(torchLight14);

// Candle Light
const candleLight1 = new THREE.PointLight(0xd44c02, 3, 15); 
candleLight1.position.set( 22, 6, 24); 
scene.add(candleLight1);

const candleLight2 = new THREE.PointLight(0xd44c02, 3, 15); 
candleLight2.position.set( 22, 6, 10); 
scene.add(candleLight2);

const candleLight3 = new THREE.PointLight(0xd44c02, 3, 15); 
candleLight3.position.set( 22, 6, 51); 
scene.add(candleLight3);

const candleLight4 = new THREE.PointLight(0xd44c02, 3, 15); 
candleLight4.position.set( 22, 6, 37); 
scene.add(candleLight4);

const candleLight5 = new THREE.PointLight(0xd44c02, 3, 15); 
candleLight5.position.set( -22, 6, 24); 
scene.add(candleLight5);

const candleLight6 = new THREE.PointLight(0xd44c02, 3, 15); 
candleLight6.position.set( -22, 6, 10); 

const candleLight7 = new THREE.PointLight(0xd44c02, 3, 15); 
candleLight7.position.set( -22, 6, 51);
scene.add(candleLight7);

const candleLight8 = new THREE.PointLight(0xd44c02, 3, 15); 
candleLight8.position.set( -22, 6, 37);
scene.add(candleLight8);

//Chandelier lights

const Chandelier1Light = new THREE.PointLight(0xcc3b02, 8, 50); 
Chandelier1Light.position.set(0, 45, 20); 
scene.add(Chandelier1Light);

const Chandelier2Light = new THREE.PointLight(0xcc3b02, 8, 50); 
Chandelier2Light.position.set(0, 45, -28); 
scene.add(Chandelier2Light);

function createWall(width, height, depth, material) {
    const wallGeometry = new THREE.BoxGeometry(width, height, depth);
    return new THREE.Mesh(wallGeometry, material);
}

// PARTICLE EFFECTS
const center = new THREE.Vector3(0, 100, -100); 
const radius = 100; 


const particleGeometry = new THREE.BufferGeometry();
const particleCount = 200;
const positions = [];
const colors = [];

for (let i = 0; i < particleCount; i++) {

    const theta = Math.random() * Math.PI * 2; 
    const phi = Math.acos(Math.random() * 2 - 1);
    const u = Math.random(); 

    const x = center.x + radius * Math.sin(phi) * Math.cos(theta);
    const y = center.y + radius * Math.cos(phi);
    const z = center.z + radius * Math.sin(phi) * Math.sin(theta);

    positions.push(x, y, z);

    const greyishWhite = 0.9; 
    colors.push(greyishWhite, greyishWhite, greyishWhite);
}

particleGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
particleGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

const particleMaterial = new THREE.PointsMaterial({
    size: 0.05, 
    vertexColors: true
});

const particles = new THREE.Points(particleGeometry, particleMaterial);
scene.add(particles);

// particle movement
const particleSpeed = 0.05;

function animateParticles() {
    const positions = particleGeometry.attributes.position.array;
    for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] -= particleSpeed;
        if (positions[i + 1] < -5) {
            positions[i] = center.x + radius * (Math.random() - 0.5);
            positions[i + 1] = center.y + radius * (Math.random() - 0.5);
            positions[i + 2] = center.z + radius * (Math.random() - 0.5);
        }
    }
    particleGeometry.attributes.position.needsUpdate = true;
}



// Camera setup
camera.position.set(0, 10, 30); // Adjusted camera position
camera.lookAt(0, 0, 0);

// Resize handling
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Render loop
function animate() {
    requestAnimationFrame(animate);
    animateParticles();
    renderer.render(scene, camera);
}
animate();