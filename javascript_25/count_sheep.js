function countSheeps(sheep) {
    // TODO
    let counter = 0
      sheep.forEach(sh => {
          if(sh) counter++
      })
      return counter
  }