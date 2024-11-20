import React, { useState, ChangeEvent } from "react";
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Stack,
  Checkbox,
  IconButton,
} from "@mui/material";
import Link from "next/link";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import CustomTextField from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField";

interface ValidationErrors {
  email?: string;
  password?: string;
}

interface LoginType {
  title?: string;
  subtitle?: JSX.Element | JSX.Element[];
  subtext?: JSX.Element | JSX.Element[];
  onSubmit: (email: string, password: string, rememberMe: boolean) => void;
}

const VALIDATION_RULES = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  passwordMinLength: 6,
};

const AuthLogin = ({ title, subtitle, subtext, onSubmit }: LoginType) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});

  const validateForm = (): boolean => {
    const errors: ValidationErrors = {};

    if (!VALIDATION_RULES.email.test(email)) {
      errors.email = "Зөв имэйл хаяг оруулна уу.";
    }

    if (password.length < VALIDATION_RULES.passwordMinLength) {
      errors.password = "Нууц үг хамгийн багадаа 6 тэмдэгт байна.";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(email, password, rememberMe);
    }
  };

  return (
    <>
      {title && (
        <Typography fontWeight="700" variant="h2" mb={1}>
          {title}
        </Typography>
      )}

      {subtext}

      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Box>
            <Typography
              variant="subtitle1"
              fontWeight={600}
              component="label"
              htmlFor="email"
              mb="5px"
            >
              Имэйл
            </Typography>
            <CustomTextField
              id="email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              error={!!validationErrors.email}
              helperText={validationErrors.email}
              required
            />
          </Box>

          <Box>
            <Typography
              variant="subtitle1"
              fontWeight={600}
              component="label"
              htmlFor="password"
              mb="5px"
            >
              Нууц үг
            </Typography>
            <CustomTextField
              id="password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              error={!!validationErrors.password}
              helperText={validationErrors.password}
              required
              InputProps={{
                endAdornment: (
                  <IconButton
                    edge="end"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="toggle password visibility"
                    size="large"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
              }}
            />
          </Box>

          <Stack justifyContent="space-between" direction="row" alignItems="center" my={2}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={rememberMe}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setRememberMe(e.target.checked)
                    }
                  />
                }
                label="Төхөөрөмж сануулах"
              />
            </FormGroup>
            <Typography
              component={Link}
              href="/"
              fontWeight="500"
              sx={{
                textDecoration: "none",
                color: "primary.main",
              }}
            >
              Нууц үгээ мартсан уу ?
            </Typography>
          </Stack>

          <Button color="primary" variant="contained" size="large" fullWidth type="submit">
            Нэвтрэх
          </Button>
        </Stack>
      </form>

      {subtitle}
    </>
  );
};

export default AuthLogin;
