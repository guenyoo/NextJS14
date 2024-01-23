import { Quattrocento, Fanwood_Text } from 'next/font/google';
 
const quattrocento = Quattrocento({subsets: ['latin'], weight: ["400", "700"]});
const fanwood = Fanwood_Text({subsets: ['latin'], weight: ["400"]});

export { quattrocento, fanwood};