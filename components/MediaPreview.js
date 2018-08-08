import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'

const MediaPreview = props => {
  return (
    <div key={props.media.id}>{props.media.title}</div>
  )
}

export default createFragmentContainer(MediaPreview, {
  media: graphql`
    fragment MediaPreview_media on Media {
      id
      title
    }
  `
})
