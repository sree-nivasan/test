

const {random , sin , cos} = Math;

let particlesData  = [];
const connections = []; 


// triangles calculation remain presist;

const triangles = []

let numConnected = 0;

let particleCount = 10000;
let radius = 5000;
let rHalf = radius/2;



let effectController = {
  showDots : true,
  showLines : true,
  minDistance : 150,
  limitConnections: !false,
  maxConnections : 3 + random() * 7,
  particleCount : particleCount, 
  x :radius,
  y:radius,
  z:radius,
}

let segments  = effectController.particleCount;
particleCount = effectController.particleCount;


const  type = {'randomdata' : generateRandomData}

onmessage = function (event) {
    const particles = type[event.data.type]?.();
    console.log(segments,'segment');

    postMessage(  {type:'randomdata' , particles  }) ;
};
  

function addGrid(){}

  function generateRandomData() {

    for (let i = 0; i <= segments; i++) {
        let rx =  effectController.x;
        let ry =  effectController.y;
        let rz =  effectController.z;
        let x = random() * rx - rx /2 ;
        let y = random() * ry - ry /2 ;
        let z = random() * rz - rz /2 ;
       

        particlesData.push({
          id : i,
          numConnections : 0,
          connectedParticles: [],
          position : {x,y,z},
          radius: random(),
          label : Math.random().toString(32).slice(4,-1), 
          color : { r:random(),g:random(),b:random() }  // {r:Math.abs(Math.sin(i)),g :Math.abs(Math.cos(i)) , b:Math.abs(Math.cos(i))}
        });
    
    }
    
    
    
    for (let i = 0; i < segments; i++) {
        const particleData = particlesData[i];
      
        if (effectController.limitConnections && particleData.numConnections >= effectController.maxConnections){
          continue
        }
          
        for (let j = i + 1; j < segments; j++) {
    
          const particleDataB = particlesData[j];
      
          if (effectController.limitConnections && particleDataB.numConnections >= effectController.maxConnections)
            continue;
      
            
          let {x, y ,z} = particleData.position;
          let {x : x1, y:y1 ,z:z1} = particleDataB.position;
      
          const dx = x -x1 ;//particlePositions[id1 * 3] - particlePositions[id2 * 3];
          const dy =y-y1 ;//particlePositions[id1 * 3 + 1] - particlePositions[id2 * 3 + 1];
          const dz = z-z1;//particlePositions[id1 * 3 + 2] - particlePositions[id2 * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
      
          if (  dist < effectController.minDistance ) {
            particleData.numConnections++;
            particleDataB.numConnections++;
            // console.log(id1,particleData.numConnections, id2);
            const alpha = 1.0 - dist / effectController.minDistance;
            // linePositions[vertexpos++] = x //particlePositions[id1 * 3];
            // linePositions[vertexpos++] = y//particlePositions[id1 * 3 + 1];
            // linePositions[vertexpos++] = z//particlePositions[id1 * 3 + 2];
      
            let {x : x1, y:y1 ,z:z1} = particleDataB.position;   
            numConnected++;
            connections.push({to : particleData.id , from: particleDataB.id , alpha , color1 :particleData.color, color2 : particleDataB.color   });
            
            for(let k = j+1 ; k<segments ; k++){

              let particleDataC = particlesData[k];

                    let {x:x2,y:y2,z:z2} = particleDataC.position

                    const dx1 = x - x2;
                    const dy1 = y - y2;
                    const dz1 = z - z2;
      
                    const dx2 = x1 - x2;
                    const dy2 = y1 - y2;
                    const dz2 = z1 - z2;
      
                    let dist1 = Math.sqrt(dx * dx + dy * dy + dz * dz);
                    let dist2 = Math.sqrt(dx1 * dx1 + dy1 * dy1 + dz1 * dz1);
                    let dist3 = Math.sqrt(dx2 * dx2 + dy2 * dy2 + dz2 * dz2);
      
                    let md = effectController.minDistance * 1.1;

                    let alpha1 = 1.0 - dist1 / md;
                    let alpha2 = 1.0 - dist2 / md;
                    let alpha3 = 1.0 - dist3 / md;


                    if (dist1 < md && dist2 < md && dist3 < md) {

                         triangles.push({ id:[particleData.id,particleDataB.id,particleDataC.id] , alpha :[alpha1,alpha2,alpha3] });
                    
                    
                    }

            }

          }
          
        }
      }
    
    
    
      return {  particlesData , connections , trianglesData : triangles ,metadata : {...effectController} };
      
  }

  

// export default worker;