import React from 'react'

const SortBy = props =>{
    let { sort } = props;
    switch (sort){
      case 'all':
        return <SortAll/>
      case 'boast':
        return <Boast />
      case 'roast':
        return <Roast />
      case 'highest':
        return <Highest />
      default:
        return <SortAll />
    }
  }

  export default SortBy