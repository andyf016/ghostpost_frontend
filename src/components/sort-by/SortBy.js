import React from 'react'
import All from '../all/All'
import Boasts from '../boasts/Boasts'
import Roasts from '../roasts/Roasts'
import Highest from '../highest/Highest'


const SortBy = props =>{
    let { sort } = props;
    switch (sort){
      case 'all':
        return <All/>
      case 'boast':
        return <Boasts />
      case 'roast':
        return <Roasts />
      case 'highest':
        return <Highest />
      default:
        return <All />
    }
  }

  export default SortBy