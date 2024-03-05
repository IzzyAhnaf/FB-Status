import { FaBookmark } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navTo = useNavigate();
    return (
        <>
            <div className="flex flex-col space-y-6 px-6 py-8 w-1/4">
                <div className="flex items-center space-x-2 hover:bg-gray-400 w-full"  onClick={() => navTo("/Facebook-Status/Login")}>
                    <img src="https://source.unsplash.com/random/50x50" className="w-[35px] h-[35px] rounded-full" />
                    <h3 className="text-l font-semibold">Anonim</h3>
                </div>
                <div className="flex items-center space-x-2">
                    <i style={{"backgroundImage": "url('https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png?_nc_eui2=AeF0kjAfROCkulPa80OTXiWEiXYVTRy2fzKJdhVNHLZ_MpF1Zs0pPlgwdvn-jCXRzrk4zr4GnYpF1r7neXEi55tD')", 
                        backgroundPosition: '0 -296px', 
                        backgroundSize: 'auto', 
                        width: '36px', 
                        height: '36px', 
                        backgroundRepeat: 'no-repeat', 
                        display: 'inline-block'}}></i>
                    <h3 className="text-l font-semibold">Find friends</h3>
                </div>
                <div className="flex items-center space-x-2">
                <i style={{backgroundImage: `url('https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png?_nc_eui2=AeF0kjAfROCkulPa80OTXiWEiXYVTRy2fzKJdhVNHLZ_MpF1Zs0pPlgwdvn-jCXRzrk4zr4GnYpF1r7neXEi55tD')`,
                        backgroundPosition: '0 -444px',
                        backgroundSize: 'auto',
                        width: '36px',
                        height: '36px',
                        backgroundRepeat: 'no-repeat',
                        display: 'inline-block'
                    }}
                    ></i>
                    <h3 className="text-l font-semibold">Memories</h3>
                </div>
                <div className="flex items-center space-x-2">
                <i style={{
                        backgroundImage: `url('https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png?_nc_eui2=AeF0kjAfROCkulPa80OTXiWEiXYVTRy2fzKJdhVNHLZ_MpF1Zs0pPlgwdvn-jCXRzrk4zr4GnYpF1r7neXEi55tD')`,
                        backgroundPosition: '0 -185px',
                        backgroundSize: 'auto',
                        width: '36px',
                        height: '36px',
                        backgroundRepeat: 'no-repeat',
                        display: 'inline-block'
                    }}
                    ></i>
                    <h3 className="text-l font-semibold">Saved</h3>
                </div>
                <div className="flex items-center space-x-2">
                <i  style={{
                        backgroundImage: `url('https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png?_nc_eui2=AeF0kjAfROCkulPa80OTXiWEiXYVTRy2fzKJdhVNHLZ_MpF1Zs0pPlgwdvn-jCXRzrk4zr4GnYpF1r7neXEi55tD')`,
                        backgroundPosition: '0 -37px',
                        backgroundSize: 'auto',
                        width: '36px',
                        height: '36px',
                        backgroundRepeat: 'no-repeat',
                        display: 'inline-block'
                    }}
                    ></i>
                    <h3 className="text-l font-semibold">Groups</h3>
                </div>
                <div className="flex items-center space-x-2">
                <i  style={{
                        backgroundImage: `url('https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png?_nc_eui2=AeF0kjAfROCkulPa80OTXiWEiXYVTRy2fzKJdhVNHLZ_MpF1Zs0pPlgwdvn-jCXRzrk4zr4GnYpF1r7neXEi55tD')`,
                        backgroundPosition: '0 -518px',
                        backgroundSize: 'auto',
                        width: '36px',
                        height: '36px',
                        backgroundRepeat: 'no-repeat',
                        display: 'inline-block'
                    }}
                    ></i>
                    <h3 className="text-l font-semibold">Video</h3>
                </div>
                <div className="flex items-center space-x-2">
                <i  style={{
                        backgroundImage: `url('https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png?_nc_eui2=AeF0kjAfROCkulPa80OTXiWEiXYVTRy2fzKJdhVNHLZ_MpF1Zs0pPlgwdvn-jCXRzrk4zr4GnYpF1r7neXEi55tD')`,
                        backgroundPosition: '0 -407px',
                        backgroundSize: 'auto',
                        width: '36px',
                        height: '36px',
                        backgroundRepeat: 'no-repeat',
                        display: 'inline-block'
                    }}
                    ></i>
                    <h3 className="text-l font-semibold">Marketplace</h3>
                </div>
                <div className="flex items-center space-x-2">
                <img
                    className="xz74otr"
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/eECk3ceTaHJ.png?_nc_eui2=AeHnLpcas-OtubJdX_d3dYLKi9AM8exRZGeL0Azx7FFkZ7Rg5_IiACWWhrrGZGjT0G0e_xpVpcvX1XLMRRZs5Rc4"
                    alt=""
                    width="36"
                    height="36"
                    draggable="false"
                    referrerPolicy="origin-when-cross-origin"
                    />
                    <h3 className="text-l font-semibold">Feeds</h3>
                </div>
                <div className="flex items-center space-x-2">
                <i 
                    style={{
                        backgroundImage: `url('https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/vTDQ3deAsEh.png?_nc_eui2=AeH9-Woy5qlY-JGuKB6klt2ztB6cyH067p60HpzIfTrunouoGvGrMk1Y-6RFJsn_c1sBAWv8oTvlkpLiTUynlcFU')`,
                        backgroundPosition: '0 -37px',
                        backgroundSize: 'auto',
                        width: '36px',
                        height: '36px',
                        backgroundRepeat: 'no-repeat',
                        display: 'inline-block'
                    }}
                    ></i>
                    <h3 className="text-l font-semibold">Events</h3>
                </div>
                <div className="flex items-center space-x-2">
                <img
                    className="xz74otr"
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yN/r/ATlxuj_J5ty.png?_nc_eui2=AeFQynx4R13XSiQYnf0LkFuBBVgHmttzSfIFWAea23NJ8tDULI6QhrjBl68ogTcza8WUxd9UiaB0CqAI1PWpbGp5"
                    alt=""
                    width="36"
                    height="36"
                    draggable="false"
                    referrerPolicy="origin-when-cross-origin"
                    />
                    <h3 className="text-l font-semibold">Ads Manager</h3>
                </div>
                
            </div>
        </>
    )
}

export default Sidebar;