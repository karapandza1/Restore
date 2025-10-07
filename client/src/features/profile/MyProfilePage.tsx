import { useState, useEffect } from "react";
import { Box, Button, Card, CardContent, CardHeader, Container, Grid, TextField, Divider } from "@mui/material";
import { useUserInfoQuery, useFetchAddressQuery, useUpdateUserAddressMutation } from "../../features/account/accountApi";
import type { Address } from "../../app/models/user";

export default function MyProfilePage() {
  const { data: userInfo, isLoading: loadingUser } = useUserInfoQuery();
  const { data: addressData, isLoading: loadingAddress } = useFetchAddressQuery();
  const [updateAddress, { isLoading: updating }] = useUpdateUserAddressMutation();

  const [profileData, setProfileData] = useState<Address>({
    name: "",
    line1: "",
    line2: "",
    city: "",
    state: "",
    postal_code: "",
    country: ""
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (addressData) {
      setProfileData(addressData);
    }
  }, [addressData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      await updateAddress(profileData).unwrap();
      setIsEditing(false);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile.");
    }
  };

  if (loadingUser || loadingAddress) return <Container>Loading...</Container>;

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Card sx={{ p: 2, borderRadius: 3, boxShadow: 3 }}>
        <CardHeader
          title="My Profile"
          subheader="View and edit your personal information"
          sx={{ textAlign: "center", mb: 1 }}
        />
        <Divider sx={{ mb: 2 }} />
        <CardContent>
          <Box component="form" noValidate autoComplete="off">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  value={userInfo?.email || ""}
                  disabled
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Full Name"
                  name="name"
                  value={profileData.name}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Address Line 1"
                  name="line1"
                  value={profileData.line1}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Address Line 2"
                  name="line2"
                  value={profileData.line2 || ""}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="City"
                  name="city"
                  value={profileData.city}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="State"
                  name="state"
                  value={profileData.state}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Postal Code"
                  name="postal_code"
                  value={profileData.postal_code}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Country"
                  name="country"
                  value={profileData.country}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </Grid>
            </Grid>
            <Box sx={{ mt: 4, textAlign: "center" }}>
              {!isEditing ? (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => setIsEditing(true)}
                >
                  Edit Profile
                </Button>
              ) : (
                <>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={handleSave}
                    sx={{ mr: 2 }}
                    disabled={updating}
                  >
                    Save Changes
                  </Button>
                  <Button
                    variant="outlined"
                    color="inherit"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </Button>
                </>
              )}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
