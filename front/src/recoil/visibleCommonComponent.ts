import {atom} from 'recoil'

type Visible = boolean;

const visibleCommonComponent = atom<Visible>({
    key:"visible",
    default:true
})


export default visibleCommonComponent;