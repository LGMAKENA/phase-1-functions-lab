// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    const distanceInBlocks = Math.abs(pickupLocation - hqLocation);
    return distanceInBlocks;
  }
  
  function distanceFromHqInFeet(blocks) {
    const feetPerBlock = 264;
    const distanceInFeet = Math.abs(blocks - 42) * feetPerBlock;
    return distanceInFeet
  }

  

  function distanceTravelledInFeet(startBlock, endBlock) {
    const blockLength = 264;
    const distanceInFeet = Math.abs(endBlock - startBlock) * blockLength;
    return distanceInFeet;
  }
  function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
    
    if (distanceInFeet <= 400) {
      return 0;
    } else if (distanceInFeet <= 2000) {
      const distanceInFeetAfterFirst400 = distanceInFeet - 400;
      const farePriceInCents = distanceInFeetAfterFirst400 * 2;
      return farePriceInCents / 100;
    } else if (distanceInFeet <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }

