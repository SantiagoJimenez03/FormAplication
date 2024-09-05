function enviarSolicitud(n){
  return console.log(`enviado solicitud ${n}`)
}

const funcionPromesas = (i) =>{
  return new Promise((resolve,reject)=>{
    resolve(enviarSolicitud(i));
    // if(true){
    //   resolve(enviarSolicitud(i));
    // }else{
    //   reject(new Error("No se puedo hacer nada"));
    // }
  })
}

async function cualquiera() {
  for(let i=1; i<5;i++){
    await funcionPromesas(i);
  }
}

cualquiera();