import { Container, Typography, Box, Button, Divider } from "@mui/material";
import { Link } from "react-router-dom";

export default function ContactPage() {
  return (
    <Container maxWidth="md" sx={{ mt: 8, textAlign: "center" }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" gutterBottom fontWeight="bold">
          Contact Us
        </Typography>
        <Divider sx={{ width: "80px", mx: "auto", mb: 3, borderBottomWidth: 3 }} />

        {/* Uvodni paragraf */}
        <Typography variant="body1" color="text.secondary" paragraph sx={{ mt: 4, mb: 3 }}>
          Have a question, need advice on choosing the right gear, or just want to share your latest adventure on the slopes?  
          We’d love to hear from you! Our RE-STORE team is always ready to help you find exactly what you need for your next winter escapade.  
          Whether you contact us by email, phone, or visit our shop, you can count on friendly service and expert guidance.
        </Typography>

        {/* Kontakt informacije */}
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Get in touch
          </Typography>
          <Typography variant="body1" color="text.secondary">
            📍 Address: Dr Sime Milosevica 10, Novi Sad, Serbia
          </Typography>
          <Typography variant="body1" color="text.secondary">
            📞 Phone: +381 21/3008-002
          </Typography>
          <Typography variant="body1" color="text.secondary">
            ✉️ Email: contact@re-store.com
          </Typography>
        </Box>

        {/* Radno vreme */}
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Working Hours
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Monday – Friday: 09:00 – 18:00  
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Saturday: 10:00 – 16:00  
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Sunday: Closed  
          </Typography>
        </Box>
      </Box>

      <Box sx={{ mt: 5 }}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/"
          sx={{ borderRadius: 2, px: 4 }}
        >
          Back to home
        </Button>
      </Box>
    </Container>
  );
}
