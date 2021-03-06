import tokens from '@/tokens/tokens-xdc.json';
import contracts from '@/contracts/contract-abi-xdc.json';
import xdc from '@/assets/images/networks/xdc.svg';

export default {
  name: 'XDC',
  name_long: 'XDC',
  homePage: 'https://xinfin.org/',
  blockExplorerAddr:
    'https://explorer_testnet.xinfin.network/account/[[address]]',
  blockExplorerTX: 'https://explorer_testnet.xinfin.network/tx/[[txHash]]',
  chainID: 1151,
  tokens: tokens,
  contracts: contracts,
  ens: {
    registry: '0x41ab1b6fcbb2fa9dced81acbdec13ea6315f2bf2',
    registrarTLD: 'xdc'
  },
  icon: xdc
};
