"use client"
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import styles from './header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@mui/material';


export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event:any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} href={'/'}> 
          <Image
            src={'/assets/cats.svg'}
            alt="Cats"
            width={56}
            height={44}
            priority
          />
        </Link>
        <section>
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >  
            <Icon className={styles.login} />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose} > <Link href={'/conta'}> Minha conta </Link></MenuItem>
            <MenuItem onClick={handleClose}><Link href={'/login'}> Sair </Link></MenuItem>
          </Menu>
        </section>
      </nav>
    </header>
    
  );
}