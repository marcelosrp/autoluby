import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import FormGroup from '@mui/material/FormGroup'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import { red } from '@mui/material/colors'

import { styled } from '@mui/material/styles'
import * as S from './styles'

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(red[500]),
  backgroundColor: red[500],
  '&:hover': {
    backgroundColor: red[700]
  }
}))

export default function Login() {
  return (
    <S.MainLogin>
      <S.BoxLogin>
        <S.BoxFormLogin>
          <Typography variant="h4" component="h1" gutterBottom>
            Bem-vindo à AutoLuby
          </Typography>
          <Typography variant="subtitle2" component="h2">
            Faça o login para acessar sua conta.
          </Typography>

          <Box component="form" noValidate autoComplete="off">
            <FormGroup>
              <TextField
                name="email"
                label="Endereço de email"
                type="email"
                variant="outlined"
                size="small"
                margin="normal"
                fullWidth
              />
            </FormGroup>
            <FormGroup>
              <TextField
                name="senha"
                label="Senha"
                type="password"
                autoComplete="current-password"
                size="small"
                margin="normal"
                fullWidth
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: red[800],
                      '&.Mui-checked': {
                        color: red[600]
                      }
                    }}
                  />
                }
                label="Lembrar minha senha"
                sx={{
                  color: red[800],
                  '&.Mui-checked': {
                    color: red[600]
                  }
                }}
              />
            </FormGroup>
            <FormGroup>
              <ColorButton variant="contained">Entrar</ColorButton>
            </FormGroup>
          </Box>
        </S.BoxFormLogin>
      </S.BoxLogin>
      <S.BoxBg />
    </S.MainLogin>
  )
}
