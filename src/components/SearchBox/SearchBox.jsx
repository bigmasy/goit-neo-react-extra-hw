import { useId } from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { TextField, Box } from "@mui/material";

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchId = useId();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <Box maxWidth={400} margin="auto" mt={3} mb={2}>
      <TextField
        id={searchId}
        label="Find contacts by name or number"
        variant="outlined"
        fullWidth
        onChange={handleChange}
      />
    </Box>
  );
};

export default SearchBox;
