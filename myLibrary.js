
function isTouching(object1, object2){
    var bulletRightEdge = object1.x + object1.width;
    var wallLeftEdge = object2.x;
    if(bulletRightEdge >= wallLeftEdge){
      return true;
    }else {
      return false
    }
  }