<template lang="html">
  <div class="address-container">
    <div class="currency-container">
      <img
        :src="require(`@/assets/images/currency/${lowerCaseCurrency}.svg`)"
      />
      <p>
        <span class="currency-amt">
          {{ direction === 'from' ? '-' : '+' }}
          {{ tokenTransferVal !== '' ? tokenTransferVal : converter(value) }}
        </span>
        <span class="currency-type"
          >{{ tokenSymbol !== '' ? tokenSymbol : currency.toUpperCase() }}
        </span>
      </p>
    </div>
    <div class="identicon-container">
      <p>{{ direction | capitalize }} Address</p>
    </div>
    <div class="address">{{ checksumAddress.replace('0x', 'XDC') }}</div>
  </div>
</template>

<script>
import { isAddress, toChecksumAddress } from '@/helpers/addressUtils';
import web3 from 'web3';
export default {
  props: {
    address: {
      type: String,
      default: ''
    },
    direction: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    currency: {
      type: String,
      default: 'xdc'
    },
    tokenTransferTo: {
      type: String,
      default: ''
    },
    tokenTransferVal: {
      type: String,
      default: ''
    },
    tokenSymbol: {
      type: String,
      default: ''
    }
  },
  computed: {
    lowerCaseCurrency() {
      return this.currency.toLowerCase();
    },
    checksumAddress() {
      if (isAddress(this.tokenTransferTo))
        return toChecksumAddress(this.tokenTransferTo);
      if (isAddress(this.address)) return toChecksumAddress(this.address);
      return '';
    }
  },
  methods: {
    converter(num) {
      return web3.utils.fromWei(num.toString(), 'ether');
    }
  }
};
</script>

<style lang="scss">
@import 'AddressBlock.scss';
</style>
