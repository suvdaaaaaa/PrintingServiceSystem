import { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Stack,
  Card,
  CardContent,
  Container,
} from '@mui/material';

interface AuthRegisterProps {
  onRegister: (data: FormData) => Promise<void>;
  loading?: boolean;
  title?: string;
  subtitle?: React.ReactNode;
  subtext?: React.ReactNode;
}

interface FormData {
  fname: string;
  email: string;
  phone: string;
  password: string;
  lname: string;
  address: string;
  role: number;

}

interface ValidationErrors {
  fname?: string;
  email?: string;
  phone?: string;
  password?: string;
}

const VALIDATION_RULES = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^\d{8}$/,
  passwordMinLength: 6,
};

const AuthRegister: React.FC<AuthRegisterProps> = ({
  onRegister,
  loading = false,
  title,
  subtitle,
  subtext,
}) => {
  const [formData, setFormData] = useState<FormData>({
    fname: '',
    email: '',
    phone: '',
    password: '',
    lname: '',
    address: '',
    role: 2,
  });

  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});

  const validateForm = () => {
    const errors: ValidationErrors = {};

    if (!formData.fname.trim()) {
      errors.fname = "Нэрээ оруулна уу";
    }

    if (!VALIDATION_RULES.email.test(formData.email)) {
      errors.email = "Зөв имэйл хаяг оруулна уу";
    }

    if (!VALIDATION_RULES.phone.test(formData.phone)) {
      errors.phone = "Утасны дугаар 8 оронтой байна";
    }

    if (formData.password.length < VALIDATION_RULES.passwordMinLength) {
      errors.password = "Нууц үг хамгийн багадаа 6 тэмдэгт байна";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    setValidationErrors(prev => ({ ...prev, [field]: undefined }));
  };

const handleSubmit = async () => {
  if (!validateForm()) return;

  await onRegister(formData);
};

  const formFields = [
    { label: "Нэр", id: "fname", type: "text" },
    { label: "Имэйл", id: "email", type: "email" },
    { label: "Утас", id: "phone", type: "tel" },
    { label: "Нууц үг", id: "password", type: "password" }
  ];

  return (
        <Box sx={{ width: '100%', maxWidth: 'sm', mx: 'auto' }}>
          {title && (
            <Typography 
              variant="h4" 
              component="h1" 
              align="center" 
              gutterBottom 
              fontWeight="bold"
            >
              {title}
            </Typography>
          )}

          {subtext && (
            <Typography 
              variant="subtitle1" 
              align="center" 
              color="textSecondary" 
              sx={{ mb: 3 }}
            >
              {subtext}
            </Typography>
          )}

          <Stack spacing={3}>
            {formFields.map(({ label, id, type }) => (
              <TextField
                key={id}
                fullWidth
                label={label}
                type={type}
                value={formData[id as keyof FormData]}
                onChange={handleChange(id as keyof FormData)}
                error={!!validationErrors[id as keyof ValidationErrors]}
                helperText={validationErrors[id as keyof ValidationErrors]}
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': {
                      borderColor: 'primary.main',
                    },
                  },
                }}
              />
            ))}

            <Button
              variant="contained"
              fullWidth
              size="large"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Бүртгүүлж байна..." : "Бүртгүүлэх"}
            </Button>
          </Stack>

          {subtitle && (
            <Box sx={{ mt: 3, textAlign: 'center' }}>
              {subtitle}
            </Box>
          )}
        </Box>
  );
};

export default AuthRegister;