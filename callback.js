const huiswerkMaken = (vak, callback) => {
    console.log(`ik ga mijn ${vak} maken`);
    callback;    
}

const klaarMetHuiswerk = () => {
        console.log("ik ben klaar met huiswerk maken");
    }


huiswerkMaken("wiskunde", setTimeout((klaarMetHuiswerk), 3000));