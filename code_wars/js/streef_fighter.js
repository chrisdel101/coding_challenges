
fighters = [
    ['Ryu', 'E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega'],
    ['Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison']
];
// position = [0, 0];

function streetFighterSelection(fighters, position, moves){
    var figherHovers = [];

    var x_coordinate = position[0];
    var y_coordinate = position[1];

    function yMoveRight(){
        if((y_coordinate >= fighters[0].length-1) || (y_coordinate >= fighters[1].length-1)){
            console.log('moving to start of array')
            y_coordinate = 0
        } else {
            y_coordinate++;
        }
    }
    function yMoveLeft(){
        if(y_coordinate === 0){
            console.log('moving to end of array')
            y_coordinate = fighters[0].length;
        }
        y_coordinate--;
    }

    function xMoveUp(){
        if(x_coordinate === 0){
        console.log("can't move up")
            return;
        }
        x_coordinate--
    }
    function xMoveDown(){
        if(x_coordinate === 1){
        console.log("can't move down")
            return;
        }
        x_coordinate++
    }
    function nameFighter(){
        if(x_coordinate === 0){
            figherHovers.push(fighters[0][y_coordinate])
            console.log(y_coordinate)
        } else {
            figherHovers.push(fighters[1][y_coordinate])
            console.log(y_coordinate)
        }
    }
    for (var i = 0; i < moves.length; i++) {

        switch(moves[i]){
            case 'right':
            yMoveRight();
            nameFighter()
            break;
            case 'left':
            yMoveLeft();
            nameFighter();
            break;
            case 'up':
            xMoveUp();
            nameFighter();
            break;
            case 'down':
            xMoveDown();
            nameFighter();
            break;
        }
    }
    // moves.forEach((move) => {
    // })

    return figherHovers
}

console.log(streetFighterSelection([
    ['Ryu', 'E.Honda', 'Blanka', 'Guile', 'Balrog',     'Vega'],
    ['Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison']
],[1,5],
// ['left','left','left','left','left','left','left','left']))
['right']))
