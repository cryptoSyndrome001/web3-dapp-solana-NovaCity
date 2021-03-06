import {ethers} from 'ethers';

declare let window: {
  ethereum: ethers.providers.ExternalProvider;
};

const getBalance = async (address: string) => {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const rawBalance = await provider.getBalance(address);
    const balance = ethers.utils.formatEther(rawBalance.toString());
    if (!balance) {
      throw new Error('Please complete the code');
    }
    return {
      balance: balance.toString(),
    };
  } catch (error) {
    return {
      error: error.message,
    };
  }
};

export default getBalance;
