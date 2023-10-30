import JsonPlaceholderAPI from "~/api/JsonPlaceholderAPI/JsonPlaceholderAPI";
import { Link, useLoaderData } from "@remix-run/react";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import type { LoaderFunction } from "@remix-run/node";

export const loader = async ({
  request: { signal },
}: Parameters<LoaderFunction>[number]) => {
  return await JsonPlaceholderAPI.getComments({ signal });
};

export default function CommentsPage() {
  const comments = useLoaderData<typeof loader>();
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Comments
      </Typography>
      <List>
        {comments.map((comment) => (
          <ListItem
            key={comment.id}
            component={Link}
            to={`/comments/${comment.id}`}
          >
            <ListItemText primary={comment.email} secondary={comment.body} />
          </ListItem>
        ))}
      </List>
    </>
  );
}
