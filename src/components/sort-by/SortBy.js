import React from 'react'
import All from '../all/All'
import Boasts from '../boasts/Boasts'
import Roasts from '../roasts/Roasts'
import Highest from '../highest/Highest'
import PostForm from '../post-form/PostForm'

const SortBy = props =>{
    let { sort } = props;
    console.log(sort)
    switch (sort){
      case 'all':
        return <All/>
      case 'boast':
        return <Boasts />
      case 'roast':
        return <Roasts />
      case 'highest':
        return <Highest />
      case 'post':
          return <PostForm />
      default:
        return <All />
    }
  }

  export default SortBy