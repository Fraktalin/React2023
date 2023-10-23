import { useLoaderData, useNavigation } from 'react-router-dom'
import { Avatar, Grid, Paper } from '@mui/material';

import { Loader } from '../../components/Loader/Loader.jsx'
const Comments = () => {
  const comments = useLoaderData()
  const navigation = useNavigation()
  console.log(comments)
  const isLoading = navigation.state === 'loading'

  return (
    <div style={{ padding: 14 }}>
      <h1>Comments</h1>

      {isLoading ? (
        <Loader />
      ) : (
        <Paper style={{ padding: `40px 20px` }}>
          {comments.map((comment) => (
            <Grid key={comment.id} container wrap="nowrap" spacing={2}>
              <Grid item>
                <Avatar id={comment.id} />
              </Grid>

              <Grid justifyContent="left" item xs zeroMinWidth>
                <h4 style={{ margin: 0, textAlign: 'left' }}>{comment.name}</h4>
                <p style={{ textAlign: 'left', color: 'gray' }}>email: {comment.email}</p>
                <p style={{ textAlign: 'left' }}>{comment.body}</p>
              </Grid>
            </Grid>
          ))}
        </Paper>
      )}
    </div>
  )
}

export { Comments as Component }
