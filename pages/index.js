import React, { Component } from 'react'
import { graphql } from 'react-relay'
import withData from '../lib/withData'
import MediaPreview from '../components/MediaPreview'

class Index extends Component {
  static displayName = `Index`

  render (props) {
    return (
      <div>
        <MediaPreview media={this.props.getMedia} />
      </div>
    )
  }
}

export default withData(Index, {
  query: graphql`
        query pages_indexQuery {
            getMedia(id: "test") {
                ...MediaPreview_media
            }
        }
    `
})
