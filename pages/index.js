import React, { Component } from 'react'
import { graphql } from 'react-relay'
import { withTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import withData from '../lib/withData'
import MediaPreview from '../components/MediaPreview'
import theme from '../theme'

let AppGrid = props => {

  return (
    <div>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper>
            <MediaPreview media={props.getMedia} />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            <Button>
              Button 1
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            <Button>
              Button 2
            </Button>
          </Paper>
        </Grid>
      </Grid>
      <Button color="secondary">
        Button 3
      </Button>
    </div>
  )
}
// AppGrid = withTheme(theme)(AppGrid)


class Index extends Component {
  static displayName = `Index`

  render () {
    return <AppGrid {...this.props} />
  }
}

// Index = withTheme(theme)(Index)

export default withData(Index, {
  query: graphql`
        query pages_indexQuery {
            getMedia(id: "test") {
                ...MediaPreview_media
            }
        }
    `
})
