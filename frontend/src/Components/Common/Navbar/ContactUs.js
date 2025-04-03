import { TextField, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: '#063751',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#063751',
      borderWidth: '1.5px',
    },
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#063751',
    fontWeight: 500,
  },
});

const ContactUs = () => {
  return (
    <form className="flex flex-col gap-3 py-8 w-[450px]">
      <StyledTextField
        label="Name"
        size="small"
        fullWidth
        margin="dense"
        sx={{
          '& .MuiInputBase-input': {
            py: '10px',
          },
        }}
      />
      <StyledTextField
        label="Email"
        type="email"
        size="small"
        fullWidth
        margin="dense"
        sx={{
          '& .MuiInputBase-input': {
            py: '10px',
          },
        }}
      />
      <StyledTextField
        label="Message"
        fullWidth
        multiline
        rows={4}
        margin="dense"
        sx={{
          '& .MuiInputBase-root': {
            alignItems: 'flex-start',
          },
        }}
      />
    </form>
  );
};

export default ContactUs;