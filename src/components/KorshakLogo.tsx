import { asset } from '../utils/asset';

function KorshakLogo({ width = 160 }: { width?: number }) {
  return (
    <img
      src={asset('images/logo.png')}
      alt="KORSHAK"
      width={width}
      style={{ display: 'block' }}
    />
  );
}

export default KorshakLogo;
