import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteContact, patchContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";
import {
  Box,
  Typography,
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Stack,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { FaUser, FaPhone } from "react-icons/fa";

const Contact = ({ data: { name, number, id } }) => {
  const dispatch = useDispatch();
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editForm, setEditForm] = useState({ name, number });

  const handleDelete = () => {
    toast.promise(dispatch(deleteContact(id)).unwrap(), {
      loading: "Deleting...",
      success: <b>Contact deleted!</b>,
      error: <b>Could not delete contact.</b>,
    });
    setIsDeleteOpen(false);
  };

  const handlePatch = () => {
    toast.promise(dispatch(patchContact({ id, ...editForm })).unwrap(), {
      loading: "Editing...",
      success: <b>Contact edited!</b>,
      error: <b>Could not edit contact.</b>,
    });
    setIsEditOpen(false);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding={2}
      border={1}
      borderRadius={2}
      marginBottom={2}
      width="100%"
      sx={{ boxSizing: "border-box" }}
    >
      <Box flex={1}>
        <Typography>
          <FaUser style={{ marginRight: 5 }} /> {name}
        </Typography>
        <Typography>
          <FaPhone style={{ marginRight: 5 }} /> {number}
        </Typography>
      </Box>

      <Stack direction="row" spacing={1}>
        <IconButton color="primary" onClick={() => setIsEditOpen(true)}>
          <EditIcon />
        </IconButton>
        <IconButton color="error" onClick={() => setIsDeleteOpen(true)}>
          <DeleteIcon />
        </IconButton>
      </Stack>

      <Dialog open={isEditOpen} onClose={() => setIsEditOpen(false)}>
        <DialogTitle>Edit Contact</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Name"
            fullWidth
            value={editForm.name}
            onChange={(e) =>
              setEditForm((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <TextField
            margin="dense"
            label="Number"
            fullWidth
            value={editForm.number}
            onChange={(e) =>
              setEditForm((prev) => ({
                ...prev,
                number: e.target.value.replace(/[^\d+]/g, ""),
              }))
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsEditOpen(false)}>Cancel</Button>
          <Button onClick={handlePatch} variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={isDeleteOpen} onClose={() => setIsDeleteOpen(false)}>
        <DialogTitle>Delete Contact</DialogTitle>
        <DialogContent>
          <Typography>Do you really want to delete this contact?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsDeleteOpen(false)}>Cancel</Button>
          <Button onClick={handleDelete} color="error" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Contact;
