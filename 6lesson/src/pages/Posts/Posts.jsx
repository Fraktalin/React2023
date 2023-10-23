import { useLoaderData, useNavigation } from 'react-router-dom'

import Avatar from '@mui/material/Avatar'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'

import { Loader } from '../../components/Loader/Loader.jsx'

const Posts = () => {
  const posts = useLoaderData()
  const navigation = useNavigation()
  console.log(posts)
  const isLoading = navigation.state === 'loading'

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Posts
      </Typography>

      {isLoading ? (
        <Loader />
      ) : (
        <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {posts.map((post) => (
            <ListItem alignItems="flex-start" key={post.id}>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar />
                </ListItemAvatar>
                <ListItemText>
                  <Typography variant="h5" gutterBottom>
                    {post.title}
                  </Typography>
                  <Typography variant="span" gutterBottom>
                    {post.body}
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )}
    </>
  )
}

export { Posts as Component }
