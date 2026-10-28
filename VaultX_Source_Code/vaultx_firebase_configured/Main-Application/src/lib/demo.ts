export type Portfolio = {id:string;name:string;description:string;createdAt?:number};
export const demoPortfolios: Portfolio[] = [
{id:'demo-growth',name:'Core Index Simulation',description:'Illustrative broad-market asset allocation'},
{id:'demo-stable',name:'Balanced Scenario',description:'Comparison model with lower historical variability'},
{id:'demo-lab',name:'Research Sandbox',description:'Experiments and learning scenarios'}];
export const series = [
{d:'01 Oct',core:13840,balanced:10920},{d:'05 Oct',core:14220,balanced:11030},{d:'09 Oct',core:13950,balanced:11010},
{d:'13 Oct',core:14700,balanced:11260},{d:'17 Oct',core:15220,balanced:11330},{d:'21 Oct',core:14940,balanced:11420},
{d:'27 Oct',core:15842,balanced:11580}];
export const assets = [{ticker:'BTC',name:'Bitcoin',allocation:42,amount:'6,654.00',change:'+2.46%'},{ticker:'ETH',name:'Ethereum',allocation:28,amount:'4,435.76',change:'+1.08%'},{ticker:'SOL',name:'Solana',allocation:18,amount:'2,851.56',change:'−0.82%'},{ticker:'OTH',name:'Other assets',allocation:12,amount:'1,900.68',change:'+0.40%'}];
export const events = [{label:'Demo portfolio created',date:'Oct 24, 2026',kind:'Portfolio'},{label:'Sample data refreshed',date:'Oct 23, 2026',kind:'System'},{label:'Scenario comparison saved',date:'Oct 19, 2026',kind:'Report'}];
