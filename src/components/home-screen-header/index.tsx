import React from 'react'
import DefaultText from '../common/custom-text/index'

type Props = {
  title: string
}

const HomeHeader = ({ title }: Props) => {
  return (
    <DefaultText fontSize="24" fontWeight="bold">
      {title}
    </DefaultText>
  )
}

export default HomeHeader
