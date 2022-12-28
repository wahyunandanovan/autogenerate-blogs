import Link from 'next/link';
import React from 'react';
import styles from '../../styles/layouts/navbar.module.scss';
import { navbarMenu, NavbarMenuType } from '../../utils/data';
import { MdMenu } from 'react-icons/md';
import { UIContext } from '../../hooks/contexts/UIContext';
import { palette } from '../../utils/palette';
import { useRouter } from 'next/router';

function Navbar() {
  const { drawerWidth, setDrawerWidth } = React.useContext<any>(UIContext);

  const [textSize, setTextSize] = React.useState(16);

  const [selected, setSelected] = React.useState<string>('');

  const _openDrawer = () => setDrawerWidth('100%');

  const router = useRouter();

  return (
    <nav className={styles.wrapp}>
      <div className={styles.logo}>
        <h2>Logo</h2>
      </div>
      <div className={styles.iconmenu}>
        <MdMenu onClick={_openDrawer} color="red" size={24} />
      </div>
      <div className={styles.linkWrapp}>
        {navbarMenu.map((item: NavbarMenuType, idx: number) => {
          return (
            <div key={idx} style={{ borderBottom: router.pathname === item.path ? `2px solid ${palette.primary}` : 'none', paddingBottom: 4 }}>
              <Link
                onMouseOver={() => {
                  setSelected(item.name);
                  setTextSize(18);
                }}
                onMouseLeave={() => {
                  setSelected('');
                  setTextSize(16);
                }}
                href={item.path}
                style={{
                  fontSize: item.name === selected ? textSize : 16,
                  color: router.pathname === item.path ? palette.primary : palette.black,
                  textDecoration: 'none',
                  transition: 'all 0.5s 0s ease',
                  fontWeight: '400',
                }}
              >
                {item.name}
              </Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
