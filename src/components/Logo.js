import WUFTLogo from './WUFTLogo.png';
import { useTheme } from '@mui/material/styles';

const Logo = () => {
    const theme = useTheme();
  
    return (
      <img src={WUFTLogo} alt="Wuft Logo" width="100" />
    );
  };
  
  export default Logo;