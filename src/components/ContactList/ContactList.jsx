import { useSelector } from "react-redux";
import { selectVisibleContact } from "../../redux/contacts/slice";
import Contact from "../Contact/Contact";
import { List, ListItem, Divider, Box, Typography } from "@mui/material";

const ContactList = () => {
  const visibleContact = useSelector(selectVisibleContact);

  if (visibleContact.length === 0) {
    return (
      <Typography variant="body1" textAlign="center" mt={2}>
        No contacts found.
      </Typography>
    );
  }

  return (
    <Box maxWidth={600} margin="auto" mt={2}>
      <List>
        {visibleContact.map((contact, index) => (
          <Box key={contact.id}>
            <ListItem>
              <Contact data={contact} />
            </ListItem>
            {index < visibleContact.length - 1 && <Divider />}
          </Box>
        ))}
      </List>
    </Box>
  );
};

export default ContactList;
