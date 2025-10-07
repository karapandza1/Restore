import { Container, Typography, Box, Button, Divider } from "@mui/material";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <Container maxWidth="md" sx={{ mt: 8, textAlign: "center" }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" gutterBottom fontWeight="bold">
          About Us
        </Typography>
        <Divider sx={{ width: "80px", mx: "auto", mb: 3, borderBottomWidth: 3 }} />
        
        {/* Prvi paragraf (Naša Priča) */}
        <Typography variant="body1" color="text.secondary" paragraph sx={{ mt: 4, mb: 3 }}>
          Welcome to RE-STORE – the place where a love for the mountains meets the highest quality ski gear. Like you, we are skiers and riders whose heartbeats sync with the rhythm of the snowy slopes. Our shop was born from a pure **passion** for winter sports and a desire to enable everyone to experience that same joy. We understand that skiing is more than just a sport; it's a way of life, which is why we meticulously select only the gear we would use ourselves. Every product in our range – from the latest skis and snowboards to premium apparel and essential accessories – is a blend of **quality, safety, and innovation**, hand-picked to ensure your next snow adventure is your best one yet.
        </Typography>

        {/* Drugi paragraf (Više od Shopa) */}
        <Typography variant="body1" color="text.secondary" paragraph>
          We are not just retailers; we are **your advisors and partners** on the path to the perfect run. With years of experience on the slopes and a deep knowledge of the industry, the RE-STORE team is here to offer you more than just a purchase. Whether you are a beginner looking for your first pair of skis or an experienced professional seeking the most advanced equipment, we provide **expert advice** and personalized support. We believe that the right gear can transform your snow experience, making it safer, more comfortable, and infinitely more fun. Thank you for being part of our story – we can't wait to see you on the mountain!
        </Typography>
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