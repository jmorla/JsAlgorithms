

const catAndMouse = (x, y, z) => {
    
    const catA = Math.abs(z - x);
    const catB = Math.abs(z - y);
    
    if(catA > catB) {
        return "Cat B";
    }
    if(catA < catB) {
        return "Cat A";
    }
    if(catA === catB) {
        return "Mouse C";
    }
    

};

exports.catAndMouse = catAndMouse;