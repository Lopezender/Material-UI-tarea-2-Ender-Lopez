import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function BasicButtonGroup() {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
  <Button>¿Te Sirve?</Button>
  <Button>¿ Son de tu agrado ?</Button>
  <Button>¿ Podemos ayudarte en algo más ?</Button>
</ButtonGroup>
  );
}